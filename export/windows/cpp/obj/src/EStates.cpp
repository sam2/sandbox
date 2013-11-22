#include <hxcpp.h>

#ifndef INCLUDED_EStates
#include <EStates.h>
#endif

::EStates EStates_obj::attacking;

::EStates EStates_obj::chasing;

::EStates EStates_obj::idle;

::EStates EStates_obj::returning;

::EStates EStates_obj::searching;

HX_DEFINE_CREATE_ENUM(EStates_obj)

int EStates_obj::__FindIndex(::String inName)
{
	if (inName==HX_CSTRING("attacking")) return 4;
	if (inName==HX_CSTRING("chasing")) return 1;
	if (inName==HX_CSTRING("idle")) return 0;
	if (inName==HX_CSTRING("returning")) return 3;
	if (inName==HX_CSTRING("searching")) return 2;
	return super::__FindIndex(inName);
}

int EStates_obj::__FindArgCount(::String inName)
{
	if (inName==HX_CSTRING("attacking")) return 0;
	if (inName==HX_CSTRING("chasing")) return 0;
	if (inName==HX_CSTRING("idle")) return 0;
	if (inName==HX_CSTRING("returning")) return 0;
	if (inName==HX_CSTRING("searching")) return 0;
	return super::__FindArgCount(inName);
}

Dynamic EStates_obj::__Field(const ::String &inName,bool inCallProp)
{
	if (inName==HX_CSTRING("attacking")) return attacking;
	if (inName==HX_CSTRING("chasing")) return chasing;
	if (inName==HX_CSTRING("idle")) return idle;
	if (inName==HX_CSTRING("returning")) return returning;
	if (inName==HX_CSTRING("searching")) return searching;
	return super::__Field(inName,inCallProp);
}

static ::String sStaticFields[] = {
	HX_CSTRING("idle"),
	HX_CSTRING("chasing"),
	HX_CSTRING("searching"),
	HX_CSTRING("returning"),
	HX_CSTRING("attacking"),
	::String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(EStates_obj::attacking,"attacking");
	HX_MARK_MEMBER_NAME(EStates_obj::chasing,"chasing");
	HX_MARK_MEMBER_NAME(EStates_obj::idle,"idle");
	HX_MARK_MEMBER_NAME(EStates_obj::returning,"returning");
	HX_MARK_MEMBER_NAME(EStates_obj::searching,"searching");
};

static void sVisitStatic(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(EStates_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(EStates_obj::attacking,"attacking");
	HX_VISIT_MEMBER_NAME(EStates_obj::chasing,"chasing");
	HX_VISIT_MEMBER_NAME(EStates_obj::idle,"idle");
	HX_VISIT_MEMBER_NAME(EStates_obj::returning,"returning");
	HX_VISIT_MEMBER_NAME(EStates_obj::searching,"searching");
};

static ::String sMemberFields[] = { ::String(null()) };
Class EStates_obj::__mClass;

Dynamic __Create_EStates_obj() { return new EStates_obj; }

void EStates_obj::__register()
{

hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("EStates"), hx::TCanCast< EStates_obj >,sStaticFields,sMemberFields,
	&__Create_EStates_obj, &__Create,
	&super::__SGetClass(), &CreateEStates_obj, sMarkStatics, sVisitStatic);
}

void EStates_obj::__boot()
{
hx::Static(attacking) = hx::CreateEnum< EStates_obj >(HX_CSTRING("attacking"),4);
hx::Static(chasing) = hx::CreateEnum< EStates_obj >(HX_CSTRING("chasing"),1);
hx::Static(idle) = hx::CreateEnum< EStates_obj >(HX_CSTRING("idle"),0);
hx::Static(returning) = hx::CreateEnum< EStates_obj >(HX_CSTRING("returning"),3);
hx::Static(searching) = hx::CreateEnum< EStates_obj >(HX_CSTRING("searching"),2);
}


