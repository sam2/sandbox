#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_flixel_FlxG
#include <flixel/FlxG.h>
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
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace animation{

Void FlxAnimation_obj::__construct(::flixel::animation::FlxAnimationController Parent,::String Name,Array< int > Frames,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped)
{
HX_STACK_PUSH("FlxAnimation::new","flixel/animation/FlxAnimation.hx",8);
int FrameRate = __o_FrameRate.Default(0);
bool Looped = __o_Looped.Default(true);
{
	HX_STACK_LINE(19)
	this->curFrame = (int)0;
	HX_STACK_LINE(65)
	super::__construct(Parent,Name);
	HX_STACK_LINE(67)
	this->set_frameRate(FrameRate);
	HX_STACK_LINE(68)
	this->_frames = Frames;
	HX_STACK_LINE(69)
	this->numFrames = this->_frames->length;
	HX_STACK_LINE(70)
	this->looped = Looped;
	HX_STACK_LINE(71)
	this->finished = true;
	HX_STACK_LINE(72)
	this->paused = true;
	HX_STACK_LINE(73)
	this->set_curFrame((int)0);
	HX_STACK_LINE(74)
	this->_frameTimer = (int)0;
}
;
	return null();
}

FlxAnimation_obj::~FlxAnimation_obj() { }

Dynamic FlxAnimation_obj::__CreateEmpty() { return  new FlxAnimation_obj; }
hx::ObjectPtr< FlxAnimation_obj > FlxAnimation_obj::__new(::flixel::animation::FlxAnimationController Parent,::String Name,Array< int > Frames,hx::Null< int >  __o_FrameRate,hx::Null< bool >  __o_Looped)
{  hx::ObjectPtr< FlxAnimation_obj > result = new FlxAnimation_obj();
	result->__construct(Parent,Name,Frames,__o_FrameRate,__o_Looped);
	return result;}

Dynamic FlxAnimation_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxAnimation_obj > result = new FlxAnimation_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4]);
	return result;}

::flixel::animation::FlxBaseAnimation FlxAnimation_obj::clone( ::flixel::animation::FlxAnimationController Parent){
	HX_STACK_PUSH("FlxAnimation::clone","flixel/animation/FlxAnimation.hx",189);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Parent,"Parent");
	HX_STACK_LINE(189)
	return ::flixel::animation::FlxAnimation_obj::__new(Parent,this->name,this->_frames,this->frameRate,this->looped);
}


int FlxAnimation_obj::set_curFrame( int Frame){
	HX_STACK_PUSH("FlxAnimation::set_curFrame","flixel/animation/FlxAnimation.hx",166);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Frame,"Frame");
	HX_STACK_LINE(167)
	if (((Frame >= (int)0))){
		HX_STACK_LINE(168)
		if (((bool(!(this->looped)) && bool((Frame >= this->numFrames))))){
			HX_STACK_LINE(171)
			this->finished = true;
			HX_STACK_LINE(172)
			this->curFrame = (this->numFrames - (int)1);
		}
		else{
			HX_STACK_LINE(175)
			this->curFrame = Frame;
		}
	}
	else{
		HX_STACK_LINE(180)
		this->curFrame = ::Std_obj::_int((::Math_obj::random() * this->numFrames));
	}
	HX_STACK_LINE(184)
	this->set_curIndex(this->_frames->__get(this->curFrame));
	HX_STACK_LINE(185)
	return Frame;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimation_obj,set_curFrame,return )

int FlxAnimation_obj::set_frameRate( int value){
	HX_STACK_PUSH("FlxAnimation::set_frameRate","flixel/animation/FlxAnimation.hx",155);
	HX_STACK_THIS(this);
	HX_STACK_ARG(value,"value");
	HX_STACK_LINE(156)
	this->delay = (int)0;
	HX_STACK_LINE(157)
	this->frameRate = value;
	HX_STACK_LINE(158)
	if (((value > (int)0))){
		HX_STACK_LINE(159)
		this->delay = (Float(1.0) / Float(value));
	}
	HX_STACK_LINE(162)
	return value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxAnimation_obj,set_frameRate,return )

