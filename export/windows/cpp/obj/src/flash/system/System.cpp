#include <hxcpp.h>

#ifndef INCLUDED_cpp_vm_Gc
#include <cpp/vm/Gc.h>
#endif
#ifndef INCLUDED_flash_Lib
#include <flash/Lib.h>
#endif
#ifndef INCLUDED_flash_system_System
#include <flash/system/System.h>
#endif
namespace flash{
namespace system{

Void System_obj::__construct()
{
	return null();
}

System_obj::~System_obj() { }

Dynamic System_obj::__CreateEmpty() { return  new System_obj; }
hx::ObjectPtr< System_obj > System_obj::__new()
{  hx::ObjectPtr< System_obj > result = new System_obj();
	result->__construct();
	return result;}

Dynamic System_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< System_obj > result = new System_obj();
	result->__construct();
	return result;}

::String System_obj::deviceID;

int System_obj::totalMemory;

Void System_obj::exit( hx::Null< int >  __o_code){
int code = __o_code.Default(0);
	HX_STACK_PUSH("System::exit","flash/system/System.hx",14);
	HX_STACK_ARG(code,"code");
{
		HX_STACK_LINE(14)
		::flash::Lib_obj::close();
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(System_obj,exit,(void))

Void System_obj::gc( ){
{
		HX_STACK_PUSH("System::gc","flash/system/System.hx",21);
		HX_STACK_LINE(21)
		return ::cpp::vm::Gc_obj::run(true);
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(System_obj,gc,(void))

::String System_obj::get_deviceID( ){
	HX_STACK_PUSH("System::get_deviceID","flash/system/System.hx",43);
	HX_STACK_LINE(43)
	return ::flash::system::System_obj::nme_get_unique_device_identifier();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(System_obj,get_deviceID,return )

int System_obj::get_totalMemory( ){
	HX_STACK_PUSH("System::get_totalMemory","flash/system/System.hx",46);
	HX_STACK_LINE(46)
	return ::__hxcpp_gc_used_bytes();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(System_obj,get_totalMemory,return )

Dynamic System_obj::nme_get_unique_device_identifier;


System_obj::System_obj()
{
}

void System_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(System);
	HX_MARK_END_CLASS();
}

void System_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic System_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"gc") ) { return gc_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"exit") ) { return exit_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"deviceID") ) { return inCallProp ? get_deviceID() : deviceID; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"totalMemory") ) { return inCallProp ? get_totalMemory() : totalMemory; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"get_deviceID") ) { return get_deviceID_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"get_totalMemory") ) { return get_totalMemory_dyn(); }
		break;
	case 32:
		if (HX_FIELD_EQ(inName,"nme_get_unique_device_identifier") ) { return nme_get_unique_device_identifier; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic System_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 8:
		if (HX_FIELD_EQ(inName,"deviceID") ) { deviceID=inValue.Cast< ::String >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"totalMemory") ) { totalMemory=inValue.Cast< int >(); return inValue; }
		break;
	case 32:
		if (HX_FIELD_EQ(inName,"nme_get_unique_device_identifier") ) { nme_get_unique_device_identifier=inValue.Cast< Dynamic >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void System_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("deviceID"),
	HX_CSTRING("totalMemory"),
	HX_CSTRING("exit"),
	HX_CSTRING("gc"),
	HX_CSTRING("get_deviceID"),
	HX_CSTRING("get_totalMemory"),
	HX_CSTRING("nme_get_unique_device_identifier"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(System_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(System_obj::deviceID,"deviceID");
	HX_MARK_MEMBER_NAME(System_obj::totalMemory,"totalMemory");
	HX_MARK_MEMBER_NAME(System_obj::nme_get_unique_device_identifier,"nme_get_unique_device_identifier");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(System_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(System_obj::deviceID,"deviceID");
	HX_VISIT_MEMBER_NAME(System_obj::totalMemory,"totalMemory");
	HX_VISIT_MEMBER_NAME(System_obj::nme_get_unique_device_identifier,"nme_get_unique_device_identifier");
};

Class System_obj::__mClass;

void System_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flash.system.System"), hx::TCanCast< System_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void System_obj::__boot()
{
	nme_get_unique_device_identifier= ::flash::Lib_obj::load(HX_CSTRING("nme"),HX_CSTRING("nme_get_unique_device_identifier"),(int)0);
}

} // end namespace flash
} // end namespace system