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
#ifndef INCLUDED_flixel_system_debug_Console
#include <flixel/system/debug/Console.h>
#endif
#ifndef INCLUDED_flixel_system_debug_FlxDebugger
#include <flixel/system/debug/FlxDebugger.h>
#endif
#ifndef INCLUDED_flixel_system_debug_Window
#include <flixel/system/debug/Window.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_ConsoleFrontEnd
#include <flixel/system/frontEnds/ConsoleFrontEnd.h>
#endif
namespace flixel{
namespace system{
namespace frontEnds{

Void ConsoleFrontEnd_obj::__construct()
{
HX_STACK_PUSH("ConsoleFrontEnd::new","flixel/system/frontEnds/ConsoleFrontEnd.hx",5);
{
	HX_STACK_LINE(11)
	this->autoPause = true;
}
;
	return null();
}

ConsoleFrontEnd_obj::~ConsoleFrontEnd_obj() { }

Dynamic ConsoleFrontEnd_obj::__CreateEmpty() { return  new ConsoleFrontEnd_obj; }
hx::ObjectPtr< ConsoleFrontEnd_obj > ConsoleFrontEnd_obj::__new()
{  hx::ObjectPtr< ConsoleFrontEnd_obj > result = new ConsoleFrontEnd_obj();
	result->__construct();
	return result;}

Dynamic ConsoleFrontEnd_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< ConsoleFrontEnd_obj > result = new ConsoleFrontEnd_obj();
	result->__construct();
	return result;}

Void ConsoleFrontEnd_obj::addCommand( ::String Command,Dynamic AnyObject,Dynamic Function,::String __o_Alt){
::String Alt = __o_Alt.Default(HX_CSTRING(""));
	HX_STACK_PUSH("ConsoleFrontEnd::addCommand","flixel/system/frontEnds/ConsoleFrontEnd.hx",53);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Command,"Command");
	HX_STACK_ARG(AnyObject,"AnyObject");
	HX_STACK_ARG(Function,"Function");
	HX_STACK_ARG(Alt,"Alt");
{
		HX_STACK_LINE(53)
		::flixel::FlxG_obj::game->debugger->console->addCommand(Command,AnyObject,Function,Alt);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC4(ConsoleFrontEnd_obj,addCommand,(void))

Void ConsoleFrontEnd_obj::registerObject( ::String ObjectAlias,Dynamic AnyObject){
{
		HX_STACK_PUSH("ConsoleFrontEnd::registerObject","flixel/system/frontEnds/ConsoleFrontEnd.hx",38);
		HX_STACK_THIS(this);
		HX_STACK_ARG(ObjectAlias,"ObjectAlias");
		HX_STACK_ARG(AnyObject,"AnyObject");
		HX_STACK_LINE(38)
		::flixel::FlxG_obj::game->debugger->console->registerObject(ObjectAlias,AnyObject);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(ConsoleFrontEnd_obj,registerObject,(void))

Void ConsoleFrontEnd_obj::registerFunction( ::String FunctionAlias,Dynamic Function){
{
		HX_STACK_PUSH("ConsoleFrontEnd::registerFunction","flixel/system/frontEnds/ConsoleFrontEnd.hx",25);
		HX_STACK_THIS(this);
		HX_STACK_ARG(FunctionAlias,"FunctionAlias");
		HX_STACK_ARG(Function,"Function");
		HX_STACK_LINE(25)
		::flixel::FlxG_obj::game->debugger->console->registerFunction(FunctionAlias,Function);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(ConsoleFrontEnd_obj,registerFunction,(void))


ConsoleFrontEnd_obj::ConsoleFrontEnd_obj()
{
}

void ConsoleFrontEnd_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(ConsoleFrontEnd);
	HX_MARK_MEMBER_NAME(autoPause,"autoPause");
	HX_MARK_END_CLASS();
}

void ConsoleFrontEnd_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(autoPause,"autoPause");
}

Dynamic ConsoleFrontEnd_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 9:
		if (HX_FIELD_EQ(inName,"autoPause") ) { return autoPause; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"addCommand") ) { return addCommand_dyn(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"registerObject") ) { return registerObject_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"registerFunction") ) { return registerFunction_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic ConsoleFrontEnd_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 9:
		if (HX_FIELD_EQ(inName,"autoPause") ) { autoPause=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void ConsoleFrontEnd_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("autoPause"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("addCommand"),
	HX_CSTRING("registerObject"),
	HX_CSTRING("registerFunction"),
	HX_CSTRING("autoPause"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(ConsoleFrontEnd_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(ConsoleFrontEnd_obj::__mClass,"__mClass");
};

Class ConsoleFrontEnd_obj::__mClass;

void ConsoleFrontEnd_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.system.frontEnds.ConsoleFrontEnd"), hx::TCanCast< ConsoleFrontEnd_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void ConsoleFrontEnd_obj::__boot()
{
}

} // end namespace flixel
} // end namespace system
} // end namespace frontEnds
