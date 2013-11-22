#ifndef INCLUDED_flixel_group_FlxSpriteGroup
#define INCLUDED_flixel_group_FlxSpriteGroup

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <flixel/FlxSprite.h>
HX_DECLARE_CLASS2(flash,display,BitmapData)
HX_DECLARE_CLASS2(flash,display,BlendMode)
HX_DECLARE_CLASS2(flash,display,IBitmapDrawable)
HX_DECLARE_CLASS2(flash,geom,ColorTransform)
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxCamera)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,group,FlxSpriteGroup)
HX_DECLARE_CLASS2(flixel,group,FlxTypedGroup)
HX_DECLARE_CLASS4(flixel,system,layer,frames,FlxFrame)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
namespace flixel{
namespace group{


class HXCPP_CLASS_ATTRIBUTES  FlxSpriteGroup_obj : public ::flixel::FlxSprite_obj{
	public:
		typedef ::flixel::FlxSprite_obj super;
		typedef FlxSpriteGroup_obj OBJ_;
		FlxSpriteGroup_obj();
		Void __construct(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< int >  __o_MaxSize);

	public:
		static hx::ObjectPtr< FlxSpriteGroup_obj > __new(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< int >  __o_MaxSize);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxSpriteGroup_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxSpriteGroup"); }

		virtual Void updateFrameData( );

		virtual Void updateColorTransform( );

		virtual Void stamp( ::flixel::FlxSprite Brush,hx::Null< int >  X,hx::Null< int >  Y);

		virtual Void resetHelpers( );

		virtual Void calcFrame( hx::Null< bool >  AreYouSure);

		virtual ::flixel::FlxSprite loadRotatedImageFromTexture( Dynamic Data,::String Image,hx::Null< int >  Rotations,hx::Null< bool >  AntiAliasing,hx::Null< bool >  AutoBuffer);

		virtual ::flixel::FlxSprite loadImageFromTexture( Dynamic Data,hx::Null< bool >  Reverse,hx::Null< bool >  Unique,::String FrameName);

		virtual ::flixel::FlxSprite makeGraphic( int Width,int Height,hx::Null< int >  Color,hx::Null< bool >  Unique,::String Key);

		virtual ::flixel::FlxSprite loadRotatedGraphic( Dynamic Graphic,hx::Null< int >  Rotations,hx::Null< int >  Frame,hx::Null< bool >  AntiAliasing,hx::Null< bool >  AutoBuffer,::String Key);

		virtual ::flixel::FlxSprite loadGraphic( Dynamic Graphic,hx::Null< bool >  Animated,hx::Null< bool >  Reverse,hx::Null< int >  Width,hx::Null< int >  Height,hx::Null< bool >  Unique,::String Key);

		virtual ::flixel::FlxSprite loadfromSprite( ::flixel::FlxSprite Sprite);

		virtual Void dragTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Drag);
		Dynamic dragTransform_dyn();

		virtual Void scrollFactorTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint ScrollFactor);
		Dynamic scrollFactorTransform_dyn();

