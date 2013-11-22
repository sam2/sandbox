#include <hxcpp.h>

#ifndef INCLUDED_flixel_util_FlxAngle
#include <flixel/util/FlxAngle.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_FlxVector
#include <flixel/util/FlxVector.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace util{

Void FlxVector_obj::__construct(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y)
{
HX_STACK_PUSH("FlxVector::new","flixel/util/FlxVector.hx",21);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
{
	HX_STACK_LINE(21)
	super::__construct(X,Y);
}
;
	return null();
}

FlxVector_obj::~FlxVector_obj() { }

Dynamic FlxVector_obj::__CreateEmpty() { return  new FlxVector_obj; }
hx::ObjectPtr< FlxVector_obj > FlxVector_obj::__new(hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y)
{  hx::ObjectPtr< FlxVector_obj > result = new FlxVector_obj();
	result->__construct(__o_X,__o_Y);
	return result;}

Dynamic FlxVector_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxVector_obj > result = new FlxVector_obj();
	result->__construct(inArgs[0],inArgs[1]);
	return result;}

::flixel::util::FlxVector FlxVector_obj::clone( ::flixel::util::FlxVector vec){
	HX_STACK_PUSH("FlxVector::clone","flixel/util/FlxVector.hx",648);
	HX_STACK_THIS(this);
	HX_STACK_ARG(vec,"vec");
	HX_STACK_LINE(649)
	if (((vec == null()))){
		HX_STACK_LINE(650)
		vec = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(654)
	vec->set_x(this->x);
	HX_STACK_LINE(655)
	vec->set_y(this->y);
	HX_STACK_LINE(657)
	return vec;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,clone,return )

bool FlxVector_obj::isValid( ){
	HX_STACK_PUSH("FlxVector::isValid","flixel/util/FlxVector.hx",638);
	HX_STACK_THIS(this);
	HX_STACK_LINE(638)
	return (bool((bool((bool(!(::Math_obj::isNaN(this->x))) && bool(!(::Math_obj::isNaN(this->y))))) && bool(::Math_obj::isFinite(this->x)))) && bool(::Math_obj::isFinite(this->y)));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,isValid,return )

::flixel::util::FlxVector FlxVector_obj::bounceWithFriction( ::flixel::util::FlxVector normal,hx::Null< Float >  __o_bounceCoeff,hx::Null< Float >  __o_friction){
Float bounceCoeff = __o_bounceCoeff.Default(1);
Float friction = __o_friction.Default(0);
	HX_STACK_PUSH("FlxVector::bounceWithFriction","flixel/util/FlxVector.hx",621);
	HX_STACK_THIS(this);
	HX_STACK_ARG(normal,"normal");
	HX_STACK_ARG(bounceCoeff,"bounceCoeff");
	HX_STACK_ARG(friction,"friction");
{
		struct _Function_1_1{
			inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector &normal,::flixel::util::FlxVector_obj *__this){
				HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",622);
				{
					struct _Function_2_1{
						inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector &normal){
							HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",622);
							{
								HX_STACK_LINE(622)
								::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector3;		HX_STACK_VAR(vec,"vec");
								HX_STACK_LINE(622)
								if (((vec == null()))){
									HX_STACK_LINE(622)
									vec = ::flixel::util::FlxVector_obj::__new(null(),null());
								}
								HX_STACK_LINE(622)
								hx::TCast< ::flixel::util::FlxVector >::cast(vec->set(-(normal->y),normal->x));
								HX_STACK_LINE(622)
								return vec;
							}
							return null();
						}
					};
					HX_STACK_LINE(622)
					::flixel::util::FlxVector v = _Function_2_1::Block(normal);		HX_STACK_VAR(v,"v");
					::flixel::util::FlxVector proj = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(proj,"proj");
					HX_STACK_LINE(622)
					Float dp = ((__this->x * v->x) + (__this->y * v->y));		HX_STACK_VAR(dp,"dp");
					HX_STACK_LINE(622)
					if (((proj == null()))){
						HX_STACK_LINE(622)
						proj = ::flixel::util::FlxVector_obj::__new(null(),null());
					}
					HX_STACK_LINE(622)
					return hx::TCast< ::flixel::util::FlxVector >::cast(proj->set((dp * v->x),(dp * v->y)));
				}
				return null();
			}
		};
		HX_STACK_LINE(622)
		::flixel::util::FlxVector p1 = _Function_1_1::Block(normal,this);		HX_STACK_VAR(p1,"p1");
		struct _Function_1_2{
			inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this,::flixel::util::FlxVector &normal){
				HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",623);
				{
					HX_STACK_LINE(623)
					::flixel::util::FlxVector proj = ::flixel::util::FlxVector_obj::_vector2;		HX_STACK_VAR(proj,"proj");
					HX_STACK_LINE(623)
					Float dp = ((__this->x * normal->x) + (__this->y * normal->y));		HX_STACK_VAR(dp,"dp");
					HX_STACK_LINE(623)
					if (((proj == null()))){
						HX_STACK_LINE(623)
						proj = ::flixel::util::FlxVector_obj::__new(null(),null());
					}
					HX_STACK_LINE(623)
					return hx::TCast< ::flixel::util::FlxVector >::cast(proj->set((dp * normal->x),(dp * normal->y)));
				}
				return null();
			}
		};
		HX_STACK_LINE(623)
		::flixel::util::FlxVector p2 = _Function_1_2::Block(this,normal);		HX_STACK_VAR(p2,"p2");
		HX_STACK_LINE(624)
		Float bounceX = -(p2->x);		HX_STACK_VAR(bounceX,"bounceX");
		HX_STACK_LINE(625)
		Float bounceY = -(p2->y);		HX_STACK_VAR(bounceY,"bounceY");
		HX_STACK_LINE(626)
		Float frictionX = p1->x;		HX_STACK_VAR(frictionX,"frictionX");
		HX_STACK_LINE(627)
		Float frictionY = p1->y;		HX_STACK_VAR(frictionY,"frictionY");
		HX_STACK_LINE(628)
		this->set_x(((bounceX * bounceCoeff) + (frictionX * friction)));
		HX_STACK_LINE(629)
		this->set_y(((bounceY * bounceCoeff) + (frictionY * friction)));
		HX_STACK_LINE(630)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


HX_DEFINE_DYNAMIC_FUNC3(FlxVector_obj,bounceWithFriction,return )

