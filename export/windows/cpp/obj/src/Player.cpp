#include <hxcpp.h>

#ifndef INCLUDED_Character
#include <Character.h>
#endif
#ifndef INCLUDED_Enemy
#include <Enemy.h>
#endif
#ifndef INCLUDED_Player
#include <Player.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObject
#include <flash/display/DisplayObject.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObjectContainer
#include <flash/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_display_InteractiveObject
#include <flash/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_flash_display_Sprite
#include <flash/display/Sprite.h>
#endif
#ifndef INCLUDED_flash_events_EventDispatcher
#include <flash/events/EventDispatcher.h>
#endif
#ifndef INCLUDED_flash_events_IEventDispatcher
#include <flash/events/IEventDispatcher.h>
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
#ifndef INCLUDED_flixel_FlxGame
#include <flixel/FlxGame.h>
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
#ifndef INCLUDED_flixel_animation_FlxAnimationController
#include <flixel/animation/FlxAnimationController.h>
#endif
#ifndef INCLUDED_flixel_group_FlxGroup
#include <flixel/group/FlxGroup.h>
#endif
#ifndef INCLUDED_flixel_group_FlxTypedGroup
#include <flixel/group/FlxTypedGroup.h>
#endif
#ifndef INCLUDED_flixel_system_input_IFlxInput
#include <flixel/system/input/IFlxInput.h>
#endif
#ifndef INCLUDED_flixel_system_input_keyboard_FlxKeyboard
#include <flixel/system/input/keyboard/FlxKeyboard.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_FlxTimer
#include <flixel/util/FlxTimer.h>
#endif
#ifndef INCLUDED_flixel_util_FlxVector
#include <flixel/util/FlxVector.h>
#endif

Void Player_obj::__construct(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic)
{
HX_STACK_PUSH("Player::new","Player.hx",13);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
{
	HX_STACK_LINE(79)
	this->attackDone = true;
	HX_STACK_LINE(20)
	super::__construct(Name,X,Y,JsonPath,SimpleGraphic);
	HX_STACK_LINE(21)
	this->attk = ::flixel::FlxSprite_obj::__new(this->x,this->y,null());
	HX_STACK_LINE(22)
	this->attk->loadGraphic(HX_CSTRING("assets/images/cut64.png"),true,true,(int)64,(int)64,null(),null());
	HX_STACK_LINE(23)
	Array< int > animationArray = Array_obj< int >::__new().Add((int)0).Add((int)1).Add((int)2).Add((int)3).Add((int)4).Add((int)5);		HX_STACK_VAR(animationArray,"animationArray");
	HX_STACK_LINE(24)
	this->attk->animation->add(HX_CSTRING("attack"),animationArray,(int)20,false);
	HX_STACK_LINE(25)
	::flixel::FlxG_obj::game->state->add(this->attk);
	HX_STACK_LINE(26)
	this->attk->kill();
	HX_STACK_LINE(27)
	this->controllable = true;
	HX_STACK_LINE(28)
	this->attkPos = ::flixel::util::FlxPoint_obj::__new((int)0,(int)0);
}
;
	return null();
}

Player_obj::~Player_obj() { }

Dynamic Player_obj::__CreateEmpty() { return  new Player_obj; }
hx::ObjectPtr< Player_obj > Player_obj::__new(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic)
{  hx::ObjectPtr< Player_obj > result = new Player_obj();
	result->__construct(Name,__o_X,__o_Y,JsonPath,SimpleGraphic);
	return result;}

Dynamic Player_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Player_obj > result = new Player_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4]);
	return result;}

