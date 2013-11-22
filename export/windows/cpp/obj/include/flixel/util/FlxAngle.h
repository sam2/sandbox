#ifndef INCLUDED_flixel_util_FlxAngle
#define INCLUDED_flixel_util_FlxAngle

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS4(flixel,system,input,touch,FlxTouch)
HX_DECLARE_CLASS2(flixel,util,FlxAngle)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
namespace flixel{
namespace util{


class HXCPP_CLASS_ATTRIBUTES  FlxAngle_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef FlxAngle_obj OBJ_;
		FlxAngle_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< FlxAngle_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxAngle_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxAngle"); }

		static Array< Float > cosTable;
		static Array< Float > sinTable;
		static Float TO_DEG;
		static Float TO_RAD;
		static ::flixel::util::FlxPoint rotatePoint( Float X,Float Y,Float PivotX,Float PivotY,Float Angle,::flixel::util::FlxPoint point);
		static Dynamic rotatePoint_dyn();

		static Float getAngle( ::flixel::util::FlxPoint Point1,::flixel::util::FlxPoint Point2);
		static Dynamic getAngle_dyn();

		static Void sinCosGenerator( int length,hx::Null< Float >  sinAmplitude,hx::Null< Float >  cosAmplitude,hx::Null< Float >  frequency);
		static Dynamic sinCosGenerator_dyn();

		static int wrapAngle( Float angle);
		static Dynamic wrapAngle_dyn();

		static int angleLimit( int angle,int min,int max);
		static Dynamic angleLimit_dyn();

		static Float asDegrees( Float radians);
		static Dynamic asDegrees_dyn();

		static Float asRadians( Float degrees);
		static Dynamic asRadians_dyn();

		static Float angleBetween( ::flixel::FlxSprite SpriteA,::flixel::FlxSprite SpriteB,hx::Null< bool >  AsDegrees);
		static Dynamic angleBetween_dyn();

		static Float angleBetweenPoint( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Target,hx::Null< bool >  AsDegrees);
		static Dynamic angleBetweenPoint_dyn();

		static Float angleBetweenMouse( ::flixel::FlxObject Object,hx::Null< bool >  AsDegrees);
		static Dynamic angleBetweenMouse_dyn();

		static Float angleBetweenTouch( ::flixel::FlxObject Object,::flixel::system::input::touch::FlxTouch Touch,hx::Null< bool >  AsDegrees);
		static Dynamic angleBetweenTouch_dyn();

};

} // end namespace flixel
} // end namespace util

#endif /* INCLUDED_flixel_util_FlxAngle */ 
