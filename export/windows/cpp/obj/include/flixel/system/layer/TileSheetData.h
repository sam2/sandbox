#ifndef INCLUDED_flixel_system_layer_TileSheetData
#define INCLUDED_flixel_system_layer_TileSheetData

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(IMap)
HX_DECLARE_CLASS2(flash,display,BitmapData)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,geom,Point)
HX_DECLARE_CLASS2(flash,geom,Rectangle)
HX_DECLARE_CLASS3(flixel,system,layer,Region)
HX_DECLARE_CLASS3(flixel,system,layer,TileSheetData)
HX_DECLARE_CLASS3(flixel,system,layer,TileSheetExt)
HX_DECLARE_CLASS4(flixel,system,layer,frames,FlxFrame)
HX_DECLARE_CLASS4(flixel,system,layer,frames,FlxSpriteFrames)
HX_DECLARE_CLASS3(flixel,util,loaders,TextureAtlasFrame)
HX_DECLARE_CLASS3(flixel,util,loaders,TexturePackerData)
HX_DECLARE_CLASS2(haxe,ds,StringMap)
HX_DECLARE_CLASS2(openfl,display,Tilesheet)
namespace flixel{
namespace system{
namespace layer{


class HXCPP_CLASS_ATTRIBUTES  TileSheetData_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef TileSheetData_obj OBJ_;
		TileSheetData_obj();
		Void __construct(::flash::display::BitmapData Bitmap);

	public:
		static hx::ObjectPtr< TileSheetData_obj > __new(::flash::display::BitmapData Bitmap);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~TileSheetData_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("TileSheetData"); }

		virtual Void destroyFrameBitmapDatas( );
		Dynamic destroyFrameBitmapDatas_dyn();

		virtual ::flixel::system::layer::frames::FlxFrame addTexturePackerFrame( ::flixel::util::loaders::TextureAtlasFrame frameData,hx::Null< int >  startX,hx::Null< int >  startY);
		Dynamic addTexturePackerFrame_dyn();

		virtual ::flixel::system::layer::frames::FlxSpriteFrames getTexturePackerFrames( ::flixel::util::loaders::TexturePackerData data,hx::Null< int >  startX,hx::Null< int >  startY);
		Dynamic getTexturePackerFrames_dyn();

		virtual Void onContext( ::flash::display::BitmapData bitmap);
		Dynamic onContext_dyn();

		virtual Void destroy( );
		Dynamic destroy_dyn();

		virtual int addTileRect( ::flash::geom::Rectangle tileRect,::flash::geom::Point point);
		Dynamic addTileRect_dyn();

		virtual bool containsFrame( ::String key);
		Dynamic containsFrame_dyn();

		virtual ::flixel::system::layer::frames::FlxFrame addSpriteSheetFrame( ::flash::geom::Rectangle rect,::flash::geom::Point point);
		Dynamic addSpriteSheetFrame_dyn();

		virtual bool containsSpriteSheetFrames( int width,int height,int startX,int startY,int endX,int endY,int xSpacing,int ySpacing,Float pointX,Float pointY);
		Dynamic containsSpriteSheetFrames_dyn();

		virtual ::String getKeyForSpriteSheetFrames( int width,int height,int startX,int startY,int endX,int endY,int xSpacing,int ySpacing,Float pointX,Float pointY);
		Dynamic getKeyForSpriteSheetFrames_dyn();

		virtual ::String getSpriteSheetFrameKey( ::flash::geom::Rectangle rect,::flash::geom::Point point);
		Dynamic getSpriteSheetFrameKey_dyn();

		virtual ::flixel::system::layer::frames::FlxSpriteFrames getSpriteSheetFrames( ::flixel::system::layer::Region region,::flash::geom::Point origin);
		Dynamic getSpriteSheetFrames_dyn();

		virtual ::flixel::system::layer::frames::FlxFrame getFrame( ::String name);
		Dynamic getFrame_dyn();

		::flash::display::BitmapData bitmap;
		Array< ::String > frameNames;
		::haxe::ds::StringMap flxFrames;
		::haxe::ds::StringMap flxSpriteFrames;
		::flixel::system::layer::TileSheetExt tileSheet;
};

} // end namespace flixel
} // end namespace system
} // end namespace layer

#endif /* INCLUDED_flixel_system_layer_TileSheetData */ 
