#include <hxcpp.h>

#ifndef INCLUDED_flixel_FlxBasic
#include <flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_flixel_FlxObject
#include <flixel/FlxObject.h>
#endif
#ifndef INCLUDED_flixel_FlxSprite
#include <flixel/FlxSprite.h>
#endif
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
#endif
#ifndef INCLUDED_flixel_group_FlxSpriteGroup
#include <flixel/group/FlxSpriteGroup.h>
#endif
#ifndef INCLUDED_flixel_group__FlxSpriteGroup_FlxPointHelper
#include <flixel/group/_FlxSpriteGroup/FlxPointHelper.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
namespace flixel{
namespace group{
namespace _FlxSpriteGroup{

Void FlxPointHelper_obj::__construct(::flixel::group::FlxSpriteGroup parent,Dynamic transformFunc)
{
HX_STACK_PUSH("FlxPointHelper::new","flixel/group/FlxSpriteGroup.hx",949);
{
	HX_STACK_LINE(950)
	this->_parent = parent;
	HX_STACK_LINE(951)
	this->_transformFunc = transformFunc;
	HX_STACK_LINE(952)
	super::__construct((int)0,(int)0);
}
;
	return null();
}

FlxPointHelper_obj::~FlxPointHelper_obj() { }

Dynamic FlxPointHelper_obj::__CreateEmpty() { return  new FlxPointHelper_obj; }
hx::ObjectPtr< FlxPointHelper_obj > FlxPointHelper_obj::__new(::flixel::group::FlxSpriteGroup parent,Dynamic transformFunc)
{  hx::ObjectPtr< FlxPointHelper_obj > result = new FlxPointHelper_obj();
	result->__construct(parent,transformFunc);
	return result;}

Dynamic FlxPointHelper_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxPointHelper_obj > result = new FlxPointHelper_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Void FlxPointHelper_obj::destroy( ){
{
		HX_STACK_PUSH("FlxPointHelper::destroy","flixel/group/FlxSpriteGroup.hx",977);
		HX_STACK_THIS(this);
		HX_STACK_LINE(978)
		this->super::destroy();
		HX_STACK_LINE(979)
		this->_parent = null();
		HX_STACK_LINE(980)
		this->_transformFunc = null();
	}
return null();
}


Float FlxPointHelper_obj::set_y( Float Value){
	HX_STACK_PUSH("FlxPointHelper::set_y","flixel/group/FlxSpriteGroup.hx",970);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(971)
	this->super::set_y(Value);
	HX_STACK_LINE(972)
	this->_parent->transformChildren_flixel_util_FlxPoint(this->_transformFunc_dyn(),hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(973)
	return Value;
}


Float FlxPointHelper_obj::set_x( Float Value){
	HX_STACK_PUSH("FlxPointHelper::set_x","flixel/group/FlxSpriteGroup.hx",963);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(964)
	this->super::set_x(Value);
	HX_STACK_LINE(965)
	this->_parent->transformChildren_flixel_util_FlxPoint(this->_transformFunc_dyn(),hx::ObjectPtr<OBJ_>(this));
	HX_STACK_LINE(966)
	return Value;
}


::flixel::util::FlxPoint FlxPointHelper_obj::set( hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y){
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
	HX_STACK_PUSH("FlxPointHelper::set","flixel/group/FlxSpriteGroup.hx",956);
	HX_STACK_THIS(this);
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
{
		HX_STACK_LINE(957)
		this->super::set(X,Y);
		HX_STACK_LINE(958)
		this->_parent->transformChildren_flixel_util_FlxPoint(this->_transformFunc_dyn(),hx::ObjectPtr<OBJ_>(this));
		HX_STACK_LINE(959)
		return hx::ObjectPtr<OBJ_>(this);
	}
}



FlxPointHelper_obj::FlxPointHelper_obj()
{
}

void FlxPointHelper_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxPointHelper);
	HX_MARK_MEMBER_NAME(_transformFunc,"_transformFunc");
	HX_MARK_MEMBER_NAME(_parent,"_parent");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxPointHelper_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_transformFunc,"_transformFunc");
	HX_VISIT_MEMBER_NAME(_parent,"_parent");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxPointHelper_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"set") ) { return set_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"set_y") ) { return set_y_dyn(); }
		if (HX_FIELD_EQ(inName,"set_x") ) { return set_x_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"_parent") ) { return _parent; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"_transformFunc") ) { return _transformFunc; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxPointHelper_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"_parent") ) { _parent=inValue.Cast< ::flixel::group::FlxSpriteGroup >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"_transformFunc") ) { _transformFunc=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxPointHelper_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_parent"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("destroy"),
	HX_CSTRING("set_y"),
	HX_CSTRING("set_x"),
	HX_CSTRING("set"),
	HX_CSTRING("_transformFunc"),
	HX_CSTRING("_parent"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxPointHelper_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxPointHelper_obj::__mClass,"__mClass");
};

Class FlxPointHelper_obj::__mClass;

void FlxPointHelper_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.group._FlxSpriteGroup.FlxPointHelper"), hx::TCanCast< FlxPointHelper_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxPointHelper_obj::__boot()
{
}

} // end namespace flixel
} // end namespace group
} // end namespace _FlxSpriteGroup
