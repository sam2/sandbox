#include <hxcpp.h>

#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_flash_display_CapsStyle
#include <flash/display/CapsStyle.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObject
#include <flash/display/DisplayObject.h>
#endif
#ifndef INCLUDED_flash_display_DisplayObjectContainer
#include <flash/display/DisplayObjectContainer.h>
#endif
#ifndef INCLUDED_flash_display_Graphics
#include <flash/display/Graphics.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_display_InteractiveObject
#include <flash/display/InteractiveObject.h>
#endif
#ifndef INCLUDED_flash_display_JointStyle
#include <flash/display/JointStyle.h>
#endif
#ifndef INCLUDED_flash_display_LineScaleMode
#include <flash/display/LineScaleMode.h>
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
#ifndef INCLUDED_flixel_FlxObject
#include <flixel/FlxObject.h>
#endif
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
#endif
#ifndef INCLUDED_flixel_group_FlxTypedGroup
#include <flixel/group/FlxTypedGroup.h>
#endif
#ifndef INCLUDED_flixel_system_FlxCollisionType
#include <flixel/system/FlxCollisionType.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_CameraFrontEnd
#include <flixel/system/frontEnds/CameraFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_LogFrontEnd
#include <flixel/system/frontEnds/LogFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_layer_Region
#include <flixel/system/layer/Region.h>
#endif
#ifndef INCLUDED_flixel_system_layer_frames_FlxSpriteFrames
#include <flixel/system/layer/frames/FlxSpriteFrames.h>
#endif
#ifndef INCLUDED_flixel_tile_FlxTilemap
#include <flixel/tile/FlxTilemap.h>
#endif
#ifndef INCLUDED_flixel_util_FlxMath
#include <flixel/util/FlxMath.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_FlxRect
#include <flixel/util/FlxRect.h>
#endif
#ifndef INCLUDED_flixel_util_loaders_CachedGraphics
#include <flixel/util/loaders/CachedGraphics.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{

Void FlxObject_obj::__construct(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< Float >  __o_Width,hx::Null< Float >  __o_Height)
{
HX_STACK_PUSH("FlxObject::new","flixel/FlxObject.hx",22);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
Float Width = __o_Width.Default(0);
Float Height = __o_Height.Default(0);
{
	HX_STACK_LINE(1077)
	this->_boundingBoxColorOverritten = false;
	HX_STACK_LINE(173)
	this->allowCollisions = (int)4369;
	HX_STACK_LINE(168)
	this->wasTouching = (int)0;
	HX_STACK_LINE(163)
	this->touching = (int)0;
	HX_STACK_LINE(158)
	this->health = (int)1;
	HX_STACK_LINE(154)
	this->maxAngular = (int)10000;
	HX_STACK_LINE(150)
	this->angularDrag = (int)0;
	HX_STACK_LINE(146)
	this->angularAcceleration = (int)0;
	HX_STACK_LINE(142)
	this->angularVelocity = (int)0;
	HX_STACK_LINE(138)
	this->elasticity = (int)0;
	HX_STACK_LINE(134)
	this->mass = (int)1;
	HX_STACK_LINE(105)
	this->forceComplexRender = false;
	HX_STACK_LINE(94)
	this->immovable = false;
	HX_STACK_LINE(90)
	this->moves = true;
	HX_STACK_LINE(85)
	this->angle = (int)0;
	HX_STACK_LINE(72)
	this->y = (int)0;
	HX_STACK_LINE(68)
	this->x = (int)0;
	HX_STACK_LINE(211)
	super::__construct();
	HX_STACK_LINE(213)
	this->set_x(X);
	HX_STACK_LINE(214)
	this->set_y(Y);
	HX_STACK_LINE(215)
	this->set_width(Width);
	HX_STACK_LINE(216)
	this->set_height(Height);
	HX_STACK_LINE(218)
	this->initVars();
}
;
	return null();
}

FlxObject_obj::~FlxObject_obj() { }

Dynamic FlxObject_obj::__CreateEmpty() { return  new FlxObject_obj; }
hx::ObjectPtr< FlxObject_obj > FlxObject_obj::__new(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< Float >  __o_Width,hx::Null< Float >  __o_Height)
{  hx::ObjectPtr< FlxObject_obj > result = new FlxObject_obj();
	result->__construct(__o_X,__o_Y,__o_Width,__o_Height);
	return result;}

Dynamic FlxObject_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxObject_obj > result = new FlxObject_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3]);
	return result;}

int FlxObject_obj::set_debugBoundingBoxColor( int Value){
	HX_STACK_PUSH("FlxObject::set_debugBoundingBoxColor","flixel/FlxObject.hx",1072);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1073)
	this->_boundingBoxColorOverritten = true;
	HX_STACK_LINE(1074)
	return this->debugBoundingBoxColor = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_debugBoundingBoxColor,return )

::flixel::util::FlxPoint FlxObject_obj::set_maxVelocity( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxObject::set_maxVelocity","flixel/FlxObject.hx",1060);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1061)
	this->_maxVelocity = Value;
	HX_STACK_LINE(1062)
	return this->maxVelocity = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_maxVelocity,return )

::flixel::util::FlxPoint FlxObject_obj::set_drag( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxObject::set_drag","flixel/FlxObject.hx",1054);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1055)
	this->_drag = Value;
	HX_STACK_LINE(1056)
	return this->drag = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_drag,return )

::flixel::util::FlxPoint FlxObject_obj::set_acceleration( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxObject::set_acceleration","flixel/FlxObject.hx",1048);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1049)
	this->_acceleration = Value;
	HX_STACK_LINE(1050)
	return this->acceleration = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_acceleration,return )

::flixel::util::FlxPoint FlxObject_obj::set_velocity( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxObject::set_velocity","flixel/FlxObject.hx",1042);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1043)
	this->_velocity = Value;
	HX_STACK_LINE(1044)
	return this->velocity = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_velocity,return )

::flixel::util::FlxPoint FlxObject_obj::set_scrollFactor( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxObject::set_scrollFactor","flixel/FlxObject.hx",1036);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1037)
	this->_scrollFactor = Value;
	HX_STACK_LINE(1038)
	return this->scrollFactor = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_scrollFactor,return )

bool FlxObject_obj::set_forceComplexRender( bool Value){
	HX_STACK_PUSH("FlxObject::set_forceComplexRender","flixel/FlxObject.hx",1031);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1031)
	return this->forceComplexRender = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_forceComplexRender,return )

bool FlxObject_obj::set_immovable( bool Value){
	HX_STACK_PUSH("FlxObject::set_immovable","flixel/FlxObject.hx",1026);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1026)
	return this->immovable = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_immovable,return )

bool FlxObject_obj::set_moves( bool Value){
	HX_STACK_PUSH("FlxObject::set_moves","flixel/FlxObject.hx",1021);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1021)
	return this->moves = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_moves,return )

Float FlxObject_obj::set_angle( Float Value){
	HX_STACK_PUSH("FlxObject::set_angle","flixel/FlxObject.hx",1016);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(1016)
	return this->angle = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_angle,return )

bool FlxObject_obj::set_solid( bool Solid){
	HX_STACK_PUSH("FlxObject::set_solid","flixel/FlxObject.hx",1003);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Solid,"Solid");
	HX_STACK_LINE(1004)
	if ((Solid)){
		HX_STACK_LINE(1005)
		this->allowCollisions = (int)4369;
	}
	else{
		HX_STACK_LINE(1009)
		this->allowCollisions = (int)0;
	}
	HX_STACK_LINE(1012)
	return Solid;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_solid,return )

bool FlxObject_obj::get_solid( ){
	HX_STACK_PUSH("FlxObject::get_solid","flixel/FlxObject.hx",998);
	HX_STACK_THIS(this);
	HX_STACK_LINE(998)
	return (((int(this->allowCollisions) & int((int)4369))) > (int)0);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxObject_obj,get_solid,return )

Float FlxObject_obj::set_height( Float Height){
	HX_STACK_PUSH("FlxObject::set_height","flixel/FlxObject.hx",980);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Height,"Height");
	HX_STACK_LINE(982)
	if (((Height < (int)0))){
		HX_STACK_LINE(983)
		::flixel::FlxG_obj::log->warn(HX_CSTRING("An object's height cannot be smaller than 0. Use offset for sprites to control the hitbox position!"));
	}
	else{
		HX_STACK_LINE(987)
		this->height = Height;
	}
	HX_STACK_LINE(994)
	return Height;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_height,return )

Float FlxObject_obj::set_width( Float Width){
	HX_STACK_PUSH("FlxObject::set_width","flixel/FlxObject.hx",962);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Width,"Width");
	HX_STACK_LINE(964)
	if (((Width < (int)0))){
		HX_STACK_LINE(965)
		::flixel::FlxG_obj::log->warn(HX_CSTRING("An object's width cannot be smaller than 0. Use offset for sprites to control the hitbox position!"));
	}
	else{
		HX_STACK_LINE(969)
		this->width = Width;
	}
	HX_STACK_LINE(976)
	return Width;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_width,return )

Float FlxObject_obj::set_y( Float NewY){
	HX_STACK_PUSH("FlxObject::set_y","flixel/FlxObject.hx",957);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewY,"NewY");
	HX_STACK_LINE(957)
	return this->y = NewY;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_y,return )

Float FlxObject_obj::set_x( Float NewX){
	HX_STACK_PUSH("FlxObject::set_x","flixel/FlxObject.hx",952);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewX,"NewX");
	HX_STACK_LINE(952)
	return this->x = NewX;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_x,return )

::flixel::util::loaders::CachedGraphics FlxObject_obj::set_cachedGraphics( ::flixel::util::loaders::CachedGraphics Value){
	HX_STACK_PUSH("FlxObject::set_cachedGraphics","flixel/FlxObject.hx",935);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(936)
	if (((bool((this->cachedGraphics != null())) && bool((this->cachedGraphics != Value))))){
		HX_STACK_LINE(938)
		::flixel::util::loaders::CachedGraphics _g = this->cachedGraphics;		HX_STACK_VAR(_g,"_g");
		int _g1 = _g->get_useCount();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(938)
		_g->set_useCount((_g1 - (int)1));
		HX_STACK_LINE(938)
		_g1;
	}
	HX_STACK_LINE(941)
	if (((bool((this->cachedGraphics != Value)) && bool((Value != null()))))){
		HX_STACK_LINE(943)
		::flixel::util::loaders::CachedGraphics _g = Value;		HX_STACK_VAR(_g,"_g");
		int _g1 = _g->get_useCount();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(943)
		_g->set_useCount((_g1 + (int)1));
		HX_STACK_LINE(943)
		_g1;
	}
	HX_STACK_LINE(945)
	return this->cachedGraphics = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,set_cachedGraphics,return )

