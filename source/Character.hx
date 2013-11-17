package ;
import flash.geom.Rectangle;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.util.FlxMath;
import flixel.util.FlxRect;
import flixel.FlxG;
import haxe.Json;
import haxe.io.Path;
import openfl.Assets;
/**
 * ...
 * @author ...
 */
class Character extends FlxSprite
{
	var name:String;
	public var controllable:Bool = true;
	public var size:Float = .5;
	
	

	public function new(Name:String, X:Float = 0, Y:Float = 0,  ?JsonPath:String, ?SimpleGraphic:Dynamic)
	{
		super(X, Y, SimpleGraphic);
		this.facing = FlxObject.LEFT;
		//this.loadGraphic("assets/images/skeleton_3.png", true, false, 64, 64);
		
		//this.height = 50*size;
		//this.width = 32 * size;
		
		parseJson(JsonPath);
		
		//this.offset.y = this.height*2;
		//this.scale.set(size, size);
		//this.centerOffsets(true);
		/*anims		
		animation.add("walking_up", [105, 106, 107, 108, 109, 110, 111, 112], 15, true);
		animation.add("walking_down", [130, 131, 132, 133, 134, 135, 136, 137], 15, true);
		animation.add("walking_left", [117, 118, 119, 120, 121, 122, 123, 124], 15, true);
		animation.add("walking_right", [143, 144, 145, 146, 147, 148, 149, 150], 15, true);
		animation.add("idle_up", [0], 1, true);
		animation.add("idle_down", [26], 1, true);
		animation.add("idle_left", [13], 1, true);
		animation.add("idle_right", [39], 1, true);
		*/

		//temp
		//this.maxVelocity.x = 80;
		//this.maxVelocity.y = 80;
		this.drag.x = this.maxVelocity.x*4;
		this.drag.y = this.maxVelocity.y * 4;
	}

	override public function update():Void 
	{
		if (controllable) {
			this.acceleration.x = 0;
			this.acceleration.y = 0;
			if (FlxG.keyboard.anyPressed(["RIGHT", "D"])) 
			{
				this.acceleration.x = this.drag.x;
				this.facing = FlxObject.RIGHT;
			} 
			else if (FlxG.keyboard.anyPressed(["LEFT", "A"])) 
			{
				this.acceleration.x = -this.drag.x;
				this.facing = FlxObject.LEFT;
			}
			
			if (FlxG.keyboard.anyPressed(["UP", "W"])) {
				this.acceleration.y = -this.drag.y;
				this.facing = FlxObject.UP;
			} else if (FlxG.keyboard.anyPressed(["DOWN", "S"])) {
				this.acceleration.y = this.drag.y;
				this.facing = FlxObject.DOWN;
			}
			
		}
		resolveAnimation();
		super.update();
	}
	
	private function resolveAnimation() {
		var anim:String = "idle_";
		
		if (velocity.x != 0 || velocity.y != 0) 
		{
			anim = "walking_";
			if (velocity.x > 0) {
				facing = FlxObject.RIGHT;
			} else if (velocity.x < 0) {
				facing = FlxObject.LEFT;
			}
			if (velocity.y > 0) {
				facing = FlxObject.DOWN;
			} else if (velocity.y < 0) {
				facing = FlxObject.UP;
			}			
		}
		
		switch(facing)
		{
			case FlxObject.UP:
				anim += "up";
				
			case FlxObject.DOWN:
				anim += "down";
				
			case FlxObject.LEFT:
				anim += "left";
				
			case FlxObject.RIGHT:
				anim += "right";
				
			default:
				anim += "down";
		}			
		
		
		if (animation.name != anim) 
		{
			animation.play(anim);
		}
	}
	
	private function parseJson(file:String) {
		var filePath:Path = new Path(file);
		var fileStr:String = Assets.getText(file);
		if (fileStr == null) {
			throw 'The file {$file} doesn\'t exists!';
		}
		
		var json = Json.parse(fileStr);
		
		// sprite
		var texture:String = filePath.dir + "/" + json.sprite.texture;
		var frameWidth:Int = Std.int(json.sprite.framewidth);
		var frameHeight:Int = Std.int(json.sprite.frameheight);
		this.loadGraphic(texture, true, false, frameWidth, frameHeight);
		
		// velocity
		var maxX:Float = json.velocity.max_x;
		var maxY:Float = json.velocity.max_y;
		this.maxVelocity.set(maxX, maxY);
		
		// collision
		var x:Float = json.collision.x;
		var y:Float = json.collision.y;
		var w:Float = json.collision.width;
		var h:Float = json.collision.height;
		this.offset.set(x, y);
		this.width = w;
		this.height = h;
		
		// collision_map
		//x = json.collision_map.x;
		//y = json.collision_map.y;
		//w = json.collision_map.width;
		//h = json.collision_map.height;
		//collisionMap = new FlxRect(x, y, w, h);

		// animations
		var v_def:Int = json.animations.velocities.def;
		var v_idl:Int = json.animations.velocities.idle;
		var v_wal:Int = json.animations.velocities.walking;
		var v_run:Int = json.animations.velocities.running;
		
		var tmp:Int;
		for (dir in Reflect.fields(json.animations.frames)) {
			var d = Reflect.field(json.animations.frames, dir);
			for (type in Reflect.fields(d)) {
				var t = Reflect.field(d, type);
				switch(type) {
					case "def":
						tmp = v_def;
						
					case "idle":
						tmp = v_idl;
						
					case "walking":
						tmp = v_wal;
						
					case "running":
						tmp = v_run;
						
					default:
						tmp = v_def;
				}
				animation.add(type + "_" + dir, t, tmp, true);
			}
			
		}
		
	}
	
}