::flixel::util::FlxVector FlxVector_obj::bounce( ::flixel::util::FlxVector normal,hx::Null< Float >  __o_bounceCoeff){
Float bounceCoeff = __o_bounceCoeff.Default(1);
	HX_STACK_PUSH("FlxVector::bounce","flixel/util/FlxVector.hx",606);
	HX_STACK_THIS(this);
	HX_STACK_ARG(normal,"normal");
	HX_STACK_ARG(bounceCoeff,"bounceCoeff");
{
		HX_STACK_LINE(607)
		Float d = ((((int)1 + bounceCoeff)) * (((this->x * normal->x) + (this->y * normal->y))));		HX_STACK_VAR(d,"d");
		HX_STACK_LINE(608)
		{
			HX_STACK_LINE(608)
			::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(608)
			_g->set_x((_g->x - (d * normal->x)));
		}
		HX_STACK_LINE(609)
		{
			HX_STACK_LINE(609)
			::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(609)
			_g->set_y((_g->y - (d * normal->y)));
		}
		HX_STACK_LINE(610)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


HX_DEFINE_DYNAMIC_FUNC2(FlxVector_obj,bounce,return )

Float FlxVector_obj::distSquared( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::distSquared","flixel/util/FlxVector.hx",593);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(594)
	Float dx = (v->x - this->x);		HX_STACK_VAR(dx,"dx");
	HX_STACK_LINE(595)
	Float dy = (v->y - this->y);		HX_STACK_VAR(dy,"dy");
	HX_STACK_LINE(596)
	return ((dx * dx) + (dy * dy));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,distSquared,return )

Float FlxVector_obj::dist( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::dist","flixel/util/FlxVector.hx",585);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static Float Block( ::flixel::util::FlxVector &v,::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",586);
			{
				HX_STACK_LINE(586)
				Float dx = (v->x - __this->x);		HX_STACK_VAR(dx,"dx");
				HX_STACK_LINE(586)
				Float dy = (v->y - __this->y);		HX_STACK_VAR(dy,"dy");
				HX_STACK_LINE(586)
				return ((dx * dx) + (dy * dy));
			}
			return null();
		}
	};
	HX_STACK_LINE(585)
	return ::Math_obj::sqrt(_Function_1_1::Block(v,this));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,dist,return )

int FlxVector_obj::sign( ::flixel::util::FlxVector a,::flixel::util::FlxVector b){
	HX_STACK_PUSH("FlxVector::sign","flixel/util/FlxVector.hx",572);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_LINE(573)
	Float signFl = ((((a->x - this->x)) * ((b->y - this->y))) - (((a->y - this->y)) * ((b->x - this->x))));		HX_STACK_VAR(signFl,"signFl");
	HX_STACK_LINE(574)
	if (((signFl == (int)0))){
		HX_STACK_LINE(575)
		return (int)0;
	}
	HX_STACK_LINE(578)
	return ::Math_obj::round((Float(signFl) / Float(::Math_obj::abs(signFl))));
}


HX_DEFINE_DYNAMIC_FUNC2(FlxVector_obj,sign,return )

Float FlxVector_obj::degreesBetween( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::degreesBetween","flixel/util/FlxVector.hx",562);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static Float Block( ::flixel::util::FlxVector_obj *__this,::flixel::util::FlxVector &v){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",563);
			{
				struct _Function_2_1{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",563);
						{
							HX_STACK_LINE(563)
							::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(563)
							if (((vec == null()))){
								HX_STACK_LINE(563)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(563)
							vec->set_x(__this->x);
							HX_STACK_LINE(563)
							vec->set_y(__this->y);
							HX_STACK_LINE(563)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(563)
				::flixel::util::FlxVector_obj::_vector1 = _Function_2_1::Block(__this);
				struct _Function_2_2{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",563);
						{
							HX_STACK_LINE(563)
							::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector2;		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(563)
							if (((vec == null()))){
								HX_STACK_LINE(563)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(563)
							vec->set_x(__this->x);
							HX_STACK_LINE(563)
							vec->set_y(__this->y);
							HX_STACK_LINE(563)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(563)
				::flixel::util::FlxVector_obj::_vector2 = _Function_2_2::Block(__this);
				HX_STACK_LINE(563)
				if ((!(((::Math_obj::abs((((__this->x * __this->x) + (__this->y * __this->y)) - (int)1)) < (0.0000001 * 0.0000001)))))){
					HX_STACK_LINE(563)
					::flixel::util::FlxVector_obj::_vector1->normalize();
				}
				HX_STACK_LINE(563)
				if ((!(((::Math_obj::abs((((v->x * v->x) + (v->y * v->y)) - (int)1)) < (0.0000001 * 0.0000001)))))){
					HX_STACK_LINE(563)
					::flixel::util::FlxVector_obj::_vector2->normalize();
				}
				struct _Function_2_3{
					inline static Float Block( ){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",563);
						{
							HX_STACK_LINE(563)
							::flixel::util::FlxVector _this = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(_this,"_this");
							::flixel::util::FlxVector v1 = ::flixel::util::FlxVector_obj::_vector2;		HX_STACK_VAR(v1,"v1");
							HX_STACK_LINE(563)
							return ((_this->x * v1->x) + (_this->y * v1->y));
						}
						return null();
					}
				};
				HX_STACK_LINE(563)
				return ::Math_obj::acos(_Function_2_3::Block());
			}
			return null();
		}
	};
	HX_STACK_LINE(562)
	return (_Function_1_1::Block(this,v) * ::flixel::util::FlxAngle_obj::TO_DEG);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,degreesBetween,return )

Float FlxVector_obj::radiansBetween( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::radiansBetween","flixel/util/FlxVector.hx",541);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",542);
			{
				HX_STACK_LINE(542)
				::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(vec,"vec");
				HX_STACK_LINE(542)
				if (((vec == null()))){
					HX_STACK_LINE(542)
					vec = ::flixel::util::FlxVector_obj::__new(null(),null());
				}
				HX_STACK_LINE(542)
				vec->set_x(__this->x);
				HX_STACK_LINE(542)
				vec->set_y(__this->y);
				HX_STACK_LINE(542)
				return vec;
			}
			return null();
		}
	};
	HX_STACK_LINE(542)
	::flixel::util::FlxVector_obj::_vector1 = _Function_1_1::Block(this);
	struct _Function_1_2{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",543);
			{
				HX_STACK_LINE(543)
				::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector2;		HX_STACK_VAR(vec,"vec");
				HX_STACK_LINE(543)
				if (((vec == null()))){
					HX_STACK_LINE(543)
					vec = ::flixel::util::FlxVector_obj::__new(null(),null());
				}
				HX_STACK_LINE(543)
				vec->set_x(__this->x);
				HX_STACK_LINE(543)
				vec->set_y(__this->y);
				HX_STACK_LINE(543)
				return vec;
			}
			return null();
		}
	};
	HX_STACK_LINE(543)
	::flixel::util::FlxVector_obj::_vector2 = _Function_1_2::Block(this);
	HX_STACK_LINE(545)
	if ((!(((::Math_obj::abs((((this->x * this->x) + (this->y * this->y)) - (int)1)) < (0.0000001 * 0.0000001)))))){
		HX_STACK_LINE(546)
		::flixel::util::FlxVector_obj::_vector1->normalize();
	}
	HX_STACK_LINE(549)
	if ((!(((::Math_obj::abs((((v->x * v->x) + (v->y * v->y)) - (int)1)) < (0.0000001 * 0.0000001)))))){
		HX_STACK_LINE(550)
		::flixel::util::FlxVector_obj::_vector2->normalize();
	}
	struct _Function_1_3{
		inline static Float Block( ){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",553);
			{
				HX_STACK_LINE(553)
				::flixel::util::FlxVector _this = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(_this,"_this");
				::flixel::util::FlxVector v1 = ::flixel::util::FlxVector_obj::_vector2;		HX_STACK_VAR(v1,"v1");
				HX_STACK_LINE(553)
				return ((_this->x * v1->x) + (_this->y * v1->y));
			}
			return null();
		}
	};
	HX_STACK_LINE(553)
	return ::Math_obj::acos(_Function_1_3::Block());
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,radiansBetween,return )

