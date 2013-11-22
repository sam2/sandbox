#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_flash_display_BitmapData
#include <flash/display/BitmapData.h>
#endif
#ifndef INCLUDED_flash_display_BlendMode
#include <flash/display/BlendMode.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_geom_ColorTransform
#include <flash/geom/ColorTransform.h>
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
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
#endif
#ifndef INCLUDED_flixel_group_FlxSpriteGroup
#include <flixel/group/FlxSpriteGroup.h>
#endif
#ifndef INCLUDED_flixel_group_FlxTypedGroup
#include <flixel/group/FlxTypedGroup.h>
#endif
#ifndef INCLUDED_flixel_group__FlxSpriteGroup_FlxPointHelper
#include <flixel/group/_FlxSpriteGroup/FlxPointHelper.h>
#endif
#ifndef INCLUDED_flixel_system_FlxCollisionType
#include <flixel/system/FlxCollisionType.h>
#endif
#ifndef INCLUDED_flixel_system_layer_frames_FlxFrame
#include <flixel/system/layer/frames/FlxFrame.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
namespace flixel{
namespace group{

Void FlxSpriteGroup_obj::__construct(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< int >  __o_MaxSize)
{
HX_STACK_PUSH("FlxSpriteGroup::new","flixel/group/FlxSpriteGroup.hx",20);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
int MaxSize = __o_MaxSize.Default(0);
{
	HX_STACK_LINE(249)
	this->isDrawnDebug = false;
	HX_STACK_LINE(52)
	this->_skipTransformChildren = false;
	HX_STACK_LINE(62)
	super::__construct(X,Y,null());
	HX_STACK_LINE(63)
	this->set_maxSize(MaxSize);
	HX_STACK_LINE(64)
	this->set_autoReviveMembers(false);
}
;
	return null();
}

FlxSpriteGroup_obj::~FlxSpriteGroup_obj() { }

Dynamic FlxSpriteGroup_obj::__CreateEmpty() { return  new FlxSpriteGroup_obj; }
hx::ObjectPtr< FlxSpriteGroup_obj > FlxSpriteGroup_obj::__new(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,hx::Null< int >  __o_MaxSize)
{  hx::ObjectPtr< FlxSpriteGroup_obj > result = new FlxSpriteGroup_obj();
	result->__construct(__o_X,__o_Y,__o_MaxSize);
	return result;}

Dynamic FlxSpriteGroup_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxSpriteGroup_obj > result = new FlxSpriteGroup_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2]);
	return result;}

Void FlxSpriteGroup_obj::updateFrameData( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::updateFrameData","flixel/group/FlxSpriteGroup.hx",935);
		HX_STACK_THIS(this);
	}
return null();
}


Void FlxSpriteGroup_obj::updateColorTransform( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::updateColorTransform","flixel/group/FlxSpriteGroup.hx",930);
		HX_STACK_THIS(this);
	}
return null();
}


Void FlxSpriteGroup_obj::stamp( ::flixel::FlxSprite Brush,hx::Null< int >  __o_X,hx::Null< int >  __o_Y){
int X = __o_X.Default(0);
int Y = __o_Y.Default(0);
	HX_STACK_PUSH("FlxSpriteGroup::stamp","flixel/group/FlxSpriteGroup.hx",925);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Brush,"Brush");
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
{
	}
return null();
}


Void FlxSpriteGroup_obj::resetHelpers( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::resetHelpers","flixel/group/FlxSpriteGroup.hx",920);
		HX_STACK_THIS(this);
	}
return null();
}


Void FlxSpriteGroup_obj::calcFrame( hx::Null< bool >  __o_AreYouSure){
bool AreYouSure = __o_AreYouSure.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::calcFrame","flixel/group/FlxSpriteGroup.hx",913);
	HX_STACK_THIS(this);
	HX_STACK_ARG(AreYouSure,"AreYouSure");
{
	}
return null();
}


