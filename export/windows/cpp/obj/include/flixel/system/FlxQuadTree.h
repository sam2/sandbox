#ifndef INCLUDED_flixel_system_FlxQuadTree
#define INCLUDED_flixel_system_FlxQuadTree

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

#include <flixel/util/FlxRect.h>
HX_DECLARE_CLASS1(flixel,FlxBasic)
HX_DECLARE_CLASS1(flixel,FlxObject)
HX_DECLARE_CLASS1(flixel,IDestroyable)
HX_DECLARE_CLASS2(flixel,system,FlxList)
HX_DECLARE_CLASS2(flixel,system,FlxQuadTree)
HX_DECLARE_CLASS2(flixel,util,FlxRect)
namespace flixel{
namespace system{


class HXCPP_CLASS_ATTRIBUTES  FlxQuadTree_obj : public ::flixel::util::FlxRect_obj{
	public:
		typedef ::flixel::util::FlxRect_obj super;
		typedef FlxQuadTree_obj OBJ_;
		FlxQuadTree_obj();
		Void __construct(Float X,Float Y,Float Width,Float Height,::flixel::system::FlxQuadTree Parent);

	public:
		static hx::ObjectPtr< FlxQuadTree_obj > __new(Float X,Float Y,Float Width,Float Height,::flixel::system::FlxQuadTree Parent);
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxQuadTree_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxQuadTree"); }

		virtual bool overlapNode( );
		Dynamic overlapNode_dyn();

		virtual bool execute( );
		Dynamic execute_dyn();

		virtual Void addToList( );
		Dynamic addToList_dyn();

		virtual Void addObject( );
		Dynamic addObject_dyn();

		virtual Void add( ::flixel::FlxBasic ObjectOrGroup,int list);
		Dynamic add_dyn();

		virtual Void load( ::flixel::FlxBasic ObjectOrGroup1,::flixel::FlxBasic ObjectOrGroup2,Dynamic NotifyCallback,Dynamic ProcessCallback);
		Dynamic load_dyn();

		virtual Void destroy( );
		Dynamic destroy_dyn();

		virtual Void reset( Float X,Float Y,Float Width,Float Height,::flixel::system::FlxQuadTree Parent);
		Dynamic reset_dyn();

		::flixel::system::FlxQuadTree next;
		Float _midpointY;
		Float _midpointX;
		Float _halfHeight;
		Float _halfWidth;
		Float _bottomEdge;
		Float _topEdge;
		Float _rightEdge;
		Float _leftEdge;
		::flixel::system::FlxQuadTree _southWestTree;
		::flixel::system::FlxQuadTree _southEastTree;
		::flixel::system::FlxQuadTree _northEastTree;
		::flixel::system::FlxQuadTree _northWestTree;
		::flixel::system::FlxList _tailB;
		::flixel::system::FlxList _headB;
		::flixel::system::FlxList _tailA;
		::flixel::system::FlxList _headA;
		bool _canSubdivide;
		bool exists;
		static int A_LIST;
		static int B_LIST;
		static int divisions;
		static int _min;
		static ::flixel::FlxObject _object;
		static Float _objectLeftEdge;
		static Float _objectTopEdge;
		static Float _objectRightEdge;
		static Float _objectBottomEdge;
		static int _list;
		static bool _useBothLists;
		static Dynamic _processingCallback;
		static Dynamic &_processingCallback_dyn() { return _processingCallback;}
		static Dynamic _notifyCallback;
		static Dynamic &_notifyCallback_dyn() { return _notifyCallback;}
		static ::flixel::system::FlxList _iterator;
		static Float _objectHullX;
		static Float _objectHullY;
		static Float _objectHullWidth;
		static Float _objectHullHeight;
		static Float _checkObjectHullX;
		static Float _checkObjectHullY;
		static Float _checkObjectHullWidth;
		static Float _checkObjectHullHeight;
		static int _NUM_CACHED_QUAD_TREES;
		static ::flixel::system::FlxQuadTree _cachedTreesHead;
		static ::flixel::system::FlxQuadTree recycle( Float X,Float Y,Float Width,Float Height,::flixel::system::FlxQuadTree Parent);
		static Dynamic recycle_dyn();

		static Void clearCache( );
		static Dynamic clearCache_dyn();

};

} // end namespace flixel
} // end namespace system

#endif /* INCLUDED_flixel_system_FlxQuadTree */ 