Void FlxAnimation_obj::update( ){
{
		HX_STACK_PUSH("FlxAnimation::update","flixel/animation/FlxAnimation.hx",135);
		HX_STACK_THIS(this);
		HX_STACK_LINE(135)
		if (((bool((bool((this->delay > (int)0)) && bool(((bool(this->looped) || bool(!(this->finished))))))) && bool(!(this->paused))))){
			HX_STACK_LINE(138)
			hx::AddEq(this->_frameTimer,::flixel::FlxG_obj::elapsed);
			HX_STACK_LINE(139)
			while(((this->_frameTimer > this->delay))){
				HX_STACK_LINE(141)
				this->_frameTimer = (this->_frameTimer - this->delay);
				HX_STACK_LINE(142)
				if (((bool(this->looped) && bool((this->curFrame == (this->numFrames - (int)1)))))){
					HX_STACK_LINE(143)
					this->set_curFrame((int)0);
				}
				else{
					HX_STACK_LINE(148)
					::flixel::animation::FlxAnimation _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
					int _g1 = _g->curFrame;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(148)
					_g->set_curFrame((_g1 + (int)1));
					HX_STACK_LINE(148)
					_g1;
				}
			}
		}
	}
return null();
}


Void FlxAnimation_obj::stop( ){
{
		HX_STACK_PUSH("FlxAnimation::stop","flixel/animation/FlxAnimation.hx",129);
		HX_STACK_THIS(this);
		HX_STACK_LINE(130)
		this->finished = true;
		HX_STACK_LINE(131)
		this->paused = true;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimation_obj,stop,(void))

Void FlxAnimation_obj::restart( ){
{
		HX_STACK_PUSH("FlxAnimation::restart","flixel/animation/FlxAnimation.hx",124);
		HX_STACK_THIS(this);
		HX_STACK_LINE(124)
		this->play(true,null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxAnimation_obj,restart,(void))

Void FlxAnimation_obj::play( hx::Null< bool >  __o_Force,hx::Null< int >  __o_Frame){
bool Force = __o_Force.Default(false);
int Frame = __o_Frame.Default(0);
	HX_STACK_PUSH("FlxAnimation::play","flixel/animation/FlxAnimation.hx",88);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Force,"Force");
	HX_STACK_ARG(Frame,"Frame");
{
		HX_STACK_LINE(89)
		if (((bool(!(Force)) && bool(((bool(this->looped) || bool(!(this->finished)))))))){
			HX_STACK_LINE(91)
			this->paused = false;
			HX_STACK_LINE(92)
			this->finished = false;
			HX_STACK_LINE(93)
			this->set_curFrame(this->curFrame);
			HX_STACK_LINE(94)
			return null();
		}
		HX_STACK_LINE(97)
		this->paused = false;
		HX_STACK_LINE(98)
		this->_frameTimer = (int)0;
		HX_STACK_LINE(100)
		if (((bool((this->delay <= (int)0)) || bool((Frame == (this->numFrames - (int)1)))))){
			HX_STACK_LINE(101)
			this->finished = true;
		}
		else{
			HX_STACK_LINE(105)
			this->finished = false;
		}
		HX_STACK_LINE(109)
		if (((Frame < (int)0))){
			HX_STACK_LINE(110)
			this->set_curFrame(::Std_obj::_int((::Math_obj::random() * this->numFrames)));
		}
		else{
			HX_STACK_LINE(113)
			if (((this->numFrames > Frame))){
				HX_STACK_LINE(114)
				this->set_curFrame(Frame);
			}
			else{
				HX_STACK_LINE(118)
				this->set_curFrame((int)0);
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(FlxAnimation_obj,play,(void))

Void FlxAnimation_obj::destroy( ){
{
		HX_STACK_PUSH("FlxAnimation::destroy","flixel/animation/FlxAnimation.hx",81);
		HX_STACK_THIS(this);
		HX_STACK_LINE(82)
		this->_frames = null();
		HX_STACK_LINE(83)
		this->name = null();
		HX_STACK_LINE(84)
		this->super::destroy();
	}
return null();
}



FlxAnimation_obj::FlxAnimation_obj()
{
}

void FlxAnimation_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxAnimation);
	HX_MARK_MEMBER_NAME(_frameTimer,"_frameTimer");
	HX_MARK_MEMBER_NAME(_frames,"_frames");
	HX_MARK_MEMBER_NAME(numFrames,"numFrames");
	HX_MARK_MEMBER_NAME(looped,"looped");
	HX_MARK_MEMBER_NAME(paused,"paused");
	HX_MARK_MEMBER_NAME(finished,"finished");
	HX_MARK_MEMBER_NAME(delay,"delay");
	HX_MARK_MEMBER_NAME(curFrame,"curFrame");
	HX_MARK_MEMBER_NAME(frameRate,"frameRate");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxAnimation_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_frameTimer,"_frameTimer");
	HX_VISIT_MEMBER_NAME(_frames,"_frames");
	HX_VISIT_MEMBER_NAME(numFrames,"numFrames");
	HX_VISIT_MEMBER_NAME(looped,"looped");
	HX_VISIT_MEMBER_NAME(paused,"paused");
	HX_VISIT_MEMBER_NAME(finished,"finished");
	HX_VISIT_MEMBER_NAME(delay,"delay");
	HX_VISIT_MEMBER_NAME(curFrame,"curFrame");
	HX_VISIT_MEMBER_NAME(frameRate,"frameRate");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxAnimation_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"stop") ) { return stop_dyn(); }
		if (HX_FIELD_EQ(inName,"play") ) { return play_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"clone") ) { return clone_dyn(); }
		if (HX_FIELD_EQ(inName,"delay") ) { return delay; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"looped") ) { return looped; }
		if (HX_FIELD_EQ(inName,"paused") ) { return paused; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"restart") ) { return restart_dyn(); }
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"_frames") ) { return _frames; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"finished") ) { return finished; }
		if (HX_FIELD_EQ(inName,"curFrame") ) { return curFrame; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"numFrames") ) { return numFrames; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { return frameRate; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_frameTimer") ) { return _frameTimer; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"set_curFrame") ) { return set_curFrame_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"set_frameRate") ) { return set_frameRate_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxAnimation_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"delay") ) { delay=inValue.Cast< Float >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"looped") ) { looped=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"paused") ) { paused=inValue.Cast< bool >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_frames") ) { _frames=inValue.Cast< Array< int > >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"finished") ) { finished=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"curFrame") ) { if (inCallProp) return set_curFrame(inValue);curFrame=inValue.Cast< int >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"numFrames") ) { numFrames=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"frameRate") ) { if (inCallProp) return set_frameRate(inValue);frameRate=inValue.Cast< int >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"_frameTimer") ) { _frameTimer=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxAnimation_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_frameTimer"));
	outFields->push(HX_CSTRING("_frames"));
	outFields->push(HX_CSTRING("numFrames"));
	outFields->push(HX_CSTRING("looped"));
	outFields->push(HX_CSTRING("paused"));
	outFields->push(HX_CSTRING("finished"));
	outFields->push(HX_CSTRING("delay"));
	outFields->push(HX_CSTRING("curFrame"));
	outFields->push(HX_CSTRING("frameRate"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("clone"),
	HX_CSTRING("set_curFrame"),
	HX_CSTRING("set_frameRate"),
	HX_CSTRING("update"),
	HX_CSTRING("stop"),
	HX_CSTRING("restart"),
	HX_CSTRING("play"),
	HX_CSTRING("destroy"),
	HX_CSTRING("_frameTimer"),
	HX_CSTRING("_frames"),
	HX_CSTRING("numFrames"),
	HX_CSTRING("looped"),
	HX_CSTRING("paused"),
	HX_CSTRING("finished"),
	HX_CSTRING("delay"),
	HX_CSTRING("curFrame"),
	HX_CSTRING("frameRate"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxAnimation_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxAnimation_obj::__mClass,"__mClass");
};

Class FlxAnimation_obj::__mClass;

void FlxAnimation_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.animation.FlxAnimation"), hx::TCanCast< FlxAnimation_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxAnimation_obj::__boot()
{
}

} // end namespace flixel
} // end namespace animation
