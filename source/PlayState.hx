package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.group.FlxGroup;
import flixel.group.FlxSpriteGroup;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.tile.FlxTilemap;
import flixel.addons.tile.FlxCaveGenerator;
import flixel.util.FlxRect;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	public var level:FlxTilemap;
	public var player:Player;
	public var enemy:Enemy;
	public var enemies:FlxSpriteGroup;
	
	override public function create():Void
	{
		// Set a background color
		FlxG.cameras.bgColor = 0xff3A1F00;
		
		var data:String = FlxCaveGenerator.generateCaveString(300, 200, 10, 0.40);
		level = new FlxTilemap();
		level.loadMap(data, FlxTilemap.imgAuto, 0, 0, FlxTilemap.AUTO);
		
		
		
		
		player = new Player("Sam", FlxG.width / 2, FlxG.height / 2, "assets/images/actor2.json");
		
		//add enemies randomly
		enemies = new FlxSpriteGroup();
			
		placeSprites(enemies, 50);		
		
		add(level);
		add(enemies);
		add(player);
		
		var bounds:FlxRect;
		FlxG.camera.follow(player);
		bounds = level.getBounds();
		FlxG.camera.setBounds(bounds.x, bounds.y, bounds.width, bounds.height, true);
		FlxG.worldBounds.copyFrom(level.getBounds());
		
		
		
		/* Show the mouse (in case it hasn't been disabled)
		#if !FLX_NO_MOUSE
		FlxG.mouse.show();
		#end
		*/
		
		super.create();
	}
	
	/**
	 * Function that is called when this state is destroyed - you might want to 
	 * consider setting all objects this state uses to null to help garbage collection.
	 */
	override public function destroy():Void
	{
		super.destroy();
	}

	/**
	 * Function that is called once every frame.
	 */
	override public function update():Void
	{
		
		FlxG.collide(player, level);
		FlxG.collide(enemies, enemies);
		FlxG.collide(enemies, level);
		if(player.attk.alive)
			FlxG.overlap(player.attk, enemies, player.attackHit);
		super.update();
	}
	
	private function onPlayerHitEnemy(player:Character, enemy:Enemy):Void
	{
		
		//
	}
	
	public function placeSprites(sprites:FlxSpriteGroup, num:Int):Void
	{
		for (i in 0...num)
		{
			var x:Float = Math.random()*(level.width);
			var y:Float = Math.random()*(level.height);
			var enemy:Enemy = new Enemy("skeleton", x, y, "assets/images/skeleton.json", player, level);
			sprites.add( enemy  );
			while (enemy.overlaps(level)) {
				enemy.x = Math.random()*(level.width);
				enemy.y = Math.random()*(level.height);
				enemy.startPos.x = enemy.x;
				enemy.startPos.y = enemy.y;
				enemy.destination = null;				
			}
				
			
		}
	}
	
	
	
	//FPSSTUFF
	
}