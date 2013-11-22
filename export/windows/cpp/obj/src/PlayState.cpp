#include <hxcpp.h>

#ifndef INCLUDED_Character
#include <Character.h>
#endif
#ifndef INCLUDED_Enemy
#include <Enemy.h>
#endif
#ifndef INCLUDED_PlayState
#include <PlayState.h>
#endif
#ifndef INCLUDED_Player
#include <Player.h>
#endif
#ifndef INCLUDED_flixel_FlxBasic
#include <flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_flixel_FlxCamera
#include <flixel/FlxCamera.h>
#endif
#ifndef INCLUDED_flixel_FlxG
#include <flixel/FlxG.h>
#endif
#ifndef INCLUDED_flixel_FlxObject
#include <flixel/FlxObject.h>
#endif
#ifndef INCLUDED_flixel_FlxSprite
#include <flixel/FlxSprite.h>
#endif
#ifndef INCLUDED_flixel_FlxState
#include <flixel/FlxState.h>
#endif
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
#endif
#ifndef INCLUDED_flixel_addons_tile_FlxCaveGenerator
#include <flixel/addons/tile/FlxCaveGenerator.h>
#endif
#ifndef INCLUDED_flixel_group_FlxGroup
#include <flixel/group/FlxGroup.h>
#endif
#ifndef INCLUDED_flixel_group_FlxSpriteGroup
#include <flixel/group/FlxSpriteGroup.h>
#endif
#ifndef INCLUDED_flixel_group_FlxTypedGroup
#include <flixel/group/FlxTypedGroup.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_CameraFrontEnd
#include <flixel/system/frontEnds/CameraFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_tile_FlxTilemap
#include <flixel/tile/FlxTilemap.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_FlxRect
#include <flixel/util/FlxRect.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif

Void PlayState_obj::__construct()
{
HX_STACK_PUSH("PlayState::new","PlayState.hx",18);
{
	HX_STACK_LINE(18)
	super::__construct();
}
;
	return null();
}

PlayState_obj::~PlayState_obj() { }

Dynamic PlayState_obj::__CreateEmpty() { return  new PlayState_obj; }
hx::ObjectPtr< PlayState_obj > PlayState_obj::__new()
{  hx::ObjectPtr< PlayState_obj > result = new PlayState_obj();
	result->__construct();
	return result;}

Dynamic PlayState_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< PlayState_obj > result = new PlayState_obj();
	result->__construct();
	return result;}

