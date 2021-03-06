#ifndef INCLUDED_flixel_util_loaders_TexturePackerData
#define INCLUDED_flixel_util_loaders_TexturePackerData

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS2(flash,display,BitmapData)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS3(flixel,util,loaders,TextureAtlasFrame)
HX_DECLARE_CLASS3(flixel,util,loaders,TexturePackerData)
namespace flixel{
namespace util{
namespace loaders{


class HXCPP_CLASS_ATTRIBUTES  TexturePackerData_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef TexturePackerData_obj OBJ_;
		TexturePackerData_obj();
		Void __construct(::String description,::String assetName);

	public:
		static hx::ObjectPtr< TexturePackerData_obj > __new(::String description,::String assetName);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~TexturePackerData_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TexturePackerData"); }

		virtual Void destroy( );
		Dynamic destroy_dyn();

		virtual Void parseData( );
		Dynamic parseData_dyn();

		::flash::display::BitmapData asset;
		::String description;
		::String assetName;
		Array< ::Dynamic > frames;
};

} // end namespace flixel
} // end namespace util
} // end namespace loaders

#endif /* INCLUDED_flixel_util_loaders_TexturePackerData */ 