Void Player_obj::attackHit( ::flixel::FlxSprite attackk,::Enemy enemy){
{
		HX_STACK_PUSH("Player::attackHit","Player.hx",98);
		HX_STACK_THIS(this);
		HX_STACK_ARG(attackk,"attackk");
		HX_STACK_ARG(enemy,"enemy");
		HX_STACK_LINE(98)
		if (((bool(this->attk->overlaps(enemy,null(),null())) && bool(!(enemy->stunned))))){
			HX_STACK_LINE(101)
			::flixel::util::FlxVector knockBackVector = ::flixel::util::FlxVector_obj::__new((enemy->x - this->x),(enemy->y - this->y));		HX_STACK_VAR(knockBackVector,"knockBackVector");
			HX_STACK_LINE(102)
			knockBackVector->normalize();
			HX_STACK_LINE(103)
			enemy->stun(.5);
			HX_STACK_LINE(104)
			enemy->velocity->set_x((knockBackVector->x * (int)1000));
			HX_STACK_LINE(105)
			enemy->velocity->set_y((knockBackVector->y * (int)1000));
			HX_STACK_LINE(106)
			enemy->hurt((int)2);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(Player_obj,attackHit,(void))

Void Player_obj::attackFinished( ::flixel::util::FlxTimer Timer){
{
		HX_STACK_PUSH("Player::attackFinished","Player.hx",92);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Timer,"Timer");
		HX_STACK_LINE(93)
		this->attackDone = true;
		HX_STACK_LINE(94)
		this->attk->kill();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Player_obj,attackFinished,(void))

Void Player_obj::attack( ){
{
		HX_STACK_PUSH("Player::attack","Player.hx",81);
		HX_STACK_THIS(this);
		HX_STACK_LINE(81)
		if ((this->attackDone)){
			HX_STACK_LINE(84)
			this->attackDone = false;
			HX_STACK_LINE(85)
			this->attk->reset(this->attkPos->x,this->attkPos->y);
			HX_STACK_LINE(86)
			::flixel::util::FlxTimer_obj::start((Float(this->attk->animation->_sprite->frames) / Float((int)20)),this->attackFinished_dyn(),null());
			HX_STACK_LINE(87)
			this->attk->animation->play(HX_CSTRING("attack"),true,null());
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Player_obj,attack,(void))

Void Player_obj::update( ){
{
		HX_STACK_PUSH("Player::update","Player.hx",32);
		HX_STACK_THIS(this);
		HX_STACK_LINE(34)
		if ((this->controllable)){
			HX_STACK_LINE(35)
			this->acceleration->set_x((int)0);
			HX_STACK_LINE(36)
			this->acceleration->set_y((int)0);
			HX_STACK_LINE(37)
			if ((::flixel::FlxG_obj::keyboard->checkKeyStatus(Dynamic( Array_obj<Dynamic>::__new().Add(HX_CSTRING("RIGHT")).Add(HX_CSTRING("D"))),(int)1))){
				HX_STACK_LINE(39)
				this->acceleration->set_x(this->drag->x);
				HX_STACK_LINE(40)
				this->set_facing((int)16);
				HX_STACK_LINE(41)
				this->attk->set_facing((int)16);
				HX_STACK_LINE(42)
				this->attkPos = ::flixel::util::FlxPoint_obj::__new((int)16,(int)-32);
			}
			else{
				HX_STACK_LINE(44)
				if ((::flixel::FlxG_obj::keyboard->checkKeyStatus(Dynamic( Array_obj<Dynamic>::__new().Add(HX_CSTRING("LEFT")).Add(HX_CSTRING("A"))),(int)1))){
					HX_STACK_LINE(46)
					this->acceleration->set_x(-(this->drag->x));
					HX_STACK_LINE(47)
					this->set_facing((int)1);
					HX_STACK_LINE(48)
					this->attk->set_facing((int)1);
					HX_STACK_LINE(49)
					this->attkPos = ::flixel::util::FlxPoint_obj::__new((int)-64,(int)-32);
				}
			}
			HX_STACK_LINE(52)
			if ((::flixel::FlxG_obj::keyboard->checkKeyStatus(Dynamic( Array_obj<Dynamic>::__new().Add(HX_CSTRING("UP")).Add(HX_CSTRING("W"))),(int)1))){
				HX_STACK_LINE(54)
				this->acceleration->set_y(-(this->drag->y));
				HX_STACK_LINE(55)
				this->set_facing((int)256);
				HX_STACK_LINE(56)
				this->attk->set_facing((int)256);
				HX_STACK_LINE(57)
				this->attkPos = ::flixel::util::FlxPoint_obj::__new((int)-16,(int)-48);
			}
			else{
				HX_STACK_LINE(59)
				if ((::flixel::FlxG_obj::keyboard->checkKeyStatus(Dynamic( Array_obj<Dynamic>::__new().Add(HX_CSTRING("DOWN")).Add(HX_CSTRING("S"))),(int)1))){
					HX_STACK_LINE(61)
					this->acceleration->set_y(this->drag->y);
					HX_STACK_LINE(62)
					this->set_facing((int)4096);
					HX_STACK_LINE(63)
					this->attk->set_facing((int)4096);
					HX_STACK_LINE(64)
					this->attkPos = ::flixel::util::FlxPoint_obj::__new((int)-16,(int)16);
				}
			}
			HX_STACK_LINE(66)
			if ((::flixel::FlxG_obj::keyboard->justPressed(HX_CSTRING("X")))){
				HX_STACK_LINE(67)
				this->attack();
			}
		}
		HX_STACK_LINE(72)
		this->attk->set_x((this->attkPos->x + this->x));
		HX_STACK_LINE(73)
		this->attk->set_y((this->attkPos->y + this->y));
		HX_STACK_LINE(74)
		this->super::update();
	}
return null();
}



Player_obj::Player_obj()
{
}

void Player_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Player);
	HX_MARK_MEMBER_NAME(attackDone,"attackDone");
	HX_MARK_MEMBER_NAME(attackTimer,"attackTimer");
	HX_MARK_MEMBER_NAME(attkPos,"attkPos");
	HX_MARK_MEMBER_NAME(attk,"attk");
	HX_MARK_MEMBER_NAME(controllable,"controllable");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Player_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(attackDone,"attackDone");
	HX_VISIT_MEMBER_NAME(attackTimer,"attackTimer");
	HX_VISIT_MEMBER_NAME(attkPos,"attkPos");
	HX_VISIT_MEMBER_NAME(attk,"attk");
	HX_VISIT_MEMBER_NAME(controllable,"controllable");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Player_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"attk") ) { return attk; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"attack") ) { return attack_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"attkPos") ) { return attkPos; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"attackHit") ) { return attackHit_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"attackDone") ) { return attackDone; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"attackTimer") ) { return attackTimer; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"controllable") ) { return controllable; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"attackFinished") ) { return attackFinished_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Player_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"attk") ) { attk=inValue.Cast< ::flixel::FlxSprite >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"attkPos") ) { attkPos=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"attackDone") ) { attackDone=inValue.Cast< bool >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"attackTimer") ) { attackTimer=inValue.Cast< ::flixel::util::FlxTimer >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"controllable") ) { controllable=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Player_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("attackDone"));
	outFields->push(HX_CSTRING("attackTimer"));
	outFields->push(HX_CSTRING("attkPos"));
	outFields->push(HX_CSTRING("attk"));
	outFields->push(HX_CSTRING("controllable"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("attackHit"),
	HX_CSTRING("attackFinished"),
	HX_CSTRING("attack"),
	HX_CSTRING("attackDone"),
	HX_CSTRING("attackTimer"),
	HX_CSTRING("update"),
	HX_CSTRING("attkPos"),
	HX_CSTRING("attk"),
	HX_CSTRING("controllable"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Player_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Player_obj::__mClass,"__mClass");
};

Class Player_obj::__mClass;

void Player_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("Player"), hx::TCanCast< Player_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Player_obj::__boot()
{
}

