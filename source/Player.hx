package ;

/**
 * ...
 * @author ...
 */
class Player extends FlxExtendedSprite
{
	var name:String;
	public function new(Name:String, X:Float = 0, Y:Float = 0, ?SimpleGraphic:Dynamic) {
	{
		super(X, Y, SimpleGraphic);
		this.name = Name;
	}
	
}