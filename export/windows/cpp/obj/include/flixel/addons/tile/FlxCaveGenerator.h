#ifndef INCLUDED_flixel_addons_tile_FlxCaveGenerator
#define INCLUDED_flixel_addons_tile_FlxCaveGenerator

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS3(flixel,addons,tile,FlxCaveGenerator)
namespace flixel{
namespace addons{
namespace tile{


class HXCPP_CLASS_ATTRIBUTES  FlxCaveGenerator_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef FlxCaveGenerator_obj OBJ_;
		FlxCaveGenerator_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< FlxCaveGenerator_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~FlxCaveGenerator_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("FlxCaveGenerator"); }

		static ::String convertMatrixToString( Array< ::Dynamic > Matrix);
		static Dynamic convertMatrixToString_dyn();

		static Array< ::Dynamic > generateCaveMatrix( int Columns,int Rows,hx::Null< int >  SmoothingIterations,hx::Null< Float >  WallRatio);
		static Dynamic generateCaveMatrix_dyn();

		static ::String generateCaveString( int Columns,int Rows,hx::Null< int >  SmoothingIterations,hx::Null< Float >  WallRatio);
		static Dynamic generateCaveString_dyn();

		static Array< ::Dynamic > generateInitialMatrix( int Columns,int Rows);
		static Dynamic generateInitialMatrix_dyn();

		static int countNumWallsNeighbors( Array< ::Dynamic > Matrix,int PosX,int PosY,hx::Null< int >  Distance);
		static Dynamic countNumWallsNeighbors_dyn();

		static Void runCelluarAutomata( Array< ::Dynamic > InMatrix,Array< ::Dynamic > OutMatrix);
		static Dynamic runCelluarAutomata_dyn();

};

} // end namespace flixel
} // end namespace addons
} // end namespace tile

#endif /* INCLUDED_flixel_addons_tile_FlxCaveGenerator */ 
