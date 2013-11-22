#include <hxcpp.h>

#ifndef INCLUDED_Character
#include <Character.h>
#endif
#ifndef INCLUDED_Reflect
#include <Reflect.h>
#endif
#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_flixel_FlxBasic
#include <flixel/FlxBasic.h>
#endif
#ifndef INCLUDED_flixel_FlxObject
#include <flixel/FlxObject.h>
#endif
#ifndef INCLUDED_flixel_FlxSprite
#include <flixel/FlxSprite.h>
#endif
#ifndef INCLUDED_flixel_IDestroyable
#include <flixel/IDestroyable.h>
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
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_haxe_Json
#include <haxe/Json.h>
#endif
#ifndef INCLUDED_haxe_io_Path
#include <haxe/io/Path.h>
#endif
#ifndef INCLUDED_openfl_Assets
#include <openfl/Assets.h>
#endif

Void Character_obj::__construct(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic)
{
HX_STACK_PUSH("Character::new","Character.hx",21);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
{
	HX_STACK_LINE(22)
	super::__construct(X,Y,SimpleGraphic);
	HX_STACK_LINE(24)
	this->set_facing((int)1);
	HX_STACK_LINE(26)
	this->parseJson(JsonPath);
	HX_STACK_LINE(28)
	this->drag->set_x((this->maxVelocity->x * (int)4));
	HX_STACK_LINE(29)
	this->drag->set_y((this->maxVelocity->y * (int)4));
}
;
	return null();
}

Character_obj::~Character_obj() { }

Dynamic Character_obj::__CreateEmpty() { return  new Character_obj; }
hx::ObjectPtr< Character_obj > Character_obj::__new(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,Dynamic SimpleGraphic)
{  hx::ObjectPtr< Character_obj > result = new Character_obj();
	result->__construct(Name,__o_X,__o_Y,JsonPath,SimpleGraphic);
	return result;}

Dynamic Character_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Character_obj > result = new Character_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4]);
	return result;}

