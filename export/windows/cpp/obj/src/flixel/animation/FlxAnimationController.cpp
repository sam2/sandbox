#include <hxcpp.h>

#ifndef INCLUDED_IMap
#include <IMap.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_StringTools
#include <StringTools.h>
#endif
#ifndef INCLUDED_flixel_FlxBasic
#include <flixel/FlxBasic.h>
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
#ifndef INCLUDED_flixel_animation_FlxAnimation
#include <flixel/animation/FlxAnimation.h>
#endif
#ifndef INCLUDED_flixel_animation_FlxAnimationController
#include <flixel/animation/FlxAnimationController.h>
#endif
#ifndef INCLUDED_flixel_animation_FlxBaseAnimation
#include <flixel/animation/FlxBaseAnimation.h>
#endif
#ifndef INCLUDED_flixel_animation_FlxPrerotatedAnimation
#include <flixel/animation/FlxPrerotatedAnimation.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_LogFrontEnd
#include <flixel/system/frontEnds/LogFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_layer_frames_FlxFrame
#include <flixel/system/layer/frames/FlxFrame.h>
#endif
#ifndef INCLUDED_flixel_system_layer_frames_FlxSpriteFrames
#include <flixel/system/layer/frames/FlxSpriteFrames.h>
#endif
#ifndef INCLUDED_flixel_util_FlxArrayUtil
#include <flixel/util/FlxArrayUtil.h>
#endif
#ifndef INCLUDED_flixel_util_loaders_CachedGraphics
#include <flixel/util/loaders/CachedGraphics.h>
#endif
#ifndef INCLUDED_flixel_util_loaders_TexturePackerData
#include <flixel/util/loaders/TexturePackerData.h>
#endif
#ifndef INCLUDED_haxe_ds_StringMap
#include <haxe/ds/StringMap.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace animation{

Void FlxAnimationController_obj::__construct(::flixel::FlxSprite Sprite)
{
HX_STACK_PUSH("FlxAnimationController::new","flixel/animation/FlxAnimationController.hx",10);
{
	HX_STACK_LINE(20)
	this->frameIndex = (int)0;
	HX_STACK_LINE(78)
	this->_sprite = Sprite;
	HX_STACK_LINE(79)
	this->_animations = ::haxe::ds::StringMap_obj::__new();
}
;
	return null();
}

FlxAnimationController_obj::~FlxAnimationController_obj() { }

Dynamic FlxAnimationController_obj::__CreateEmpty() { return  new FlxAnimationController_obj; }
hx::ObjectPtr< FlxAnimationController_obj > FlxAnimationController_obj::__new(::flixel::FlxSprite Sprite)
{  hx::ObjectPtr< FlxAnimationController_obj > result = new FlxAnimationController_obj();
	result->__construct(Sprite);
	return result;}

Dynamic FlxAnimationController_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxAnimationController_obj > result = new FlxAnimationController_obj();
	result->__construct(inArgs[0]);
	return result;}

int FlxAnimationController_obj::getFrameIndex( ::flixel::system::layer::frames::FlxFrame Frame){
	HX_STACK_PUSH("FlxAnimationController::getFrameIndex","flixel/animation/FlxAnimationController.hx",582);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Frame,"Frame");
	HX_STACK_LINE(582)
	return ::flixel::util::FlxArrayUtil_obj::indexOf_flixel_system_layer_frames_FlxFrame(this->_sprite->framesData->frames,Frame,null());
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,getFrameIndex,return )

int FlxAnimationController_obj::get_frames( ){
	HX_STACK_PUSH("FlxAnimationController::get_frames","flixel/animation/FlxAnimationController.hx",572);
	HX_STACK_THIS(this);
	HX_STACK_LINE(572)
	return this->_sprite->frames;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_frames,return )

bool FlxAnimationController_obj::set_finished( bool Value){
	HX_STACK_PUSH("FlxAnimationController::set_finished","flixel/animation/FlxAnimationController.hx",562);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(563)
	if (((bool((Value == true)) && bool((this->_curAnim != null()))))){
		HX_STACK_LINE(565)
		this->_curAnim->finished = true;
		HX_STACK_LINE(566)
		this->set_frameIndex((this->_curAnim->numFrames - (int)1));
	}
	HX_STACK_LINE(568)
	return Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_finished,return )

bool FlxAnimationController_obj::get_finished( ){
	HX_STACK_PUSH("FlxAnimationController::get_finished","flixel/animation/FlxAnimationController.hx",552);
	HX_STACK_THIS(this);
	HX_STACK_LINE(553)
	bool finished = true;		HX_STACK_VAR(finished,"finished");
	HX_STACK_LINE(554)
	if (((this->_curAnim != null()))){
		HX_STACK_LINE(555)
		finished = this->_curAnim->finished;
	}
	HX_STACK_LINE(558)
	return finished;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_finished,return )

bool FlxAnimationController_obj::set_paused( bool Value){
	HX_STACK_PUSH("FlxAnimationController::set_paused","flixel/animation/FlxAnimationController.hx",543);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(544)
	if (((this->_curAnim != null()))){
		HX_STACK_LINE(545)
		this->_curAnim->paused = Value;
	}
	HX_STACK_LINE(548)
	return Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_paused,return )

bool FlxAnimationController_obj::get_paused( ){
	HX_STACK_PUSH("FlxAnimationController::get_paused","flixel/animation/FlxAnimationController.hx",533);
	HX_STACK_THIS(this);
	HX_STACK_LINE(534)
	bool paused = false;		HX_STACK_VAR(paused,"paused");
	HX_STACK_LINE(535)
	if (((this->_curAnim != null()))){
		HX_STACK_LINE(536)
		paused = this->_curAnim->paused;
	}
	HX_STACK_LINE(539)
	return paused;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_paused,return )