Void FlxObject_obj::setSize( Float Width,Float Height){
{
		HX_STACK_PUSH("FlxObject::setSize","flixel/FlxObject.hx",924);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Width,"Width");
		HX_STACK_ARG(Height,"Height");
		HX_STACK_LINE(925)
		this->set_width(Width);
		HX_STACK_LINE(926)
		this->set_height(Height);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,setSize,(void))

Void FlxObject_obj::setPosition( hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y){
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
	HX_STACK_PUSH("FlxObject::setPosition","flixel/FlxObject.hx",913);
	HX_STACK_THIS(this);
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
{
		HX_STACK_LINE(914)
		this->set_x(X);
		HX_STACK_LINE(915)
		this->set_y(Y);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,setPosition,(void))

Void FlxObject_obj::hurt( Float Damage){
{
		HX_STACK_PUSH("FlxObject::hurt","flixel/FlxObject.hx",651);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Damage,"Damage");
		HX_STACK_LINE(652)
		this->health = (this->health - Damage);
		HX_STACK_LINE(653)
		if (((this->health <= (int)0))){
			HX_STACK_LINE(654)
			this->kill();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,hurt,(void))

bool FlxObject_obj::justTouched( int Direction){
	HX_STACK_PUSH("FlxObject::justTouched","flixel/FlxObject.hx",641);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Direction,"Direction");
	HX_STACK_LINE(641)
	return (bool((((int(this->touching) & int(Direction))) > (int)0)) && bool((((int(this->wasTouching) & int(Direction))) <= (int)0)));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,justTouched,return )

bool FlxObject_obj::isTouching( int Direction){
	HX_STACK_PUSH("FlxObject::isTouching","flixel/FlxObject.hx",631);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Direction,"Direction");
	HX_STACK_LINE(631)
	return (((int(this->touching) & int(Direction))) > (int)0);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,isTouching,return )

Void FlxObject_obj::reset( Float X,Float Y){
{
		HX_STACK_PUSH("FlxObject::reset","flixel/FlxObject.hx",616);
		HX_STACK_THIS(this);
		HX_STACK_ARG(X,"X");
		HX_STACK_ARG(Y,"Y");
		HX_STACK_LINE(617)
		this->revive();
		HX_STACK_LINE(618)
		this->touching = (int)0;
		HX_STACK_LINE(619)
		this->wasTouching = (int)0;
		HX_STACK_LINE(620)
		this->setPosition(X,Y);
		HX_STACK_LINE(621)
		this->last->set(this->x,this->y);
		HX_STACK_LINE(622)
		this->velocity->set(null(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,reset,(void))

::flixel::util::FlxPoint FlxObject_obj::getMidpoint( ::flixel::util::FlxPoint point){
	HX_STACK_PUSH("FlxObject::getMidpoint","flixel/FlxObject.hx",601);
	HX_STACK_THIS(this);
	HX_STACK_ARG(point,"point");
	HX_STACK_LINE(602)
	if (((point == null()))){
		HX_STACK_LINE(603)
		point = ::flixel::util::FlxPoint_obj::__new(null(),null());
	}
	HX_STACK_LINE(606)
	return point->set((this->x + (this->width * 0.5)),(this->y + (this->height * 0.5)));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,getMidpoint,return )

::flixel::util::FlxPoint FlxObject_obj::getScreenXY( ::flixel::util::FlxPoint point,::flixel::FlxCamera Camera){
	HX_STACK_PUSH("FlxObject::getScreenXY","flixel/FlxObject.hx",583);
	HX_STACK_THIS(this);
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(Camera,"Camera");
	HX_STACK_LINE(584)
	if (((point == null()))){
		HX_STACK_LINE(585)
		point = ::flixel::util::FlxPoint_obj::__new(null(),null());
	}
	HX_STACK_LINE(588)
	if (((Camera == null()))){
		HX_STACK_LINE(589)
		Camera = ::flixel::FlxG_obj::camera;
	}
	HX_STACK_LINE(592)
	return point->set((this->x - (Camera->scroll->x * this->_scrollFactor->x)),(this->y - (Camera->scroll->y * this->_scrollFactor->y)));
}


HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,getScreenXY,return )

bool FlxObject_obj::inWorldBounds( ){
	HX_STACK_PUSH("FlxObject::inWorldBounds","flixel/FlxObject.hx",572);
	HX_STACK_THIS(this);
	HX_STACK_LINE(572)
	return (bool((bool((bool(((this->x + this->width) > ::flixel::FlxG_obj::worldBounds->x)) && bool((this->x < ::flixel::FlxG_obj::worldBounds->get_right())))) && bool(((this->y + this->height) > ::flixel::FlxG_obj::worldBounds->y)))) && bool((this->y < ::flixel::FlxG_obj::worldBounds->get_bottom())));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxObject_obj,inWorldBounds,return )

bool FlxObject_obj::onScreen( ::flixel::FlxCamera Camera){
	HX_STACK_PUSH("FlxObject::onScreen","flixel/FlxObject.hx",558);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Camera,"Camera");
	HX_STACK_LINE(559)
	if (((Camera == null()))){
		HX_STACK_LINE(560)
		Camera = ::flixel::FlxG_obj::camera;
	}
	HX_STACK_LINE(563)
	this->getScreenXY(this->_point,Camera);
	HX_STACK_LINE(564)
	return (bool((bool((bool(((this->_point->x + this->width) > (int)0)) && bool((this->_point->x < Camera->width)))) && bool(((this->_point->y + this->height) > (int)0)))) && bool((this->_point->y < Camera->height)));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxObject_obj,onScreen,return )

bool FlxObject_obj::overlapsPoint( ::flixel::util::FlxPoint point,hx::Null< bool >  __o_InScreenSpace,::flixel::FlxCamera Camera){
bool InScreenSpace = __o_InScreenSpace.Default(false);
	HX_STACK_PUSH("FlxObject::overlapsPoint","flixel/FlxObject.hx",536);
	HX_STACK_THIS(this);
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(InScreenSpace,"InScreenSpace");
	HX_STACK_ARG(Camera,"Camera");
{
		HX_STACK_LINE(537)
		if ((!(InScreenSpace))){
			HX_STACK_LINE(538)
			return (bool((bool((bool((point->x > this->x)) && bool((point->x < (this->x + this->width))))) && bool((point->y > this->y)))) && bool((point->y < (this->y + this->height))));
		}
		HX_STACK_LINE(542)
		if (((Camera == null()))){
			HX_STACK_LINE(543)
			Camera = ::flixel::FlxG_obj::camera;
		}
		HX_STACK_LINE(546)
		Float X = (point->x - Camera->scroll->x);		HX_STACK_VAR(X,"X");
		HX_STACK_LINE(547)
		Float Y = (point->y - Camera->scroll->y);		HX_STACK_VAR(Y,"Y");
		HX_STACK_LINE(548)
		this->getScreenXY(this->_point,Camera);
		HX_STACK_LINE(549)
		return (bool((bool((bool((X > this->_point->x)) && bool((X < (this->_point->x + this->width))))) && bool((Y > this->_point->y)))) && bool((Y < (this->_point->y + this->height))));
	}
}


HX_DEFINE_DYNAMIC_FUNC3(FlxObject_obj,overlapsPoint,return )

bool FlxObject_obj::overlapsAt( Float X,Float Y,::flixel::FlxBasic ObjectOrGroup,hx::Null< bool >  __o_InScreenSpace,::flixel::FlxCamera Camera){
bool InScreenSpace = __o_InScreenSpace.Default(false);
	HX_STACK_PUSH("FlxObject::overlapsAt","flixel/FlxObject.hx",476);
	HX_STACK_THIS(this);
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
	HX_STACK_ARG(ObjectOrGroup,"ObjectOrGroup");
	HX_STACK_ARG(InScreenSpace,"InScreenSpace");
	HX_STACK_ARG(Camera,"Camera");
{
		HX_STACK_LINE(477)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::SPRITEGROUP))){
			HX_STACK_LINE(478)
			ObjectOrGroup = ::Reflect_obj::field(ObjectOrGroup,HX_CSTRING("group"));
		}
		HX_STACK_LINE(482)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::GROUP))){
			HX_STACK_LINE(484)
			bool results = false;		HX_STACK_VAR(results,"results");
			HX_STACK_LINE(485)
			::flixel::FlxBasic basic;		HX_STACK_VAR(basic,"basic");
			HX_STACK_LINE(486)
			int i = (int)0;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(487)
			::flixel::group::FlxTypedGroup grp = ObjectOrGroup;		HX_STACK_VAR(grp,"grp");
			HX_STACK_LINE(488)
			Array< ::Dynamic > members = grp->get_members();		HX_STACK_VAR(members,"members");
			HX_STACK_LINE(489)
			while(((i < ::Std_obj::_int(grp->length)))){
				HX_STACK_LINE(491)
				basic = members->__get((i)++).StaticCast< ::flixel::FlxBasic >();
				HX_STACK_LINE(492)
				if (((bool((bool((basic != null())) && bool(basic->exists))) && bool(this->overlapsAt(X,Y,basic,InScreenSpace,Camera))))){
					HX_STACK_LINE(494)
					results = true;
					HX_STACK_LINE(495)
					break;
				}
			}
			HX_STACK_LINE(498)
			return results;
		}
		HX_STACK_LINE(501)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
			HX_STACK_LINE(507)
			::flixel::tile::FlxTilemap tilemap = hx::TCast< flixel::tile::FlxTilemap >::cast(ObjectOrGroup);		HX_STACK_VAR(tilemap,"tilemap");
			HX_STACK_LINE(508)
			return tilemap->overlapsAt((tilemap->x - ((X - this->x))),(tilemap->y - ((Y - this->y))),hx::ObjectPtr<OBJ_>(this),InScreenSpace,Camera);
		}
		HX_STACK_LINE(511)
		::flixel::FlxObject object = hx::TCast< flixel::FlxObject >::cast(ObjectOrGroup);		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(512)
		if ((!(InScreenSpace))){
			HX_STACK_LINE(513)
			return (bool((bool((bool(((object->x + object->width) > X)) && bool((object->x < (X + this->width))))) && bool(((object->y + object->height) > Y)))) && bool((object->y < (Y + this->height))));
		}
		HX_STACK_LINE(518)
		if (((Camera == null()))){
			HX_STACK_LINE(519)
			Camera = ::flixel::FlxG_obj::camera;
		}
		HX_STACK_LINE(522)
		::flixel::util::FlxPoint objectScreenPos = object->getScreenXY(null(),Camera);		HX_STACK_VAR(objectScreenPos,"objectScreenPos");
		HX_STACK_LINE(523)
		this->getScreenXY(this->_point,Camera);
		HX_STACK_LINE(524)
		return (bool((bool((bool(((objectScreenPos->x + object->width) > this->_point->x)) && bool((objectScreenPos->x < (this->_point->x + this->width))))) && bool(((objectScreenPos->y + object->height) > this->_point->y)))) && bool((objectScreenPos->y < (this->_point->y + this->height))));
	}
}


