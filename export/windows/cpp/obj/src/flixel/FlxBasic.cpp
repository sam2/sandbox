#include <hxcpp.h>

#ifndef INCLUDED_StringTools
#include <StringTools.h>
#endif
#ifndef INCLUDED_Type
#include <Type.h>
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
#ifndef INCLUDED_flixel_system_FlxCollisionType
#include <flixel/system/FlxCollisionType.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_CameraFrontEnd
#include <flixel/system/frontEnds/CameraFrontEnd.h>
#endif
namespace flixel{

Void FlxBasic_obj::__construct()
{
HX_STACK_PUSH("FlxBasic::new","flixel/FlxBasic.hx",11);
{
	HX_STACK_LINE(48)
	this->ignoreDrawDebug = false;
	HX_STACK_LINE(39)
	this->exists = true;
	HX_STACK_LINE(35)
	this->alive = true;
	HX_STACK_LINE(30)
	this->visible = true;
	HX_STACK_LINE(26)
	this->active = true;
	HX_STACK_LINE(17)
	this->ID = (int)-1;
	HX_STACK_LINE(57)
	this->collisionType = ::flixel::system::FlxCollisionType_obj::_NULL;
}
;
	return null();
}

FlxBasic_obj::~FlxBasic_obj() { }

Dynamic FlxBasic_obj::__CreateEmpty() { return  new FlxBasic_obj; }
hx::ObjectPtr< FlxBasic_obj > FlxBasic_obj::__new()
{  hx::ObjectPtr< FlxBasic_obj > result = new FlxBasic_obj();
	result->__construct();
	return result;}

Dynamic FlxBasic_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxBasic_obj > result = new FlxBasic_obj();
	result->__construct();
	return result;}

hx::Object *FlxBasic_obj::__ToInterface(const hx::type_info &inType) {
	if (inType==typeid( ::flixel::IDestroyable_obj)) return operator ::flixel::IDestroyable_obj *();
	return super::__ToInterface(inType);
}

::String FlxBasic_obj::toString( ){
	HX_STACK_PUSH("FlxBasic::toString","flixel/FlxBasic.hx",175);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static ::String Block( ::flixel::FlxBasic_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/FlxBasic.hx",176);
			{
				HX_STACK_LINE(176)
				::String s = ::Type_obj::getClassName(::Type_obj::getClass(__this));		HX_STACK_VAR(s,"s");
				HX_STACK_LINE(176)
				if (((s != null()))){
					HX_STACK_LINE(176)
					s = ::StringTools_obj::replace(s,HX_CSTRING("::"),HX_CSTRING("."));
					HX_STACK_LINE(176)
					s = s.substr((s.lastIndexOf(HX_CSTRING("."),null()) + (int)1),null());
				}
				HX_STACK_LINE(176)
				return s;
			}
			return null();
		}
	};
	HX_STACK_LINE(175)
	return _Function_1_1::Block(this);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,toString,return )

bool FlxBasic_obj::set_exists( bool Value){
	HX_STACK_PUSH("FlxBasic::set_exists","flixel/FlxBasic.hx",167);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(167)
	return this->exists = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxBasic_obj,set_exists,return )

bool FlxBasic_obj::set_alive( bool Value){
	HX_STACK_PUSH("FlxBasic::set_alive","flixel/FlxBasic.hx",163);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(163)
	return this->alive = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxBasic_obj,set_alive,return )

bool FlxBasic_obj::set_active( bool Value){
	HX_STACK_PUSH("FlxBasic::set_active","flixel/FlxBasic.hx",159);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(159)
	return this->active = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxBasic_obj,set_active,return )

bool FlxBasic_obj::set_visible( bool Value){
	HX_STACK_PUSH("FlxBasic::set_visible","flixel/FlxBasic.hx",155);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Value,"Value");
	HX_STACK_LINE(155)
	return this->visible = Value;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxBasic_obj,set_visible,return )

