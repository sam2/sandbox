#include <hxcpp.h>

#ifndef INCLUDED_IMap
#include <IMap.h>
#endif
#ifndef INCLUDED_flixel_system_input_gamepad_FlxGamepad
#include <flixel/system/input/gamepad/FlxGamepad.h>
#endif
#ifndef INCLUDED_flixel_system_input_gamepad_FlxGamepadButton
#include <flixel/system/input/gamepad/FlxGamepadButton.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_haxe_ds_IntMap
#include <haxe/ds/IntMap.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace system{
namespace input{
namespace gamepad{

Void FlxGamepad_obj::__construct(int ID,hx::Null< Float >  __o_GlobalDeadZone)
{
HX_STACK_PUSH("FlxGamepad::new","flixel/system/input/gamepad/FlxGamepad.hx",5);
Float GlobalDeadZone = __o_GlobalDeadZone.Default(0);
{
	HX_STACK_LINE(23)
	this->deadZone = 0.15;
	HX_STACK_LINE(27)
	this->buttons = ::haxe::ds::IntMap_obj::__new();
	HX_STACK_LINE(28)
	this->ball = ::flixel::util::FlxPoint_obj::__new(null(),null());
	HX_STACK_LINE(29)
	this->axis = Array_obj< Float >::__new();
	HX_STACK_LINE(30)
	this->hat = ::flixel::util::FlxPoint_obj::__new(null(),null());
	HX_STACK_LINE(31)
	this->id = ID;
	HX_STACK_LINE(33)
	if (((GlobalDeadZone != (int)0))){
		HX_STACK_LINE(34)
		this->deadZone = GlobalDeadZone;
	}
}
;
	return null();
}

FlxGamepad_obj::~FlxGamepad_obj() { }

Dynamic FlxGamepad_obj::__CreateEmpty() { return  new FlxGamepad_obj; }
hx::ObjectPtr< FlxGamepad_obj > FlxGamepad_obj::__new(int ID,hx::Null< Float >  __o_GlobalDeadZone)
{  hx::ObjectPtr< FlxGamepad_obj > result = new FlxGamepad_obj();
	result->__construct(ID,__o_GlobalDeadZone);
	return result;}

Dynamic FlxGamepad_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxGamepad_obj > result = new FlxGamepad_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

bool FlxGamepad_obj::anyInput( ){
	HX_STACK_PUSH("FlxGamepad::anyInput","flixel/system/input/gamepad/FlxGamepad.hx",186);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static Dynamic Block( ::flixel::system::input::gamepad::FlxGamepad_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/system/input/gamepad/FlxGamepad.hx",187);
			{
				HX_STACK_LINE(187)
				Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(__this->buttons);		HX_STACK_VAR(_e,"_e");

				HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_2_1,Array< ::Dynamic >,_e)
				Dynamic run(){
					HX_STACK_PUSH("*::_Function_2_1","flixel/system/input/gamepad/FlxGamepad.hx",187);
					{
						HX_STACK_LINE(187)
						return _e->__get((int)0).StaticCast< ::haxe::ds::IntMap >()->iterator();
					}
					return null();
				}
				HX_END_LOCAL_FUNC0(return)

				HX_STACK_LINE(187)
				return  Dynamic(new _Function_2_1(_e));
			}
			return null();
		}
	};
	HX_STACK_LINE(187)
	for(::cpp::FastIterator_obj< ::flixel::system::input::gamepad::FlxGamepadButton > *__it = ::cpp::CreateFastIterator< ::flixel::system::input::gamepad::FlxGamepadButton >((_Function_1_1::Block(this))());  __it->hasNext(); ){
		::flixel::system::input::gamepad::FlxGamepadButton button = __it->next();
		if (((button->current > (int)0))){
			HX_STACK_LINE(190)
			return true;
		}
;
	}
	HX_STACK_LINE(195)
	int numAxis = this->axis->length;		HX_STACK_VAR(numAxis,"numAxis");
	HX_STACK_LINE(197)
	{
		HX_STACK_LINE(197)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(197)
		while(((_g < numAxis))){
			HX_STACK_LINE(197)
			int i = (_g)++;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(199)
			if (((this->axis->__get((int)0) != (int)0))){
				HX_STACK_LINE(200)
				return true;
			}
		}
	}
	HX_STACK_LINE(205)
	if (((bool((this->ball->x != (int)0)) || bool((this->ball->y != (int)0))))){
		HX_STACK_LINE(206)
		return true;
	}
	HX_STACK_LINE(210)
	if (((bool((this->hat->x != (int)0)) || bool((this->hat->y != (int)0))))){
		HX_STACK_LINE(211)
		return true;
	}
	HX_STACK_LINE(215)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxGamepad_obj,anyInput,return )