HX_DEFINE_DYNAMIC_FUNC5(FlxObject_obj,overlapsAt,return )

bool FlxObject_obj::overlaps( ::flixel::FlxBasic ObjectOrGroup,hx::Null< bool >  __o_InScreenSpace,::flixel::FlxCamera Camera){
bool InScreenSpace = __o_InScreenSpace.Default(false);
	HX_STACK_PUSH("FlxObject::overlaps","flixel/FlxObject.hx",416);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ObjectOrGroup,"ObjectOrGroup");
	HX_STACK_ARG(InScreenSpace,"InScreenSpace");
	HX_STACK_ARG(Camera,"Camera");
{
		HX_STACK_LINE(417)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::SPRITEGROUP))){
			HX_STACK_LINE(418)
			ObjectOrGroup = ::Reflect_obj::field(ObjectOrGroup,HX_CSTRING("group"));
		}
		HX_STACK_LINE(422)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::GROUP))){
			HX_STACK_LINE(424)
			bool results = false;		HX_STACK_VAR(results,"results");
			HX_STACK_LINE(425)
			int i = (int)0;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(426)
			::flixel::FlxBasic basic;		HX_STACK_VAR(basic,"basic");
			HX_STACK_LINE(427)
			::flixel::group::FlxTypedGroup grp = ObjectOrGroup;		HX_STACK_VAR(grp,"grp");
			HX_STACK_LINE(428)
			Array< ::Dynamic > members = grp->get_members();		HX_STACK_VAR(members,"members");
			HX_STACK_LINE(429)
			while(((i < grp->length))){
				HX_STACK_LINE(431)
				basic = members->__get((i)++).StaticCast< ::flixel::FlxBasic >();
				HX_STACK_LINE(432)
				if (((bool((bool((basic != null())) && bool(basic->exists))) && bool(this->overlaps(basic,InScreenSpace,Camera))))){
					HX_STACK_LINE(434)
					results = true;
					HX_STACK_LINE(435)
					break;
				}
			}
			HX_STACK_LINE(438)
			return results;
		}
		HX_STACK_LINE(441)
		if (((ObjectOrGroup->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
			HX_STACK_LINE(442)
			return (hx::TCast< flixel::tile::FlxTilemap >::cast(ObjectOrGroup))->overlaps(hx::ObjectPtr<OBJ_>(this),InScreenSpace,Camera);
		}
		HX_STACK_LINE(448)
		::flixel::FlxObject object = hx::TCast< flixel::FlxObject >::cast(ObjectOrGroup);		HX_STACK_VAR(object,"object");
		HX_STACK_LINE(449)
		if ((!(InScreenSpace))){
			HX_STACK_LINE(450)
			return (bool((bool((bool(((object->x + object->width) > this->x)) && bool((object->x < (this->x + this->width))))) && bool(((object->y + object->height) > this->y)))) && bool((object->y < (this->y + this->height))));
		}
		HX_STACK_LINE(455)
		if (((Camera == null()))){
			HX_STACK_LINE(456)
			Camera = ::flixel::FlxG_obj::camera;
		}
		HX_STACK_LINE(459)
		::flixel::util::FlxPoint objectScreenPos = object->getScreenXY(null(),Camera);		HX_STACK_VAR(objectScreenPos,"objectScreenPos");
		HX_STACK_LINE(460)
		this->getScreenXY(this->_point,Camera);
		HX_STACK_LINE(461)
		return (bool((bool((bool(((objectScreenPos->x + object->width) > this->_point->x)) && bool((objectScreenPos->x < (this->_point->x + this->width))))) && bool(((objectScreenPos->y + object->height) > this->_point->y)))) && bool((objectScreenPos->y < (this->_point->y + this->height))));
	}
}


HX_DEFINE_DYNAMIC_FUNC3(FlxObject_obj,overlaps,return )

Void FlxObject_obj::drawDebugOnCamera( ::flixel::FlxCamera Camera){
{
		HX_STACK_PUSH("FlxObject::drawDebugOnCamera","flixel/FlxObject.hx",348);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Camera,"Camera");
		HX_STACK_LINE(349)
		if (((Camera == null()))){
			HX_STACK_LINE(350)
			Camera = ::flixel::FlxG_obj::camera;
		}
		HX_STACK_LINE(354)
		if (((bool((bool(!(Camera->visible)) || bool(!(Camera->exists)))) || bool(!(this->onScreen(Camera)))))){
			HX_STACK_LINE(355)
			return null();
		}
		HX_STACK_LINE(360)
		Float boundingBoxX = (this->x - (Camera->scroll->x * this->_scrollFactor->x));		HX_STACK_VAR(boundingBoxX,"boundingBoxX");
		HX_STACK_LINE(361)
		Float boundingBoxY = (this->y - (Camera->scroll->y * this->_scrollFactor->y));		HX_STACK_VAR(boundingBoxY,"boundingBoxY");
		HX_STACK_LINE(367)
		if (((bool((this->allowCollisions != (int)0)) && bool(!(this->_boundingBoxColorOverritten))))){
			HX_STACK_LINE(369)
			if (((this->allowCollisions != (int)4369))){
				HX_STACK_LINE(370)
				this->set_debugBoundingBoxColor((int)-16181);
			}
			HX_STACK_LINE(373)
			if ((this->immovable)){
				HX_STACK_LINE(374)
				this->set_debugBoundingBoxColor((int)-16744448);
			}
			else{
				HX_STACK_LINE(378)
				this->set_debugBoundingBoxColor((int)-65536);
			}
		}
		else{
			HX_STACK_LINE(382)
			if ((!(this->_boundingBoxColorOverritten))){
				HX_STACK_LINE(383)
				this->set_debugBoundingBoxColor((int)-16776961);
			}
		}
		HX_STACK_LINE(400)
		::flash::display::Graphics gfx = Camera->_debugLayer->get_graphics();		HX_STACK_VAR(gfx,"gfx");
		HX_STACK_LINE(401)
		gfx->lineStyle((int)1,this->debugBoundingBoxColor,0.5,null(),null(),null(),null(),null());
		HX_STACK_LINE(402)
		gfx->drawRect(boundingBoxX,boundingBoxY,this->width,this->height);
	}
return null();
}


Void FlxObject_obj::draw( ){
{
		HX_STACK_PUSH("FlxObject::draw","flixel/FlxObject.hx",318);
		HX_STACK_THIS(this);
		HX_STACK_LINE(319)
		if (((this->cameras == null()))){
			HX_STACK_LINE(320)
			this->cameras = ::flixel::FlxG_obj::cameras->list;
		}
		HX_STACK_LINE(323)
		::flixel::FlxCamera camera;		HX_STACK_VAR(camera,"camera");
		HX_STACK_LINE(324)
		int i = (int)0;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(325)
		int l = this->cameras->length;		HX_STACK_VAR(l,"l");
		HX_STACK_LINE(326)
		while(((i < l))){
			HX_STACK_LINE(328)
			camera = this->cameras->__get((i)++).StaticCast< ::flixel::FlxCamera >();
			HX_STACK_LINE(329)
			if (((bool((bool(!(camera->visible)) || bool(!(camera->exists)))) || bool(!(this->onScreen(camera)))))){
				HX_STACK_LINE(330)
				continue;
			}
			HX_STACK_LINE(335)
			(::flixel::FlxBasic_obj::_VISIBLECOUNT)++;
		}
	}
return null();
}


Void FlxObject_obj::updateMotion( ){
{
		HX_STACK_PUSH("FlxObject::updateMotion","flixel/FlxObject.hx",290);
		HX_STACK_THIS(this);
		HX_STACK_LINE(291)
		Float delta;		HX_STACK_VAR(delta,"delta");
		HX_STACK_LINE(292)
		Float velocityDelta;		HX_STACK_VAR(velocityDelta,"velocityDelta");
		HX_STACK_LINE(294)
		Float dt = ::flixel::FlxG_obj::elapsed;		HX_STACK_VAR(dt,"dt");
		HX_STACK_LINE(296)
		velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->angularVelocity,this->angularAcceleration,this->angularDrag,this->maxAngular) - this->angularVelocity)));
		HX_STACK_LINE(297)
		hx::AddEq(this->angularVelocity,velocityDelta);
		HX_STACK_LINE(298)
		{
			HX_STACK_LINE(298)
			::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(298)
			_g->set_angle((_g->angle + (this->angularVelocity * dt)));
		}
		HX_STACK_LINE(299)
		hx::AddEq(this->angularVelocity,velocityDelta);
		HX_STACK_LINE(301)
		velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->_velocity->x,this->_acceleration->x,this->_drag->x,this->_maxVelocity->x) - this->_velocity->x)));
		HX_STACK_LINE(302)
		{
			HX_STACK_LINE(302)
			::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(302)
			_g->set_x((_g->x + velocityDelta));
		}
		HX_STACK_LINE(303)
		delta = (this->_velocity->x * dt);
		HX_STACK_LINE(304)
		{
			HX_STACK_LINE(304)
			::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(304)
			_g->set_x((_g->x + velocityDelta));
		}
		HX_STACK_LINE(305)
		{
			HX_STACK_LINE(305)
			::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(305)
			_g->set_x((_g->x + delta));
		}
		HX_STACK_LINE(307)
		velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->_velocity->y,this->_acceleration->y,this->_drag->y,this->_maxVelocity->y) - this->_velocity->y)));
		HX_STACK_LINE(308)
		{
			HX_STACK_LINE(308)
			::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(308)
			_g->set_y((_g->y + velocityDelta));
		}
		HX_STACK_LINE(309)
		delta = (this->_velocity->y * dt);
		HX_STACK_LINE(310)
		{
			HX_STACK_LINE(310)
			::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(310)
			_g->set_y((_g->y + velocityDelta));
		}
		HX_STACK_LINE(311)
		{
			HX_STACK_LINE(311)
			::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(311)
			_g->set_y((_g->y + delta));
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxObject_obj,updateMotion,(void))

