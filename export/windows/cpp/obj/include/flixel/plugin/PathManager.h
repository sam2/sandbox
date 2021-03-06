#ifndef INCLUDED_flixel_plugin_PathManager
#define INCLUDED_flixel_plugin_PathManager

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <flixel/plugin/FlxPlugin.h>
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxCamera)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,plugin,FlxPlugin)
HX_DECLARE_CLASS2(flixel,plugin,PathManager)
HX_DECLARE_CLASS2(flixel,util,FlxPath)
namespace flixel{
namespace plugin{


class HXCPP_CLASS_ATTRIBUTES  PathManager_obj : public ::flixel::plugin::FlxPlugin_obj{
	public:
		typedef ::flixel::plugin::FlxPlugin_obj super;
		typedef PathManager_obj OBJ_;
		PathManager_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< PathManager_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~PathManager_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("PathManager"); }

		virtual Void onStateSwitch( );

		virtual Void clear( );
		Dynamic clear_dyn();

		virtual Void remove( ::flixel::util::FlxPath Path,hx::Null< bool >  ReturnInPool);
		Dynamic remove_dyn();

		virtual Void add( ::flixel::util::FlxPath Path);
		Dynamic add_dyn();

		virtual Void drawDebugOnCamera( ::flixel::FlxCamera Camera);

		virtual Void drawDebug( );

		virtual Void update( );

		virtual Void destroy( );

		Array< ::Dynamic > _paths;
};

} // end namespace flixel
} // end namespace plugin

#endif /* INCLUDED_flixel_plugin_PathManager */ 