::flixel::FlxSprite FlxSpriteGroup_obj::loadRotatedImageFromTexture( Dynamic Data,::String Image,hx::Null< int >  __o_Rotations,hx::Null< bool >  __o_AntiAliasing,hx::Null< bool >  __o_AutoBuffer){
int Rotations = __o_Rotations.Default(16);
bool AntiAliasing = __o_AntiAliasing.Default(false);
bool AutoBuffer = __o_AutoBuffer.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::loadRotatedImageFromTexture","flixel/group/FlxSpriteGroup.hx",900);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Data,"Data");
	HX_STACK_ARG(Image,"Image");
	HX_STACK_ARG(Rotations,"Rotations");
	HX_STACK_ARG(AntiAliasing,"AntiAliasing");
	HX_STACK_ARG(AutoBuffer,"AutoBuffer");
{
		HX_STACK_LINE(900)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


::flixel::FlxSprite FlxSpriteGroup_obj::loadImageFromTexture( Dynamic Data,hx::Null< bool >  __o_Reverse,hx::Null< bool >  __o_Unique,::String FrameName){
bool Reverse = __o_Reverse.Default(false);
bool Unique = __o_Unique.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::loadImageFromTexture","flixel/group/FlxSpriteGroup.hx",891);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Data,"Data");
	HX_STACK_ARG(Reverse,"Reverse");
	HX_STACK_ARG(Unique,"Unique");
	HX_STACK_ARG(FrameName,"FrameName");
{
		HX_STACK_LINE(891)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


::flixel::FlxSprite FlxSpriteGroup_obj::makeGraphic( int Width,int Height,hx::Null< int >  __o_Color,hx::Null< bool >  __o_Unique,::String Key){
int Color = __o_Color.Default(-1);
bool Unique = __o_Unique.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::makeGraphic","flixel/group/FlxSpriteGroup.hx",882);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Width,"Width");
	HX_STACK_ARG(Height,"Height");
	HX_STACK_ARG(Color,"Color");
	HX_STACK_ARG(Unique,"Unique");
	HX_STACK_ARG(Key,"Key");
{
		HX_STACK_LINE(882)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


::flixel::FlxSprite FlxSpriteGroup_obj::loadRotatedGraphic( Dynamic Graphic,hx::Null< int >  __o_Rotations,hx::Null< int >  __o_Frame,hx::Null< bool >  __o_AntiAliasing,hx::Null< bool >  __o_AutoBuffer,::String Key){
int Rotations = __o_Rotations.Default(16);
int Frame = __o_Frame.Default(-1);
bool AntiAliasing = __o_AntiAliasing.Default(false);
bool AutoBuffer = __o_AutoBuffer.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::loadRotatedGraphic","flixel/group/FlxSpriteGroup.hx",873);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Graphic,"Graphic");
	HX_STACK_ARG(Rotations,"Rotations");
	HX_STACK_ARG(Frame,"Frame");
	HX_STACK_ARG(AntiAliasing,"AntiAliasing");
	HX_STACK_ARG(AutoBuffer,"AutoBuffer");
	HX_STACK_ARG(Key,"Key");
{
		HX_STACK_LINE(873)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


::flixel::FlxSprite FlxSpriteGroup_obj::loadGraphic( Dynamic Graphic,hx::Null< bool >  __o_Animated,hx::Null< bool >  __o_Reverse,hx::Null< int >  __o_Width,hx::Null< int >  __o_Height,hx::Null< bool >  __o_Unique,::String Key){
bool Animated = __o_Animated.Default(false);
bool Reverse = __o_Reverse.Default(false);
int Width = __o_Width.Default(0);
int Height = __o_Height.Default(0);
bool Unique = __o_Unique.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::loadGraphic","flixel/group/FlxSpriteGroup.hx",864);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Graphic,"Graphic");
	HX_STACK_ARG(Animated,"Animated");
	HX_STACK_ARG(Reverse,"Reverse");
	HX_STACK_ARG(Width,"Width");
	HX_STACK_ARG(Height,"Height");
	HX_STACK_ARG(Unique,"Unique");
	HX_STACK_ARG(Key,"Key");
{
		HX_STACK_LINE(864)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


::flixel::FlxSprite FlxSpriteGroup_obj::loadfromSprite( ::flixel::FlxSprite Sprite){
	HX_STACK_PUSH("FlxSpriteGroup::loadfromSprite","flixel/group/FlxSpriteGroup.hx",855);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Sprite,"Sprite");
	HX_STACK_LINE(855)
	return hx::ObjectPtr<OBJ_>(this);
}


Void FlxSpriteGroup_obj::dragTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Drag){
{
		HX_STACK_PUSH("FlxSpriteGroup::dragTransform","flixel/group/FlxSpriteGroup.hx",845);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Drag,"Drag");
		HX_STACK_LINE(845)
		Sprite->drag->copyFrom(Drag);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,dragTransform,(void))

Void FlxSpriteGroup_obj::scrollFactorTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint ScrollFactor){
{
		HX_STACK_PUSH("FlxSpriteGroup::scrollFactorTransform","flixel/group/FlxSpriteGroup.hx",844);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(ScrollFactor,"ScrollFactor");
		HX_STACK_LINE(844)
		Sprite->scrollFactor->copyFrom(ScrollFactor);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,scrollFactorTransform,(void))

Void FlxSpriteGroup_obj::accelerationTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Acceleration){
{
		HX_STACK_PUSH("FlxSpriteGroup::accelerationTransform","flixel/group/FlxSpriteGroup.hx",843);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Acceleration,"Acceleration");
		HX_STACK_LINE(843)
		Sprite->acceleration->copyFrom(Acceleration);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,accelerationTransform,(void))

Void FlxSpriteGroup_obj::maxVelocityTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint MaxVelocity){
{
		HX_STACK_PUSH("FlxSpriteGroup::maxVelocityTransform","flixel/group/FlxSpriteGroup.hx",842);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(MaxVelocity,"MaxVelocity");
		HX_STACK_LINE(842)
		Sprite->maxVelocity->copyFrom(MaxVelocity);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,maxVelocityTransform,(void))

Void FlxSpriteGroup_obj::velocityTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Velocity){
{
		HX_STACK_PUSH("FlxSpriteGroup::velocityTransform","flixel/group/FlxSpriteGroup.hx",841);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Velocity,"Velocity");
		HX_STACK_LINE(841)
		Sprite->velocity->copyFrom(Velocity);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,velocityTransform,(void))

Void FlxSpriteGroup_obj::scaleTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Scale){
{
		HX_STACK_PUSH("FlxSpriteGroup::scaleTransform","flixel/group/FlxSpriteGroup.hx",840);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Scale,"Scale");
		HX_STACK_LINE(840)
		Sprite->scale->copyFrom(Scale);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,scaleTransform,(void))

Void FlxSpriteGroup_obj::originTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Origin){
{
		HX_STACK_PUSH("FlxSpriteGroup::originTransform","flixel/group/FlxSpriteGroup.hx",839);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Origin,"Origin");
		HX_STACK_LINE(839)
		Sprite->origin->copyFrom(Origin);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,originTransform,(void))

Void FlxSpriteGroup_obj::offsetTransform( ::flixel::FlxSprite Sprite,::flixel::util::FlxPoint Offset){
{
		HX_STACK_PUSH("FlxSpriteGroup::offsetTransform","flixel/group/FlxSpriteGroup.hx",838);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Offset,"Offset");
		HX_STACK_LINE(838)
		Sprite->offset->copyFrom(Offset);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,offsetTransform,(void))

Void FlxSpriteGroup_obj::existsTransform( ::flixel::FlxSprite Sprite,bool Exists){
{
		HX_STACK_PUSH("FlxSpriteGroup::existsTransform","flixel/group/FlxSpriteGroup.hx",837);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Exists,"Exists");
		HX_STACK_LINE(837)
		Sprite->set_exists(Exists);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,existsTransform,(void))

Void FlxSpriteGroup_obj::aliveTransform( ::flixel::FlxSprite Sprite,bool Alive){
{
		HX_STACK_PUSH("FlxSpriteGroup::aliveTransform","flixel/group/FlxSpriteGroup.hx",836);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Alive,"Alive");
		HX_STACK_LINE(836)
		Sprite->set_alive(Alive);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,aliveTransform,(void))

Void FlxSpriteGroup_obj::solidTransform( ::flixel::FlxSprite Sprite,bool Solid){
{
		HX_STACK_PUSH("FlxSpriteGroup::solidTransform","flixel/group/FlxSpriteGroup.hx",835);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Solid,"Solid");
		HX_STACK_LINE(835)
		Sprite->set_solid(Solid);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,solidTransform,(void))

Void FlxSpriteGroup_obj::activeTransform( ::flixel::FlxSprite Sprite,bool Active){
{
		HX_STACK_PUSH("FlxSpriteGroup::activeTransform","flixel/group/FlxSpriteGroup.hx",834);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Active,"Active");
		HX_STACK_LINE(834)
		Sprite->set_active(Active);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,activeTransform,(void))

Void FlxSpriteGroup_obj::visibleTransform( ::flixel::FlxSprite Sprite,bool Visible){
{
		HX_STACK_PUSH("FlxSpriteGroup::visibleTransform","flixel/group/FlxSpriteGroup.hx",833);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Visible,"Visible");
		HX_STACK_LINE(833)
		Sprite->set_visible(Visible);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,visibleTransform,(void))

Void FlxSpriteGroup_obj::immovableTransform( ::flixel::FlxSprite Sprite,bool Immovable){
{
		HX_STACK_PUSH("FlxSpriteGroup::immovableTransform","flixel/group/FlxSpriteGroup.hx",832);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Immovable,"Immovable");
		HX_STACK_LINE(832)
		Sprite->set_immovable(Immovable);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,immovableTransform,(void))

Void FlxSpriteGroup_obj::blenfTransform( ::flixel::FlxSprite Sprite,::flash::display::BlendMode Blend){
{
		HX_STACK_PUSH("FlxSpriteGroup::blenfTransform","flixel/group/FlxSpriteGroup.hx",831);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Blend,"Blend");
		HX_STACK_LINE(831)
		Sprite->set_blend(Blend);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,blenfTransform,(void))

Void FlxSpriteGroup_obj::colorTransformF( ::flixel::FlxSprite Sprite,int Color){
{
		HX_STACK_PUSH("FlxSpriteGroup::colorTransformF","flixel/group/FlxSpriteGroup.hx",830);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Color,"Color");
		HX_STACK_LINE(830)
		Sprite->set_color(Color);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,colorTransformF,(void))

Void FlxSpriteGroup_obj::complexRenderTransform( ::flixel::FlxSprite Sprite,bool Complex){
{
		HX_STACK_PUSH("FlxSpriteGroup::complexRenderTransform","flixel/group/FlxSpriteGroup.hx",829);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Complex,"Complex");
		HX_STACK_LINE(829)
		Sprite->set_forceComplexRender(Complex);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,complexRenderTransform,(void))

Void FlxSpriteGroup_obj::movesTransform( ::flixel::FlxSprite Sprite,bool Moves){
{
		HX_STACK_PUSH("FlxSpriteGroup::movesTransform","flixel/group/FlxSpriteGroup.hx",828);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Moves,"Moves");
		HX_STACK_LINE(828)
		Sprite->set_moves(Moves);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,movesTransform,(void))

Void FlxSpriteGroup_obj::facingTransform( ::flixel::FlxSprite Sprite,int Facing){
{
		HX_STACK_PUSH("FlxSpriteGroup::facingTransform","flixel/group/FlxSpriteGroup.hx",827);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Facing,"Facing");
		HX_STACK_LINE(827)
		Sprite->set_facing(Facing);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,facingTransform,(void))

Void FlxSpriteGroup_obj::alphaTransform( ::flixel::FlxSprite Sprite,Float Alpha){
{
		HX_STACK_PUSH("FlxSpriteGroup::alphaTransform","flixel/group/FlxSpriteGroup.hx",826);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Alpha,"Alpha");
		HX_STACK_LINE(826)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(826)
		_g->set_alpha((_g->alpha * Alpha));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,alphaTransform,(void))

Void FlxSpriteGroup_obj::angleTransform( ::flixel::FlxSprite Sprite,Float Angle){
{
		HX_STACK_PUSH("FlxSpriteGroup::angleTransform","flixel/group/FlxSpriteGroup.hx",825);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Angle,"Angle");
		HX_STACK_LINE(825)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(825)
		_g->set_angle((_g->angle + Angle));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,angleTransform,(void))

Void FlxSpriteGroup_obj::yTransform( ::flixel::FlxSprite Sprite,Float Y){
{
		HX_STACK_PUSH("FlxSpriteGroup::yTransform","flixel/group/FlxSpriteGroup.hx",824);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(Y,"Y");
		HX_STACK_LINE(824)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(824)
		_g->set_y((_g->y + Y));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,yTransform,(void))

Void FlxSpriteGroup_obj::xTransform( ::flixel::FlxSprite Sprite,Float X){
{
		HX_STACK_PUSH("FlxSpriteGroup::xTransform","flixel/group/FlxSpriteGroup.hx",823);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Sprite,"Sprite");
		HX_STACK_ARG(X,"X");
		HX_STACK_LINE(823)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(823)
		_g->set_x((_g->x + X));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,xTransform,(void))

bool FlxSpriteGroup_obj::set_autoReviveMembers( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_autoReviveMembers","flixel/group/FlxSpriteGroup.hx",817);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(817)
	return this->group->autoReviveMembers = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxSpriteGroup_obj,set_autoReviveMembers,return )

bool FlxSpriteGroup_obj::get_autoReviveMembers( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_autoReviveMembers","flixel/group/FlxSpriteGroup.hx",812);
	HX_STACK_THIS(this);
	HX_STACK_LINE(812)
	return this->group->autoReviveMembers;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,get_autoReviveMembers,return )

Array< ::Dynamic > FlxSpriteGroup_obj::get_members( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_members","flixel/group/FlxSpriteGroup.hx",807);
	HX_STACK_THIS(this);
	HX_STACK_LINE(807)
	return this->group->get_members();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,get_members,return )

int FlxSpriteGroup_obj::set_maxSize( int Size){
	HX_STACK_PUSH("FlxSpriteGroup::set_maxSize","flixel/group/FlxSpriteGroup.hx",796);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Size,"Size");
	HX_STACK_LINE(797)
	if (((this->group == null()))){
		HX_STACK_LINE(799)
		this->group = ::flixel::group::FlxTypedGroup_obj::__new(Size);
		HX_STACK_LINE(800)
		return Size;
	}
	HX_STACK_LINE(803)
	return this->group->set_maxSize(Size);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxSpriteGroup_obj,set_maxSize,return )

int FlxSpriteGroup_obj::get_maxSize( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_maxSize","flixel/group/FlxSpriteGroup.hx",791);
	HX_STACK_THIS(this);
	HX_STACK_LINE(791)
	return this->group->maxSize;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,get_maxSize,return )

int FlxSpriteGroup_obj::get_length( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_length","flixel/group/FlxSpriteGroup.hx",786);
	HX_STACK_THIS(this);
	HX_STACK_LINE(786)
	return this->group->length;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,get_length,return )

bool FlxSpriteGroup_obj::set_forceComplexRender( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_forceComplexRender","flixel/group/FlxSpriteGroup.hx",779);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(780)
	if (((bool(this->exists) && bool((this->forceComplexRender != Value))))){
		HX_STACK_LINE(781)
		this->transformChildren_Bool(this->complexRenderTransform_dyn(),Value);
	}
	HX_STACK_LINE(782)
	return this->super::set_forceComplexRender(Value);
}


bool FlxSpriteGroup_obj::set_solid( bool Solid){
	HX_STACK_PUSH("FlxSpriteGroup::set_solid","flixel/group/FlxSpriteGroup.hx",767);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Solid,"Solid");
	HX_STACK_LINE(768)
	if (((bool(this->exists) && bool(((((int(this->allowCollisions) & int((int)4369))) > (int)0) != Solid))))){
		HX_STACK_LINE(769)
		this->transformChildren_Bool(this->solidTransform_dyn(),Solid);
	}
	HX_STACK_LINE(770)
	return this->super::set_solid(Solid);
}


::flash::display::BlendMode FlxSpriteGroup_obj::set_blend( ::flash::display::BlendMode Blend){
	HX_STACK_PUSH("FlxSpriteGroup::set_blend","flixel/group/FlxSpriteGroup.hx",760);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Blend,"Blend");
	HX_STACK_LINE(761)
	if (((bool(this->exists) && bool((this->_blend != Blend))))){
		HX_STACK_LINE(762)
		this->transformChildren_flash_display_BlendMode(this->blenfTransform_dyn(),Blend);
	}
	HX_STACK_LINE(763)
	return this->_blend = Blend;
}


::flash::geom::ColorTransform FlxSpriteGroup_obj::get_colorTransform( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_colorTransform","flixel/group/FlxSpriteGroup.hx",755);
	HX_STACK_THIS(this);
	HX_STACK_LINE(755)
	return null();
}


int FlxSpriteGroup_obj::set_color( int Color){
	HX_STACK_PUSH("FlxSpriteGroup::set_color","flixel/group/FlxSpriteGroup.hx",748);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Color,"Color");
	HX_STACK_LINE(749)
	if (((bool(this->exists) && bool((this->color != Color))))){
		HX_STACK_LINE(750)
		this->transformChildren_Int(this->colorTransformF_dyn(),Color);
	}
	HX_STACK_LINE(751)
	return this->color = Color;
}


::flixel::system::layer::frames::FlxFrame FlxSpriteGroup_obj::set_frame( ::flixel::system::layer::frames::FlxFrame Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_frame","flixel/group/FlxSpriteGroup.hx",743);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(743)
	return Value;
}


::flash::display::BitmapData FlxSpriteGroup_obj::set_pixels( ::flash::display::BitmapData Pixels){
	HX_STACK_PUSH("FlxSpriteGroup::set_pixels","flixel/group/FlxSpriteGroup.hx",738);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Pixels,"Pixels");
	HX_STACK_LINE(738)
	return Pixels;
}