::flixel::util::FlxVector FlxVector_obj::truncate( Float max){
	HX_STACK_PUSH("FlxVector::truncate","flixel/util/FlxVector.hx",530);
	HX_STACK_THIS(this);
	HX_STACK_ARG(max,"max");
	HX_STACK_LINE(531)
	{
		HX_STACK_LINE(531)
		Float l = ::Math_obj::min(max,::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y))));		HX_STACK_VAR(l,"l");
		HX_STACK_LINE(531)
		Float a = this->get_radians();		HX_STACK_VAR(a,"a");
		HX_STACK_LINE(531)
		this->set_x((l * ::Math_obj::cos(a)));
		HX_STACK_LINE(531)
		this->set_y((l * ::Math_obj::sin(a)));
		HX_STACK_LINE(531)
		l;
	}
	HX_STACK_LINE(532)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,truncate,return )

::flixel::util::FlxVector FlxVector_obj::findIntersectionInBounds( ::flixel::util::FlxVector a,::flixel::util::FlxVector b,::flixel::util::FlxVector v,::flixel::util::FlxVector intersection){
	HX_STACK_PUSH("FlxVector::findIntersectionInBounds","flixel/util/FlxVector.hx",509);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_ARG(v,"v");
	HX_STACK_ARG(intersection,"intersection");
	HX_STACK_LINE(510)
	if (((intersection == null()))){
		HX_STACK_LINE(511)
		intersection = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(515)
	Float t1 = this->ratio(a,b,v);		HX_STACK_VAR(t1,"t1");
	HX_STACK_LINE(516)
	Float t2 = v->ratio(b,a,hx::ObjectPtr<OBJ_>(this));		HX_STACK_VAR(t2,"t2");
	HX_STACK_LINE(517)
	if (((bool((bool((bool((bool((bool(!(::Math_obj::isNaN(t1))) && bool(!(::Math_obj::isNaN(t2))))) && bool((t1 > (int)0)))) && bool((t1 <= (int)1)))) && bool((t2 > (int)0)))) && bool((t2 <= (int)1))))){
		HX_STACK_LINE(518)
		return hx::TCast< ::flixel::util::FlxVector >::cast(intersection->set((a->x + (t1 * this->x)),(a->y + (t1 * this->y))));
	}
	HX_STACK_LINE(522)
	return hx::TCast< ::flixel::util::FlxVector >::cast(intersection->set(::Math_obj::NaN,::Math_obj::NaN));
}


HX_DEFINE_DYNAMIC_FUNC4(FlxVector_obj,findIntersectionInBounds,return )

::flixel::util::FlxVector FlxVector_obj::findIntersection( ::flixel::util::FlxVector a,::flixel::util::FlxVector b,::flixel::util::FlxVector v,::flixel::util::FlxVector intersection){
	HX_STACK_PUSH("FlxVector::findIntersection","flixel/util/FlxVector.hx",485);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_ARG(v,"v");
	HX_STACK_ARG(intersection,"intersection");
	HX_STACK_LINE(486)
	Float t = this->ratio(a,b,v);		HX_STACK_VAR(t,"t");
	HX_STACK_LINE(488)
	if (((intersection == null()))){
		HX_STACK_LINE(489)
		intersection = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(493)
	if ((::Math_obj::isNaN(t))){
		HX_STACK_LINE(494)
		return hx::TCast< ::flixel::util::FlxVector >::cast(intersection->set(::Math_obj::NaN,::Math_obj::NaN));
	}
	HX_STACK_LINE(498)
	return hx::TCast< ::flixel::util::FlxVector >::cast(intersection->set((a->x + (t * this->x)),(a->y + (t * this->y))));
}


HX_DEFINE_DYNAMIC_FUNC4(FlxVector_obj,findIntersection,return )

Float FlxVector_obj::ratio( ::flixel::util::FlxVector a,::flixel::util::FlxVector b,::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::ratio","flixel/util/FlxVector.hx",467);
	HX_STACK_THIS(this);
	HX_STACK_ARG(a,"a");
	HX_STACK_ARG(b,"b");
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(468)
	if (((::Math_obj::abs(((this->x * v->y) - (this->y * v->x))) < (0.0000001 * 0.0000001)))){
		HX_STACK_LINE(468)
		return ::Math_obj::NaN;
	}
	HX_STACK_LINE(469)
	if (((bool((((this->x * this->x) + (this->y * this->y)) < (0.0000001 * 0.0000001))) || bool((((v->x * v->x) + (v->y * v->y)) < (0.0000001 * 0.0000001)))))){
		HX_STACK_LINE(469)
		return ::Math_obj::NaN;
	}
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector &b){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",471);
			{
				HX_STACK_LINE(471)
				::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(vec,"vec");
				HX_STACK_LINE(471)
				if (((vec == null()))){
					HX_STACK_LINE(471)
					vec = ::flixel::util::FlxVector_obj::__new(null(),null());
				}
				HX_STACK_LINE(471)
				vec->set_x(b->x);
				HX_STACK_LINE(471)
				vec->set_y(b->y);
				HX_STACK_LINE(471)
				return vec;
			}
			return null();
		}
	};
	HX_STACK_LINE(471)
	::flixel::util::FlxVector_obj::_vector1 = _Function_1_1::Block(b);
	HX_STACK_LINE(472)
	{
		HX_STACK_LINE(472)
		::flixel::util::FlxVector _this = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(_this,"_this");
		HX_STACK_LINE(472)
		{
			HX_STACK_LINE(472)
			::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(472)
			_g->set_x((_g->x - a->x));
		}
		HX_STACK_LINE(472)
		{
			HX_STACK_LINE(472)
			::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(472)
			_g->set_y((_g->y - a->y));
		}
		HX_STACK_LINE(472)
		_this;
	}
	struct _Function_1_2{
		inline static Float Block( ::flixel::util::FlxVector &v){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",474);
			{
				HX_STACK_LINE(474)
				::flixel::util::FlxVector _this = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(474)
				return ((_this->y * v->x) + (-(_this->x) * v->y));
			}
			return null();
		}
	};
	HX_STACK_LINE(474)
	return (Float(_Function_1_2::Block(v)) / Float((((this->y * v->x) + (-(this->x) * v->y)))));
}


HX_DEFINE_DYNAMIC_FUNC3(FlxVector_obj,ratio,return )

Float FlxVector_obj::perpProduct( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::perpProduct","flixel/util/FlxVector.hx",455);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(455)
	return ((this->y * v->x) + (-(this->x) * v->y));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,perpProduct,return )

