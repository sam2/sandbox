#include <hxcpp.h>

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
#ifndef INCLUDED_flixel_plugin_FlxPlugin
#include <flixel/plugin/FlxPlugin.h>
#endif
#ifndef INCLUDED_flixel_plugin_PathManager
#include <flixel/plugin/PathManager.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_CameraFrontEnd
#include <flixel/system/frontEnds/CameraFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_system_frontEnds_DebuggerFrontEnd
#include <flixel/system/frontEnds/DebuggerFrontEnd.h>
#endif
#ifndef INCLUDED_flixel_util_FlxArrayUtil
#include <flixel/util/FlxArrayUtil.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPath
#include <flixel/util/FlxPath.h>
#endif
namespace flixel{
namespace plugin{

Void PathManager_obj::__construct()
{
HX_STACK_PUSH("PathManager::new","flixel/plugin/PathManager.hx",16);
{
	HX_STACK_LINE(17)
	super::__construct();
	HX_STACK_LINE(19)
	this->_paths = Array_obj< ::Dynamic >::__new();
}
;
	return null();
}

PathManager_obj::~PathManager_obj() { }

Dynamic PathManager_obj::__CreateEmpty() { return  new PathManager_obj; }
hx::ObjectPtr< PathManager_obj > PathManager_obj::__new()
{  hx::ObjectPtr< PathManager_obj > result = new PathManager_obj();
	result->__construct();
	return result;}

Dynamic PathManager_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< PathManager_obj > result = new PathManager_obj();
	result->__construct();
	return result;}

Void PathManager_obj::onStateSwitch( ){
{
		HX_STACK_PUSH("PathManager::onStateSwitch","flixel/plugin/PathManager.hx",153);
		HX_STACK_THIS(this);
		HX_STACK_LINE(153)
		this->clear();
	}
return null();
}


Void PathManager_obj::clear( ){
{
		HX_STACK_PUSH("PathManager::clear","flixel/plugin/PathManager.hx",144);
		HX_STACK_THIS(this);
		HX_STACK_LINE(144)
		while(((this->_paths->length > (int)0))){
			HX_STACK_LINE(147)
			::flixel::util::FlxPath path = this->_paths->pop().StaticCast< ::flixel::util::FlxPath >();		HX_STACK_VAR(path,"path");
			HX_STACK_LINE(148)
			::flixel::util::FlxPath_obj::put(path);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(PathManager_obj,clear,(void))

Void PathManager_obj::remove( ::flixel::util::FlxPath Path,hx::Null< bool >  __o_ReturnInPool){
bool ReturnInPool = __o_ReturnInPool.Default(true);
	HX_STACK_PUSH("PathManager::remove","flixel/plugin/PathManager.hx",125);
	HX_STACK_THIS(this);
	HX_STACK_ARG(Path,"Path");
	HX_STACK_ARG(ReturnInPool,"ReturnInPool");
{
		HX_STACK_LINE(126)
		int index = ::flixel::util::FlxArrayUtil_obj::indexOf_flixel_util_FlxPath(this->_paths,Path,null());		HX_STACK_VAR(index,"index");
		HX_STACK_LINE(128)
		if (((index >= (int)0))){
			HX_STACK_LINE(130)
			this->_paths[index] = this->_paths->__get((this->_paths->length - (int)1)).StaticCast< ::flixel::util::FlxPath >();
			HX_STACK_LINE(131)
			this->_paths->pop().StaticCast< ::flixel::util::FlxPath >();
		}
		HX_STACK_LINE(134)
		if ((ReturnInPool)){
			HX_STACK_LINE(135)
			::flixel::util::FlxPath_obj::put(Path);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC2(PathManager_obj,remove,(void))

Void PathManager_obj::add( ::flixel::util::FlxPath Path){
{
		HX_STACK_PUSH("PathManager::add","flixel/plugin/PathManager.hx",111);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Path,"Path");
		HX_STACK_LINE(111)
		if (((::flixel::util::FlxArrayUtil_obj::indexOf_flixel_util_FlxPath(this->_paths,Path,null()) < (int)0))){
			HX_STACK_LINE(113)
			this->_paths->push(Path);
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(PathManager_obj,add,(void))

Void PathManager_obj::drawDebugOnCamera( ::flixel::FlxCamera Camera){
{
		HX_STACK_PUSH("PathManager::drawDebugOnCamera","flixel/plugin/PathManager.hx",83);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Camera,"Camera");
		HX_STACK_LINE(84)
		if (((Camera == null()))){
			HX_STACK_LINE(85)
			Camera = ::flixel::FlxG_obj::camera;
		}
		HX_STACK_LINE(89)
		int i = (this->_paths->length - (int)1);		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(90)
		::flixel::util::FlxPath path;		HX_STACK_VAR(path,"path");
		HX_STACK_LINE(92)
		while(((i >= (int)0))){
			HX_STACK_LINE(94)
			path = this->_paths->__get((i)--).StaticCast< ::flixel::util::FlxPath >();
			HX_STACK_LINE(96)
			if (((bool((path != null())) && bool(!(path->ignoreDrawDebug))))){
				HX_STACK_LINE(97)
				path->drawDebug(Camera);
			}
		}
	}
return null();
}


Void PathManager_obj::drawDebug( ){
{
		HX_STACK_PUSH("PathManager::drawDebug","flixel/plugin/PathManager.hx",55);
		HX_STACK_THIS(this);
		HX_STACK_LINE(56)
		if (((bool(!(::flixel::FlxG_obj::debugger->visualDebug)) || bool(this->ignoreDrawDebug)))){
			HX_STACK_LINE(57)
			return null();
		}
		HX_STACK_LINE(61)
		if (((this->cameras == null()))){
			HX_STACK_LINE(62)
			this->cameras = ::flixel::FlxG_obj::cameras->list;
		}
		HX_STACK_LINE(66)
		int i = (int)0;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(67)
		int l = this->cameras->length;		HX_STACK_VAR(l,"l");
		HX_STACK_LINE(69)
		while(((i < l))){
			HX_STACK_LINE(70)
			this->drawDebugOnCamera(this->cameras->__get((i)++).StaticCast< ::flixel::FlxCamera >());
		}
	}
return null();
}


Void PathManager_obj::update( ){
{
		HX_STACK_PUSH("PathManager::update","flixel/plugin/PathManager.hx",34);
		HX_STACK_THIS(this);
		HX_STACK_LINE(35)
		if ((::flixel::FlxG_obj::paused)){
			HX_STACK_LINE(36)
			return null();
		}
		HX_STACK_LINE(40)
		{
			HX_STACK_LINE(40)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::Dynamic > _g1 = this->_paths;		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(40)
			while(((_g < _g1->length))){
				HX_STACK_LINE(40)
				::flixel::util::FlxPath path = _g1->__get(_g).StaticCast< ::flixel::util::FlxPath >();		HX_STACK_VAR(path,"path");
				HX_STACK_LINE(40)
				++(_g);
				HX_STACK_LINE(42)
				if ((!(path->paused))){
					HX_STACK_LINE(43)
					path->update();
				}
			}
		}
	}
return null();
}


Void PathManager_obj::destroy( ){
{
		HX_STACK_PUSH("PathManager::destroy","flixel/plugin/PathManager.hx",26);
		HX_STACK_THIS(this);
		HX_STACK_LINE(27)
		this->clear();
		HX_STACK_LINE(28)
		this->_paths = null();
		HX_STACK_LINE(30)
		this->super::destroy();
	}
return null();
}



PathManager_obj::PathManager_obj()
{
}

void PathManager_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(PathManager);
	HX_MARK_MEMBER_NAME(_paths,"_paths");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void PathManager_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_paths,"_paths");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic PathManager_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"clear") ) { return clear_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"remove") ) { return remove_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"_paths") ) { return _paths; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"drawDebug") ) { return drawDebug_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"onStateSwitch") ) { return onStateSwitch_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"drawDebugOnCamera") ) { return drawDebugOnCamera_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic PathManager_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"_paths") ) { _paths=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void PathManager_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_paths"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("onStateSwitch"),
	HX_CSTRING("clear"),
	HX_CSTRING("remove"),
	HX_CSTRING("add"),
	HX_CSTRING("drawDebugOnCamera"),
	HX_CSTRING("drawDebug"),
	HX_CSTRING("update"),
	HX_CSTRING("destroy"),
	HX_CSTRING("_paths"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(PathManager_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(PathManager_obj::__mClass,"__mClass");
};

Class PathManager_obj::__mClass;

void PathManager_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.plugin.PathManager"), hx::TCanCast< PathManager_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void PathManager_obj::__boot()
{
}

} // end namespace flixel
} // end namespace plugin
