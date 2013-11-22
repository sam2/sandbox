#include <hxcpp.h>

#ifndef INCLUDED_flash_display_Bitmap
#include <flash/display/Bitmap.h>
#endif
#ifndef INCLUDED_flash_display_BitmapData
#include <flash/display/BitmapData.h>
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
#ifndef INCLUDED_flash_display_PixelSnapping
#include <flash/display/PixelSnapping.h>
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
#ifndef INCLUDED_flash_text_TextField
#include <flash/text/TextField.h>
#endif
#ifndef INCLUDED_flash_text_TextFormat
#include <flash/text/TextFormat.h>
#endif
#ifndef INCLUDED_flash_text_TextFormatAlign
#include <flash/text/TextFormatAlign.h>
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
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
#endif
#ifndef INCLUDED_flixel_system_FlxAssets
#include <flixel/system/FlxAssets.h>
#endif
#ifndef INCLUDED_flixel_system_FlxSound
#include <flixel/system/FlxSound.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_SoundFrontEnd
#include <flixel/system/frontEnds/SoundFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_ui_FlxSoundTray
#include <flixel/system/ui/FlxSoundTray.h>
#endif
#ifndef INCLUDED_flixel_util_FlxSave
#include <flixel/util/FlxSave.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace system{
namespace ui{

Void FlxSoundTray_obj::__construct()
{
HX_STACK_PUSH("FlxSoundTray::new","flixel/system/ui/FlxSoundTray.hx",39);
{
	HX_STACK_LINE(40)
	super::__construct();
	HX_STACK_LINE(42)
	this->set_visible(false);
	HX_STACK_LINE(43)
	this->set_scaleX((int)2);
	HX_STACK_LINE(44)
	this->set_scaleY((int)2);
	HX_STACK_LINE(45)
	::flash::display::Bitmap tmp = ::flash::display::Bitmap_obj::__new(::flash::display::BitmapData_obj::__new((int)80,(int)30,true,(int)2130706432,null()),null(),null());		HX_STACK_VAR(tmp,"tmp");
	HX_STACK_LINE(46)
	this->set_x((((Float(::flixel::FlxG_obj::width) / Float((int)2)) * ::flixel::FlxCamera_obj::defaultZoom) - ((Float(tmp->get_width()) / Float((int)2)) * this->get_scaleX())));
	HX_STACK_LINE(47)
	this->addChild(tmp);
	HX_STACK_LINE(49)
	::flash::text::TextField text = ::flash::text::TextField_obj::__new();		HX_STACK_VAR(text,"text");
	HX_STACK_LINE(50)
	text->set_width(tmp->get_width());
	HX_STACK_LINE(51)
	text->set_height(tmp->get_height());
	HX_STACK_LINE(52)
	text->set_multiline(true);
	HX_STACK_LINE(53)
	text->set_wordWrap(true);
	HX_STACK_LINE(54)
	text->set_selectable(false);
	HX_STACK_LINE(63)
	::flash::text::TextFormat dtf = ::flash::text::TextFormat_obj::__new(::flixel::system::FlxAssets_obj::FONT_DEFAULT,(int)8,(int)16777215,null(),null(),null(),null(),null(),null(),null(),null(),null(),null());		HX_STACK_VAR(dtf,"dtf");
	HX_STACK_LINE(64)
	dtf->align = ::flash::text::TextFormatAlign_obj::CENTER;
	HX_STACK_LINE(65)
	text->set_defaultTextFormat(dtf);
	HX_STACK_LINE(66)
	this->addChild(text);
	HX_STACK_LINE(67)
	text->set_text(HX_CSTRING("VOLUME"));
	HX_STACK_LINE(68)
	text->set_y((int)16);
	HX_STACK_LINE(70)
	int bx = (int)10;		HX_STACK_VAR(bx,"bx");
	HX_STACK_LINE(71)
	int by = (int)14;		HX_STACK_VAR(by,"by");
	HX_STACK_LINE(72)
	this->_bars = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(74)
	{
		HX_STACK_LINE(74)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(74)
		while(((_g < (int)10))){
			HX_STACK_LINE(74)
			int i = (_g)++;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(76)
			tmp = ::flash::display::Bitmap_obj::__new(::flash::display::BitmapData_obj::__new((int)4,(i + (int)1),false,(int)-1,null()),null(),null());
			HX_STACK_LINE(77)
			tmp->set_x(bx);
			HX_STACK_LINE(78)
			tmp->set_y(by);
			HX_STACK_LINE(79)
			this->addChild(tmp);
			HX_STACK_LINE(80)
			this->_bars->push(tmp);
			HX_STACK_LINE(81)
			hx::AddEq(bx,(int)6);
			HX_STACK_LINE(82)
			(by)--;
		}
	}
	HX_STACK_LINE(85)
	this->set_y(-(this->get_height()));
	HX_STACK_LINE(86)
	this->set_visible(false);
}
;
	return null();
}

FlxSoundTray_obj::~FlxSoundTray_obj() { }

Dynamic FlxSoundTray_obj::__CreateEmpty() { return  new FlxSoundTray_obj; }
hx::ObjectPtr< FlxSoundTray_obj > FlxSoundTray_obj::__new()
{  hx::ObjectPtr< FlxSoundTray_obj > result = new FlxSoundTray_obj();
	result->__construct();
	return result;}

Dynamic FlxSoundTray_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxSoundTray_obj > result = new FlxSoundTray_obj();
	result->__construct();
	return result;}