::flixel::util::FlxVector FlxVector_obj::projectToNormalized( ::flixel::util::FlxVector v,::flixel::util::FlxVector proj){
	HX_STACK_PUSH("FlxVector::projectToNormalized","flixel/util/FlxVector.hx",440);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_ARG(proj,"proj");
	HX_STACK_LINE(441)
	Float dp = ((this->x * v->x) + (this->y * v->y));		HX_STACK_VAR(dp,"dp");
	HX_STACK_LINE(443)
	if (((proj == null()))){
		HX_STACK_LINE(444)
		proj = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(448)
	return hx::TCast< ::flixel::util::FlxVector >::cast(proj->set((dp * v->x),(dp * v->y)));
}


HX_DEFINE_DYNAMIC_FUNC2(FlxVector_obj,projectToNormalized,return )

::flixel::util::FlxVector FlxVector_obj::projectTo( ::flixel::util::FlxVector v,::flixel::util::FlxVector proj){
	HX_STACK_PUSH("FlxVector::projectTo","flixel/util/FlxVector.hx",421);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_ARG(proj,"proj");
	HX_STACK_LINE(422)
	Float dp = ((this->x * v->x) + (this->y * v->y));		HX_STACK_VAR(dp,"dp");
	HX_STACK_LINE(423)
	Float lenSq = ((v->x * v->x) + (v->y * v->y));		HX_STACK_VAR(lenSq,"lenSq");
	HX_STACK_LINE(425)
	if (((proj == null()))){
		HX_STACK_LINE(426)
		proj = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(430)
	return hx::TCast< ::flixel::util::FlxVector >::cast(proj->set((Float((dp * v->x)) / Float(lenSq)),(Float((dp * v->y)) / Float(lenSq))));
}


HX_DEFINE_DYNAMIC_FUNC2(FlxVector_obj,projectTo,return )

::flixel::util::FlxVector FlxVector_obj::negateNew( ){
	HX_STACK_PUSH("FlxVector::negateNew","flixel/util/FlxVector.hx",409);
	HX_STACK_THIS(this);
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",410);
			{
				struct _Function_2_1{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",410);
						{
							HX_STACK_LINE(410)
							::flixel::util::FlxVector vec = null();		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(410)
							if (((vec == null()))){
								HX_STACK_LINE(410)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(410)
							vec->set_x(__this->x);
							HX_STACK_LINE(410)
							vec->set_y(__this->y);
							HX_STACK_LINE(410)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(410)
				::flixel::util::FlxVector _this = _Function_2_1::Block(__this);		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(410)
				{
					HX_STACK_LINE(410)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(410)
					_g->set_x((_g->x * (int)-1));
				}
				HX_STACK_LINE(410)
				{
					HX_STACK_LINE(410)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(410)
					_g->set_y((_g->y * (int)-1));
				}
				HX_STACK_LINE(410)
				return _this;
			}
			return null();
		}
	};
	HX_STACK_LINE(409)
	return _Function_1_1::Block(this);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,negateNew,return )

::flixel::util::FlxVector FlxVector_obj::negate( ){
	HX_STACK_PUSH("FlxVector::negate","flixel/util/FlxVector.hx",402);
	HX_STACK_THIS(this);
	HX_STACK_LINE(403)
	{
		HX_STACK_LINE(403)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(403)
		_g->set_x((_g->x * (int)-1));
	}
	HX_STACK_LINE(404)
	{
		HX_STACK_LINE(404)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(404)
		_g->set_y((_g->y * (int)-1));
	}
	HX_STACK_LINE(405)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,negate,return )

Float FlxVector_obj::get_ly( ){
	HX_STACK_PUSH("FlxVector::get_ly","flixel/util/FlxVector.hx",394);
	HX_STACK_THIS(this);
	HX_STACK_LINE(394)
	return -(this->x);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_ly,return )

Float FlxVector_obj::get_lx( ){
	HX_STACK_PUSH("FlxVector::get_lx","flixel/util/FlxVector.hx",384);
	HX_STACK_THIS(this);
	HX_STACK_LINE(384)
	return this->y;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_lx,return )

::flixel::util::FlxVector FlxVector_obj::leftNormal( ::flixel::util::FlxVector vec){
	HX_STACK_PUSH("FlxVector::leftNormal","flixel/util/FlxVector.hx",369);
	HX_STACK_THIS(this);
	HX_STACK_ARG(vec,"vec");
	HX_STACK_LINE(370)
	if (((vec == null()))){
		HX_STACK_LINE(371)
		vec = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(374)
	hx::TCast< ::flixel::util::FlxVector >::cast(vec->set(this->y,-(this->x)));
	HX_STACK_LINE(375)
	return vec;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,leftNormal,return )

Float FlxVector_obj::get_ry( ){
	HX_STACK_PUSH("FlxVector::get_ry","flixel/util/FlxVector.hx",361);
	HX_STACK_THIS(this);
	HX_STACK_LINE(361)
	return this->x;
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_ry,return )

Float FlxVector_obj::get_rx( ){
	HX_STACK_PUSH("FlxVector::get_rx","flixel/util/FlxVector.hx",351);
	HX_STACK_THIS(this);
	HX_STACK_LINE(351)
	return -(this->y);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_rx,return )

::flixel::util::FlxVector FlxVector_obj::rightNormal( ::flixel::util::FlxVector vec){
	HX_STACK_PUSH("FlxVector::rightNormal","flixel/util/FlxVector.hx",336);
	HX_STACK_THIS(this);
	HX_STACK_ARG(vec,"vec");
	HX_STACK_LINE(337)
	if (((vec == null()))){
		HX_STACK_LINE(338)
		vec = ::flixel::util::FlxVector_obj::__new(null(),null());
	}
	HX_STACK_LINE(341)
	hx::TCast< ::flixel::util::FlxVector >::cast(vec->set(-(this->y),this->x));
	HX_STACK_LINE(342)
	return vec;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,rightNormal,return )

::flixel::util::FlxVector FlxVector_obj::rotateWithTrig( Float sin,Float cos){
	HX_STACK_PUSH("FlxVector::rotateWithTrig","flixel/util/FlxVector.hx",325);
	HX_STACK_THIS(this);
	HX_STACK_ARG(sin,"sin");
	HX_STACK_ARG(cos,"cos");
	HX_STACK_LINE(326)
	Float tempX = this->x;		HX_STACK_VAR(tempX,"tempX");
	HX_STACK_LINE(327)
	this->set_x(((tempX * cos) - (this->y * sin)));
	HX_STACK_LINE(328)
	this->set_y(((tempX * sin) + (this->y * cos)));
	HX_STACK_LINE(329)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC2(FlxVector_obj,rotateWithTrig,return )

::flixel::util::FlxVector FlxVector_obj::rotateByDegrees( Float degs){
	HX_STACK_PUSH("FlxVector::rotateByDegrees","flixel/util/FlxVector.hx",314);
	HX_STACK_THIS(this);
	HX_STACK_ARG(degs,"degs");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( Float &degs,::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",315);
			{
				HX_STACK_LINE(315)
				Float rads = (degs * ::flixel::util::FlxAngle_obj::TO_RAD);		HX_STACK_VAR(rads,"rads");
				HX_STACK_LINE(315)
				Float s = ::Math_obj::sin(rads);		HX_STACK_VAR(s,"s");
				HX_STACK_LINE(315)
				Float c = ::Math_obj::cos(rads);		HX_STACK_VAR(c,"c");
				HX_STACK_LINE(315)
				Float tempX = __this->x;		HX_STACK_VAR(tempX,"tempX");
				HX_STACK_LINE(315)
				__this->set_x(((tempX * c) - (__this->y * s)));
				HX_STACK_LINE(315)
				__this->set_y(((tempX * s) + (__this->y * c)));
				HX_STACK_LINE(315)
				return __this;
			}
			return null();
		}
	};
	HX_STACK_LINE(314)
	return _Function_1_1::Block(degs,this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,rotateByDegrees,return )

::flixel::util::FlxVector FlxVector_obj::rotateByRadians( Float rads){
	HX_STACK_PUSH("FlxVector::rotateByRadians","flixel/util/FlxVector.hx",297);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rads,"rads");
	HX_STACK_LINE(298)
	Float s = ::Math_obj::sin(rads);		HX_STACK_VAR(s,"s");
	HX_STACK_LINE(299)
	Float c = ::Math_obj::cos(rads);		HX_STACK_VAR(c,"c");
	HX_STACK_LINE(300)
	Float tempX = this->x;		HX_STACK_VAR(tempX,"tempX");
	HX_STACK_LINE(302)
	this->set_x(((tempX * c) - (this->y * s)));
	HX_STACK_LINE(303)
	this->set_y(((tempX * s) + (this->y * c)));
	HX_STACK_LINE(305)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,rotateByRadians,return )

Float FlxVector_obj::set_radians( Float rads){
	HX_STACK_PUSH("FlxVector::set_radians","flixel/util/FlxVector.hx",283);
	HX_STACK_THIS(this);
	HX_STACK_ARG(rads,"rads");
	HX_STACK_LINE(284)
	Float len = ::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)));		HX_STACK_VAR(len,"len");
	HX_STACK_LINE(286)
	this->set_x((len * ::Math_obj::cos(rads)));
	HX_STACK_LINE(287)
	this->set_y((len * ::Math_obj::sin(rads)));
	HX_STACK_LINE(288)
	return rads;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,set_radians,return )

Float FlxVector_obj::get_radians( ){
	HX_STACK_PUSH("FlxVector::get_radians","flixel/util/FlxVector.hx",276);
	HX_STACK_THIS(this);
	HX_STACK_LINE(277)
	if (((bool((::Math_obj::abs(this->x) < 0.0000001)) && bool((::Math_obj::abs(this->y) < 0.0000001))))){
		HX_STACK_LINE(277)
		return (int)0;
	}
	HX_STACK_LINE(279)
	return ::Math_obj::atan2(this->y,this->x);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_radians,return )

Float FlxVector_obj::set_degrees( Float degs){
	HX_STACK_PUSH("FlxVector::set_degrees","flixel/util/FlxVector.hx",265);
	HX_STACK_THIS(this);
	HX_STACK_ARG(degs,"degs");
	HX_STACK_LINE(266)
	{
		HX_STACK_LINE(266)
		Float rads = (degs * ::flixel::util::FlxAngle_obj::TO_RAD);		HX_STACK_VAR(rads,"rads");
		HX_STACK_LINE(266)
		Float len = ::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)));		HX_STACK_VAR(len,"len");
		HX_STACK_LINE(266)
		this->set_x((len * ::Math_obj::cos(rads)));
		HX_STACK_LINE(266)
		this->set_y((len * ::Math_obj::sin(rads)));
		HX_STACK_LINE(266)
		rads;
	}
	HX_STACK_LINE(267)
	return degs;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,set_degrees,return )

