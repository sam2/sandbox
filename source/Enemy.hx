package ;
import flixel.FlxG;
import flixel.tile.FlxTilemap;
import flixel.util.FlxPath;
import flixel.util.FlxPoint;
/**
 * ...
 * @author ...
 */

enum EStates
{
	idle;
	chasing;
	attacking;
}
 
class Enemy extends Character
{
	var player:Player;
	
	var sightRange:Float;
	var attackRange:Float;
	var moveSpeed:Float = 10;
	var wanderDistance:Float = 200;
	public var startPos:FlxPoint;
	var level:FlxTilemap;
	
	

	var state:EStates;
	
	//pathfinding
	var path:FlxPath;
	var destination:FlxPoint;
	
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
			
			case attacking:
				
		}
		super.update();
	}
	
	private function wander():Void
	{
		if ((destination == null || path.finished) && this.onScreen())
		{
			destination = new FlxPoint( ((Math.random() * 2) - 1) * wanderDistance + startPos.x, ((Math.random() * 2) - 1) * wanderDistance + startPos.y);
			var pathPoints:Array<FlxPoint> = level.findPath(new FlxPoint(this.x, this.y), destination);
			if (pathPoints != null)
			{
				path.run(this, pathPoints, moveSpeed);
			}
		}
	}
	
}