Void PlayState_obj::placeSprites( ::flixel::group::FlxSpriteGroup sprites,int num){
{
		HX_STACK_PUSH("PlayState::placeSprites","PlayState.hx",98);
		HX_STACK_THIS(this);
		HX_STACK_ARG(sprites,"sprites");
		HX_STACK_ARG(num,"num");
		HX_STACK_LINE(99)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(99)
		while(((_g < num))){
			HX_STACK_LINE(99)
			int i = (_g)++;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(101)
			Float x = (::Math_obj::random() * this->level->width);		HX_STACK_VAR(x,"x");
			HX_STACK_LINE(102)
			Float y = (::Math_obj::random() * this->level->height);		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(103)
			::Enemy enemy = ::Enemy_obj::__new(HX_CSTRING("skeleton"),x,y,HX_CSTRING("assets/images/skeleton.json"),this->player,this->level,null());		HX_STACK_VAR(enemy,"enemy");
			HX_STACK_LINE(104)
			sprites->add(enemy);
			HX_STACK_LINE(105)
			while((enemy->overlaps(this->level,null(),null()))){
				HX_STACK_LINE(106)
				enemy->set_x((::Math_obj::random() * this->level->width));
				HX_STACK_LINE(107)
				enemy->set_y((::Math_obj::random() * this->level->height));
				HX_STACK_LINE(108)
				enemy->startPos->set_x(enemy->x);
				HX_STACK_LINE(109)
				enemy->startPos->set_y(enemy->y);
				HX_STACK_LINE(110)
				enemy->destination = null();
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PlayState_obj,placeSprites,(void))

Void PlayState_obj::onPlayerHitEnemy( ::Character player,::Enemy enemy){
{
		HX_STACK_PUSH("PlayState::onPlayerHitEnemy","PlayState.hx",92);
		HX_STACK_THIS(this);
		HX_STACK_ARG(player,"player");
		HX_STACK_ARG(enemy,"enemy");
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PlayState_obj,onPlayerHitEnemy,(void))

Void PlayState_obj::update( ){
{
		HX_STACK_PUSH("PlayState::update","PlayState.hx",81);
		HX_STACK_THIS(this);
		HX_STACK_LINE(83)
		::flixel::FlxG_obj::overlap(this->player,this->level,null(),::flixel::FlxObject_obj::separate_dyn());
		HX_STACK_LINE(84)
		::flixel::FlxG_obj::overlap(this->enemies,this->enemies,null(),::flixel::FlxObject_obj::separate_dyn());
		HX_STACK_LINE(85)
		::flixel::FlxG_obj::overlap(this->enemies,this->level,null(),::flixel::FlxObject_obj::separate_dyn());
		HX_STACK_LINE(86)
		if ((this->player->attk->alive)){
			HX_STACK_LINE(87)
			::flixel::FlxG_obj::overlap(this->player->attk,this->enemies,this->player->attackHit_dyn(),null());
		}
		HX_STACK_LINE(88)
		this->super::update();
	}
return null();
}


Void PlayState_obj::destroy( ){
{
		HX_STACK_PUSH("PlayState::destroy","PlayState.hx",73);
		HX_STACK_THIS(this);
		HX_STACK_LINE(73)
		this->super::destroy();
	}
return null();
}


Void PlayState_obj::create( ){
{
		HX_STACK_PUSH("PlayState::create","PlayState.hx",29);
		HX_STACK_THIS(this);
		HX_STACK_LINE(31)
		::flixel::FlxG_obj::cameras->set_bgColor((int)-12968192);
		HX_STACK_LINE(33)
		::String data = ::flixel::addons::tile::FlxCaveGenerator_obj::convertMatrixToString(::flixel::addons::tile::FlxCaveGenerator_obj::generateCaveMatrix((int)300,(int)200,(int)10,0.40));		HX_STACK_VAR(data,"data");
		HX_STACK_LINE(34)
		this->level = ::flixel::tile::FlxTilemap_obj::__new();
		HX_STACK_LINE(35)
		this->level->loadMap(data,HX_CSTRING("flixel/img/tile/autotiles.png"),(int)0,(int)0,(int)1,null(),null(),null());
		HX_STACK_LINE(40)
		this->player = ::Player_obj::__new(HX_CSTRING("Sam"),(Float(::flixel::FlxG_obj::width) / Float((int)2)),(Float(::flixel::FlxG_obj::height) / Float((int)2)),HX_CSTRING("assets/images/actor2.json"),null());
		HX_STACK_LINE(43)
		this->enemies = ::flixel::group::FlxSpriteGroup_obj::__new(null(),null(),null());
		HX_STACK_LINE(45)
		this->placeSprites(this->enemies,(int)50);
		HX_STACK_LINE(47)
		this->add(this->level);
		HX_STACK_LINE(48)
		this->add(this->enemies);
		HX_STACK_LINE(49)
		this->add(this->player);
		HX_STACK_LINE(51)
		::flixel::util::FlxRect bounds;		HX_STACK_VAR(bounds,"bounds");
		HX_STACK_LINE(52)
		::flixel::FlxG_obj::camera->follow(this->player,null(),null(),null());
		HX_STACK_LINE(53)
		bounds = this->level->getBounds(null());
		HX_STACK_LINE(54)
		::flixel::FlxG_obj::camera->setBounds(bounds->x,bounds->y,bounds->width,bounds->height,true);
		HX_STACK_LINE(55)
		{
			HX_STACK_LINE(55)
			::flixel::util::FlxRect _this = ::flixel::FlxG_obj::worldBounds;		HX_STACK_VAR(_this,"_this");
			::flixel::util::FlxRect Rect = this->level->getBounds(null());		HX_STACK_VAR(Rect,"Rect");
			HX_STACK_LINE(55)
			_this->x = Rect->x;
			HX_STACK_LINE(55)
			_this->y = Rect->y;
			HX_STACK_LINE(55)
			_this->width = Rect->width;
			HX_STACK_LINE(55)
			_this->height = Rect->height;
			HX_STACK_LINE(55)
			_this;
		}
		HX_STACK_LINE(65)
		this->super::create();
	}
return null();
}



PlayState_obj::PlayState_obj()
{
}

void PlayState_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(PlayState);
	HX_MARK_MEMBER_NAME(enemies,"enemies");
	HX_MARK_MEMBER_NAME(enemy,"enemy");
	HX_MARK_MEMBER_NAME(player,"player");
	HX_MARK_MEMBER_NAME(level,"level");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void PlayState_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(enemies,"enemies");
	HX_VISIT_MEMBER_NAME(enemy,"enemy");
	HX_VISIT_MEMBER_NAME(player,"player");
	HX_VISIT_MEMBER_NAME(level,"level");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic PlayState_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"enemy") ) { return enemy; }
		if (HX_FIELD_EQ(inName,"level") ) { return level; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"create") ) { return create_dyn(); }
		if (HX_FIELD_EQ(inName,"player") ) { return player; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"enemies") ) { return enemies; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"placeSprites") ) { return placeSprites_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"onPlayerHitEnemy") ) { return onPlayerHitEnemy_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic PlayState_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"enemy") ) { enemy=inValue.Cast< ::Enemy >(); return inValue; }
		if (HX_FIELD_EQ(inName,"level") ) { level=inValue.Cast< ::flixel::tile::FlxTilemap >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"player") ) { player=inValue.Cast< ::Player >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"enemies") ) { enemies=inValue.Cast< ::flixel::group::FlxSpriteGroup >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void PlayState_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("enemies"));
	outFields->push(HX_CSTRING("enemy"));
	outFields->push(HX_CSTRING("player"));
	outFields->push(HX_CSTRING("level"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("placeSprites"),
	HX_CSTRING("onPlayerHitEnemy"),
	HX_CSTRING("update"),
	HX_CSTRING("destroy"),
	HX_CSTRING("create"),
	HX_CSTRING("enemies"),
	HX_CSTRING("enemy"),
	HX_CSTRING("player"),
	HX_CSTRING("level"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(PlayState_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(PlayState_obj::__mClass,"__mClass");
};

Class PlayState_obj::__mClass;

void PlayState_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("PlayState"), hx::TCanCast< PlayState_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void PlayState_obj::__boot()
{
}

