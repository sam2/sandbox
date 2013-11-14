package ;
import flash.geom.Rectangle;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.util.FlxMath;
import flixel.util.FlxRect;
import flixel.FlxG;
/**
 * ...
 * @author ...
 */
class Player extends FlxSprite
{
	var name:String;
	public var controllable:Bool = true;

	public function new(Name:String, X:Float = 0, Y:Float = 0, ?SimpleGraphic:Dynamic)
	{
		super(X, Y, SimpleGraphic);
		this.name = Name;

		this.facing = FlxObject.DOWN;
		this.makeGraphic(10,10,0xffaa1111);

		//temp
		this.maxVelocity.x = 80;
		this.maxVelocity.y = 80;
		this.drag.x = this.maxVelocity.x*4;
		this.drag.y = this.maxVelocity.y*4;
	}

	override public function update():Void 
	{
		if (controllable) {
			this.acceleration.x = 0;
			this.acceleration.y = 0;
			if (FlxG.keyboard.anyPressed(["RIGHT", "D"])) {
				this.acceleration.x = this.drag.x;
				this.facing = FlxObject.RIGHT;
			} else if (FlxG.keyboard.anyPressed(["LEFT", "A"])) {
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
		super.update();
	}
	
}