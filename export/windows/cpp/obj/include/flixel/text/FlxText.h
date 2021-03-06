#ifndef INCLUDED_flixel_text_FlxText
#define INCLUDED_flixel_text_FlxText

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <flixel/FlxSprite.h>
HX_DECLARE_CLASS2(flash,display,DisplayObject)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,display,InteractiveObject)
HX_DECLARE_CLASS2(flash,events,EventDispatcher)
HX_DECLARE_CLASS2(flash,events,IEventDispatcher)
HX_DECLARE_CLASS2(flash,filters,BitmapFilter)
HX_DECLARE_CLASS2(flash,text,TextField)
HX_DECLARE_CLASS2(flash,text,TextFormat)
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,text,FlxText)
namespace flixel{
namespace text{


class HXCPP_CLASS_ATTRIBUTES  FlxText_obj : public ::flixel::FlxSprite_obj{
	public:
		typedef ::flixel::FlxSprite_obj super;
		typedef FlxText_obj OBJ_;
		FlxText_obj();
		Void __construct(Float X,Float Y,int Width,::String Text,hx::Null< int >  __o_size,hx::Null< bool >  __o_EmbeddedFont);

	public:
		static hx::ObjectPtr< FlxText_obj > __new(Float X,Float Y,int Width,::String Text,hx::Null< int >  __o_size,hx::Null< bool >  __o_EmbeddedFont);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxText_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxText"); }

		virtual Void clearFilters( );
		Dynamic clearFilters_dyn();

		virtual Void removeFilter( ::flash::filters::BitmapFilter filter);
		Dynamic removeFilter_dyn();

		virtual Void addFilter( ::flash::filters::BitmapFilter filter,hx::Null< int >  widthInc,hx::Null< int >  heightInc);
		Dynamic addFilter_dyn();

		int _heightInc;
		int _widthInc;
		Array< ::Dynamic > _filters;
		virtual Void updateFormat( ::flash::text::TextFormat Format);
		Dynamic updateFormat_dyn();

		virtual Void draw( );

		virtual Void updateFrameData( );

		virtual ::String convertTextAlignmentFromString( ::String StrAlign);
		Dynamic convertTextAlignmentFromString_dyn();

		virtual ::flash::text::TextFormat dtfCopy( );
		Dynamic dtfCopy_dyn();

		virtual Void calcFrame( hx::Null< bool >  AreYouSure);

		virtual Void regenGraphics( );
		Dynamic regenGraphics_dyn();

		virtual Float set_borderQuality( Float Value);
		Dynamic set_borderQuality_dyn();

		virtual Float set_borderSize( Float Value);
		Dynamic set_borderSize_dyn();

		virtual int set_borderColor( int Color);
		Dynamic set_borderColor_dyn();

		virtual int set_borderStyle( int style);
		Dynamic set_borderStyle_dyn();

		virtual Void setBorderStyle( int Style,hx::Null< int >  Color,hx::Null< Float >  Size,hx::Null< Float >  Quality);
		Dynamic setBorderStyle_dyn();

		virtual ::String set_alignment( ::String Alignment);
		Dynamic set_alignment_dyn();

		virtual ::String get_alignment( );
		Dynamic get_alignment_dyn();

		virtual bool set_wordWrap( bool value);
		Dynamic set_wordWrap_dyn();

		virtual bool get_wordWrap( );
		Dynamic get_wordWrap_dyn();

		virtual bool set_bold( bool value);
		Dynamic set_bold_dyn();

		virtual bool get_bold( );
		Dynamic get_bold_dyn();

		virtual ::String set_systemFont( ::String Font);
		Dynamic set_systemFont_dyn();

		virtual ::String get_systemFont( );
		Dynamic get_systemFont_dyn();

		virtual bool get_embedded( );
		Dynamic get_embedded_dyn();

		virtual ::String set_font( ::String Font);
		Dynamic set_font_dyn();

		virtual ::String get_font( );
		Dynamic get_font_dyn();

		virtual int set_color( int Color);

		virtual Float set_size( Float Size);
		Dynamic set_size_dyn();

		virtual Float get_size( );
		Dynamic get_size_dyn();

		virtual ::String set_text( ::String Text);
		Dynamic set_text_dyn();

		virtual ::String get_text( );
		Dynamic get_text_dyn();

		virtual Float set_width( Float Width);

		virtual ::flixel::text::FlxText setFormat( ::String Font,hx::Null< Float >  Size,hx::Null< int >  Color,::String Alignment,hx::Null< int >  BorderStyle,hx::Null< int >  BorderColor,hx::Null< bool >  Embedded);
		Dynamic setFormat_dyn();

		virtual Void destroy( );

		bool _regen;
		::flash::text::TextFormat _formatAdjusted;
		::flash::text::TextFormat _format;
		::flash::text::TextField _textField;
		Float borderQuality;
		Float borderSize;
		int borderColor;
		int borderStyle;
		bool embedded;
		static int BORDER_NONE;
		static int BORDER_SHADOW;
		static int BORDER_OUTLINE;
		static int BORDER_OUTLINE_FAST;
};

} // end namespace flixel
} // end namespace text

#endif /* INCLUDED_flixel_text_FlxText */ 