::flixel::animation::FlxAnimation FlxAnimationController_obj::set_curAnim( ::flixel::animation::FlxAnimation Anim){
	HX_STACK_PUSH("FlxAnimationController::set_curAnim","flixel/animation/FlxAnimationController.hx",520);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Anim,"Anim");
	HX_STACK_LINE(521)
	if (((bool((Anim != null())) && bool((Anim != this->_curAnim))))){
		HX_STACK_LINE(523)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(524)
			this->_curAnim->stop();
		}
		HX_STACK_LINE(527)
		Anim->play(null(),null());
	}
	HX_STACK_LINE(529)
	return this->_curAnim = Anim;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_curAnim,return )

::flixel::animation::FlxAnimation FlxAnimationController_obj::get_curAnim( ){
	HX_STACK_PUSH("FlxAnimationController::get_curAnim","flixel/animation/FlxAnimationController.hx",506);
	HX_STACK_THIS(this);
	HX_STACK_LINE(507)
	::flixel::animation::FlxAnimation anim = null();		HX_STACK_VAR(anim,"anim");
	HX_STACK_LINE(508)
	if (((bool((bool((this->_curAnim != null())) && bool((this->_curAnim->delay > (int)0)))) && bool(((bool(this->_curAnim->looped) || bool(!(this->_curAnim->finished)))))))){
		HX_STACK_LINE(509)
		anim = this->_curAnim;
	}
	HX_STACK_LINE(512)
	return anim;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_curAnim,return )

::String FlxAnimationController_obj::set_name( ::String AnimName){
	HX_STACK_PUSH("FlxAnimationController::set_name","flixel/animation/FlxAnimationController.hx",497);
	HX_STACK_THIS(this);
	HX_STACK_ARG(AnimName,"AnimName");
	HX_STACK_LINE(498)
	this->play(AnimName,null(),null());
	HX_STACK_LINE(499)
	return AnimName;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_name,return )

::String FlxAnimationController_obj::get_name( ){
	HX_STACK_PUSH("FlxAnimationController::get_name","flixel/animation/FlxAnimationController.hx",483);
	HX_STACK_THIS(this);
	HX_STACK_LINE(484)
	::String animName = null();		HX_STACK_VAR(animName,"animName");
	HX_STACK_LINE(485)
	if (((this->_curAnim != null()))){
		HX_STACK_LINE(486)
		animName = this->_curAnim->name;
	}
	HX_STACK_LINE(489)
	return animName;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_name,return )

::String FlxAnimationController_obj::set_frameName( ::String Value){
	HX_STACK_PUSH("FlxAnimationController::set_frameName","flixel/animation/FlxAnimationController.hx",460);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(461)
	if (((bool((this->_sprite->framesData != null())) && bool(this->_sprite->framesData->framesHash->exists(Value))))){
		HX_STACK_LINE(463)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(465)
			this->_curAnim->stop();
			HX_STACK_LINE(466)
			this->_curAnim = null();
		}
		HX_STACK_LINE(469)
		::flixel::system::layer::frames::FlxFrame frame = this->_sprite->framesData->framesHash->get(Value);		HX_STACK_VAR(frame,"frame");
		HX_STACK_LINE(470)
		if (((frame != null()))){
			HX_STACK_LINE(471)
			this->set_frameIndex(::flixel::util::FlxArrayUtil_obj::indexOf_flixel_system_layer_frames_FlxFrame(this->_sprite->framesData->frames,frame,null()));
		}
	}
	HX_STACK_LINE(476)
	return Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_frameName,return )

::String FlxAnimationController_obj::get_frameName( ){
	HX_STACK_PUSH("FlxAnimationController::get_frameName","flixel/animation/FlxAnimationController.hx",455);
	HX_STACK_THIS(this);
	HX_STACK_LINE(455)
	return this->_sprite->frame->name;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,get_frameName,return )

int FlxAnimationController_obj::set_frameIndex( int Frame){
	HX_STACK_PUSH("FlxAnimationController::set_frameIndex","flixel/animation/FlxAnimationController.hx",439);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Frame,"Frame");
	HX_STACK_LINE(440)
	if (((this->_sprite->framesData != null()))){
		HX_STACK_LINE(442)
		Frame = hx::Mod(Frame,this->_sprite->frames);
		HX_STACK_LINE(443)
		this->_sprite->set_frame(this->_sprite->framesData->frames->__get(Frame).StaticCast< ::flixel::system::layer::frames::FlxFrame >());
		HX_STACK_LINE(445)
		if (((this->callback_dyn() != null()))){
			HX_STACK_LINE(446)
			this->callback((  (((this->_curAnim != null()))) ? ::String(this->_curAnim->name) : ::String(null()) ),(  (((this->_curAnim != null()))) ? int(this->_curAnim->curFrame) : int(Frame) ),Frame);
		}
	}
	HX_STACK_LINE(451)
	return this->frameIndex = Frame;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,set_frameIndex,return )

Void FlxAnimationController_obj::randomFrame( ){
{
		HX_STACK_PUSH("FlxAnimationController::randomFrame","flixel/animation/FlxAnimationController.hx",429);
		HX_STACK_THIS(this);
		HX_STACK_LINE(430)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(432)
			this->_curAnim->stop();
			HX_STACK_LINE(433)
			this->_curAnim = null();
		}
		HX_STACK_LINE(435)
		this->set_frameIndex(::Std_obj::_int((::Math_obj::random() * this->_sprite->frames)));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,randomFrame,(void))

::flixel::animation::FlxAnimation FlxAnimationController_obj::getByName( ::String Name){
	HX_STACK_PUSH("FlxAnimationController::getByName","flixel/animation/FlxAnimationController.hx",420);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_LINE(420)
	return this->_animations->get(Name);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,getByName,return )

