#ifndef INCLUDED_flixel_group__FlxSpriteGroup_FlxPointHelper
#define INCLUDED_flixel_group__FlxSpriteGroup_FlxPointHelper

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <flixel/util/FlxPoint.h>
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,group,FlxSpriteGroup)
HX_DECLARE_CLASS3(flixel,group,_FlxSpriteGroup,FlxPointHelper)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
namespace flixel{
namespace group{
namespace _FlxSpriteGroup{


class HXCPP_CLASS_ATTRIBUTES  FlxPointHelper_obj : public ::flixel::util::FlxPoint_obj{
	public:
		typedef ::flixel::util::FlxPoint_obj super;
		typedef FlxPointHelper_obj OBJ_;
		FlxPointHelper_obj();
		Void __construct(::flixel::group::FlxSpriteGroup parent,Dynamic transformFunc);

	public:
		static hx::ObjectPtr< FlxPointHelper_obj > __new(::flixel::group::FlxSpriteGroup parent,Dynamic transformFunc);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxPointHelper_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxPointHelper"); }

		virtual Void destroy( );

		virtual Float set_y( Float Value);

		virtual Float set_x( Float Value);

		virtual ::flixel::util::FlxPoint set( hx::Null< Float >  X,hx::Null< Float >  Y);

		Dynamic _transformFunc;
		Dynamic &_transformFunc_dyn() { return _transformFunc;}
		::flixel::group::FlxSpriteGroup _parent;
};

} // end namespace flixel
} // end namespace group
} // end namespace _FlxSpriteGroup

#endif /* INCLUDED_flixel_group__FlxSpriteGroup_FlxPointHelper */ 