Void FlxSoundTray_obj::show( hx::Null< bool >  __o_Silent){
bool Silent = __o_Silent.Default(false);
	HX_STACK_PUSH("FlxSoundTray::show","flixel/system/ui/FlxSoundTray.hx",122);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Silent,"Silent");
{
		HX_STACK_LINE(123)
		if ((!(Silent))){
			HX_STACK_LINE(125)
			Float Volume = (int)1;		HX_STACK_VAR(Volume,"Volume");
			bool Looped = false;		HX_STACK_VAR(Looped,"Looped");
			bool AutoDestroy = true;		HX_STACK_VAR(AutoDestroy,"AutoDestroy");
			HX_STACK_LINE(125)
			::flixel::FlxG_obj::sound->load(HX_CSTRING("flixel/snd/beep.wav"),Volume,Looped,AutoDestroy,true,null(),null());
		}
		HX_STACK_LINE(128)
		this->_timer = (int)1;
		HX_STACK_LINE(129)
		this->set_y((int)0);
		HX_STACK_LINE(130)
		this->set_visible(true);
		HX_STACK_LINE(131)
		this->active = true;
		HX_STACK_LINE(132)
		int globalVolume = ::Math_obj::round((::flixel::FlxG_obj::sound->volume * (int)10));		HX_STACK_VAR(globalVolume,"globalVolume");
		HX_STACK_LINE(134)
		if ((::flixel::FlxG_obj::sound->muted)){
			HX_STACK_LINE(135)
			globalVolume = (int)0;
		}
		HX_STACK_LINE(139)
		{
			HX_STACK_LINE(139)
			int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
			int _g = this->_bars->length;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(139)
			while(((_g1 < _g))){
				HX_STACK_LINE(139)
				int i = (_g1)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(141)
				if (((i < globalVolume))){
					HX_STACK_LINE(142)
					this->_bars->__get(i).StaticCast< ::flash::display::Bitmap >()->set_alpha((int)1);
				}
				else{
					HX_STACK_LINE(146)
					this->_bars->__get(i).StaticCast< ::flash::display::Bitmap >()->set_alpha(0.5);
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(FlxSoundTray_obj,show,(void))

Void FlxSoundTray_obj::update( Float MS){
{
		HX_STACK_PUSH("FlxSoundTray::update","flixel/system/ui/FlxSoundTray.hx",93);
		HX_STACK_THIS(this);
		HX_STACK_ARG(MS,"MS");
		HX_STACK_LINE(93)
		if (((this->_timer > (int)0))){
			HX_STACK_LINE(96)
			hx::SubEq(this->_timer,(Float(MS) / Float((int)1000)));
		}
		else{
			HX_STACK_LINE(99)
			if (((this->get_y() > -(this->get_height())))){
				HX_STACK_LINE(101)
				{
					HX_STACK_LINE(101)
					::flixel::system::ui::FlxSoundTray _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(101)
					_g->set_y((_g->get_y() - (((Float(MS) / Float((int)1000)) * ::flixel::FlxG_obj::height) * (int)2)));
				}
				HX_STACK_LINE(103)
				if (((this->get_y() <= -(this->get_height())))){
					HX_STACK_LINE(105)
					this->set_visible(false);
					HX_STACK_LINE(106)
					this->active = false;
					HX_STACK_LINE(109)
					::flixel::FlxG_obj::save->data->__FieldRef(HX_CSTRING("mute")) = ::flixel::FlxG_obj::sound->muted;
					HX_STACK_LINE(110)
					::flixel::FlxG_obj::save->data->__FieldRef(HX_CSTRING("volume")) = ::flixel::FlxG_obj::sound->volume;
					HX_STACK_LINE(111)
					::flixel::FlxG_obj::save->flush(null(),null());
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(FlxSoundTray_obj,update,(void))


FlxSoundTray_obj::FlxSoundTray_obj()
{
}

void FlxSoundTray_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxSoundTray);
	HX_MARK_MEMBER_NAME(_bars,"_bars");
	HX_MARK_MEMBER_NAME(_timer,"_timer");
	HX_MARK_MEMBER_NAME(active,"active");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxSoundTray_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_bars,"_bars");
	HX_VISIT_MEMBER_NAME(_timer,"_timer");
	HX_VISIT_MEMBER_NAME(active,"active");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxSoundTray_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"show") ) { return show_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"_bars") ) { return _bars; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"_timer") ) { return _timer; }
		if (HX_FIELD_EQ(inName,"active") ) { return active; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxSoundTray_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 5:
		if (HX_FIELD_EQ(inName,"_bars") ) { _bars=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_timer") ) { _timer=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"active") ) { active=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxSoundTray_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_bars"));
	outFields->push(HX_CSTRING("_timer"));
	outFields->push(HX_CSTRING("active"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("show"),
	HX_CSTRING("update"),
	HX_CSTRING("_bars"),
	HX_CSTRING("_timer"),
	HX_CSTRING("active"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxSoundTray_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxSoundTray_obj::__mClass,"__mClass");
};

Class FlxSoundTray_obj::__mClass;

void FlxSoundTray_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.system.ui.FlxSoundTray"), hx::TCanCast< FlxSoundTray_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxSoundTray_obj::__boot()
{
}

} // end namespace flixel
} // end namespace system
} // end namespace ui
