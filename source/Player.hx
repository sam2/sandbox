package ;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.FlxG;

/**
 * ...
 * @author ...
 */
class Player extends Character
{
	public var controllable:Bool;
	public function new(Name:String, X:Float=0, Y:Float=0, ?JsonPath:String, ?SimpleGraphic:Dynamic) 
	{
		super(Name, X, Y, JsonPath, SimpleGraphic);
		controllable = true;
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
		super.update();
	}
	
}