#ifndef INCLUDED_EStates
#define INCLUDED_EStates

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(EStates)


class EStates_obj : public hx::EnumBase_obj
{
	typedef hx::EnumBase_obj super;
		typedef EStates_obj OBJ_;

	public:
		EStates_obj() {};
		HX_DO_ENUM_RTTI;
		static void __boot();
		static void __register();
		::String GetEnumName( ) const { return HX_CSTRING("EStates"); }
		::String __ToString() const { return HX_CSTRING("EStates.") + tag; }

		static ::EStates attacking;
		static inline ::EStates attacking_dyn() { return attacking; }
		static ::EStates chasing;
		static inline ::EStates chasing_dyn() { return chasing; }
		static ::EStates idle;
		static inline ::EStates idle_dyn() { return idle; }
		static ::EStates returning;
		static inline ::EStates returning_dyn() { return returning; }
		static ::EStates searching;
		static inline ::EStates searching_dyn() { return searching; }
};


#endif /* INCLUDED_EStates */ 
