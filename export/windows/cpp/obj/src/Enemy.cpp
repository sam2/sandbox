#include <hxcpp.h>

#ifndef INCLUDED_Character
#include <Character.h>
#endif
#ifndef INCLUDED_EStates
#include <EStates.h>
#endif
#ifndef INCLUDED_Enemy
#include <Enemy.h>
#endif
#ifndef INCLUDED_Player
#include <Player.h>
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
#ifndef INCLUDED_flixel_tile_FlxTilemap
#include <flixel/tile/FlxTilemap.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPath
#include <flixel/util/FlxPath.h>
#endif
#ifndef INCLUDED_flixel_util_FlxPoint
#include <flixel/util/FlxPoint.h>
#endif
#ifndef INCLUDED_flixel_util_FlxTimer
#include <flixel/util/FlxTimer.h>
#endif
#ifndef INCLUDED_flixel_util_FlxVector
#include <flixel/util/FlxVector.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif

Void Enemy_obj::__construct(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,::Player p,::flixel::tile::FlxTilemap lvl,Dynamic SimpleGraphic)
{
HX_STACK_PUSH("Enemy::new","Enemy.hx",23);
Float X = __o_X.Default(0);
Float Y = __o_Y.Default(0);
{
	HX_STACK_LINE(55)
	this->stunned = false;
	HX_STACK_LINE(31)
	this->leashDistance = (int)200;
	HX_STACK_LINE(30)
	this->walkSpeed = (int)20;
	HX_STACK_LINE(29)
	this->moveSpeed = (int)50;
	HX_STACK_LINE(28)
	this->attackRange = (int)64;
	HX_STACK_LINE(27)
	this->sightRange = (int)100;
	HX_STACK_LINE(45)
	super::__construct(Name,X,Y,JsonPath,SimpleGraphic);
	HX_STACK_LINE(46)
	this->startPos = ::flixel::util::FlxPoint_obj::__new(X,Y);
	HX_STACK_LINE(47)
	this->player = p;
	HX_STACK_LINE(48)
	this->level = lvl;
	HX_STACK_LINE(49)
	this->state = ::EStates_obj::idle;
	HX_STACK_LINE(51)
	this->path = ::flixel::util::FlxPath_obj::recycle();
	HX_STACK_LINE(52)
	this->path->usePooling = false;
}
;
	return null();
}

Enemy_obj::~Enemy_obj() { }

Dynamic Enemy_obj::__CreateEmpty() { return  new Enemy_obj; }
hx::ObjectPtr< Enemy_obj > Enemy_obj::__new(::String Name,hx::Null< Float >  __o_X,hx::Null< Float >  __o_Y,::String JsonPath,::Player p,::flixel::tile::FlxTilemap lvl,Dynamic SimpleGraphic)
{  hx::ObjectPtr< Enemy_obj > result = new Enemy_obj();
	result->__construct(Name,__o_X,__o_Y,JsonPath,p,lvl,SimpleGraphic);
	return result;}

Dynamic Enemy_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< Enemy_obj > result = new Enemy_obj();
	result->__construct(inArgs[0],inArgs[1],inArgs[2],inArgs[3],inArgs[4],inArgs[5],inArgs[6]);
	return result;}