Void FlxObject_obj::update( ){
{
		HX_STACK_PUSH("FlxObject::update","flixel/FlxObject.hx",268);
		HX_STACK_THIS(this);
		HX_STACK_LINE(270)
		(::flixel::FlxBasic_obj::_ACTIVECOUNT)++;
		HX_STACK_LINE(273)
		this->last->set_x(this->x);
		HX_STACK_LINE(274)
		this->last->set_y(this->y);
		HX_STACK_LINE(276)
		if ((this->moves)){
			HX_STACK_LINE(278)
			Float delta;		HX_STACK_VAR(delta,"delta");
			HX_STACK_LINE(278)
			Float velocityDelta;		HX_STACK_VAR(velocityDelta,"velocityDelta");
			HX_STACK_LINE(278)
			Float dt = ::flixel::FlxG_obj::elapsed;		HX_STACK_VAR(dt,"dt");
			HX_STACK_LINE(278)
			velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->angularVelocity,this->angularAcceleration,this->angularDrag,this->maxAngular) - this->angularVelocity)));
			HX_STACK_LINE(278)
			hx::AddEq(this->angularVelocity,velocityDelta);
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_angle((_g->angle + (this->angularVelocity * dt)));
			}
			HX_STACK_LINE(278)
			hx::AddEq(this->angularVelocity,velocityDelta);
			HX_STACK_LINE(278)
			velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->_velocity->x,this->_acceleration->x,this->_drag->x,this->_maxVelocity->x) - this->_velocity->x)));
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_x((_g->x + velocityDelta));
			}
			HX_STACK_LINE(278)
			delta = (this->_velocity->x * dt);
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_x((_g->x + velocityDelta));
			}
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_x((_g->x + delta));
			}
			HX_STACK_LINE(278)
			velocityDelta = (0.5 * ((::flixel::util::FlxMath_obj::computeVelocity(this->_velocity->y,this->_acceleration->y,this->_drag->y,this->_maxVelocity->y) - this->_velocity->y)));
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_y((_g->y + velocityDelta));
			}
			HX_STACK_LINE(278)
			delta = (this->_velocity->y * dt);
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::util::FlxPoint _g = this->_velocity;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_y((_g->y + velocityDelta));
			}
			HX_STACK_LINE(278)
			{
				HX_STACK_LINE(278)
				::flixel::FlxObject _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(278)
				_g->set_y((_g->y + delta));
			}
		}
		HX_STACK_LINE(281)
		this->wasTouching = this->touching;
		HX_STACK_LINE(282)
		this->touching = (int)0;
	}
return null();
}


Void FlxObject_obj::destroy( ){
{
		HX_STACK_PUSH("FlxObject::destroy","flixel/FlxObject.hx",241);
		HX_STACK_THIS(this);
		HX_STACK_LINE(242)
		this->super::destroy();
		HX_STACK_LINE(244)
		this->set_velocity(null());
		HX_STACK_LINE(245)
		this->set_acceleration(null());
		HX_STACK_LINE(246)
		this->set_drag(null());
		HX_STACK_LINE(247)
		this->set_maxVelocity(null());
		HX_STACK_LINE(248)
		this->set_scrollFactor(null());
		HX_STACK_LINE(249)
		this->last = null();
		HX_STACK_LINE(250)
		this->cameras = null();
		HX_STACK_LINE(251)
		this->_point = null();
		HX_STACK_LINE(252)
		this->_velocity = null();
		HX_STACK_LINE(253)
		this->_drag = null();
		HX_STACK_LINE(254)
		this->_acceleration = null();
		HX_STACK_LINE(255)
		this->_maxVelocity = null();
		HX_STACK_LINE(256)
		this->_scrollFactor = null();
		HX_STACK_LINE(258)
		this->framesData = null();
		HX_STACK_LINE(259)
		this->set_cachedGraphics(null());
		HX_STACK_LINE(260)
		this->region = null();
	}
return null();
}