Float FlxVector_obj::get_degrees( ){
	HX_STACK_PUSH("FlxVector::get_degrees","flixel/util/FlxVector.hx",260);
	HX_STACK_THIS(this);
	HX_STACK_LINE(260)
	return (this->get_radians() * ::flixel::util::FlxAngle_obj::TO_DEG);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_degrees,return )

Float FlxVector_obj::get_lengthSquared( ){
	HX_STACK_PUSH("FlxVector::get_lengthSquared","flixel/util/FlxVector.hx",250);
	HX_STACK_THIS(this);
	HX_STACK_LINE(250)
	return ((this->x * this->x) + (this->y * this->y));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_lengthSquared,return )

Float FlxVector_obj::set_length( Float l){
	HX_STACK_PUSH("FlxVector::set_length","flixel/util/FlxVector.hx",237);
	HX_STACK_THIS(this);
	HX_STACK_ARG(l,"l");
	HX_STACK_LINE(238)
	Float a = this->get_radians();		HX_STACK_VAR(a,"a");
	HX_STACK_LINE(239)
	this->set_x((l * ::Math_obj::cos(a)));
	HX_STACK_LINE(240)
	this->set_y((l * ::Math_obj::sin(a)));
	HX_STACK_LINE(241)
	return l;
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,set_length,return )

Float FlxVector_obj::get_length( ){
	HX_STACK_PUSH("FlxVector::get_length","flixel/util/FlxVector.hx",232);
	HX_STACK_THIS(this);
	HX_STACK_LINE(232)
	return ::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_length,return )

bool FlxVector_obj::equals( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::equals","flixel/util/FlxVector.hx",222);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(222)
	return (bool((::Math_obj::abs((this->x - v->x)) < 0.0000001)) && bool((::Math_obj::abs((this->y - v->y)) < 0.0000001)));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,equals,return )

bool FlxVector_obj::isNormalized( ){
	HX_STACK_PUSH("FlxVector::isNormalized","flixel/util/FlxVector.hx",213);
	HX_STACK_THIS(this);
	HX_STACK_LINE(213)
	return (::Math_obj::abs((((this->x * this->x) + (this->y * this->y)) - (int)1)) < (0.0000001 * 0.0000001));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,isNormalized,return )

Float FlxVector_obj::get_dy( ){
	HX_STACK_PUSH("FlxVector::get_dy","flixel/util/FlxVector.hx",203);
	HX_STACK_THIS(this);
	HX_STACK_LINE(204)
	if (((bool((::Math_obj::abs(this->x) < 0.0000001)) && bool((::Math_obj::abs(this->y) < 0.0000001))))){
		HX_STACK_LINE(204)
		return (int)0;
	}
	HX_STACK_LINE(206)
	return (Float(this->y) / Float(::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)))));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_dy,return )

Float FlxVector_obj::get_dx( ){
	HX_STACK_PUSH("FlxVector::get_dx","flixel/util/FlxVector.hx",191);
	HX_STACK_THIS(this);
	HX_STACK_LINE(192)
	if (((bool((::Math_obj::abs(this->x) < 0.0000001)) && bool((::Math_obj::abs(this->y) < 0.0000001))))){
		HX_STACK_LINE(192)
		return (int)0;
	}
	HX_STACK_LINE(194)
	return (Float(this->x) / Float(::Math_obj::sqrt(((this->x * this->x) + (this->y * this->y)))));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,get_dx,return )

::flixel::util::FlxVector FlxVector_obj::normalize( ){
	HX_STACK_PUSH("FlxVector::normalize","flixel/util/FlxVector.hx",176);
	HX_STACK_THIS(this);
	HX_STACK_LINE(177)
	if (((bool((::Math_obj::abs(this->x) < 0.0000001)) && bool((::Math_obj::abs(this->y) < 0.0000001))))){
		HX_STACK_LINE(179)
		this->set_x((int)1);
		HX_STACK_LINE(180)
		return hx::ObjectPtr<OBJ_>(this);
	}
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",182);
			{
				HX_STACK_LINE(182)
				Float k = (Float((int)1) / Float(::Math_obj::sqrt(((__this->x * __this->x) + (__this->y * __this->y)))));		HX_STACK_VAR(k,"k");
				HX_STACK_LINE(182)
				{
					HX_STACK_LINE(182)
					::flixel::util::FlxVector _g = __this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(182)
					_g->set_x((_g->x * k));
				}
				HX_STACK_LINE(182)
				{
					HX_STACK_LINE(182)
					::flixel::util::FlxVector _g = __this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(182)
					_g->set_y((_g->y * k));
				}
				HX_STACK_LINE(182)
				return __this;
			}
			return null();
		}
	};
	HX_STACK_LINE(182)
	return _Function_1_1::Block(this);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,normalize,return )

