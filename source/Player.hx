package ;
import flixel.FlxObject;
import flixel.FlxSprite;
import flixel.FlxG;
import flixel.util.FlxPoint;
import flixel.util.FlxTimer;
import flixel.util.FlxVector;

/**
 * ...
 * @author ...
 */
class Player extends Character
{
	public var controllable:Bool;
	public var attk:FlxSprite;
	var attkPos:FlxPoint;
	public function new(Name:String, X:Float=0, Y:Float=0, ?JsonPath:String, ?SimpleGraphic:Dynamic) 
	{
		super(Name, X, Y, JsonPath, SimpleGraphic);
		attk = new FlxSprite(this.x, this.y);
		attk.loadGraphic("assets/images/cut64.png", true, true, 64, 64);
		var animationArray:Array<Int> = [0, 1, 2, 3, 4, 5];
		attk.animation.add("attack", animationArray, 20, false);
		FlxG.state.add(attk);
		attk.kill();
		controllable = true;
		attkPos = new FlxPoint(0, 0);
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
				attk.facing = FlxObject.RIGHT;
				attkPos = new FlxPoint(16,-32);
			} 
			else if (FlxG.keyboard.anyPressed(["LEFT", "A"])) 
			{
				this.acceleration.x = -this.drag.x;
				this.facing = FlxObject.LEFT;
				attk.facing = FlxObject.LEFT;
				attkPos = new FlxPoint(-64, -32);
			}
			
			if (FlxG.keyboard.anyPressed(["UP", "W"])) 
			{
				this.acceleration.y = -this.drag.y;
				this.facing = FlxObject.UP;
				attk.facing = FlxObject.UP;
				attkPos = new FlxPoint(-16,-48);
			}
			else if (FlxG.keyboard.anyPressed(["DOWN", "S"])) 
			{
				this.acceleration.y = this.drag.y;
				this.facing = FlxObject.DOWN;
				attk.facing = FlxObject.DOWN;
				attkPos = new FlxPoint(-16, 16);
			}
			if (FlxG.keyboard.justPressed("X"))
			{
				attack();
			}
			
		}
		attk.x = attkPos.x + this.x;
		attk.y = attkPos.y + this.y;
		super.update();
		
	}
	
	var attackTimer:FlxTimer;
	var attackDone:Bool = true;
	public function attack():Void
	{
		if (attackDone)
		{
			attackDone = false;
			attk.reset(attkPos.x, attkPos.y);
			FlxTimer.start(attk.animation.frames/20, attackFinished);
			attk.animation.play("attack", true);
		}
	}
	
	public function attackFinished(Timer:FlxTimer):Void
	{
		attackDone = true;
		attk.kill();
	}
	
	public function attackHit(attackk:FlxSprite, enemy:Enemy):Void
	{		
		if (attk.overlaps(enemy)&& !enemy.stunned)
		{
			var knockBackVector:FlxVector = new FlxVector(enemy.x - this.x, enemy.y - this.y);
			knockBackVector.normalize();
			enemy.stun(.5);
			enemy.velocity.x = knockBackVector.x * 1000;
			enemy.velocity.y = knockBackVector.y * 1000;
			enemy.hurt(2);
		}
	}
	
}