Void Enemy_obj::unstun( ::flixel::util::FlxTimer Timer){
{
		HX_STACK_PUSH("Enemy::unstun","Enemy.hx",170);
		HX_STACK_THIS(this);
		HX_STACK_ARG(Timer,"Timer");
		HX_STACK_LINE(170)
		this->stunned = false;
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Enemy_obj,unstun,(void))

Void Enemy_obj::stun( Float duration){
{
		HX_STACK_PUSH("Enemy::stun","Enemy.hx",162);
		HX_STACK_THIS(this);
		HX_STACK_ARG(duration,"duration");
		HX_STACK_LINE(163)
		this->stunned = true;
		HX_STACK_LINE(164)
		this->path->abort();
		HX_STACK_LINE(165)
		this->destination = null();
		HX_STACK_LINE(166)
		::flixel::util::FlxTimer_obj::start(duration,this->unstun_dyn(),null());
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC1(Enemy_obj,stun,(void))

Void Enemy_obj::goHome( ){
{
		HX_STACK_PUSH("Enemy::goHome","Enemy.hx",143);
		HX_STACK_THIS(this);
		HX_STACK_LINE(144)
		this->set_color((int)11513775);
		HX_STACK_LINE(145)
		if (((this->destination == null()))){
			HX_STACK_LINE(147)
			this->destination = this->startPos;
			HX_STACK_LINE(148)
			Array< ::Dynamic > pathPoints = this->level->findPath(::flixel::util::FlxPoint_obj::__new(this->x,this->y),this->destination,null(),null(),null());		HX_STACK_VAR(pathPoints,"pathPoints");
			HX_STACK_LINE(149)
			if (((pathPoints != null()))){
				HX_STACK_LINE(150)
				this->path->run(hx::ObjectPtr<OBJ_>(this),pathPoints,this->moveSpeed,null(),null(),null());
			}
		}
		HX_STACK_LINE(154)
		if ((this->path->finished)){
			HX_STACK_LINE(156)
			this->destination = null();
			HX_STACK_LINE(157)
			this->state = ::EStates_obj::idle;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Enemy_obj,goHome,(void))

Void Enemy_obj::search( ){
{
		HX_STACK_PUSH("Enemy::search","Enemy.hx",119);
		HX_STACK_THIS(this);
		HX_STACK_LINE(120)
		if (((this->destination == null()))){
			struct _Function_2_1{
				inline static ::flixel::util::FlxPoint Block( ::Enemy_obj *__this){
					HX_STACK_PUSH("*::closure","Enemy.hx",122);
					{
						HX_STACK_LINE(122)
						::Player _this = __this->player;		HX_STACK_VAR(_this,"_this");
						::flixel::util::FlxPoint point = null();		HX_STACK_VAR(point,"point");
						HX_STACK_LINE(122)
						if (((point == null()))){
							HX_STACK_LINE(122)
							point = ::flixel::util::FlxPoint_obj::__new(null(),null());
						}
						HX_STACK_LINE(122)
						return point->set((_this->x + (_this->width * 0.5)),(_this->y + (_this->height * 0.5)));
					}
					return null();
				}
			};
			HX_STACK_LINE(122)
			this->destination = _Function_2_1::Block(this);
			HX_STACK_LINE(123)
			Array< ::Dynamic > pathPoints = this->level->findPath(::flixel::util::FlxPoint_obj::__new(this->x,this->y),this->destination,null(),null(),null());		HX_STACK_VAR(pathPoints,"pathPoints");
			HX_STACK_LINE(124)
			if (((pathPoints != null()))){
				HX_STACK_LINE(125)
				this->path->run(hx::ObjectPtr<OBJ_>(this),pathPoints,this->moveSpeed,null(),null(),null());
			}
		}
		HX_STACK_LINE(129)
		if ((this->path->finished)){
			HX_STACK_LINE(131)
			this->destination = null();
			HX_STACK_LINE(132)
			this->state = ::EStates_obj::returning;
		}
		struct _Function_1_1{
			inline static ::flixel::util::FlxPoint Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",134);
				{
					HX_STACK_LINE(134)
					::flixel::util::FlxPoint point = null();		HX_STACK_VAR(point,"point");
					HX_STACK_LINE(134)
					if (((point == null()))){
						HX_STACK_LINE(134)
						point = ::flixel::util::FlxPoint_obj::__new(null(),null());
					}
					HX_STACK_LINE(134)
					return point->set((__this->x + (__this->width * 0.5)),(__this->y + (__this->height * 0.5)));
				}
				return null();
			}
		};
		struct _Function_1_2{
			inline static ::flixel::util::FlxPoint Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",134);
				{
					HX_STACK_LINE(134)
					::Player _this = __this->player;		HX_STACK_VAR(_this,"_this");
					::flixel::util::FlxPoint point = null();		HX_STACK_VAR(point,"point");
					HX_STACK_LINE(134)
					if (((point == null()))){
						HX_STACK_LINE(134)
						point = ::flixel::util::FlxPoint_obj::__new(null(),null());
					}
					HX_STACK_LINE(134)
					return point->set((_this->x + (_this->width * 0.5)),(_this->y + (_this->height * 0.5)));
				}
				return null();
			}
		};
		struct _Function_1_3{
			inline static int Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",134);
				{
					HX_STACK_LINE(134)
					::flixel::FlxSprite SpriteB = __this->player;		HX_STACK_VAR(SpriteB,"SpriteB");
					HX_STACK_LINE(134)
					Float dx = ((__this->x + __this->origin->x) - ((SpriteB->x + SpriteB->origin->x)));		HX_STACK_VAR(dx,"dx");
					HX_STACK_LINE(134)
					Float dy = ((__this->y + __this->origin->y) - ((SpriteB->y + SpriteB->origin->y)));		HX_STACK_VAR(dy,"dy");
					HX_STACK_LINE(134)
					return ::Std_obj::_int(::Math_obj::sqrt(((dx * dx) + (dy * dy))));
				}
				return null();
			}
		};
		HX_STACK_LINE(134)
		if (((bool(this->level->ray(_Function_1_1::Block(this),_Function_1_2::Block(this),null(),null())) && bool((_Function_1_3::Block(this) < this->sightRange))))){
			HX_STACK_LINE(136)
			this->destination = null();
			HX_STACK_LINE(137)
			this->state = ::EStates_obj::chasing;
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Enemy_obj,search,(void))

Void Enemy_obj::chase( ){
{
		HX_STACK_PUSH("Enemy::chase","Enemy.hx",100);
		HX_STACK_THIS(this);
		HX_STACK_LINE(101)
		this->set_color((int)16711680);
		struct _Function_1_1{
			inline static ::flixel::util::FlxPoint Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",103);
				{
					HX_STACK_LINE(103)
					::flixel::util::FlxPoint point = null();		HX_STACK_VAR(point,"point");
					HX_STACK_LINE(103)
					if (((point == null()))){
						HX_STACK_LINE(103)
						point = ::flixel::util::FlxPoint_obj::__new(null(),null());
					}
					HX_STACK_LINE(103)
					return point->set((__this->x + (__this->width * 0.5)),(__this->y + (__this->height * 0.5)));
				}
				return null();
			}
		};
		struct _Function_1_2{
			inline static ::flixel::util::FlxPoint Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",103);
				{
					HX_STACK_LINE(103)
					::Player _this = __this->player;		HX_STACK_VAR(_this,"_this");
					::flixel::util::FlxPoint point = null();		HX_STACK_VAR(point,"point");
					HX_STACK_LINE(103)
					if (((point == null()))){
						HX_STACK_LINE(103)
						point = ::flixel::util::FlxPoint_obj::__new(null(),null());
					}
					HX_STACK_LINE(103)
					return point->set((_this->x + (_this->width * 0.5)),(_this->y + (_this->height * 0.5)));
				}
				return null();
			}
		};
		HX_STACK_LINE(103)
		if ((this->level->ray(_Function_1_1::Block(this),_Function_1_2::Block(this),null(),null()))){
			HX_STACK_LINE(105)
			::flixel::util::FlxVector v = ::flixel::util::FlxVector_obj::__new((this->player->x - this->x),(this->player->y - this->y));		HX_STACK_VAR(v,"v");
			HX_STACK_LINE(106)
			v->normalize();
			HX_STACK_LINE(107)
			this->acceleration->set_x((v->x * this->drag->x));
			HX_STACK_LINE(108)
			this->acceleration->set_y((v->y * this->drag->y));
		}
		else{
			HX_STACK_LINE(112)
			this->destination = null();
			HX_STACK_LINE(113)
			this->state = ::EStates_obj::searching;
			HX_STACK_LINE(114)
			return null();
		}
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Enemy_obj,chase,(void))

Void Enemy_obj::wander( ){
{
		HX_STACK_PUSH("Enemy::wander","Enemy.hx",79);
		HX_STACK_THIS(this);
		HX_STACK_LINE(80)
		this->set_color((int)16777215);
		struct _Function_1_1{
			inline static int Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",81);
				{
					HX_STACK_LINE(81)
					::flixel::FlxSprite SpriteB = __this->player;		HX_STACK_VAR(SpriteB,"SpriteB");
					HX_STACK_LINE(81)
					Float dx = ((__this->x + __this->origin->x) - ((SpriteB->x + SpriteB->origin->x)));		HX_STACK_VAR(dx,"dx");
					HX_STACK_LINE(81)
					Float dy = ((__this->y + __this->origin->y) - ((SpriteB->y + SpriteB->origin->y)));		HX_STACK_VAR(dy,"dy");
					HX_STACK_LINE(81)
					return ::Std_obj::_int(::Math_obj::sqrt(((dx * dx) + (dy * dy))));
				}
				return null();
			}
		};
		HX_STACK_LINE(81)
		if (((_Function_1_1::Block(this) < this->sightRange))){
			HX_STACK_LINE(83)
			this->destination = null();
			HX_STACK_LINE(84)
			this->state = ::EStates_obj::chasing;
			HX_STACK_LINE(86)
			return null();
		}
		struct _Function_1_2{
			inline static int Block( ::Enemy_obj *__this){
				HX_STACK_PUSH("*::closure","Enemy.hx",89);
				{
					HX_STACK_LINE(89)
					::flixel::util::FlxPoint Target = __this->destination;		HX_STACK_VAR(Target,"Target");
					HX_STACK_LINE(89)
					Float dx = ((__this->x + __this->origin->x) - Target->x);		HX_STACK_VAR(dx,"dx");
					HX_STACK_LINE(89)
					Float dy = ((__this->y + __this->origin->y) - Target->y);		HX_STACK_VAR(dy,"dy");
					HX_STACK_LINE(89)
					return ::Std_obj::_int(::Math_obj::sqrt(((dx * dx) + (dy * dy))));
				}
				return null();
			}
		};
		HX_STACK_LINE(89)
		if (((bool((this->destination == null())) || bool((_Function_1_2::Block(this) < (int)32))))){
			HX_STACK_LINE(90)
			this->destination = ::flixel::util::FlxPoint_obj::__new((((((::Math_obj::random() * (int)2) - (int)1)) * this->leashDistance) + this->startPos->x),(((((::Math_obj::random() * (int)2) - (int)1)) * this->leashDistance) + this->startPos->y));
		}
		HX_STACK_LINE(93)
		::flixel::util::FlxVector v = ::flixel::util::FlxVector_obj::__new((this->destination->x - this->x),(this->destination->y - this->y));		HX_STACK_VAR(v,"v");
		HX_STACK_LINE(94)
		v->normalize();
		HX_STACK_LINE(95)
		this->acceleration->set_x((Float((v->x * this->drag->x)) / Float((int)2)));
		HX_STACK_LINE(96)
		this->acceleration->set_y((Float((v->y * this->drag->y)) / Float((int)2)));
	}
return null();
}


HX_DEFINE_DYNAMIC_FUNC0(Enemy_obj,wander,(void))

Void Enemy_obj::update( ){
{
		HX_STACK_PUSH("Enemy::update","Enemy.hx",57);
		HX_STACK_THIS(this);
		HX_STACK_LINE(59)
		if ((!(this->stunned))){
			HX_STACK_LINE(61)
			::Enemy _g = hx::ObjectPtr<OBJ_>(this);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(61)
			{
				::EStates _switch_1 = (_g->state);
				switch((_switch_1)->GetIndex()){
					case 0: {
						HX_STACK_LINE(63)
						this->wander();
					}
					;break;
					case 1: {
						HX_STACK_LINE(65)
						this->chase();
					}
					;break;
					case 2: {
						HX_STACK_LINE(67)
						this->search();
					}
					;break;
					case 3: {
						HX_STACK_LINE(69)
						this->goHome();
					}
					;break;
					case 4: {
					}
					;break;
				}
			}
		}
		HX_STACK_LINE(75)
		this->super::update();
	}
return null();
}



Enemy_obj::Enemy_obj()
{
}

void Enemy_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(Enemy);
	HX_MARK_MEMBER_NAME(stunned,"stunned");
	HX_MARK_MEMBER_NAME(destination,"destination");
	HX_MARK_MEMBER_NAME(path,"path");
	HX_MARK_MEMBER_NAME(state,"state");
	HX_MARK_MEMBER_NAME(level,"level");
	HX_MARK_MEMBER_NAME(startPos,"startPos");
	HX_MARK_MEMBER_NAME(leashDistance,"leashDistance");
	HX_MARK_MEMBER_NAME(walkSpeed,"walkSpeed");
	HX_MARK_MEMBER_NAME(moveSpeed,"moveSpeed");
	HX_MARK_MEMBER_NAME(attackRange,"attackRange");
	HX_MARK_MEMBER_NAME(sightRange,"sightRange");
	HX_MARK_MEMBER_NAME(player,"player");
	super::__Mark(HX_MARK_ARG);
	HX_MARK_END_CLASS();
}

void Enemy_obj::__Visit(HX_VISIT_PARAMS)
{
	HX_VISIT_MEMBER_NAME(stunned,"stunned");
	HX_VISIT_MEMBER_NAME(destination,"destination");
	HX_VISIT_MEMBER_NAME(path,"path");
	HX_VISIT_MEMBER_NAME(state,"state");
	HX_VISIT_MEMBER_NAME(level,"level");
	HX_VISIT_MEMBER_NAME(startPos,"startPos");
	HX_VISIT_MEMBER_NAME(leashDistance,"leashDistance");
	HX_VISIT_MEMBER_NAME(walkSpeed,"walkSpeed");
	HX_VISIT_MEMBER_NAME(moveSpeed,"moveSpeed");
	HX_VISIT_MEMBER_NAME(attackRange,"attackRange");
	HX_VISIT_MEMBER_NAME(sightRange,"sightRange");
	HX_VISIT_MEMBER_NAME(player,"player");
	super::__Visit(HX_VISIT_ARG);
}

Dynamic Enemy_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"stun") ) { return stun_dyn(); }
		if (HX_FIELD_EQ(inName,"path") ) { return path; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"chase") ) { return chase_dyn(); }
		if (HX_FIELD_EQ(inName,"state") ) { return state; }
		if (HX_FIELD_EQ(inName,"level") ) { return level; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"unstun") ) { return unstun_dyn(); }
		if (HX_FIELD_EQ(inName,"goHome") ) { return goHome_dyn(); }
		if (HX_FIELD_EQ(inName,"search") ) { return search_dyn(); }
		if (HX_FIELD_EQ(inName,"wander") ) { return wander_dyn(); }
		if (HX_FIELD_EQ(inName,"update") ) { return update_dyn(); }
		if (HX_FIELD_EQ(inName,"player") ) { return player; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"stunned") ) { return stunned; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"startPos") ) { return startPos; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"walkSpeed") ) { return walkSpeed; }
		if (HX_FIELD_EQ(inName,"moveSpeed") ) { return moveSpeed; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"sightRange") ) { return sightRange; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"destination") ) { return destination; }
		if (HX_FIELD_EQ(inName,"attackRange") ) { return attackRange; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"leashDistance") ) { return leashDistance; }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic Enemy_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"path") ) { path=inValue.Cast< ::flixel::util::FlxPath >(); return inValue; }
		break;
	case 5:
		if (HX_FIELD_EQ(inName,"state") ) { state=inValue.Cast< ::EStates >(); return inValue; }
		if (HX_FIELD_EQ(inName,"level") ) { level=inValue.Cast< ::flixel::tile::FlxTilemap >(); return inValue; }
		break;
	case 6:
		if (HX_FIELD_EQ(inName,"player") ) { player=inValue.Cast< ::Player >(); return inValue; }
		break;
	case 7:
		if (HX_FIELD_EQ(inName,"stunned") ) { stunned=inValue.Cast< bool >(); return inValue; }
		break;
	case 8:
		if (HX_FIELD_EQ(inName,"startPos") ) { startPos=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		break;
	case 9:
		if (HX_FIELD_EQ(inName,"walkSpeed") ) { walkSpeed=inValue.Cast< Float >(); return inValue; }
		if (HX_FIELD_EQ(inName,"moveSpeed") ) { moveSpeed=inValue.Cast< Float >(); return inValue; }
		break;
	case 10:
		if (HX_FIELD_EQ(inName,"sightRange") ) { sightRange=inValue.Cast< Float >(); return inValue; }
		break;
	case 11:
		if (HX_FIELD_EQ(inName,"destination") ) { destination=inValue.Cast< ::flixel::util::FlxPoint >(); return inValue; }
		if (HX_FIELD_EQ(inName,"attackRange") ) { attackRange=inValue.Cast< Float >(); return inValue; }
		break;
	case 13:
		if (HX_FIELD_EQ(inName,"leashDistance") ) { leashDistance=inValue.Cast< Float >(); return inValue; }
	}
	return super::__SetField(inName,inValue,inCallProp);
}

