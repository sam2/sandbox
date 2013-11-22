package ;
import flixel.FlxG;
import flixel.tile.FlxTilemap;
import flixel.util.FlxPath;
import flixel.util.FlxPoint;
import flixel.util.FlxMath;
import flixel.util.FlxVector;
import flixel.util.FlxTimer;
/**
 * ...
 * @author ...
 */

enum EStates
{
	idle;
	chasing;
	searching;
	returning;
	attacking;
}
 
class Enemy extends Character
{
	var player:Player;
	
	var sightRange:Float = 100;
	var attackRange:Float = 64;
	var moveSpeed:Float = 50;
	var walkSpeed:Float = 20;
	var leashDistance:Float = 200;
	public var startPos:FlxPoint;
	var level:FlxTilemap;
	
	

	var state:EStates;
	
	//pathfinding
	var path:FlxPath;
	public var destination:FlxPoint;
	
	public function new(Name:String, X:Float=0, Y:Float=0, JsonPath:String, p:Player, lvl:FlxTilemap, ?SimpleGraphic:Dynamic) 
	{
		super(Name, X, Y, JsonPath, SimpleGraphic);
		startPos = new FlxPoint(X, Y);
		player = p;
		level = lvl;
		state = EStates.idle;
		
		path = FlxPath.recycle();
		path.usePooling = false;
		this.health = 10;
	}
	
	public var stunned:Bool = false;
	override public function update():Void 
	{
		
		if (!stunned)
		{
			switch(state)
			{
				case idle:
					wander();
				case chasing:
					chase();
				case searching:
					search();
				case returning:
					goHome();
				case attacking:
					
			}
		}
		super.update();
	}
	
	private function wander():Void
	{
		//this.color = 0xFFFFFF;
		if (FlxMath.distanceBetween(this, player) < sightRange)
		{
			destination = null;
			state = EStates.chasing;
			
			return;
		}
		
		if (destination == null || FlxMath.distanceToPoint(this, destination) < 32 || (this.velocity.x < 5 && this.velocity.y < 5))
		{
			destination = new FlxPoint( ((Math.random() * 2) - 1) * leashDistance + startPos.x, ((Math.random() * 2) - 1) * leashDistance + startPos.y);
		}
		var v:FlxVector = new FlxVector(destination.x - this.x, destination.y - this.y);
		v.normalize();
		this.velocity.x = v.x*walkSpeed;
		this.velocity.y = v.y*walkSpeed;		
	}
	
	private function chase():Void
	{
		//this.color = 0xFF0000;
		
		if (level.ray(this.getMidpoint(), player.getMidpoint()))
		{
			var v:FlxVector = new FlxVector(player.x - this.x, player.y - this.y);
			v.normalize();
			this.acceleration.x = v.x*this.drag.x;
			this.acceleration.y = v.y*this.drag.y;
		}
		else
		{
			destination = null;
			state = EStates.searching;			
			return;
		}
	}
	
	private function search():Void
	{
		if (destination == null)
		{
			destination = player.getMidpoint();
			var pathPoints:Array<FlxPoint> = level.findPath(new FlxPoint(this.x, this.y), destination);
			if (pathPoints != null)
			{
					path.run(this, pathPoints, moveSpeed);
			}
		}
		if (path.finished)
		{
			destination = null;
			state = EStates.returning;
		}
		if (level.ray(this.getMidpoint(), player.getMidpoint())&& FlxMath.distanceBetween(this, player) < sightRange)
		{
			destination = null;
			state = EStates.chasing;
		}
		
	}
	
	private function goHome():Void
	{
		//this.color = 0xafafaf;
		if (destination == null)
		{
			destination = startPos;
			var pathPoints:Array<FlxPoint> = level.findPath(new FlxPoint(this.x, this.y), destination);
			if (pathPoints != null)
			{
					path.run(this, pathPoints, moveSpeed);
			}
		}
		if (path.finished)
		{
			destination = null;
			state = EStates.idle;
		}		
	}
	
	public function stun(duration:Float):Void
	{
		stunned = true;
		this.color = 0xFF0000;
		path.abort();
		destination = null;
		FlxTimer.start(duration, unstun);
	}
	
	public function unstun(Timer:FlxTimer):Void
	{
		this.color = 0xFFFFFF;
		stunned = false;
	}
	
}