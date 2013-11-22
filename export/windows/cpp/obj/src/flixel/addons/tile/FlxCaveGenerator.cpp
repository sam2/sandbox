#include <hxcpp.h>

#ifndef INCLUDED_Std
#include <Std.h>
#endif
#ifndef INCLUDED_flixel_addons_tile_FlxCaveGenerator
#include <flixel/addons/tile/FlxCaveGenerator.h>
#endif
#ifndef INCLUDED_hxMath
#include <hxMath.h>
#endif
namespace flixel{
namespace addons{
namespace tile{

Void FlxCaveGenerator_obj::__construct()
{
	return null();
}

FlxCaveGenerator_obj::~FlxCaveGenerator_obj() { }

Dynamic FlxCaveGenerator_obj::__CreateEmpty() { return  new FlxCaveGenerator_obj; }
hx::ObjectPtr< FlxCaveGenerator_obj > FlxCaveGenerator_obj::__new()
{  hx::ObjectPtr< FlxCaveGenerator_obj > result = new FlxCaveGenerator_obj();
	result->__construct();
	return result;}

Dynamic FlxCaveGenerator_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< FlxCaveGenerator_obj > result = new FlxCaveGenerator_obj();
	result->__construct();
	return result;}

::String FlxCaveGenerator_obj::convertMatrixToString( Array< ::Dynamic > Matrix){
	HX_STACK_PUSH("FlxCaveGenerator::convertMatrixToString","flixel/addons/tile/FlxCaveGenerator.hx",18);
	HX_STACK_ARG(Matrix,"Matrix");
	HX_STACK_LINE(19)
	::String mapString = HX_CSTRING("");		HX_STACK_VAR(mapString,"mapString");
	HX_STACK_LINE(21)
	{
		HX_STACK_LINE(21)
		int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
		int _g = Matrix->length;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(21)
		while(((_g1 < _g))){
			HX_STACK_LINE(21)
			int y = (_g1)++;		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(23)
			{
				HX_STACK_LINE(23)
				int _g3 = (int)0;		HX_STACK_VAR(_g3,"_g3");
				int _g2 = Matrix->__get(y).StaticCast< Array< int > >()->length;		HX_STACK_VAR(_g2,"_g2");
				HX_STACK_LINE(23)
				while(((_g3 < _g2))){
					HX_STACK_LINE(23)
					int x = (_g3)++;		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(25)
					hx::AddEq(mapString,(::Std_obj::string(Matrix->__get(y).StaticCast< Array< int > >()->__get(x)) + HX_CSTRING(",")));
				}
			}
			HX_STACK_LINE(28)
			hx::AddEq(mapString,HX_CSTRING("\n"));
		}
	}
	HX_STACK_LINE(31)
	return mapString;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC1(FlxCaveGenerator_obj,convertMatrixToString,return )

Array< ::Dynamic > FlxCaveGenerator_obj::generateCaveMatrix( int Columns,int Rows,hx::Null< int >  __o_SmoothingIterations,hx::Null< Float >  __o_WallRatio){
int SmoothingIterations = __o_SmoothingIterations.Default(6);
Float WallRatio = __o_WallRatio.Default(0.5);
	HX_STACK_PUSH("FlxCaveGenerator::generateCaveMatrix","flixel/addons/tile/FlxCaveGenerator.hx",44);
	HX_STACK_ARG(Columns,"Columns");
	HX_STACK_ARG(Rows,"Rows");
	HX_STACK_ARG(SmoothingIterations,"SmoothingIterations");
	HX_STACK_ARG(WallRatio,"WallRatio");
{
		HX_STACK_LINE(46)
		Array< ::Dynamic > matrix = ::flixel::addons::tile::FlxCaveGenerator_obj::generateInitialMatrix(Columns,Rows);		HX_STACK_VAR(matrix,"matrix");
		HX_STACK_LINE(48)
		{
			HX_STACK_LINE(48)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(48)
			while(((_g < Rows))){
				HX_STACK_LINE(48)
				int y = (_g)++;		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(50)
				{
					HX_STACK_LINE(50)
					int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(50)
					while(((_g1 < Columns))){
						HX_STACK_LINE(50)
						int x = (_g1)++;		HX_STACK_VAR(x,"x");
						HX_STACK_LINE(52)
						matrix->__get(y).StaticCast< Array< int > >()[x] = (  (((::Math_obj::random() < WallRatio))) ? int((int)1) : int((int)0) );
					}
				}
			}
		}
		HX_STACK_LINE(57)
		Array< ::Dynamic > matrix2 = ::flixel::addons::tile::FlxCaveGenerator_obj::generateInitialMatrix(Columns,Rows);		HX_STACK_VAR(matrix2,"matrix2");
		HX_STACK_LINE(60)
		{
			HX_STACK_LINE(60)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(60)
			while(((_g < SmoothingIterations))){
				HX_STACK_LINE(60)
				int i = (_g)++;		HX_STACK_VAR(i,"i");
				HX_STACK_LINE(62)
				::flixel::addons::tile::FlxCaveGenerator_obj::runCelluarAutomata(matrix,matrix2);
				HX_STACK_LINE(65)
				Array< ::Dynamic > temp = matrix;		HX_STACK_VAR(temp,"temp");
				HX_STACK_LINE(66)
				matrix = matrix2;
				HX_STACK_LINE(67)
				matrix2 = temp;
			}
		}
		HX_STACK_LINE(70)
		return matrix;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(FlxCaveGenerator_obj,generateCaveMatrix,return )

::String FlxCaveGenerator_obj::generateCaveString( int Columns,int Rows,hx::Null< int >  __o_SmoothingIterations,hx::Null< Float >  __o_WallRatio){
int SmoothingIterations = __o_SmoothingIterations.Default(6);
Float WallRatio = __o_WallRatio.Default(0.5);
	HX_STACK_PUSH("FlxCaveGenerator::generateCaveString","flixel/addons/tile/FlxCaveGenerator.hx",84);
	HX_STACK_ARG(Columns,"Columns");
	HX_STACK_ARG(Rows,"Rows");
	HX_STACK_ARG(SmoothingIterations,"SmoothingIterations");
	HX_STACK_ARG(WallRatio,"WallRatio");
{
		HX_STACK_LINE(84)
		return ::flixel::addons::tile::FlxCaveGenerator_obj::convertMatrixToString(::flixel::addons::tile::FlxCaveGenerator_obj::generateCaveMatrix(Columns,Rows,SmoothingIterations,WallRatio));
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(FlxCaveGenerator_obj,generateCaveString,return )

Array< ::Dynamic > FlxCaveGenerator_obj::generateInitialMatrix( int Columns,int Rows){
	HX_STACK_PUSH("FlxCaveGenerator::generateInitialMatrix","flixel/addons/tile/FlxCaveGenerator.hx",96);
	HX_STACK_ARG(Columns,"Columns");
	HX_STACK_ARG(Rows,"Rows");
	HX_STACK_LINE(97)
	Array< ::Dynamic > matrix = Array_obj< ::Dynamic >::__new();		HX_STACK_VAR(matrix,"matrix");
	HX_STACK_LINE(99)
	{
		HX_STACK_LINE(99)
		int _g = (int)0;		HX_STACK_VAR(_g,"_g");
		HX_STACK_LINE(99)
		while(((_g < Rows))){
			HX_STACK_LINE(99)
			int y = (_g)++;		HX_STACK_VAR(y,"y");
			HX_STACK_LINE(101)
			matrix->push(Array_obj< int >::__new());
			HX_STACK_LINE(103)
			{
				HX_STACK_LINE(103)
				int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
				HX_STACK_LINE(103)
				while(((_g1 < Columns))){
					HX_STACK_LINE(103)
					int x = (_g1)++;		HX_STACK_VAR(x,"x");
					HX_STACK_LINE(105)
					matrix->__get(y).StaticCast< Array< int > >()->push((int)0);
				}
			}
		}
	}
	HX_STACK_LINE(109)
	return matrix;
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxCaveGenerator_obj,generateInitialMatrix,return )

int FlxCaveGenerator_obj::countNumWallsNeighbors( Array< ::Dynamic > Matrix,int PosX,int PosY,hx::Null< int >  __o_Distance){
int Distance = __o_Distance.Default(1);
	HX_STACK_PUSH("FlxCaveGenerator::countNumWallsNeighbors","flixel/addons/tile/FlxCaveGenerator.hx",120);
	HX_STACK_ARG(Matrix,"Matrix");
	HX_STACK_ARG(PosX,"PosX");
	HX_STACK_ARG(PosY,"PosY");
	HX_STACK_ARG(Distance,"Distance");
{
		HX_STACK_LINE(121)
		int count = (int)0;		HX_STACK_VAR(count,"count");
		HX_STACK_LINE(122)
		int rows = Matrix->length;		HX_STACK_VAR(rows,"rows");
		HX_STACK_LINE(123)
		int columns = Matrix->__get((int)0).StaticCast< Array< int > >()->length;		HX_STACK_VAR(columns,"columns");
		HX_STACK_LINE(125)
		{
			HX_STACK_LINE(125)
			int _g1 = -(Distance);		HX_STACK_VAR(_g1,"_g1");
			int _g = (Distance + (int)1);		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(125)
			while(((_g1 < _g))){
				HX_STACK_LINE(125)
				int y = (_g1)++;		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(127)
				{
					HX_STACK_LINE(127)
					int _g3 = -(Distance);		HX_STACK_VAR(_g3,"_g3");
					int _g2 = (Distance + (int)1);		HX_STACK_VAR(_g2,"_g2");
					HX_STACK_LINE(127)
					while(((_g3 < _g2))){
						HX_STACK_LINE(127)
						int x = (_g3)++;		HX_STACK_VAR(x,"x");
						HX_STACK_LINE(130)
						if (((bool((bool((bool(((PosX + x) < (int)0)) || bool(((PosX + x) > (columns - (int)1))))) || bool(((PosY + y) < (int)0)))) || bool(((PosY + y) > (rows - (int)1)))))){
							HX_STACK_LINE(131)
							continue;
						}
						HX_STACK_LINE(136)
						if (((Matrix->__get((PosY + y)).StaticCast< Array< int > >()->__get((PosX + x)) != (int)0))){
							HX_STACK_LINE(137)
							(count)++;
						}
					}
				}
			}
		}
		HX_STACK_LINE(143)
		return count;
	}
}


STATIC_HX_DEFINE_DYNAMIC_FUNC4(FlxCaveGenerator_obj,countNumWallsNeighbors,return )

Void FlxCaveGenerator_obj::runCelluarAutomata( Array< ::Dynamic > InMatrix,Array< ::Dynamic > OutMatrix){
{
		HX_STACK_PUSH("FlxCaveGenerator::runCelluarAutomata","flixel/addons/tile/FlxCaveGenerator.hx",150);
		HX_STACK_ARG(InMatrix,"InMatrix");
		HX_STACK_ARG(OutMatrix,"OutMatrix");
		HX_STACK_LINE(151)
		int rows = InMatrix->length;		HX_STACK_VAR(rows,"rows");
		HX_STACK_LINE(152)
		int columns = InMatrix->__get((int)0).StaticCast< Array< int > >()->length;		HX_STACK_VAR(columns,"columns");
		HX_STACK_LINE(154)
		{
			HX_STACK_LINE(154)
			int _g = (int)0;		HX_STACK_VAR(_g,"_g");
			HX_STACK_LINE(154)
			while(((_g < rows))){
				HX_STACK_LINE(154)
				int y = (_g)++;		HX_STACK_VAR(y,"y");
				HX_STACK_LINE(156)
				{
					HX_STACK_LINE(156)
					int _g1 = (int)0;		HX_STACK_VAR(_g1,"_g1");
					HX_STACK_LINE(156)
					while(((_g1 < columns))){
						HX_STACK_LINE(156)
						int x = (_g1)++;		HX_STACK_VAR(x,"x");
						HX_STACK_LINE(158)
						int numWalls = ::flixel::addons::tile::FlxCaveGenerator_obj::countNumWallsNeighbors(InMatrix,x,y,(int)1);		HX_STACK_VAR(numWalls,"numWalls");
						HX_STACK_LINE(160)
						if (((numWalls >= (int)5))){
							HX_STACK_LINE(161)
							OutMatrix->__get(y).StaticCast< Array< int > >()[x] = (int)1;
						}
						else{
							HX_STACK_LINE(165)
							OutMatrix->__get(y).StaticCast< Array< int > >()[x] = (int)0;
						}
					}
				}
			}
		}
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC2(FlxCaveGenerator_obj,runCelluarAutomata,(void))


FlxCaveGenerator_obj::FlxCaveGenerator_obj()
{
}

void FlxCaveGenerator_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(FlxCaveGenerator);
	HX_MARK_END_CLASS();
}

void FlxCaveGenerator_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic FlxCaveGenerator_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 18:
		if (HX_FIELD_EQ(inName,"generateCaveMatrix") ) { return generateCaveMatrix_dyn(); }
		if (HX_FIELD_EQ(inName,"generateCaveString") ) { return generateCaveString_dyn(); }
		if (HX_FIELD_EQ(inName,"runCelluarAutomata") ) { return runCelluarAutomata_dyn(); }
		break;
	case 21:
		if (HX_FIELD_EQ(inName,"convertMatrixToString") ) { return convertMatrixToString_dyn(); }
		if (HX_FIELD_EQ(inName,"generateInitialMatrix") ) { return generateInitialMatrix_dyn(); }
		break;
	case 22:
		if (HX_FIELD_EQ(inName,"countNumWallsNeighbors") ) { return countNumWallsNeighbors_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic FlxCaveGenerator_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void FlxCaveGenerator_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("convertMatrixToString"),
	HX_CSTRING("generateCaveMatrix"),
	HX_CSTRING("generateCaveString"),
	HX_CSTRING("generateInitialMatrix"),
	HX_CSTRING("countNumWallsNeighbors"),
	HX_CSTRING("runCelluarAutomata"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(FlxCaveGenerator_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(FlxCaveGenerator_obj::__mClass,"__mClass");
};

Class FlxCaveGenerator_obj::__mClass;

void FlxCaveGenerator_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("flixel.addons.tile.FlxCaveGenerator"), hx::TCanCast< FlxCaveGenerator_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void FlxCaveGenerator_obj::__boot()
{
}

} // end namespace flixel
} // end namespace addons
} // end namespace tile