void Enemy_obj::__GetFields(Array< ::String> &outFields)
{
	outFields->push(HX_CSTRING("stunned"));
	outFields->push(HX_CSTRING("destination"));
	outFields->push(HX_CSTRING("path"));
	outFields->push(HX_CSTRING("state"));
	outFields->push(HX_CSTRING("level"));
	outFields->push(HX_CSTRING("startPos"));
	outFields->push(HX_CSTRING("leashDistance"));
	outFields->push(HX_CSTRING("walkSpeed"));
	outFields->push(HX_CSTRING("moveSpeed"));
	outFields->push(HX_CSTRING("attackRange"));
	outFields->push(HX_CSTRING("sightRange"));
	outFields->push(HX_CSTRING("player"));
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	String(null()) };

static ::String sMemberFields[] = {
	HX_CSTRING("unstun"),
	HX_CSTRING("stun"),
	HX_CSTRING("goHome"),
	HX_CSTRING("search"),
	HX_CSTRING("chase"),
	HX_CSTRING("wander"),
	HX_CSTRING("update"),
	HX_CSTRING("stunned"),
	HX_CSTRING("destination"),
	HX_CSTRING("path"),
	HX_CSTRING("state"),
	HX_CSTRING("level"),
	HX_CSTRING("startPos"),
	HX_CSTRING("leashDistance"),
	HX_CSTRING("walkSpeed"),
	HX_CSTRING("moveSpeed"),
	HX_CSTRING("attackRange"),
	HX_CSTRING("sightRange"),
	HX_CSTRING("player"),
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(Enemy_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(Enemy_obj::__mClass,"__mClass");
};

Class Enemy_obj::__mClass;

void Enemy_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("Enemy"), hx::TCanCast< Enemy_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void Enemy_obj::__boot()
{
}

