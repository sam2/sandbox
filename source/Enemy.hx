package ;
import flixel.FlxG;
import flixel.tile.FlxTilemap;
import flixel.util.FlxPath;
import flixel.util.FlxPoint;
import flixel.util.FlxMath;
import flixel.util.FlxVector;
/**
 * ...
 * @author ...
 */

enum EStates
{
	idle;
	chasing;
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
	}
	
	override public function update():Void 
	{
		switch(state)
		{
			case idle:
				wander();
			case chasing:
				chase();
			case returning:
				goHome();
			case attacking:
				
		}
		super.update();
	}
	
	private function wander():Void
	{
		this.color = 0xFFFFFF;
		if (FlxMath.distanceBetween(this, player) < sightRange)
		{
			path.abort();
			destination = null;
			state = EStates.chasing;
			
			return;
		}
		
		if (destination == null || FlxMath.distanceToPoint(this, destination) < 32)
		{
			destination = new FlxPoint( ((Math.random() * 2) - 1) * leashDistance + startPos.x, ((Math.random() * 2) - 1) * leashDistance + startPos.y);
		}
		var v:FlxVector = new FlxVector(destination.x - this.x, destination.y - this.y);
		v.normalize();
		this.velocity.x = v.x*walkSpeed;
		this.velocity.y = v.y*walkSpeed;
		
		/*
		if ((destination == null || path.finished))
		{
			destination = new FlxPoint( ((Math.random() * 2) - 1) * leashDistance + startPos.x, ((Math.random() * 2) - 1) * leashDistance + startPos.y);
			var pathPoints:Array<FlxPoint> = level.findPath(new FlxPoint(this.x, this.y), destination);
			if (pathPoints != null)
			{
				path.run(this, pathPoints, walkspeed);
			}
		}
		*/
		
	}
	
	private function chase():Void
	{
		this.color = 0xFF0000;
		
		if (level.ray(this.getMidpoint(), player.getMidpoint()))
		{
			path.abort();
			
			var v:FlxVector = new FlxVector(player.x - this.x, player.y - this.y);
			v.normalize();
			this.velocity.x = v.x*moveSpeed;
			this.velocity.y = v.y*moveSpeed;
		}
		else
		{
			path.abort();
			destination = null;
			state = EStates.returning;
			
			return;
		}
	}
	
	private function goHome():Void
	{
		this.color = 0xafafaf;
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
			path.abort();
			state = EStates.idle;
		}
		
	}
	
}