bool FlxGamepad_obj::anyButton( ){
	HX_STACK_PUSH("FlxGamepad::anyButton","flixel/system/input/gamepad/FlxGamepad.hx",168);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static Dynamic Block( ::flixel::system::input::gamepad::FlxGamepad_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/system/input/gamepad/FlxGamepad.hx",169);
			{
				HX_STACK_LINE(169)
				Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(__this->buttons);		HX_STACK_VAR(_e,"_e");

				HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_2_1,Array< ::Dynamic >,_e)
				Dynamic run(){
					HX_STACK_PUSH("*::_Function_2_1","flixel/system/input/gamepad/FlxGamepad.hx",169);
					{
						HX_STACK_LINE(169)
						return _e->__get((int)0).StaticCast< ::haxe::ds::IntMap >()->iterator();
					}
					return null();
				}
				HX_END_LOCAL_FUNC0(return)

				HX_STACK_LINE(169)
				return  Dynamic(new _Function_2_1(_e));
			}
			return null();
		}
	};
	HX_STACK_LINE(169)
	for(::cpp::FastIterator_obj< ::flixel::system::input::gamepad::FlxGamepadButton > *__it = ::cpp::CreateFastIterator< ::flixel::system::input::gamepad::FlxGamepadButton >((_Function_1_1::Block(this))());  __it->hasNext(); ){
		::flixel::system::input::gamepad::FlxGamepadButton button = __it->next();
		if (((button->current > (int)0))){
			HX_STACK_LINE(172)
			return true;
		}
;
	}
	HX_STACK_LINE(177)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxGamepad_obj,anyButton,return )

Float FlxGamepad_obj::getAxis( int AxisID){
	HX_STACK_PUSH("FlxGamepad::getAxis","flixel/system/input/gamepad/FlxGamepad.hx",148);
	HX_STACK_THIS(this);
	HX_STACK_ARG(AxisID,"AxisID");
	HX_STACK_LINE(149)
	if (((bool((AxisID < (int)0)) || bool((AxisID >= this->axis->length))))){
		HX_STACK_LINE(150)
		return (int)0;
	}
	HX_STACK_LINE(154)
	if (((::Math_obj::abs(this->axis->__get(AxisID)) > this->deadZone))){
		HX_STACK_LINE(155)
		return this->axis->__get(AxisID);
	}
	HX_STACK_LINE(159)
	return (int)0;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxGamepad_obj,getAxis,return )

bool FlxGamepad_obj::justReleased( int ButtonID){
	HX_STACK_PUSH("FlxGamepad::justReleased","flixel/system/input/gamepad/FlxGamepad.hx",138);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ButtonID,"ButtonID");
	HX_STACK_LINE(139)
	if ((this->buttons->exists(ButtonID))){
		HX_STACK_LINE(140)
		return (this->buttons->get(ButtonID)->__Field(HX_CSTRING("current"),true) == (int)-1);
	}
	HX_STACK_LINE(144)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxGamepad_obj,justReleased,return )

bool FlxGamepad_obj::justPressed( int ButtonID){
	HX_STACK_PUSH("FlxGamepad::justPressed","flixel/system/input/gamepad/FlxGamepad.hx",122);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ButtonID,"ButtonID");
	HX_STACK_LINE(123)
	if ((this->buttons->exists(ButtonID))){
		HX_STACK_LINE(124)
		return (this->buttons->get(ButtonID)->__Field(HX_CSTRING("current"),true) == (int)2);
	}
	HX_STACK_LINE(128)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxGamepad_obj,justPressed,return )

bool FlxGamepad_obj::pressed( int ButtonID){
	HX_STACK_PUSH("FlxGamepad::pressed","flixel/system/input/gamepad/FlxGamepad.hx",106);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ButtonID,"ButtonID");
	HX_STACK_LINE(107)
	if ((this->buttons->exists(ButtonID))){
		HX_STACK_LINE(108)
		return (this->buttons->get(ButtonID)->__Field(HX_CSTRING("current"),true) > (int)0);
	}
	HX_STACK_LINE(112)
	return false;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxGamepad_obj,pressed,return )

