#ifndef INCLUDED_flixel_util_FlxSpriteUtil
#define INCLUDED_flixel_util_FlxSpriteUtil

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,DisplayObjectContainer)
HX_DECLARE_CLASS2(flash,display,Graphics)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,InteractiveObject)
HX_DECLARE_CLASS2(flash,display,Sprite)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,effects,FlxFlicker)
HX_DECLARE_CLASS2(flixel,util,FlxSpriteUtil)
namespace flixel{
namespace util{


class HXCPP_CLASS_ATTRIBUTES  FlxSpriteUtil_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef FlxSpriteUtil_obj OBJ_;
		FlxSpriteUtil_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< FlxSpriteUtil_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxSpriteUtil_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxSpriteUtil"); }

		static ::flash::display::Sprite flashGfxSprite;
		static ::flash::display::Graphics flashGfx;
		static ::flixel::FlxSprite alphaMask( Dynamic source,Dynamic mask,::flixel::FlxSprite output);
		static Dynamic alphaMask_dyn();

		static ::flixel::FlxSprite alphaMaskFlxSprite( ::flixel::FlxSprite sprite,::flixel::FlxSprite mask,::flixel::FlxSprite output);
		static Dynamic alphaMaskFlxSprite_dyn();

		static Void screenWrap( ::flixel::FlxSprite sprite,hx::Null< bool >  Left,hx::Null< bool >  Right,hx::Null< bool >  Top,hx::Null< bool >  Bottom);
		static Dynamic screenWrap_dyn();

		static Void space( Array< ::Dynamic > sprites,int startX,int startY,hx::Null< int >  horizontalSpacing,hx::Null< int >  verticalSpacing,hx::Null< bool >  spaceFromBounds);
		static Dynamic space_dyn();

		static ::flixel::FlxSprite screenCenter( ::flixel::FlxSprite sprite,hx::Null< bool >  xAxis,hx::Null< bool >  yAxis);
		static Dynamic screenCenter_dyn();

		static Void drawLine( ::flixel::FlxSprite sprite,Float StartX,Float StartY,Float EndX,Float EndY,int Color,hx::Null< int >  Thickness);
		static Dynamic drawLine_dyn();

		static Void drawRect( ::flixel::FlxSprite sprite,Float X,Float Y,Float Width,Float Height,int Color);
		static Dynamic drawRect_dyn();

		static Void drawRoundRect( ::flixel::FlxSprite sprite,Float X,Float Y,Float Width,Float Height,Float EllipseWidth,Float EllipseHeight,int Color);
		static Dynamic drawRoundRect_dyn();

		static Void drawCircle( ::flixel::FlxSprite sprite,Float X,Float Y,Float Radius,int Color);
		static Dynamic drawCircle_dyn();

		static Void drawEllipse( ::flixel::FlxSprite sprite,Float X,Float Y,Float Width,Float Height,int Color);
		static Dynamic drawEllipse_dyn();

		static Void updateSpriteGraphic( ::flixel::FlxSprite sprite);
		static Dynamic updateSpriteGraphic_dyn();

		static Void fill( ::flixel::FlxSprite sprite,int Color);
		static Dynamic fill_dyn();

		static Void flicker( ::flixel::FlxObject Object,hx::Null< Float >  Duration,hx::Null< Float >  Interval,hx::Null< bool >  EndVisibility,hx::Null< bool >  ForceRestart,Dynamic CompletionCallback,Dynamic ProgressCallback);
		static Dynamic flicker_dyn();

		static bool isFlickering( ::flixel::FlxObject Object);
		static Dynamic isFlickering_dyn();

		static Void stopFlickering( ::flixel::FlxObject Object);
		static Dynamic stopFlickering_dyn();

};

} // end namespace flixel
} // end namespace util

#endif /* INCLUDED_flixel_util_FlxSpriteUtil */ 
