#include <hxcpp.h>

#ifndef INCLUDED_flash_geom_Rectangle
#include <flash/geom/Rectangle.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_loaders_TextureAtlasFrame
#include <flixel/util/loaders/TextureAtlasFrame.h>
#endif
namespace flixel{
namespace util{
namespace loaders{

Void TextureAtlasFrame_obj::__construct()
{
HX_STACK_PUSH("TextureAtlasFrame::new","flixel/util/loaders/TextureAtlasFrame.hx",6);
{
	HX_STACK_LINE(14)
	this->offset = null();
	HX_STACK_LINE(13)
	this->sourceSize = null();
	HX_STACK_LINE(12)
	this->trimmed = false;
	HX_STACK_LINE(11)
	this->rotated = false;
	HX_STACK_LINE(9)
	this->frame = null();
	HX_STACK_LINE(8)
	this->name = null();
}
;
	return null();
}

TextureAtlasFrame_obj::~TextureAtlasFrame_obj() { }

Dynamic TextureAtlasFrame_obj::__CreateEmpty() { return  new TextureAtlasFrame_obj; }
hx::ObjectPtr< TextureAtlasFrame_obj > TextureAtlasFrame_obj::__new()
{  hx::ObjectPtr< TextureAtlasFrame_obj > result = new TextureAtlasFrame_obj();
	result->__construct();
	return result;}

Dynamic TextureAtlasFrame_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< TextureAtlasFrame_obj > result = new TextureAtlasFrame_obj();
	result->__construct();
	return result;}

Void TextureAtlasFrame_obj::destroy( ){
{
		HX_STACK_PUSH("TextureAtlasFrame::destroy","flixel/util/loaders/TextureAtlasFrame.hx",19);
		HX_STACK_THIS(this);
		HX_STACK_LINE(20)
		this->name = null();
		HX_STACK_LINE(21)
		this->frame = null();
		HX_STACK_LINE(22)
		this->sourceSize = null();
		HX_STACK_LINE(23)
		this->offset = null();
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(TextureAtlasFrame_obj,destroy,(void))


TextureAtlasFrame_obj::TextureAtlasFrame_obj()
{
}

void TextureAtlasFrame_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(TextureAtlasFrame);
	HX_MARK_MEMBER_NAME(offset,"offset");
	HX_MARK_MEMBER_NAME(sourceSize,"sourceSize");
	HX_MARK_MEMBER_NAME(trimmed,"trimmed");
	HX_MARK_MEMBER_NAME(rotated,"rotated");
	HX_MARK_MEMBER_NAME(frame,"frame");
	HX_MARK_MEMBER_NAME(name,"name");
	HX_MARK_END_CLASS();
}

void TextureAtlasFrame_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(offset,"offset");
	HX_VISIT_MEMBER_NAME(sourceSize,"sourceSize");
	HX_VISIT_MEMBER_NAME(trimmed,"trimmed");
	HX_VISIT_MEMBER_NAME(rotated,"rotated");
	HX_VISIT_MEMBER_NAME(frame,"frame");
	HX_VISIT_MEMBER_NAME(name,"name");
}

Dynamic TextureAtlasFrame_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"frame") ) { return frame; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"offset") ) { return offset; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		if (HX_FIELD_EQ(inName,"trimmed") ) { return trimmed; }
		if (HX_FIELD_EQ(inName,"rotated") ) { return rotated; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"sourceSize") ) { return sourceSize; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic TextureAtlasFrame_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"frame") ) { frame=inValue.Cast< ::flash::geom::Rectangle >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"offset") ) { offset=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"trimmed") ) { trimmed=inValue.Cast< bool >(); return inValue; }
		if (HX_FIELD_EQ(inName,"rotated") ) { rotated=inValue.Cast< bool >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"sourceSize") ) { sourceSize=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void TextureAtlasFrame_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("offset"));
	outFields->push(HX_CSTRING("sourceSize"));
	outFields->push(HX_CSTRING("trimmed"));
	outFields->push(HX_CSTRING("rotated"));
	outFields->push(HX_CSTRING("frame"));
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("destroy"),
	HX_CSTRING("offset"),
	HX_CSTRING("sourceSize"),
	HX_CSTRING("trimmed"),
	HX_CSTRING("rotated"),
	HX_CSTRING("frame"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(TextureAtlasFrame_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(TextureAtlasFrame_obj::__mClass,"__mClass");
};

Class TextureAtlasFrame_obj::__mClass;

void TextureAtlasFrame_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.util.loaders.TextureAtlasFrame"), hx::TCanCast< TextureAtlasFrame_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void TextureAtlasFrame_obj::__boot()
{
}

} // end namespace flixel
} // end namespace util
} // end namespace loaders
