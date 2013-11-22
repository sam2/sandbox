#ifndef INCLUDED_Enemy
#define INCLUDED_Enemy

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <Character.h>
HX_DECLARE_CLASS0(Character)
HX_DECLARE_CLASS0(EStates)
HX_DECLARE_CLASS0(Enemy)
HX_DECLARE_CLASS0(Player)
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,FlxSprite)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,tile,FlxTilemap)
HX_DECLARE_CLASS2(flixel,util,FlxPath)
HX_DECLARE_CLASS2(flixel,util,FlxPoint)
HX_DECLARE_CLASS2(flixel,util,FlxTimer)


class HXCPP_CLASS_ATTRIBUTES  Enemy_obj : public ::Character_obj{
	public:
		typedef ::Character_obj super;
		typedef Enemy_obj OBJ_;
		Enemy_obj();
		Void __construct(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,::Player p,::flixel::tile::FlxTilemap lvl,Dynamic SimpleGraphic);

	public:
		static hx::ObjectPtr< Enemy_obj > __new(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,::Player p,::flixel::tile::FlxTilemap lvl,Dynamic SimpleGraphic);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Enemy_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Enemy"); }

		virtual Void unstun( ::flixel::util::FlxTimer Timer);
		Dynamic unstun_dyn();

		virtual Void stun( Float duration);
		Dynamic stun_dyn();

		virtual Void goHome( );
		Dynamic goHome_dyn();

		virtual Void search( );
		Dynamic search_dyn();

		virtual Void chase( );
		Dynamic chase_dyn();

		virtual Void wander( );
		Dynamic wander_dyn();

		virtual Void update( );

		bool stunned;
		::flixel::util::FlxPoint destination;
		::flixel::util::FlxPath path;
		::EStates state;
		::flixel::tile::FlxTilemap level;
		::flixel::util::FlxPoint startPos;
		Float leashDistance;
		Float walkSpeed;
		Float moveSpeed;
		Float attackRange;
		Float sightRange;
		::Player player;
};


#endif /* INCLUDED_Enemy */ 
