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
	public var name:String;	

	public function new(Name:String, X:Float = 0, Y:Float = 0,  ?JsonPath:String, ?SimpleGraphic:Dynamic)
	{
		super(X, Y, SimpleGraphic);
		
		this.facing = FlxObject.LEFT;
		
		parseJson(JsonPath);
		
		this.drag.x = this.maxVelocity.x * 4;
		this.drag.y = this.maxVelocity.y * 4;
	}

	override public function update():Void 
	{
		
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