Void FlxGamepad_obj::destroy( ){
{
		HX_STACK_PUSH("FlxGamepad::destroy","flixel/system/input/gamepad/FlxGamepad.hx",92);
		HX_STACK_THIS(this);
		HX_STACK_LINE(93)
		this->buttons = null();
		HX_STACK_LINE(94)
		this->axis = null();
		HX_STACK_LINE(95)
		this->hat = null();
		HX_STACK_LINE(96)
		this->ball = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxGamepad_obj,destroy,(void))

Void FlxGamepad_obj::reset( ){
{
		HX_STACK_PUSH("FlxGamepad::reset","flixel/system/input/gamepad/FlxGamepad.hx",73);
		HX_STACK_THIS(this);
		struct _Function_1_1{
			inline static Dynamic Block( ::flixel::system::input::gamepad::FlxGamepad_obj *__this){
				HX_STACK_PUSH("*::closure","flixel/system/input/gamepad/FlxGamepad.hx",74);
				{
					HX_STACK_LINE(74)
					Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(__this->buttons);		HX_STACK_VAR(_e,"_e");

					HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_2_1,Array< ::Dynamic >,_e)
					Dynamic run(){
						HX_STACK_PUSH("*::_Function_2_1","flixel/system/input/gamepad/FlxGamepad.hx",74);
						{
							HX_STACK_LINE(74)
							return _e->__get((int)0).StaticCast< ::haxe::ds::IntMap >()->iterator();
						}
						return null();
					}
					HX_END_LOCAL_FUNC0(return)

					HX_STACK_LINE(74)
					return  Dynamic(new _Function_2_1(_e));
				}
				return null();
			}
		};
		HX_STACK_LINE(74)
		for(::cpp::FastIterator_obj< ::flixel::system::input::gamepad::FlxGamepadButton > *__it = ::cpp::CreateFastIterator< ::flixel::system::input::gamepad::FlxGamepadButton >((_Function_1_1::Block(this))());  __it->hasNext(); ){
			::flixel::system::input::gamepad::FlxGamepadButton button = __it->next();
			{
				HX_STACK_LINE(76)
				button->current = (int)0;
				HX_STACK_LINE(77)
				button->last = (int)0;
			}
;
		}
		HX_STACK_LINE(80)
		int numAxis = this->axis->length;		HX_STACK_VAR(numAxis,"numAxis");
		HX_STACK_LINE(82)
		{
			HX_STACK_LINE(82)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(82)
			while(((_g < numAxis))){
				HX_STACK_LINE(82)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(84)
				this->axis[i] = (int)0;
			}
		}
		HX_STACK_LINE(87)
		this->hat->set(null(),null());
		HX_STACK_LINE(88)
		this->ball->set(null(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxGamepad_obj,reset,(void))

Void FlxGamepad_obj::update( ){
{
		HX_STACK_PUSH("FlxGamepad::update","flixel/system/input/gamepad/FlxGamepad.hx",56);
		HX_STACK_THIS(this);
		struct _Function_1_1{
			inline static Dynamic Block( ::flixel::system::input::gamepad::FlxGamepad_obj *__this){
				HX_STACK_PUSH("*::closure","flixel/system/input/gamepad/FlxGamepad.hx",57);
				{
					HX_STACK_LINE(57)
					Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(__this->buttons);		HX_STACK_VAR(_e,"_e");

					HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_2_1,Array< ::Dynamic >,_e)
					Dynamic run(){
						HX_STACK_PUSH("*::_Function_2_1","flixel/system/input/gamepad/FlxGamepad.hx",57);
						{
							HX_STACK_LINE(57)
							return _e->__get((int)0).StaticCast< ::haxe::ds::IntMap >()->iterator();
						}
						return null();
					}
					HX_END_LOCAL_FUNC0(return)

					HX_STACK_LINE(57)
					return  Dynamic(new _Function_2_1(_e));
				}
				return null();
			}
		};
		HX_STACK_LINE(56)
		for(::cpp::FastIterator_obj< ::flixel::system::input::gamepad::FlxGamepadButton > *__it = ::cpp::CreateFastIterator< ::flixel::system::input::gamepad::FlxGamepadButton >((_Function_1_1::Block(this))());  __it->hasNext(); ){
			::flixel::system::input::gamepad::FlxGamepadButton button = __it->next();
			{
				HX_STACK_LINE(59)
				if (((bool((button->last == (int)-1)) && bool((button->current == (int)-1))))){
					HX_STACK_LINE(60)
					button->current = (int)0;
				}
				else{
					HX_STACK_LINE(63)
					if (((bool((button->last == (int)2)) && bool((button->current == (int)2))))){
						HX_STACK_LINE(64)
						button->current = (int)1;
					}
				}
				HX_STACK_LINE(68)
				button->last = button->current;
			}
;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxGamepad_obj,update,(void))

::flixel::system::input::gamepad::FlxGamepadButton FlxGamepad_obj::getButton( int ButtonID){
	HX_STACK_PUSH("FlxGamepad::getButton","flixel/system/input/gamepad/FlxGamepad.hx",40);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ButtonID,"ButtonID");
	HX_STACK_LINE(41)
	::flixel::system::input::gamepad::FlxGamepadButton gamepadButton = this->buttons->get(ButtonID);		HX_STACK_VAR(gamepadButton,"gamepadButton");
	HX_STACK_LINE(43)
	if (((gamepadButton == null()))){
		HX_STACK_LINE(45)
		gamepadButton = ::flixel::system::input::gamepad::FlxGamepadButton_obj::__new(ButtonID,null(),null());
		HX_STACK_LINE(46)
		this->buttons->set(ButtonID,gamepadButton);
	}
	HX_STACK_LINE(49)
	return gamepadButton;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxGamepad_obj,getButton,return )


FlxGamepad_obj::FlxGamepad_obj()
{
}

void FlxGamepad_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxGamepad);
	HX_MARK_MEMBER_NAME(deadZone,"deadZone");
	HX_MARK_MEMBER_NAME(id,"id");
	HX_MARK_MEMBER_NAME(ball,"ball");
	HX_MARK_MEMBER_NAME(hat,"hat");
	HX_MARK_MEMBER_NAME(axis,"axis");
	HX_MARK_MEMBER_NAME(buttons,"buttons");
	HX_MARK_END_CLASS();
}

void FlxGamepad_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(deadZone,"deadZone");
	HX_VISIT_MEMBER_NAME(id,"id");
	HX_VISIT_MEMBER_NAME(ball,"ball");
	HX_VISIT_MEMBER_NAME(hat,"hat");
	HX_VISIT_MEMBER_NAME(axis,"axis");
	HX_VISIT_MEMBER_NAME(buttons,"buttons");
}