::flash::display::BitmapData FlxSpriteGroup_obj::get_pixels( ){
	HX_STACK_PUSH("FlxSpriteGroup::get_pixels","flixel/group/FlxSpriteGroup.hx",733);
	HX_STACK_THIS(this);
	HX_STACK_LINE(733)
	return null();
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_maxVelocity( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_maxVelocity","flixel/group/FlxSpriteGroup.hx",726);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(727)
	if (((bool((bool(this->exists) && bool((this->maxVelocity != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(728)
		this->transformChildren_flixel_util_FlxPoint(this->maxVelocityTransform_dyn(),Value);
	}
	HX_STACK_LINE(729)
	return this->maxVelocity = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_drag( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_drag","flixel/group/FlxSpriteGroup.hx",719);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(720)
	if (((bool((bool(this->exists) && bool((this->drag != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(721)
		this->transformChildren_flixel_util_FlxPoint(this->dragTransform_dyn(),Value);
	}
	HX_STACK_LINE(722)
	return this->drag = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_acceleration( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_acceleration","flixel/group/FlxSpriteGroup.hx",712);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(713)
	if (((bool((bool(this->exists) && bool((this->acceleration != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(714)
		this->transformChildren_flixel_util_FlxPoint(this->accelerationTransform_dyn(),Value);
	}
	HX_STACK_LINE(715)
	return this->acceleration = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_velocity( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_velocity","flixel/group/FlxSpriteGroup.hx",705);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(706)
	if (((bool((bool(this->exists) && bool((this->velocity != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(707)
		this->transformChildren_flixel_util_FlxPoint(this->velocityTransform_dyn(),Value);
	}
	HX_STACK_LINE(708)
	return this->velocity = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_scrollFactor( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_scrollFactor","flixel/group/FlxSpriteGroup.hx",698);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(699)
	if (((bool((bool(this->exists) && bool((this->scrollFactor != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(700)
		this->transformChildren_flixel_util_FlxPoint(this->scrollFactorTransform_dyn(),Value);
	}
	HX_STACK_LINE(701)
	return this->scrollFactor = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_scale( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_scale","flixel/group/FlxSpriteGroup.hx",691);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(692)
	if (((bool((bool(this->exists) && bool((this->scale != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(693)
		this->transformChildren_flixel_util_FlxPoint(this->scaleTransform_dyn(),Value);
	}
	HX_STACK_LINE(694)
	return this->scale = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_offset( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_offset","flixel/group/FlxSpriteGroup.hx",684);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(685)
	if (((bool((bool(this->exists) && bool((this->offset != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(686)
		this->transformChildren_flixel_util_FlxPoint(this->offsetTransform_dyn(),Value);
	}
	HX_STACK_LINE(687)
	return this->offset = Value;
}


::flixel::util::FlxPoint FlxSpriteGroup_obj::set_origin( ::flixel::util::FlxPoint Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_origin","flixel/group/FlxSpriteGroup.hx",677);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(678)
	if (((bool((bool(this->exists) && bool((this->origin != Value)))) && bool((Value != null()))))){
		HX_STACK_LINE(679)
		this->transformChildren_flixel_util_FlxPoint(this->originTransform_dyn(),Value);
	}
	HX_STACK_LINE(680)
	return this->origin = Value;
}


bool FlxSpriteGroup_obj::set_immovable( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_immovable","flixel/group/FlxSpriteGroup.hx",670);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(671)
	if (((bool(this->exists) && bool((this->immovable != Value))))){
		HX_STACK_LINE(672)
		this->transformChildren_Bool(this->immovableTransform_dyn(),Value);
	}
	HX_STACK_LINE(673)
	return this->immovable = Value;
}


bool FlxSpriteGroup_obj::set_moves( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_moves","flixel/group/FlxSpriteGroup.hx",663);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(664)
	if (((bool(this->exists) && bool((this->moves != Value))))){
		HX_STACK_LINE(665)
		this->transformChildren_Bool(this->movesTransform_dyn(),Value);
	}
	HX_STACK_LINE(666)
	return this->moves = Value;
}


int FlxSpriteGroup_obj::set_facing( int Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_facing","flixel/group/FlxSpriteGroup.hx",656);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(657)
	if (((bool(this->exists) && bool((this->facing != Value))))){
		HX_STACK_LINE(658)
		this->transformChildren_Int(this->facingTransform_dyn(),Value);
	}
	HX_STACK_LINE(659)
	return this->facing = Value;
}


Float FlxSpriteGroup_obj::set_alpha( Float NewAlpha){
	HX_STACK_PUSH("FlxSpriteGroup::set_alpha","flixel/group/FlxSpriteGroup.hx",637);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewAlpha,"NewAlpha");
	HX_STACK_LINE(638)
	if (((NewAlpha > (int)1))){
		HX_STACK_LINE(639)
		NewAlpha = (int)1;
	}
	else{
		HX_STACK_LINE(642)
		if (((NewAlpha < (int)0))){
			HX_STACK_LINE(643)
			NewAlpha = (int)0;
		}
	}
	HX_STACK_LINE(647)
	if (((bool(this->exists) && bool((this->alpha != NewAlpha))))){
		HX_STACK_LINE(649)
		Float factor = (  (((this->alpha > (int)0))) ? Float((Float(NewAlpha) / Float(this->alpha))) : Float((int)0) );		HX_STACK_VAR(factor,"factor");
		HX_STACK_LINE(650)
		this->transformChildren_Float(this->alphaTransform_dyn(),factor);
	}
	HX_STACK_LINE(652)
	return this->super::set_alpha(NewAlpha);
}


Float FlxSpriteGroup_obj::set_angle( Float NewAngle){
	HX_STACK_PUSH("FlxSpriteGroup::set_angle","flixel/group/FlxSpriteGroup.hx",627);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewAngle,"NewAngle");
	HX_STACK_LINE(628)
	if (((bool(this->exists) && bool((this->angle != NewAngle))))){
		HX_STACK_LINE(630)
		Float offset = (NewAngle - this->angle);		HX_STACK_VAR(offset,"offset");
		HX_STACK_LINE(631)
		this->transformChildren_Float(this->angleTransform_dyn(),offset);
	}
	HX_STACK_LINE(633)
	return this->angle = NewAngle;
}


Float FlxSpriteGroup_obj::set_y( Float NewY){
	HX_STACK_PUSH("FlxSpriteGroup::set_y","flixel/group/FlxSpriteGroup.hx",616);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewY,"NewY");
	HX_STACK_LINE(617)
	if (((bool((bool(!(this->_skipTransformChildren)) && bool(this->exists))) && bool((this->y != NewY))))){
		HX_STACK_LINE(619)
		Float offset = (NewY - this->y);		HX_STACK_VAR(offset,"offset");
		HX_STACK_LINE(620)
		this->transformChildren_Float(this->yTransform_dyn(),offset);
	}
	HX_STACK_LINE(623)
	return this->y = NewY;
}


Float FlxSpriteGroup_obj::set_x( Float NewX){
	HX_STACK_PUSH("FlxSpriteGroup::set_x","flixel/group/FlxSpriteGroup.hx",605);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewX,"NewX");
	HX_STACK_LINE(606)
	if (((bool((bool(!(this->_skipTransformChildren)) && bool(this->exists))) && bool((this->x != NewX))))){
		HX_STACK_LINE(608)
		Float offset = (NewX - this->x);		HX_STACK_VAR(offset,"offset");
		HX_STACK_LINE(609)
		this->transformChildren_Float(this->xTransform_dyn(),offset);
	}
	HX_STACK_LINE(612)
	return this->x = NewX;
}


bool FlxSpriteGroup_obj::set_alive( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_alive","flixel/group/FlxSpriteGroup.hx",598);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(599)
	if (((bool(this->exists) && bool((this->alive != Value))))){
		HX_STACK_LINE(600)
		this->transformChildren_Bool(this->aliveTransform_dyn(),Value);
	}
	HX_STACK_LINE(601)
	return this->super::set_alive(Value);
}


bool FlxSpriteGroup_obj::set_active( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_active","flixel/group/FlxSpriteGroup.hx",591);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(592)
	if (((bool(this->exists) && bool((this->active != Value))))){
		HX_STACK_LINE(593)
		this->transformChildren_Bool(this->activeTransform_dyn(),Value);
	}
	HX_STACK_LINE(594)
	return this->super::set_active(Value);
}


bool FlxSpriteGroup_obj::set_visible( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_visible","flixel/group/FlxSpriteGroup.hx",584);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(585)
	if (((bool(this->exists) && bool((this->visible != Value))))){
		HX_STACK_LINE(586)
		this->transformChildren_Bool(this->visibleTransform_dyn(),Value);
	}
	HX_STACK_LINE(587)
	return this->super::set_visible(Value);
}


bool FlxSpriteGroup_obj::set_exists( bool Value){
	HX_STACK_PUSH("FlxSpriteGroup::set_exists","flixel/group/FlxSpriteGroup.hx",577);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(578)
	if (((this->exists != Value))){
		HX_STACK_LINE(579)
		this->transformChildren_Bool(this->existsTransform_dyn(),Value);
	}
	HX_STACK_LINE(580)
	return this->super::set_exists(Value);
}


Void FlxSpriteGroup_obj::setPosition( hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y){
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
	HX_STACK_PUSH("FlxSpriteGroup::setPosition","flixel/group/FlxSpriteGroup.hx",502);
	HX_STACK_THIS(this);
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
{
		HX_STACK_LINE(504)
		Float dx = (X - this->x);		HX_STACK_VAR(dx,"dx");
		HX_STACK_LINE(505)
		Float dy = (Y - this->y);		HX_STACK_VAR(dy,"dy");
		HX_STACK_LINE(506)
		this->multiTransformChildren_Float(Dynamic( Array_obj<Dynamic>::__new().Add(this->xTransform_dyn()).Add(this->yTransform_dyn())),Array_obj< Float >::__new().Add(dx).Add(dy));
		HX_STACK_LINE(509)
		this->_skipTransformChildren = true;
		HX_STACK_LINE(510)
		this->set_x(X);
		HX_STACK_LINE(511)
		this->set_y(Y);
		HX_STACK_LINE(512)
		this->_skipTransformChildren = false;
	}
return null();
}


Void FlxSpriteGroup_obj::reset( Float X,Float Y){
{
		HX_STACK_PUSH("FlxSpriteGroup::reset","flixel/group/FlxSpriteGroup.hx",480);
		HX_STACK_THIS(this);
		HX_STACK_ARG(X,"X");
		HX_STACK_ARG(Y,"Y");
		HX_STACK_LINE(481)
		this->revive();
		HX_STACK_LINE(482)
		this->setPosition(X,Y);
		HX_STACK_LINE(484)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(485)
		{
			HX_STACK_LINE(485)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(485)
			while(((_g1 < _g))){
				HX_STACK_LINE(485)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(487)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(488)
				if (((sprite != null()))){
					HX_STACK_LINE(489)
					sprite->reset(X,Y);
				}
			}
		}
	}
return null();
}


Void FlxSpriteGroup_obj::revive( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::revive","flixel/group/FlxSpriteGroup.hx",467);
		HX_STACK_THIS(this);
		HX_STACK_LINE(468)
		this->super::revive();
		HX_STACK_LINE(469)
		this->group->revive();
	}
return null();
}


Void FlxSpriteGroup_obj::kill( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::kill","flixel/group/FlxSpriteGroup.hx",457);
		HX_STACK_THIS(this);
		HX_STACK_LINE(458)
		this->super::kill();
		HX_STACK_LINE(459)
		this->group->kill();
	}
return null();
}


Void FlxSpriteGroup_obj::clear( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::clear","flixel/group/FlxSpriteGroup.hx",448);
		HX_STACK_THIS(this);
		HX_STACK_LINE(448)
		this->group->clear();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,clear,(void))

::flixel::FlxSprite FlxSpriteGroup_obj::getRandom( hx::Null< int >  __o_StartIndex,hx::Null< int >  __o_Length){
int StartIndex = __o_StartIndex.Default(0);
int Length = __o_Length.Default(0);
	HX_STACK_PUSH("FlxSpriteGroup::getRandom","flixel/group/FlxSpriteGroup.hx",439);
	HX_STACK_THIS(this);
	HX_STACK_ARG(StartIndex,"StartIndex");
	HX_STACK_ARG(Length,"Length");
{
		HX_STACK_LINE(439)
		return this->group->getRandom(StartIndex,Length);
	}
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,getRandom,return )

int FlxSpriteGroup_obj::countDead( ){
	HX_STACK_PUSH("FlxSpriteGroup::countDead","flixel/group/FlxSpriteGroup.hx",427);
	HX_STACK_THIS(this);
	HX_STACK_LINE(427)
	return this->group->countDead();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,countDead,return )

int FlxSpriteGroup_obj::countLiving( ){
	HX_STACK_PUSH("FlxSpriteGroup::countLiving","flixel/group/FlxSpriteGroup.hx",417);
	HX_STACK_THIS(this);
	HX_STACK_LINE(417)
	return this->group->countLiving();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,countLiving,return )

::flixel::FlxSprite FlxSpriteGroup_obj::getFirstDead( ){
	HX_STACK_PUSH("FlxSpriteGroup::getFirstDead","flixel/group/FlxSpriteGroup.hx",407);
	HX_STACK_THIS(this);
	HX_STACK_LINE(407)
	return this->group->getFirstDead();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,getFirstDead,return )

::flixel::FlxSprite FlxSpriteGroup_obj::getFirstAlive( ){
	HX_STACK_PUSH("FlxSpriteGroup::getFirstAlive","flixel/group/FlxSpriteGroup.hx",396);
	HX_STACK_THIS(this);
	HX_STACK_LINE(396)
	return this->group->getFirstAlive();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,getFirstAlive,return )

::flixel::FlxSprite FlxSpriteGroup_obj::getFirstExisting( ){
	HX_STACK_PUSH("FlxSpriteGroup::getFirstExisting","flixel/group/FlxSpriteGroup.hx",385);
	HX_STACK_THIS(this);
	HX_STACK_LINE(385)
	return this->group->getFirstExisting();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,getFirstExisting,return )

int FlxSpriteGroup_obj::getFirstNull( ){
	HX_STACK_PUSH("FlxSpriteGroup::getFirstNull","flixel/group/FlxSpriteGroup.hx",374);
	HX_STACK_THIS(this);
	HX_STACK_LINE(374)
	return this->group->getFirstNull();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxSpriteGroup_obj,getFirstNull,return )

::flixel::FlxSprite FlxSpriteGroup_obj::getFirstAvailable( ::Class ObjectClass,hx::Null< bool >  __o_Force){
bool Force = __o_Force.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::getFirstAvailable","flixel/group/FlxSpriteGroup.hx",363);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ObjectClass,"ObjectClass");
	HX_STACK_ARG(Force,"Force");
{
		HX_STACK_LINE(363)
		return this->group->getFirstAvailable(ObjectClass,Force);
	}
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,getFirstAvailable,return )

Void FlxSpriteGroup_obj::callAll( ::String FunctionName,Dynamic Args,hx::Null< bool >  __o_Recurse){
bool Recurse = __o_Recurse.Default(true);
	HX_STACK_PUSH("FlxSpriteGroup::callAll","flixel/group/FlxSpriteGroup.hx",350);
	HX_STACK_THIS(this);
	HX_STACK_ARG(FunctionName,"FunctionName");
	HX_STACK_ARG(Args,"Args");
	HX_STACK_ARG(Recurse,"Recurse");
{
		HX_STACK_LINE(350)
		this->group->callAll(FunctionName,Args,Recurse);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(FlxSpriteGroup_obj,callAll,(void))

Void FlxSpriteGroup_obj::setAll( ::String VariableName,Dynamic Value,hx::Null< bool >  __o_Recurse){
bool Recurse = __o_Recurse.Default(true);
	HX_STACK_PUSH("FlxSpriteGroup::setAll","flixel/group/FlxSpriteGroup.hx",338);
	HX_STACK_THIS(this);
	HX_STACK_ARG(VariableName,"VariableName");
	HX_STACK_ARG(Value,"Value");
	HX_STACK_ARG(Recurse,"Recurse");
{
		HX_STACK_LINE(338)
		this->group->setAll(VariableName,Value,Recurse);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(FlxSpriteGroup_obj,setAll,(void))

Void FlxSpriteGroup_obj::sort( ::String __o_Index,hx::Null< int >  __o_Order){
::String Index = __o_Index.Default(HX_CSTRING("y"));
int Order = __o_Order.Default(-1);
	HX_STACK_PUSH("FlxSpriteGroup::sort","flixel/group/FlxSpriteGroup.hx",326);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Index,"Index");
	HX_STACK_ARG(Order,"Order");
{
		HX_STACK_LINE(326)
		this->group->sort(Index,Order);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,sort,(void))

::flixel::FlxSprite FlxSpriteGroup_obj::replace( ::flixel::FlxSprite OldObject,::flixel::FlxSprite NewObject){
	HX_STACK_PUSH("FlxSpriteGroup::replace","flixel/group/FlxSpriteGroup.hx",311);
	HX_STACK_THIS(this);
	HX_STACK_ARG(OldObject,"OldObject");
	HX_STACK_ARG(NewObject,"NewObject");
	HX_STACK_LINE(311)
	return this->group->replace(OldObject,NewObject);
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,replace,return )

::flixel::FlxSprite FlxSpriteGroup_obj::remove( ::flixel::FlxSprite Object,hx::Null< bool >  __o_Splice){
bool Splice = __o_Splice.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::remove","flixel/group/FlxSpriteGroup.hx",299);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Object,"Object");
	HX_STACK_ARG(Splice,"Splice");
{
		HX_STACK_LINE(299)
		return this->group->remove(Object,Splice);
	}
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,remove,return )

::flixel::FlxSprite FlxSpriteGroup_obj::recycle( ::Class ObjectClass,Dynamic ContructorArgs,hx::Null< bool >  __o_Force){
bool Force = __o_Force.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::recycle","flixel/group/FlxSpriteGroup.hx",288);
	HX_STACK_THIS(this);
	HX_STACK_ARG(ObjectClass,"ObjectClass");
	HX_STACK_ARG(ContructorArgs,"ContructorArgs");
	HX_STACK_ARG(Force,"Force");
{
		HX_STACK_LINE(288)
		return this->group->recycle(ObjectClass,ContructorArgs,Force);
	}
}


HX_DEFINE_DYNAMIC_FUNC3(FlxSpriteGroup_obj,recycle,return )

::flixel::FlxSprite FlxSpriteGroup_obj::add( ::flixel::FlxSprite Sprite){
	HX_STACK_PUSH("FlxSpriteGroup::add","flixel/group/FlxSpriteGroup.hx",272);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Sprite,"Sprite");
	HX_STACK_LINE(273)
	{
		HX_STACK_LINE(273)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(273)
		_g->set_x((_g->x + this->x));
	}
	HX_STACK_LINE(274)
	{
		HX_STACK_LINE(274)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(274)
		_g->set_y((_g->y + this->y));
	}
	HX_STACK_LINE(275)
	{
		HX_STACK_LINE(275)
		::flixel::FlxSprite _g = Sprite;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(275)
		_g->set_alpha((_g->alpha * this->alpha));
	}
	HX_STACK_LINE(276)
	this->group->add(Sprite);
	HX_STACK_LINE(277)
	return Sprite;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxSpriteGroup_obj,add,return )

Void FlxSpriteGroup_obj::drawDebugOnCamera( ::flixel::FlxCamera Camera){
{
		HX_STACK_PUSH("FlxSpriteGroup::drawDebugOnCamera","flixel/group/FlxSpriteGroup.hx",257);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Camera,"Camera");
		HX_STACK_LINE(257)
		if ((!(this->isDrawnDebug))){
			HX_STACK_LINE(260)
			this->group->drawDebug();
			HX_STACK_LINE(261)
			this->isDrawnDebug = true;
		}
	}
return null();
}


Array< ::Dynamic > FlxSpriteGroup_obj::replaceColor( int Color,int NewColor,hx::Null< bool >  __o_FetchPositions){
bool FetchPositions = __o_FetchPositions.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::replaceColor","flixel/group/FlxSpriteGroup.hx",222);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Color,"Color");
	HX_STACK_ARG(NewColor,"NewColor");
	HX_STACK_ARG(FetchPositions,"FetchPositions");
{
		HX_STACK_LINE(223)
		Array< ::Dynamic > positions = null();		HX_STACK_VAR(positions,"positions");
		HX_STACK_LINE(224)
		if ((FetchPositions)){
			HX_STACK_LINE(225)
			positions = Array_obj< ::Dynamic >::__new();
		}
		HX_STACK_LINE(229)
		Array< ::Dynamic > spritePositions;		HX_STACK_VAR(spritePositions,"spritePositions");
		HX_STACK_LINE(230)
		{
			HX_STACK_LINE(230)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->group->get_members();		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(230)
			while(((_g < _g1->length))){
				HX_STACK_LINE(230)
				::flixel::FlxSprite sprite = _g1->__get(_g).StaticCast< ::flixel::FlxSprite >();		HX_STACK_VAR(sprite,"sprite");
				HX_STACK_LINE(230)
				++(_g);
				HX_STACK_LINE(232)
				if (((sprite != null()))){
					HX_STACK_LINE(234)
					spritePositions = sprite->replaceColor(Color,NewColor,FetchPositions);
					HX_STACK_LINE(235)
					if ((FetchPositions)){
						HX_STACK_LINE(236)
						positions = positions->concat(spritePositions);
					}
				}
			}
		}
		HX_STACK_LINE(242)
		return positions;
	}
}


Void FlxSpriteGroup_obj::draw( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::draw","flixel/group/FlxSpriteGroup.hx",207);
		HX_STACK_THIS(this);
		HX_STACK_LINE(208)
		this->group->draw();
		HX_STACK_LINE(210)
		this->isDrawnDebug = false;
	}
return null();
}


Void FlxSpriteGroup_obj::update( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::update","flixel/group/FlxSpriteGroup.hx",202);
		HX_STACK_THIS(this);
		HX_STACK_LINE(202)
		this->group->update();
	}
return null();
}


bool FlxSpriteGroup_obj::pixelsOverlapPoint( ::flixel::util::FlxPoint point,hx::Null< int >  __o_Mask,::flixel::FlxCamera Camera){
int Mask = __o_Mask.Default(255);
	HX_STACK_PUSH("FlxSpriteGroup::pixelsOverlapPoint","flixel/group/FlxSpriteGroup.hx",188);
	HX_STACK_THIS(this);
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(Mask,"Mask");
	HX_STACK_ARG(Camera,"Camera");
{
		HX_STACK_LINE(189)
		bool result = false;		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(190)
		{
			HX_STACK_LINE(190)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->group->get_members();		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(190)
			while(((_g < _g1->length))){
				HX_STACK_LINE(190)
				::flixel::FlxSprite sprite = _g1->__get(_g).StaticCast< ::flixel::FlxSprite >();		HX_STACK_VAR(sprite,"sprite");
				HX_STACK_LINE(190)
				++(_g);
				HX_STACK_LINE(192)
				if (((bool((bool((sprite != null())) && bool(sprite->exists))) && bool(sprite->visible)))){
					HX_STACK_LINE(193)
					result = (bool(result) || bool(sprite->pixelsOverlapPoint(point,Mask,Camera)));
				}
			}
		}
		HX_STACK_LINE(198)
		return result;
	}
}


bool FlxSpriteGroup_obj::overlapsPoint( ::flixel::util::FlxPoint point,hx::Null< bool >  __o_InScreenSpace,::flixel::FlxCamera Camera){
bool InScreenSpace = __o_InScreenSpace.Default(false);
	HX_STACK_PUSH("FlxSpriteGroup::overlapsPoint","flixel/group/FlxSpriteGroup.hx",166);
	HX_STACK_THIS(this);
	HX_STACK_ARG(point,"point");
	HX_STACK_ARG(InScreenSpace,"InScreenSpace");
	HX_STACK_ARG(Camera,"Camera");
{
		HX_STACK_LINE(167)
		bool result = false;		HX_STACK_VAR(result,"result");
		HX_STACK_LINE(168)
		{
			HX_STACK_LINE(168)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->group->get_members();		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(168)
			while(((_g < _g1->length))){
				HX_STACK_LINE(168)
				::flixel::FlxSprite sprite = _g1->__get(_g).StaticCast< ::flixel::FlxSprite >();		HX_STACK_VAR(sprite,"sprite");
				HX_STACK_LINE(168)
				++(_g);
				HX_STACK_LINE(170)
				if (((bool((bool((sprite != null())) && bool(sprite->exists))) && bool(sprite->visible)))){
					HX_STACK_LINE(171)
					result = (bool(result) || bool(sprite->overlapsPoint(point,InScreenSpace,Camera)));
				}
			}
		}
		HX_STACK_LINE(176)
		return result;
	}
}


bool FlxSpriteGroup_obj::onScreen( ::flixel::FlxCamera Camera){
	HX_STACK_PUSH("FlxSpriteGroup::onScreen","flixel/group/FlxSpriteGroup.hx",140);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Camera,"Camera");
	HX_STACK_LINE(141)
	if (((Camera == null()))){
		HX_STACK_LINE(142)
		Camera = ::flixel::FlxG_obj::camera;
	}
	HX_STACK_LINE(146)
	bool result = false;		HX_STACK_VAR(result,"result");
	HX_STACK_LINE(147)
	{
		HX_STACK_LINE(147)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->group->get_members();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(147)
		while(((_g < _g1->length))){
			HX_STACK_LINE(147)
			::flixel::FlxSprite sprite = _g1->__get(_g).StaticCast< ::flixel::FlxSprite >();		HX_STACK_VAR(sprite,"sprite");
			HX_STACK_LINE(147)
			++(_g);
			HX_STACK_LINE(149)
			if (((bool((bool((sprite != null())) && bool(sprite->exists))) && bool(sprite->visible)))){
				HX_STACK_LINE(150)
				result = (bool(result) || bool(sprite->onScreen(Camera)));
			}
		}
	}
	HX_STACK_LINE(155)
	return result;
}


::flixel::FlxSprite FlxSpriteGroup_obj::clone( ::flixel::FlxSprite NewSprite){
	HX_STACK_PUSH("FlxSpriteGroup::clone","flixel/group/FlxSpriteGroup.hx",115);
	HX_STACK_THIS(this);
	HX_STACK_ARG(NewSprite,"NewSprite");
	HX_STACK_LINE(116)
	if (((bool((NewSprite == null())) || bool(!(::Std_obj::is(NewSprite,hx::ClassOf< ::flixel::group::FlxSpriteGroup >())))))){
		HX_STACK_LINE(117)
		NewSprite = ::flixel::group::FlxSpriteGroup_obj::__new((int)0,(int)0,this->group->maxSize);
	}
	HX_STACK_LINE(121)
	::flixel::group::FlxSpriteGroup cloned = NewSprite;		HX_STACK_VAR(cloned,"cloned");
	HX_STACK_LINE(122)
	cloned->set_maxSize(this->group->maxSize);
	HX_STACK_LINE(124)
	{
		HX_STACK_LINE(124)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		Array< ::Dynamic > _g1 = this->group->get_members();		HX_STACK_VAR(_g1,"_g1");
		HX_STACK_LINE(124)
		while(((_g < _g1->length))){
			HX_STACK_LINE(124)
			::flixel::FlxSprite basic = _g1->__get(_g).StaticCast< ::flixel::FlxSprite >();		HX_STACK_VAR(basic,"basic");
			HX_STACK_LINE(124)
			++(_g);
			HX_STACK_LINE(126)
			if (((basic != null()))){
				HX_STACK_LINE(127)
				cloned->add(basic->clone(null()));
			}
		}
	}
	HX_STACK_LINE(131)
	return cloned;
}


Void FlxSpriteGroup_obj::destroy( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::destroy","flixel/group/FlxSpriteGroup.hx",90);
		HX_STACK_THIS(this);
		HX_STACK_LINE(91)
		if (((this->offset != null()))){
			HX_STACK_LINE(93)
			this->offset->destroy();
			HX_STACK_LINE(94)
			this->set_offset(null());
		}
		HX_STACK_LINE(96)
		if (((this->origin != null()))){
			HX_STACK_LINE(96)
			this->origin->destroy();
			HX_STACK_LINE(96)
			this->set_origin(null());
		}
		HX_STACK_LINE(97)
		if (((this->scale != null()))){
			HX_STACK_LINE(97)
			this->scale->destroy();
			HX_STACK_LINE(97)
			this->set_scale(null());
		}
		HX_STACK_LINE(98)
		if (((this->velocity != null()))){
			HX_STACK_LINE(98)
			this->velocity->destroy();
			HX_STACK_LINE(98)
			this->set_velocity(null());
		}
		HX_STACK_LINE(99)
		if (((this->maxVelocity != null()))){
			HX_STACK_LINE(99)
			this->maxVelocity->destroy();
			HX_STACK_LINE(99)
			this->set_maxVelocity(null());
		}
		HX_STACK_LINE(100)
		if (((this->acceleration != null()))){
			HX_STACK_LINE(100)
			this->acceleration->destroy();
			HX_STACK_LINE(100)
			this->set_acceleration(null());
		}
		HX_STACK_LINE(101)
		if (((this->scrollFactor != null()))){
			HX_STACK_LINE(101)
			this->scrollFactor->destroy();
			HX_STACK_LINE(101)
			this->set_scrollFactor(null());
		}
		HX_STACK_LINE(102)
		if (((this->drag != null()))){
			HX_STACK_LINE(102)
			this->drag->destroy();
			HX_STACK_LINE(102)
			this->set_drag(null());
		}
		HX_STACK_LINE(104)
		if (((this->group != null()))){
			HX_STACK_LINE(104)
			this->group->destroy();
			HX_STACK_LINE(104)
			this->group = null();
		}
		HX_STACK_LINE(106)
		this->super::destroy();
	}
return null();
}


Void FlxSpriteGroup_obj::initVars( ){
{
		HX_STACK_PUSH("FlxSpriteGroup::initVars","flixel/group/FlxSpriteGroup.hx",73);
		HX_STACK_THIS(this);
		HX_STACK_LINE(74)
		this->collisionType = ::flixel::system::FlxCollisionType_obj::SPRITEGROUP;
		HX_STACK_LINE(75)
		this->set_offset(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->offsetTransform_dyn()));
		HX_STACK_LINE(76)
		this->set_origin(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->originTransform_dyn()));
		HX_STACK_LINE(77)
		this->set_scale(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->scaleTransform_dyn()));
		HX_STACK_LINE(78)
		this->set_velocity(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->velocityTransform_dyn()));
		HX_STACK_LINE(79)
		this->set_maxVelocity(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->maxVelocityTransform_dyn()));
		HX_STACK_LINE(80)
		this->set_acceleration(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->accelerationTransform_dyn()));
		HX_STACK_LINE(81)
		this->set_scrollFactor(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->scrollFactorTransform_dyn()));
		HX_STACK_LINE(82)
		this->set_drag(::flixel::group::_FlxSpriteGroup::FlxPointHelper_obj::__new(hx::ObjectPtr<OBJ_>(this),this->dragTransform_dyn()));
	}
return null();
}


Void FlxSpriteGroup_obj::multiTransformChildren_Float( Dynamic FunctionArray,Array< Float > ValueArray){
{
		HX_STACK_PUSH("FlxSpriteGroup::multiTransformChildren_Float","flixel/group/FlxSpriteGroup.hx",546);
		HX_STACK_THIS(this);
		HX_STACK_ARG(FunctionArray,"FunctionArray");
		HX_STACK_ARG(ValueArray,"ValueArray");
		HX_STACK_LINE(547)
		if (((this->group == null()))){
			HX_STACK_LINE(547)
			return null();
		}
		HX_STACK_LINE(549)
		int numProps = FunctionArray->__Field(HX_CSTRING("length"),true);		HX_STACK_VAR(numProps,"numProps");
		HX_STACK_LINE(551)
		if (((numProps > ValueArray->length))){
			HX_STACK_LINE(552)
			return null();
		}
		HX_STACK_LINE(556)
		::flixel::FlxSprite basic;		HX_STACK_VAR(basic,"basic");
		HX_STACK_LINE(557)
		Dynamic lambda;		HX_STACK_VAR(lambda,"lambda");
		HX_STACK_LINE(559)
		{
			HX_STACK_LINE(559)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(559)
			while(((_g1 < _g))){
				HX_STACK_LINE(559)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(561)
				basic = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(563)
				if (((bool((basic != null())) && bool(basic->exists)))){
					HX_STACK_LINE(565)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(565)
					while(((_g2 < numProps))){
						HX_STACK_LINE(565)
						int j = (_g2)++;		HX_STACK_VAR(j,"j");
						HX_STACK_LINE(567)
						lambda = FunctionArray->__GetItem(j);
						HX_STACK_LINE(568)
						lambda(basic,ValueArray->__get(j)).Cast< Void >();
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,multiTransformChildren_Float,(void))

Void FlxSpriteGroup_obj::transformChildren_Bool( Dynamic Function,bool Value){
{
		HX_STACK_PUSH("FlxSpriteGroup::transformChildren_Bool","flixel/group/FlxSpriteGroup.hx",521);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Function,"Function");
		HX_STACK_ARG(Value,"Value");
		HX_STACK_LINE(522)
		if (((this->group == null()))){
			HX_STACK_LINE(523)
			return null();
		}
		HX_STACK_LINE(527)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(529)
		{
			HX_STACK_LINE(529)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(529)
			while(((_g1 < _g))){
				HX_STACK_LINE(529)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(531)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(533)
				if (((bool((sprite != null())) && bool(sprite->exists)))){
					HX_STACK_LINE(534)
					Function(sprite,Value).Cast< Void >();
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,transformChildren_Bool,(void))

Void FlxSpriteGroup_obj::transformChildren_Float( Dynamic Function,Float Value){
{
		HX_STACK_PUSH("FlxSpriteGroup::transformChildren_Float","flixel/group/FlxSpriteGroup.hx",521);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Function,"Function");
		HX_STACK_ARG(Value,"Value");
		HX_STACK_LINE(522)
		if (((this->group == null()))){
			HX_STACK_LINE(523)
			return null();
		}
		HX_STACK_LINE(527)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(529)
		{
			HX_STACK_LINE(529)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(529)
			while(((_g1 < _g))){
				HX_STACK_LINE(529)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(531)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(533)
				if (((bool((sprite != null())) && bool(sprite->exists)))){
					HX_STACK_LINE(534)
					Function(sprite,Value).Cast< Void >();
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,transformChildren_Float,(void))

Void FlxSpriteGroup_obj::transformChildren_Int( Dynamic Function,int Value){
{
		HX_STACK_PUSH("FlxSpriteGroup::transformChildren_Int","flixel/group/FlxSpriteGroup.hx",521);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Function,"Function");
		HX_STACK_ARG(Value,"Value");
		HX_STACK_LINE(522)
		if (((this->group == null()))){
			HX_STACK_LINE(523)
			return null();
		}
		HX_STACK_LINE(527)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(529)
		{
			HX_STACK_LINE(529)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(529)
			while(((_g1 < _g))){
				HX_STACK_LINE(529)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(531)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(533)
				if (((bool((sprite != null())) && bool(sprite->exists)))){
					HX_STACK_LINE(534)
					Function(sprite,Value).Cast< Void >();
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,transformChildren_Int,(void))

Void FlxSpriteGroup_obj::transformChildren_flixel_util_FlxPoint( Dynamic Function,::flixel::util::FlxPoint Value){
{
		HX_STACK_PUSH("FlxSpriteGroup::transformChildren_flixel_util_FlxPoint","flixel/group/FlxSpriteGroup.hx",521);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Function,"Function");
		HX_STACK_ARG(Value,"Value");
		HX_STACK_LINE(522)
		if (((this->group == null()))){
			HX_STACK_LINE(523)
			return null();
		}
		HX_STACK_LINE(527)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(529)
		{
			HX_STACK_LINE(529)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(529)
			while(((_g1 < _g))){
				HX_STACK_LINE(529)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(531)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(533)
				if (((bool((sprite != null())) && bool(sprite->exists)))){
					HX_STACK_LINE(534)
					Function(sprite,Value).Cast< Void >();
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,transformChildren_flixel_util_FlxPoint,(void))

Void FlxSpriteGroup_obj::transformChildren_flash_display_BlendMode( Dynamic Function,::flash::display::BlendMode Value){
{
		HX_STACK_PUSH("FlxSpriteGroup::transformChildren_flash_display_BlendMode","flixel/group/FlxSpriteGroup.hx",521);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Function,"Function");
		HX_STACK_ARG(Value,"Value");
		HX_STACK_LINE(522)
		if (((this->group == null()))){
			HX_STACK_LINE(523)
			return null();
		}
		HX_STACK_LINE(527)
		::flixel::FlxSprite sprite;		HX_STACK_VAR(sprite,"sprite");
		HX_STACK_LINE(529)
		{
			HX_STACK_LINE(529)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->get_length();		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(529)
			while(((_g1 < _g))){
				HX_STACK_LINE(529)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(531)
				sprite = this->group->get_members()->__GetItem(i);
				HX_STACK_LINE(533)
				if (((bool((sprite != null())) && bool(sprite->exists)))){
					HX_STACK_LINE(534)
					Function(sprite,Value).Cast< Void >();
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxSpriteGroup_obj,transformChildren_flash_display_BlendMode,(void))


FlxSpriteGroup_obj::FlxSpriteGroup_obj()
{
}

void FlxSpriteGroup_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxSpriteGroup);
	HX_MARK_MEMBER_NAME(isDrawnDebug,"isDrawnDebug");
	HX_MARK_MEMBER_NAME(_skipTransformChildren,"_skipTransformChildren");
	HX_MARK_MEMBER_NAME(length,"length");
	HX_MARK_MEMBER_NAME(members,"members");
	HX_MARK_MEMBER_NAME(group,"group");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxSpriteGroup_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(isDrawnDebug,"isDrawnDebug");
	HX_VISIT_MEMBER_NAME(_skipTransformChildren,"_skipTransformChildren");
	HX_VISIT_MEMBER_NAME(length,"length");
	HX_VISIT_MEMBER_NAME(members,"members");
	HX_VISIT_MEMBER_NAME(group,"group");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxSpriteGroup_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"kill") ) { return kill_dyn(); }
		if (HX_FIELD_EQ(inName,"sort") ) { return sort_dyn(); }
		if (HX_FIELD_EQ(inName,"draw") ) { return draw_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"stamp") ) { return stamp_dyn(); }
		if (HX_FIELD_EQ(inName,"set_y") ) { return set_y_dyn(); }
		if (HX_FIELD_EQ(inName,"set_x") ) { return set_x_dyn(); }
		if (HX_FIELD_EQ(inName,"reset") ) { return reset_dyn(); }
		if (HX_FIELD_EQ(inName,"clear") ) { return clear_dyn(); }
		if (HX_FIELD_EQ(inName,"clone") ) { return clone_dyn(); }
		if (HX_FIELD_EQ(inName,"group") ) { return group; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"revive") ) { return revive_dyn(); }
		if (HX_FIELD_EQ(inName,"setAll") ) { return setAll_dyn(); }
		if (HX_FIELD_EQ(inName,"remove") ) { return remove_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"length") ) { return inCallProp ? get_length() : length; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"callAll") ) { return callAll_dyn(); }
		if (HX_FIELD_EQ(inName,"replace") ) { return replace_dyn(); }
		if (HX_FIELD_EQ(inName,"recycle") ) { return recycle_dyn(); }
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"maxSize") ) { return get_maxSize(); }
		if (HX_FIELD_EQ(inName,"members") ) { return inCallProp ? get_members() : members; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"set_drag") ) { return set_drag_dyn(); }
		if (HX_FIELD_EQ(inName,"onScreen") ) { return onScreen_dyn(); }
		if (HX_FIELD_EQ(inName,"initVars") ) { return initVars_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"calcFrame") ) { return calcFrame_dyn(); }
		if (HX_FIELD_EQ(inName,"set_solid") ) { return set_solid_dyn(); }
		if (HX_FIELD_EQ(inName,"set_blend") ) { return set_blend_dyn(); }
		if (HX_FIELD_EQ(inName,"set_color") ) { return set_color_dyn(); }
		if (HX_FIELD_EQ(inName,"set_frame") ) { return set_frame_dyn(); }
		if (HX_FIELD_EQ(inName,"set_scale") ) { return set_scale_dyn(); }
		if (HX_FIELD_EQ(inName,"set_moves") ) { return set_moves_dyn(); }
		if (HX_FIELD_EQ(inName,"set_alpha") ) { return set_alpha_dyn(); }
		if (HX_FIELD_EQ(inName,"set_angle") ) { return set_angle_dyn(); }
		if (HX_FIELD_EQ(inName,"set_alive") ) { return set_alive_dyn(); }
		if (HX_FIELD_EQ(inName,"getRandom") ) { return getRandom_dyn(); }
		if (HX_FIELD_EQ(inName,"countDead") ) { return countDead_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"yTransform") ) { return yTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"xTransform") ) { return xTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"get_length") ) { return get_length_dyn(); }
		if (HX_FIELD_EQ(inName,"set_pixels") ) { return set_pixels_dyn(); }
		if (HX_FIELD_EQ(inName,"get_pixels") ) { return get_pixels_dyn(); }
		if (HX_FIELD_EQ(inName,"set_offset") ) { return set_offset_dyn(); }
		if (HX_FIELD_EQ(inName,"set_origin") ) { return set_origin_dyn(); }
		if (HX_FIELD_EQ(inName,"set_facing") ) { return set_facing_dyn(); }
		if (HX_FIELD_EQ(inName,"set_active") ) { return set_active_dyn(); }
		if (HX_FIELD_EQ(inName,"set_exists") ) { return set_exists_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"makeGraphic") ) { return makeGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"loadGraphic") ) { return loadGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"get_members") ) { return get_members_dyn(); }
		if (HX_FIELD_EQ(inName,"set_maxSize") ) { return set_maxSize_dyn(); }
		if (HX_FIELD_EQ(inName,"get_maxSize") ) { return get_maxSize_dyn(); }
		if (HX_FIELD_EQ(inName,"set_visible") ) { return set_visible_dyn(); }
		if (HX_FIELD_EQ(inName,"setPosition") ) { return setPosition_dyn(); }
		if (HX_FIELD_EQ(inName,"countLiving") ) { return countLiving_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"resetHelpers") ) { return resetHelpers_dyn(); }
		if (HX_FIELD_EQ(inName,"set_velocity") ) { return set_velocity_dyn(); }
		if (HX_FIELD_EQ(inName,"getFirstDead") ) { return getFirstDead_dyn(); }
		if (HX_FIELD_EQ(inName,"getFirstNull") ) { return getFirstNull_dyn(); }
		if (HX_FIELD_EQ(inName,"isDrawnDebug") ) { return isDrawnDebug; }
		if (HX_FIELD_EQ(inName,"replaceColor") ) { return replaceColor_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"dragTransform") ) { return dragTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"set_immovable") ) { return set_immovable_dyn(); }
		if (HX_FIELD_EQ(inName,"getFirstAlive") ) { return getFirstAlive_dyn(); }
		if (HX_FIELD_EQ(inName,"overlapsPoint") ) { return overlapsPoint_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"loadfromSprite") ) { return loadfromSprite_dyn(); }
		if (HX_FIELD_EQ(inName,"scaleTransform") ) { return scaleTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"aliveTransform") ) { return aliveTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"solidTransform") ) { return solidTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"blenfTransform") ) { return blenfTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"movesTransform") ) { return movesTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"alphaTransform") ) { return alphaTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"angleTransform") ) { return angleTransform_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"updateFrameData") ) { return updateFrameData_dyn(); }
		if (HX_FIELD_EQ(inName,"originTransform") ) { return originTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"offsetTransform") ) { return offsetTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"existsTransform") ) { return existsTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"activeTransform") ) { return activeTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"colorTransformF") ) { return colorTransformF_dyn(); }
		if (HX_FIELD_EQ(inName,"facingTransform") ) { return facingTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"set_maxVelocity") ) { return set_maxVelocity_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"visibleTransform") ) { return visibleTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"set_acceleration") ) { return set_acceleration_dyn(); }
		if (HX_FIELD_EQ(inName,"set_scrollFactor") ) { return set_scrollFactor_dyn(); }
		if (HX_FIELD_EQ(inName,"getFirstExisting") ) { return getFirstExisting_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"velocityTransform") ) { return velocityTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"getFirstAvailable") ) { return getFirstAvailable_dyn(); }
		if (HX_FIELD_EQ(inName,"drawDebugOnCamera") ) { return drawDebugOnCamera_dyn(); }
		if (HX_FIELD_EQ(inName,"autoReviveMembers") ) { return get_autoReviveMembers(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"loadRotatedGraphic") ) { return loadRotatedGraphic_dyn(); }
		if (HX_FIELD_EQ(inName,"immovableTransform") ) { return immovableTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"get_colorTransform") ) { return get_colorTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"pixelsOverlapPoint") ) { return pixelsOverlapPoint_dyn(); }
		break;
	case 20:
		if (HX_FIELD_EQ(inName,"updateColorTransform") ) { return updateColorTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"loadImageFromTexture") ) { return loadImageFromTexture_dyn(); }
		if (HX_FIELD_EQ(inName,"maxVelocityTransform") ) { return maxVelocityTransform_dyn(); }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"scrollFactorTransform") ) { return scrollFactorTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"accelerationTransform") ) { return accelerationTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"set_autoReviveMembers") ) { return set_autoReviveMembers_dyn(); }
		if (HX_FIELD_EQ(inName,"get_autoReviveMembers") ) { return get_autoReviveMembers_dyn(); }
		if (HX_FIELD_EQ(inName,"transformChildren_Int") ) { return transformChildren_Int_dyn(); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"complexRenderTransform") ) { return complexRenderTransform_dyn(); }
		if (HX_FIELD_EQ(inName,"set_forceComplexRender") ) { return set_forceComplexRender_dyn(); }
		if (HX_FIELD_EQ(inName,"_skipTransformChildren") ) { return _skipTransformChildren; }
		if (HX_FIELD_EQ(inName,"transformChildren_Bool") ) { return transformChildren_Bool_dyn(); }
		break;
	case 23:
		if (HX_FIELD_EQ(inName,"transformChildren_Float") ) { return transformChildren_Float_dyn(); }
		break;
	case 27:
		if (HX_FIELD_EQ(inName,"loadRotatedImageFromTexture") ) { return loadRotatedImageFromTexture_dyn(); }
		break;
	case 28:
		if (HX_FIELD_EQ(inName,"multiTransformChildren_Float") ) { return multiTransformChildren_Float_dyn(); }
		break;
	case 38:
		if (HX_FIELD_EQ(inName,"transformChildren_flixel_util_FlxPoint") ) { return transformChildren_flixel_util_FlxPoint_dyn(); }
		break;
	case 41:
		if (HX_FIELD_EQ(inName,"transformChildren_flash_display_BlendMode") ) { return transformChildren_flash_display_BlendMode_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxSpriteGroup_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"group") ) { group=inValue.Cast< ::flixel::group::FlxTypedGroup >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"length") ) { length=inValue.Cast< int >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"maxSize") ) { return set_maxSize(inValue); }
		if (HX_FIELD_EQ(inName,"members") ) { members=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"isDrawnDebug") ) { isDrawnDebug=inValue.Cast< bool >(); return inValue; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"autoReviveMembers") ) { return set_autoReviveMembers(inValue); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"_skipTransformChildren") ) { _skipTransformChildren=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxSpriteGroup_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("isDrawnDebug"));
	outFields->push(HX_CSTRING("_skipTransformChildren"));
	outFields->push(HX_CSTRING("autoReviveMembers"));
	outFields->push(HX_CSTRING("maxSize"));
	outFields->push(HX_CSTRING("length"));
	outFields->push(HX_CSTRING("members"));
	outFields->push(HX_CSTRING("group"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("updateFrameData"),
	HX_CSTRING("updateColorTransform"),
	HX_CSTRING("stamp"),
	HX_CSTRING("resetHelpers"),
	HX_CSTRING("calcFrame"),
	HX_CSTRING("loadRotatedImageFromTexture"),
	HX_CSTRING("loadImageFromTexture"),
	HX_CSTRING("makeGraphic"),
	HX_CSTRING("loadRotatedGraphic"),
	HX_CSTRING("loadGraphic"),
	HX_CSTRING("loadfromSprite"),
	HX_CSTRING("dragTransform"),
	HX_CSTRING("scrollFactorTransform"),
	HX_CSTRING("accelerationTransform"),
	HX_CSTRING("maxVelocityTransform"),
	HX_CSTRING("velocityTransform"),
	HX_CSTRING("scaleTransform"),
	HX_CSTRING("originTransform"),
	HX_CSTRING("offsetTransform"),
	HX_CSTRING("existsTransform"),
	HX_CSTRING("aliveTransform"),
	HX_CSTRING("solidTransform"),
	HX_CSTRING("activeTransform"),
	HX_CSTRING("visibleTransform"),
	HX_CSTRING("immovableTransform"),
	HX_CSTRING("blenfTransform"),
	HX_CSTRING("colorTransformF"),
	HX_CSTRING("complexRenderTransform"),
	HX_CSTRING("movesTransform"),
	HX_CSTRING("facingTransform"),
	HX_CSTRING("alphaTransform"),
	HX_CSTRING("angleTransform"),
	HX_CSTRING("yTransform"),
	HX_CSTRING("xTransform"),
	HX_CSTRING("set_autoReviveMembers"),
	HX_CSTRING("get_autoReviveMembers"),
	HX_CSTRING("get_members"),
	HX_CSTRING("set_maxSize"),
	HX_CSTRING("get_maxSize"),
	HX_CSTRING("get_length"),
	HX_CSTRING("set_forceComplexRender"),
	HX_CSTRING("set_solid"),
	HX_CSTRING("set_blend"),
	HX_CSTRING("get_colorTransform"),
	HX_CSTRING("set_color"),
	HX_CSTRING("set_frame"),
	HX_CSTRING("set_pixels"),
	HX_CSTRING("get_pixels"),
	HX_CSTRING("set_maxVelocity"),
	HX_CSTRING("set_drag"),
	HX_CSTRING("set_acceleration"),
	HX_CSTRING("set_velocity"),
	HX_CSTRING("set_scrollFactor"),
	HX_CSTRING("set_scale"),
	HX_CSTRING("set_offset"),
	HX_CSTRING("set_origin"),
	HX_CSTRING("set_immovable"),
	HX_CSTRING("set_moves"),
	HX_CSTRING("set_facing"),
	HX_CSTRING("set_alpha"),
	HX_CSTRING("set_angle"),
	HX_CSTRING("set_y"),
	HX_CSTRING("set_x"),
	HX_CSTRING("set_alive"),
	HX_CSTRING("set_active"),
	HX_CSTRING("set_visible"),
	HX_CSTRING("set_exists"),
	HX_CSTRING("setPosition"),
	HX_CSTRING("reset"),
	HX_CSTRING("revive"),
	HX_CSTRING("kill"),
	HX_CSTRING("clear"),
	HX_CSTRING("getRandom"),
	HX_CSTRING("countDead"),
	HX_CSTRING("countLiving"),
	HX_CSTRING("getFirstDead"),
	HX_CSTRING("getFirstAlive"),
	HX_CSTRING("getFirstExisting"),
	HX_CSTRING("getFirstNull"),
	HX_CSTRING("getFirstAvailable"),
	HX_CSTRING("callAll"),
	HX_CSTRING("setAll"),
	HX_CSTRING("sort"),
	HX_CSTRING("replace"),
	HX_CSTRING("remove"),
	HX_CSTRING("recycle"),
	HX_CSTRING("add"),
	HX_CSTRING("drawDebugOnCamera"),
	HX_CSTRING("isDrawnDebug"),
	HX_CSTRING("replaceColor"),
	HX_CSTRING("draw"),
	HX_CSTRING("update"),
	HX_CSTRING("pixelsOverlapPoint"),
	HX_CSTRING("overlapsPoint"),
	HX_CSTRING("onScreen"),
	HX_CSTRING("clone"),
	HX_CSTRING("destroy"),
	HX_CSTRING("initVars"),
	HX_CSTRING("_skipTransformChildren"),
	HX_CSTRING("length"),
	HX_CSTRING("members"),
	HX_CSTRING("group"),
	HX_CSTRING("multiTransformChildren_Float"),
	HX_CSTRING("transformChildren_Bool"),
	HX_CSTRING("transformChildren_Float"),
	HX_CSTRING("transformChildren_Int"),
	HX_CSTRING("transformChildren_flixel_util_FlxPoint"),
	HX_CSTRING("transformChildren_flash_display_BlendMode"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxSpriteGroup_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxSpriteGroup_obj::__mClass,"__mClass");
};

Class FlxSpriteGroup_obj::__mClass;

void FlxSpriteGroup_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.group.FlxSpriteGroup"), hx::TCanCast< FlxSpriteGroup_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxSpriteGroup_obj::__boot()
{
}

} // end namespace flixel
} // end namespace group
