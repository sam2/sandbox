#include <hxcpp.h>

#ifndef INCLUDED_flixel_tweens_FlxTween
#include <flixel/tweens/FlxTween.h>
#endif
#ifndef INCLUDED_flixel_tweens_motion_Motion
#include <flixel/tweens/motion/Motion.h>
#endif
#ifndef INCLUDED_flixel_tweens_motion_QuadPath
#include <flixel/tweens/motion/QuadPath.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace tweens{
namespace motion{

Void QuadPath_obj::__construct(Dynamic complete,hx::Null< int >  __o_type)
{
HX_STACK_PUSH("QuadPath::new","flixel/tweens/motion/QuadPath.hx",20);
int type = __o_type.Default(0);
{
	HX_STACK_LINE(21)
	super::__construct((int)0,complete,type,null());
	HX_STACK_LINE(22)
	this->_points = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(23)
	this->_curve = Array_obj< ::Dynamic >::__new();
	HX_STACK_LINE(24)
	this->_curveD = Array_obj< Float >::__new();
	HX_STACK_LINE(25)
	this->_curveT = Array_obj< Float >::__new();
	HX_STACK_LINE(26)
	this->_distance = this->_speed = this->_index = (int)0;
	HX_STACK_LINE(27)
	this->_updateCurve = true;
	HX_STACK_LINE(29)
	this->_curveT[(int)0] = (int)0;
}
;
	return null();
}

QuadPath_obj::~QuadPath_obj() { }

Dynamic QuadPath_obj::__CreateEmpty() { return  new QuadPath_obj; }
hx::ObjectPtr< QuadPath_obj > QuadPath_obj::__new(Dynamic complete,hx::Null< int >  __o_type)
{  hx::ObjectPtr< QuadPath_obj > result = new QuadPath_obj();
	result->__construct(complete,__o_type);
	return result;}

Dynamic QuadPath_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< QuadPath_obj > result = new QuadPath_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

Float QuadPath_obj::curveLength( ::flixel::util::FlxPoint start,::flixel::util::FlxPoint control,::flixel::util::FlxPoint finish){
	HX_STACK_PUSH("QuadPath::curveLength","flixel/tweens/motion/QuadPath.hx",236);
	HX_STACK_THIS(this);
	HX_STACK_ARG(start,"start");
	HX_STACK_ARG(control,"control");
	HX_STACK_ARG(finish,"finish");
	HX_STACK_LINE(237)
	::flixel::util::FlxPoint a = ::flixel::tweens::motion::QuadPath_obj::_Point;		HX_STACK_VAR(a,"a");
	::flixel::util::FlxPoint b = ::flixel::tweens::motion::QuadPath_obj::_Point2;		HX_STACK_VAR(b,"b");
	HX_STACK_LINE(239)
	a->set_x(((start->x - ((int)2 * control->x)) + finish->x));
	HX_STACK_LINE(240)
	a->set_y(((start->y - ((int)2 * control->y)) + finish->y));
	HX_STACK_LINE(241)
	b->set_x((((int)2 * control->x) - ((int)2 * start->x)));
	HX_STACK_LINE(242)
	b->set_y((((int)2 * control->y) - ((int)2 * start->y)));
	HX_STACK_LINE(243)
	Float A = ((int)4 * (((a->x * a->x) + (a->y * a->y))));		HX_STACK_VAR(A,"A");
	Float B = ((int)4 * (((a->x * b->x) + (a->y * b->y))));		HX_STACK_VAR(B,"B");
	Float C = ((b->x * b->x) + (b->y * b->y));		HX_STACK_VAR(C,"C");
	Float ABC = ((int)2 * ::Math_obj::sqrt(((A + B) + C)));		HX_STACK_VAR(ABC,"ABC");
	Float A2 = ::Math_obj::sqrt(A);		HX_STACK_VAR(A2,"A2");
	Float A32 = (((int)2 * A) * A2);		HX_STACK_VAR(A32,"A32");
	Float C2 = ((int)2 * ::Math_obj::sqrt(C));		HX_STACK_VAR(C2,"C2");
	Float BA = (Float(B) / Float(A2));		HX_STACK_VAR(BA,"BA");
	HX_STACK_LINE(251)
	return (Float(((((A32 * ABC) + ((A2 * B) * ((ABC - C2)))) + ((((((int)4 * C) * A) - (B * B))) * ::Math_obj::log((Float((((((int)2 * A2) + BA) + ABC))) / Float(((BA + C2))))))))) / Float((((int)4 * A32))));
}


HX_DEFINE_DYNAMIC_FUNC3(QuadPath_obj,curveLength,return )

Float QuadPath_obj::get_pointCount( ){
	HX_STACK_PUSH("QuadPath::get_pointCount","flixel/tweens/motion/QuadPath.hx",232);
	HX_STACK_THIS(this);
	HX_STACK_LINE(232)
	return this->_points->length;
}


HX_DEFINE_DYNAMIC_FUNC0(QuadPath_obj,get_pointCount,return )

Void QuadPath_obj::updatePath( ){
{
		HX_STACK_PUSH("QuadPath::updatePath","flixel/tweens/motion/QuadPath.hx",173);
		HX_STACK_THIS(this);
		HX_STACK_LINE(174)
		if (((this->_points->length < (int)3))){
			HX_STACK_LINE(175)
			hx::Throw (HX_CSTRING("A QuadPath must have at least 3 points to operate."));
		}
		HX_STACK_LINE(178)
		if ((!(this->_updateCurve))){
			HX_STACK_LINE(179)
			return null();
		}
		HX_STACK_LINE(182)
		this->_updateCurve = false;
		HX_STACK_LINE(185)
		::flixel::util::FlxPoint p;		HX_STACK_VAR(p,"p");
		::flixel::util::FlxPoint c;		HX_STACK_VAR(c,"c");
		::flixel::util::FlxPoint l = this->_points->__get((int)1).StaticCast< ::flixel::util::FlxPoint >();		HX_STACK_VAR(l,"l");
		int i = (int)2;		HX_STACK_VAR(i,"i");
		HX_STACK_LINE(189)
		while(((i < this->_points->length))){
			HX_STACK_LINE(191)
			p = this->_points->__get(i).StaticCast< ::flixel::util::FlxPoint >();
			HX_STACK_LINE(192)
			if (((this->_curve->length > (i - (int)1)))){
				HX_STACK_LINE(192)
				c = this->_curve->__get((i - (int)1)).StaticCast< ::flixel::util::FlxPoint >();
			}
			else{
				HX_STACK_LINE(193)
				c = this->_curve[(i - (int)1)] = ::flixel::util::FlxPoint_obj::__new(null(),null());
			}
			HX_STACK_LINE(194)
			if (((i < (this->_points->length - (int)1)))){
				HX_STACK_LINE(196)
				c->set_x((l->x + (Float(((p->x - l->x))) / Float((int)2))));
				HX_STACK_LINE(197)
				c->set_y((l->y + (Float(((p->y - l->y))) / Float((int)2))));
			}
			else{
				HX_STACK_LINE(201)
				c->set_x(p->x);
				HX_STACK_LINE(202)
				c->set_y(p->y);
			}
			HX_STACK_LINE(204)
			l = p;
			HX_STACK_LINE(205)
			(i)++;
		}
		HX_STACK_LINE(209)
		i = (int)0;
		HX_STACK_LINE(210)
		this->_distance = (int)0;
		HX_STACK_LINE(211)
		while(((i < (this->_curve->length - (int)1)))){
			HX_STACK_LINE(213)
			this->_curveD[i] = this->curveLength(this->_curve->__get(i).StaticCast< ::flixel::util::FlxPoint >(),this->_points->__get((i + (int)1)).StaticCast< ::flixel::util::FlxPoint >(),this->_curve->__get((i + (int)1)).StaticCast< ::flixel::util::FlxPoint >());
			HX_STACK_LINE(214)
			hx::AddEq(this->_distance,this->_curveD->__get((i)++));
		}
		HX_STACK_LINE(218)
		i = (int)1;
		HX_STACK_LINE(219)
		Float d = (int)0;		HX_STACK_VAR(d,"d");
		HX_STACK_LINE(220)
		while(((i < (this->_curve->length - (int)1)))){
			HX_STACK_LINE(222)
			hx::AddEq(d,this->_curveD->__get(i));
			HX_STACK_LINE(223)
			this->_curveT[(i)++] = (Float(d) / Float(this->_distance));
		}
		HX_STACK_LINE(225)
		this->_curveT[(this->_curve->length - (int)1)] = (int)1;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(QuadPath_obj,updatePath,(void))

Void QuadPath_obj::update( ){
{
		HX_STACK_PUSH("QuadPath::update","flixel/tweens/motion/QuadPath.hx",115);
		HX_STACK_THIS(this);
		HX_STACK_LINE(116)
		this->super::update();
		HX_STACK_LINE(117)
		Float td;		HX_STACK_VAR(td,"td");
		HX_STACK_LINE(118)
		Float tt;		HX_STACK_VAR(tt,"tt");
		HX_STACK_LINE(120)
		if (((bool(!(this->_backward)) && bool((this->_points != null()))))){
			HX_STACK_LINE(122)
			if (((this->_index < (this->_curve->length - (int)1)))){
				HX_STACK_LINE(123)
				while(((this->_t > this->_curveT->__get((this->_index + (int)1))))){
					HX_STACK_LINE(126)
					(this->_index)++;
					HX_STACK_LINE(127)
					if (((this->_index == (this->_curve->length - (int)1)))){
						HX_STACK_LINE(129)
						hx::SubEq(this->_index,(int)1);
						HX_STACK_LINE(130)
						break;
					}
				}
			}
			HX_STACK_LINE(134)
			td = this->_curveT->__get(this->_index);
			HX_STACK_LINE(135)
			tt = (this->_curveT->__get((this->_index + (int)1)) - td);
			HX_STACK_LINE(136)
			td = (Float(((this->_t - td))) / Float(tt));
			HX_STACK_LINE(137)
			this->_a = this->_curve->__get(this->_index).StaticCast< ::flixel::util::FlxPoint >();
			HX_STACK_LINE(138)
			this->_b = this->_points->__get((this->_index + (int)1)).StaticCast< ::flixel::util::FlxPoint >();
			HX_STACK_LINE(139)
			this->_c = this->_curve->__get((this->_index + (int)1)).StaticCast< ::flixel::util::FlxPoint >();
			HX_STACK_LINE(140)
			this->x = ((((this->_a->x * (((int)1 - td))) * (((int)1 - td))) + (((this->_b->x * (int)2) * (((int)1 - td))) * td)) + ((this->_c->x * td) * td));
			HX_STACK_LINE(141)
			this->y = ((((this->_a->y * (((int)1 - td))) * (((int)1 - td))) + (((this->_b->y * (int)2) * (((int)1 - td))) * td)) + ((this->_c->y * td) * td));
		}
		else{
			HX_STACK_LINE(143)
			if (((this->_points != null()))){
				HX_STACK_LINE(145)
				if (((this->_index > (int)0))){
					HX_STACK_LINE(146)
					while(((this->_t < this->_curveT->__get((this->_index - (int)1))))){
						HX_STACK_LINE(149)
						hx::SubEq(this->_index,(int)1);
						HX_STACK_LINE(150)
						if (((this->_index == (int)0))){
							HX_STACK_LINE(152)
							hx::AddEq(this->_index,(int)1);
							HX_STACK_LINE(153)
							break;
						}
					}
				}
				HX_STACK_LINE(158)
				td = this->_curveT->__get(this->_index);
				HX_STACK_LINE(159)
				tt = (this->_curveT->__get((this->_index - (int)1)) - td);
				HX_STACK_LINE(160)
				td = (Float(((this->_t - td))) / Float(tt));
				HX_STACK_LINE(161)
				this->_a = this->_curve->__get(this->_index).StaticCast< ::flixel::util::FlxPoint >();
				HX_STACK_LINE(162)
				this->_b = this->_points->__get(this->_index).StaticCast< ::flixel::util::FlxPoint >();
				HX_STACK_LINE(163)
				this->_c = this->_curve->__get((this->_index - (int)1)).StaticCast< ::flixel::util::FlxPoint >();
				HX_STACK_LINE(164)
				this->x = ((((this->_a->x * (((int)1 - td))) * (((int)1 - td))) + (((this->_b->x * (int)2) * (((int)1 - td))) * td)) + ((this->_c->x * td) * td));
				HX_STACK_LINE(165)
				this->y = ((((this->_a->y * (((int)1 - td))) * (((int)1 - td))) + (((this->_b->y * (int)2) * (((int)1 - td))) * td)) + ((this->_c->y * td) * td));
			}
		}
		HX_STACK_LINE(168)
		this->super::postUpdate();
	}
return null();
}


Dynamic QuadPath_obj::start( ){
	HX_STACK_PUSH("QuadPath::start","flixel/tweens/motion/QuadPath.hx",99);
	HX_STACK_THIS(this);
	HX_STACK_LINE(100)
	if ((!(this->_backward))){
		HX_STACK_LINE(101)
		this->_index = (int)0;
	}
	else{
		HX_STACK_LINE(105)
		this->_index = (this->_curve->length - (int)1);
	}
	HX_STACK_LINE(109)
	this->super::start();
	HX_STACK_LINE(110)
	return hx::ObjectPtr<OBJ_>(this);
}


::flixel::util::FlxPoint QuadPath_obj::getPoint( hx::Null< int >  __o_index){
int index = __o_index.Default(0);
	HX_STACK_PUSH("QuadPath::getPoint","flixel/tweens/motion/QuadPath.hx",89);
	HX_STACK_THIS(this);
	HX_STACK_ARG(index,"index");
{
		HX_STACK_LINE(90)
		if (((this->_points->length == (int)0))){
			HX_STACK_LINE(91)
			hx::Throw (HX_CSTRING("No points have been added to the path yet."));
		}
		HX_STACK_LINE(94)
		return this->_points->__get(hx::Mod(index,this->_points->length)).StaticCast< ::flixel::util::FlxPoint >();
	}
}


HX_DEFINE_DYNAMIC_FUNC1(QuadPath_obj,getPoint,return )

::flixel::tweens::motion::QuadPath QuadPath_obj::addPoint( hx::Null< Float >  __o_x,hx::Null< Float >  __o_y){
Float x = __o_x.Default(0);
Float y = __o_y.Default(0);
	HX_STACK_PUSH("QuadPath::addPoint","flixel/tweens/motion/QuadPath.hx",76);
	HX_STACK_THIS(this);
	HX_STACK_ARG(x,"x");
	HX_STACK_ARG(y,"y");
{
		HX_STACK_LINE(77)
		this->_updateCurve = true;
		HX_STACK_LINE(78)
		if (((this->_points->length == (int)0))){
			HX_STACK_LINE(78)
			this->_curve[(int)0] = ::flixel::util::FlxPoint_obj::__new(x,y);
		}
		HX_STACK_LINE(79)
		this->_points[this->_points->length] = ::flixel::util::FlxPoint_obj::__new(x,y);
		HX_STACK_LINE(80)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


HX_DEFINE_DYNAMIC_FUNC2(QuadPath_obj,addPoint,return )

::flixel::tweens::motion::QuadPath QuadPath_obj::setMotion( Float DurationOrSpeed,hx::Null< bool >  __o_UseDuration,Dynamic Ease){
bool UseDuration = __o_UseDuration.Default(true);
	HX_STACK_PUSH("QuadPath::setMotion","flixel/tweens/motion/QuadPath.hx",51);
	HX_STACK_THIS(this);
	HX_STACK_ARG(DurationOrSpeed,"DurationOrSpeed");
	HX_STACK_ARG(UseDuration,"UseDuration");
	HX_STACK_ARG(Ease,"Ease");
{
		HX_STACK_LINE(52)
		this->updatePath();
		HX_STACK_LINE(54)
		if ((UseDuration)){
			HX_STACK_LINE(56)
			this->_target = DurationOrSpeed;
			HX_STACK_LINE(57)
			this->_speed = (Float(this->_distance) / Float(DurationOrSpeed));
		}
		else{
			HX_STACK_LINE(61)
			this->_target = (Float(this->_distance) / Float(DurationOrSpeed));
			HX_STACK_LINE(62)
			this->_speed = DurationOrSpeed;
		}
		HX_STACK_LINE(65)
		this->_ease = Ease;
		HX_STACK_LINE(66)
		this->start();
		HX_STACK_LINE(67)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


HX_DEFINE_DYNAMIC_FUNC3(QuadPath_obj,setMotion,return )

Void QuadPath_obj::destroy( ){
{
		HX_STACK_PUSH("QuadPath::destroy","flixel/tweens/motion/QuadPath.hx",33);
		HX_STACK_THIS(this);
		HX_STACK_LINE(34)
		this->super::destroy();
		HX_STACK_LINE(35)
		this->_points = null();
		HX_STACK_LINE(36)
		this->_curve = null();
		HX_STACK_LINE(37)
		this->_curveD = null();
		HX_STACK_LINE(38)
		this->_curveT = null();
		HX_STACK_LINE(39)
		this->_a = null();
		HX_STACK_LINE(40)
		this->_b = null();
		HX_STACK_LINE(41)
		this->_c = null();
	}
return null();
}


::flixel::util::FlxPoint QuadPath_obj::_Point;

::flixel::util::FlxPoint QuadPath_obj::_Point2;


QuadPath_obj::QuadPath_obj()
{
}

void QuadPath_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(QuadPath);
	HX_MARK_MEMBER_NAME(_c,"_c");
	HX_MARK_MEMBER_NAME(_b,"_b");
	HX_MARK_MEMBER_NAME(_a,"_a");
	HX_MARK_MEMBER_NAME(_curveD,"_curveD");
	HX_MARK_MEMBER_NAME(_curveT,"_curveT");
	HX_MARK_MEMBER_NAME(_curve,"_curve");
	HX_MARK_MEMBER_NAME(_updateCurve,"_updateCurve");
	HX_MARK_MEMBER_NAME(_index,"_index");
	HX_MARK_MEMBER_NAME(_speed,"_speed");
	HX_MARK_MEMBER_NAME(_distance,"_distance");
	HX_MARK_MEMBER_NAME(_points,"_points");
	HX_MARK_MEMBER_NAME(pointCount,"pointCount");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void QuadPath_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(_c,"_c");
	HX_VISIT_MEMBER_NAME(_b,"_b");
	HX_VISIT_MEMBER_NAME(_a,"_a");
	HX_VISIT_MEMBER_NAME(_curveD,"_curveD");
	HX_VISIT_MEMBER_NAME(_curveT,"_curveT");
	HX_VISIT_MEMBER_NAME(_curve,"_curve");
	HX_VISIT_MEMBER_NAME(_updateCurve,"_updateCurve");
	HX_VISIT_MEMBER_NAME(_index,"_index");
	HX_VISIT_MEMBER_NAME(_speed,"_speed");
	HX_VISIT_MEMBER_NAME(_distance,"_distance");
	HX_VISIT_MEMBER_NAME(_points,"_points");
	HX_VISIT_MEMBER_NAME(pointCount,"pointCount");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic QuadPath_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"_c") ) { return _c; }
		if (HX_FIELD_EQ(inName,"_b") ) { return _b; }
		if (HX_FIELD_EQ(inName,"_a") ) { return _a; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"start") ) { return start_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_Point") ) { return _Point; }
		if (HX_FIELD_EQ(inName,"_curve") ) { return _curve; }
		if (HX_FIELD_EQ(inName,"_index") ) { return _index; }
		if (HX_FIELD_EQ(inName,"_speed") ) { return _speed; }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_Point2") ) { return _Point2; }
		if (HX_FIELD_EQ(inName,"_curveD") ) { return _curveD; }
		if (HX_FIELD_EQ(inName,"_curveT") ) { return _curveT; }
		if (HX_FIELD_EQ(inName,"_points") ) { return _points; }
		if (HX_FIELD_EQ(inName,"destroy") ) { return destroy_dyn(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"getPoint") ) { return getPoint_dyn(); }
		if (HX_FIELD_EQ(inName,"addPoint") ) { return addPoint_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_distance") ) { return _distance; }
		if (HX_FIELD_EQ(inName,"setMotion") ) { return setMotion_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"pointCount") ) { return inCallProp ? get_pointCount() : pointCount; }
		if (HX_FIELD_EQ(inName,"updatePath") ) { return updatePath_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"curveLength") ) { return curveLength_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_updateCurve") ) { return _updateCurve; }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"get_pointCount") ) { return get_pointCount_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic QuadPath_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"_c") ) { _c=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_b") ) { _b=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_a") ) { _a=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"_Point") ) { _Point=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_curve") ) { _curve=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_index") ) { _index=inValue.Cast< int >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_speed") ) { _speed=inValue.Cast< Float >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"_Point2") ) { _Point2=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_curveD") ) { _curveD=inValue.Cast< Array< Float > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_curveT") ) { _curveT=inValue.Cast< Array< Float > >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_points") ) { _points=inValue.Cast< Array< ::Dynamic > >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"_distance") ) { _distance=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"pointCount") ) { pointCount=inValue.Cast< Float >(); return inValue; }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"_updateCurve") ) { _updateCurve=inValue.Cast< bool >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void QuadPath_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("_c"));
	outFields->push(HX_CSTRING("_b"));
	outFields->push(HX_CSTRING("_a"));
	outFields->push(HX_CSTRING("_curveD"));
	outFields->push(HX_CSTRING("_curveT"));
	outFields->push(HX_CSTRING("_curve"));
	outFields->push(HX_CSTRING("_updateCurve"));
	outFields->push(HX_CSTRING("_index"));
	outFields->push(HX_CSTRING("_speed"));
	outFields->push(HX_CSTRING("_distance"));
	outFields->push(HX_CSTRING("_points"));
	outFields->push(HX_CSTRING("pointCount"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("_Point"),
	HX_CSTRING("_Point2"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("_c"),
	HX_CSTRING("_b"),
	HX_CSTRING("_a"),
	HX_CSTRING("_curveD"),
	HX_CSTRING("_curveT"),
	HX_CSTRING("_curve"),
	HX_CSTRING("_updateCurve"),
	HX_CSTRING("_index"),
	HX_CSTRING("_speed"),
	HX_CSTRING("_distance"),
	HX_CSTRING("_points"),
	HX_CSTRING("curveLength"),
	HX_CSTRING("get_pointCount"),
	HX_CSTRING("pointCount"),
	HX_CSTRING("updatePath"),
	HX_CSTRING("update"),
	HX_CSTRING("start"),
	HX_CSTRING("getPoint"),
	HX_CSTRING("addPoint"),
	HX_CSTRING("setMotion"),
	HX_CSTRING("destroy"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(QuadPath_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(QuadPath_obj::_Point,"_Point");
	HX_MARK_MEMBER_NAME(QuadPath_obj::_Point2,"_Point2");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(QuadPath_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(QuadPath_obj::_Point,"_Point");
	HX_VISIT_MEMBER_NAME(QuadPath_obj::_Point2,"_Point2");
};

Class QuadPath_obj::__mClass;

void QuadPath_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.tweens.motion.QuadPath"), hx::TCanCast< QuadPath_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void QuadPath_obj::__boot()
{
	_Point= ::flixel::util::FlxPoint_obj::__new(null(),null());
	_Point2= ::flixel::util::FlxPoint_obj::__new(null(),null());
}

} // end namespace flixel
} // end namespace tweens
} // end namespace motion
