#ifndef INCLUDED_flixel_system_FlxAssets
#define INCLUDED_flixel_system_FlxAssets

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,display,BitmapData)
HX_DECLARE_CLASS2(flash,display,Graphics)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flixel,system,FlxAssets)
namespace flixel{
namespace system{


class HXCPP_CLASS_ATTRIBUTES  FlxAssets_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef FlxAssets_obj OBJ_;
		FlxAssets_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< FlxAssets_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxAssets_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxAssets"); }

		static ::String IMG_WINDOW_HANDLE;
		static ::String IMG_FLIXEL;
		static ::String IMG_VISUAL_DEBUG;
		static ::String IMG_WATCH_DEBUG;
		static ::String IMG_STATS_DEBUG;
		static ::String IMG_LOG_DEBUG;
		static ::String IMG_CONSOLE;
		static ::String IMG_OPEN;
		static ::String IMG_RECORD_OFF;
		static ::String IMG_RECORD_ON;
		static ::String IMG_STOP;
		static ::String IMG_RESTART;
		static ::String IMG_PAUSE;
		static ::String IMG_PLAY;
		static ::String IMG_STEP;
		static ::String IMG_LOGO;
		static ::String IMG_DEFAULT;
		static ::String IMG_CORNERS;
		static ::String IMG_LIGHT;
		static ::String IMG_AUTO;
		static ::String IMG_AUTO_ALT;
		static ::String IMG_BUTTON;
		static ::String IMG_CURSOR;
		static ::String IMG_BASE;
		static ::String IMG_THUMB;
		static ::String IMG_BUTTON_A;
		static ::String IMG_BUTTON_B;
		static ::String IMG_BUTTON_C;
		static ::String IMG_BUTTON_X;
		static ::String IMG_BUTTON_Y;
		static ::String IMG_BUTTON_UP;
		static ::String IMG_BUTTON_DOWN;
		static ::String IMG_BUTTON_LEFT;
		static ::String IMG_BUTTON_RIGHT;
		static ::String SND_BEEP;
		static ::String SND_FLIXEL;
		static ::String FONT_DEFAULT;
		static ::String FONT_DEBUGGER;
		static Void init( );
		static Dynamic init_dyn();

		static Void drawLogo( ::flash::display::Graphics graph);
		static Dynamic drawLogo_dyn();

		static ::flash::display::BitmapData getBitmapData( ::String id);
		static Dynamic getBitmapData_dyn();

		static Void cacheSounds( );
		static Dynamic cacheSounds_dyn();

};

} // end namespace flixel
} // end namespace system

#endif /* INCLUDED_flixel_system_FlxAssets */ 