Void Character_obj::parseJson( ::String file){
{
		HX_STACK_PUSH("Character::parseJson","Character.hx",82);
		HX_STACK_THIS(this);
		HX_STACK_ARG(file,"file");
		HX_STACK_LINE(83)
		::haxe::io::Path filePath = ::haxe::io::Path_obj::__new(file);		HX_STACK_VAR(filePath,"filePath");
		HX_STACK_LINE(84)
		::String fileStr = ::openfl::Assets_obj::getText(file);		HX_STACK_VAR(fileStr,"fileStr");
		HX_STACK_LINE(85)
		if (((fileStr == null()))){
			HX_STACK_LINE(85)
			hx::Throw (((HX_CSTRING("The file {") + file) + HX_CSTRING("} doesn't exists!")));
		}
		HX_STACK_LINE(89)
		Dynamic json = ::haxe::Json_obj::parse(fileStr);		HX_STACK_VAR(json,"json");
		HX_STACK_LINE(92)
		::String texture = ((filePath->dir + HX_CSTRING("/")) + json->__Field(HX_CSTRING("sprite"),true)->__Field(HX_CSTRING("texture"),true));		HX_STACK_VAR(texture,"texture");
		HX_STACK_LINE(93)
		int frameWidth = ::Std_obj::_int(json->__Field(HX_CSTRING("sprite"),true)->__Field(HX_CSTRING("framewidth"),true));		HX_STACK_VAR(frameWidth,"frameWidth");
		HX_STACK_LINE(94)
		int frameHeight = ::Std_obj::_int(json->__Field(HX_CSTRING("sprite"),true)->__Field(HX_CSTRING("frameheight"),true));		HX_STACK_VAR(frameHeight,"frameHeight");
		HX_STACK_LINE(95)
		this->loadGraphic(texture,true,false,frameWidth,frameHeight,null(),null());
		HX_STACK_LINE(98)
		Float maxX = json->__Field(HX_CSTRING("velocity"),true)->__Field(HX_CSTRING("max_x"),true);		HX_STACK_VAR(maxX,"maxX");
		HX_STACK_LINE(99)
		Float maxY = json->__Field(HX_CSTRING("velocity"),true)->__Field(HX_CSTRING("max_y"),true);		HX_STACK_VAR(maxY,"maxY");
		HX_STACK_LINE(100)
		this->maxVelocity->set(maxX,maxY);
		HX_STACK_LINE(103)
		Float x = json->__Field(HX_CSTRING("collision"),true)->__Field(HX_CSTRING("x"),true);		HX_STACK_VAR(x,"x");
		HX_STACK_LINE(104)
		Float y = json->__Field(HX_CSTRING("collision"),true)->__Field(HX_CSTRING("y"),true);		HX_STACK_VAR(y,"y");
		HX_STACK_LINE(105)
		Float w = json->__Field(HX_CSTRING("collision"),true)->__Field(HX_CSTRING("width"),true);		HX_STACK_VAR(w,"w");
		HX_STACK_LINE(106)
		Float h = json->__Field(HX_CSTRING("collision"),true)->__Field(HX_CSTRING("height"),true);		HX_STACK_VAR(h,"h");
		HX_STACK_LINE(107)
		this->offset->set(x,y);
		HX_STACK_LINE(108)
		this->set_width(w);
		HX_STACK_LINE(109)
		this->set_height(h);
		HX_STACK_LINE(119)
		int v_def = json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("velocities"),true)->__Field(HX_CSTRING("def"),true);		HX_STACK_VAR(v_def,"v_def");
		HX_STACK_LINE(120)
		int v_idl = json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("velocities"),true)->__Field(HX_CSTRING("idle"),true);		HX_STACK_VAR(v_idl,"v_idl");
		HX_STACK_LINE(121)
		int v_wal = json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("velocities"),true)->__Field(HX_CSTRING("walking"),true);		HX_STACK_VAR(v_wal,"v_wal");
		HX_STACK_LINE(122)
		int v_run = json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("velocities"),true)->__Field(HX_CSTRING("running"),true);		HX_STACK_VAR(v_run,"v_run");
		HX_STACK_LINE(124)
		int tmp;		HX_STACK_VAR(tmp,"tmp");
		HX_STACK_LINE(125)
		{
			HX_STACK_LINE(125)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			Array< ::String > _g1 = ::Reflect_obj::fields(json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("frames"),true));		HX_STACK_VAR(_g1,"_g1");
			HX_STACK_LINE(125)
			while(((_g < _g1->length))){
				HX_STACK_LINE(125)
				::String dir = _g1->__get(_g);		HX_STACK_VAR(dir,"dir");
				HX_STACK_LINE(125)
				++(_g);
				HX_STACK_LINE(126)
				Dynamic d = ::Reflect_obj::field(json->__Field(HX_CSTRING("animations"),true)->__Field(HX_CSTRING("frames"),true),dir);		HX_STACK_VAR(d,"d");
				HX_STACK_LINE(127)
				{
					HX_STACK_LINE(127)
					int _g2 = (int)0;		HX_STACK_VAR(_g2,"_g2");
					Array< ::String > _g3 = ::Reflect_obj::fields(d);		HX_STACK_VAR(_g3,"_g3");
					HX_STACK_LINE(127)
					while(((_g2 < _g3->length))){
						HX_STACK_LINE(127)
						::String type = _g3->__get(_g2);		HX_STACK_VAR(type,"type");
						HX_STACK_LINE(127)
						++(_g2);
						HX_STACK_LINE(128)
						Array< int > t = ::Reflect_obj::field(d,type);		HX_STACK_VAR(t,"t");
						HX_STACK_LINE(129)
						::String _switch_1 = (type);
						if (  ( _switch_1==HX_CSTRING("def"))){
							HX_STACK_LINE(130)
							tmp = v_def;
						}
						else if (  ( _switch_1==HX_CSTRING("idle"))){
							HX_STACK_LINE(133)
							tmp = v_idl;
						}
						else if (  ( _switch_1==HX_CSTRING("walking"))){
							HX_STACK_LINE(136)
							tmp = v_wal;
						}
						else if (  ( _switch_1==HX_CSTRING("running"))){
							HX_STACK_LINE(139)
							tmp = v_run;
						}
						else  {
							HX_STACK_LINE(142)
							tmp = v_def;
						}
;
;
						HX_STACK_LINE(145)
						this->animation->add(((type + HX_CSTRING("_")) + dir),t,tmp,true);
					}
				}
			}
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Character_obj,parseJson,(void))

