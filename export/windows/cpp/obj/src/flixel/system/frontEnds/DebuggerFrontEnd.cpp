#include <hxcpp.h>

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
#ifndef INCLUDED_flixel_FlxG
#include <flixel/FlxG.h>
#endif
#ifndef INCLUDED_flixel_FlxGame
#include <flixel/FlxGame.h>
#endif
#ifndef INCLUDED_flixel_system_debug_ButtonAlignment
#include <flixel/system/debug/ButtonAlignment.h>
#endif
#ifndef INCLUDED_flixel_system_debug_DebuggerLayout
#include <flixel/system/debug/DebuggerLayout.h>
#endif
#ifndef INCLUDED_flixel_system_debug_FlxDebugger
#include <flixel/system/debug/FlxDebugger.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_DebuggerFrontEnd
#include <flixel/system/frontEnds/DebuggerFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_ui_FlxSystemButton
#include <flixel/system/ui/FlxSystemButton.h>
#endif
namespace flixel{
namespace system{
namespace frontEnds{

Void DebuggerFrontEnd_obj::__construct()
{
HX_STACK_PUSH("DebuggerFrontEnd::new","flixel/system/frontEnds/DebuggerFrontEnd.hx",8);
{
	HX_STACK_LINE(67)
	this->visible = false;
	HX_STACK_LINE(20)
	this->pointPrecision = (int)3;
	HX_STACK_LINE(15)
	this->visualDebug = false;
	HX_STACK_LINE(36)
	this->toggleKeys = Array_obj< ::String >::__new().Add(HX_CSTRING("GRAVEACCENT")).Add(HX_CSTRING("BACKSLASH"));
}
;
	return null();
}

DebuggerFrontEnd_obj::~DebuggerFrontEnd_obj() { }

Dynamic DebuggerFrontEnd_obj::__CreateEmpty() { return  new DebuggerFrontEnd_obj; }
hx::ObjectPtr< DebuggerFrontEnd_obj > DebuggerFrontEnd_obj::__new()
{  hx::ObjectPtr< DebuggerFrontEnd_obj > result = new DebuggerFrontEnd_obj();
	result->__construct();
	return result;}

Dynamic DebuggerFrontEnd_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< DebuggerFrontEnd_obj > result = new DebuggerFrontEnd_obj();
	result->__construct();
	return result;}

::flixel::system::ui::FlxSystemButton DebuggerFrontEnd_obj::addButton( ::flixel::system::debug::ButtonAlignment Alignment,::String IconPath,Dynamic DownHandler,hx::Null< bool >  __o_ToggleMode,hx::Null< bool >  __o_UpdateLayout){
bool ToggleMode = __o_ToggleMode.Default(false);
bool UpdateLayout = __o_UpdateLayout.Default(true);
	HX_STACK_PUSH("DebuggerFrontEnd::addButton","flixel/system/frontEnds/DebuggerFrontEnd.hx",87);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Alignment,"Alignment");
	HX_STACK_ARG(IconPath,"IconPath");
	HX_STACK_ARG(DownHandler,"DownHandler");
	HX_STACK_ARG(ToggleMode,"ToggleMode");
	HX_STACK_ARG(UpdateLayout,"UpdateLayout");
{
		HX_STACK_LINE(87)
		return ::flixel::FlxG_obj::game->debugger->addButton(Alignment,IconPath,DownHandler,ToggleMode,UpdateLayout);
	}
}


HX_DEFINE_DYNAMIC_FUNC5(DebuggerFrontEnd_obj,addButton,return )

bool DebuggerFrontEnd_obj::set_visible( bool Visible){
	HX_STACK_PUSH("DebuggerFrontEnd::set_visible","flixel/system/frontEnds/DebuggerFrontEnd.hx",70);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Visible,"Visible");
	HX_STACK_LINE(72)
	::flixel::FlxG_obj::game->debugger->set_visible(Visible);
	HX_STACK_LINE(75)
	return this->visible = Visible;
}


