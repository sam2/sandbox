#ifndef INCLUDED_flixel_util_loaders_TextureAtlasFrame
#define INCLUDED_flixel_util_loaders_TextureAtlasFrame

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,geom,Rectangle)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
HX_DECLARE_CLASS3(flixel,util,loaders,TextureAtlasFrame)
namespace flixel{
namespace util{
namespace loaders{


class HXCPP_CLASS_ATTRIBUTES  TextureAtlasFrame_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef TextureAtlasFrame_obj OBJ_;
		TextureAtlasFrame_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< TextureAtlasFrame_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~TextureAtlasFrame_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TextureAtlasFrame"); }

		virtual Void destroy( );
		Dynamic destroy_dyn();

		::flixel::util::FlxPoint offset;
		::flixel::util::FlxPoint sourceSize;
		bool trimmed;
		bool rotated;
		::flash::geom::Rectangle frame;
		::String name;
};

} // end namespace flixel
} // end namespace util
} // end namespace loaders

#endif /* INCLUDED_flixel_util_loaders_TextureAtlasFrame */ 