Dynamic FlxGamepad_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"id") ) { return id; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"hat") ) { return hat; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"ball") ) { return ball; }
		if (HX_FIELD_EQ(inName,"axis") ) { return axis; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"reset") ) { return reset_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"getAxis") ) { return getAxis_dyn(); }
		if (HX_FIELD_EQ(inName,"pressed") ) { return pressed_dyn(); }
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"buttons") ) { return buttons; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"anyInput") ) { return anyInput_dyn(); }
		if (HX_FIELD_EQ(inName,"deadZone") ) { return deadZone; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"anyButton") ) { return anyButton_dyn(); }
		if (HX_FIELD_EQ(inName,"getButton") ) { return getButton_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"justPressed") ) { return justPressed_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"justReleased") ) { return justReleased_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxGamepad_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"id") ) { id=inValue.Cast< int >(); return inValue; }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"hat") ) { hat=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"ball") ) { ball=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"axis") ) { axis=inValue.Cast< Array< Float > >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"buttons") ) { buttons=inValue.Cast< ::haxe::ds::IntMap >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"deadZone") ) { deadZone=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxGamepad_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("deadZone"));
	outFields->push(HX_CSTRING("id"));
	outFields->push(HX_CSTRING("ball"));
	outFields->push(HX_CSTRING("hat"));
	outFields->push(HX_CSTRING("axis"));
	outFields->push(HX_CSTRING("buttons"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("anyInput"),
	HX_CSTRING("anyButton"),
	HX_CSTRING("getAxis"),
	HX_CSTRING("justReleased"),
	HX_CSTRING("justPressed"),
	HX_CSTRING("pressed"),
	HX_CSTRING("destroy"),
	HX_CSTRING("reset"),
	HX_CSTRING("update"),
	HX_CSTRING("getButton"),
	HX_CSTRING("deadZone"),
	HX_CSTRING("id"),
	HX_CSTRING("ball"),
	HX_CSTRING("hat"),
	HX_CSTRING("axis"),
	HX_CSTRING("buttons"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxGamepad_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxGamepad_obj::__mClass,"__mClass");
};

Class FlxGamepad_obj::__mClass;

void FlxGamepad_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.system.input.gamepad.FlxGamepad"), hx::TCanCast< FlxGamepad_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxGamepad_obj::__boot()
{
}

} // end namespace flixel
} // end namespace system
} // end namespace input
} // end namespace gamepad
