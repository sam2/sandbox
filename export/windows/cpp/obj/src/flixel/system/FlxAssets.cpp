#include <hxcpp.h>

#ifndef INCLUDED_flash_display_BitmapData
#include <flash/display/BitmapData.h>
#endif
#ifndef INCLUDED_flash_display_Graphics
#include <flash/display/Graphics.h>
#endif
#ifndef INCLUDED_flash_display_IBitmapDrawable
#include <flash/display/IBitmapDrawable.h>
#endif
#ifndef INCLUDED_flash_text_Font
#include <flash/text/Font.h>
#endif
#ifndef INCLUDED_flixel_system_FlxAssets
#include <flixel/system/FlxAssets.h>
#endif
#ifndef INCLUDED_flixel_system__FlxAssets_FontDebugger
#include <flixel/system/_FlxAssets/FontDebugger.h>
#endif
#ifndef INCLUDED_flixel_system__FlxAssets_FontDefault
#include <flixel/system/_FlxAssets/FontDefault.h>
#endif
#ifndef INCLUDED_openfl_Assets
#include <openfl/Assets.h>
#endif
namespace flixel{
namespace system{

Void FlxAssets_obj::__construct()
{
	return null();
}

FlxAssets_obj::~FlxAssets_obj() { }

Dynamic FlxAssets_obj::__CreateEmpty() { return  new FlxAssets_obj; }
hx::ObjectPtr< FlxAssets_obj > FlxAssets_obj::__new()
{  hx::ObjectPtr< FlxAssets_obj > result = new FlxAssets_obj();
	result->__construct();
	return result;}

Dynamic FlxAssets_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxAssets_obj > result = new FlxAssets_obj();
	result->__construct();
	return result;}

::String FlxAssets_obj::IMG_WINDOW_HANDLE;

::String FlxAssets_obj::IMG_FLIXEL;

::String FlxAssets_obj::IMG_VISUAL_DEBUG;

::String FlxAssets_obj::IMG_WATCH_DEBUG;

::String FlxAssets_obj::IMG_STATS_DEBUG;

::String FlxAssets_obj::IMG_LOG_DEBUG;

::String FlxAssets_obj::IMG_CONSOLE;

::String FlxAssets_obj::IMG_OPEN;

::String FlxAssets_obj::IMG_RECORD_OFF;

::String FlxAssets_obj::IMG_RECORD_ON;

::String FlxAssets_obj::IMG_STOP;

::String FlxAssets_obj::IMG_RESTART;

::String FlxAssets_obj::IMG_PAUSE;

::String FlxAssets_obj::IMG_PLAY;

::String FlxAssets_obj::IMG_STEP;

::String FlxAssets_obj::IMG_LOGO;

::String FlxAssets_obj::IMG_DEFAULT;

::String FlxAssets_obj::IMG_CORNERS;

::String FlxAssets_obj::IMG_LIGHT;

::String FlxAssets_obj::IMG_AUTO;

::String FlxAssets_obj::IMG_AUTO_ALT;

::String FlxAssets_obj::IMG_BUTTON;

::String FlxAssets_obj::IMG_CURSOR;

::String FlxAssets_obj::IMG_BASE;

::String FlxAssets_obj::IMG_THUMB;

::String FlxAssets_obj::IMG_BUTTON_A;

::String FlxAssets_obj::IMG_BUTTON_B;

::String FlxAssets_obj::IMG_BUTTON_C;

::String FlxAssets_obj::IMG_BUTTON_X;

::String FlxAssets_obj::IMG_BUTTON_Y;

::String FlxAssets_obj::IMG_BUTTON_UP;

::String FlxAssets_obj::IMG_BUTTON_DOWN;

::String FlxAssets_obj::IMG_BUTTON_LEFT;

::String FlxAssets_obj::IMG_BUTTON_RIGHT;

::String FlxAssets_obj::SND_BEEP;

::String FlxAssets_obj::SND_FLIXEL;

::String FlxAssets_obj::FONT_DEFAULT;

::String FlxAssets_obj::FONT_DEBUGGER;

Void FlxAssets_obj::init( ){
{
		HX_STACK_PUSH("FlxAssets::init","flixel/system/FlxAssets.hx",75);
		HX_STACK_LINE(76)
		::flash::text::Font_obj::registerFont(hx::ClassOf< ::flixel::system::_FlxAssets::FontDefault >());
		HX_STACK_LINE(79)
		::flash::text::Font_obj::registerFont(hx::ClassOf< ::flixel::system::_FlxAssets::FontDebugger >());
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(FlxAssets_obj,init,(void))

Void FlxAssets_obj::drawLogo( ::flash::display::Graphics graph){
{
		HX_STACK_PUSH("FlxAssets::drawLogo","flixel/system/FlxAssets.hx",84);
		HX_STACK_ARG(graph,"graph");
		HX_STACK_LINE(86)
		graph->beginFill((int)47394,null());
		HX_STACK_LINE(87)
		graph->moveTo((int)50,(int)13);
		HX_STACK_LINE(88)
		graph->lineTo((int)51,(int)13);
		HX_STACK_LINE(89)
		graph->lineTo((int)87,(int)50);
		HX_STACK_LINE(90)
		graph->lineTo((int)87,(int)51);
		HX_STACK_LINE(91)
		graph->lineTo((int)51,(int)87);
		HX_STACK_LINE(92)
		graph->lineTo((int)50,(int)87);
		HX_STACK_LINE(93)
		graph->lineTo((int)13,(int)51);
		HX_STACK_LINE(94)
		graph->lineTo((int)13,(int)50);
		HX_STACK_LINE(95)
		graph->lineTo((int)50,(int)13);
		HX_STACK_LINE(96)
		graph->endFill();
		HX_STACK_LINE(99)
		graph->beginFill((int)16761138,null());
		HX_STACK_LINE(100)
		graph->moveTo((int)0,(int)0);
		HX_STACK_LINE(101)
		graph->lineTo((int)25,(int)0);
		HX_STACK_LINE(102)
		graph->lineTo((int)50,(int)13);
		HX_STACK_LINE(103)
		graph->lineTo((int)13,(int)50);
		HX_STACK_LINE(104)
		graph->lineTo((int)0,(int)25);
		HX_STACK_LINE(105)
		graph->lineTo((int)0,(int)0);
		HX_STACK_LINE(106)
		graph->endFill();
		HX_STACK_LINE(109)
		graph->beginFill((int)16066382,null());
		HX_STACK_LINE(110)
		graph->moveTo((int)100,(int)0);
		HX_STACK_LINE(111)
		graph->lineTo((int)75,(int)0);
		HX_STACK_LINE(112)
		graph->lineTo((int)51,(int)13);
		HX_STACK_LINE(113)
		graph->lineTo((int)87,(int)50);
		HX_STACK_LINE(114)
		graph->lineTo((int)100,(int)25);
		HX_STACK_LINE(115)
		graph->lineTo((int)100,(int)0);
		HX_STACK_LINE(116)
		graph->endFill();
		HX_STACK_LINE(119)
		graph->beginFill((int)3555839,null());
		HX_STACK_LINE(120)
		graph->moveTo((int)0,(int)100);
		HX_STACK_LINE(121)
		graph->lineTo((int)25,(int)100);
		HX_STACK_LINE(122)
		graph->lineTo((int)50,(int)87);
		HX_STACK_LINE(123)
		graph->lineTo((int)13,(int)51);
		HX_STACK_LINE(124)
		graph->lineTo((int)0,(int)75);
		HX_STACK_LINE(125)
		graph->lineTo((int)0,(int)100);
		HX_STACK_LINE(126)
		graph->endFill();
		HX_STACK_LINE(129)
		graph->beginFill((int)314875,null());
		HX_STACK_LINE(130)
		graph->moveTo((int)100,(int)100);
		HX_STACK_LINE(131)
		graph->lineTo((int)75,(int)100);
		HX_STACK_LINE(132)
		graph->lineTo((int)51,(int)87);
		HX_STACK_LINE(133)
		graph->lineTo((int)87,(int)51);
		HX_STACK_LINE(134)
		graph->lineTo((int)100,(int)75);
		HX_STACK_LINE(135)
		graph->lineTo((int)100,(int)100);
		HX_STACK_LINE(136)
		graph->endFill();
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(FlxAssets_obj,drawLogo,(void))

::flash::display::BitmapData FlxAssets_obj::getBitmapData( ::String id){
	HX_STACK_PUSH("FlxAssets::getBitmapData","flixel/system/FlxAssets.hx",140);
	HX_STACK_ARG(id,"id");
	HX_STACK_LINE(140)
	return ::openfl::Assets_obj::getBitmapData(id,false);
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(FlxAssets_obj,getBitmapData,return )

Void FlxAssets_obj::cacheSounds( ){
{
		HX_STACK_PUSH("FlxAssets::cacheSounds","flixel/system/FlxAssets.hx",148);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(FlxAssets_obj,cacheSounds,(void))


FlxAssets_obj::FlxAssets_obj()
{
}

void FlxAssets_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxAssets);
	HX_MARK_END_CLASS();
}

void FlxAssets_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic FlxAssets_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"init") ) { return init_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"drawLogo") ) { return drawLogo_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"cacheSounds") ) { return cacheSounds_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"FONT_DEFAULT") ) { return FONT_DEFAULT; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"FONT_DEBUGGER") ) { return FONT_DEBUGGER; }
		if (HX_FIELD_EQ(inName,"getBitmapData") ) { return getBitmapData_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxAssets_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 12:
		if (HX_FIELD_EQ(inName,"FONT_DEFAULT") ) { FONT_DEFAULT=inValue.Cast< ::String >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"FONT_DEBUGGER") ) { FONT_DEBUGGER=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxAssets_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("IMG_WINDOW_HANDLE"),
	HX_CSTRING("IMG_FLIXEL"),
	HX_CSTRING("IMG_VISUAL_DEBUG"),
	HX_CSTRING("IMG_WATCH_DEBUG"),
	HX_CSTRING("IMG_STATS_DEBUG"),
	HX_CSTRING("IMG_LOG_DEBUG"),
	HX_CSTRING("IMG_CONSOLE"),
	HX_CSTRING("IMG_OPEN"),
	HX_CSTRING("IMG_RECORD_OFF"),
	HX_CSTRING("IMG_RECORD_ON"),
	HX_CSTRING("IMG_STOP"),
	HX_CSTRING("IMG_RESTART"),
	HX_CSTRING("IMG_PAUSE"),
	HX_CSTRING("IMG_PLAY"),
	HX_CSTRING("IMG_STEP"),
	HX_CSTRING("IMG_LOGO"),
	HX_CSTRING("IMG_DEFAULT"),
	HX_CSTRING("IMG_CORNERS"),
	HX_CSTRING("IMG_LIGHT"),
	HX_CSTRING("IMG_AUTO"),
	HX_CSTRING("IMG_AUTO_ALT"),
	HX_CSTRING("IMG_BUTTON"),
	HX_CSTRING("IMG_CURSOR"),
	HX_CSTRING("IMG_BASE"),
	HX_CSTRING("IMG_THUMB"),
	HX_CSTRING("IMG_BUTTON_A"),
	HX_CSTRING("IMG_BUTTON_B"),
	HX_CSTRING("IMG_BUTTON_C"),
	HX_CSTRING("IMG_BUTTON_X"),
	HX_CSTRING("IMG_BUTTON_Y"),
	HX_CSTRING("IMG_BUTTON_UP"),
	HX_CSTRING("IMG_BUTTON_DOWN"),
	HX_CSTRING("IMG_BUTTON_LEFT"),
	HX_CSTRING("IMG_BUTTON_RIGHT"),
	HX_CSTRING("SND_BEEP"),
	HX_CSTRING("SND_FLIXEL"),
	HX_CSTRING("FONT_DEFAULT"),
	HX_CSTRING("FONT_DEBUGGER"),
	HX_CSTRING("init"),
	HX_CSTRING("drawLogo"),
	HX_CSTRING("getBitmapData"),
	HX_CSTRING("cacheSounds"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxAssets_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_WINDOW_HANDLE,"IMG_WINDOW_HANDLE");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_FLIXEL,"IMG_FLIXEL");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_VISUAL_DEBUG,"IMG_VISUAL_DEBUG");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_WATCH_DEBUG,"IMG_WATCH_DEBUG");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_STATS_DEBUG,"IMG_STATS_DEBUG");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_LOG_DEBUG,"IMG_LOG_DEBUG");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_CONSOLE,"IMG_CONSOLE");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_OPEN,"IMG_OPEN");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_RECORD_OFF,"IMG_RECORD_OFF");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_RECORD_ON,"IMG_RECORD_ON");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_STOP,"IMG_STOP");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_RESTART,"IMG_RESTART");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_PAUSE,"IMG_PAUSE");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_PLAY,"IMG_PLAY");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_STEP,"IMG_STEP");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_LOGO,"IMG_LOGO");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_DEFAULT,"IMG_DEFAULT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_CORNERS,"IMG_CORNERS");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_LIGHT,"IMG_LIGHT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_AUTO,"IMG_AUTO");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_AUTO_ALT,"IMG_AUTO_ALT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON,"IMG_BUTTON");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_CURSOR,"IMG_CURSOR");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BASE,"IMG_BASE");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_THUMB,"IMG_THUMB");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_A,"IMG_BUTTON_A");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_B,"IMG_BUTTON_B");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_C,"IMG_BUTTON_C");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_X,"IMG_BUTTON_X");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_Y,"IMG_BUTTON_Y");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_UP,"IMG_BUTTON_UP");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_DOWN,"IMG_BUTTON_DOWN");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_LEFT,"IMG_BUTTON_LEFT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_RIGHT,"IMG_BUTTON_RIGHT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::SND_BEEP,"SND_BEEP");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::SND_FLIXEL,"SND_FLIXEL");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::FONT_DEFAULT,"FONT_DEFAULT");
	HX_MARK_MEMBER_NAME(FlxAssets_obj::FONT_DEBUGGER,"FONT_DEBUGGER");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_WINDOW_HANDLE,"IMG_WINDOW_HANDLE");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_FLIXEL,"IMG_FLIXEL");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_VISUAL_DEBUG,"IMG_VISUAL_DEBUG");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_WATCH_DEBUG,"IMG_WATCH_DEBUG");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_STATS_DEBUG,"IMG_STATS_DEBUG");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_LOG_DEBUG,"IMG_LOG_DEBUG");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_CONSOLE,"IMG_CONSOLE");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_OPEN,"IMG_OPEN");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_RECORD_OFF,"IMG_RECORD_OFF");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_RECORD_ON,"IMG_RECORD_ON");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_STOP,"IMG_STOP");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_RESTART,"IMG_RESTART");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_PAUSE,"IMG_PAUSE");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_PLAY,"IMG_PLAY");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_STEP,"IMG_STEP");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_LOGO,"IMG_LOGO");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_DEFAULT,"IMG_DEFAULT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_CORNERS,"IMG_CORNERS");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_LIGHT,"IMG_LIGHT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_AUTO,"IMG_AUTO");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_AUTO_ALT,"IMG_AUTO_ALT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON,"IMG_BUTTON");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_CURSOR,"IMG_CURSOR");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BASE,"IMG_BASE");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_THUMB,"IMG_THUMB");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_A,"IMG_BUTTON_A");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_B,"IMG_BUTTON_B");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_C,"IMG_BUTTON_C");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_X,"IMG_BUTTON_X");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_Y,"IMG_BUTTON_Y");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_UP,"IMG_BUTTON_UP");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_DOWN,"IMG_BUTTON_DOWN");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_LEFT,"IMG_BUTTON_LEFT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::IMG_BUTTON_RIGHT,"IMG_BUTTON_RIGHT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::SND_BEEP,"SND_BEEP");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::SND_FLIXEL,"SND_FLIXEL");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::FONT_DEFAULT,"FONT_DEFAULT");
	HX_VISIT_MEMBER_NAME(FlxAssets_obj::FONT_DEBUGGER,"FONT_DEBUGGER");
};