HX_DEFINE_DYNAMIC_FUNC1(DebuggerFrontEnd_obj,set_visible,return )

Void DebuggerFrontEnd_obj::resetLayout( ){
{
		HX_STACK_PUSH("DebuggerFrontEnd::resetLayout","flixel/system/frontEnds/DebuggerFrontEnd.hx",57);
		HX_STACK_THIS(this);
		HX_STACK_LINE(57)
		::flixel::FlxG_obj::game->debugger->resetLayout();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(DebuggerFrontEnd_obj,resetLayout,(void))

Void DebuggerFrontEnd_obj::setLayout( ::flixel::system::debug::DebuggerLayout Layout){
{
		HX_STACK_PUSH("DebuggerFrontEnd::setLayout","flixel/system/frontEnds/DebuggerFrontEnd.hx",47);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Layout,"Layout");
		HX_STACK_LINE(49)
		::flixel::system::debug::FlxDebugger _this = ::flixel::FlxG_obj::game->debugger;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(49)
		_this->_layout = Layout;
		HX_STACK_LINE(49)
		_this->resetLayout();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(DebuggerFrontEnd_obj,setLayout,(void))


DebuggerFrontEnd_obj::DebuggerFrontEnd_obj()
{
}

void DebuggerFrontEnd_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(DebuggerFrontEnd);
	HX_MARK_MEMBER_NAME(visible,"visible");
	HX_MARK_MEMBER_NAME(toggleKeys,"toggleKeys");
	HX_MARK_MEMBER_NAME(pointPrecision,"pointPrecision");
	HX_MARK_MEMBER_NAME(visualDebug,"visualDebug");
	HX_MARK_END_CLASS();
}

void DebuggerFrontEnd_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(visible,"visible");
	HX_VISIT_MEMBER_NAME(toggleKeys,"toggleKeys");
	HX_VISIT_MEMBER_NAME(pointPrecision,"pointPrecision");
	HX_VISIT_MEMBER_NAME(visualDebug,"visualDebug");
}

Dynamic DebuggerFrontEnd_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"visible") ) { return visible; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"addButton") ) { return addButton_dyn(); }
		if (HX_FIELD_EQ(inName,"setLayout") ) { return setLayout_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"toggleKeys") ) { return toggleKeys; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"set_visible") ) { return set_visible_dyn(); }
		if (HX_FIELD_EQ(inName,"resetLayout") ) { return resetLayout_dyn(); }
		if (HX_FIELD_EQ(inName,"visualDebug") ) { return visualDebug; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"pointPrecision") ) { return pointPrecision; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic DebuggerFrontEnd_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 7:
		if (HX_FIELD_EQ(inName,"visible") ) { if (inCallProp) return set_visible(inValue);visible=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"toggleKeys") ) { toggleKeys=inValue.Cast< Array< ::String > >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"visualDebug") ) { visualDebug=inValue.Cast< bool >(); return inValue; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"pointPrecision") ) { pointPrecision=inValue.Cast< int >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void DebuggerFrontEnd_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("visible"));
	outFields->push(HX_CSTRING("toggleKeys"));
	outFields->push(HX_CSTRING("pointPrecision"));
	outFields->push(HX_CSTRING("visualDebug"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("addButton"),
	HX_CSTRING("set_visible"),
	HX_CSTRING("visible"),
	HX_CSTRING("resetLayout"),
	HX_CSTRING("setLayout"),
	HX_CSTRING("toggleKeys"),
	HX_CSTRING("pointPrecision"),
	HX_CSTRING("visualDebug"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(DebuggerFrontEnd_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(DebuggerFrontEnd_obj::__mClass,"__mClass");
};

Class DebuggerFrontEnd_obj::__mClass;

void DebuggerFrontEnd_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.system.frontEnds.DebuggerFrontEnd"), hx::TCanCast< DebuggerFrontEnd_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void DebuggerFrontEnd_obj::__boot()
{
}

} // end namespace flixel
} // end namespace system
} // end namespace frontEnds