Void FlxBasic_obj::drawDebugOnCamera( ::flixel::FlxCamera Camera){
{
		HX_STACK_PUSH("FlxBasic::drawDebugOnCamera","flixel/FlxBasic.hx",148);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Camera,"Camera");
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(FlxBasic_obj,drawDebugOnCamera,(void))

Void FlxBasic_obj::drawDebug( ){
{
		HX_STACK_PUSH("FlxBasic::drawDebug","flixel/FlxBasic.hx",127);
		HX_STACK_THIS(this);
		HX_STACK_LINE(127)
		if ((!(this->ignoreDrawDebug))){
			HX_STACK_LINE(130)
			int i = (int)0;		HX_STACK_VAR(i,"i");
			HX_STACK_LINE(131)
			if (((this->cameras == null()))){
				HX_STACK_LINE(132)
				this->cameras = ::flixel::FlxG_obj::cameras->list;
			}
			HX_STACK_LINE(135)
			int l = this->cameras->length;		HX_STACK_VAR(l,"l");
			HX_STACK_LINE(136)
			while(((i < l))){
				HX_STACK_LINE(137)
				this->drawDebugOnCamera(this->cameras->__get((i)++).StaticCast< ::flixel::FlxCamera >());
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,drawDebug,(void))

Void FlxBasic_obj::draw( ){
{
		HX_STACK_PUSH("FlxBasic::draw","flixel/FlxBasic.hx",107);
		HX_STACK_THIS(this);
		HX_STACK_LINE(108)
		if (((this->cameras == null()))){
			HX_STACK_LINE(109)
			this->cameras = ::flixel::FlxG_obj::cameras->list;
		}
		HX_STACK_LINE(112)
		::flixel::FlxCamera camera;		HX_STACK_VAR(camera,"camera");
		HX_STACK_LINE(113)
		int i = (int)0;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(114)
		int l = this->cameras->length;		HX_STACK_VAR(l,"l");
		HX_STACK_LINE(115)
		while(((i < l))){
			HX_STACK_LINE(117)
			camera = this->cameras->__get((i)++).StaticCast< ::flixel::FlxCamera >();
			HX_STACK_LINE(120)
			(::flixel::FlxBasic_obj::_VISIBLECOUNT)++;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,draw,(void))

Void FlxBasic_obj::update( ){
{
		HX_STACK_PUSH("FlxBasic::update","flixel/FlxBasic.hx",96);
		HX_STACK_THIS(this);
		HX_STACK_LINE(96)
		(::flixel::FlxBasic_obj::_ACTIVECOUNT)++;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,update,(void))

Void FlxBasic_obj::revive( ){
{
		HX_STACK_PUSH("FlxBasic::revive","flixel/FlxBasic.hx",86);
		HX_STACK_THIS(this);
		HX_STACK_LINE(87)
		this->set_alive(true);
		HX_STACK_LINE(88)
		this->set_exists(true);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,revive,(void))

Void FlxBasic_obj::kill( ){
{
		HX_STACK_PUSH("FlxBasic::kill","flixel/FlxBasic.hx",76);
		HX_STACK_THIS(this);
		HX_STACK_LINE(77)
		this->set_alive(false);
		HX_STACK_LINE(78)
		this->set_exists(false);
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,kill,(void))

Void FlxBasic_obj::destroy( ){
{
		HX_STACK_PUSH("FlxBasic::destroy","flixel/FlxBasic.hx",66);
		HX_STACK_THIS(this);
		HX_STACK_LINE(67)
		this->set_exists(false);
		HX_STACK_LINE(68)
		this->collisionType = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(FlxBasic_obj,destroy,(void))

int FlxBasic_obj::_ACTIVECOUNT;

int FlxBasic_obj::_VISIBLECOUNT;


FlxBasic_obj::FlxBasic_obj()
{
}

void FlxBasic_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxBasic);
	HX_MARK_MEMBER_NAME(ignoreDrawDebug,"ignoreDrawDebug");
	HX_MARK_MEMBER_NAME(collisionType,"collisionType");
	HX_MARK_MEMBER_NAME(exists,"exists");
	HX_MARK_MEMBER_NAME(alive,"alive");
	HX_MARK_MEMBER_NAME(visible,"visible");
	HX_MARK_MEMBER_NAME(active,"active");
	HX_MARK_MEMBER_NAME(cameras,"cameras");
	HX_MARK_MEMBER_NAME(ID,"ID");
	HX_MARK_END_CLASS();
}

void FlxBasic_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(ignoreDrawDebug,"ignoreDrawDebug");
	HX_VISIT_MEMBER_NAME(collisionType,"collisionType");
	HX_VISIT_MEMBER_NAME(exists,"exists");
	HX_VISIT_MEMBER_NAME(alive,"alive");
	HX_VISIT_MEMBER_NAME(visible,"visible");
	HX_VISIT_MEMBER_NAME(active,"active");
	HX_VISIT_MEMBER_NAME(cameras,"cameras");
	HX_VISIT_MEMBER_NAME(ID,"ID");
}

Dynamic FlxBasic_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"ID") ) { return ID; }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"draw") ) { return draw_dyn(); }
		if (HX_FIELD_EQ(inName,"kill") ) { return kill_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"alive") ) { return alive; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"revive") ) { return revive_dyn(); }
		if (HX_FIELD_EQ(inName,"exists") ) { return exists; }
		if (HX_FIELD_EQ(inName,"active") ) { return active; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"visible") ) { return visible; }
		if (HX_FIELD_EQ(inName,"cameras") ) { return cameras; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"toString") ) { return toString_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"set_alive") ) { return set_alive_dyn(); }
		if (HX_FIELD_EQ(inName,"drawDebug") ) { return drawDebug_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"set_exists") ) { return set_exists_dyn(); }
		if (HX_FIELD_EQ(inName,"set_active") ) { return set_active_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"set_visible") ) { return set_visible_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_ACTIVECOUNT") ) { return _ACTIVECOUNT; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_VISIBLECOUNT") ) { return _VISIBLECOUNT; }
		if (HX_FIELD_EQ(inName,"collisionType") ) { return collisionType; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"ignoreDrawDebug") ) { return ignoreDrawDebug; }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"drawDebugOnCamera") ) { return drawDebugOnCamera_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxBasic_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"ID") ) { ID=inValue.Cast< int >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"alive") ) { if (inCallProp) return set_alive(inValue);alive=inValue.Cast< bool >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"exists") ) { if (inCallProp) return set_exists(inValue);exists=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"active") ) { if (inCallProp) return set_active(inValue);active=inValue.Cast< bool >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"visible") ) { if (inCallProp) return set_visible(inValue);visible=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"cameras") ) { cameras=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_ACTIVECOUNT") ) { _ACTIVECOUNT=inValue.Cast< int >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"_VISIBLECOUNT") ) { _VISIBLECOUNT=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"collisionType") ) { collisionType=inValue.Cast< ::flixel::system::FlxCollisionType >(); return inValue; }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"ignoreDrawDebug") ) { ignoreDrawDebug=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxBasic_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("ignoreDrawDebug"));
	outFields->push(HX_CSTRING("collisionType"));
	outFields->push(HX_CSTRING("exists"));
	outFields->push(HX_CSTRING("alive"));
	outFields->push(HX_CSTRING("visible"));
	outFields->push(HX_CSTRING("active"));
	outFields->push(HX_CSTRING("cameras"));
	outFields->push(HX_CSTRING("ID"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("_ACTIVECOUNT"),
	HX_CSTRING("_VISIBLECOUNT"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("toString"),
	HX_CSTRING("set_exists"),
	HX_CSTRING("set_alive"),
	HX_CSTRING("set_active"),
	HX_CSTRING("set_visible"),
	HX_CSTRING("drawDebugOnCamera"),
	HX_CSTRING("drawDebug"),
	HX_CSTRING("draw"),
	HX_CSTRING("update"),
	HX_CSTRING("revive"),
	HX_CSTRING("kill"),
	HX_CSTRING("destroy"),
	HX_CSTRING("ignoreDrawDebug"),
	HX_CSTRING("collisionType"),
	HX_CSTRING("exists"),
	HX_CSTRING("alive"),
	HX_CSTRING("visible"),
	HX_CSTRING("active"),
	HX_CSTRING("cameras"),
	HX_CSTRING("ID"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxBasic_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FlxBasic_obj::_ACTIVECOUNT,"_ACTIVECOUNT");
	HX_MARK_MEMBER_NAME(FlxBasic_obj::_VISIBLECOUNT,"_VISIBLECOUNT");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxBasic_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FlxBasic_obj::_ACTIVECOUNT,"_ACTIVECOUNT");
	HX_VISIT_MEMBER_NAME(FlxBasic_obj::_VISIBLECOUNT,"_VISIBLECOUNT");
};

Class FlxBasic_obj::__mClass;

void FlxBasic_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.FlxBasic"), hx::TCanCast< FlxBasic_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxBasic_obj::__boot()
{
	_ACTIVECOUNT= (int)0;
	_VISIBLECOUNT= (int)0;
}

} // end namespace flixel