Void Character_obj::resolveAnimation( ){
{
		HX_STACK_PUSH("Character::resolveAnimation","Character.hx",39);
		HX_STACK_THIS(this);
		HX_STACK_LINE(40)
		::String anim = HX_CSTRING("idle_");		HX_STACK_VAR(anim,"anim");
		HX_STACK_LINE(42)
		if (((bool((this->velocity->x != (int)0)) || bool((this->velocity->y != (int)0))))){
			HX_STACK_LINE(44)
			anim = HX_CSTRING("walking_");
			HX_STACK_LINE(45)
			if (((this->velocity->x > (int)0))){
				HX_STACK_LINE(45)
				this->set_facing((int)16);
			}
			else{
				HX_STACK_LINE(47)
				if (((this->velocity->x < (int)0))){
					HX_STACK_LINE(47)
					this->set_facing((int)1);
				}
			}
			HX_STACK_LINE(50)
			if (((this->velocity->y > (int)0))){
				HX_STACK_LINE(50)
				this->set_facing((int)4096);
			}
			else{
				HX_STACK_LINE(52)
				if (((this->velocity->y < (int)0))){
					HX_STACK_LINE(52)
					this->set_facing((int)256);
				}
			}
		}
		HX_STACK_LINE(57)
		{
			HX_STACK_LINE(57)
			::Character _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(57)
			switch( (int)(_g->facing)){
				case (int)256: {
					HX_STACK_LINE(59)
					hx::AddEq(anim,HX_CSTRING("up"));
				}
				;break;
				case (int)4096: {
					HX_STACK_LINE(62)
					hx::AddEq(anim,HX_CSTRING("down"));
				}
				;break;
				case (int)1: {
					HX_STACK_LINE(65)
					hx::AddEq(anim,HX_CSTRING("left"));
				}
				;break;
				case (int)16: {
					HX_STACK_LINE(68)
					hx::AddEq(anim,HX_CSTRING("right"));
				}
				;break;
				default: {
					HX_STACK_LINE(71)
					hx::AddEq(anim,HX_CSTRING("down"));
				}
			}
		}
		struct _Function_1_1{
			inline static ::String Block( ::Character_obj *__this){
				HX_STACK_PUSH("*::closure","Character.hx",76);
				{
					HX_STACK_LINE(76)
					::flixel::animation::FlxAnimationController _this = __this->animation;		HX_STACK_VAR(_this,"_this");
					HX_STACK_LINE(76)
					::String animName = null();		HX_STACK_VAR(animName,"animName");
					HX_STACK_LINE(76)
					if (((_this->_curAnim != null()))){
						HX_STACK_LINE(76)
						animName = _this->_curAnim->name;
					}
					HX_STACK_LINE(76)
					return animName;
				}
				return null();
			}
		};
		HX_STACK_LINE(76)
		if (((_Function_1_1::Block(this) != anim))){
			HX_STACK_LINE(77)
			this->animation->play(anim,null(),null());
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Character_obj,resolveAnimation,(void))

Void Character_obj::update( ){
{
		HX_STACK_PUSH("Character::update","Character.hx",33);
		HX_STACK_THIS(this);
		HX_STACK_LINE(35)
		this->resolveAnimation();
		HX_STACK_LINE(36)
		this->super::update();
	}
return null();
}



Character_obj::Character_obj()
{
}

void Character_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Character);
	HX_MARK_MEMBER_NAME(name,"name");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Character_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(name,"name");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Character_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { return name; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"parseJson") ) { return parseJson_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"resolveAnimation") ) { return resolveAnimation_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Character_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"name") ) { name=inValue.Cast< ::String >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Character_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("name"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("parseJson"),
	HX_CSTRING("resolveAnimation"),
	HX_CSTRING("update"),
	HX_CSTRING("name"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Character_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Character_obj::__mClass,"__mClass");
};

Class Character_obj::__mClass;

void Character_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("Character"), hx::TCanCast< Character_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Character_obj::__boot()
{
}