Void FlxObject_obj::initVars( ){
{
		HX_STACK_PUSH("FlxObject::initVars","flixel/FlxObject.hx",225);
		HX_STACK_THIS(this);
		HX_STACK_LINE(226)
		this->collisionType = ::flixel::system::FlxCollisionType_obj::OBJECT;
		HX_STACK_LINE(227)
		this->last = ::flixel::util::FlxPoint_obj::__new(this->x,this->y);
		HX_STACK_LINE(228)
		this->set_velocity(::flixel::util::FlxPoint_obj::__new(null(),null()));
		HX_STACK_LINE(229)
		this->set_acceleration(::flixel::util::FlxPoint_obj::__new(null(),null()));
		HX_STACK_LINE(230)
		this->set_drag(::flixel::util::FlxPoint_obj::__new(null(),null()));
		HX_STACK_LINE(231)
		this->set_maxVelocity(::flixel::util::FlxPoint_obj::__new((int)10000,(int)10000));
		HX_STACK_LINE(232)
		this->set_scrollFactor(::flixel::util::FlxPoint_obj::__new((int)1,(int)1));
		HX_STACK_LINE(233)
		this->_point = ::flixel::util::FlxPoint_obj::__new(null(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxObject_obj,initVars,(void))

Float FlxObject_obj::SEPARATE_BIAS;

int FlxObject_obj::LEFT;

int FlxObject_obj::RIGHT;

int FlxObject_obj::UP;

int FlxObject_obj::DOWN;

int FlxObject_obj::NONE;

int FlxObject_obj::CEILING;

int FlxObject_obj::FLOOR;

int FlxObject_obj::WALL;

int FlxObject_obj::ANY;

::flixel::util::FlxPoint FlxObject_obj::_pZero;

::flixel::util::FlxRect FlxObject_obj::_firstSeparateFlxRect;

::flixel::util::FlxRect FlxObject_obj::_secondSeparateFlxRect;

bool FlxObject_obj::separate( ::flixel::FlxObject Object1,::flixel::FlxObject Object2){
	HX_STACK_PUSH("FlxObject::separate","flixel/FlxObject.hx",666);
	HX_STACK_ARG(Object1,"Object1");
	HX_STACK_ARG(Object2,"Object2");
	HX_STACK_LINE(667)
	bool separatedX = ::flixel::FlxObject_obj::separateX(Object1,Object2);		HX_STACK_VAR(separatedX,"separatedX");
	HX_STACK_LINE(668)
	bool separatedY = ::flixel::FlxObject_obj::separateY(Object1,Object2);		HX_STACK_VAR(separatedY,"separatedY");
	HX_STACK_LINE(669)
	return (bool(separatedX) || bool(separatedY));
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,separate,return )

bool FlxObject_obj::separateX( ::flixel::FlxObject Object1,::flixel::FlxObject Object2){
	HX_STACK_PUSH("FlxObject::separateX","flixel/FlxObject.hx",679);
	HX_STACK_ARG(Object1,"Object1");
	HX_STACK_ARG(Object2,"Object2");
	HX_STACK_LINE(681)
	bool obj1immovable = Object1->immovable;		HX_STACK_VAR(obj1immovable,"obj1immovable");
	HX_STACK_LINE(682)
	bool obj2immovable = Object2->immovable;		HX_STACK_VAR(obj2immovable,"obj2immovable");
	HX_STACK_LINE(683)
	if (((bool(obj1immovable) && bool(obj2immovable)))){
		HX_STACK_LINE(684)
		return false;
	}
	HX_STACK_LINE(689)
	if (((Object1->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
		HX_STACK_LINE(690)
		return (hx::TCast< flixel::tile::FlxTilemap >::cast(Object1))->overlapsWithCallback(Object2,::flixel::FlxObject_obj::separateX_dyn(),null(),null());
	}
	HX_STACK_LINE(693)
	if (((Object2->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
		HX_STACK_LINE(694)
		return (hx::TCast< flixel::tile::FlxTilemap >::cast(Object2))->overlapsWithCallback(Object1,::flixel::FlxObject_obj::separateX_dyn(),true,null());
	}
	HX_STACK_LINE(699)
	Float overlap = (int)0;		HX_STACK_VAR(overlap,"overlap");
	HX_STACK_LINE(700)
	Float obj1delta = (Object1->x - Object1->last->x);		HX_STACK_VAR(obj1delta,"obj1delta");
	HX_STACK_LINE(701)
	Float obj2delta = (Object2->x - Object2->last->x);		HX_STACK_VAR(obj2delta,"obj2delta");
	HX_STACK_LINE(703)
	if (((obj1delta != obj2delta))){
		HX_STACK_LINE(706)
		Float obj1deltaAbs = (  (((obj1delta > (int)0))) ? Float(obj1delta) : Float(-(obj1delta)) );		HX_STACK_VAR(obj1deltaAbs,"obj1deltaAbs");
		HX_STACK_LINE(707)
		Float obj2deltaAbs = (  (((obj2delta > (int)0))) ? Float(obj2delta) : Float(-(obj2delta)) );		HX_STACK_VAR(obj2deltaAbs,"obj2deltaAbs");
		struct _Function_2_1{
			inline static ::flixel::util::FlxRect Block( ::flixel::FlxObject &Object1,Float &obj1delta){
				HX_STACK_PUSH("*::closure","flixel/FlxObject.hx",709);
				{
					HX_STACK_LINE(709)
					::flixel::util::FlxRect _this = ::flixel::FlxObject_obj::_firstSeparateFlxRect;		HX_STACK_VAR(_this,"_this");
					HX_STACK_LINE(709)
					_this->x = (Object1->x - ((  (((obj1delta > (int)0))) ? Float(obj1delta) : Float((int)0) )));
					HX_STACK_LINE(709)
					_this->y = Object1->last->y;
					HX_STACK_LINE(709)
					_this->width = (Object1->width + ((  (((obj1delta > (int)0))) ? Float(obj1delta) : Float(-(obj1delta)) )));
					HX_STACK_LINE(709)
					_this->height = Object1->height;
					HX_STACK_LINE(709)
					return _this;
				}
				return null();
			}
		};
		HX_STACK_LINE(709)
		::flixel::util::FlxRect obj1rect = _Function_2_1::Block(Object1,obj1delta);		HX_STACK_VAR(obj1rect,"obj1rect");
		struct _Function_2_2{
			inline static ::flixel::util::FlxRect Block( ::flixel::FlxObject &Object2,Float &obj2delta){
				HX_STACK_PUSH("*::closure","flixel/FlxObject.hx",710);
				{
					HX_STACK_LINE(710)
					::flixel::util::FlxRect _this = ::flixel::FlxObject_obj::_secondSeparateFlxRect;		HX_STACK_VAR(_this,"_this");
					HX_STACK_LINE(710)
					_this->x = (Object2->x - ((  (((obj2delta > (int)0))) ? Float(obj2delta) : Float((int)0) )));
					HX_STACK_LINE(710)
					_this->y = Object2->last->y;
					HX_STACK_LINE(710)
					_this->width = (Object2->width + ((  (((obj2delta > (int)0))) ? Float(obj2delta) : Float(-(obj2delta)) )));
					HX_STACK_LINE(710)
					_this->height = Object2->height;
					HX_STACK_LINE(710)
					return _this;
				}
				return null();
			}
		};
		HX_STACK_LINE(710)
		::flixel::util::FlxRect obj2rect = _Function_2_2::Block(Object2,obj2delta);		HX_STACK_VAR(obj2rect,"obj2rect");
		HX_STACK_LINE(712)
		if (((bool((bool((bool(((obj1rect->x + obj1rect->width) > obj2rect->x)) && bool((obj1rect->x < (obj2rect->x + obj2rect->width))))) && bool(((obj1rect->y + obj1rect->height) > obj2rect->y)))) && bool((obj1rect->y < (obj2rect->y + obj2rect->height)))))){
			HX_STACK_LINE(714)
			Float maxOverlap = ((obj1deltaAbs + obj2deltaAbs) + ::flixel::FlxObject_obj::SEPARATE_BIAS);		HX_STACK_VAR(maxOverlap,"maxOverlap");
			HX_STACK_LINE(717)
			if (((obj1delta > obj2delta))){
				HX_STACK_LINE(719)
				overlap = ((Object1->x + Object1->width) - Object2->x);
				HX_STACK_LINE(720)
				if (((bool((bool((overlap > maxOverlap)) || bool((((int(Object1->allowCollisions) & int((int)16))) == (int)0)))) || bool((((int(Object2->allowCollisions) & int((int)1))) == (int)0))))){
					HX_STACK_LINE(721)
					overlap = (int)0;
				}
				else{
					HX_STACK_LINE(726)
					hx::OrEq(Object1->touching,(int)16);
					HX_STACK_LINE(727)
					hx::OrEq(Object2->touching,(int)1);
				}
			}
			else{
				HX_STACK_LINE(730)
				if (((obj1delta < obj2delta))){
					HX_STACK_LINE(732)
					overlap = ((Object1->x - Object2->width) - Object2->x);
					HX_STACK_LINE(733)
					if (((bool((bool((-(overlap) > maxOverlap)) || bool((((int(Object1->allowCollisions) & int((int)1))) == (int)0)))) || bool((((int(Object2->allowCollisions) & int((int)16))) == (int)0))))){
						HX_STACK_LINE(734)
						overlap = (int)0;
					}
					else{
						HX_STACK_LINE(739)
						hx::OrEq(Object1->touching,(int)1);
						HX_STACK_LINE(740)
						hx::OrEq(Object2->touching,(int)16);
					}
				}
			}
		}
	}
	HX_STACK_LINE(747)
	if (((overlap != (int)0))){
		HX_STACK_LINE(749)
		Float obj1v = Object1->_velocity->x;		HX_STACK_VAR(obj1v,"obj1v");
		HX_STACK_LINE(750)
		Float obj2v = Object2->_velocity->x;		HX_STACK_VAR(obj2v,"obj2v");
		HX_STACK_LINE(752)
		if (((bool(!(obj1immovable)) && bool(!(obj2immovable))))){
			HX_STACK_LINE(754)
			hx::MultEq(overlap,0.5);
			HX_STACK_LINE(755)
			Object1->set_x((Object1->x - overlap));
			HX_STACK_LINE(756)
			{
				HX_STACK_LINE(756)
				::flixel::FlxObject _g = Object2;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(756)
				_g->set_x((_g->x + overlap));
			}
			HX_STACK_LINE(758)
			Float obj1velocity = (::Math_obj::sqrt((Float(((obj2v * obj2v) * Object2->mass)) / Float(Object1->mass))) * ((  (((obj2v > (int)0))) ? int((int)1) : int((int)-1) )));		HX_STACK_VAR(obj1velocity,"obj1velocity");
			HX_STACK_LINE(759)
			Float obj2velocity = (::Math_obj::sqrt((Float(((obj1v * obj1v) * Object1->mass)) / Float(Object2->mass))) * ((  (((obj1v > (int)0))) ? int((int)1) : int((int)-1) )));		HX_STACK_VAR(obj2velocity,"obj2velocity");
			HX_STACK_LINE(760)
			Float average = (((obj1velocity + obj2velocity)) * 0.5);		HX_STACK_VAR(average,"average");
			HX_STACK_LINE(761)
			hx::SubEq(obj1velocity,average);
			HX_STACK_LINE(762)
			hx::SubEq(obj2velocity,average);
			HX_STACK_LINE(763)
			Object1->_velocity->set_x((average + (obj1velocity * Object1->elasticity)));
			HX_STACK_LINE(764)
			Object2->_velocity->set_x((average + (obj2velocity * Object2->elasticity)));
		}
		else{
			HX_STACK_LINE(766)
			if ((!(obj1immovable))){
				HX_STACK_LINE(768)
				Object1->set_x((Object1->x - overlap));
				HX_STACK_LINE(769)
				Object1->_velocity->set_x((obj2v - (obj1v * Object1->elasticity)));
			}
			else{
				HX_STACK_LINE(771)
				if ((!(obj2immovable))){
					HX_STACK_LINE(773)
					{
						HX_STACK_LINE(773)
						::flixel::FlxObject _g = Object2;		HX_STACK_VAR(_g,"_g");
						HX_STACK_LINE(773)
						_g->set_x((_g->x + overlap));
					}
					HX_STACK_LINE(774)
					Object2->_velocity->set_x((obj1v - (obj2v * Object2->elasticity)));
				}
			}
		}
		HX_STACK_LINE(776)
		return true;
	}
	else{
		HX_STACK_LINE(779)
		return false;
	}
	HX_STACK_LINE(747)
	return false;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,separateX,return )

bool FlxObject_obj::separateY( ::flixel::FlxObject Object1,::flixel::FlxObject Object2){
	HX_STACK_PUSH("FlxObject::separateY","flixel/FlxObject.hx",791);
	HX_STACK_ARG(Object1,"Object1");
	HX_STACK_ARG(Object2,"Object2");
	HX_STACK_LINE(793)
	bool obj1immovable = Object1->immovable;		HX_STACK_VAR(obj1immovable,"obj1immovable");
	HX_STACK_LINE(794)
	bool obj2immovable = Object2->immovable;		HX_STACK_VAR(obj2immovable,"obj2immovable");
	HX_STACK_LINE(795)
	if (((bool(obj1immovable) && bool(obj2immovable)))){
		HX_STACK_LINE(796)
		return false;
	}
	HX_STACK_LINE(801)
	if (((Object1->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
		HX_STACK_LINE(802)
		return (hx::TCast< flixel::tile::FlxTilemap >::cast(Object1))->overlapsWithCallback(Object2,::flixel::FlxObject_obj::separateY_dyn(),null(),null());
	}
	HX_STACK_LINE(805)
	if (((Object2->collisionType == ::flixel::system::FlxCollisionType_obj::TILEMAP))){
		HX_STACK_LINE(806)
		return (hx::TCast< flixel::tile::FlxTilemap >::cast(Object2))->overlapsWithCallback(Object1,::flixel::FlxObject_obj::separateY_dyn(),true,null());
	}
	HX_STACK_LINE(811)
	Float overlap = (int)0;		HX_STACK_VAR(overlap,"overlap");
	HX_STACK_LINE(812)
	Float obj1delta = (Object1->y - Object1->last->y);		HX_STACK_VAR(obj1delta,"obj1delta");
	HX_STACK_LINE(813)
	Float obj2delta = (Object2->y - Object2->last->y);		HX_STACK_VAR(obj2delta,"obj2delta");
	HX_STACK_LINE(815)
	if (((obj1delta != obj2delta))){
		HX_STACK_LINE(818)
		Float obj1deltaAbs = (  (((obj1delta > (int)0))) ? Float(obj1delta) : Float(-(obj1delta)) );		HX_STACK_VAR(obj1deltaAbs,"obj1deltaAbs");
		HX_STACK_LINE(819)
		Float obj2deltaAbs = (  (((obj2delta > (int)0))) ? Float(obj2delta) : Float(-(obj2delta)) );		HX_STACK_VAR(obj2deltaAbs,"obj2deltaAbs");
		struct _Function_2_1{
			inline static ::flixel::util::FlxRect Block( Float &obj1delta,::flixel::FlxObject &Object1,Float &obj1deltaAbs){
				HX_STACK_PUSH("*::closure","flixel/FlxObject.hx",821);
				{
					HX_STACK_LINE(821)
					::flixel::util::FlxRect _this = ::flixel::FlxObject_obj::_firstSeparateFlxRect;		HX_STACK_VAR(_this,"_this");
					HX_STACK_LINE(821)
					_this->x = Object1->x;
					HX_STACK_LINE(821)
					_this->y = (Object1->y - ((  (((obj1delta > (int)0))) ? Float(obj1delta) : Float((int)0) )));
					HX_STACK_LINE(821)
					_this->width = Object1->width;
					HX_STACK_LINE(821)
					_this->height = (Object1->height + obj1deltaAbs);
					HX_STACK_LINE(821)
					return _this;
				}
				return null();
			}
		};
		HX_STACK_LINE(821)
		::flixel::util::FlxRect obj1rect = _Function_2_1::Block(obj1delta,Object1,obj1deltaAbs);		HX_STACK_VAR(obj1rect,"obj1rect");
		struct _Function_2_2{
			inline static ::flixel::util::FlxRect Block( Float &obj2delta,::flixel::FlxObject &Object2,Float &obj2deltaAbs){
				HX_STACK_PUSH("*::closure","flixel/FlxObject.hx",822);
				{
					HX_STACK_LINE(822)
					::flixel::util::FlxRect _this = ::flixel::FlxObject_obj::_secondSeparateFlxRect;		HX_STACK_VAR(_this,"_this");
					HX_STACK_LINE(822)
					_this->x = Object2->x;
					HX_STACK_LINE(822)
					_this->y = (Object2->y - ((  (((obj2delta > (int)0))) ? Float(obj2delta) : Float((int)0) )));
					HX_STACK_LINE(822)
					_this->width = Object2->width;
					HX_STACK_LINE(822)
					_this->height = (Object2->height + obj2deltaAbs);
					HX_STACK_LINE(822)
					return _this;
				}
				return null();
			}
		};
		HX_STACK_LINE(822)
		::flixel::util::FlxRect obj2rect = _Function_2_2::Block(obj2delta,Object2,obj2deltaAbs);		HX_STACK_VAR(obj2rect,"obj2rect");
		HX_STACK_LINE(824)
		if (((bool((bool((bool(((obj1rect->x + obj1rect->width) > obj2rect->x)) && bool((obj1rect->x < (obj2rect->x + obj2rect->width))))) && bool(((obj1rect->y + obj1rect->height) > obj2rect->y)))) && bool((obj1rect->y < (obj2rect->y + obj2rect->height)))))){
			HX_STACK_LINE(826)
			Float maxOverlap = ((obj1deltaAbs + obj2deltaAbs) + ::flixel::FlxObject_obj::SEPARATE_BIAS);		HX_STACK_VAR(maxOverlap,"maxOverlap");
			HX_STACK_LINE(829)
			if (((obj1delta > obj2delta))){
				HX_STACK_LINE(831)
				overlap = ((Object1->y + Object1->height) - Object2->y);
				HX_STACK_LINE(832)
				if (((bool((bool((overlap > maxOverlap)) || bool((((int(Object1->allowCollisions) & int((int)4096))) == (int)0)))) || bool((((int(Object2->allowCollisions) & int((int)256))) == (int)0))))){
					HX_STACK_LINE(833)
					overlap = (int)0;
				}
				else{
					HX_STACK_LINE(838)
					hx::OrEq(Object1->touching,(int)4096);
					HX_STACK_LINE(839)
					hx::OrEq(Object2->touching,(int)256);
				}
			}
			else{
				HX_STACK_LINE(842)
				if (((obj1delta < obj2delta))){
					HX_STACK_LINE(844)
					overlap = ((Object1->y - Object2->height) - Object2->y);
					HX_STACK_LINE(845)
					if (((bool((bool((-(overlap) > maxOverlap)) || bool((((int(Object1->allowCollisions) & int((int)256))) == (int)0)))) || bool((((int(Object2->allowCollisions) & int((int)4096))) == (int)0))))){
						HX_STACK_LINE(846)
						overlap = (int)0;
					}
					else{
						HX_STACK_LINE(851)
						hx::OrEq(Object1->touching,(int)256);
						HX_STACK_LINE(852)
						hx::OrEq(Object2->touching,(int)4096);
					}
				}
			}
		}
	}
	HX_STACK_LINE(859)
	if (((overlap != (int)0))){
		HX_STACK_LINE(861)
		Float obj1v = Object1->_velocity->y;		HX_STACK_VAR(obj1v,"obj1v");
		HX_STACK_LINE(862)
		Float obj2v = Object2->_velocity->y;		HX_STACK_VAR(obj2v,"obj2v");
		HX_STACK_LINE(864)
		if (((bool(!(obj1immovable)) && bool(!(obj2immovable))))){
			HX_STACK_LINE(866)
			hx::MultEq(overlap,0.5);
			HX_STACK_LINE(867)
			Object1->set_y((Object1->y - overlap));
			HX_STACK_LINE(868)
			{
				HX_STACK_LINE(868)
				::flixel::FlxObject _g = Object2;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(868)
				_g->set_y((_g->y + overlap));
			}
			HX_STACK_LINE(870)
			Float obj1velocity = (::Math_obj::sqrt((Float(((obj2v * obj2v) * Object2->mass)) / Float(Object1->mass))) * ((  (((obj2v > (int)0))) ? int((int)1) : int((int)-1) )));		HX_STACK_VAR(obj1velocity,"obj1velocity");
			HX_STACK_LINE(871)
			Float obj2velocity = (::Math_obj::sqrt((Float(((obj1v * obj1v) * Object1->mass)) / Float(Object2->mass))) * ((  (((obj1v > (int)0))) ? int((int)1) : int((int)-1) )));		HX_STACK_VAR(obj2velocity,"obj2velocity");
			HX_STACK_LINE(872)
			Float average = (((obj1velocity + obj2velocity)) * 0.5);		HX_STACK_VAR(average,"average");
			HX_STACK_LINE(873)
			hx::SubEq(obj1velocity,average);
			HX_STACK_LINE(874)
			hx::SubEq(obj2velocity,average);
			HX_STACK_LINE(875)
			Object1->_velocity->set_y((average + (obj1velocity * Object1->elasticity)));
			HX_STACK_LINE(876)
			Object2->_velocity->set_y((average + (obj2velocity * Object2->elasticity)));
		}
		else{
			HX_STACK_LINE(878)
			if ((!(obj1immovable))){
				HX_STACK_LINE(880)
				Object1->set_y((Object1->y - overlap));
				HX_STACK_LINE(881)
				Object1->_velocity->set_y((obj2v - (obj1v * Object1->elasticity)));
				HX_STACK_LINE(883)
				if (((bool((bool(Object2->active) && bool(Object2->moves))) && bool((obj1delta > obj2delta))))){
					HX_STACK_LINE(885)
					::flixel::FlxObject _g = Object1;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(885)
					_g->set_x((_g->x + ((Object2->x - Object2->last->x))));
				}
			}
			else{
				HX_STACK_LINE(888)
				if ((!(obj2immovable))){
					HX_STACK_LINE(890)
					{
						HX_STACK_LINE(890)
						::flixel::FlxObject _g = Object2;		HX_STACK_VAR(_g,"_g");
						HX_STACK_LINE(890)
						_g->set_y((_g->y + overlap));
					}
					HX_STACK_LINE(891)
					Object2->_velocity->set_y((obj1v - (obj2v * Object2->elasticity)));
					HX_STACK_LINE(893)
					if (((bool((bool(Object1->active) && bool(Object1->moves))) && bool((obj1delta < obj2delta))))){
						HX_STACK_LINE(895)
						::flixel::FlxObject _g = Object2;		HX_STACK_VAR(_g,"_g");
						HX_STACK_LINE(895)
						_g->set_x((_g->x + ((Object1->x - Object1->last->x))));
					}
				}
			}
		}
		HX_STACK_LINE(898)
		return true;
	}
	else{
		HX_STACK_LINE(901)
		return false;
	}
	HX_STACK_LINE(859)
	return false;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxObject_obj,separateY,return )


FlxObject_obj::FlxObject_obj()
{
}

void FlxObject_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxObject);
	HX_MARK_MEMBER_NAME(_boundingBoxColorOverritten,"_boundingBoxColorOverritten");
	HX_MARK_MEMBER_NAME(debugBoundingBoxColor,"debugBoundingBoxColor");
	HX_MARK_MEMBER_NAME(_scrollFactor,"_scrollFactor");
	HX_MARK_MEMBER_NAME(_maxVelocity,"_maxVelocity");
	HX_MARK_MEMBER_NAME(_acceleration,"_acceleration");
	HX_MARK_MEMBER_NAME(_drag,"_drag");
	HX_MARK_MEMBER_NAME(_velocity,"_velocity");
	HX_MARK_MEMBER_NAME(_point,"_point");
	HX_MARK_MEMBER_NAME(cachedGraphics,"cachedGraphics");
	HX_MARK_MEMBER_NAME(framesData,"framesData");
	HX_MARK_MEMBER_NAME(region,"region");
	HX_MARK_MEMBER_NAME(last,"last");
	HX_MARK_MEMBER_NAME(allowCollisions,"allowCollisions");
	HX_MARK_MEMBER_NAME(wasTouching,"wasTouching");
	HX_MARK_MEMBER_NAME(touching,"touching");
	HX_MARK_MEMBER_NAME(health,"health");
	HX_MARK_MEMBER_NAME(maxAngular,"maxAngular");
	HX_MARK_MEMBER_NAME(angularDrag,"angularDrag");
	HX_MARK_MEMBER_NAME(angularAcceleration,"angularAcceleration");
	HX_MARK_MEMBER_NAME(angularVelocity,"angularVelocity");
	HX_MARK_MEMBER_NAME(elasticity,"elasticity");
	HX_MARK_MEMBER_NAME(mass,"mass");
	HX_MARK_MEMBER_NAME(maxVelocity,"maxVelocity");
	HX_MARK_MEMBER_NAME(drag,"drag");
	HX_MARK_MEMBER_NAME(acceleration,"acceleration");
	HX_MARK_MEMBER_NAME(velocity,"velocity");
	HX_MARK_MEMBER_NAME(scrollFactor,"scrollFactor");
	HX_MARK_MEMBER_NAME(forceComplexRender,"forceComplexRender");
	HX_MARK_MEMBER_NAME(immovable,"immovable");
	HX_MARK_MEMBER_NAME(moves,"moves");
	HX_MARK_MEMBER_NAME(angle,"angle");
	HX_MARK_MEMBER_NAME(height,"height");
	HX_MARK_MEMBER_NAME(width,"width");
	HX_MARK_MEMBER_NAME(y,"y");
	HX_MARK_MEMBER_NAME(x,"x");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxObject_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_boundingBoxColorOverritten,"_boundingBoxColorOverritten");
	HX_VISIT_MEMBER_NAME(debugBoundingBoxColor,"debugBoundingBoxColor");
	HX_VISIT_MEMBER_NAME(_scrollFactor,"_scrollFactor");
	HX_VISIT_MEMBER_NAME(_maxVelocity,"_maxVelocity");
	HX_VISIT_MEMBER_NAME(_acceleration,"_acceleration");
	HX_VISIT_MEMBER_NAME(_drag,"_drag");
	HX_VISIT_MEMBER_NAME(_velocity,"_velocity");
	HX_VISIT_MEMBER_NAME(_point,"_point");
	HX_VISIT_MEMBER_NAME(cachedGraphics,"cachedGraphics");
	HX_VISIT_MEMBER_NAME(framesData,"framesData");
	HX_VISIT_MEMBER_NAME(region,"region");
	HX_VISIT_MEMBER_NAME(last,"last");
	HX_VISIT_MEMBER_NAME(allowCollisions,"allowCollisions");
	HX_VISIT_MEMBER_NAME(wasTouching,"wasTouching");
	HX_VISIT_MEMBER_NAME(touching,"touching");
	HX_VISIT_MEMBER_NAME(health,"health");
	HX_VISIT_MEMBER_NAME(maxAngular,"maxAngular");
	HX_VISIT_MEMBER_NAME(angularDrag,"angularDrag");
	HX_VISIT_MEMBER_NAME(angularAcceleration,"angularAcceleration");
	HX_VISIT_MEMBER_NAME(angularVelocity,"angularVelocity");
	HX_VISIT_MEMBER_NAME(elasticity,"elasticity");
	HX_VISIT_MEMBER_NAME(mass,"mass");
	HX_VISIT_MEMBER_NAME(maxVelocity,"maxVelocity");
	HX_VISIT_MEMBER_NAME(drag,"drag");
	HX_VISIT_MEMBER_NAME(acceleration,"acceleration");
	HX_VISIT_MEMBER_NAME(velocity,"velocity");
	HX_VISIT_MEMBER_NAME(scrollFactor,"scrollFactor");
	HX_VISIT_MEMBER_NAME(forceComplexRender,"forceComplexRender");
	HX_VISIT_MEMBER_NAME(immovable,"immovable");
	HX_VISIT_MEMBER_NAME(moves,"moves");
	HX_VISIT_MEMBER_NAME(angle,"angle");
	HX_VISIT_MEMBER_NAME(height,"height");
	HX_VISIT_MEMBER_NAME(width,"width");
	HX_VISIT_MEMBER_NAME(y,"y");
	HX_VISIT_MEMBER_NAME(x,"x");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxObject_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { return y; }
		if (HX_FIELD_EQ(inName,"x") ) { return x; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"hurt") ) { return hurt_dyn(); }
		if (HX_FIELD_EQ(inName,"draw") ) { return draw_dyn(); }
		if (HX_FIELD_EQ(inName,"last") ) { return last; }
		if (HX_FIELD_EQ(inName,"mass") ) { return mass; }
		if (HX_FIELD_EQ(inName,"drag") ) { return drag; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"set_y") ) { return set_y_dyn(); }
		if (HX_FIELD_EQ(inName,"set_x") ) { return set_x_dyn(); }
		if (HX_FIELD_EQ(inName,"reset") ) { return reset_dyn(); }
		if (HX_FIELD_EQ(inName,"_drag") ) { return _drag; }
		if (HX_FIELD_EQ(inName,"solid") ) { return get_solid(); }
		if (HX_FIELD_EQ(inName,"moves") ) { return moves; }
		if (HX_FIELD_EQ(inName,"angle") ) { return angle; }
		if (HX_FIELD_EQ(inName,"width") ) { return width; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_pZero") ) { return _pZero; }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"_point") ) { return _point; }
		if (HX_FIELD_EQ(inName,"region") ) { return region; }
		if (HX_FIELD_EQ(inName,"health") ) { return health; }
		if (HX_FIELD_EQ(inName,"height") ) { return height; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"setSize") ) { return setSize_dyn(); }
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"separate") ) { return separate_dyn(); }
		if (HX_FIELD_EQ(inName,"set_drag") ) { return set_drag_dyn(); }
		if (HX_FIELD_EQ(inName,"onScreen") ) { return onScreen_dyn(); }
		if (HX_FIELD_EQ(inName,"overlaps") ) { return overlaps_dyn(); }
		if (HX_FIELD_EQ(inName,"initVars") ) { return initVars_dyn(); }
		if (HX_FIELD_EQ(inName,"touching") ) { return touching; }
		if (HX_FIELD_EQ(inName,"velocity") ) { return velocity; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"separateX") ) { return separateX_dyn(); }
		if (HX_FIELD_EQ(inName,"separateY") ) { return separateY_dyn(); }
		if (HX_FIELD_EQ(inName,"set_moves") ) { return set_moves_dyn(); }
		if (HX_FIELD_EQ(inName,"set_angle") ) { return set_angle_dyn(); }
		if (HX_FIELD_EQ(inName,"set_solid") ) { return set_solid_dyn(); }
		if (HX_FIELD_EQ(inName,"get_solid") ) { return get_solid_dyn(); }
		if (HX_FIELD_EQ(inName,"set_width") ) { return set_width_dyn(); }
		if (HX_FIELD_EQ(inName,"_velocity") ) { return _velocity; }
		if (HX_FIELD_EQ(inName,"immovable") ) { return immovable; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"set_height") ) { return set_height_dyn(); }
		if (HX_FIELD_EQ(inName,"isTouching") ) { return isTouching_dyn(); }
		if (HX_FIELD_EQ(inName,"overlapsAt") ) { return overlapsAt_dyn(); }
		if (HX_FIELD_EQ(inName,"framesData") ) { return framesData; }
		if (HX_FIELD_EQ(inName,"maxAngular") ) { return maxAngular; }
		if (HX_FIELD_EQ(inName,"elasticity") ) { return elasticity; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"setPosition") ) { return setPosition_dyn(); }
		if (HX_FIELD_EQ(inName,"justTouched") ) { return justTouched_dyn(); }
		if (HX_FIELD_EQ(inName,"getMidpoint") ) { return getMidpoint_dyn(); }
		if (HX_FIELD_EQ(inName,"getScreenXY") ) { return getScreenXY_dyn(); }
		if (HX_FIELD_EQ(inName,"wasTouching") ) { return wasTouching; }
		if (HX_FIELD_EQ(inName,"angularDrag") ) { return angularDrag; }
		if (HX_FIELD_EQ(inName,"maxVelocity") ) { return maxVelocity; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"set_velocity") ) { return set_velocity_dyn(); }
		if (HX_FIELD_EQ(inName,"updateMotion") ) { return updateMotion_dyn(); }
		if (HX_FIELD_EQ(inName,"_maxVelocity") ) { return _maxVelocity; }
		if (HX_FIELD_EQ(inName,"acceleration") ) { return acceleration; }
		if (HX_FIELD_EQ(inName,"scrollFactor") ) { return scrollFactor; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"SEPARATE_BIAS") ) { return SEPARATE_BIAS; }
		if (HX_FIELD_EQ(inName,"set_immovable") ) { return set_immovable_dyn(); }
		if (HX_FIELD_EQ(inName,"inWorldBounds") ) { return inWorldBounds_dyn(); }
		if (HX_FIELD_EQ(inName,"overlapsPoint") ) { return overlapsPoint_dyn(); }
		if (HX_FIELD_EQ(inName,"_scrollFactor") ) { return _scrollFactor; }
		if (HX_FIELD_EQ(inName,"_acceleration") ) { return _acceleration; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"cachedGraphics") ) { return cachedGraphics; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"set_maxVelocity") ) { return set_maxVelocity_dyn(); }
		if (HX_FIELD_EQ(inName,"allowCollisions") ) { return allowCollisions; }
		if (HX_FIELD_EQ(inName,"angularVelocity") ) { return angularVelocity; }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"set_acceleration") ) { return set_acceleration_dyn(); }
		if (HX_FIELD_EQ(inName,"set_scrollFactor") ) { return set_scrollFactor_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"drawDebugOnCamera") ) { return drawDebugOnCamera_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"set_cachedGraphics") ) { return set_cachedGraphics_dyn(); }
		if (HX_FIELD_EQ(inName,"forceComplexRender") ) { return forceComplexRender; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"angularAcceleration") ) { return angularAcceleration; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"_firstSeparateFlxRect") ) { return _firstSeparateFlxRect; }
		if (HX_FIELD_EQ(inName,"debugBoundingBoxColor") ) { return debugBoundingBoxColor; }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"_secondSeparateFlxRect") ) { return _secondSeparateFlxRect; }
		if (HX_FIELD_EQ(inName,"set_forceComplexRender") ) { return set_forceComplexRender_dyn(); }
		break;
	case 25:
		if (HX_FIELD_EQ(inName,"set_debugBoundingBoxColor") ) { return set_debugBoundingBoxColor_dyn(); }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"_boundingBoxColorOverritten") ) { return _boundingBoxColorOverritten; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxObject_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 1:
		if (HX_FIELD_EQ(inName,"y") ) { if (inCallProp) return set_y(inValue);y=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"x") ) { if (inCallProp) return set_x(inValue);x=inValue.Cast< Float >(); return inValue; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"last") ) { last=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"mass") ) { mass=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"drag") ) { if (inCallProp) return set_drag(inValue);drag=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_drag") ) { _drag=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"solid") ) { return set_solid(inValue); }
		if (HX_FIELD_EQ(inName,"moves") ) { if (inCallProp) return set_moves(inValue);moves=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"angle") ) { if (inCallProp) return set_angle(inValue);angle=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"width") ) { if (inCallProp) return set_width(inValue);width=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_pZero") ) { _pZero=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_point") ) { _point=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"region") ) { region=inValue.Cast< ::flixel::system::layer::Region >(); return inValue; }
		if (HX_FIELD_EQ(inName,"health") ) { health=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"height") ) { if (inCallProp) return set_height(inValue);height=inValue.Cast< Float >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"touching") ) { touching=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"velocity") ) { if (inCallProp) return set_velocity(inValue);velocity=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_velocity") ) { _velocity=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"immovable") ) { if (inCallProp) return set_immovable(inValue);immovable=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"framesData") ) { framesData=inValue.Cast< ::flixel::system::layer::frames::FlxSpriteFrames >(); return inValue; }
		if (HX_FIELD_EQ(inName,"maxAngular") ) { maxAngular=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"elasticity") ) { elasticity=inValue.Cast< Float >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"wasTouching") ) { wasTouching=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"angularDrag") ) { angularDrag=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"maxVelocity") ) { if (inCallProp) return set_maxVelocity(inValue);maxVelocity=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_maxVelocity") ) { _maxVelocity=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"acceleration") ) { if (inCallProp) return set_acceleration(inValue);acceleration=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"scrollFactor") ) { if (inCallProp) return set_scrollFactor(inValue);scrollFactor=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"SEPARATE_BIAS") ) { SEPARATE_BIAS=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_scrollFactor") ) { _scrollFactor=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_acceleration") ) { _acceleration=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"cachedGraphics") ) { if (inCallProp) return set_cachedGraphics(inValue);cachedGraphics=inValue.Cast< ::flixel::util::loaders::CachedGraphics >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"allowCollisions") ) { allowCollisions=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"angularVelocity") ) { angularVelocity=inValue.Cast< Float >(); return inValue; }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"forceComplexRender") ) { if (inCallProp) return set_forceComplexRender(inValue);forceComplexRender=inValue.Cast< bool >(); return inValue; }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"angularAcceleration") ) { angularAcceleration=inValue.Cast< Float >(); return inValue; }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"_firstSeparateFlxRect") ) { _firstSeparateFlxRect=inValue.Cast< ::flixel::util::FlxRect >(); return inValue; }
		if (HX_FIELD_EQ(inName,"debugBoundingBoxColor") ) { if (inCallProp) return set_debugBoundingBoxColor(inValue);debugBoundingBoxColor=inValue.Cast< int >(); return inValue; }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"_secondSeparateFlxRect") ) { _secondSeparateFlxRect=inValue.Cast< ::flixel::util::FlxRect >(); return inValue; }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"_boundingBoxColorOverritten") ) { _boundingBoxColorOverritten=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxObject_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_boundingBoxColorOverritten"));
	outFields->push(HX_CSTRING("debugBoundingBoxColor"));
	outFields->push(HX_CSTRING("_scrollFactor"));
	outFields->push(HX_CSTRING("_maxVelocity"));
	outFields->push(HX_CSTRING("_acceleration"));
	outFields->push(HX_CSTRING("_drag"));
	outFields->push(HX_CSTRING("_velocity"));
	outFields->push(HX_CSTRING("_point"));
	outFields->push(HX_CSTRING("cachedGraphics"));
	outFields->push(HX_CSTRING("framesData"));
	outFields->push(HX_CSTRING("region"));
	outFields->push(HX_CSTRING("last"));
	outFields->push(HX_CSTRING("allowCollisions"));
	outFields->push(HX_CSTRING("wasTouching"));
	outFields->push(HX_CSTRING("touching"));
	outFields->push(HX_CSTRING("health"));
	outFields->push(HX_CSTRING("maxAngular"));
	outFields->push(HX_CSTRING("angularDrag"));
	outFields->push(HX_CSTRING("angularAcceleration"));
	outFields->push(HX_CSTRING("angularVelocity"));
	outFields->push(HX_CSTRING("elasticity"));
	outFields->push(HX_CSTRING("mass"));
	outFields->push(HX_CSTRING("maxVelocity"));
	outFields->push(HX_CSTRING("drag"));
	outFields->push(HX_CSTRING("acceleration"));
	outFields->push(HX_CSTRING("velocity"));
	outFields->push(HX_CSTRING("scrollFactor"));
	outFields->push(HX_CSTRING("forceComplexRender"));
	outFields->push(HX_CSTRING("solid"));
	outFields->push(HX_CSTRING("immovable"));
	outFields->push(HX_CSTRING("moves"));
	outFields->push(HX_CSTRING("angle"));
	outFields->push(HX_CSTRING("height"));
	outFields->push(HX_CSTRING("width"));
	outFields->push(HX_CSTRING("y"));
	outFields->push(HX_CSTRING("x"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("SEPARATE_BIAS"),
	HX_CSTRING("LEFT"),
	HX_CSTRING("RIGHT"),
	HX_CSTRING("UP"),
	HX_CSTRING("DOWN"),
	HX_CSTRING("NONE"),
	HX_CSTRING("CEILING"),
	HX_CSTRING("FLOOR"),
	HX_CSTRING("WALL"),
	HX_CSTRING("ANY"),
	HX_CSTRING("_pZero"),
	HX_CSTRING("_firstSeparateFlxRect"),
	HX_CSTRING("_secondSeparateFlxRect"),
	HX_CSTRING("separate"),
	HX_CSTRING("separateX"),
	HX_CSTRING("separateY"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_boundingBoxColorOverritten"),
	HX_CSTRING("set_debugBoundingBoxColor"),
	HX_CSTRING("debugBoundingBoxColor"),
	HX_CSTRING("set_maxVelocity"),
	HX_CSTRING("set_drag"),
	HX_CSTRING("set_acceleration"),
	HX_CSTRING("set_velocity"),
	HX_CSTRING("set_scrollFactor"),
	HX_CSTRING("set_forceComplexRender"),
	HX_CSTRING("set_immovable"),
	HX_CSTRING("set_moves"),
	HX_CSTRING("set_angle"),
	HX_CSTRING("set_solid"),
	HX_CSTRING("get_solid"),
	HX_CSTRING("set_height"),
	HX_CSTRING("set_width"),
	HX_CSTRING("set_y"),
	HX_CSTRING("set_x"),
	HX_CSTRING("set_cachedGraphics"),
	HX_CSTRING("setSize"),
	HX_CSTRING("setPosition"),
	HX_CSTRING("hurt"),
	HX_CSTRING("justTouched"),
	HX_CSTRING("isTouching"),
	HX_CSTRING("reset"),
	HX_CSTRING("getMidpoint"),
	HX_CSTRING("getScreenXY"),
	HX_CSTRING("inWorldBounds"),
	HX_CSTRING("onScreen"),
	HX_CSTRING("overlapsPoint"),
	HX_CSTRING("overlapsAt"),
	HX_CSTRING("overlaps"),
	HX_CSTRING("drawDebugOnCamera"),
	HX_CSTRING("draw"),
	HX_CSTRING("updateMotion"),
	HX_CSTRING("update"),
	HX_CSTRING("destroy"),
	HX_CSTRING("initVars"),
	HX_CSTRING("_scrollFactor"),
	HX_CSTRING("_maxVelocity"),
	HX_CSTRING("_acceleration"),
	HX_CSTRING("_drag"),
	HX_CSTRING("_velocity"),
	HX_CSTRING("_point"),
	HX_CSTRING("cachedGraphics"),
	HX_CSTRING("framesData"),
	HX_CSTRING("region"),
	HX_CSTRING("last"),
	HX_CSTRING("allowCollisions"),
	HX_CSTRING("wasTouching"),
	HX_CSTRING("touching"),
	HX_CSTRING("health"),
	HX_CSTRING("maxAngular"),
	HX_CSTRING("angularDrag"),
	HX_CSTRING("angularAcceleration"),
	HX_CSTRING("angularVelocity"),
	HX_CSTRING("elasticity"),
	HX_CSTRING("mass"),
	HX_CSTRING("maxVelocity"),
	HX_CSTRING("drag"),
	HX_CSTRING("acceleration"),
	HX_CSTRING("velocity"),
	HX_CSTRING("scrollFactor"),
	HX_CSTRING("forceComplexRender"),
	HX_CSTRING("immovable"),
	HX_CSTRING("moves"),
	HX_CSTRING("angle"),
	HX_CSTRING("height"),
	HX_CSTRING("width"),
	HX_CSTRING("y"),
	HX_CSTRING("x"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxObject_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FlxObject_obj::SEPARATE_BIAS,"SEPARATE_BIAS");
	HX_MARK_MEMBER_NAME(FlxObject_obj::LEFT,"LEFT");
	HX_MARK_MEMBER_NAME(FlxObject_obj::RIGHT,"RIGHT");
	HX_MARK_MEMBER_NAME(FlxObject_obj::UP,"UP");
	HX_MARK_MEMBER_NAME(FlxObject_obj::DOWN,"DOWN");
	HX_MARK_MEMBER_NAME(FlxObject_obj::NONE,"NONE");
	HX_MARK_MEMBER_NAME(FlxObject_obj::CEILING,"CEILING");
	HX_MARK_MEMBER_NAME(FlxObject_obj::FLOOR,"FLOOR");
	HX_MARK_MEMBER_NAME(FlxObject_obj::WALL,"WALL");
	HX_MARK_MEMBER_NAME(FlxObject_obj::ANY,"ANY");
	HX_MARK_MEMBER_NAME(FlxObject_obj::_pZero,"_pZero");
	HX_MARK_MEMBER_NAME(FlxObject_obj::_firstSeparateFlxRect,"_firstSeparateFlxRect");
	HX_MARK_MEMBER_NAME(FlxObject_obj::_secondSeparateFlxRect,"_secondSeparateFlxRect");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxObject_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::SEPARATE_BIAS,"SEPARATE_BIAS");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::LEFT,"LEFT");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::RIGHT,"RIGHT");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::UP,"UP");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::DOWN,"DOWN");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::NONE,"NONE");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::CEILING,"CEILING");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::FLOOR,"FLOOR");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::WALL,"WALL");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::ANY,"ANY");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::_pZero,"_pZero");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::_firstSeparateFlxRect,"_firstSeparateFlxRect");
	HX_VISIT_MEMBER_NAME(FlxObject_obj::_secondSeparateFlxRect,"_secondSeparateFlxRect");
};

Class FlxObject_obj::__mClass;

void FlxObject_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.FlxObject"), hx::TCanCast< FlxObject_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxObject_obj::__boot()
{
	SEPARATE_BIAS= (int)4;
	LEFT= (int)1;
	RIGHT= (int)16;
	UP= (int)256;
	DOWN= (int)4096;
	NONE= (int)0;
	CEILING= (int)256;
	FLOOR= (int)4096;
	WALL= (int)17;
	ANY= (int)4369;
	_pZero= ::flixel::util::FlxPoint_obj::__new(null(),null());
	_firstSeparateFlxRect= ::flixel::util::FlxRect_obj::__new(null(),null(),null(),null());
	_secondSeparateFlxRect= ::flixel::util::FlxRect_obj::__new(null(),null(),null(),null());
}

} // end namespace flixel