::flixel::util::FlxVector FlxVector_obj::zero( ){
	HX_STACK_PUSH("FlxVector::zero","flixel/util/FlxVector.hx",167);
	HX_STACK_THIS(this);
	HX_STACK_LINE(168)
	this->set_x(this->set_y((int)0));
	HX_STACK_LINE(169)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,zero,return )

bool FlxVector_obj::isZero( ){
	HX_STACK_PUSH("FlxVector::isZero","flixel/util/FlxVector.hx",159);
	HX_STACK_THIS(this);
	HX_STACK_LINE(159)
	return (bool((::Math_obj::abs(this->x) < 0.0000001)) && bool((::Math_obj::abs(this->y) < 0.0000001)));
}


HX_DEFINE_DYNAMIC_FUNC0(FlxVector_obj,isZero,return )

bool FlxVector_obj::isParallel( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::isParallel","flixel/util/FlxVector.hx",150);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(150)
	return (::Math_obj::abs(((this->x * v->y) - (this->y * v->x))) < (0.0000001 * 0.0000001));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,isParallel,return )

Float FlxVector_obj::crossProductLength( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::crossProductLength","flixel/util/FlxVector.hx",140);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(140)
	return ((this->x * v->y) - (this->y * v->x));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,crossProductLength,return )

bool FlxVector_obj::isPerpendicular( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::isPerpendicular","flixel/util/FlxVector.hx",130);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(130)
	return (::Math_obj::abs(((this->x * v->x) + (this->y * v->y))) < (0.0000001 * 0.0000001));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,isPerpendicular,return )

Float FlxVector_obj::dotProdWithNormalizing( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::dotProdWithNormalizing","flixel/util/FlxVector.hx",119);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector &v){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",120);
			{
				HX_STACK_LINE(120)
				::flixel::util::FlxVector vec = ::flixel::util::FlxVector_obj::_vector1;		HX_STACK_VAR(vec,"vec");
				HX_STACK_LINE(120)
				if (((vec == null()))){
					HX_STACK_LINE(120)
					vec = ::flixel::util::FlxVector_obj::__new(null(),null());
				}
				HX_STACK_LINE(120)
				vec->set_x(v->x);
				HX_STACK_LINE(120)
				vec->set_y(v->y);
				HX_STACK_LINE(120)
				return vec;
			}
			return null();
		}
	};
	HX_STACK_LINE(120)
	::flixel::util::FlxVector normalized = (_Function_1_1::Block(v))->normalize();		HX_STACK_VAR(normalized,"normalized");
	HX_STACK_LINE(121)
	return ((this->x * normalized->x) + (this->y * normalized->y));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,dotProdWithNormalizing,return )

Float FlxVector_obj::dotProduct( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::dotProduct","flixel/util/FlxVector.hx",109);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(109)
	return ((this->x * v->x) + (this->y * v->y));
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,dotProduct,return )

::flixel::util::FlxVector FlxVector_obj::substractNew( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::substractNew","flixel/util/FlxVector.hx",99);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this,::flixel::util::FlxVector &v){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",100);
			{
				struct _Function_2_1{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",100);
						{
							HX_STACK_LINE(100)
							::flixel::util::FlxVector vec = null();		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(100)
							if (((vec == null()))){
								HX_STACK_LINE(100)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(100)
							vec->set_x(__this->x);
							HX_STACK_LINE(100)
							vec->set_y(__this->y);
							HX_STACK_LINE(100)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(100)
				::flixel::util::FlxVector _this = _Function_2_1::Block(__this);		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(100)
				{
					HX_STACK_LINE(100)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(100)
					_g->set_x((_g->x - v->x));
				}
				HX_STACK_LINE(100)
				{
					HX_STACK_LINE(100)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(100)
					_g->set_y((_g->y - v->y));
				}
				HX_STACK_LINE(100)
				return _this;
			}
			return null();
		}
	};
	HX_STACK_LINE(99)
	return _Function_1_1::Block(this,v);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,substractNew,return )

::flixel::util::FlxVector FlxVector_obj::substract( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::substract","flixel/util/FlxVector.hx",87);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(88)
	{
		HX_STACK_LINE(88)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(88)
		_g->set_x((_g->x - v->x));
	}
	HX_STACK_LINE(89)
	{
		HX_STACK_LINE(89)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(89)
		_g->set_y((_g->y - v->y));
	}
	HX_STACK_LINE(90)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,substract,return )

::flixel::util::FlxVector FlxVector_obj::addNew( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::addNew","flixel/util/FlxVector.hx",77);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this,::flixel::util::FlxVector &v){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",78);
			{
				struct _Function_2_1{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",78);
						{
							HX_STACK_LINE(78)
							::flixel::util::FlxVector vec = null();		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(78)
							if (((vec == null()))){
								HX_STACK_LINE(78)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(78)
							vec->set_x(__this->x);
							HX_STACK_LINE(78)
							vec->set_y(__this->y);
							HX_STACK_LINE(78)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(78)
				::flixel::util::FlxVector _this = _Function_2_1::Block(__this);		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(78)
				{
					HX_STACK_LINE(78)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(78)
					_g->set_x((_g->x + v->x));
				}
				HX_STACK_LINE(78)
				{
					HX_STACK_LINE(78)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(78)
					_g->set_y((_g->y + v->y));
				}
				HX_STACK_LINE(78)
				return _this;
			}
			return null();
		}
	};
	HX_STACK_LINE(77)
	return _Function_1_1::Block(this,v);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,addNew,return )

::flixel::util::FlxVector FlxVector_obj::add( ::flixel::util::FlxVector v){
	HX_STACK_PUSH("FlxVector::add","flixel/util/FlxVector.hx",65);
	HX_STACK_THIS(this);
	HX_STACK_ARG(v,"v");
	HX_STACK_LINE(66)
	{
		HX_STACK_LINE(66)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(66)
		_g->set_x((_g->x + v->x));
	}
	HX_STACK_LINE(67)
	{
		HX_STACK_LINE(67)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(67)
		_g->set_y((_g->y + v->y));
	}
	HX_STACK_LINE(68)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,add,return )