Void FlxAnimationController_obj::resume( ){
{
		HX_STACK_PUSH("FlxAnimationController::resume","flixel/animation/FlxAnimationController.hx",409);
		HX_STACK_THIS(this);
		HX_STACK_LINE(409)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(411)
			this->_curAnim->paused = false;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,resume,(void))

Void FlxAnimationController_obj::pause( ){
{
		HX_STACK_PUSH("FlxAnimationController::pause","flixel/animation/FlxAnimationController.hx",398);
		HX_STACK_THIS(this);
		HX_STACK_LINE(398)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(400)
			this->_curAnim->paused = true;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,pause,(void))

Void FlxAnimationController_obj::play( ::String AnimName,hx::Null< bool >  __o_Force,hx::Null< int >  __o_Frame){
bool Force = __o_Force.Default(false);
int Frame = __o_Frame.Default(0);
	HX_STACK_PUSH("FlxAnimationController::play","flixel/animation/FlxAnimationController.hx",370);
	HX_STACK_THIS(this);
	HX_STACK_ARG(AnimName,"AnimName");
	HX_STACK_ARG(Force,"Force");
	HX_STACK_ARG(Frame,"Frame");
{
		HX_STACK_LINE(371)
		if (((AnimName == null()))){
			HX_STACK_LINE(373)
			if (((this->_curAnim != null()))){
				HX_STACK_LINE(374)
				this->_curAnim->stop();
			}
			HX_STACK_LINE(377)
			this->_curAnim = null();
		}
		HX_STACK_LINE(380)
		if (((this->_animations->get(AnimName) == null()))){
			HX_STACK_LINE(382)
			::flixel::FlxG_obj::log->warn(((HX_CSTRING("No animation called \"") + AnimName) + HX_CSTRING("\"")));
			HX_STACK_LINE(383)
			return null();
		}
		HX_STACK_LINE(386)
		if (((bool((this->_curAnim != null())) && bool((AnimName != this->_curAnim->name))))){
			HX_STACK_LINE(387)
			this->_curAnim->stop();
		}
		HX_STACK_LINE(390)
		this->_curAnim = this->_animations->get(AnimName);
		HX_STACK_LINE(391)
		this->_curAnim->play(Force,Frame);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC3(FlxAnimationController_obj,play,(void))

Void FlxAnimationController_obj::addByPrefix( ::String Name,::String Prefix,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped){
int FrameRate = __o_FrameRate.Default(30);
bool Looped = __o_Looped.Default(true);
	HX_STACK_PUSH("FlxAnimationController::addByPrefix","flixel/animation/FlxAnimationController.hx",325);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_ARG(Prefix,"Prefix");
	HX_STACK_ARG(FrameRate,"FrameRate");
	HX_STACK_ARG(Looped,"Looped");
{
		HX_STACK_LINE(325)
		if (((bool((this->_sprite->cachedGraphics != null())) && bool((this->_sprite->cachedGraphics->data != null()))))){
			HX_STACK_LINE(328)
			Array< ::Dynamic > animFrames = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(animFrames,"animFrames");
			HX_STACK_LINE(329)
			int l = this->_sprite->framesData->frames->length;		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(330)
			{
				HX_STACK_LINE(330)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(330)
				while(((_g < l))){
					HX_STACK_LINE(330)
					int i = (_g)++;		HX_STACK_VAR(i,"i");
					HX_STACK_LINE(332)
					if ((::StringTools_obj::startsWith(this->_sprite->framesData->frames->__get(i).StaticCast< ::flixel::system::layer::frames::FlxFrame >()->name,Prefix))){
						HX_STACK_LINE(333)
						animFrames->push(this->_sprite->framesData->frames->__get(i).StaticCast< ::flixel::system::layer::frames::FlxFrame >());
					}
				}
			}
			HX_STACK_LINE(338)
			if (((animFrames->length > (int)0))){
				HX_STACK_LINE(340)
				::String name = animFrames->__get((int)0).StaticCast< ::flixel::system::layer::frames::FlxFrame >()->name;		HX_STACK_VAR(name,"name");
				HX_STACK_LINE(341)
				::String postFix = name.substring(name.indexOf(HX_CSTRING("."),Prefix.length),name.length);		HX_STACK_VAR(postFix,"postFix");
				HX_STACK_LINE(342)
				::flixel::animation::FlxAnimationController_obj::prefixLength = Prefix.length;
				HX_STACK_LINE(343)
				::flixel::animation::FlxAnimationController_obj::postfixLength = postFix.length;
				HX_STACK_LINE(344)
				animFrames->sort(::flixel::animation::FlxAnimationController_obj::frameSortFunction_dyn());
				HX_STACK_LINE(345)
				Array< int > frameIndices = Array_obj< int >::__new();		HX_STACK_VAR(frameIndices,"frameIndices");
				HX_STACK_LINE(347)
				l = animFrames->length;
				HX_STACK_LINE(348)
				{
					HX_STACK_LINE(348)
					int _g = (int)0;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(348)
					while(((_g < l))){
						HX_STACK_LINE(348)
						int i = (_g)++;		HX_STACK_VAR(i,"i");
						HX_STACK_LINE(350)
						frameIndices->push(::flixel::util::FlxArrayUtil_obj::indexOf_flixel_system_layer_frames_FlxFrame(this->_sprite->framesData->frames,animFrames->__get(i).StaticCast< ::flixel::system::layer::frames::FlxFrame >(),null()));
					}
				}
				HX_STACK_LINE(353)
				if (((frameIndices->length > (int)0))){
					HX_STACK_LINE(355)
					::flixel::animation::FlxAnimation anim = ::flixel::animation::FlxAnimation_obj::__new(hx::ObjectPtr<OBJ_>(this),Name,frameIndices,FrameRate,Looped);		HX_STACK_VAR(anim,"anim");
					HX_STACK_LINE(356)
					this->_animations->set(Name,anim);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(FlxAnimationController_obj,addByPrefix,(void))

int FlxAnimationController_obj::findSpriteFrame( ::String Prefix,int Index,::String Postfix){
	HX_STACK_PUSH("FlxAnimationController::findSpriteFrame","flixel/animation/FlxAnimationController.hx",298);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Prefix,"Prefix");
	HX_STACK_ARG(Index,"Index");
	HX_STACK_ARG(Postfix,"Postfix");
	HX_STACK_LINE(299)
	int numFrames = this->_sprite->frames;		HX_STACK_VAR(numFrames,"numFrames");
	HX_STACK_LINE(300)
	Array< ::Dynamic > flxFrames = this->_sprite->framesData->frames;		HX_STACK_VAR(flxFrames,"flxFrames");
	HX_STACK_LINE(301)
	{
		HX_STACK_LINE(301)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(301)
		while(((_g < numFrames))){
			HX_STACK_LINE(301)
			int i = (_g)++;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(303)
			::String name = flxFrames->__get(i).StaticCast< ::flixel::system::layer::frames::FlxFrame >()->name;		HX_STACK_VAR(name,"name");
			HX_STACK_LINE(304)
			if (((bool(::StringTools_obj::startsWith(name,Prefix)) && bool(::StringTools_obj::endsWith(name,Postfix))))){
				HX_STACK_LINE(306)
				Dynamic index = ::Std_obj::parseInt(name.substring(Prefix.length,(name.length - Postfix.length)));		HX_STACK_VAR(index,"index");
				HX_STACK_LINE(307)
				if (((bool((index != null())) && bool((index == Index))))){
					HX_STACK_LINE(308)
					return i;
				}
			}
		}
	}
	HX_STACK_LINE(314)
	return (int)-1;
}


HX_DEFINE_DYNAMIC_FUNC3(FlxAnimationController_obj,findSpriteFrame,return )

Void FlxAnimationController_obj::addByIndicies( ::String Name,::String Prefix,Array< int > Indicies,::String Postfix,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped){
int FrameRate = __o_FrameRate.Default(30);
bool Looped = __o_Looped.Default(true);
	HX_STACK_PUSH("FlxAnimationController::addByIndicies","flixel/animation/FlxAnimationController.hx",269);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_ARG(Prefix,"Prefix");
	HX_STACK_ARG(Indicies,"Indicies");
	HX_STACK_ARG(Postfix,"Postfix");
	HX_STACK_ARG(FrameRate,"FrameRate");
	HX_STACK_ARG(Looped,"Looped");
{
		HX_STACK_LINE(269)
		if (((bool((this->_sprite->cachedGraphics != null())) && bool((this->_sprite->cachedGraphics->data != null()))))){
			HX_STACK_LINE(272)
			Array< int > frameIndices = Array_obj< int >::__new();		HX_STACK_VAR(frameIndices,"frameIndices");
			HX_STACK_LINE(273)
			int l = Indicies->length;		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(274)
			{
				HX_STACK_LINE(274)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(274)
				while(((_g < l))){
					HX_STACK_LINE(274)
					int i = (_g)++;		HX_STACK_VAR(i,"i");
					HX_STACK_LINE(276)
					int indexToAdd = this->findSpriteFrame(Prefix,Indicies->__get(i),Postfix);		HX_STACK_VAR(indexToAdd,"indexToAdd");
					HX_STACK_LINE(277)
					if (((indexToAdd != (int)-1))){
						HX_STACK_LINE(278)
						frameIndices->push(indexToAdd);
					}
				}
			}
			HX_STACK_LINE(283)
			if (((frameIndices->length > (int)0))){
				HX_STACK_LINE(285)
				::flixel::animation::FlxAnimation anim = ::flixel::animation::FlxAnimation_obj::__new(hx::ObjectPtr<OBJ_>(this),Name,frameIndices,FrameRate,Looped);		HX_STACK_VAR(anim,"anim");
				HX_STACK_LINE(286)
				this->_animations->set(Name,anim);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC6(FlxAnimationController_obj,addByIndicies,(void))

Void FlxAnimationController_obj::addByStringIndicies( ::String Name,::String Prefix,Array< ::String > Indicies,::String Postfix,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped){
int FrameRate = __o_FrameRate.Default(30);
bool Looped = __o_Looped.Default(true);
	HX_STACK_PUSH("FlxAnimationController::addByStringIndicies","flixel/animation/FlxAnimationController.hx",236);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_ARG(Prefix,"Prefix");
	HX_STACK_ARG(Indicies,"Indicies");
	HX_STACK_ARG(Postfix,"Postfix");
	HX_STACK_ARG(FrameRate,"FrameRate");
	HX_STACK_ARG(Looped,"Looped");
{
		HX_STACK_LINE(236)
		if (((bool((this->_sprite->cachedGraphics != null())) && bool((this->_sprite->cachedGraphics->data != null()))))){
			HX_STACK_LINE(239)
			Array< int > frameIndices = Array_obj< int >::__new();		HX_STACK_VAR(frameIndices,"frameIndices");
			HX_STACK_LINE(240)
			int l = Indicies->length;		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(241)
			{
				HX_STACK_LINE(241)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(241)
				while(((_g < l))){
					HX_STACK_LINE(241)
					int i = (_g)++;		HX_STACK_VAR(i,"i");
					HX_STACK_LINE(243)
					::String name = ((Prefix + Indicies->__get(i)) + Postfix);		HX_STACK_VAR(name,"name");
					HX_STACK_LINE(244)
					if ((this->_sprite->framesData->framesHash->exists(name))){
						HX_STACK_LINE(246)
						::flixel::system::layer::frames::FlxFrame frameToAdd = this->_sprite->framesData->framesHash->get(name);		HX_STACK_VAR(frameToAdd,"frameToAdd");
						HX_STACK_LINE(247)
						frameIndices->push(::flixel::util::FlxArrayUtil_obj::indexOf_flixel_system_layer_frames_FlxFrame(this->_sprite->framesData->frames,frameToAdd,null()));
					}
				}
			}
			HX_STACK_LINE(251)
			if (((frameIndices->length > (int)0))){
				HX_STACK_LINE(253)
				::flixel::animation::FlxAnimation anim = ::flixel::animation::FlxAnimation_obj::__new(hx::ObjectPtr<OBJ_>(this),Name,frameIndices,FrameRate,Looped);		HX_STACK_VAR(anim,"anim");
				HX_STACK_LINE(254)
				this->_animations->set(Name,anim);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC6(FlxAnimationController_obj,addByStringIndicies,(void))

Void FlxAnimationController_obj::addByNames( ::String Name,Array< ::String > FrameNames,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped){
int FrameRate = __o_FrameRate.Default(30);
bool Looped = __o_Looped.Default(true);
	HX_STACK_PUSH("FlxAnimationController::addByNames","flixel/animation/FlxAnimationController.hx",203);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_ARG(FrameNames,"FrameNames");
	HX_STACK_ARG(FrameRate,"FrameRate");
	HX_STACK_ARG(Looped,"Looped");
{
		HX_STACK_LINE(203)
		if (((bool((this->_sprite->cachedGraphics != null())) && bool((this->_sprite->cachedGraphics->data != null()))))){
			HX_STACK_LINE(206)
			Array< int > indices = Array_obj< int >::__new();		HX_STACK_VAR(indices,"indices");
			HX_STACK_LINE(207)
			int l = FrameNames->length;		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(208)
			{
				HX_STACK_LINE(208)
				int _g = (int)0;		HX_STACK_VAR(_g,"_g");
				HX_STACK_LINE(208)
				while(((_g < l))){
					HX_STACK_LINE(208)
					int i = (_g)++;		HX_STACK_VAR(i,"i");
					HX_STACK_LINE(210)
					::String name = FrameNames->__get(i);		HX_STACK_VAR(name,"name");
					HX_STACK_LINE(211)
					if ((this->_sprite->framesData->framesHash->exists(name))){
						HX_STACK_LINE(213)
						::flixel::system::layer::frames::FlxFrame frameToAdd = this->_sprite->framesData->framesHash->get(name);		HX_STACK_VAR(frameToAdd,"frameToAdd");
						HX_STACK_LINE(214)
						indices->push(::flixel::util::FlxArrayUtil_obj::indexOf_flixel_system_layer_frames_FlxFrame(this->_sprite->framesData->frames,frameToAdd,null()));
					}
				}
			}
			HX_STACK_LINE(218)
			if (((indices->length > (int)0))){
				HX_STACK_LINE(220)
				::flixel::animation::FlxAnimation anim = ::flixel::animation::FlxAnimation_obj::__new(hx::ObjectPtr<OBJ_>(this),Name,indices,FrameRate,Looped);		HX_STACK_VAR(anim,"anim");
				HX_STACK_LINE(221)
				this->_animations->set(Name,anim);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(FlxAnimationController_obj,addByNames,(void))

Void FlxAnimationController_obj::add( ::String Name,Array< int > Frames,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped){
int FrameRate = __o_FrameRate.Default(30);
bool Looped = __o_Looped.Default(true);
	HX_STACK_PUSH("FlxAnimationController::add","flixel/animation/FlxAnimationController.hx",175);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_ARG(Frames,"Frames");
	HX_STACK_ARG(FrameRate,"FrameRate");
	HX_STACK_ARG(Looped,"Looped");
{
		HX_STACK_LINE(177)
		int numFrames = (Frames->length - (int)1);		HX_STACK_VAR(numFrames,"numFrames");
		HX_STACK_LINE(178)
		int i = numFrames;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(179)
		while(((i >= (int)0))){
			HX_STACK_LINE(181)
			if (((Frames->__get(i) >= this->_sprite->frames))){
				HX_STACK_LINE(182)
				Frames->splice(i,(int)1);
			}
			HX_STACK_LINE(185)
			(i)--;
		}
		HX_STACK_LINE(188)
		if (((Frames->length > (int)0))){
			HX_STACK_LINE(190)
			::flixel::animation::FlxAnimation anim = ::flixel::animation::FlxAnimation_obj::__new(hx::ObjectPtr<OBJ_>(this),Name,Frames,FrameRate,Looped);		HX_STACK_VAR(anim,"anim");
			HX_STACK_LINE(191)
			this->_animations->set(Name,anim);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(FlxAnimationController_obj,add,(void))

::flixel::animation::FlxAnimation FlxAnimationController_obj::get( ::String Name){
	HX_STACK_PUSH("FlxAnimationController::get","flixel/animation/FlxAnimationController.hx",163);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Name,"Name");
	HX_STACK_LINE(163)
	return this->_animations->get(Name);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,get,return )

Void FlxAnimationController_obj::clear_animations( ){
{
		HX_STACK_PUSH("FlxAnimationController::clear_animations","flixel/animation/FlxAnimationController.hx",143);
		HX_STACK_THIS(this);
		HX_STACK_LINE(144)
		if (((this->_animations != null()))){
			struct _Function_2_1{
				inline static Dynamic Block( ::flixel::animation::FlxAnimationController_obj *__this){
					HX_STACK_PUSH("*::closure","flixel/animation/FlxAnimationController.hx",146);
					{
						HX_STACK_LINE(146)
						Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(__this->_animations);		HX_STACK_VAR(_e,"_e");

						HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_3_1,Array< ::Dynamic >,_e)
						Dynamic run(){
							HX_STACK_PUSH("*::_Function_3_1","flixel/animation/FlxAnimationController.hx",146);
							{
								HX_STACK_LINE(146)
								return _e->__get((int)0).StaticCast< ::haxe::ds::StringMap >()->iterator();
							}
							return null();
						}
						HX_END_LOCAL_FUNC0(return)

						HX_STACK_LINE(146)
						return  Dynamic(new _Function_3_1(_e));
					}
					return null();
				}
			};
			HX_STACK_LINE(145)
			for(::cpp::FastIterator_obj< ::flixel::animation::FlxAnimation > *__it = ::cpp::CreateFastIterator< ::flixel::animation::FlxAnimation >((_Function_2_1::Block(this))());  __it->hasNext(); ){
				::flixel::animation::FlxAnimation anim = __it->next();
				if (((anim != null()))){
					HX_STACK_LINE(149)
					anim->destroy();
				}
;
			}
		}
		HX_STACK_LINE(154)
		this->_curAnim = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,clear_animations,(void))

Void FlxAnimationController_obj::clear_prerotated( ){
{
		HX_STACK_PUSH("FlxAnimationController::clear_prerotated","flixel/animation/FlxAnimationController.hx",134);
		HX_STACK_THIS(this);
		HX_STACK_LINE(135)
		if (((this->_prerotated != null()))){
			HX_STACK_LINE(136)
			this->_prerotated->destroy();
		}
		HX_STACK_LINE(139)
		this->_prerotated = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,clear_prerotated,(void))

Void FlxAnimationController_obj::destroy( ){
{
		HX_STACK_PUSH("FlxAnimationController::destroy","flixel/animation/FlxAnimationController.hx",126);
		HX_STACK_THIS(this);
		HX_STACK_LINE(127)
		this->destroyAnimations();
		HX_STACK_LINE(128)
		this->_animations = null();
		HX_STACK_LINE(129)
		this->callback = null();
		HX_STACK_LINE(130)
		this->_sprite = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,destroy,(void))

Void FlxAnimationController_obj::destroyAnimations( ){
{
		HX_STACK_PUSH("FlxAnimationController::destroyAnimations","flixel/animation/FlxAnimationController.hx",120);
		HX_STACK_THIS(this);
		HX_STACK_LINE(121)
		this->clear_animations();
		HX_STACK_LINE(122)
		this->clear_prerotated();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,destroyAnimations,(void))

Void FlxAnimationController_obj::createPrerotated( ::flixel::animation::FlxAnimationController Controller){
{
		HX_STACK_PUSH("FlxAnimationController::createPrerotated","flixel/animation/FlxAnimationController.hx",113);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Controller,"Controller");
		HX_STACK_LINE(114)
		this->destroyAnimations();
		HX_STACK_LINE(115)
		Controller = (  (((Controller != null()))) ? ::flixel::animation::FlxAnimationController(Controller) : ::flixel::animation::FlxAnimationController(hx::ObjectPtr<OBJ_>(this)) );
		HX_STACK_LINE(116)
		this->_prerotated = ::flixel::animation::FlxPrerotatedAnimation_obj::__new(Controller,Controller->_sprite->bakedRotation);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,createPrerotated,(void))

::flixel::animation::FlxAnimationController FlxAnimationController_obj::copyFrom( ::flixel::animation::FlxAnimationController controller){
	HX_STACK_PUSH("FlxAnimationController::copyFrom","flixel/animation/FlxAnimationController.hx",95);
	HX_STACK_THIS(this);
	HX_STACK_ARG(controller,"controller");
	struct _Function_1_1{
		inline static Dynamic Block( ::flixel::animation::FlxAnimationController &controller){
			HX_STACK_PUSH("*::closure","flixel/animation/FlxAnimationController.hx",96);
			{
				HX_STACK_LINE(96)
				Array< ::Dynamic > _e = Array_obj< ::Dynamic >::__new().Add(controller->_animations);		HX_STACK_VAR(_e,"_e");

				HX_BEGIN_LOCAL_FUNC_S1(hx::LocalFunc,_Function_2_1,Array< ::Dynamic >,_e)
				Dynamic run(){
					HX_STACK_PUSH("*::_Function_2_1","flixel/animation/FlxAnimationController.hx",96);
					{
						HX_STACK_LINE(96)
						return _e->__get((int)0).StaticCast< ::haxe::ds::StringMap >()->iterator();
					}
					return null();
				}
				HX_END_LOCAL_FUNC0(return)

				HX_STACK_LINE(96)
				return  Dynamic(new _Function_2_1(_e));
			}
			return null();
		}
	};
	HX_STACK_LINE(96)
	for(::cpp::FastIterator_obj< ::flixel::animation::FlxAnimation > *__it = ::cpp::CreateFastIterator< ::flixel::animation::FlxAnimation >((_Function_1_1::Block(controller))());  __it->hasNext(); ){
		::flixel::animation::FlxAnimation anim = __it->next();
		this->add(anim->name,anim->_frames,anim->frameRate,anim->looped);
	}
	HX_STACK_LINE(101)
	if (((controller->_prerotated != null()))){
		HX_STACK_LINE(102)
		this->createPrerotated(null());
	}
	HX_STACK_LINE(106)
	{
		struct _Function_2_1{
			inline static ::String Block( ::flixel::animation::FlxAnimationController &controller){
				HX_STACK_PUSH("*::closure","flixel/animation/FlxAnimationController.hx",106);
				{
					HX_STACK_LINE(106)
					::String animName = null();		HX_STACK_VAR(animName,"animName");
					HX_STACK_LINE(106)
					if (((controller->_curAnim != null()))){
						HX_STACK_LINE(106)
						animName = controller->_curAnim->name;
					}
					HX_STACK_LINE(106)
					return animName;
				}
				return null();
			}
		};
		HX_STACK_LINE(106)
		::String AnimName = _Function_2_1::Block(controller);		HX_STACK_VAR(AnimName,"AnimName");
		HX_STACK_LINE(106)
		this->play(AnimName,null(),null());
		HX_STACK_LINE(106)
		AnimName;
	}
	HX_STACK_LINE(107)
	this->set_frameIndex(controller->frameIndex);
	HX_STACK_LINE(109)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimationController_obj,copyFrom,return )

Void FlxAnimationController_obj::update( ){
{
		HX_STACK_PUSH("FlxAnimationController::update","flixel/animation/FlxAnimationController.hx",83);
		HX_STACK_THIS(this);
		HX_STACK_LINE(83)
		if (((this->_curAnim != null()))){
			HX_STACK_LINE(85)
			this->_curAnim->update();
		}
		else{
			HX_STACK_LINE(88)
			if (((this->_prerotated != null()))){
				HX_STACK_LINE(89)
				this->_prerotated->set_angle(this->_sprite->angle);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimationController_obj,update,(void))

int FlxAnimationController_obj::prefixLength;

int FlxAnimationController_obj::postfixLength;

int FlxAnimationController_obj::frameSortFunction( ::flixel::system::layer::frames::FlxFrame frame1,::flixel::system::layer::frames::FlxFrame frame2){
	HX_STACK_PUSH("FlxAnimationController::frameSortFunction","flixel/animation/FlxAnimationController.hx",590);
	HX_STACK_ARG(frame1,"frame1");
	HX_STACK_ARG(frame2,"frame2");
	HX_STACK_LINE(591)
	::String name1 = frame1->name;		HX_STACK_VAR(name1,"name1");
	HX_STACK_LINE(592)
	::String name2 = frame2->name;		HX_STACK_VAR(name2,"name2");
	HX_STACK_LINE(594)
	int num1 = ::Std_obj::parseInt(name1.substring(::flixel::animation::FlxAnimationController_obj::prefixLength,(name1.length - ::flixel::animation::FlxAnimationController_obj::postfixLength)));		HX_STACK_VAR(num1,"num1");
	HX_STACK_LINE(595)
	int num2 = ::Std_obj::parseInt(name2.substring(::flixel::animation::FlxAnimationController_obj::prefixLength,(name2.length - ::flixel::animation::FlxAnimationController_obj::postfixLength)));		HX_STACK_VAR(num2,"num2");
	HX_STACK_LINE(597)
	if (((num1 > num2))){
		HX_STACK_LINE(598)
		return (int)1;
	}
	else{
		HX_STACK_LINE(601)
		if (((num2 > num1))){
			HX_STACK_LINE(602)
			return (int)-1;
		}
	}
	HX_STACK_LINE(606)
	return (int)0;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxAnimationController_obj,frameSortFunction,return )


FlxAnimationController_obj::FlxAnimationController_obj()
{
}

void FlxAnimationController_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxAnimationController);
	HX_MARK_MEMBER_NAME(_prerotated,"_prerotated");
	HX_MARK_MEMBER_NAME(_animations,"_animations");
	HX_MARK_MEMBER_NAME(_curAnim,"_curAnim");
	HX_MARK_MEMBER_NAME(_sprite,"_sprite");
	HX_MARK_MEMBER_NAME(callback,"callback");
	HX_MARK_MEMBER_NAME(frames,"frames");
	HX_MARK_MEMBER_NAME(frameIndex,"frameIndex");
	HX_MARK_END_CLASS();
}

void FlxAnimationController_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_prerotated,"_prerotated");
	HX_VISIT_MEMBER_NAME(_animations,"_animations");
	HX_VISIT_MEMBER_NAME(_curAnim,"_curAnim");
	HX_VISIT_MEMBER_NAME(_sprite,"_sprite");
	HX_VISIT_MEMBER_NAME(callback,"callback");
	HX_VISIT_MEMBER_NAME(frames,"frames");
	HX_VISIT_MEMBER_NAME(frameIndex,"frameIndex");
}

Dynamic FlxAnimationController_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		if (HX_FIELD_EQ(inName,"get") ) { return get_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"play") ) { return play_dyn(); }
		if (HX_FIELD_EQ(inName,"name") ) { return get_name(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"pause") ) { return pause_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"resume") ) { return resume_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"frames") ) { return inCallProp ? get_frames() : frames; }
		if (HX_FIELD_EQ(inName,"paused") ) { return get_paused(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"_sprite") ) { return _sprite; }
		if (HX_FIELD_EQ(inName,"curAnim") ) { return get_curAnim(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"set_name") ) { return set_name_dyn(); }
		if (HX_FIELD_EQ(inName,"get_name") ) { return get_name_dyn(); }
		if (HX_FIELD_EQ(inName,"copyFrom") ) { return copyFrom_dyn(); }
		if (HX_FIELD_EQ(inName,"_curAnim") ) { return _curAnim; }
		if (HX_FIELD_EQ(inName,"callback") ) { return callback; }
		if (HX_FIELD_EQ(inName,"finished") ) { return get_finished(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"getByName") ) { return getByName_dyn(); }
		if (HX_FIELD_EQ(inName,"frameName") ) { return get_frameName(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"get_frames") ) { return get_frames_dyn(); }
		if (HX_FIELD_EQ(inName,"set_paused") ) { return set_paused_dyn(); }
		if (HX_FIELD_EQ(inName,"get_paused") ) { return get_paused_dyn(); }
		if (HX_FIELD_EQ(inName,"addByNames") ) { return addByNames_dyn(); }
		if (HX_FIELD_EQ(inName,"frameIndex") ) { return frameIndex; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"set_curAnim") ) { return set_curAnim_dyn(); }
		if (HX_FIELD_EQ(inName,"get_curAnim") ) { return get_curAnim_dyn(); }
		if (HX_FIELD_EQ(inName,"randomFrame") ) { return randomFrame_dyn(); }
		if (HX_FIELD_EQ(inName,"addByPrefix") ) { return addByPrefix_dyn(); }
		if (HX_FIELD_EQ(inName,"_prerotated") ) { return _prerotated; }
		if (HX_FIELD_EQ(inName,"_animations") ) { return _animations; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"prefixLength") ) { return prefixLength; }
		if (HX_FIELD_EQ(inName,"set_finished") ) { return set_finished_dyn(); }
		if (HX_FIELD_EQ(inName,"get_finished") ) { return get_finished_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"postfixLength") ) { return postfixLength; }
		if (HX_FIELD_EQ(inName,"getFrameIndex") ) { return getFrameIndex_dyn(); }
		if (HX_FIELD_EQ(inName,"set_frameName") ) { return set_frameName_dyn(); }
		if (HX_FIELD_EQ(inName,"get_frameName") ) { return get_frameName_dyn(); }
		if (HX_FIELD_EQ(inName,"addByIndicies") ) { return addByIndicies_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"set_frameIndex") ) { return set_frameIndex_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"findSpriteFrame") ) { return findSpriteFrame_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"clear_animations") ) { return clear_animations_dyn(); }
		if (HX_FIELD_EQ(inName,"clear_prerotated") ) { return clear_prerotated_dyn(); }
		if (HX_FIELD_EQ(inName,"createPrerotated") ) { return createPrerotated_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"frameSortFunction") ) { return frameSortFunction_dyn(); }
		if (HX_FIELD_EQ(inName,"destroyAnimations") ) { return destroyAnimations_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"addByStringIndicies") ) { return addByStringIndicies_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxAnimationController_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return set_name(inValue); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"frames") ) { frames=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"paused") ) { return set_paused(inValue); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_sprite") ) { _sprite=inValue.Cast< ::flixel::FlxSprite >(); return inValue; }
		if (HX_FIELD_EQ(inName,"curAnim") ) { return set_curAnim(inValue); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_curAnim") ) { _curAnim=inValue.Cast< ::flixel::animation::FlxAnimation >(); return inValue; }
		if (HX_FIELD_EQ(inName,"callback") ) { callback=inValue.Cast< Dynamic >(); return inValue; }
		if (HX_FIELD_EQ(inName,"finished") ) { return set_finished(inValue); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"frameName") ) { return set_frameName(inValue); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"frameIndex") ) { if (inCallProp) return set_frameIndex(inValue);frameIndex=inValue.Cast< int >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_prerotated") ) { _prerotated=inValue.Cast< ::flixel::animation::FlxPrerotatedAnimation >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_animations") ) { _animations=inValue.Cast< ::haxe::ds::StringMap >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"prefixLength") ) { prefixLength=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"postfixLength") ) { postfixLength=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxAnimationController_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_prerotated"));
	outFields->push(HX_CSTRING("_animations"));
	outFields->push(HX_CSTRING("_curAnim"));
	outFields->push(HX_CSTRING("_sprite"));
	outFields->push(HX_CSTRING("frames"));
	outFields->push(HX_CSTRING("finished"));
	outFields->push(HX_CSTRING("paused"));
	outFields->push(HX_CSTRING("name"));
	outFields->push(HX_CSTRING("frameName"));
	outFields->push(HX_CSTRING("frameIndex"));
	outFields->push(HX_CSTRING("curAnim"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("prefixLength"),
	HX_CSTRING("postfixLength"),
	HX_CSTRING("frameSortFunction"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("getFrameIndex"),
	HX_CSTRING("get_frames"),
	HX_CSTRING("set_finished"),
	HX_CSTRING("get_finished"),
	HX_CSTRING("set_paused"),
	HX_CSTRING("get_paused"),
	HX_CSTRING("set_curAnim"),
	HX_CSTRING("get_curAnim"),
	HX_CSTRING("set_name"),
	HX_CSTRING("get_name"),
	HX_CSTRING("set_frameName"),
	HX_CSTRING("get_frameName"),
	HX_CSTRING("set_frameIndex"),
	HX_CSTRING("randomFrame"),
	HX_CSTRING("getByName"),
	HX_CSTRING("resume"),
	HX_CSTRING("pause"),
	HX_CSTRING("play"),
	HX_CSTRING("addByPrefix"),
	HX_CSTRING("findSpriteFrame"),
	HX_CSTRING("addByIndicies"),
	HX_CSTRING("addByStringIndicies"),
	HX_CSTRING("addByNames"),
	HX_CSTRING("add"),
	HX_CSTRING("get"),
	HX_CSTRING("clear_animations"),
	HX_CSTRING("clear_prerotated"),
	HX_CSTRING("destroy"),
	HX_CSTRING("destroyAnimations"),
	HX_CSTRING("createPrerotated"),
	HX_CSTRING("copyFrom"),
	HX_CSTRING("update"),
	HX_CSTRING("_prerotated"),
	HX_CSTRING("_animations"),
	HX_CSTRING("_curAnim"),
	HX_CSTRING("_sprite"),
	HX_CSTRING("callback"),
	HX_CSTRING("frames"),
	HX_CSTRING("frameIndex"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxAnimationController_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FlxAnimationController_obj::prefixLength,"prefixLength");
	HX_MARK_MEMBER_NAME(FlxAnimationController_obj::postfixLength,"postfixLength");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxAnimationController_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FlxAnimationController_obj::prefixLength,"prefixLength");
	HX_VISIT_MEMBER_NAME(FlxAnimationController_obj::postfixLength,"postfixLength");
};

Class FlxAnimationController_obj::__mClass;

void FlxAnimationController_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.animation.FlxAnimationController"), hx::TCanCast< FlxAnimationController_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxAnimationController_obj::__boot()
{
	prefixLength= (int)0;
	postfixLength= (int)0;
}

} // end namespace flixel
} // end namespace animation