		virtual Void accelerationTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Acceleration);
		Dynamic accelerationTransform_dyn();

		virtual Void maxVelocityTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint MaxVelocity);
		Dynamic maxVelocityTransform_dyn();

		virtual Void velocityTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Velocity);
		Dynamic velocityTransform_dyn();

		virtual Void scaleTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Scale);
		Dynamic scaleTransform_dyn();

		virtual Void originTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Origin);
		Dynamic originTransform_dyn();

		virtual Void offsetTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Offset);
		Dynamic offsetTransform_dyn();

		virtual Void existsTransform( ::flixel::FlxSprite Sprite,bool Exists);
		Dynamic existsTransform_dyn();

		virtual Void aliveTransform( ::flixel::FlxSprite Sprite,bool Alive);
		Dynamic aliveTransform_dyn();

		virtual Void solidTransform( ::flixel::FlxSprite Sprite,bool Solid);
		Dynamic solidTransform_dyn();

		virtual Void activeTransform( ::flixel::FlxSprite Sprite,bool Active);
		Dynamic activeTransform_dyn();

		virtual Void visibleTransform( ::flixel::FlxSprite Sprite,bool Visible);
		Dynamic visibleTransform_dyn();

		virtual Void immovableTransform( ::flixel::FlxSprite Sprite,bool Immovable);
		Dynamic immovableTransform_dyn();

		virtual Void blenfTransform( ::flixel::FlxSprite Sprite,::flash::display::BlendMode Blend);
		Dynamic blenfTransform_dyn();

		virtual Void colorTransformF( ::flixel::FlxSprite Sprite,int Color);
		Dynamic colorTransformF_dyn();

		virtual Void complexRenderTransform( ::flixel::FlxSprite Sprite,bool Complex);
		Dynamic complexRenderTransform_dyn();

		virtual Void movesTransform( ::flixel::FlxSprite Sprite,bool Moves);
		Dynamic movesTransform_dyn();

		virtual Void facingTransform( ::flixel::FlxSprite Sprite,int Facing);
		Dynamic facingTransform_dyn();

		virtual Void alphaTransform( ::flixel::FlxSprite Sprite,Float Alpha);
		Dynamic alphaTransform_dyn();

		virtual Void angleTransform( ::flixel::FlxSprite Sprite,Float Angle);
		Dynamic angleTransform_dyn();

		virtual Void yTransform( ::flixel::FlxSprite Sprite,Float Y);
		Dynamic yTransform_dyn();

		virtual Void xTransform( ::flixel::FlxSprite Sprite,Float X);
		Dynamic xTransform_dyn();

		virtual bool set_autoReviveMembers( bool Value);
		Dynamic set_autoReviveMembers_dyn();

		virtual bool get_autoReviveMembers( );
		Dynamic get_autoReviveMembers_dyn();

		virtual Array< ::Dynamic > get_members( );
		Dynamic get_members_dyn();

		virtual int set_maxSize( int Size);
		Dynamic set_maxSize_dyn();

		virtual int get_maxSize( );
		Dynamic get_maxSize_dyn();

		virtual int get_length( );
		Dynamic get_length_dyn();

		virtual bool set_forceComplexRender( bool Value);

		virtual bool set_solid( bool Solid);

		virtual ::flash::display::BlendMode set_blend( ::flash::display::BlendMode Blend);

		virtual ::flash::geom::ColorTransform get_colorTransform( );

		virtual int set_color( int Color);

		virtual ::flixel::system::layer::frames::FlxFrame set_frame( ::flixel::system::layer::frames::FlxFrame Value);

		virtual ::flash::display::BitmapData set_pixels( ::flash::display::BitmapData Pixels);

		virtual ::flash::display::BitmapData get_pixels( );

		virtual ::flixel::util::FlxPoint set_maxVelocity( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_drag( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_acceleration( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_velocity( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_scrollFactor( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_scale( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_offset( ::flixel::util::FlxPoint Value);

		virtual ::flixel::util::FlxPoint set_origin( ::flixel::util::FlxPoint Value);

		virtual bool set_immovable( bool Value);

		virtual bool set_moves( bool Value);

		virtual int set_facing( int Value);

		virtual Float set_alpha( Float NewAlpha);

		virtual Float set_angle( Float NewAngle);

		virtual Float set_y( Float NewY);

		virtual Float set_x( Float NewX);

		virtual bool set_alive( bool Value);

		virtual bool set_active( bool Value);

		virtual bool set_visible( bool Value);

		virtual bool set_exists( bool Value);

		virtual Void setPosition( hx::Null< Float >  X,hx::Null< Float >  Y);

		virtual Void reset( Float X,Float Y);

		virtual Void revive( );

		virtual Void kill( );

		virtual Void clear( );
		Dynamic clear_dyn();

		virtual ::flixel::FlxSprite getRandom( hx::Null< int >  StartIndex,hx::Null< int >  Length);
		Dynamic getRandom_dyn();

		virtual int countDead( );
		Dynamic countDead_dyn();

		virtual int countLiving( );
		Dynamic countLiving_dyn();

		virtual ::flixel::FlxSprite getFirstDead( );
		Dynamic getFirstDead_dyn();

		virtual ::flixel::FlxSprite getFirstAlive( );
		Dynamic getFirstAlive_dyn();

		virtual ::flixel::FlxSprite getFirstExisting( );
		Dynamic getFirstExisting_dyn();

		virtual int getFirstNull( );
		Dynamic getFirstNull_dyn();

		virtual ::flixel::FlxSprite getFirstAvailable( ::Class ObjectClass,hx::Null< bool >  Force);
		Dynamic getFirstAvailable_dyn();

		virtual Void callAll( ::String FunctionName,Dynamic Args,hx::Null< bool >  Recurse);
		Dynamic callAll_dyn();

		virtual Void setAll( ::String VariableName,Dynamic Value,hx::Null< bool >  Recurse);
		Dynamic setAll_dyn();

		virtual Void sort( ::String Index,hx::Null< int >  Order);
		Dynamic sort_dyn();

		virtual ::flixel::FlxSprite replace( ::flixel::FlxSprite OldObject,::flixel::FlxSprite NewObject);
		Dynamic replace_dyn();

		virtual ::flixel::FlxSprite remove( ::flixel::FlxSprite Object,hx::Null< bool >  Splice);
		Dynamic remove_dyn();

		virtual ::flixel::FlxSprite recycle( ::Class ObjectClass,Dynamic ContructorArgs,hx::Null< bool >  Force);
		Dynamic recycle_dyn();

		virtual ::flixel::FlxSprite add( ::flixel::FlxSprite Sprite);
		Dynamic add_dyn();

		virtual Void drawDebugOnCamera( ::flixel::FlxCamera Camera);

		bool isDrawnDebug;
		virtual Array< ::Dynamic > replaceColor( int Color,int NewColor,hx::Null< bool >  FetchPositions);

		virtual Void draw( );

		virtual Void update( );

		virtual bool pixelsOverlapPoint( ::flixel::util::FlxPoint point,hx::Null< int >  Mask,::flixel::FlxCamera Camera);

		virtual bool overlapsPoint( ::flixel::util::FlxPoint point,hx::Null< bool >  InScreenSpace,::flixel::FlxCamera Camera);

		virtual bool onScreen( ::flixel::FlxCamera Camera);

		virtual ::flixel::FlxSprite clone( ::flixel::FlxSprite NewSprite);

		virtual Void destroy( );

		virtual Void initVars( );

		bool _skipTransformChildren;
		int length;
		Array< ::Dynamic > members;
		::flixel::group::FlxTypedGroup group;
		virtual Void multiTransformChildren_Float( Dynamic FunctionArray,Array< Float > ValueArray);
		Dynamic multiTransformChildren_Float_dyn();

		virtual Void transformChildren_Bool( Dynamic Function,bool Value);
		Dynamic transformChildren_Bool_dyn();

		virtual Void transformChildren_Float( Dynamic Function,Float Value);
		Dynamic transformChildren_Float_dyn();

		virtual Void transformChildren_Int( Dynamic Function,int Value);
		Dynamic transformChildren_Int_dyn();

		virtual Void transformChildren_flixel_util_FlxPoint( Dynamic Function,::flixel::util::FlxPoint Value);
		Dynamic transformChildren_flixel_util_FlxPoint_dyn();

		virtual Void transformChildren_flash_display_BlendMode( Dynamic Function,::flash::display::BlendMode Value);
		Dynamic transformChildren_flash_display_BlendMode_dyn();

};

} // end namespace flixel
} // end namespace group

#endif /* INCLUDED_flixel_group_FlxSpriteGroup */ 