Class FlxAssets_obj::__mClass;

void FlxAssets_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.system.FlxAssets"), hx::TCanCast< FlxAssets_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxAssets_obj::__boot()
{
	IMG_WINDOW_HANDLE= HX_CSTRING("flixel/img/debugger/windowHandle.png");
	IMG_FLIXEL= HX_CSTRING("flixel/img/debugger/flixel.png");
	IMG_VISUAL_DEBUG= HX_CSTRING("flixel/img/debugger/buttons/visualDebug.png");
	IMG_WATCH_DEBUG= HX_CSTRING("flixel/img/debugger/buttons/watchDebug.png");
	IMG_STATS_DEBUG= HX_CSTRING("flixel/img/debugger/buttons/statsDebug.png");
	IMG_LOG_DEBUG= HX_CSTRING("flixel/img/debugger/buttons/logDebug.png");
	IMG_CONSOLE= HX_CSTRING("flixel/img/debugger/buttons/console.png");
	IMG_OPEN= HX_CSTRING("flixel/img/debugger/buttons/open.png");
	IMG_RECORD_OFF= HX_CSTRING("flixel/img/debugger/buttons/record_off.png");
	IMG_RECORD_ON= HX_CSTRING("flixel/img/debugger/buttons/record_on.png");
	IMG_STOP= HX_CSTRING("flixel/img/debugger/buttons/stop.png");
	IMG_RESTART= HX_CSTRING("flixel/img/debugger/buttons/restart.png");
	IMG_PAUSE= HX_CSTRING("flixel/img/debugger/buttons/pause.png");
	IMG_PLAY= HX_CSTRING("flixel/img/debugger/buttons/play.png");
	IMG_STEP= HX_CSTRING("flixel/img/debugger/buttons/step.png");
	IMG_LOGO= HX_CSTRING("flixel/img/logo/logo.png");
	IMG_DEFAULT= HX_CSTRING("flixel/img/logo/default.png");
	IMG_CORNERS= HX_CSTRING("flixel/img/preloader/corners.png");
	IMG_LIGHT= HX_CSTRING("flixel/img/preloader/light.png");
	IMG_AUTO= HX_CSTRING("flixel/img/tile/autotiles.png");
	IMG_AUTO_ALT= HX_CSTRING("flixel/img/tile/autotiles_alt.png");
	IMG_BUTTON= HX_CSTRING("flixel/img/ui/button.png");
	IMG_CURSOR= HX_CSTRING("flixel/img/ui/cursor.png");
	IMG_BASE= HX_CSTRING("flixel/img/ui/analog/base.png");
	IMG_THUMB= HX_CSTRING("flixel/img/ui/analog/thumb.png");
	IMG_BUTTON_A= HX_CSTRING("flixel/img/ui/virtualpad/a.png");
	IMG_BUTTON_B= HX_CSTRING("flixel/img/ui/virtualpad/b.png");
	IMG_BUTTON_C= HX_CSTRING("flixel/img/ui/virtualpad/c.png");
	IMG_BUTTON_X= HX_CSTRING("flixel/img/ui/virtualpad/x.png");
	IMG_BUTTON_Y= HX_CSTRING("flixel/img/ui/virtualpad/y.png");
	IMG_BUTTON_UP= HX_CSTRING("flixel/img/ui/virtualpad/up.png");
	IMG_BUTTON_DOWN= HX_CSTRING("flixel/img/ui/virtualpad/down.png");
	IMG_BUTTON_LEFT= HX_CSTRING("flixel/img/ui/virtualpad/left.png");
	IMG_BUTTON_RIGHT= HX_CSTRING("flixel/img/ui/virtualpad/right.png");
	SND_BEEP= HX_CSTRING("flixel/snd/beep.wav");
	SND_FLIXEL= HX_CSTRING("flixel/snd/flixel.wav");
	FONT_DEFAULT= HX_CSTRING("Nokia Cellphone FC Small");
	FONT_DEBUGGER= HX_CSTRING("Arial");
}

} // end namespace flixel
} // end namespace system
