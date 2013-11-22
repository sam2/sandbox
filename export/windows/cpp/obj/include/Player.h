#ifndef INCLUDED_Player
#define INCLUDED_Player

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <Character.h>
HX_DECLARE_CLASS0(Character)
HX_DECLARE_CLASS0(Enemy)
HX_DECLARE_CLASS0(Player)
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
HX_DECLARE_CLASS2(flixel,util,FlxTimer)


class HXCPP_CLASS_ATTRIBUTES  Player_obj : public ::Character_obj{
	public:
		typedef ::Character_obj super;
		typedef Player_obj OBJ_;
		Player_obj();
		Void __construct(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic);

	public:
		static hx::ObjectPtr< Player_obj > __new(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Player_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Player"); }

		virtual Void attackHit( ::flixel::FlxSprite attackk,::Enemy enemy);
		Dynamic attackHit_dyn();

		virtual Void attackFinished( ::flixel::util::FlxTimer Timer);
		Dynamic attackFinished_dyn();

		virtual Void attack( );
		Dynamic attack_dyn();

		bool attackDone;
		::flixel::util::FlxTimer attackTimer;
		virtual Void update( );

		::flixel::util::FlxPoint attkPos;
		::flixel::FlxSprite attk;
		bool controllable;
};


#endif /* INCLUDED_Player */ 