::flixel::util::FlxVector FlxVector_obj::scaleNew( Float k){
	HX_STACK_PUSH("FlxVector::scaleNew","flixel/util/FlxVector.hx",55);
	HX_STACK_THIS(this);
	HX_STACK_ARG(k,"k");
	struct _Function_1_1{
		inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this,Float &k){
			HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",56);
			{
				struct _Function_2_1{
					inline static ::flixel::util::FlxVector Block( ::flixel::util::FlxVector_obj *__this){
						HX_STACK_PUSH("*::closure","flixel/util/FlxVector.hx",56);
						{
							HX_STACK_LINE(56)
							::flixel::util::FlxVector vec = null();		HX_STACK_VAR(vec,"vec");
							HX_STACK_LINE(56)
							if (((vec == null()))){
								HX_STACK_LINE(56)
								vec = ::flixel::util::FlxVector_obj::__new(null(),null());
							}
							HX_STACK_LINE(56)
							vec->set_x(__this->x);
							HX_STACK_LINE(56)
							vec->set_y(__this->y);
							HX_STACK_LINE(56)
							return vec;
						}
						return null();
					}
				};
				HX_STACK_LINE(56)
				::flixel::util::FlxVector _this = _Function_2_1::Block(__this);		HX_STACK_VAR(_this,"_this");
				HX_STACK_LINE(56)
				{
					HX_STACK_LINE(56)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(56)
					_g->set_x((_g->x * k));
				}
				HX_STACK_LINE(56)
				{
					HX_STACK_LINE(56)
					::flixel::util::FlxVector _g = _this;		HX_STACK_VAR(_g,"_g");
					HX_STACK_LINE(56)
					_g->set_y((_g->y * k));
				}
				HX_STACK_LINE(56)
				return _this;
			}
			return null();
		}
	};
	HX_STACK_LINE(55)
	return _Function_1_1::Block(this,k);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,scaleNew,return )

::flixel::util::FlxVector FlxVector_obj::scale( Float k){
	HX_STACK_PUSH("FlxVector::scale","flixel/util/FlxVector.hx",43);
	HX_STACK_THIS(this);
	HX_STACK_ARG(k,"k");
	HX_STACK_LINE(44)
	{
		HX_STACK_LINE(44)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(44)
		_g->set_x((_g->x * k));
	}
	HX_STACK_LINE(45)
	{
		HX_STACK_LINE(45)
		::flixel::util::FlxVector _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(45)
		_g->set_y((_g->y * k));
	}
	HX_STACK_LINE(46)
	return hx::ObjectPtr<OBJ_>(this);
}


HX_DEFINE_DYNAMIC_FUNC1(FlxVector_obj,scale,return )

::flixel::util::FlxPoint FlxVector_obj::set( hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y){
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
	HX_STACK_PUSH("FlxVector::set","flixel/util/FlxVector.hx",31);
	HX_STACK_THIS(this);
	HX_STACK_ARG(X,"X");
	HX_STACK_ARG(Y,"Y");
{
		HX_STACK_LINE(32)
		this->set_x(X);
		HX_STACK_LINE(33)
		this->set_y(Y);
		HX_STACK_LINE(34)
		return hx::ObjectPtr<OBJ_>(this);
	}
}


Float FlxVector_obj::EPSILON;

Float FlxVector_obj::EPSILON_SQUARED;

::flixel::util::FlxVector FlxVector_obj::_vector1;

::flixel::util::FlxVector FlxVector_obj::_vector2;

::flixel::util::FlxVector FlxVector_obj::_vector3;


FlxVector_obj::FlxVector_obj()
{
}

void FlxVector_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxVector);
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void FlxVector_obj::__Visit(HX_VISIT_PARAMS)
{
	super::__Visit(HX_VISIT_ARG);
}

