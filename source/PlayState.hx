package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
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
	public var player:Character;
	 
	override public function create():Void
	{
		// Set a background color
		FlxG.cameras.bgColor = 0xff3A1F00;
 
		var data:String = FlxCaveGenerator.generateCaveString(300, 200, 15, 0.45);
		level = new FlxTilemap();
		level.loadMap(data, FlxTilemap.imgAuto, 0, 0, FlxTilemap.AUTO);
		add(level);
		

		player = new Character("Sam", FlxG.width/2, FlxG.height/2, "assets/images/actor1.json");
		add(player);
	
		FlxG.camera.follow(player);
		
		//FlxG.camera.zoom = 1;
		FlxG.camera.bounds = level.getBounds();
		FlxG.worldBounds.copyFrom(level.getBounds());
		// Show the mouse (in case it hasn't been disabled)
		#if !FLX_NO_MOUSE
		FlxG.mouse.show();
		#end
		
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
		super.update();
	}	
}