Dynamic FlxVector_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 2:
		if (HX_FIELD_EQ(inName,"ly") ) { return get_ly(); }
		if (HX_FIELD_EQ(inName,"lx") ) { return get_lx(); }
		if (HX_FIELD_EQ(inName,"ry") ) { return get_ry(); }
		if (HX_FIELD_EQ(inName,"rx") ) { return get_rx(); }
		if (HX_FIELD_EQ(inName,"dy") ) { return get_dy(); }
		if (HX_FIELD_EQ(inName,"dx") ) { return get_dx(); }
		break;
	case 3:
		if (HX_FIELD_EQ(inName,"add") ) { return add_dyn(); }
		if (HX_FIELD_EQ(inName,"set") ) { return set_dyn(); }
		break;
	case 4:
		if (HX_FIELD_EQ(inName,"dist") ) { return dist_dyn(); }
		if (HX_FIELD_EQ(inName,"sign") ) { return sign_dyn(); }
		if (HX_FIELD_EQ(inName,"zero") ) { return zero_dyn(); }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"clone") ) { return clone_dyn(); }
		if (HX_FIELD_EQ(inName,"ratio") ) { return ratio_dyn(); }
		if (HX_FIELD_EQ(inName,"scale") ) { return scale_dyn(); }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"bounce") ) { return bounce_dyn(); }
		if (HX_FIELD_EQ(inName,"negate") ) { return negate_dyn(); }
		if (HX_FIELD_EQ(inName,"get_ly") ) { return get_ly_dyn(); }
		if (HX_FIELD_EQ(inName,"get_lx") ) { return get_lx_dyn(); }
		if (HX_FIELD_EQ(inName,"get_ry") ) { return get_ry_dyn(); }
		if (HX_FIELD_EQ(inName,"get_rx") ) { return get_rx_dyn(); }
		if (HX_FIELD_EQ(inName,"length") ) { return get_length(); }
		if (HX_FIELD_EQ(inName,"equals") ) { return equals_dyn(); }
		if (HX_FIELD_EQ(inName,"get_dy") ) { return get_dy_dyn(); }
		if (HX_FIELD_EQ(inName,"get_dx") ) { return get_dx_dyn(); }
		if (HX_FIELD_EQ(inName,"isZero") ) { return isZero_dyn(); }
		if (HX_FIELD_EQ(inName,"addNew") ) { return addNew_dyn(); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"isValid") ) { return isValid_dyn(); }
		if (HX_FIELD_EQ(inName,"radians") ) { return get_radians(); }
		if (HX_FIELD_EQ(inName,"degrees") ) { return get_degrees(); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_vector1") ) { return _vector1; }
		if (HX_FIELD_EQ(inName,"_vector2") ) { return _vector2; }
		if (HX_FIELD_EQ(inName,"_vector3") ) { return _vector3; }
		if (HX_FIELD_EQ(inName,"truncate") ) { return truncate_dyn(); }
		if (HX_FIELD_EQ(inName,"scaleNew") ) { return scaleNew_dyn(); }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"projectTo") ) { return projectTo_dyn(); }
		if (HX_FIELD_EQ(inName,"negateNew") ) { return negateNew_dyn(); }
		if (HX_FIELD_EQ(inName,"normalize") ) { return normalize_dyn(); }
		if (HX_FIELD_EQ(inName,"substract") ) { return substract_dyn(); }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"leftNormal") ) { return leftNormal_dyn(); }
		if (HX_FIELD_EQ(inName,"set_length") ) { return set_length_dyn(); }
		if (HX_FIELD_EQ(inName,"get_length") ) { return get_length_dyn(); }
		if (HX_FIELD_EQ(inName,"isParallel") ) { return isParallel_dyn(); }
		if (HX_FIELD_EQ(inName,"dotProduct") ) { return dotProduct_dyn(); }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"distSquared") ) { return distSquared_dyn(); }
		if (HX_FIELD_EQ(inName,"perpProduct") ) { return perpProduct_dyn(); }
		if (HX_FIELD_EQ(inName,"rightNormal") ) { return rightNormal_dyn(); }
		if (HX_FIELD_EQ(inName,"set_radians") ) { return set_radians_dyn(); }
		if (HX_FIELD_EQ(inName,"get_radians") ) { return get_radians_dyn(); }
		if (HX_FIELD_EQ(inName,"set_degrees") ) { return set_degrees_dyn(); }
		if (HX_FIELD_EQ(inName,"get_degrees") ) { return get_degrees_dyn(); }
		break;
	case 12:
		if (HX_FIELD_EQ(inName,"isNormalized") ) { return isNormalized_dyn(); }
		if (HX_FIELD_EQ(inName,"substractNew") ) { return substractNew_dyn(); }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"lengthSquared") ) { return get_lengthSquared(); }
		break;
	case 14:
		if (HX_FIELD_EQ(inName,"degreesBetween") ) { return degreesBetween_dyn(); }
		if (HX_FIELD_EQ(inName,"radiansBetween") ) { return radiansBetween_dyn(); }
		if (HX_FIELD_EQ(inName,"rotateWithTrig") ) { return rotateWithTrig_dyn(); }
		break;
	case 15:
		if (HX_FIELD_EQ(inName,"rotateByDegrees") ) { return rotateByDegrees_dyn(); }
		if (HX_FIELD_EQ(inName,"rotateByRadians") ) { return rotateByRadians_dyn(); }
		if (HX_FIELD_EQ(inName,"isPerpendicular") ) { return isPerpendicular_dyn(); }
		break;
	case 16:
		if (HX_FIELD_EQ(inName,"findIntersection") ) { return findIntersection_dyn(); }
		break;
	case 17:
		if (HX_FIELD_EQ(inName,"get_lengthSquared") ) { return get_lengthSquared_dyn(); }
		break;
	case 18:
		if (HX_FIELD_EQ(inName,"bounceWithFriction") ) { return bounceWithFriction_dyn(); }
		if (HX_FIELD_EQ(inName,"crossProductLength") ) { return crossProductLength_dyn(); }
		break;
	case 19:
		if (HX_FIELD_EQ(inName,"projectToNormalized") ) { return projectToNormalized_dyn(); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"dotProdWithNormalizing") ) { return dotProdWithNormalizing_dyn(); }
		break;
	case 24:
		if (HX_FIELD_EQ(inName,"findIntersectionInBounds") ) { return findIntersectionInBounds_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxVector_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 6:
		if (HX_FIELD_EQ(inName,"length") ) { return set_length(inValue); }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"radians") ) { return set_radians(inValue); }
		if (HX_FIELD_EQ(inName,"degrees") ) { return set_degrees(inValue); }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"_vector1") ) { _vector1=inValue.Cast< ::flixel::util::FlxVector >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_vector2") ) { _vector2=inValue.Cast< ::flixel::util::FlxVector >(); return inValue; }
		if (HX_FIELD_EQ(inName,"_vector3") ) { _vector3=inValue.Cast< ::flixel::util::FlxVector >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxVector_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("ly"));
	outFields->push(HX_CSTRING("lx"));
	outFields->push(HX_CSTRING("ry"));
	outFields->push(HX_CSTRING("rx"));
	outFields->push(HX_CSTRING("radians"));
	outFields->push(HX_CSTRING("degrees"));
	outFields->push(HX_CSTRING("lengthSquared"));
	outFields->push(HX_CSTRING("length"));
	outFields->push(HX_CSTRING("dy"));
	outFields->push(HX_CSTRING("dx"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("EPSILON"),
	HX_CSTRING("EPSILON_SQUARED"),
	HX_CSTRING("_vector1"),
	HX_CSTRING("_vector2"),
	HX_CSTRING("_vector3"),
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("clone"),
	HX_CSTRING("isValid"),
	HX_CSTRING("bounceWithFriction"),
	HX_CSTRING("bounce"),
	HX_CSTRING("distSquared"),
	HX_CSTRING("dist"),
	HX_CSTRING("sign"),
	HX_CSTRING("degreesBetween"),
	HX_CSTRING("radiansBetween"),
	HX_CSTRING("truncate"),
	HX_CSTRING("findIntersectionInBounds"),
	HX_CSTRING("findIntersection"),
	HX_CSTRING("ratio"),
	HX_CSTRING("perpProduct"),
	HX_CSTRING("projectToNormalized"),
	HX_CSTRING("projectTo"),
	HX_CSTRING("negateNew"),
	HX_CSTRING("negate"),
	HX_CSTRING("get_ly"),
	HX_CSTRING("get_lx"),
	HX_CSTRING("leftNormal"),
	HX_CSTRING("get_ry"),
	HX_CSTRING("get_rx"),
	HX_CSTRING("rightNormal"),
	HX_CSTRING("rotateWithTrig"),
	HX_CSTRING("rotateByDegrees"),
	HX_CSTRING("rotateByRadians"),
	HX_CSTRING("set_radians"),
	HX_CSTRING("get_radians"),
	HX_CSTRING("set_degrees"),
	HX_CSTRING("get_degrees"),
	HX_CSTRING("get_lengthSquared"),
	HX_CSTRING("set_length"),
	HX_CSTRING("get_length"),
	HX_CSTRING("equals"),
	HX_CSTRING("isNormalized"),
	HX_CSTRING("get_dy"),
	HX_CSTRING("get_dx"),
	HX_CSTRING("normalize"),
	HX_CSTRING("zero"),
	HX_CSTRING("isZero"),
	HX_CSTRING("isParallel"),
	HX_CSTRING("crossProductLength"),
	HX_CSTRING("isPerpendicular"),
	HX_CSTRING("dotProdWithNormalizing"),
	HX_CSTRING("dotProduct"),
	HX_CSTRING("substractNew"),
	HX_CSTRING("substract"),
	HX_CSTRING("addNew"),
	HX_CSTRING("add"),
	HX_CSTRING("scaleNew"),
	HX_CSTRING("scale"),
	HX_CSTRING("set"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxVector_obj::__mClass,"__mClass");
	HX_MARK_MEMBER_NAME(FlxVector_obj::EPSILON,"EPSILON");
	HX_MARK_MEMBER_NAME(FlxVector_obj::EPSILON_SQUARED,"EPSILON_SQUARED");
	HX_MARK_MEMBER_NAME(FlxVector_obj::_vector1,"_vector1");
	HX_MARK_MEMBER_NAME(FlxVector_obj::_vector2,"_vector2");
	HX_MARK_MEMBER_NAME(FlxVector_obj::_vector3,"_vector3");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxVector_obj::__mClass,"__mClass");
	HX_VISIT_MEMBER_NAME(FlxVector_obj::EPSILON,"EPSILON");
	HX_VISIT_MEMBER_NAME(FlxVector_obj::EPSILON_SQUARED,"EPSILON_SQUARED");
	HX_VISIT_MEMBER_NAME(FlxVector_obj::_vector1,"_vector1");
	HX_VISIT_MEMBER_NAME(FlxVector_obj::_vector2,"_vector2");
	HX_VISIT_MEMBER_NAME(FlxVector_obj::_vector3,"_vector3");
};

Class FlxVector_obj::__mClass;

void FlxVector_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.util.FlxVector"), hx::TCanCast< FlxVector_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxVector_obj::__boot()
{
	EPSILON= 0.0000001;
	EPSILON_SQUARED= (0.0000001 * 0.0000001);
	_vector1= ::flixel::util::FlxVector_obj::__new(null(),null());
	_vector2= ::flixel::util::FlxVector_obj::__new(null(),null());
	_vector3= ::flixel::util::FlxVector_obj::__new(null(),null());
}

} // end namespace flixel
} // end namespace util
