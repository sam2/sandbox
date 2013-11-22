(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var urlLoader = new flash.net.URLLoader();
	urlLoader.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/data/data-goes-here.txt",urlLoader);
	ApplicationMain.total++;
	var urlLoader1 = new flash.net.URLLoader();
	urlLoader1.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/images/actor1.json",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new flash.net.URLLoader();
	urlLoader2.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/images/actor2.json",urlLoader2);
	ApplicationMain.total++;
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/actors.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/bg.jpg",loader1);
	ApplicationMain.total++;
	var urlLoader3 = new flash.net.URLLoader();
	urlLoader3.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/images/images-go-here.txt",urlLoader3);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/panda.png",loader2);
	ApplicationMain.total++;
	var urlLoader4 = new flash.net.URLLoader();
	urlLoader4.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/images/skeleton.json",urlLoader4);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/skeleton.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/water.jpg",loader4);
	ApplicationMain.total++;
	var urlLoader5 = new flash.net.URLLoader();
	urlLoader5.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/music/music-goes-here.txt",urlLoader5);
	ApplicationMain.total++;
	var urlLoader6 = new flash.net.URLLoader();
	urlLoader6.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/sounds/sounds-go-here.txt",urlLoader6);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/console.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/logDebug.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/open.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/pause.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/play.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/record_off.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/record_on.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/restart.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/statsDebug.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/step.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/stop.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/visualDebug.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/buttons/watchDebug.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/flixel.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/debugger/windowHandle.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/logo/default.png",loader20);
	ApplicationMain.total++;
	var urlLoader7 = new flash.net.URLLoader();
	urlLoader7.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("flixel/img/logo/HaxeFlixel.svg",urlLoader7);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/logo/logo.png",loader21);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/preloader/corners.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/preloader/light.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/tile/autotiles.png",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/tile/autotiles_alt.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/analog/base.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/analog/thumb.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/button.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/cursor.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/fontData11pt.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/a.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/b.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/c.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/down.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/left.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/right.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/up.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/x.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("flixel/img/ui/virtualpad/y.png",loader39);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader40 = ApplicationMain.loaders.get(path);
			loader40.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader40.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader8 = ApplicationMain.urlLoaders.get(path);
			urlLoader8.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader8.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.__filters == null?0:this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__contains: function(child) {
		return false;
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0, _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set___combinedVisible:"set___combinedVisible",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.__children[c1].__scrollRect == null?gfx1.__surface:this.__children[c1].__getSrWindow();
			var surface2 = this.__children[c2].__scrollRect == null?gfx2.__surface:this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		this.__combinedAlpha = this.parent != null?this.parent.__combinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		if(this.getChildIndex(child) >= 0) throw "Not removed properly";
		return child;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__broadcast: function(event) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.__children[i],this.__children[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.__children[i],this.__children[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				HxOverrides.remove($this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				if($this.getChildIndex(child) >= 0) throw "Not removed properly";
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == object) throw "Internal error: child already existed at index " + this.getChildIndex(object);
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	flash.display.Sprite.call(this);
	if(this.get_stage() != null) this.init(); else this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	flash.Lib.get_current().addChild(new Main());
}
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	initialize: function() {
		flash.Lib.get_current().get_stage().align = flash.display.StageAlign.TOP_LEFT;
		flash.Lib.get_current().get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
	}
	,init: function(E) {
		if(this.hasEventListener(flash.events.Event.ADDED_TO_STAGE)) this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
		this.initialize();
		var game = new GameClass();
		this.addChild(game);
	}
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var flixel = {}
flixel.IDestroyable = function() { }
$hxClasses["flixel.IDestroyable"] = flixel.IDestroyable;
flixel.IDestroyable.__name__ = ["flixel","IDestroyable"];
flixel.IDestroyable.prototype = {
	__class__: flixel.IDestroyable
}
flixel.FlxBasic = function() {
	this.ignoreDrawDebug = false;
	this.exists = true;
	this.alive = true;
	this.visible = true;
	this.active = true;
	this.ID = -1;
	this.collisionType = flixel.system.FlxCollisionType.NULL;
};
$hxClasses["flixel.FlxBasic"] = flixel.FlxBasic;
flixel.FlxBasic.__name__ = ["flixel","FlxBasic"];
flixel.FlxBasic.__interfaces__ = [flixel.IDestroyable];
flixel.FlxBasic.prototype = {
	toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,set_exists: function(Value) {
		return this.exists = Value;
	}
	,set_alive: function(Value) {
		return this.alive = Value;
	}
	,set_active: function(Value) {
		return this.active = Value;
	}
	,set_visible: function(Value) {
		return this.visible = Value;
	}
	,drawDebugOnCamera: function(Camera) {
	}
	,drawDebug: function() {
		if(!this.ignoreDrawDebug) {
			var i = 0;
			if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
			var l = this.cameras.length;
			while(i < l) this.drawDebugOnCamera(this.cameras[i++]);
		}
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,update: function() {
		flixel.FlxBasic._ACTIVECOUNT++;
	}
	,revive: function() {
		this.set_alive(true);
		this.set_exists(true);
	}
	,kill: function() {
		this.set_alive(false);
		this.set_exists(false);
	}
	,destroy: function() {
		this.set_exists(false);
		this.collisionType = null;
	}
	,__class__: flixel.FlxBasic
	,__properties__: {set_active:"set_active",set_visible:"set_visible",set_alive:"set_alive",set_exists:"set_exists"}
}
flixel.util = {}
flixel.util.FlxRect = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
};
$hxClasses["flixel.util.FlxRect"] = flixel.util.FlxRect;
flixel.util.FlxRect.__name__ = ["flixel","util","FlxRect"];
flixel.util.FlxRect.prototype = {
	union: function(Rect) {
		var minX = Math.min(this.x,Rect.x);
		var minY = Math.min(this.y,Rect.y);
		var maxX = Math.max(this.get_right(),Rect.get_right());
		var maxY = Math.max(this.get_bottom(),Rect.get_bottom());
		return (function($this) {
			var $r;
			$this.x = minX;
			$this.y = minY;
			$this.width = maxX - minX;
			$this.height = maxY - minY;
			$r = $this;
			return $r;
		}(this));
	}
	,containsFlxPoint: function(Point) {
		return flixel.util.FlxMath.pointInFlxRect(Point.x,Point.y,this);
	}
	,overlaps: function(Rect) {
		return Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
	}
	,copyToFlash: function(FlashRect) {
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		return Rect;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		return this;
	}
	,set: function(X,Y,Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_top: function() {
		return this.y;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,get_left: function() {
		return this.x;
	}
	,__class__: flixel.util.FlxRect
	,__properties__: {get_left:"get_left",get_right:"get_right",get_top:"get_top",get_bottom:"get_bottom"}
}
flixel.util.FlxPoint = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.y = 0;
	this.x = 0;
	this.set_x(X);
	this.set_y(Y);
};
$hxClasses["flixel.util.FlxPoint"] = flixel.util.FlxPoint;
flixel.util.FlxPoint.__name__ = ["flixel","util","FlxPoint"];
flixel.util.FlxPoint.prototype = {
	destroy: function() {
	}
	,distanceTo: function(AnotherPoint) {
		return flixel.util.FlxMath.getDistance(this,AnotherPoint);
	}
	,inFlxRect: function(Rect) {
		return flixel.util.FlxMath.pointInFlxRect(this.x,this.y,Rect);
	}
	,inCoords: function(RectX,RectY,RectWidth,RectHeight) {
		return flixel.util.FlxMath.pointInCoordinates(this.x,this.y,RectX,RectY,RectWidth,RectHeight);
	}
	,toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,copyToFlash: function(FlashPoint) {
		FlashPoint.x = this.x;
		FlashPoint.y = this.y;
		return FlashPoint;
	}
	,copyFromFlash: function(FlashPoint) {
		this.set_x(FlashPoint.x);
		this.set_y(FlashPoint.y);
		return this;
	}
	,copyTo: function(point) {
		if(point == null) point = new flixel.util.FlxPoint();
		point.set_x(this.x);
		point.set_y(this.y);
		return point;
	}
	,copyFrom: function(point) {
		this.set_x(point.x);
		this.set_y(point.y);
		return this;
	}
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
		return this;
	}
	,set_y: function(Value) {
		return this.y = Value;
	}
	,set_x: function(Value) {
		return this.x = Value;
	}
	,__class__: flixel.util.FlxPoint
	,__properties__: {set_x:"set_x",set_y:"set_y"}
}
flixel.FlxObject = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._boundingBoxColorOverritten = false;
	this.allowCollisions = 4369;
	this.wasTouching = 0;
	this.touching = 0;
	this.health = 1;
	this.maxAngular = 10000;
	this.angularDrag = 0;
	this.angularAcceleration = 0;
	this.angularVelocity = 0;
	this.elasticity = 0;
	this.mass = 1;
	this.forceComplexRender = false;
	this.immovable = false;
	this.moves = true;
	this.angle = 0;
	this.y = 0;
	this.x = 0;
	flixel.FlxBasic.call(this);
	this.set_x(X);
	this.set_y(Y);
	this.set_width(Width);
	this.set_height(Height);
	this.initVars();
};
$hxClasses["flixel.FlxObject"] = flixel.FlxObject;
flixel.FlxObject.__name__ = ["flixel","FlxObject"];
flixel.FlxObject.separate = function(Object1,Object2) {
	var separatedX = flixel.FlxObject.separateX(Object1,Object2);
	var separatedY = flixel.FlxObject.separateY(Object1,Object2);
	return separatedX || separatedY;
}
flixel.FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == flixel.system.FlxCollisionType.TILEMAP) return (js.Boot.__cast(Object1 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object2,flixel.FlxObject.separateX);
	if(Object2.collisionType == flixel.system.FlxCollisionType.TILEMAP) return (js.Boot.__cast(Object2 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object1,flixel.FlxObject.separateX,true);
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = flixel.FlxObject._firstSeparateFlxRect.set(Object1.x - (obj1delta > 0?obj1delta:0),Object1.last.y,Object1.width + (obj1delta > 0?obj1delta:-obj1delta),Object1.height);
		var obj2rect = flixel.FlxObject._secondSeparateFlxRect.set(Object2.x - (obj2delta > 0?obj2delta:0),Object2.last.y,Object2.width + (obj2delta > 0?obj2delta:-obj2delta),Object2.height);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.width - Object2.x;
				if(overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) overlap = 0; else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.width - Object2.x;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) overlap = 0; else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1._velocity.x;
		var obj2v = Object2._velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_x(Object1.x - overlap);
			var _g = Object2;
			_g.set_x(_g.x + overlap);
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1._velocity.set_x(average + obj1velocity * Object1.elasticity);
			Object2._velocity.set_x(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_x(Object1.x - overlap);
			Object1._velocity.set_x(obj2v - obj1v * Object1.elasticity);
		} else if(!obj2immovable) {
			var _g = Object2;
			_g.set_x(_g.x + overlap);
			Object2._velocity.set_x(obj1v - obj2v * Object2.elasticity);
		}
		return true;
	} else return false;
}
flixel.FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(Object1.collisionType == flixel.system.FlxCollisionType.TILEMAP) return (js.Boot.__cast(Object1 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object2,flixel.FlxObject.separateY);
	if(Object2.collisionType == flixel.system.FlxCollisionType.TILEMAP) return (js.Boot.__cast(Object2 , flixel.tile.FlxTilemap)).overlapsWithCallback(Object1,flixel.FlxObject.separateY,true);
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = flixel.FlxObject._firstSeparateFlxRect.set(Object1.x,Object1.y - (obj1delta > 0?obj1delta:0),Object1.width,Object1.height + obj1deltaAbs);
		var obj2rect = flixel.FlxObject._secondSeparateFlxRect.set(Object2.x,Object2.y - (obj2delta > 0?obj2delta:0),Object2.width,Object2.height + obj2deltaAbs);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.height - Object2.y;
				if(overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) overlap = 0; else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.height - Object2.y;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) overlap = 0; else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1._velocity.y;
		var obj2v = Object2._velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.set_y(Object1.y - overlap);
			var _g = Object2;
			_g.set_y(_g.y + overlap);
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1._velocity.set_y(average + obj1velocity * Object1.elasticity);
			Object2._velocity.set_y(average + obj2velocity * Object2.elasticity);
		} else if(!obj1immovable) {
			Object1.set_y(Object1.y - overlap);
			Object1._velocity.set_y(obj2v - obj1v * Object1.elasticity);
			if(Object2.active && Object2.moves && obj1delta > obj2delta) {
				var _g = Object1;
				_g.set_x(_g.x + (Object2.x - Object2.last.x));
			}
		} else if(!obj2immovable) {
			var _g = Object2;
			_g.set_y(_g.y + overlap);
			Object2._velocity.set_y(obj1v - obj2v * Object2.elasticity);
			if(Object1.active && Object1.moves && obj1delta < obj2delta) {
				var _g = Object2;
				_g.set_x(_g.x + (Object1.x - Object1.last.x));
			}
		}
		return true;
	} else return false;
}
flixel.FlxObject.__super__ = flixel.FlxBasic;
flixel.FlxObject.prototype = $extend(flixel.FlxBasic.prototype,{
	set_debugBoundingBoxColor: function(Value) {
		this._boundingBoxColorOverritten = true;
		return this.debugBoundingBoxColor = Value;
	}
	,set_maxVelocity: function(Value) {
		this._maxVelocity = Value;
		return this.maxVelocity = Value;
	}
	,set_drag: function(Value) {
		this._drag = Value;
		return this.drag = Value;
	}
	,set_acceleration: function(Value) {
		this._acceleration = Value;
		return this.acceleration = Value;
	}
	,set_velocity: function(Value) {
		this._velocity = Value;
		return this.velocity = Value;
	}
	,set_scrollFactor: function(Value) {
		this._scrollFactor = Value;
		return this.scrollFactor = Value;
	}
	,set_forceComplexRender: function(Value) {
		return this.forceComplexRender = Value;
	}
	,set_immovable: function(Value) {
		return this.immovable = Value;
	}
	,set_moves: function(Value) {
		return this.moves = Value;
	}
	,set_angle: function(Value) {
		return this.angle = Value;
	}
	,set_solid: function(Solid) {
		if(Solid) this.allowCollisions = 4369; else this.allowCollisions = 0;
		return Solid;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,set_height: function(Height) {
		if(Height < 0) flixel.FlxG.log.warn("An object's height cannot be smaller than 0. Use offset for sprites to control the hitbox position!"); else this.height = Height;
		return Height;
	}
	,set_width: function(Width) {
		if(Width < 0) flixel.FlxG.log.warn("An object's width cannot be smaller than 0. Use offset for sprites to control the hitbox position!"); else this.width = Width;
		return Width;
	}
	,set_y: function(NewY) {
		return this.y = NewY;
	}
	,set_x: function(NewX) {
		return this.x = NewX;
	}
	,set_cachedGraphics: function(Value) {
		if(this.cachedGraphics != null && this.cachedGraphics != Value) {
			var _g = this.cachedGraphics, _g1 = _g.get_useCount();
			_g.set_useCount(_g1 - 1);
			_g1;
		}
		if(this.cachedGraphics != Value && Value != null) {
			var _g = Value, _g1 = _g.get_useCount();
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		return this.cachedGraphics = Value;
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
	}
	,hurt: function(Damage) {
		this.health = this.health - Damage;
		if(this.health <= 0) this.kill();
	}
	,justTouched: function(Direction) {
		return (this.touching & Direction) > 0 && (this.wasTouching & Direction) <= 0;
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,reset: function(X,Y) {
		this.revive();
		this.touching = 0;
		this.wasTouching = 0;
		this.setPosition(X,Y);
		this.last.set(this.x,this.y);
		this.velocity.set();
	}
	,getMidpoint: function(point) {
		if(point == null) point = new flixel.util.FlxPoint();
		return point.set(this.x + this.width * 0.5,this.y + this.height * 0.5);
	}
	,getScreenXY: function(point,Camera) {
		if(point == null) point = new flixel.util.FlxPoint();
		if(Camera == null) Camera = flixel.FlxG.camera;
		return point.set(this.x - Camera.scroll.x * this._scrollFactor.x,this.y - Camera.scroll.y * this._scrollFactor.y);
	}
	,inWorldBounds: function() {
		return this.x + this.width > flixel.FlxG.worldBounds.x && this.x < flixel.FlxG.worldBounds.get_right() && this.y + this.height > flixel.FlxG.worldBounds.y && this.y < flixel.FlxG.worldBounds.get_bottom();
	}
	,onScreen: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		return this._point.x + this.width > 0 && this._point.x < Camera.width && this._point.y + this.height > 0 && this._point.y < Camera.height;
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return point.x > this.x && point.x < this.x + this.width && point.y > this.y && point.y < this.y + this.height;
		if(Camera == null) Camera = flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x && X < this._point.x + this.width && Y > this._point.y && Y < this._point.y + this.height;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.SPRITEGROUP) ObjectOrGroup = Reflect.field(ObjectOrGroup,"group");
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.GROUP) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.get_members();
			while(i < (grp.length | 0)) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.TILEMAP) {
			var tilemap = js.Boot.__cast(ObjectOrGroup , flixel.tile.FlxTilemap);
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > X && object.x < X + this.width && object.y + object.height > Y && object.y < Y + this.height;
		if(Camera == null) Camera = flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.SPRITEGROUP) ObjectOrGroup = Reflect.field(ObjectOrGroup,"group");
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.GROUP) {
			var results = false;
			var i = 0;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.get_members();
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,InScreenSpace,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.TILEMAP) return (js.Boot.__cast(ObjectOrGroup , flixel.tile.FlxTilemap)).overlaps(this,InScreenSpace,Camera);
		var object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > this.x && object.x < this.x + this.width && object.y + object.height > this.y && object.y < this.y + this.height;
		if(Camera == null) Camera = flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,drawDebugOnCamera: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(!Camera.visible || !Camera.exists || !this.onScreen(Camera)) return;
		var boundingBoxX = this.x - Camera.scroll.x * this._scrollFactor.x;
		var boundingBoxY = this.y - Camera.scroll.y * this._scrollFactor.y;
		if(this.allowCollisions != 0 && !this._boundingBoxColorOverritten) {
			if(this.allowCollisions != 4369) this.set_debugBoundingBoxColor(-16181);
			if(this.immovable) this.set_debugBoundingBoxColor(-16744448); else this.set_debugBoundingBoxColor(-65536);
		} else if(!this._boundingBoxColorOverritten) this.set_debugBoundingBoxColor(-16776961);
		var gfx = Camera._debugLayer.get_graphics();
		gfx.lineStyle(1,this.debugBoundingBoxColor,0.5);
		gfx.drawRect(boundingBoxX,boundingBoxY,this.width,this.height);
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			if(!camera.visible || !camera.exists || !this.onScreen(camera)) continue;
			flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,updateMotion: function() {
		var delta;
		var velocityDelta;
		var dt = flixel.FlxG.elapsed;
		velocityDelta = 0.5 * (flixel.util.FlxMath.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		var _g = this;
		_g.set_angle(_g.angle + this.angularVelocity * dt);
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (flixel.util.FlxMath.computeVelocity(this._velocity.x,this._acceleration.x,this._drag.x,this._maxVelocity.x) - this._velocity.x);
		var _g = this._velocity;
		_g.set_x(_g.x + velocityDelta);
		delta = this._velocity.x * dt;
		var _g = this._velocity;
		_g.set_x(_g.x + velocityDelta);
		var _g = this;
		_g.set_x(_g.x + delta);
		velocityDelta = 0.5 * (flixel.util.FlxMath.computeVelocity(this._velocity.y,this._acceleration.y,this._drag.y,this._maxVelocity.y) - this._velocity.y);
		var _g = this._velocity;
		_g.set_y(_g.y + velocityDelta);
		delta = this._velocity.y * dt;
		var _g = this._velocity;
		_g.set_y(_g.y + velocityDelta);
		var _g = this;
		_g.set_y(_g.y + delta);
	}
	,update: function() {
		flixel.FlxBasic._ACTIVECOUNT++;
		this.last.set_x(this.x);
		this.last.set_y(this.y);
		if(this.moves) this.updateMotion();
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,destroy: function() {
		flixel.FlxBasic.prototype.destroy.call(this);
		this.set_velocity(null);
		this.set_acceleration(null);
		this.set_drag(null);
		this.set_maxVelocity(null);
		this.set_scrollFactor(null);
		this.last = null;
		this.cameras = null;
		this._point = null;
		this._velocity = null;
		this._drag = null;
		this._acceleration = null;
		this._maxVelocity = null;
		this._scrollFactor = null;
		this.framesData = null;
		this.set_cachedGraphics(null);
		this.region = null;
	}
	,initVars: function() {
		this.collisionType = flixel.system.FlxCollisionType.OBJECT;
		this.last = new flixel.util.FlxPoint(this.x,this.y);
		this.set_velocity(new flixel.util.FlxPoint());
		this.set_acceleration(new flixel.util.FlxPoint());
		this.set_drag(new flixel.util.FlxPoint());
		this.set_maxVelocity(new flixel.util.FlxPoint(10000,10000));
		this.set_scrollFactor(new flixel.util.FlxPoint(1,1));
		this._point = new flixel.util.FlxPoint();
	}
	,__class__: flixel.FlxObject
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_x:"set_x",set_y:"set_y",set_width:"set_width",set_height:"set_height",set_angle:"set_angle",set_moves:"set_moves",set_immovable:"set_immovable",set_solid:"set_solid",get_solid:"get_solid",set_forceComplexRender:"set_forceComplexRender",set_scrollFactor:"set_scrollFactor",set_velocity:"set_velocity",set_acceleration:"set_acceleration",set_drag:"set_drag",set_maxVelocity:"set_maxVelocity",set_cachedGraphics:"set_cachedGraphics",set_debugBoundingBoxColor:"set_debugBoundingBoxColor"})
});
flixel.FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._angleChanged = false;
	this._cosAngle = 1;
	this._sinAngle = 0;
	this.useColorTransform = false;
	this._facingMult = 1;
	this._blue = 1.0;
	this._green = 1.0;
	this._red = 1.0;
	this.color = 16777215;
	this._blendInt = 0;
	this.antialiasing = false;
	this.alpha = 1.0;
	flixel.FlxObject.call(this,X,Y);
	this.set_facing(16);
	if(SimpleGraphic == null) SimpleGraphic = "flixel/img/logo/default.png";
	this.loadGraphic(SimpleGraphic);
};
$hxClasses["flixel.FlxSprite"] = flixel.FlxSprite;
flixel.FlxSprite.__name__ = ["flixel","FlxSprite"];
flixel.FlxSprite.__super__ = flixel.FlxObject;
flixel.FlxSprite.prototype = $extend(flixel.FlxObject.prototype,{
	set_blend: function(Value) {
		if(Value != null) {
			switch( (Value)[1] ) {
			case 0:
				this._blendInt = 65536;
				break;
			default:
				this._blendInt = 0;
			}
		} else this._blendInt = 0;
		this._blend = Value;
		return Value;
	}
	,get_blend: function() {
		return this._blend;
	}
	,set_scale: function(Value) {
		this._scale = Value;
		return this.scale = Value;
	}
	,set_offset: function(Value) {
		this._offset = Value;
		return this.offset = Value;
	}
	,set_origin: function(Value) {
		this._origin = Value;
		return this.origin = Value;
	}
	,set_angle: function(Value) {
		this._angleChanged = this.angle != Value || this._angleChanged;
		return flixel.FlxObject.prototype.set_angle.call(this,Value);
	}
	,get_colorTransform: function() {
		return this._colorTransform;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this.color == Color) return Color;
		this.color = Color;
		this.updateColorTransform();
		this._red = (this.color >> 16) / 255;
		this._green = (this.color >> 8 & 255) / 255;
		this._blue = (this.color & 255) / 255;
		this.isColored = this.color < 16777215;
		return this.color;
	}
	,set_alpha: function(Alpha) {
		if(Alpha > 1) Alpha = 1;
		if(Alpha < 0) Alpha = 0;
		if(Alpha == this.alpha) return this.alpha;
		this.alpha = Alpha;
		this.updateColorTransform();
		return this.alpha;
	}
	,set_facing: function(Direction) {
		if(this.facing != Direction) this.dirty = true;
		this.facing = Direction;
		this._facingMult = this.flipped != 0 && this.facing == 1?-1:1;
		return Direction;
	}
	,set_frame: function(Value) {
		this.frame = Value;
		if(this.frame != null) {
			this.frameWidth = this.frame.sourceSize.x | 0;
			this.frameHeight = this.frame.sourceSize.y | 0;
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = this.frameWidth;
			this._flashRect.height = this.frameHeight;
			this.dirty = true;
		} else if(this.framesData != null && this.framesData.frames != null && this.framesData.frames.length > 0) {
			this.frame = this.framesData.frames[0];
			this.dirty = true;
		}
		return this.frame;
	}
	,set_pixels: function(Pixels) {
		var key = flixel.FlxG.bitmap.getCacheKeyFor(Pixels);
		if(key == null) {
			key = flixel.FlxG.bitmap.getUniqueKey();
			flixel.FlxG.bitmap.add(Pixels,false,key);
		}
		this.set_cachedGraphics(flixel.FlxG.bitmap.get(key));
		if(this.region == null) this.region = new flixel.system.layer.Region();
		this.region.startX = 0;
		this.region.startY = 0;
		this.region.tileWidth = 0;
		this.region.tileHeight = 0;
		this.region.spacingX = 0;
		this.region.spacingY = 0;
		this.region.width = this.cachedGraphics.bitmap.get_width();
		this.region.height = this.cachedGraphics.bitmap.get_height();
		this.set_width(this.frameWidth = this.cachedGraphics.bitmap.get_width());
		this.set_height(this.frameHeight = this.cachedGraphics.bitmap.get_height());
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return Pixels;
	}
	,get_pixels: function() {
		return this.cachedGraphics.bitmap;
	}
	,simpleRenderSprite: function() {
		return (this.angle == 0 && this.frame.additionalAngle == 0 || this.bakedRotation > 0) && this._scale.x == 1 && this._scale.y == 1;
	}
	,resetFrameBitmapDatas: function() {
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	}
	,getFlxFrameBitmapData: function() {
		var frameBmd = null;
		if(this.frame != null) {
			if(this.facing == 1 && this.flipped > 0) frameBmd = this.frame.getHReversedBitmap(); else frameBmd = this.frame.getBitmap();
		}
		return frameBmd;
	}
	,updateFrameData: function() {
		if(this.cachedGraphics == null) return;
		if(this.cachedGraphics.data != null && (this.region.tileWidth == 0 && this.region.tileHeight == 0)) this.framesData = this.cachedGraphics.get_tilesheet().getTexturePackerFrames(this.cachedGraphics.data); else this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,null);
		this.set_frame(this.framesData.frames[0]);
		this.frames = this.framesData.frames.length;
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			if(this.frame != null) {
				if(this.framePixels == null || this.framePixels.get_width() != this.frameWidth || this.framePixels.get_height() != this.frameHeight) {
					if(this.framePixels != null) this.framePixels.dispose();
					this.framePixels = new flash.display.BitmapData(this.frame.sourceSize.x | 0,this.frame.sourceSize.y | 0);
				}
				this.framePixels.copyPixels(this.getFlxFrameBitmapData(),this._flashRect,this._flashPointZero);
			}
			if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this._colorTransform);
		}
		this.dirty = false;
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.set_x(this._point.x - this._offset.x);
		this._point.set_y(this._point.y - this._offset.y);
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) return false; else {
			var frameData = this.getFlxFrameBitmapData();
			var pixelColor = frameData.getPixel32(this._flashPoint.x | 0,this._flashPoint.y | 0);
			var pixelAlpha = pixelColor >> 24 & 255;
			return pixelAlpha * this.alpha >= Mask;
		}
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(this._scale.x == 1 && this._scale.y == 1) return flixel.FlxObject.prototype.overlapsPoint.call(this,point,InScreenSpace,Camera);
		if(!InScreenSpace) return point.x > this.x - 0.5 * this.width * (this._scale.x - 1) && point.x < this.x + this.width + 0.5 * this.width * (this._scale.x - 1) && point.y > this.y - 0.5 * this.height * (this._scale.y - 1) && point.y < this.y + this.height + 0.5 * this.height * (this._scale.y - 1);
		if(Camera == null) Camera = flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x - 0.5 * this.width * (this._scale.x - 1) && X < this._point.x + this.width + 0.5 * this.width * (this._scale.x - 1) && Y > this._point.y - 0.5 * this.height * (this._scale.y - 1) && Y < this._point.y + this.height + 0.5 * this.height * (this._scale.y - 1);
	}
	,onScreen: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		var minX = this.x - this._offset.x - Camera.scroll.x * this._scrollFactor.x;
		var minY = this.y - this._offset.y - Camera.scroll.y * this._scrollFactor.y;
		var maxX = 0;
		var maxY = 0;
		if((this.angle == 0 || this.bakedRotation > 0) && this._scale.x == 1 && this._scale.y == 1) {
			maxX = minX + this.frameWidth;
			maxY = minY + this.frameHeight;
		} else {
			var radiusX = this._halfWidth;
			var radiusY = this._halfHeight;
			if(this._origin.x == this._halfWidth) radiusX = Math.abs(this._halfWidth * this._scale.x); else {
				var sox = this._scale.x * this._origin.x;
				var sfw = this._scale.x * this.frameWidth;
				var x1 = Math.abs(sox);
				var x2 = Math.abs(sfw - sox);
				radiusX = Math.max(x2,x1);
			}
			if(this._origin.y == this._halfHeight) radiusY = Math.abs(this._halfHeight * this._scale.y); else {
				var soy = this._scale.y * this._origin.y;
				var sfh = this._scale.y * this.frameHeight;
				var y1 = Math.abs(soy);
				var y2 = Math.abs(sfh - soy);
				radiusY = Math.max(y2,y1);
			}
			var radius = Math.max(radiusX,radiusY);
			radius *= 1.415;
			minX += this._origin.x;
			maxX = minX + radius;
			minX -= radius;
			minY += this._origin.y;
			maxY = minY + radius;
			minY -= radius;
		}
		if(maxX < 0 || minX > Camera.width) return false;
		if(maxY < 0 || minY > Camera.height) return false;
		return true;
	}
	,updateColorTransform: function() {
		if(this.alpha != 1 || this.color != 16777215) {
			if(this._colorTransform == null) this._colorTransform = new flash.geom.ColorTransform((this.color >> 16) / 255,(this.color >> 8 & 255) / 255,(this.color & 255) / 255,this.alpha); else {
				this._colorTransform.redMultiplier = (this.color >> 16) / 255;
				this._colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
				this._colorTransform.blueMultiplier = (this.color & 255) / 255;
				this._colorTransform.alphaMultiplier = this.alpha;
			}
			this.useColorTransform = true;
		} else {
			if(this._colorTransform != null) {
				this._colorTransform.redMultiplier = 1;
				this._colorTransform.greenMultiplier = 1;
				this._colorTransform.blueMultiplier = 1;
				this._colorTransform.alphaMultiplier = 1;
			}
			this.useColorTransform = false;
		}
		this.dirty = true;
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var row = this.region.startY;
		var column;
		var rows = this.region.height;
		var columns = this.region.width;
		while(row < rows) {
			column = this.region.startX;
			while(column < columns) {
				if(this.cachedGraphics.bitmap.getPixel32(column,row) == Color) {
					this.cachedGraphics.bitmap.setPixel32(column,row,NewColor);
					if(FetchPositions) positions.push(new flixel.util.FlxPoint(column,row));
					this.dirty = true;
				}
				column++;
			}
			row++;
		}
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
		return positions;
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) AdjustPosition = false;
		this._offset.set_x((this.frameWidth - this.width) * 0.5);
		this._offset.set_y((this.frameHeight - this.height) * 0.5);
		if(AdjustPosition) {
			var _g = this;
			_g.set_x(_g.x + this._offset.x);
			var _g = this;
			_g.set_y(_g.y + this._offset.y);
		}
	}
	,drawFrame: function(Force) {
		if(Force == null) Force = false;
		this.calcFrame(true);
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		Brush.calcFrame(true);
		var bitmapData = Brush.framePixels;
		if((Brush.angle == 0 || Brush.bakedRotation > 0) && Brush._scale.x == 1 && Brush._scale.y == 1 && Brush._blend == null) {
			this._flashPoint.x = X + this.region.startX;
			this._flashPoint.y = Y + this.region.startY;
			this._flashRect2.width = bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0;
			this._flashRect2.height = bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0;
			this.cachedGraphics.bitmap.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this.cachedGraphics.bitmap.get_width();
			this._flashRect2.height = this.cachedGraphics.bitmap.get_height();
			this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
			return;
		}
		this._matrix.identity();
		this._matrix.translate(-Brush._origin.x,-Brush._origin.y);
		this._matrix.scale(Brush._scale.x,Brush._scale.y);
		if(Brush.angle != 0) this._matrix.rotate(Brush.angle * flixel.util.FlxAngle.TO_RAD);
		this._matrix.translate(X + this.region.startX + Brush._origin.x,Y + this.region.startY + Brush._origin.y);
		var brushBlend = Brush._blend;
		this.cachedGraphics.bitmap.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		this.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
	}
	,draw: function() {
		if(this.dirty) this.calcFrame();
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		var cos;
		var sin;
		var isSimpleRender = this.simpleRenderSprite();
		var _g = 0, _g1 = this.cameras;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(!camera.visible || !camera.exists || !this.onScreen(camera)) continue;
			drawItem = camera.getDrawStackItem(this.cachedGraphics,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.set_x(this.x - camera.scroll.x * this._scrollFactor.x - this._offset.x);
			this._point.set_y(this.y - camera.scroll.y * this._scrollFactor.y - this._offset.y);
			this._point.set_x(this._point.x + this._origin.x);
			this._point.set_y(this._point.y + this._origin.y);
			this._point.set_x(Math.floor(this._point.x));
			this._point.set_y(Math.floor(this._point.y));
			var csx = this._facingMult;
			var ssy = 0;
			var ssx = 0;
			var csy = 1;
			var x1 = this._origin.x - this.frame.center.x;
			var y1 = this._origin.y - this.frame.center.y;
			var x2 = x1;
			var y2 = y1;
			var a = csx;
			var b = ssx;
			var c = ssy;
			var d = csy;
			if(!isSimpleRender) {
				if(this._angleChanged) {
					var radians = -this.angle * flixel.util.FlxAngle.TO_RAD;
					this._sinAngle = Math.sin(radians);
					this._cosAngle = Math.cos(radians);
					this._angleChanged = false;
				}
				var sx = this._scale.x * this._facingMult;
				if(this.frame.rotated) {
					cos = -this._sinAngle;
					sin = this._cosAngle;
					csx = cos * sx;
					ssy = sin * this._scale.y;
					ssx = sin * sx;
					csy = cos * this._scale.y;
					x2 = x1 * ssx - y1 * csy;
					y2 = x1 * csx + y1 * ssy;
					a = csy;
					b = ssy;
					c = ssx;
					d = csx;
				} else {
					cos = this._cosAngle;
					sin = this._sinAngle;
					csx = cos * sx;
					ssy = sin * this._scale.y;
					ssx = sin * sx;
					csy = cos * this._scale.y;
					x2 = x1 * csx + y1 * ssy;
					y2 = -x1 * ssx + y1 * csy;
					a = csx;
					b = ssx;
					c = ssy;
					d = csy;
				}
			} else x2 = x1 * csx;
			currDrawData[currIndex++] = this._point.x - x2;
			currDrawData[currIndex++] = this._point.y - y2;
			currDrawData[currIndex++] = this.frame.tileID;
			currDrawData[currIndex++] = a;
			currDrawData[currIndex++] = -b;
			currDrawData[currIndex++] = c;
			currDrawData[currIndex++] = d;
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,update: function() {
		flixel.FlxObject.prototype.update.call(this);
		this.animation.update();
	}
	,resetHelpers: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		this._flashRect2.width = this.cachedGraphics.bitmap.get_width();
		this._flashRect2.height = this.cachedGraphics.bitmap.get_height();
		this._origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		this._halfWidth = this.frameWidth * 0.5;
		this._halfHeight = this.frameHeight * 0.5;
	}
	,setOriginToCenter: function() {
		this._origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,resetSizeFromFrame: function() {
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,resetFrameSize: function() {
		this.frameWidth = this.frame.sourceSize.x | 0;
		this.frameHeight = this.frame.sourceSize.y | 0;
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,resetSize: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,loadRotatedImageFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		var temp = this.loadImageFromTexture(Data);
		if(temp == null) return null;
		this.animation.set_frameName(Image);
		this.antialiasing = AntiAliasing;
		return this;
	}
	,loadImageFromTexture: function(Data,Reverse,Unique,FrameName) {
		if(Unique == null) Unique = false;
		if(Reverse == null) Reverse = false;
		this.bakedRotation = 0;
		if(js.Boot.__instanceof(Data,flixel.util.loaders.CachedGraphics)) {
			this.set_cachedGraphics(Data);
			if(this.cachedGraphics.data == null) return null;
		} else if(js.Boot.__instanceof(Data,flixel.util.loaders.TexturePackerData)) {
			this.set_cachedGraphics(flixel.FlxG.bitmap.add(Data.assetName,Unique));
			this.cachedGraphics.data = Data;
		} else return null;
		this.region = new flixel.system.layer.Region();
		this.region.width = this.cachedGraphics.bitmap.get_width();
		this.region.height = this.cachedGraphics.bitmap.get_height();
		this.flipped = Reverse == true?this.cachedGraphics.bitmap.get_width():0;
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		if(FrameName != null) this.animation.set_frameName(FrameName);
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		this.bakedRotation = 0;
		this.set_cachedGraphics(flixel.FlxG.bitmap.create(Width,Height,Color,Unique,Key));
		this.region = new flixel.system.layer.Region();
		this.region.width = Width;
		this.region.height = Height;
		this.set_width(this.frameWidth = this.cachedGraphics.bitmap.get_width());
		this.set_height(this.frameHeight = this.cachedGraphics.bitmap.get_height());
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		var rows = Math.sqrt(Rotations) | 0;
		var brush = flixel.FlxG.bitmap.add(Graphic,false,Key).bitmap;
		var isRegion = js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion);
		var spriteRegion = isRegion == true?Graphic:null;
		var tempRegion = isRegion == true?spriteRegion.region:null;
		if(Frame >= 0 || isRegion) {
			var full = brush;
			if(isRegion) {
				brush = new flash.display.BitmapData(tempRegion.width,tempRegion.height);
				this._flashRect.x = tempRegion.startX;
				this._flashRect.y = tempRegion.startY;
				this._flashRect.width = tempRegion.width;
				this._flashRect.height = tempRegion.height;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			} else {
				brush = new flash.display.BitmapData(full.___textureBuffer != null?full.___textureBuffer.height:0,full.___textureBuffer != null?full.___textureBuffer.height:0);
				var rx = Frame * (brush.___textureBuffer != null?brush.___textureBuffer.width:0);
				var ry = 0;
				var fw = full.___textureBuffer != null?full.___textureBuffer.width:0;
				if(rx >= fw) {
					ry = (rx / fw | 0) * (brush.___textureBuffer != null?brush.___textureBuffer.height:0);
					rx %= fw;
				}
				this._flashRect.x = rx;
				this._flashRect.y = ry;
				this._flashRect.width = brush.___textureBuffer != null?brush.___textureBuffer.width:0;
				this._flashRect.height = brush.___textureBuffer != null?brush.___textureBuffer.height:0;
				brush.copyPixels(full,this._flashRect,this._flashPointZero);
			}
		}
		var max = brush.___textureBuffer != null?brush.___textureBuffer.width:0;
		if((brush.___textureBuffer != null?brush.___textureBuffer.height:0) > max) max = brush.___textureBuffer != null?brush.___textureBuffer.height:0;
		if(AutoBuffer) max = max * 1.5 | 0;
		var columns = Math.ceil(Rotations / rows);
		this.set_width(max * columns);
		this.set_height(max * rows);
		var key = "";
		if(js.Boot.__instanceof(Graphic,String)) key = Graphic; else if(js.Boot.__instanceof(Graphic,Class)) key = Type.getClassName(Graphic); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData) && Key != null) key = Key; else if(isRegion) {
			key = spriteRegion.data.key;
			key += ":" + tempRegion.startX + ":" + tempRegion.startY + ":" + tempRegion.width + ":" + tempRegion.height + ":" + Rotations;
		} else return null;
		if(!isRegion) key += ":" + Frame + ":" + this.width + "x" + this.height + ":" + Rotations;
		var skipGen = flixel.FlxG.bitmap.checkCache(key);
		this.set_cachedGraphics(flixel.FlxG.bitmap.create((this.width | 0) + columns - 1,(this.height | 0) + rows - 1,0,true,key));
		this.bakedRotation = 360 / Rotations;
		if(!skipGen) {
			var row = 0;
			var column;
			var bakedAngle = 0;
			var halfBrushWidth = (brush.___textureBuffer != null?brush.___textureBuffer.width:0) * 0.5 | 0;
			var halfBrushHeight = (brush.___textureBuffer != null?brush.___textureBuffer.height:0) * 0.5 | 0;
			var midpointX = max * 0.5 | 0;
			var midpointY = max * 0.5 | 0;
			while(row < rows) {
				column = 0;
				while(column < columns) {
					this._matrix.identity();
					this._matrix.translate(-halfBrushWidth,-halfBrushHeight);
					this._matrix.rotate(bakedAngle * flixel.util.FlxAngle.TO_RAD);
					this._matrix.translate(max * column + midpointX + column,midpointY + row);
					bakedAngle += this.bakedRotation;
					this.cachedGraphics.bitmap.draw(brush,this._matrix,null,null,null,AntiAliasing);
					column++;
				}
				midpointY += max;
				row++;
			}
		}
		this.frameWidth = this.frameHeight = max;
		this.set_width(this.set_height(max));
		this.region = new flixel.system.layer.Region(0,0,max,max,1,1);
		this.region.width = this.cachedGraphics.bitmap.get_width();
		this.region.height = this.cachedGraphics.bitmap.get_height();
		this.antialiasing = AntiAliasing;
		this.updateFrameData();
		this.resetHelpers();
		if(AutoBuffer) {
			this.set_width(brush.___textureBuffer != null?brush.___textureBuffer.width:0);
			this.set_height(brush.___textureBuffer != null?brush.___textureBuffer.height:0);
			this.centerOffsets();
		}
		this.animation.destroyAnimations();
		this.animation.createPrerotated();
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Reverse,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Reverse == null) Reverse = false;
		if(Animated == null) Animated = false;
		this.bakedRotation = 0;
		this.set_cachedGraphics(flixel.FlxG.bitmap.add(Graphic,Unique,Key));
		this.flipped = Reverse == true?this.cachedGraphics.bitmap.get_width():0;
		if(Width == 0) Width = Animated == true?this.cachedGraphics.bitmap.get_height():this.cachedGraphics.bitmap.get_width();
		if(Height == 0) Height = Animated == true?Width:this.cachedGraphics.bitmap.get_height();
		if(!js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion)) {
			this.region = new flixel.system.layer.Region(0,0,Width,Height);
			this.region.width = this.cachedGraphics.bitmap.get_width();
			this.region.height = this.cachedGraphics.bitmap.get_height();
		} else {
			this.region = (js.Boot.__cast(Graphic , flixel.util.loaders.TextureRegion)).region.clone();
			if(this.region.tileWidth > 0) Width = this.region.tileWidth; else this.region.tileWidth = this.region.width;
			if(this.region.tileHeight > 0) Height = this.region.tileWidth; else this.region.tileHeight = this.region.height;
		}
		this.set_width(this.frameWidth = Width);
		this.set_height(this.frameHeight = Height);
		this.animation.destroyAnimations();
		this.updateFrameData();
		this.resetHelpers();
		return this;
	}
	,loadfromSprite: function(Sprite) {
		if(!this.exists) flixel.FlxG.log.warn("Warning, trying to clone " + Type.getClassName(Type.getClass(this)) + " object that doesn't exist.");
		this.region = Sprite.region.clone();
		this.flipped = Sprite.flipped;
		this.bakedRotation = Sprite.bakedRotation;
		this.set_cachedGraphics(Sprite.cachedGraphics);
		this.set_width(this.frameWidth = Sprite.frameWidth);
		this.set_height(this.frameHeight = Sprite.frameHeight);
		if(this.bakedRotation > 0) {
			this.set_width(Sprite.width);
			this.set_height(Sprite.height);
			this.centerOffsets();
		}
		this.updateFrameData();
		this.resetHelpers();
		this.antialiasing = Sprite.antialiasing;
		this.animation.destroyAnimations();
		this.animation.copyFrom(Sprite.animation);
		return this;
	}
	,clone: function(NewSprite) {
		if(NewSprite == null) NewSprite = new flixel.FlxSprite();
		NewSprite.loadfromSprite(this);
		return NewSprite;
	}
	,destroy: function() {
		flixel.FlxObject.prototype.destroy.call(this);
		if(this.animation != null) this.animation.destroy();
		this.animation = null;
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this.set_offset(null);
		this.set_origin(null);
		this.set_scale(null);
		this._matrix = null;
		this._colorTransform = null;
		if(this.framePixels != null) this.framePixels.dispose();
		this.framePixels = null;
		this._blend = null;
		this.set_frame(null);
	}
	,initVars: function() {
		flixel.FlxObject.prototype.initVars.call(this);
		this.animation = new flixel.animation.FlxAnimationController(this);
		this._flashPoint = new flash.geom.Point();
		this._flashRect = new flash.geom.Rectangle();
		this._flashRect2 = new flash.geom.Rectangle();
		this._flashPointZero = new flash.geom.Point();
		this.set_offset(new flixel.util.FlxPoint());
		this.set_origin(new flixel.util.FlxPoint());
		this.set_scale(new flixel.util.FlxPoint(1,1));
		this._matrix = new flash.geom.Matrix();
	}
	,__class__: flixel.FlxSprite
	,__properties__: $extend(flixel.FlxObject.prototype.__properties__,{set_pixels:"set_pixels",get_pixels:"get_pixels",set_frame:"set_frame",set_alpha:"set_alpha",set_facing:"set_facing",set_origin:"set_origin",set_offset:"set_offset",set_scale:"set_scale",set_blend:"set_blend",get_blend:"get_blend",set_color:"set_color",get_colorTransform:"get_colorTransform"})
});
var Character = function(Name,X,Y,JsonPath,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.FlxSprite.call(this,X,Y,SimpleGraphic);
	this.set_facing(1);
	this.parseJson(JsonPath);
	this.drag.set_x(this.maxVelocity.x * 4);
	this.drag.set_y(this.maxVelocity.y * 4);
};
$hxClasses["Character"] = Character;
Character.__name__ = ["Character"];
Character.__super__ = flixel.FlxSprite;
Character.prototype = $extend(flixel.FlxSprite.prototype,{
	parseJson: function(file) {
		var filePath = new haxe.io.Path(file);
		var fileStr = openfl.Assets.getText(file);
		if(fileStr == null) throw "The file {" + file + "} doesn't exists!";
		var json = haxe.Json.parse(fileStr);
		var texture = filePath.dir + "/" + json.sprite.texture;
		var frameWidth = json.sprite.framewidth | 0;
		var frameHeight = json.sprite.frameheight | 0;
		this.loadGraphic(texture,true,false,frameWidth,frameHeight);
		var maxX = json.velocity.max_x;
		var maxY = json.velocity.max_y;
		this.maxVelocity.set(maxX,maxY);
		var x = json.collision.x;
		var y = json.collision.y;
		var w = json.collision.width;
		var h = json.collision.height;
		this.offset.set(x,y);
		this.set_width(w);
		this.set_height(h);
		var v_def = json.animations.velocities.def;
		var v_idl = json.animations.velocities.idle;
		var v_wal = json.animations.velocities.walking;
		var v_run = json.animations.velocities.running;
		var tmp;
		var _g = 0, _g1 = Reflect.fields(json.animations.frames);
		while(_g < _g1.length) {
			var dir = _g1[_g];
			++_g;
			var d = Reflect.field(json.animations.frames,dir);
			var _g2 = 0, _g3 = Reflect.fields(d);
			while(_g2 < _g3.length) {
				var type = _g3[_g2];
				++_g2;
				var t = Reflect.field(d,type);
				switch(type) {
				case "def":
					tmp = v_def;
					break;
				case "idle":
					tmp = v_idl;
					break;
				case "walking":
					tmp = v_wal;
					break;
				case "running":
					tmp = v_run;
					break;
				default:
					tmp = v_def;
				}
				this.animation.add(type + "_" + dir,t,tmp,true);
			}
		}
	}
	,resolveAnimation: function() {
		var anim = "idle_";
		if(this.velocity.x != 0 || this.velocity.y != 0) {
			anim = "walking_";
			if(this.velocity.x > 0) this.set_facing(16); else if(this.velocity.x < 0) this.set_facing(1);
			if(this.velocity.y > 0) this.set_facing(4096); else if(this.velocity.y < 0) this.set_facing(256);
		}
		var _g = this;
		switch(_g.facing) {
		case 256:
			anim += "up";
			break;
		case 4096:
			anim += "down";
			break;
		case 1:
			anim += "left";
			break;
		case 16:
			anim += "right";
			break;
		default:
			anim += "down";
		}
		if(this.animation.get_name() != anim) this.animation.play(anim);
	}
	,update: function() {
		this.resolveAnimation();
		flixel.FlxSprite.prototype.update.call(this);
	}
	,__class__: Character
});
var openfl = {}
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,load: function(handler) {
		handler(this);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,exists: function(id,type) {
		return false;
	}
	,__class__: openfl.AssetLibrary
}
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	DefaultAssetLibrary.path.set("assets/data/data-goes-here.txt","assets/data/data-goes-here.txt");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/data/data-goes-here.txt",value);
	DefaultAssetLibrary.path.set("assets/images/actor1.json","assets/images/actor1.json");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/actor1.json",value);
	DefaultAssetLibrary.path.set("assets/images/actor2.json","assets/images/actor2.json");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/actor2.json",value);
	DefaultAssetLibrary.path.set("assets/images/actors.png","assets/images/actors.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/actors.png",value);
	DefaultAssetLibrary.path.set("assets/images/bg.jpg","assets/images/bg.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/bg.jpg",value);
	DefaultAssetLibrary.path.set("assets/images/images-go-here.txt","assets/images/images-go-here.txt");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/images-go-here.txt",value);
	DefaultAssetLibrary.path.set("assets/images/panda.png","assets/images/panda.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/panda.png",value);
	DefaultAssetLibrary.path.set("assets/images/skeleton.json","assets/images/skeleton.json");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/skeleton.json",value);
	DefaultAssetLibrary.path.set("assets/images/skeleton.png","assets/images/skeleton.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/skeleton.png",value);
	DefaultAssetLibrary.path.set("assets/images/water.jpg","assets/images/water.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("assets/images/water.jpg",value);
	DefaultAssetLibrary.path.set("assets/music/music-goes-here.txt","assets/music/music-goes-here.txt");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/music/music-goes-here.txt",value);
	DefaultAssetLibrary.path.set("assets/sounds/sounds-go-here.txt","assets/sounds/sounds-go-here.txt");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("assets/sounds/sounds-go-here.txt",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/console.png","flixel/img/debugger/buttons/console.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/console.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/logDebug.png","flixel/img/debugger/buttons/logDebug.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/logDebug.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/open.png","flixel/img/debugger/buttons/open.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/open.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/pause.png","flixel/img/debugger/buttons/pause.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/pause.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/play.png","flixel/img/debugger/buttons/play.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/play.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/record_off.png","flixel/img/debugger/buttons/record_off.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/record_off.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/record_on.png","flixel/img/debugger/buttons/record_on.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/record_on.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/restart.png","flixel/img/debugger/buttons/restart.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/restart.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/statsDebug.png","flixel/img/debugger/buttons/statsDebug.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/statsDebug.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/step.png","flixel/img/debugger/buttons/step.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/step.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/stop.png","flixel/img/debugger/buttons/stop.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/stop.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/visualDebug.png","flixel/img/debugger/buttons/visualDebug.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/visualDebug.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/buttons/watchDebug.png","flixel/img/debugger/buttons/watchDebug.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/buttons/watchDebug.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/flixel.png","flixel/img/debugger/flixel.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/flixel.png",value);
	DefaultAssetLibrary.path.set("flixel/img/debugger/windowHandle.png","flixel/img/debugger/windowHandle.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/debugger/windowHandle.png",value);
	DefaultAssetLibrary.path.set("flixel/img/logo/default.png","flixel/img/logo/default.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/logo/default.png",value);
	DefaultAssetLibrary.path.set("flixel/img/logo/HaxeFlixel.svg","flixel/img/logo/HaxeFlixel.svg");
	var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/logo/HaxeFlixel.svg",value);
	DefaultAssetLibrary.path.set("flixel/img/logo/logo.png","flixel/img/logo/logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/logo/logo.png",value);
	DefaultAssetLibrary.path.set("flixel/img/preloader/corners.png","flixel/img/preloader/corners.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/preloader/corners.png",value);
	DefaultAssetLibrary.path.set("flixel/img/preloader/light.png","flixel/img/preloader/light.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/preloader/light.png",value);
	DefaultAssetLibrary.path.set("flixel/img/tile/autotiles.png","flixel/img/tile/autotiles.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/tile/autotiles.png",value);
	DefaultAssetLibrary.path.set("flixel/img/tile/autotiles_alt.png","flixel/img/tile/autotiles_alt.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/tile/autotiles_alt.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/analog/base.png","flixel/img/ui/analog/base.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/analog/base.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/analog/thumb.png","flixel/img/ui/analog/thumb.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/analog/thumb.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/button.png","flixel/img/ui/button.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/button.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/cursor.png","flixel/img/ui/cursor.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/cursor.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/fontData11pt.png","flixel/img/ui/fontData11pt.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/fontData11pt.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/a.png","flixel/img/ui/virtualpad/a.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/a.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/b.png","flixel/img/ui/virtualpad/b.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/b.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/c.png","flixel/img/ui/virtualpad/c.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/c.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/down.png","flixel/img/ui/virtualpad/down.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/down.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/left.png","flixel/img/ui/virtualpad/left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/left.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/right.png","flixel/img/ui/virtualpad/right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/right.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/up.png","flixel/img/ui/virtualpad/up.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/up.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/x.png","flixel/img/ui/virtualpad/x.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/x.png",value);
	DefaultAssetLibrary.path.set("flixel/img/ui/virtualpad/y.png","flixel/img/ui/virtualpad/y.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/img/ui/virtualpad/y.png",value);
	DefaultAssetLibrary.path.set("flixel/snd/beep.wav","flixel/snd/beep.wav");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/snd/beep.wav",value);
	DefaultAssetLibrary.path.set("flixel/snd/flixel.wav","flixel/snd/flixel.wav");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("flixel/snd/flixel.wav",value);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(DefaultAssetLibrary.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(ApplicationMain.loaders.get(DefaultAssetLibrary.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || type == openfl.AssetType.SOUND && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var EStates = $hxClasses["EStates"] = { __ename__ : ["EStates"], __constructs__ : ["idle","chasing","searching","returning","attacking"] }
EStates.idle = ["idle",0];
EStates.idle.toString = $estr;
EStates.idle.__enum__ = EStates;
EStates.chasing = ["chasing",1];
EStates.chasing.toString = $estr;
EStates.chasing.__enum__ = EStates;
EStates.searching = ["searching",2];
EStates.searching.toString = $estr;
EStates.searching.__enum__ = EStates;
EStates.returning = ["returning",3];
EStates.returning.toString = $estr;
EStates.returning.__enum__ = EStates;
EStates.attacking = ["attacking",4];
EStates.attacking.toString = $estr;
EStates.attacking.__enum__ = EStates;
var Enemy = function(Name,X,Y,JsonPath,p,lvl,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.leashDistance = 200;
	this.walkSpeed = 20;
	this.moveSpeed = 50;
	this.attackRange = 64;
	this.sightRange = 100;
	Character.call(this,Name,X,Y,JsonPath,SimpleGraphic);
	this.startPos = new flixel.util.FlxPoint(X,Y);
	this.player = p;
	this.level = lvl;
	this.state = EStates.idle;
	this.path = flixel.util.FlxPath.recycle();
	this.path.usePooling = false;
};
$hxClasses["Enemy"] = Enemy;
Enemy.__name__ = ["Enemy"];
Enemy.__super__ = Character;
Enemy.prototype = $extend(Character.prototype,{
	goHome: function() {
		this.set_color(11513775);
		if(this.destination == null) {
			this.destination = this.startPos;
			var pathPoints = this.level.findPath(new flixel.util.FlxPoint(this.x,this.y),this.destination);
			if(pathPoints != null) this.path.run(this,pathPoints,this.moveSpeed);
		}
		if(this.path.finished) {
			this.destination = null;
			this.state = EStates.idle;
		}
	}
	,search: function() {
		if(this.destination == null) {
			this.destination = this.player.getMidpoint(null);
			var pathPoints = this.level.findPath(new flixel.util.FlxPoint(this.x,this.y),this.destination);
			if(pathPoints != null) this.path.run(this,pathPoints,this.moveSpeed);
		}
		if(this.path.finished) {
			this.destination = null;
			this.state = EStates.returning;
		}
		if(this.level.ray(this.getMidpoint(null),this.player.getMidpoint(null)) && flixel.util.FlxMath.distanceBetween(this,this.player) < this.sightRange) {
			this.destination = null;
			this.state = EStates.chasing;
		}
	}
	,chase: function() {
		this.set_color(16711680);
		if(this.level.ray(this.getMidpoint(null),this.player.getMidpoint(null))) {
			var v = new flixel.util.FlxVector(this.player.x - this.x,this.player.y - this.y);
			v.normalize();
			this.velocity.set_x(v.x * this.moveSpeed);
			this.velocity.set_y(v.y * this.moveSpeed);
		} else {
			this.destination = null;
			this.state = EStates.searching;
			return;
		}
	}
	,wander: function() {
		this.set_color(16777215);
		if(flixel.util.FlxMath.distanceBetween(this,this.player) < this.sightRange) {
			this.destination = null;
			this.state = EStates.chasing;
			return;
		}
		if(this.destination == null || flixel.util.FlxMath.distanceToPoint(this,this.destination) < 32) this.destination = new flixel.util.FlxPoint((Math.random() * 2 - 1) * this.leashDistance + this.startPos.x,(Math.random() * 2 - 1) * this.leashDistance + this.startPos.y);
		var v = new flixel.util.FlxVector(this.destination.x - this.x,this.destination.y - this.y);
		v.normalize();
		this.velocity.set_x(v.x * this.walkSpeed);
		this.velocity.set_y(v.y * this.walkSpeed);
	}
	,update: function() {
		var _g = this;
		switch( (_g.state)[1] ) {
		case 0:
			this.wander();
			break;
		case 1:
			this.chase();
			break;
		case 2:
			this.search();
			break;
		case 3:
			this.goHome();
			break;
		case 4:
			break;
		}
		Character.prototype.update.call(this);
	}
	,__class__: Enemy
});
flixel.FlxGame = function(GameSizeX,GameSizeY,InitialState,Zoom,GameFramerate,FlashFramerate,SkipSplash) {
	if(SkipSplash == null) SkipSplash = false;
	if(FlashFramerate == null) FlashFramerate = 60;
	if(GameFramerate == null) GameFramerate = 60;
	if(Zoom == null) Zoom = 1;
	this._skipSplash = false;
	this._customFocusLostScreen = flixel.system.ui.FlxFocusLostScreen;
	this._customSoundTray = flixel.system.ui.FlxSoundTray;
	this._lostFocus = false;
	this._total = 0;
	this.requestedReset = true;
	this.requestedState = null;
	this.state = null;
	this.ticks = 0;
	flash.display.Sprite.call(this);
	this.inputContainer = new flash.display.Sprite();
	flixel.FlxG.init(this,GameSizeX,GameSizeY,Zoom);
	flixel.FlxG.set_framerate(GameFramerate);
	flixel.FlxG.set_flashFramerate(FlashFramerate);
	this._accumulator = this.stepMS;
	this._skipSplash = SkipSplash;
	this._iState = InitialState;
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
};
$hxClasses["flixel.FlxGame"] = flixel.FlxGame;
flixel.FlxGame.__name__ = ["flixel","FlxGame"];
flixel.FlxGame.__super__ = flash.display.Sprite;
flixel.FlxGame.prototype = $extend(flash.display.Sprite.prototype,{
	draw: function() {
		if(flixel.FlxG["debugger"].visible) this.ticks = flash.Lib.getTimer();
		flixel.system.layer.TileSheetExt._DRAWCALLS = 0;
		flixel.FlxG.cameras.lock();
		flixel.FlxG.plugins.draw();
		if(flixel.FlxG["debugger"].visualDebug) flixel.FlxG.plugins.drawDebug();
		this.state.draw();
		if(flixel.FlxG["debugger"].visualDebug) this.state.drawDebug();
		flixel.FlxG.cameras.render();
		if(flixel.FlxG["debugger"].visible) this["debugger"].stats.drawCalls(flixel.system.layer.TileSheetExt._DRAWCALLS);
		flixel.FlxG.cameras.unlock();
		if(flixel.FlxG["debugger"].visible) this["debugger"].stats.flixelDraw(flash.Lib.getTimer() - this.ticks);
	}
	,updateInput: function() {
		flixel.FlxG.inputs.update();
	}
	,update: function() {
		if(this.state != this.requestedState) this.switchState();
		if(flixel.FlxG["debugger"].visible) this.ticks = flash.Lib.getTimer();
		if(flixel.FlxG.fixedTimestep) flixel.FlxG.elapsed = flixel.FlxG.timeScale * this.stepSeconds; else flixel.FlxG.elapsed = flixel.FlxG.timeScale * (this.elapsedMS / 1000);
		this.updateInput();
		flixel.FlxG.sound.updateSounds();
		flixel.FlxG.plugins.update();
		this.state.tryUpdate();
		flixel.FlxG.cameras.update();
		if(flixel.FlxG["debugger"].visible) this["debugger"].stats.flixelUpdate(flash.Lib.getTimer() - this.ticks);
	}
	,step: function() {
		if(this.requestedReset) {
			this.requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this.requestedState,flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			flixel.FlxG.reset();
			this.requestedReset = false;
		}
		flixel.FlxBasic._ACTIVECOUNT = 0;
		this.update();
		if(flixel.FlxG["debugger"].visible) this["debugger"].stats.activeObjects(flixel.FlxBasic._ACTIVECOUNT);
	}
	,switchState: function() {
		flixel.text.pxText.PxBitmapFont.clearStorage();
		flixel.FlxG.bitmap.clearCache();
		flixel.FlxG.cameras.reset();
		flixel.FlxG.inputs.reset();
		flixel.FlxG.sound.destroySounds();
		flixel.FlxG.plugins.onStateSwitch();
		if(this["debugger"] != null) this["debugger"].watch.removeAll();
		var mouseVisibility = flixel.FlxG.mouse._updateCursorContainer || (this.state != null?this.state._useMouse:false);
		if(this.state != null) this.state.destroy();
		this.state = this.requestedState;
		this.state.set_useMouse(mouseVisibility);
		this.state.create();
	}
	,requestNewState: function(newState) {
		this.requestedState = newState;
	}
	,resetGame: function() {
		this.requestedState = Type.createInstance(this._iState,[]);
		if(js.Boot.__instanceof(this.requestedState,flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
		flixel.FlxG.reset();
	}
	,onEnterFrame: function(FlashEvent) {
		this.ticks = flash.Lib.getTimer();
		this.elapsedMS = this.ticks - this._total;
		this._total = this.ticks;
		if(this.soundTray != null && this.soundTray.active) this.soundTray.update(this.elapsedMS);
		if(!this._lostFocus) {
			if(flixel.FlxG.vcr.paused) {
				if(flixel.FlxG.vcr.stepRequested) flixel.FlxG.vcr.stepRequested = false; else if(this.state == this.requestedState) return;
			}
			if(flixel.FlxG.fixedTimestep) {
				this._accumulator += this.elapsedMS;
				if(this._accumulator > this.maxAccumulation) this._accumulator = this.maxAccumulation;
				while(this._accumulator > this.stepMS) {
					this.step();
					this._accumulator = this._accumulator - this.stepMS;
				}
			} else this.step();
			flixel.FlxBasic._VISIBLECOUNT = 0;
			this.draw();
			if(flixel.FlxG["debugger"].visible) {
				this["debugger"].stats.flash(this.elapsedMS);
				this["debugger"].stats.visibleObjects(flixel.FlxBasic._VISIBLECOUNT);
				this["debugger"].stats.update();
				this["debugger"].watch.update();
			}
		}
	}
	,onResize: function(E) {
		var width = flash.Lib.get_current().get_stage().get_stageWidth();
		var height = flash.Lib.get_current().get_stage().get_stageHeight();
		flixel.FlxG.bitmap.onContext();
		this.state.onResize(width,height);
		flixel.FlxG.plugins.onResize(width,height);
		this["debugger"].onResize(width,height);
		if(flixel.FlxG.autoResize) {
			flixel.FlxG.camera.setSize(Math.ceil(width / flixel.FlxG.camera.zoom),Math.ceil(height / flixel.FlxG.camera.zoom));
			flixel.FlxG.width = width;
			flixel.FlxG.height = height;
		}
	}
	,onFocusLost: function(FlashEvent) {
		if(!flixel.FlxG.autoPause) {
			this.state.onFocusLost();
			return;
		}
		this._lostFocus = true;
		if(this._focusLostScreen != null) this._focusLostScreen.set_visible(true);
		this.get_stage().set_frameRate(10);
		flixel.FlxG.sound.pauseSounds();
		flixel.FlxG.inputs.onFocusLost();
	}
	,onFocus: function(FlashEvent) {
		if(!flixel.FlxG.autoPause) {
			this.state.onFocus();
			return;
		}
		this._lostFocus = false;
		if(this._focusLostScreen != null) this._focusLostScreen.set_visible(false);
		this.get_stage().set_frameRate(this.flashFramerate);
		flixel.FlxG.sound.resumeSounds();
		flixel.FlxG.inputs.onFocus();
	}
	,create: function(FlashEvent) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
		this._total = flash.Lib.getTimer();
		this.get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this.get_stage().align = flash.display.StageAlign.TOP_LEFT;
		this.get_stage().set_frameRate(this.flashFramerate);
		this.addChild(this.inputContainer);
		this["debugger"] = new flixel.system.debug.FlxDebugger(flixel.FlxG.width * flixel.FlxCamera.defaultZoom,flixel.FlxG.height * flixel.FlxCamera.defaultZoom);
		this.addChild(this["debugger"]);
		this.soundTray = Type.createInstance(this._customSoundTray,[]);
		this.addChild(this.soundTray);
		this._focusLostScreen = Type.createInstance(this._customFocusLostScreen,[]);
		this.addChild(this._focusLostScreen);
		this.get_stage().addEventListener(flash.events.FocusEvent.FOCUS_OUT,$bind(this,this.onFocusLost));
		this.get_stage().addEventListener(flash.events.FocusEvent.FOCUS_IN,$bind(this,this.onFocus));
		if(this.requestedReset) {
			this.requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this.requestedState,flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			flixel.FlxG.reset();
			this.switchState();
			this.requestedReset = false;
		}
		if((1000 / flixel.FlxG.game.stepMS | 0) < flixel.FlxG.get_flashFramerate()) flixel.FlxG.log.warn("FlxG.flashFramerate: The game's framerate shouldn't be smaller than the flash framerate, since it can stop your game from updating.");
		this.get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
		this.get_stage().addEventListener(flash.events.Event.RESIZE,$bind(this,this.onResize));
	}
	,__class__: flixel.FlxGame
});
var GameClass = function() {
	var stageWidth = flash.Lib.get_current().get_stage().get_stageWidth();
	var stageHeight = flash.Lib.get_current().get_stage().get_stageHeight();
	var ratioX = stageWidth / 960;
	var ratioY = stageHeight / 540;
	var ratio = Math.min(ratioX,ratioY);
	var fps = 60;
	flixel.FlxGame.call(this,Math.ceil(stageWidth / ratio),Math.ceil(stageHeight / ratio),PlayState,ratio,fps,fps);
};
$hxClasses["GameClass"] = GameClass;
GameClass.__name__ = ["GameClass"];
GameClass.__super__ = flixel.FlxGame;
GameClass.prototype = $extend(flixel.FlxGame.prototype,{
	__class__: GameClass
});
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 960;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 540;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,__class__: NMEPreloader
});
flixel.group = {}
flixel.group.FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	this._sortIndex = null;
	this._marker = 0;
	this.autoReviveMembers = false;
	this.length = 0;
	flixel.FlxBasic.call(this);
	this.set_maxSize(Math.abs(MaxSize) | 0);
	this._members = new Array();
	this._basics = this._members;
	this.collisionType = flixel.system.FlxCollisionType.GROUP;
};
$hxClasses["flixel.group.FlxTypedGroup"] = flixel.group.FlxTypedGroup;
flixel.group.FlxTypedGroup.__name__ = ["flixel","group","FlxTypedGroup"];
flixel.group.FlxTypedGroup.__super__ = flixel.FlxBasic;
flixel.group.FlxTypedGroup.prototype = $extend(flixel.FlxBasic.prototype,{
	get_members: function() {
		return this._members;
	}
	,set_maxSize: function(Size) {
		this.maxSize = Math.abs(Size) | 0;
		if(this._marker >= this.maxSize) this._marker = 0;
		if(this.maxSize == 0 || this._members == null || this.maxSize >= this._members.length) return this.maxSize;
		var i = this.maxSize;
		var l = this._members.length;
		var basic = null;
		while(i < l) {
			basic = this._basics[i++];
			if(basic != null) basic.destroy();
		}
		this.length = this.maxSize;
		flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this._members,this.maxSize);
		return this.maxSize;
	}
	,sortHandler: function(Obj1,Obj2) {
		var prop1 = Reflect.getProperty(Obj1,this._sortIndex);
		var prop2 = Reflect.getProperty(Obj2,this._sortIndex);
		if(prop1 < prop2) return this._sortOrder; else if(prop1 > prop2) return -this._sortOrder;
		return 0;
	}
	,revive: function() {
		flixel.FlxBasic.prototype.revive.call(this);
		if(this.autoReviveMembers) {
			var i = 0;
			var basic = null;
			while(i < this.length) {
				basic = this._basics[i++];
				if(basic != null && !basic.exists) basic.revive();
			}
		}
	}
	,kill: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists) basic.kill();
		}
		flixel.FlxBasic.prototype.kill.call(this);
	}
	,clear: function() {
		this.length = 0;
		this._members.splice(0,this._members.length);
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		if(StartIndex < 0) StartIndex = 0;
		if(Length <= 0) Length = this.length;
		return flixel.util.FlxArrayUtil.getRandom_flixel_group_FlxTypedGroup_T(this._members,StartIndex,Length);
	}
	,countDead: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(!basic.alive) count++;
			}
		}
		return count;
	}
	,countLiving: function() {
		var i = 0;
		var count = -1;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(basic.exists && basic.alive) count++;
			}
		}
		return count;
	}
	,getFirstDead: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && !basic.alive) return this._members[i - 1];
		}
		return null;
	}
	,getFirstAlive: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists && basic.alive) return this._members[i - 1];
		}
		return null;
	}
	,getFirstExisting: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists) return this._members[i - 1];
		}
		return null;
	}
	,getFirstNull: function() {
		var i = 0;
		var l = this._members.length;
		while(i < l) if(this._members[i] == null) return i; else i++;
		return -1;
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js.Boot.__instanceof(basic,ObjectClass))) {
				if(Force && Type.getClassName(Type.getClass(basic)) != Type.getClassName(ObjectClass)) continue;
				return this._members[i - 1];
			}
		}
		return null;
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		if(Args == null) Args = [];
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == flixel.system.FlxCollisionType.GROUP) (js.Boot.__cast(basic , flixel.group.FlxTypedGroup)).callAll(FunctionName,null,Recurse); else Reflect.getProperty(basic,FunctionName).apply(basic,Args);
			}
		}
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null) {
				if(Recurse && basic.collisionType == flixel.system.FlxCollisionType.GROUP) basic.setAll(VariableName,Value,Recurse); else Reflect.setProperty(basic,VariableName,Value);
			}
		}
	}
	,sort: function(Index,Order) {
		if(Order == null) Order = -1;
		if(Index == null) Index = "y";
		this._sortIndex = Index;
		this._sortOrder = Order;
		this._members.sort($bind(this,this.sortHandler));
	}
	,replace: function(OldObject,NewObject) {
		var index = flixel.util.FlxArrayUtil.indexOf_flixel_group_FlxTypedGroup_T(this._members,OldObject);
		if(index < 0 || index >= this._members.length) return null;
		this._members[index] = NewObject;
		return NewObject;
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		if(this._members == null) return null;
		var index = flixel.util.FlxArrayUtil.indexOf_flixel_group_FlxTypedGroup_T(this._members,Object);
		if(index < 0 || index >= this._members.length) return null;
		if(Splice) this._members.splice(index,1); else this._members[index] = null;
		return Object;
	}
	,recycle: function(ObjectClass,ContructorArgs,Force) {
		if(Force == null) Force = false;
		if(ContructorArgs == null) ContructorArgs = [];
		var basic = null;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				if(ObjectClass == null) return null;
				return this.add(Type.createInstance(ObjectClass,ContructorArgs));
			} else {
				basic = this._members[this._marker++];
				if(this._marker >= this.maxSize) this._marker = 0;
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass,Force);
			if(basic != null) return basic;
			if(ObjectClass == null) return null;
			return this.add(Type.createInstance(ObjectClass,ContructorArgs));
		}
	}
	,add: function(Object) {
		if(Object == null) {
			flixel.FlxG.log.warn("Cannot add a `null` object to a FlxGroup.");
			return null;
		}
		if(flixel.util.FlxArrayUtil.indexOf_flixel_group_FlxTypedGroup_T(this._members,Object) >= 0) return Object;
		var i = 0;
		var l = this._members.length;
		while(i < l) {
			if(this._members[i] == null) {
				this._members[i] = Object;
				if(i >= this.length) this.length = i + 1;
				return Object;
			}
			i++;
		}
		if(this.maxSize > 0) {
			if(this._members.length >= this.maxSize) return Object; else if(this._members.length * 2 <= this.maxSize) flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this._members,this._members.length * 2); else flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this._members,this.maxSize);
		} else flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T(this._members,this._members.length * 2);
		this._members[i] = Object;
		this.length = i + 1;
		return Object;
	}
	,drawDebug: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists && basic.visible) basic.drawDebug();
		}
	}
	,draw: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists && basic.visible) basic.draw();
		}
	}
	,update: function() {
		var i = 0;
		var basic = null;
		while(i < this.length) {
			basic = this._basics[i++];
			if(basic != null && basic.exists && basic.active) basic.update();
		}
	}
	,destroy: function() {
		flixel.FlxBasic.prototype.destroy.call(this);
		if(this._basics != null) {
			var i = 0;
			var basic = null;
			while(i < this.length) {
				basic = this._basics[i++];
				if(basic != null) basic.destroy();
			}
			this._basics = null;
			this._members = null;
		}
		this._sortIndex = null;
	}
	,__class__: flixel.group.FlxTypedGroup
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{get_members:"get_members",set_maxSize:"set_maxSize"})
});
flixel.group.FlxGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	flixel.group.FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["flixel.group.FlxGroup"] = flixel.group.FlxGroup;
flixel.group.FlxGroup.__name__ = ["flixel","group","FlxGroup"];
flixel.group.FlxGroup.__super__ = flixel.group.FlxTypedGroup;
flixel.group.FlxGroup.prototype = $extend(flixel.group.FlxTypedGroup.prototype,{
	__class__: flixel.group.FlxGroup
});
flixel.FlxState = function() {
	this._useMouse = false;
	flixel.group.FlxGroup.call(this);
	this.persistentUpdate = false;
	this.persistentDraw = true;
	this.set_useMouse(flixel.FlxG.mouse._updateCursorContainer);
};
$hxClasses["flixel.FlxState"] = flixel.FlxState;
flixel.FlxState.__name__ = ["flixel","FlxState"];
flixel.FlxState.__super__ = flixel.group.FlxGroup;
flixel.FlxState.prototype = $extend(flixel.group.FlxGroup.prototype,{
	onResize: function(Width,Height) {
	}
	,onFocus: function() {
	}
	,onFocusLost: function() {
	}
	,destroy: function() {
		if(this._subState != null) this.setSubState(null,null,true);
		flixel.group.FlxGroup.prototype.destroy.call(this);
	}
	,subStateCloseHandler: function(Destroy) {
		if(Destroy == null) Destroy = true;
		if(this._subState.closeCallback != null) this._subState.closeCallback();
		if(Destroy) this._subState.destroy();
		this._subState = null;
		this.updateMouseVisibility();
	}
	,setSubState: function(RequestedState,CloseCallback,DestroyPrevious) {
		if(DestroyPrevious == null) DestroyPrevious = true;
		if(this._subState == RequestedState) return;
		if(this._subState != null) this._subState.close(DestroyPrevious);
		this._subState = RequestedState;
		if(this._subState != null) {
			this._subState._parentState = this;
			this._subState.closeCallback = CloseCallback;
			if(!this.persistentUpdate) flixel.FlxG.inputs.reset();
			if(!this._subState._initialized) {
				this._subState._initialized = true;
				this._subState.create();
			}
		}
	}
	,closeSubState: function(Destroy) {
		if(Destroy == null) Destroy = true;
		this.setSubState(null,null,Destroy);
	}
	,tryUpdate: function() {
		if(this.persistentUpdate || this._subState == null) this.update();
		if(this._subState != null) this._subState.tryUpdate();
	}
	,drawDebug: function() {
		if(this.persistentDraw || this._subState == null) flixel.group.FlxGroup.prototype.drawDebug.call(this);
		if(this._subState != null) this._subState.drawDebug();
	}
	,draw: function() {
		if(this.persistentDraw || this._subState == null) flixel.group.FlxGroup.prototype.draw.call(this);
		if(this._subState != null) this._subState.draw();
	}
	,create: function() {
	}
	,updateMouseVisibility: function() {
		if(this._useMouse) flixel.FlxG.mouse.show(); else flixel.FlxG.mouse.hide();
	}
	,set_useMouse: function(Value) {
		this._useMouse = Value;
		this.updateMouseVisibility();
		return Value;
	}
	,get_useMouse: function() {
		return this._useMouse;
	}
	,set_bgColor: function(Value) {
		return flixel.FlxG.cameras.set_bgColor(Value);
	}
	,get_bgColor: function() {
		return flixel.FlxG.camera == null?-16777216:flixel.FlxG.camera.bgColor;
	}
	,get_subState: function() {
		return this._subState;
	}
	,__class__: flixel.FlxState
	,__properties__: $extend(flixel.group.FlxGroup.prototype.__properties__,{get_subState:"get_subState",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor",set_useMouse:"set_useMouse",get_useMouse:"get_useMouse"})
});
var PlayState = function() {
	flixel.FlxState.call(this);
};
$hxClasses["PlayState"] = PlayState;
PlayState.__name__ = ["PlayState"];
PlayState.__super__ = flixel.FlxState;
PlayState.prototype = $extend(flixel.FlxState.prototype,{
	placeSprites: function(sprites,num) {
		var _g = 0;
		while(_g < num) {
			var i = _g++;
			var x = Math.random() * this.level.width;
			var y = Math.random() * this.level.height;
			var enemy = new Enemy("skeleton",x,y,"assets/images/skeleton.json",this.player,this.level);
			sprites.add(enemy);
			while(enemy.overlaps(this.level)) {
				enemy.set_x(Math.random() * this.level.width);
				enemy.set_y(Math.random() * this.level.height);
				enemy.startPos.set_x(enemy.x);
				enemy.startPos.set_y(enemy.y);
				enemy.destination = null;
			}
		}
	}
	,onPlayerHitEnemy: function(player,enemy) {
		haxe.Log.trace("player hit enemy",{ fileName : "PlayState.hx", lineNumber : 87, className : "PlayState", methodName : "onPlayerHitEnemy"});
	}
	,update: function() {
		flixel.FlxG.overlap(this.player,this.level,null,flixel.FlxObject.separate);
		flixel.FlxG.overlap(this.enemies,this.enemies,null,flixel.FlxObject.separate);
		flixel.FlxG.overlap(this.enemies,this.level,null,flixel.FlxObject.separate);
		flixel.FlxG.overlap(this.player,this.enemies,$bind(this,this.onPlayerHitEnemy));
		flixel.FlxState.prototype.update.call(this);
	}
	,destroy: function() {
		flixel.FlxState.prototype.destroy.call(this);
	}
	,create: function() {
		flixel.FlxG.cameras.set_bgColor(-12968192);
		var data = flixel.addons.tile.FlxCaveGenerator.convertMatrixToString(flixel.addons.tile.FlxCaveGenerator.generateCaveMatrix(300,200,10,0.40));
		this.level = new flixel.tile.FlxTilemap();
		this.level.loadMap(data,"flixel/img/tile/autotiles.png",0,0,1);
		flixel.FlxG.camera.bounds = this.level.getBounds();
		flixel.FlxG.worldBounds.copyFrom(this.level.getBounds());
		this.player = new Player("Sam",flixel.FlxG.width / 2,flixel.FlxG.height / 2,"assets/images/actor2.json");
		this.enemies = new flixel.group.FlxSpriteGroup();
		this.placeSprites(this.enemies,50);
		this.add(this.level);
		this.add(this.enemies);
		this.add(this.player);
		flixel.FlxG.camera.follow(this.player);
		flixel.FlxG.mouse.show();
		flixel.FlxState.prototype.create.call(this);
	}
	,__class__: PlayState
});
var Player = function(Name,X,Y,JsonPath,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	Character.call(this,Name,X,Y,JsonPath,SimpleGraphic);
	this.controllable = true;
};
$hxClasses["Player"] = Player;
Player.__name__ = ["Player"];
Player.__super__ = Character;
Player.prototype = $extend(Character.prototype,{
	update: function() {
		if(this.controllable) {
			this.acceleration.set_x(0);
			this.acceleration.set_y(0);
			if(flixel.FlxG.keyboard.checkKeyStatus(["RIGHT","D"],1)) {
				this.acceleration.set_x(this.drag.x);
				this.set_facing(16);
			} else if(flixel.FlxG.keyboard.checkKeyStatus(["LEFT","A"],1)) {
				this.acceleration.set_x(-this.drag.x);
				this.set_facing(1);
			}
			if(flixel.FlxG.keyboard.checkKeyStatus(["UP","W"],1)) {
				this.acceleration.set_y(-this.drag.y);
				this.set_facing(256);
			} else if(flixel.FlxG.keyboard.checkKeyStatus(["DOWN","S"],1)) {
				this.acceleration.set_y(this.drag.y);
				this.set_facing(4096);
			}
		}
		Character.prototype.update.call(this);
	}
	,__class__: Player
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	addSub: function(s,pos,len) {
		this.b += len == null?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] }
var Xml = function() { }
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.prototype = {
	elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,__class__: Xml
}
var haxe = {}
haxe.Timer = function() { }
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:openfl");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
}
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.__designMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.__disableFullScreen = function() {
}
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.__fullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.__fullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.__getHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.__getWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.__setSurfaceClipping = function(surface,rect) {
}
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
}
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : ["flash","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.bitmapData.__referenceCount++;
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = js.Browser.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = js.Browser.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.__onLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0, _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = js.Browser.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.__transparent?color >>> 24:255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0, _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1164, className : "flash.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0, _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.__imageData);
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me.___textureBuffer != null?me.___textureBuffer.width:0, maxX = 0, minY = me.___textureBuffer != null?me.___textureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = this.__imageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX + 1] = this.__imageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX + 2] = this.__imageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX + 3] = this.__imageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : ["flash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : ["flash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : ["flash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = js.Browser.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.__surface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : ["flash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : ["flash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : ["flash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : ["flash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : ["flash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : ["flash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.__invalidateBounds();
		this.content.__render(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 123, className : "flash.display.Loader", methodName : "loadBytes"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = "application/x-www-form-urlencoded";
			}
			return $r;
		}(this)); else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 86, className : "flash.display.Loader", methodName : "load"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : ["flash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : ["flash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) __mouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.__windowWidth;
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.__disableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.__enableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.__dragObject != null) $this.__drag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt,stack);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) this.__focusObject.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.__focusObject,false,0));
			target.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.__focusObject = target;
		}
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__handleOrientationChange: function() {
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			js.Browser.window.clearInterval(this.__timer);
			this.__timer = js.Browser.window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.__dragBounds = bounds == null?null:bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0, _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event);
		if(this.__invalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event1);
		}
		this.__renderAll();
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.__touchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.__handleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__isOnStage: function() {
		return true;
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.__mouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.__mouseChanges:flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,invalidate: function() {
		this.__invalid = true;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : ["flash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : ["flash","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : ["flash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,__class__: flash.errors.Error
}
flash.errors.ArgumentError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage);
};
$hxClasses["flash.errors.ArgumentError"] = flash.errors.ArgumentError;
flash.errors.ArgumentError.__name__ = ["flash","errors","ArgumentError"];
flash.errors.ArgumentError.__super__ = flash.errors.Error;
flash.errors.ArgumentError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.ArgumentError
});
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text) {
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__preFilter: function(surface) {
	}
	,clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.__soundChannels = new haxe.ds.IntMap();
	this.__soundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.__canPlayMime = function(mime) {
	var audio = js.Browser.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
}
flash.media.Sound.__canPlayType = function(extension) {
	var mime = flash.media.Sound.__mimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.__canPlayMime(mime);
}
flash.media.Sound.__mimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__onSoundLoaded: function(evt) {
		this.__removeEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,__onSoundLoadError: function(evt) {
		this.__removeEventListeners();
		haxe.Log.trace("Error loading sound '" + this.__streamUrl + "'",{ fileName : "Sound.hx", lineNumber : 206, className : "flash.media.Sound", methodName : "__onSoundLoadError"});
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,__removeEventListeners: function() {
		this.__soundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded),false);
		this.__soundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError),false);
	}
	,__load: function(stream,context,mime) {
		if(mime == null) mime = "";
		if(mime == null) {
			var url = stream.url.split("?");
			var extension = HxOverrides.substr(url[0],url[0].lastIndexOf(".") + 1,null);
			mime = flash.media.Sound.__mimeForExtension(extension);
		}
		if(mime == null || !flash.media.Sound.__canPlayMime(mime)) haxe.Log.trace("Warning: '" + stream.url + "' with type '" + mime + "' may not play on this browser.",{ fileName : "Sound.hx", lineNumber : 144, className : "flash.media.Sound", methodName : "__load"});
		this.__streamUrl = stream.url;
		try {
			this.__soundCache = new flash.net.URLLoader();
			this.__addEventListeners();
			this.__soundCache.load(stream);
		} catch( e ) {
			haxe.Log.trace("Warning: Could not preload '" + stream.url + "'",{ fileName : "Sound.hx", lineNumber : 159, className : "flash.media.Sound", methodName : "__load"});
		}
	}
	,__addEventListeners: function() {
		this.__soundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.__onSoundLoaded));
		this.__soundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.__onSoundLoadError));
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.__streamUrl == null) return null;
		var self = this;
		var curIdx = this.__soundIdx;
		var removeRef = function() {
			self.__soundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.__create(this.__streamUrl,startTime,loops,sndTransform,removeRef);
		this.__soundChannels.set(curIdx,channel);
		this.__soundIdx++;
		var audio = channel.__audio;
		return channel;
	}
	,load: function(stream,context) {
		this.__load(stream,context);
	}
	,close: function() {
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.__audioCurrentLoop = 1;
	this.__audioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__create = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.__audio = js.Browser.document.createElement("audio");
	channel.__removeRef = removeRef;
	channel.__audio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.__audio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.__audio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.__audio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.__audioTotalLoops = loops;
		channel.__audio.loop = true;
	}
	channel.__startTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.__audio.currentTime = channel.__startTime;
			channel.__audio.play();
			channel.__audio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.__audio.addEventListener("canplaythrough",onLoad,false);
	} else channel.__audio.autoplay = true;
	channel.__audio.src = src;
	return channel;
}
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.__audio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		haxe.Log.trace("sound stalled",{ fileName : "SoundChannel.hx", lineNumber : 173, className : "flash.media.SoundChannel", methodName : "__onStalled"});
		if(this.__audio != null) this.__audio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.loop = false;
			this.stop();
		} else this.__audioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.__audioCurrentLoop >= this.__audioTotalLoops) {
			this.__audio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.__audio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.__audio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.__audio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.__audio = null;
			var evt1 = new flash.events.Event(flash.events.Event.SOUND_COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.__removeRef != null) this.__removeRef();
		} else {
			this.__audio.currentTime = this.__startTime;
			this.__audio.play();
		}
	}
	,__onProgress: function(evt) {
		haxe.Log.trace("sound progress: " + Std.string(evt),{ fileName : "SoundChannel.hx", lineNumber : 117, className : "flash.media.SoundChannel", methodName : "__onProgress"});
	}
	,stop: function() {
		if(this.__audio != null) {
			this.__audio.pause();
			this.__audio = null;
			if(this.__removeRef != null) this.__removeRef();
		}
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.SharedObject = function() {
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.net.SharedObject"] = flash.net.SharedObject;
flash.net.SharedObject.__name__ = ["flash","net","SharedObject"];
flash.net.SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = js.Browser.window.location.href;
	var so = new flash.net.SharedObject();
	so.__key = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = flash.net.SharedObject.__getLocalStorage().getItem(so.__key);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe.Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : flash.net.SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
}
flash.net.SharedObject.__getLocalStorage = function() {
	var res = js.Browser.getLocalStorage();
	if(res == null) throw new flash.errors.Error("SharedObject not supported");
	return res;
}
flash.net.SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
}
flash.net.SharedObject.__super__ = flash.events.EventDispatcher;
flash.net.SharedObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	get_size: function() {
		var d = haxe.Serializer.run(this.data);
		return haxe.io.Bytes.ofString(d).length;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,flush: function() {
		var data = haxe.Serializer.run(this.data);
		try {
			flash.net.SharedObject.__getLocalStorage().removeItem(this.__key);
			flash.net.SharedObject.__getLocalStorage().setItem(this.__key,data);
		} catch( e ) {
			return flash.net.SharedObjectFlushStatus.PENDING;
		}
		return flash.net.SharedObjectFlushStatus.FLUSHED;
	}
	,clear: function() {
		this.data = { };
		try {
			flash.net.SharedObject.__getLocalStorage().removeItem(this.__key);
		} catch( e ) {
		}
		this.flush();
	}
	,__class__: flash.net.SharedObject
	,__properties__: {get_size:"get_size"}
});
flash.net.SharedObjectFlushStatus = $hxClasses["flash.net.SharedObjectFlushStatus"] = { __ename__ : ["flash","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] }
flash.net.SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
flash.net.SharedObjectFlushStatus.FLUSHED.toString = $estr;
flash.net.SharedObjectFlushStatus.FLUSHED.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.SharedObjectFlushStatus.PENDING = ["PENDING",1];
flash.net.SharedObjectFlushStatus.PENDING.toString = $estr;
flash.net.SharedObjectFlushStatus.PENDING.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : ["flash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.system.System = function() { }
$hxClasses["flash.system.System"] = flash.system.System;
flash.system.System.__name__ = ["flash","system","System"];
flash.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
flash.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
flash.system.System.gc = function() {
}
flash.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
flash.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
flash.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
flash.system.System.get_totalMemory = function() {
	return 0;
}
flash.system.System.get_vmVersion = function() {
	return "openfl - tip";
}
flash.text = {}
flash.text.AntiAliasType = function() { }
$hxClasses["flash.text.AntiAliasType"] = flash.text.AntiAliasType;
flash.text.AntiAliasType.__name__ = ["flash","text","AntiAliasType"];
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
}
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.__glyphData.exists(HxOverrides.cca(str,0));
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : ["flash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : ["flash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : ["flash","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.__graphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.__inputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : ["flash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() { }
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldType = function() { }
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : ["flash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.ui.Mouse = function() {
};
$hxClasses["flash.ui.Mouse"] = flash.ui.Mouse;
flash.ui.Mouse.__name__ = ["flash","ui","Mouse"];
flash.ui.Mouse.hide = function() {
}
flash.ui.Mouse.show = function() {
}
flash.ui.Mouse.prototype = {
	__class__: flash.ui.Mouse
}
flash.ui.Multitouch = function() { }
$hxClasses["flash.ui.Multitouch"] = flash.ui.Multitouch;
flash.ui.Multitouch.__name__ = ["flash","ui","Multitouch"];
flash.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
flash.ui.Multitouch.get_inputMode = function() {
	return flash.ui.MultitouchInputMode.TOUCH_POINT;
}
flash.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == flash.ui.MultitouchInputMode.GESTURE) return flash.ui.Multitouch.get_inputMode();
	return inMode;
}
flash.ui.Multitouch.get_supportsTouchEvents = function() {
	var supported = Reflect.hasField(js.Browser.window,"ontouchstart");
	return supported;
}
flash.ui.MultitouchInputMode = $hxClasses["flash.ui.MultitouchInputMode"] = { __ename__ : ["flash","ui","MultitouchInputMode"], __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] }
flash.ui.MultitouchInputMode.NONE = ["NONE",0];
flash.ui.MultitouchInputMode.NONE.toString = $estr;
flash.ui.MultitouchInputMode.NONE.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
flash.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
flash.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
flash.ui.MultitouchInputMode.GESTURE.toString = $estr;
flash.ui.MultitouchInputMode.GESTURE.__enum__ = flash.ui.MultitouchInputMode;
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
flixel.FlxCamera = function(X,Y,Width,Height,Zoom) {
	if(Zoom == null) Zoom = 0;
	this.useBgAlphaBlending = true;
	this.antialiasing = false;
	flixel.FlxBasic.call(this);
	this._scrollTarget = new flixel.util.FlxPoint();
	this.x = X;
	this.y = Y;
	this.set_width(Width);
	this.set_height(Height);
	this.target = null;
	this.deadzone = null;
	this.scroll = new flixel.util.FlxPoint();
	this._point = new flixel.util.FlxPoint();
	this.bounds = null;
	this._canvas = new flash.display.Sprite();
	this._canvas.set_x(-this.width * 0.5);
	this._canvas.set_y(-this.height * 0.5);
	this.set_color(-1);
	this._flashSprite = new flash.display.Sprite();
	this.set_zoom(Zoom);
	this._flashOffsetX = this.width * 0.5 * this.zoom;
	this._flashOffsetY = this.height * 0.5 * this.zoom;
	this._flashSprite.set_x(this.x + this._flashOffsetX);
	this._flashSprite.set_y(this.y + this._flashOffsetY);
	this._flashSprite.addChild(this._canvas);
	this._flashRect = new flash.geom.Rectangle(0,0,this.width,this.height);
	this._flashPoint = new flash.geom.Point();
	this._fxFlashColor = 0;
	this._fxFlashDuration = 0.0;
	this._fxFlashComplete = null;
	this._fxFlashAlpha = 0.0;
	this._fxFadeColor = 0;
	this._fxFadeDuration = 0.0;
	this._fxFadeComplete = null;
	this._fxFadeAlpha = 0.0;
	this._fxShakeIntensity = 0.0;
	this._fxShakeDuration = 0.0;
	this._fxShakeComplete = null;
	this._fxShakeOffset = new flixel.util.FlxPoint();
	this._fxShakeDirection = 0;
	this._canvas.set_scrollRect(new flash.geom.Rectangle(0,0,this.width * this.zoom,this.height * this.zoom));
	this._debugLayer = new flash.display.Sprite();
	this._debugLayer.set_x(-this.width * 0.5);
	this._debugLayer.set_y(-this.height * 0.5);
	this._debugLayer.set_scaleX(1);
	this._flashSprite.addChild(this._debugLayer);
	this._currentStackItem = new flixel.system.layer.DrawStackItem();
	this._headOfDrawStack = this._currentStackItem;
	this.bgColor = flixel.FlxG.camera == null?-16777216:flixel.FlxG.camera.bgColor;
	this._fxFadeIn = false;
	this.set_alpha(1.0);
	this.set_angle(0.0);
};
$hxClasses["flixel.FlxCamera"] = flixel.FlxCamera;
flixel.FlxCamera.__name__ = ["flixel","FlxCamera"];
flixel.FlxCamera.__super__ = flixel.FlxBasic;
flixel.FlxCamera.prototype = $extend(flixel.FlxBasic.prototype,{
	setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,set_useBgAlphaBlending: function(Value) {
		return this.useBgAlphaBlending = Value;
	}
	,set_height: function(Value) {
		if(Value > 0) {
			this.height = Value;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.height = Value * this.zoom;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetY = this.height * 0.5 * this.zoom;
				this._canvas.set_y(-this.height * 0.5);
				this._debugLayer.set_y(this._canvas.get_y());
			}
		}
		return Value;
	}
	,set_width: function(Value) {
		if(Value > 0) {
			this.width = Value;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.width = Value * this.zoom;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetX = this.width * 0.5 * this.zoom;
				this._canvas.set_x(-this.width * 0.5);
				this._debugLayer.set_x(this._canvas.get_x());
			}
		}
		return Value;
	}
	,drawFX: function() {
		var alphaComponent;
		if(this._fxFlashAlpha > 0.0) {
			alphaComponent = this._fxFlashColor >> 24 & 255;
			this.fill(this._fxFlashColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFlashAlpha / 255,this._canvas.get_graphics());
		}
		if(this._fxFadeAlpha > 0.0) {
			alphaComponent = this._fxFadeColor >> 24 & 255;
			this.fill(this._fxFadeColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFadeAlpha / 255,this._canvas.get_graphics());
		}
		if(this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0) {
			var _g = this._flashSprite;
			_g.set_x(_g.get_x() + this._fxShakeOffset.x);
			var _g = this._flashSprite;
			_g.set_y(_g.get_y() + this._fxShakeOffset.y);
		}
	}
	,fill: function(Color,BlendAlpha,FxAlpha,graphics) {
		if(FxAlpha == null) FxAlpha = 1.0;
		if(BlendAlpha == null) BlendAlpha = true;
		if(FxAlpha == 0) return;
		var targetGraphics = graphics == null?this._canvas.get_graphics():graphics;
		Color = Color & 16777215;
		targetGraphics.beginFill(Color,FxAlpha);
		targetGraphics.drawRect(0,0,this.width,this.height);
		targetGraphics.endFill();
	}
	,getContainerSprite: function() {
		return this._flashSprite;
	}
	,setScale: function(X,Y) {
		this._flashSprite.set_scaleX(X);
		this._flashSprite.set_scaleY(Y);
		this._flashOffsetX = this.width * 0.5 * X;
		this._flashOffsetY = this.height * 0.5 * Y;
	}
	,getScale: function() {
		return this._point.set(this._flashSprite.get_scaleX(),this._flashSprite.get_scaleY());
	}
	,set_antialiasing: function(Antialiasing) {
		this.antialiasing = Antialiasing;
		return Antialiasing;
	}
	,set_color: function(Color) {
		this.color = Color & 16777215;
		var colorTransform = this._canvas.transform.colorTransform;
		colorTransform.redMultiplier = (this.color >> 16) / 255;
		colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
		colorTransform.blueMultiplier = (this.color & 255) / 255;
		this._canvas.transform.set_colorTransform(colorTransform);
		return Color;
	}
	,set_angle: function(Angle) {
		this.angle = Angle;
		this._flashSprite.set_rotation(Angle);
		return Angle;
	}
	,set_alpha: function(Alpha) {
		this.alpha = flixel.util.FlxMath.bound(Alpha,0,1);
		this._canvas.alpha = Alpha;
		return Alpha;
	}
	,set_zoom: function(Zoom) {
		if(Zoom == 0) this.zoom = flixel.FlxCamera.defaultZoom; else this.zoom = Zoom;
		this.setScale(this.zoom,this.zoom);
		return this.zoom;
	}
	,copyFrom: function(Camera) {
		if(Camera.bounds == null) this.bounds = null; else {
			if(this.bounds == null) this.bounds = new flixel.util.FlxRect();
			this.bounds.copyFrom(Camera.bounds);
		}
		this.target = Camera.target;
		if(this.target != null) {
			if(Camera.deadzone == null) this.deadzone = null; else {
				if(this.deadzone == null) this.deadzone = new flixel.util.FlxRect();
				this.deadzone.copyFrom(Camera.deadzone);
			}
		}
		return this;
	}
	,stopFX: function() {
		this._fxFlashAlpha = 0.0;
		this._fxFadeAlpha = 0.0;
		this._fxShakeDuration = 0;
		this._flashSprite.set_x(this.x + this._flashOffsetX);
		this._flashSprite.set_y(this.y + this._flashOffsetY);
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(!Force && (this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0)) return;
		this._fxShakeIntensity = Intensity;
		this._fxShakeDuration = Duration;
		this._fxShakeComplete = OnComplete;
		this._fxShakeDirection = Direction;
		this._fxShakeOffset.set();
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		if(!Force && this._fxFadeAlpha > 0.0) return;
		this._fxFadeColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFadeIn = FadeIn;
		this._fxFadeDuration = Duration;
		this._fxFadeComplete = OnComplete;
		if(this._fxFadeIn) this._fxFadeAlpha = 0.999999; else this._fxFadeAlpha = 0.0000000000000001;
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		if(!Force && this._fxFlashAlpha > 0.0) return;
		this._fxFlashColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFlashDuration = Duration;
		this._fxFlashComplete = OnComplete;
		this._fxFlashAlpha = 1.0;
	}
	,setBounds: function(X,Y,Width,Height,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(this.bounds == null) this.bounds = new flixel.util.FlxRect();
		this.bounds.set(X,Y,Width,Height);
		if(UpdateWorld) flixel.FlxG.worldBounds.copyFrom(this.bounds);
		this.update();
	}
	,focusOn: function(point) {
		this.scroll.set(point.x - this.width * 0.5,point.y - this.height * 0.5);
	}
	,followAdjust: function(LeadX,LeadY) {
		if(LeadY == null) LeadY = 0;
		if(LeadX == null) LeadX = 0;
		this.followLead = new flash.geom.Point(LeadX,LeadY);
	}
	,follow: function(Target,Style,Offset,Lerp) {
		if(Lerp == null) Lerp = 0;
		if(Style == null) Style = 0;
		this.style = Style;
		this.target = Target;
		this.followLerp = Lerp;
		var helper;
		var w = 0;
		var h = 0;
		this._lastTargetPosition = null;
		switch(Style) {
		case 1:
			var w1 = this.width / 8 + (Offset != null?Offset.x:0);
			var h1 = this.height / 3 + (Offset != null?Offset.y:0);
			this.deadzone = new flixel.util.FlxRect((this.width - w1) / 2,(this.height - h1) / 2 - h1 * 0.25,w1,h1);
			break;
		case 2:
			helper = Math.max(this.width,this.height) / 4;
			this.deadzone = new flixel.util.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 3:
			helper = Math.max(this.width,this.height) / 8;
			this.deadzone = new flixel.util.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 0:
			if(this.target != null) {
				w = this.target.width + (Offset != null?Offset.x:0);
				h = this.target.height + (Offset != null?Offset.y:0);
			}
			this.deadzone = new flixel.util.FlxRect((this.width - w) / 2,(this.height - h) / 2 - h * 0.25,w,h);
			break;
		case 4:
			this.deadzone = new flixel.util.FlxRect(0,0,this.width,this.height);
			break;
		default:
			this.deadzone = null;
		}
	}
	,update: function() {
		if(flixel.FlxG.paused) return;
		if(this.target != null) {
			if(this.deadzone == null) this.focusOn(this.target.getMidpoint(this._point)); else {
				var edge;
				var targetX = this.target.x;
				var targetY = this.target.y;
				if(this.style == 4) {
					if(targetX > this.scroll.x + this.width) {
						var _g = this._scrollTarget;
						_g.set_x(_g.x + this.width);
					} else if(targetX < this.scroll.x) {
						var _g = this._scrollTarget;
						_g.set_x(_g.x - this.width);
					}
					if(targetY > this.scroll.y + this.height) {
						var _g = this._scrollTarget;
						_g.set_y(_g.y + this.height);
					} else if(targetY < this.scroll.y) {
						var _g = this._scrollTarget;
						_g.set_y(_g.y - this.height);
					}
				} else {
					edge = targetX - this.deadzone.x;
					if(this._scrollTarget.x > edge) this._scrollTarget.set_x(edge);
					edge = targetX + this.target.width - this.deadzone.x - this.deadzone.width;
					if(this._scrollTarget.x < edge) this._scrollTarget.set_x(edge);
					edge = targetY - this.deadzone.y;
					if(this._scrollTarget.y > edge) this._scrollTarget.set_y(edge);
					edge = targetY + this.target.height - this.deadzone.y - this.deadzone.height;
					if(this._scrollTarget.y < edge) this._scrollTarget.set_y(edge);
				}
				if(this.followLead != null && js.Boot.__instanceof(this.target,flixel.FlxSprite)) {
					if(this._lastTargetPosition == null) this._lastTargetPosition = new flixel.util.FlxPoint(this.target.x,this.target.y);
					var _g = this._scrollTarget;
					_g.set_x(_g.x + (this.target.x - this._lastTargetPosition.x) * this.followLead.x);
					var _g = this._scrollTarget;
					_g.set_y(_g.y + (this.target.y - this._lastTargetPosition.y) * this.followLead.y);
					this._lastTargetPosition.set_x(this.target.x);
					this._lastTargetPosition.set_y(this.target.y);
				}
				if(this.followLerp == 0) {
					this.scroll.set_x(this._scrollTarget.x);
					this.scroll.set_y(this._scrollTarget.y);
				} else {
					var _g = this.scroll;
					_g.set_x(_g.x + (this._scrollTarget.x - this.scroll.x) * flixel.FlxG.elapsed / (flixel.FlxG.elapsed + this.followLerp * flixel.FlxG.elapsed));
					var _g = this.scroll;
					_g.set_y(_g.y + (this._scrollTarget.y - this.scroll.y) * flixel.FlxG.elapsed / (flixel.FlxG.elapsed + this.followLerp * flixel.FlxG.elapsed));
				}
			}
		}
		if(this.bounds != null) {
			if(this.scroll.x < this.bounds.get_left()) this.scroll.set_x(this.bounds.get_left());
			if(this.scroll.x > this.bounds.get_right() - this.width) this.scroll.set_x(this.bounds.get_right() - this.width);
			if(this.scroll.y < this.bounds.get_top()) this.scroll.set_y(this.bounds.get_top());
			if(this.scroll.y > this.bounds.get_bottom() - this.height) this.scroll.set_y(this.bounds.get_bottom() - this.height);
		}
		if(this._fxFlashAlpha > 0.0) {
			this._fxFlashAlpha -= flixel.FlxG.elapsed / this._fxFlashDuration;
			if(this._fxFlashAlpha <= 0 && this._fxFlashComplete != null) this._fxFlashComplete();
		}
		if(this._fxFadeAlpha > 0.0 && this._fxFadeAlpha < 1.0) {
			if(this._fxFadeIn) {
				this._fxFadeAlpha -= flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha <= 0.0) {
					this._fxFadeAlpha = 0.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			} else {
				this._fxFadeAlpha += flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha >= 1.0) {
					this._fxFadeAlpha = 1.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			}
		}
		if(this._fxShakeDuration > 0) {
			this._fxShakeDuration -= flixel.FlxG.elapsed;
			if(this._fxShakeDuration <= 0) {
				this._fxShakeOffset.set();
				if(this._fxShakeComplete != null) this._fxShakeComplete();
			} else {
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 1) this._fxShakeOffset.set_x(((function($this) {
					var $r;
					flixel.util.FlxRandom.globalSeed = 69621 * (flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(flixel.util.FlxRandom.globalSeed <= 0) flixel.util.FlxRandom.globalSeed += 1;
					$r = flixel.util.FlxRandom.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.width * 2 - this._fxShakeIntensity * this.width) * this.zoom);
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 2) this._fxShakeOffset.set_y(((function($this) {
					var $r;
					flixel.util.FlxRandom.globalSeed = 69621 * (flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(flixel.util.FlxRandom.globalSeed <= 0) flixel.util.FlxRandom.globalSeed += 1;
					$r = flixel.util.FlxRandom.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.height * 2 - this._fxShakeIntensity * this.height) * this.zoom);
			}
			if(this.target != null) {
				this._flashSprite.set_x(this.x + this._flashOffsetX);
				this._flashSprite.set_y(this.y + this._flashOffsetY);
			}
		}
	}
	,destroy: function() {
		this.target = null;
		this.scroll = null;
		this.deadzone = null;
		this.bounds = null;
		this._flashRect = null;
		this._flashPoint = null;
		this._fxFlashComplete = null;
		this._fxFadeComplete = null;
		this._fxShakeComplete = null;
		this._fxShakeOffset = null;
		this._flashSprite.removeChild(this._debugLayer);
		this._debugLayer = null;
		this._flashSprite.removeChild(this._canvas);
		var canvasNumChildren = this._canvas.__children.length;
		var _g1 = 0, _g = canvasNumChildren;
		while(_g1 < _g) {
			var i = _g1++;
			this._canvas.removeChildAt(0);
		}
		this._canvas = null;
		this.clearDrawStack();
		this._headOfDrawStack.dispose();
		this._headOfDrawStack = null;
		this._currentStackItem = null;
		this._flashSprite = null;
		flixel.FlxBasic.prototype.destroy.call(this);
	}
	,render: function() {
		var currItem = this._headOfDrawStack;
		while(currItem != null) {
			var data = currItem.drawData;
			var dataLen = data.length;
			var position = currItem.position;
			if(position > 0) {
				if(dataLen != position) data.length = position;
				var tempFlags = 16;
				if(currItem.useAlpha) tempFlags |= 8;
				currItem.graphics.get_tilesheet().tileSheet.drawTiles(this._canvas.get_graphics(),data,this.antialiasing || currItem.antialiasing,tempFlags);
				flixel.system.layer.TileSheetExt._DRAWCALLS++;
			}
			currItem = currItem.next;
		}
	}
	,clearDrawStack: function() {
		var currItem = this._headOfDrawStack.next;
		while(currItem != null) {
			currItem.graphics = null;
			currItem.initialized = false;
			currItem.antialiasing = false;
			currItem.position = 0;
			var newStorageHead = currItem;
			currItem = currItem.next;
			if(flixel.FlxCamera._storageHead == null) {
				flixel.FlxCamera._storageHead = newStorageHead;
				newStorageHead.next = null;
			} else {
				newStorageHead.next = flixel.FlxCamera._storageHead;
				flixel.FlxCamera._storageHead = newStorageHead;
			}
		}
		this._headOfDrawStack.reset();
		this._headOfDrawStack.next = null;
		this._currentStackItem = this._headOfDrawStack;
	}
	,getDrawStackItem: function(ObjGraphics,UseAlpha,ObjAntialiasing) {
		if(ObjAntialiasing == null) ObjAntialiasing = false;
		var itemToReturn = null;
		if(this._currentStackItem.initialized == false) {
			this._headOfDrawStack = this._currentStackItem;
			this._currentStackItem.graphics = ObjGraphics;
			this._currentStackItem.antialiasing = ObjAntialiasing;
			this._currentStackItem.useAlpha = UseAlpha;
			itemToReturn = this._currentStackItem;
		} else if(this._currentStackItem.graphics == ObjGraphics && this._currentStackItem.useAlpha == UseAlpha) itemToReturn = this._currentStackItem;
		if(itemToReturn == null) {
			var newItem = null;
			if(flixel.FlxCamera._storageHead != null) {
				newItem = flixel.FlxCamera._storageHead;
				var newHead = flixel.FlxCamera._storageHead.next;
				newItem.next = null;
				flixel.FlxCamera._storageHead = newHead;
			} else newItem = new flixel.system.layer.DrawStackItem();
			newItem.graphics = ObjGraphics;
			newItem.antialiasing = ObjAntialiasing;
			newItem.useAlpha = UseAlpha;
			this._currentStackItem.next = newItem;
			this._currentStackItem = newItem;
			itemToReturn = this._currentStackItem;
		}
		itemToReturn.initialized = true;
		return itemToReturn;
	}
	,__class__: flixel.FlxCamera
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{set_width:"set_width",set_height:"set_height",set_zoom:"set_zoom",set_alpha:"set_alpha",set_angle:"set_angle",set_color:"set_color",set_antialiasing:"set_antialiasing",set_useBgAlphaBlending:"set_useBgAlphaBlending"})
});
flixel.system = {}
flixel.system.frontEnds = {}
flixel.system.frontEnds.BitmapFrontEnd = function() {
	this.clearCache();
};
$hxClasses["flixel.system.frontEnds.BitmapFrontEnd"] = flixel.system.frontEnds.BitmapFrontEnd;
flixel.system.frontEnds.BitmapFrontEnd.__name__ = ["flixel","system","frontEnds","BitmapFrontEnd"];
flixel.system.frontEnds.BitmapFrontEnd.prototype = {
	inOpenFlAssets: function(bitmap) {
		var bitmapDataCache = openfl.Assets.cache.bitmapData;
		if(bitmapDataCache != null) {
			var $it0 = ((function(_e) {
				return function() {
					return _e.iterator();
				};
			})(bitmapDataCache))();
			while( $it0.hasNext() ) {
				var bd = $it0.next();
				if(bd == bitmap) return true;
			}
		}
		return false;
	}
	,clearCache: function() {
		var obj;
		if(this._cache == null) this._cache = new haxe.ds.StringMap();
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			obj = this._cache.get(key);
			if(obj != null && !obj.persist && this.inOpenFlAssets(obj.bitmap) == false) {
				this._cache.remove(key);
				obj.destroy();
				obj = null;
			}
		}
	}
	,remove: function(key) {
		if(this._cache.exists(key)) {
			var obj = this._cache.get(key);
			if(this.inOpenFlAssets(obj.bitmap) == false) {
				this._cache.remove(key);
				obj.destroy();
			}
		}
	}
	,getUniqueKey: function(baseKey) {
		if(baseKey == null) baseKey = "pixels";
		if(this.checkCache(baseKey)) {
			var inc = 0;
			var ukey;
			do ukey = baseKey + inc++; while(this.checkCache(ukey));
			baseKey = ukey;
		}
		return baseKey;
	}
	,getCacheKeyFor: function(bmd) {
		var $it0 = this._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var data = this._cache.get(key).bitmap;
			if(data == bmd) return key;
		}
		return null;
	}
	,get: function(key) {
		return this._cache.get(key);
	}
	,addWithSpaces: function(Graphic,FrameWidth,FrameHeight,SpacingX,SpacingY,Unique,Key) {
		if(Unique == null) Unique = false;
		if(SpacingY == null) SpacingY = 1;
		if(SpacingX == null) SpacingX = 1;
		if(Graphic == null) return null;
		var region = null;
		var graphic = null;
		var isClass = true;
		var isBitmap = true;
		var isRegion = true;
		var isGraphics = true;
		if(js.Boot.__instanceof(Graphic,flixel.util.loaders.CachedGraphics)) {
			isClass = false;
			isBitmap = false;
			isRegion = false;
			isGraphics = true;
			graphic = js.Boot.__cast(Graphic , flixel.util.loaders.CachedGraphics);
			if(!Unique && (FrameWidth <= 0 && FrameHeight <= 0)) return graphic;
		} else if(js.Boot.__instanceof(Graphic,Class)) {
			isClass = true;
			isBitmap = false;
			isRegion = false;
			isGraphics = false;
		} else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) {
			isClass = false;
			isBitmap = true;
			isRegion = false;
			isGraphics = false;
		} else if(js.Boot.__instanceof(Graphic,flixel.util.loaders.TextureRegion)) {
			isClass = false;
			isBitmap = false;
			isRegion = true;
			isGraphics = false;
			region = js.Boot.__cast(Graphic , flixel.util.loaders.TextureRegion);
		} else if(js.Boot.__instanceof(Graphic,String)) {
			isClass = false;
			isBitmap = false;
			isRegion = false;
			isGraphics = false;
		} else return null;
		var additionalKey = "";
		if(FrameWidth > 0 || FrameHeight > 0) additionalKey = "FrameSize:" + FrameWidth + "_" + FrameHeight + "_Spacing:" + SpacingX + "_" + SpacingY;
		var key = Key;
		if(key == null) {
			if(isClass) key = Type.getClassName(js.Boot.__cast(Graphic , Class)); else if(isBitmap) {
				if(!Unique) {
					key = this.getCacheKeyFor(Graphic);
					if(key == null) key = this.getUniqueKey();
				}
			} else if(isRegion) key = region.data.key; else if(isGraphics) key = graphic.key; else key = Graphic;
			key += additionalKey;
			if(Unique) key = this.getUniqueKey(key == null?"pixels":key);
		}
		if(!this.checkCache(key)) {
			var bd = null;
			if(isClass) bd = Type.createInstance(js.Boot.__cast(Graphic , Class),[0,0]); else if(isBitmap) bd = Graphic; else if(isRegion) bd = region.data.bitmap; else if(isGraphics) bd = graphic.bitmap; else bd = flixel.system.FlxAssets.getBitmapData(Graphic);
			if(FrameWidth > 0 || FrameHeight > 0) {
				var numHorizontalFrames = FrameWidth == 0?1:(bd.___textureBuffer != null?bd.___textureBuffer.width:0) / FrameWidth | 0;
				var numVerticalFrames = FrameHeight == 0?1:(bd.___textureBuffer != null?bd.___textureBuffer.height:0) / FrameHeight | 0;
				FrameWidth = FrameWidth == 0?bd.___textureBuffer != null?bd.___textureBuffer.width:0:FrameWidth;
				FrameHeight = FrameHeight == 0?bd.___textureBuffer != null?bd.___textureBuffer.height:0:FrameHeight;
				var tempBitmap = new flash.display.BitmapData((bd.___textureBuffer != null?bd.___textureBuffer.width:0) + numHorizontalFrames * SpacingX,(bd.___textureBuffer != null?bd.___textureBuffer.height:0) + numVerticalFrames * SpacingY,true,0);
				var tempRect = new flash.geom.Rectangle(0,0,FrameWidth,FrameHeight);
				var tempPoint = new flash.geom.Point();
				var _g = 0;
				while(_g < numHorizontalFrames) {
					var i = _g++;
					tempPoint.x = i * (FrameWidth + SpacingX);
					tempRect.x = i * FrameWidth;
					var _g2 = 0, _g1 = numVerticalFrames;
					while(_g2 < _g1) {
						var j = _g2++;
						tempPoint.y = j * (FrameHeight + SpacingY);
						tempRect.y = j * FrameHeight;
						tempBitmap.copyPixels(bd,tempRect,tempPoint);
					}
				}
				bd = tempBitmap;
			}
			if(Unique) bd = bd.clone();
			var co = new flixel.util.loaders.CachedGraphics(key,bd);
			if(isClass && !Unique) co.assetsClass = Graphic; else if(!isClass && !isBitmap && !isRegion && !Unique) co.assetsKey = Graphic;
			this._cache.set(key,co);
		}
		return this._cache.get(key);
	}
	,add: function(Graphic,Unique,Key) {
		if(Unique == null) Unique = false;
		return this.addWithSpaces(Graphic,0,0,1,1,Unique,Key);
	}
	,create: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		var key = Key;
		if(key == null) {
			key = Width + "x" + Height + ":" + Color;
			if(Unique && this.checkCache(key)) key = this.getUniqueKey(key);
		}
		if(!this.checkCache(key)) this._cache.set(key,new flixel.util.loaders.CachedGraphics(key,new flash.display.BitmapData(Width,Height,true,Color)));
		return this._cache.get(key);
	}
	,checkCache: function(Key) {
		return this._cache.exists(Key) && this._cache.get(Key) != null;
	}
	,dumpCache: function() {
	}
	,onContext: function() {
		var obj;
		if(this._cache != null) {
			var $it0 = this._cache.keys();
			while( $it0.hasNext() ) {
				var key = $it0.next();
				obj = this._cache.get(key);
				if(obj != null && obj.isDumped) obj.onContext();
			}
		}
	}
	,get_whitePixel: function() {
		if(this._whitePixel == null) {
			var bd = new flash.display.BitmapData(2,2,true,-1);
			this._whitePixel = new flixel.util.loaders.CachedGraphics("whitePixel",bd,true);
			this._whitePixel.get_tilesheet().addTileRect(new flash.geom.Rectangle(0,0,1,1),new flash.geom.Point(0,0));
		}
		return this._whitePixel;
	}
	,__class__: flixel.system.frontEnds.BitmapFrontEnd
	,__properties__: {get_whitePixel:"get_whitePixel"}
}
flixel.system.frontEnds.CameraFrontEnd = function() {
	this.useBufferLocking = false;
	this._cameraRect = new flash.geom.Rectangle();
	this.list = new Array();
};
$hxClasses["flixel.system.frontEnds.CameraFrontEnd"] = flixel.system.frontEnds.CameraFrontEnd;
flixel.system.frontEnds.CameraFrontEnd.__name__ = ["flixel","system","frontEnds","CameraFrontEnd"];
flixel.system.frontEnds.CameraFrontEnd.prototype = {
	set_bgColor: function(Color) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.bgColor = Color;
		}
		return Color;
	}
	,get_bgColor: function() {
		if(flixel.FlxG.camera == null) return -16777216; else return flixel.FlxG.camera.bgColor;
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.shake(Intensity,Duration,OnComplete,Force,Direction);
		}
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.fade(Color,Duration,FadeIn,OnComplete,Force);
		}
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			camera.flash(Color,Duration,OnComplete,Force);
		}
	}
	,reset: function(NewCamera) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			flixel.FlxG.game.removeChild(camera._flashSprite);
			camera.destroy();
		}
		this.list.splice(0,this.list.length);
		if(NewCamera == null) NewCamera = new flixel.FlxCamera(0,0,flixel.FlxG.width,flixel.FlxG.height);
		flixel.FlxG.camera = (function($this) {
			var $r;
			flixel.FlxG.game.addChildAt(NewCamera._flashSprite,flixel.FlxG.game.getChildIndex(flixel.FlxG.game.inputContainer));
			flixel.FlxG.cameras.list.push(NewCamera);
			NewCamera.ID = flixel.FlxG.cameras.list.length - 1;
			$r = NewCamera;
			return $r;
		}(this));
		NewCamera.ID = 0;
	}
	,remove: function(Camera,Destroy) {
		if(Destroy == null) Destroy = true;
		if(Camera != null && flixel.FlxG.game.contains(Camera._flashSprite)) {
			flixel.FlxG.game.removeChild(Camera._flashSprite);
			var index = flixel.util.FlxArrayUtil.indexOf_flixel_FlxCamera(flixel.FlxG.cameras.list,Camera);
			if(index >= 0) flixel.FlxG.cameras.list.splice(index,1);
		} else flixel.FlxG.log.error("Removing camera, not part of game.");
		var _g1 = 0, _g = this.list.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.list[i].ID = i;
		}
		if(Destroy) Camera.destroy();
	}
	,add: function(NewCamera) {
		flixel.FlxG.game.addChildAt(NewCamera._flashSprite,flixel.FlxG.game.getChildIndex(flixel.FlxG.game.inputContainer));
		flixel.FlxG.cameras.list.push(NewCamera);
		NewCamera.ID = flixel.FlxG.cameras.list.length - 1;
		return NewCamera;
	}
	,update: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera != null && camera.exists) {
				if(camera.active) camera.update();
				if(camera.target == null) {
					camera._flashSprite.set_x(camera.x + camera._flashOffsetX);
					camera._flashSprite.set_y(camera.y + camera._flashOffsetY);
				}
				camera._flashSprite.set_visible(camera.visible);
			}
		}
	}
	,unlock: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.drawFX();
		}
	}
	,render: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera != null && camera.exists && camera.visible) camera.render();
		}
	}
	,lock: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var camera = _g1[_g];
			++_g;
			if(camera == null || !camera.exists || !camera.visible) continue;
			camera.clearDrawStack();
			camera._canvas.get_graphics().clear();
			camera._debugLayer.get_graphics().clear();
			camera.fill(camera.bgColor & 16777215,camera.useBgAlphaBlending,(camera.bgColor >> 24 & 255) / 255);
		}
	}
	,__class__: flixel.system.frontEnds.CameraFrontEnd
	,__properties__: {set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"}
}
flixel.system.frontEnds.ConsoleFrontEnd = function() {
	this.autoPause = true;
};
$hxClasses["flixel.system.frontEnds.ConsoleFrontEnd"] = flixel.system.frontEnds.ConsoleFrontEnd;
flixel.system.frontEnds.ConsoleFrontEnd.__name__ = ["flixel","system","frontEnds","ConsoleFrontEnd"];
flixel.system.frontEnds.ConsoleFrontEnd.prototype = {
	addCommand: function(Command,AnyObject,Function,Alt) {
		if(Alt == null) Alt = "";
		flixel.FlxG.game["debugger"].console.addCommand(Command,AnyObject,Function,Alt);
	}
	,registerObject: function(ObjectAlias,AnyObject) {
		flixel.FlxG.game["debugger"].console.registerObject(ObjectAlias,AnyObject);
	}
	,registerFunction: function(FunctionAlias,Function) {
		flixel.FlxG.game["debugger"].console.registerFunction(FunctionAlias,Function);
	}
	,__class__: flixel.system.frontEnds.ConsoleFrontEnd
}
flixel.system.frontEnds.DebuggerFrontEnd = function() {
	this.visible = false;
	this.pointPrecision = 3;
	this.visualDebug = false;
	this.toggleKeys = ["GRAVEACCENT","BACKSLASH"];
};
$hxClasses["flixel.system.frontEnds.DebuggerFrontEnd"] = flixel.system.frontEnds.DebuggerFrontEnd;
flixel.system.frontEnds.DebuggerFrontEnd.__name__ = ["flixel","system","frontEnds","DebuggerFrontEnd"];
flixel.system.frontEnds.DebuggerFrontEnd.prototype = {
	addButton: function(Alignment,IconPath,DownHandler,ToggleMode,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = true;
		if(ToggleMode == null) ToggleMode = false;
		return flixel.FlxG.game["debugger"].addButton(Alignment,IconPath,DownHandler,ToggleMode,UpdateLayout);
	}
	,set_visible: function(Visible) {
		flixel.FlxG.game["debugger"].set_visible(Visible);
		return this.visible = Visible;
	}
	,resetLayout: function() {
		flixel.FlxG.game["debugger"].resetLayout();
	}
	,setLayout: function(Layout) {
		flixel.FlxG.game["debugger"].setLayout(Layout);
	}
	,__class__: flixel.system.frontEnds.DebuggerFrontEnd
	,__properties__: {set_visible:"set_visible"}
}
flixel.system.frontEnds.InputFrontEnd = function() {
	this.list = new Array();
};
$hxClasses["flixel.system.frontEnds.InputFrontEnd"] = flixel.system.frontEnds.InputFrontEnd;
flixel.system.frontEnds.InputFrontEnd.__name__ = ["flixel","system","frontEnds","InputFrontEnd"];
flixel.system.frontEnds.InputFrontEnd.prototype = {
	destroy: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.destroy();
			input = null;
		}
	}
	,onFocusLost: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocusLost();
		}
	}
	,onFocus: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.onFocus();
		}
	}
	,update: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.update();
		}
	}
	,reset: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			input.reset();
		}
	}
	,add: function(Input) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var input = _g1[_g];
			++_g;
			if(input.toString() == Input.toString()) return Input;
		}
		this.list.push(Input);
		return Input;
	}
	,__class__: flixel.system.frontEnds.InputFrontEnd
}
flixel.system.frontEnds.LogFrontEnd = function() {
	this.redirectTraces = false;
	this.add = Reflect.makeVarArgs($bind(this,this._add));
	this.warn = Reflect.makeVarArgs($bind(this,this._warn));
	this.error = Reflect.makeVarArgs($bind(this,this._error));
	this.notice = Reflect.makeVarArgs($bind(this,this._notice));
	this._oldTrace = haxe.Log.trace;
};
$hxClasses["flixel.system.frontEnds.LogFrontEnd"] = flixel.system.frontEnds.LogFrontEnd;
flixel.system.frontEnds.LogFrontEnd.__name__ = ["flixel","system","frontEnds","LogFrontEnd"];
flixel.system.frontEnds.LogFrontEnd.prototype = {
	processTraceData: function(Data,Inf) {
		var paramArray = [Data];
		if(Inf.customParams != null) {
			var _g = 0, _g1 = Inf.customParams;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				paramArray.push(i);
			}
		}
		this.add.apply(this,paramArray);
	}
	,set_redirectTraces: function(Redirect) {
		if(Redirect) haxe.Log.trace = $bind(this,this.processTraceData); else haxe.Log.trace = this._oldTrace;
		return this.redirectTraces = Redirect;
	}
	,clear: function() {
		flixel.FlxG.game["debugger"].log.clear();
	}
	,advanced: function(Data,Style,FireOnce) {
		if(FireOnce == null) FireOnce = false;
		if(flixel.FlxG.game["debugger"] == null) {
			this._oldTrace(Data);
			return;
		}
		if(Style == null) Style = flixel.system.debug.LogStyle.NORMAL;
		if(!js.Boot.__instanceof(Data,Array)) Data = [Data];
		if(flixel.FlxG.game["debugger"].log.add(Data,Style,FireOnce)) {
			if(Style.errorSound != null) null;
			if(Style.openConsole) {
				flixel.FlxG.game["debugger"].set_visible(true);
				flixel.FlxG["debugger"].visible = true;
			}
			if(Reflect.isFunction(Style.callbackFunction)) Style.callbackFunction.apply(null,[]);
		}
	}
	,_notice: function(Data) {
		this.advanced(Data,flixel.system.debug.LogStyle.NOTICE);
	}
	,_error: function(Data) {
		this.advanced(Data,flixel.system.debug.LogStyle.ERROR,true);
	}
	,_warn: function(Data) {
		this.advanced(Data,flixel.system.debug.LogStyle.WARNING,true);
	}
	,_add: function(Data) {
		this.advanced(Data,flixel.system.debug.LogStyle.NORMAL);
	}
	,__class__: flixel.system.frontEnds.LogFrontEnd
	,__properties__: {set_redirectTraces:"set_redirectTraces"}
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
flixel.system.frontEnds.PluginFrontEnd = function() {
	this.list = new Array();
	this.add(flixel.util.FlxTimer.manager = new flixel.plugin.TimerManager());
	this.add(flixel.tweens.FlxTween.manager = new flixel.plugin.TweenManager());
	this.add(flixel.util.FlxPath.manager = new flixel.plugin.PathManager());
};
$hxClasses["flixel.system.frontEnds.PluginFrontEnd"] = flixel.system.frontEnds.PluginFrontEnd;
flixel.system.frontEnds.PluginFrontEnd.__name__ = ["flixel","system","frontEnds","PluginFrontEnd"];
flixel.system.frontEnds.PluginFrontEnd.prototype = {
	drawDebug: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.visible && !plugin.ignoreDrawDebug) plugin.drawDebug();
		}
	}
	,onResize: function(Width,Height) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onResize(Width,Height);
		}
	}
	,onStateSwitch: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists) plugin.onStateSwitch();
		}
	}
	,draw: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.visible) plugin.draw();
		}
	}
	,update: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.exists && plugin.active) plugin.update();
		}
	}
	,removeType: function(ClassType) {
		var results = false;
		var i = this.list.length - 1;
		while(i >= 0) {
			if(js.Boot.__instanceof(this.list[i],ClassType)) {
				this.list.splice(i,1);
				results = true;
			}
			i--;
		}
		return results;
	}
	,remove: function(Plugin) {
		var i = this.list.length - 1;
		while(i >= 0) {
			if(this.list[i] == Plugin) {
				this.list.splice(i,1);
				return Plugin;
			}
			i--;
		}
		return Plugin;
	}
	,get: function(ClassType) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(plugin,ClassType)) return plugin;
		}
		return null;
	}
	,add: function(Plugin) {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var plugin = _g1[_g];
			++_g;
			if(plugin.toString() == Plugin.toString()) return Plugin;
		}
		this.list.push(Plugin);
		return Plugin;
	}
	,__class__: flixel.system.frontEnds.PluginFrontEnd
}
flixel.util.FlxPool_flixel_util_FlxTimer = function() {
	this._pool = [];
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxTimer"] = flixel.util.FlxPool_flixel_util_FlxTimer;
flixel.util.FlxPool_flixel_util_FlxTimer.__name__ = ["flixel","util","FlxPool_flixel_util_FlxTimer"];
flixel.util.FlxPool_flixel_util_FlxTimer.prototype = {
	get_length: function() {
		return this._pool.length;
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,put: function(obj) {
		if(obj != null && flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPool_T(this._pool,obj) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = new flixel.util.FlxTimer();
		return obj;
	}
	,__class__: flixel.util.FlxPool_flixel_util_FlxTimer
	,__properties__: {get_length:"get_length"}
}
flixel.util.FlxTimer = function() {
	this._loopsCounter = 0;
	this._timeCounter = 0;
	this._callback = null;
	this.usePooling = true;
	this.userData = null;
	this.finished = false;
	this.paused = false;
	this.loops = 0;
	this.time = 0;
};
$hxClasses["flixel.util.FlxTimer"] = flixel.util.FlxTimer;
flixel.util.FlxTimer.__name__ = ["flixel","util","FlxTimer"];
flixel.util.FlxTimer.recycle = function() {
	return flixel.util.FlxTimer.pool.get();
}
flixel.util.FlxTimer.start = function(Time,Callback,Loops) {
	if(Loops == null) Loops = 1;
	if(Time == null) Time = 1;
	var timer = flixel.util.FlxTimer.recycle();
	timer.run(Time,Callback,Loops);
	return timer;
}
flixel.util.FlxTimer.put = function(timer) {
	flixel.util.FlxTimer.pool.put(timer);
}
flixel.util.FlxTimer.prototype = {
	get_progress: function() {
		if(this.time > 0) return this._timeCounter / this.time; else return 0;
	}
	,get_elapsedLoops: function() {
		return this._loopsCounter;
	}
	,get_loopsLeft: function() {
		return this.loops - this._loopsCounter;
	}
	,get_elapsedTime: function() {
		return this._timeCounter;
	}
	,get_timeLeft: function() {
		return this.time - this._timeCounter;
	}
	,update: function() {
		this._timeCounter += flixel.FlxG.elapsed;
		while(this._timeCounter >= this.time && !this.paused && !this.finished) {
			this._timeCounter -= this.time;
			this._loopsCounter++;
			if(this._callback != null) this._callback(this);
			if(this.loops > 0 && this._loopsCounter >= this.loops) this.abort();
		}
	}
	,abort: function() {
		this.finished = true;
		if(flixel.util.FlxTimer.manager != null) flixel.util.FlxTimer.manager.remove(this,this.usePooling);
	}
	,reset: function(NewTime) {
		if(NewTime == null) NewTime = -1;
		if(NewTime < 0) NewTime = this.time;
		this.run(NewTime,this._callback,this.loops);
		return this;
	}
	,run: function(Time,Callback,Loops) {
		if(Loops == null) Loops = 1;
		if(Time == null) Time = 1;
		if(flixel.util.FlxTimer.manager != null) flixel.util.FlxTimer.manager.add(this);
		this.paused = false;
		this.finished = false;
		this.time = Math.abs(Time);
		if(Loops < 0) Loops *= -1;
		this.loops = Loops;
		this._callback = Callback;
		this._timeCounter = 0;
		this._loopsCounter = 0;
	}
	,destroy: function() {
		this._callback = null;
		this.userData = null;
	}
	,__class__: flixel.util.FlxTimer
	,__properties__: {get_timeLeft:"get_timeLeft",get_elapsedTime:"get_elapsedTime",get_loopsLeft:"get_loopsLeft",get_elapsedLoops:"get_elapsedLoops",get_progress:"get_progress"}
}
flixel.plugin = {}
flixel.plugin.FlxPlugin = function() {
	flixel.FlxBasic.call(this);
};
$hxClasses["flixel.plugin.FlxPlugin"] = flixel.plugin.FlxPlugin;
flixel.plugin.FlxPlugin.__name__ = ["flixel","plugin","FlxPlugin"];
flixel.plugin.FlxPlugin.__super__ = flixel.FlxBasic;
flixel.plugin.FlxPlugin.prototype = $extend(flixel.FlxBasic.prototype,{
	onResize: function(Width,Height) {
	}
	,onStateSwitch: function() {
	}
	,__class__: flixel.plugin.FlxPlugin
});
flixel.plugin.TimerManager = function() {
	flixel.plugin.FlxPlugin.call(this);
	this._timers = new Array();
	this.set_visible(false);
};
$hxClasses["flixel.plugin.TimerManager"] = flixel.plugin.TimerManager;
flixel.plugin.TimerManager.__name__ = ["flixel","plugin","TimerManager"];
flixel.plugin.TimerManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.TimerManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	onStateSwitch: function() {
		this.clear();
	}
	,clear: function() {
		while(this._timers.length > 0) {
			var timer = this._timers.pop();
			flixel.util.FlxTimer.put(timer);
		}
	}
	,remove: function(Timer,ReturnInPool) {
		if(ReturnInPool == null) ReturnInPool = true;
		if(ReturnInPool) flixel.util.FlxTimer.put(Timer);
		var index = flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxTimer(this._timers,Timer);
		if(index >= 0) {
			this._timers[index] = this._timers[this._timers.length - 1];
			this._timers.pop();
		}
	}
	,add: function(Timer) {
		if(flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxTimer(this._timers,Timer) < 0) this._timers.push(Timer);
	}
	,update: function() {
		if(flixel.FlxG.paused) return;
		var _g = 0, _g1 = this._timers;
		while(_g < _g1.length) {
			var timer = _g1[_g];
			++_g;
			if(!timer.paused && !timer.finished && timer.time > 0) timer.update();
		}
	}
	,destroy: function() {
		this.clear();
		this._timers = null;
		flixel.plugin.FlxPlugin.prototype.destroy.call(this);
	}
	,__class__: flixel.plugin.TimerManager
});
flixel.system.FlxCollisionType = $hxClasses["flixel.system.FlxCollisionType"] = { __ename__ : ["flixel","system","FlxCollisionType"], __constructs__ : ["NULL","OBJECT","GROUP","TILEMAP","SPRITEGROUP"] }
flixel.system.FlxCollisionType.NULL = ["NULL",0];
flixel.system.FlxCollisionType.NULL.toString = $estr;
flixel.system.FlxCollisionType.NULL.__enum__ = flixel.system.FlxCollisionType;
flixel.system.FlxCollisionType.OBJECT = ["OBJECT",1];
flixel.system.FlxCollisionType.OBJECT.toString = $estr;
flixel.system.FlxCollisionType.OBJECT.__enum__ = flixel.system.FlxCollisionType;
flixel.system.FlxCollisionType.GROUP = ["GROUP",2];
flixel.system.FlxCollisionType.GROUP.toString = $estr;
flixel.system.FlxCollisionType.GROUP.__enum__ = flixel.system.FlxCollisionType;
flixel.system.FlxCollisionType.TILEMAP = ["TILEMAP",3];
flixel.system.FlxCollisionType.TILEMAP.toString = $estr;
flixel.system.FlxCollisionType.TILEMAP.__enum__ = flixel.system.FlxCollisionType;
flixel.system.FlxCollisionType.SPRITEGROUP = ["SPRITEGROUP",4];
flixel.system.FlxCollisionType.SPRITEGROUP.toString = $estr;
flixel.system.FlxCollisionType.SPRITEGROUP.__enum__ = flixel.system.FlxCollisionType;
flixel.tweens = {}
flixel.tweens.FlxTween = function(duration,type,complete,ease) {
	if(type == null) type = 0;
	this.userData = null;
	this.executions = 0;
	this._target = duration;
	if(type == 0) type = 8; else if(type == 16) type = 17;
	this._type = type;
	this.complete = complete;
	this._ease = ease;
	this._t = 0;
	this._backward = (this._type & 16) > 0;
	this.userData = { };
};
$hxClasses["flixel.tweens.FlxTween"] = flixel.tweens.FlxTween;
flixel.tweens.FlxTween.__name__ = ["flixel","tweens","FlxTween"];
flixel.tweens.FlxTween.multiVar = function(Object,Values,Duration,Options) {
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.misc.MultiVarTween(Options.complete,Options.type);
	tween.tween(Object,Values,Duration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.num = function(FromValue,ToValue,Duration,Options) {
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.misc.NumTween(Options.complete,Options.type);
	tween.tween(FromValue,ToValue,Duration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.angle = function(FromAngle,ToAngle,Duration,Options) {
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.misc.AngleTween(Options.complete,Options.type);
	tween.tween(FromAngle,ToAngle,Duration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.color = function(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Options) {
	if(ToAlpha == null) ToAlpha = 1;
	if(FromAlpha == null) FromAlpha = 1;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.misc.ColorTween(Options.complete,Options.type);
	tween.tween(Duration,FromColor,ToColor,FromAlpha,ToAlpha,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.fader = function(Volume,Duration,Options) {
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.sound.Fader(Options.complete,Options.type);
	tween.fadeTo(Volume,Duration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.linearMotion = function(Object,FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.LinearMotion(Options.complete,Options.type);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.quadMotion = function(Object,FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.QuadMotion(Options.complete,Options.type);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.cubicMotion = function(Object,FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration,Options) {
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.CubicMotion(Options.complete,Options.type);
	tween.setObject(Object);
	tween.setMotion(FromX,FromY,aX,aY,bX,bY,ToX,ToY,Duration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.circularMotion = function(Object,CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.CircularMotion(Options.complete,Options.type);
	tween.setObject(Object);
	tween.setMotion(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.linearPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.LinearPath(Options.complete,Options.type);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.quadPath = function(Object,Points,DurationOrSpeed,UseDuration,Options) {
	if(UseDuration == null) UseDuration = true;
	if(Options == null) Options = { type : 8};
	var tween = new flixel.tweens.motion.QuadPath(Options.complete,Options.type);
	if(Points != null) {
		var _g = 0;
		while(_g < Points.length) {
			var point = Points[_g];
			++_g;
			tween.addPoint(point.x,point.y);
		}
	}
	tween.setObject(Object);
	tween.setMotion(DurationOrSpeed,UseDuration,Options.ease);
	flixel.tweens.FlxTween.manager.add(tween);
	return tween;
}
flixel.tweens.FlxTween.prototype = {
	get_scale: function() {
		return this._t;
	}
	,set_percent: function(value) {
		this._time = this._target * value;
		return this._time;
	}
	,get_percent: function() {
		return this._time / this._target;
	}
	,finish: function() {
		this.executions++;
		if(this.complete != null) this.complete(this);
		var _g = this._type & -17;
		switch(_g) {
		case 1:
			this._time = this._target;
			this.active = false;
			break;
		case 2:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			this.start();
			break;
		case 4:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			this._backward = !this._backward;
			if(this._backward) this._t = 1 - this._t;
			this.start();
			break;
		case 8:
			this._time = this._target;
			this.active = false;
			flixel.tweens.FlxTween.manager.remove(this,true);
			break;
		}
		this.finished = false;
	}
	,cancel: function() {
		this.active = false;
		flixel.tweens.FlxTween.manager.remove(this);
	}
	,start: function() {
		this._time = 0;
		if(this._target == 0) {
			this.active = false;
			return this;
		}
		this.active = true;
		return this;
	}
	,update: function() {
		this._time += flixel.FlxG.elapsed;
		this._t = this._time / this._target;
		if(this._ease != null) this._t = this._ease(this._t);
		if(this._backward) this._t = 1 - this._t;
		if(this._time >= this._target) {
			if(!this._backward) this._t = 1; else this._t = 0;
			this.finished = true;
		}
	}
	,destroy: function() {
		this.complete = null;
		this._ease = null;
		this.userData = null;
	}
	,__class__: flixel.tweens.FlxTween
	,__properties__: {set_percent:"set_percent",get_percent:"get_percent",get_scale:"get_scale"}
}
flixel.plugin.TweenManager = function() {
	flixel.plugin.FlxPlugin.call(this);
	this.list = new Array();
};
$hxClasses["flixel.plugin.TweenManager"] = flixel.plugin.TweenManager;
flixel.plugin.TweenManager.__name__ = ["flixel","plugin","TweenManager"];
flixel.plugin.TweenManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.TweenManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	onStateSwitch: function() {
		this.clear(true);
	}
	,clear: function(Destroy) {
		if(Destroy == null) Destroy = false;
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var tween = _g1[_g];
			++_g;
			this.remove(tween,Destroy);
		}
		this.list = new Array();
	}
	,remove: function(Tween,Destroy) {
		if(Destroy == null) Destroy = false;
		if(Tween == null) return null;
		if(Destroy) Tween.destroy();
		Tween.active = false;
		this.list[flixel.util.FlxArrayUtil.indexOf_flixel_tweens_FlxTween(this.list,Tween)] = this.list[this.list.length - 1];
		this.list.pop();
		return Tween;
	}
	,add: function(Tween,Start) {
		if(Start == null) Start = false;
		if(Tween == null) return null;
		if(flixel.util.FlxArrayUtil.indexOf_flixel_tweens_FlxTween(this.list,Tween) > 0) return Tween;
		this.list.push(Tween);
		if(Start) Tween.start();
		return Tween;
	}
	,update: function() {
		flixel.plugin.FlxPlugin.prototype.update.call(this);
		var finishedTweens = null;
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var tween = _g1[_g];
			++_g;
			if(tween.active) {
				tween.update();
				if(tween.finished) {
					if(finishedTweens == null) finishedTweens = new Array();
					finishedTweens.push(tween);
				}
			}
		}
		if(finishedTweens != null) while(finishedTweens.length > 0) finishedTweens.shift().finish();
	}
	,__class__: flixel.plugin.TweenManager
});
flixel.util.FlxPool_flixel_util_FlxPath = function() {
	this._pool = [];
};
$hxClasses["flixel.util.FlxPool_flixel_util_FlxPath"] = flixel.util.FlxPool_flixel_util_FlxPath;
flixel.util.FlxPool_flixel_util_FlxPath.__name__ = ["flixel","util","FlxPool_flixel_util_FlxPath"];
flixel.util.FlxPool_flixel_util_FlxPath.prototype = {
	get_length: function() {
		return this._pool.length;
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,put: function(obj) {
		if(obj != null && flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPool_T(this._pool,obj) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = new flixel.util.FlxPath();
		return obj;
	}
	,__class__: flixel.util.FlxPool_flixel_util_FlxPath
	,__properties__: {get_length:"get_length"}
}
flixel.util.FlxPath = function() {
	this.ignoreDrawDebug = false;
	this.debugScrollY = 1.0;
	this.debugScrollX = 1.0;
	this.debugColor = 16777215;
	this.finished = false;
	this.paused = false;
	this._autoRotate = false;
	this._inc = 1;
	this._nodeIndex = 0;
	this.autoCenter = true;
	this.angle = 0;
	this.speed = 0;
	this.usePooling = true;
};
$hxClasses["flixel.util.FlxPath"] = flixel.util.FlxPath;
flixel.util.FlxPath.__name__ = ["flixel","util","FlxPath"];
flixel.util.FlxPath.recycle = function() {
	return flixel.util.FlxPath.pool.get().reset();
}
flixel.util.FlxPath.put = function(path) {
	flixel.util.FlxPath.pool.put(path);
}
flixel.util.FlxPath.start = function(Object,Nodes,Speed,Mode,AutoRotate,UsePooling) {
	if(UsePooling == null) UsePooling = true;
	if(AutoRotate == null) AutoRotate = false;
	if(Mode == null) Mode = 0;
	if(Speed == null) Speed = 100;
	var path = flixel.util.FlxPath.recycle();
	path.run(Object,Nodes,Speed,Mode,AutoRotate,UsePooling);
	return path;
}
flixel.util.FlxPath.prototype = {
	drawDebug: function(Camera) {
		if(this.nodes == null || this.nodes.length <= 0) return;
		if(Camera == null) Camera = flixel.FlxG.camera;
		var gfx = Camera._debugLayer.get_graphics();
		var node;
		var nextNode;
		var i = 0;
		var l = this.nodes.length;
		while(i < l) {
			node = this.nodes[i];
			flixel.util.FlxPath._point.set_x(node.x - Camera.scroll.x * this.debugScrollX);
			flixel.util.FlxPath._point.set_y(node.y - Camera.scroll.y * this.debugScrollY);
			var nodeSize = 2;
			if(i == 0 || i == l - 1) nodeSize *= 2;
			var nodeColor = this.debugColor;
			if(l > 1) {
				if(i == 0) nodeColor = -16744448; else if(i == l - 1) nodeColor = -65536;
			}
			gfx.beginFill(nodeColor,0.5);
			gfx.lineStyle();
			gfx.drawRect(flixel.util.FlxPath._point.x - nodeSize * 0.5,flixel.util.FlxPath._point.y - nodeSize * 0.5,nodeSize,nodeSize);
			gfx.endFill();
			var linealpha = 0.3;
			if(i < l - 1) nextNode = this.nodes[i + 1]; else {
				nextNode = this.nodes[0];
				linealpha = 0.15;
			}
			gfx.moveTo(flixel.util.FlxPath._point.x,flixel.util.FlxPath._point.y);
			gfx.lineStyle(1,this.debugColor,linealpha);
			flixel.util.FlxPath._point.set_x(nextNode.x - Camera.scroll.x * this.debugScrollX);
			flixel.util.FlxPath._point.set_y(nextNode.y - Camera.scroll.y * this.debugScrollY);
			gfx.lineTo(flixel.util.FlxPath._point.x,flixel.util.FlxPath._point.y);
			i++;
		}
	}
	,tail: function() {
		if(this.nodes.length > 0) return this.nodes[this.nodes.length - 1];
		return null;
	}
	,head: function() {
		if(this.nodes.length > 0) return this.nodes[0];
		return null;
	}
	,removeAt: function(Index) {
		if(this.nodes.length <= 0) return null;
		if(Index >= this.nodes.length) Index = this.nodes.length - 1;
		return this.nodes.splice(Index,1)[0];
	}
	,remove: function(Node) {
		var index = flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPoint(this.nodes,Node);
		if(index >= 0) return this.nodes.splice(index,1)[0]; else return null;
	}
	,addPointAt: function(Node,Index,AsReference) {
		if(AsReference == null) AsReference = false;
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		if(AsReference) this.nodes.splice(Index,0,Node); else this.nodes.splice(Index,0,new flixel.util.FlxPoint(Node.x,Node.y));
		return this;
	}
	,addPoint: function(Node,AsReference) {
		if(AsReference == null) AsReference = false;
		if(AsReference) this.nodes.push(Node); else this.nodes.push(new flixel.util.FlxPoint(Node.x,Node.y));
		return this;
	}
	,addAt: function(X,Y,Index) {
		if(Index < 0) return this;
		if(Index > this.nodes.length) Index = this.nodes.length;
		this.nodes.splice(Index,0,new flixel.util.FlxPoint(X,Y));
		return this;
	}
	,add: function(X,Y) {
		this.nodes.push(new flixel.util.FlxPoint(X,Y));
		return this;
	}
	,destroy: function() {
		this.nodes = null;
		this.object = null;
		this.onComplete = null;
	}
	,abort: function() {
		this.finished = true;
		if(this.object != null) {
			this.object.velocity.set_x(0);
			this.object.velocity.set_y(0);
		}
		if(flixel.util.FlxPath.manager != null) flixel.util.FlxPath.manager.remove(this,this.usePooling);
	}
	,advancePath: function(Snap) {
		if(Snap == null) Snap = true;
		if(Snap) {
			var oldNode = this.nodes[this._nodeIndex];
			if(oldNode != null) {
				if((this._mode & 1048576) == 0) {
					this.object.set_x(oldNode.x);
					if(this.autoCenter) {
						var _g = this.object;
						_g.set_x(_g.x - this.object.width * 0.5);
					}
				}
				if((this._mode & 65536) == 0) {
					this.object.set_y(oldNode.y);
					if(this.autoCenter) {
						var _g = this.object;
						_g.set_y(_g.y - this.object.height * 0.5);
					}
				}
			}
		}
		var callComplete = false;
		this._nodeIndex += this._inc;
		if((this._mode & 1) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = 0;
				this.finished = callComplete = true;
			}
		} else if((this._mode & 16) > 0) {
			if(this._nodeIndex >= this.nodes.length) {
				callComplete = true;
				this._nodeIndex = 0;
			}
		} else if((this._mode & 256) > 0) {
			if(this._nodeIndex < 0) {
				this._nodeIndex = this.nodes.length - 1;
				callComplete = true;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
			}
		} else if((this._mode & 4096) > 0) {
			if(this._inc > 0) {
				if(this._nodeIndex >= this.nodes.length) {
					this._nodeIndex = this.nodes.length - 2;
					callComplete = true;
					if(this._nodeIndex < 0) this._nodeIndex = 0;
					this._inc = -this._inc;
				}
			} else if(this._nodeIndex < 0) {
				this._nodeIndex = 1;
				callComplete = true;
				if(this._nodeIndex >= this.nodes.length) this._nodeIndex = this.nodes.length - 1;
				if(this._nodeIndex < 0) this._nodeIndex = 0;
				this._inc = -this._inc;
			}
		} else if(this._nodeIndex >= this.nodes.length) {
			this._nodeIndex = this.nodes.length - 1;
			this.finished = callComplete = true;
		}
		if(callComplete && this.onComplete != null) this.onComplete(this);
		return this.nodes[this._nodeIndex];
	}
	,update: function() {
		flixel.util.FlxPath._point.set_x(this.object.x);
		flixel.util.FlxPath._point.set_y(this.object.y);
		if(this.autoCenter) {
			var _g = flixel.util.FlxPath._point;
			_g.set_x(_g.x + this.object.width * 0.5);
			var _g = flixel.util.FlxPath._point;
			_g.set_y(_g.y + this.object.height * 0.5);
		}
		var node = this.nodes[this._nodeIndex];
		var deltaX = node.x - flixel.util.FlxPath._point.x;
		var deltaY = node.y - flixel.util.FlxPath._point.y;
		var horizontalOnly = (this._mode & 65536) > 0;
		var verticalOnly = (this._mode & 1048576) > 0;
		if(horizontalOnly) {
			if((deltaX > 0?deltaX:-deltaX) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		} else if(verticalOnly) {
			if((deltaY > 0?deltaY:-deltaY) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		} else if(Math.sqrt(deltaX * deltaX + deltaY * deltaY) < this.speed * flixel.FlxG.elapsed) node = this.advancePath();
		if(this.speed != 0) {
			flixel.util.FlxPath._point.set_x(this.object.x);
			flixel.util.FlxPath._point.set_y(this.object.y);
			if(this.autoCenter) {
				var _g = flixel.util.FlxPath._point;
				_g.set_x(_g.x + this.object.width * 0.5);
				var _g = flixel.util.FlxPath._point;
				_g.set_y(_g.y + this.object.height * 0.5);
			}
			if(horizontalOnly || flixel.util.FlxPath._point.y == node.y) {
				this.object.velocity.set_x(flixel.util.FlxPath._point.x < node.x?this.speed:-this.speed);
				if(this.object.velocity.x < 0) this.angle = -90; else this.angle = 90;
				if(!horizontalOnly) this.object.velocity.set_y(0);
			} else if(verticalOnly || flixel.util.FlxPath._point.x == node.x) {
				this.object.velocity.set_y(flixel.util.FlxPath._point.y < node.y?this.speed:-this.speed);
				if(this.object.velocity.y < 0) this.angle = 0; else this.angle = 180;
				if(!verticalOnly) this.object.velocity.set_x(0);
			} else {
				this.object.velocity.set_x(flixel.util.FlxPath._point.x < node.x?this.speed:-this.speed);
				this.object.velocity.set_y(flixel.util.FlxPath._point.y < node.y?this.speed:-this.speed);
				flixel.util.FlxPath._point.set(this.object.velocity.x,this.object.velocity.y);
				this.angle = flixel.util.FlxAngle.getAngle(flixel.util.FlxPath._point,node);
				flixel.util.FlxAngle.rotatePoint(0,this.speed,0,0,this.angle,flixel.util.FlxPath._point);
			}
			if(this._autoRotate) {
				this.object.angularVelocity = 0;
				this.object.angularAcceleration = 0;
				this.object.set_angle(this.angle);
			}
			if(this.finished) this.abort();
		}
	}
	,setNode: function(NodeIndex) {
		if(NodeIndex < 0) NodeIndex = 0; else if(NodeIndex > this.nodes.length - 1) NodeIndex = this.nodes.length - 1;
		this._nodeIndex = NodeIndex;
		this.advancePath();
	}
	,restart: function() {
		if(flixel.util.FlxPath.manager != null) flixel.util.FlxPath.manager.add(this);
		this.finished = false;
		this.paused = false;
		if(this.nodes.length <= 0) this.paused = true;
		if(this._mode == 1 || this._mode == 256) {
			this._nodeIndex = this.nodes.length - 1;
			this._inc = -1;
		} else {
			this._nodeIndex = 0;
			this._inc = 1;
		}
		this.object.set_immovable(true);
		return this;
	}
	,run: function(Object,Nodes,Speed,Mode,AutoRotate,UsePooling) {
		if(UsePooling == null) UsePooling = true;
		if(AutoRotate == null) AutoRotate = false;
		if(Mode == null) Mode = 0;
		if(Speed == null) Speed = 100;
		this.usePooling = UsePooling;
		this.object = Object;
		this.nodes = Nodes;
		this.speed = Math.abs(Speed);
		this._mode = Mode;
		this._autoRotate = AutoRotate;
		this.restart();
		return this;
	}
	,reset: function() {
		this.debugScrollX = 1.0;
		this.debugScrollY = 1.0;
		this.debugColor = 16777215;
		this.ignoreDrawDebug = false;
		this.autoCenter = true;
		return this;
	}
	,__class__: flixel.util.FlxPath
}
flixel.plugin.PathManager = function() {
	flixel.plugin.FlxPlugin.call(this);
	this._paths = new Array();
};
$hxClasses["flixel.plugin.PathManager"] = flixel.plugin.PathManager;
flixel.plugin.PathManager.__name__ = ["flixel","plugin","PathManager"];
flixel.plugin.PathManager.__super__ = flixel.plugin.FlxPlugin;
flixel.plugin.PathManager.prototype = $extend(flixel.plugin.FlxPlugin.prototype,{
	onStateSwitch: function() {
		this.clear();
	}
	,clear: function() {
		while(this._paths.length > 0) {
			var path = this._paths.pop();
			flixel.util.FlxPath.put(path);
		}
	}
	,remove: function(Path,ReturnInPool) {
		if(ReturnInPool == null) ReturnInPool = true;
		var index = flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPath(this._paths,Path);
		if(index >= 0) {
			this._paths[index] = this._paths[this._paths.length - 1];
			this._paths.pop();
		}
		if(ReturnInPool) flixel.util.FlxPath.put(Path);
	}
	,add: function(Path) {
		if(flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPath(this._paths,Path) < 0) this._paths.push(Path);
	}
	,drawDebugOnCamera: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		var i = this._paths.length - 1;
		var path;
		while(i >= 0) {
			path = this._paths[i--];
			if(path != null && !path.ignoreDrawDebug) path.drawDebug(Camera);
		}
	}
	,drawDebug: function() {
		if(!flixel.FlxG["debugger"].visualDebug || this.ignoreDrawDebug) return;
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) this.drawDebugOnCamera(this.cameras[i++]);
	}
	,update: function() {
		if(flixel.FlxG.paused) return;
		var _g = 0, _g1 = this._paths;
		while(_g < _g1.length) {
			var path = _g1[_g];
			++_g;
			if(!path.paused) path.update();
		}
	}
	,destroy: function() {
		this.clear();
		this._paths = null;
		flixel.plugin.FlxPlugin.prototype.destroy.call(this);
	}
	,__class__: flixel.plugin.PathManager
});
flixel.util.FlxSave = function() {
	this.destroy();
};
$hxClasses["flixel.util.FlxSave"] = flixel.util.FlxSave;
flixel.util.FlxSave.__name__ = ["flixel","util","FlxSave"];
flixel.util.FlxSave.prototype = {
	checkBinding: function() {
		if(this._sharedObject == null) {
			flixel.FlxG.log.warn("You must call FlxSave.bind()\nbefore you can read or write data.");
			return false;
		}
		return true;
	}
	,onDone: function(Result) {
		switch(Result) {
		case flixel.util.FlxSave.PENDING:
			flixel.FlxG.log.warn("FlxSave is requesting extra storage space.");
			break;
		case flixel.util.FlxSave.ERROR:
			flixel.FlxG.log.error("There was a problem flushing\nthe shared object data from FlxSave.");
			break;
		}
		if(this._onComplete != null) this._onComplete(Result == flixel.util.FlxSave.SUCCESS);
		if(this._closeRequested) this.destroy();
		return Result == flixel.util.FlxSave.SUCCESS;
	}
	,erase: function() {
		if(!this.checkBinding()) return false;
		this._sharedObject.clear();
		return true;
	}
	,flush: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		if(!this.checkBinding()) return false;
		this._onComplete = OnComplete;
		var result;
		try {
			result = this._sharedObject.flush();
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				return this.onDone(flixel.util.FlxSave.ERROR);
			} else throw(e);
		}
		if(result == flash.net.SharedObjectFlushStatus.PENDING) {
		}
		return this.onDone(result == flash.net.SharedObjectFlushStatus.FLUSHED?flixel.util.FlxSave.SUCCESS:flixel.util.FlxSave.PENDING);
	}
	,close: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		this._closeRequested = true;
		return this.flush(MinFileSize,OnComplete);
	}
	,bind: function(Name) {
		this.destroy();
		this.name = Name;
		try {
			this._sharedObject = flash.net.SharedObject.getLocal(this.name);
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				flixel.FlxG.log.error("There was a problem binding to\nthe shared object data from FlxSave.");
				this.destroy();
				return false;
			} else throw(e);
		}
		this.data = this._sharedObject.data;
		return true;
	}
	,destroy: function() {
		this._sharedObject = null;
		this.name = null;
		this.data = null;
		this._onComplete = null;
		this._closeRequested = false;
	}
	,__class__: flixel.util.FlxSave
}
flixel.system.frontEnds.SoundFrontEnd = function() {
	this.volume = 0.5;
	this.volumeHandler = null;
	this.muted = false;
	this.volumeUpKeys = ["PLUS","NUMPADPLUS"];
	this.volumeDownKeys = ["MINUS","NUMPASMINUS"];
	this.muteKeys = ["ZERO","NUMPADZERO"];
	this.list = new flixel.group.FlxTypedGroup();
};
$hxClasses["flixel.system.frontEnds.SoundFrontEnd"] = flixel.system.frontEnds.SoundFrontEnd;
flixel.system.frontEnds.SoundFrontEnd.__name__ = ["flixel","system","frontEnds","SoundFrontEnd"];
flixel.system.frontEnds.SoundFrontEnd.prototype = {
	loadSavedPrefs: function() {
		if(flixel.FlxG.save.data.volume != null) this.set_volume(flixel.FlxG.save.data.volume); else this.set_volume(0.5);
		if(flixel.FlxG.save.data.mute != null) this.muted = flixel.FlxG.save.data.mute; else this.muted = false;
	}
	,resumeSounds: function() {
		if(this.music != null && this.music.exists) this.music.play();
		var _g = 0, _g1 = this.list.get_members();
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists) sound.resume();
		}
	}
	,pauseSounds: function() {
		if(this.music != null && this.music.exists && this.music.active) this.music.pause();
		var _g = 0, _g1 = this.list.get_members();
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && sound.exists && sound.active) sound.pause();
		}
	}
	,updateSounds: function() {
		if(this.music != null && this.music.active) this.music.update();
		if(this.list != null && this.list.active) this.list.update();
	}
	,destroySounds: function(ForceDestroy) {
		if(ForceDestroy == null) ForceDestroy = false;
		if(this.music != null && (ForceDestroy || !this.music.survive)) {
			this.music.destroy();
			this.music = null;
		}
		var _g = 0, _g1 = this.list.get_members();
		while(_g < _g1.length) {
			var sound = _g1[_g];
			++_g;
			if(sound != null && (ForceDestroy || !sound.survive)) sound.destroy();
		}
	}
	,set_volume: function(Volume) {
		this.volume = Volume;
		if(this.volume < 0) this.volume = 0; else if(this.volume > 1) this.volume = 1;
		if(this.volumeHandler != null) {
			var param = this.muted?0:this.volume;
			this.volumeHandler(param);
		}
		return Volume;
	}
	,stream: function(URL,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		return null;
	}
	,play: function(EmbeddedSound,Volume,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = true;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		return null;
	}
	,load: function(EmbeddedSound,Volume,Looped,AutoDestroy,AutoPlay,URL,OnComplete) {
		if(AutoPlay == null) AutoPlay = false;
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		if(Volume == null) Volume = 1;
		return null;
	}
	,playMusic: function(Music,Volume) {
		if(Volume == null) Volume = 1;
	}
	,__class__: flixel.system.frontEnds.SoundFrontEnd
	,__properties__: {set_volume:"set_volume"}
}
flixel.system.frontEnds.VCRFrontEnd = function() {
	this.stepRequested = false;
	this.paused = false;
};
$hxClasses["flixel.system.frontEnds.VCRFrontEnd"] = flixel.system.frontEnds.VCRFrontEnd;
flixel.system.frontEnds.VCRFrontEnd.__name__ = ["flixel","system","frontEnds","VCRFrontEnd"];
flixel.system.frontEnds.VCRFrontEnd.prototype = {
	resume: function() {
		if(this.paused) {
			if(!flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.hide();
			this.paused = false;
			flixel.FlxG.game["debugger"].vcr.onResume();
		}
	}
	,pause: function() {
		if(!this.paused) {
			if(!flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.show();
			this.paused = true;
			flixel.FlxG.game["debugger"].vcr.onPause();
		}
	}
	,destroy: function() {
	}
	,__class__: flixel.system.frontEnds.VCRFrontEnd
}
flixel.system.frontEnds.WatchFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.WatchFrontEnd"] = flixel.system.frontEnds.WatchFrontEnd;
flixel.system.frontEnds.WatchFrontEnd.__name__ = ["flixel","system","frontEnds","WatchFrontEnd"];
flixel.system.frontEnds.WatchFrontEnd.prototype = {
	removeMouse: function() {
		flixel.FlxG.game["debugger"].watch.remove(flixel.FlxG,"mouse");
	}
	,addMouse: function() {
		flixel.FlxG.game["debugger"].watch.add(flixel.FlxG,"mouse","Mouse Position");
	}
	,removeQuick: function(Name) {
		flixel.FlxG.game["debugger"].watch.remove(null,null,Name);
	}
	,addQuick: function(Name,NewValue) {
		flixel.FlxG.game["debugger"].watch.updateQuickWatch(Name,NewValue);
	}
	,remove: function(AnyObject,VariableName) {
		flixel.FlxG.game["debugger"].watch.remove(AnyObject,VariableName);
	}
	,add: function(AnyObject,VariableName,DisplayName) {
		flixel.FlxG.game["debugger"].watch.add(AnyObject,VariableName,DisplayName);
	}
	,__class__: flixel.system.frontEnds.WatchFrontEnd
}
flixel.FlxG = function() { }
$hxClasses["flixel.FlxG"] = flixel.FlxG;
flixel.FlxG.__name__ = ["flixel","FlxG"];
flixel.FlxG.__properties__ = {get_state:"get_state",get_stage:"get_stage",set_flashFramerate:"set_flashFramerate",get_flashFramerate:"get_flashFramerate",set_framerate:"set_framerate",get_framerate:"get_framerate",get_libraryName:"get_libraryName"}
flixel.FlxG.init = function(Game,Width,Height,Zoom) {
	flixel.FlxG.game = Game;
	flixel.FlxG.width = Math.abs(Width) | 0;
	flixel.FlxG.height = Math.abs(Height) | 0;
	flixel.FlxCamera.defaultZoom = Zoom;
	flixel.FlxG.keyboard = js.Boot.__cast(flixel.FlxG.inputs.add(new flixel.system.input.keyboard.FlxKeyboard()) , flixel.system.input.keyboard.FlxKeyboard);
	flixel.FlxG.keys = new flixel.system.input.keyboard.FlxKeyShortcuts();
	flixel.FlxG.mouse = js.Boot.__cast(flixel.FlxG.inputs.add(new flixel.system.input.mouse.FlxMouse(flixel.FlxG.game.inputContainer)) , flixel.system.input.mouse.FlxMouse);
	flixel.FlxG.touches = js.Boot.__cast(flixel.FlxG.inputs.add(new flixel.system.input.touch.FlxTouchManager()) , flixel.system.input.touch.FlxTouchManager);
	flixel.FlxG.save.bind("flixel");
	flixel.FlxG.sound.loadSavedPrefs();
	flixel.system.FlxAssets.init();
}
flixel.FlxG.reset = function() {
	flixel.text.pxText.PxBitmapFont.clearStorage();
	flixel.util.FlxRandom.globalSeed = Math.random();
	flixel.FlxG.bitmap.clearCache();
	flixel.FlxG.inputs.reset();
	flixel.FlxG.sound.destroySounds(true);
	flixel.FlxG.paused = false;
	flixel.FlxG.timeScale = 1.0;
	flixel.FlxG.elapsed = 0;
	flixel.FlxG.worldBounds.set(-10,-10,flixel.FlxG.width + 20,flixel.FlxG.height + 20);
	flixel.FlxG.worldDivisions = 6;
}
flixel.FlxG.get_libraryName = function() {
	return flixel.FlxG.LIBRARY_NAME + " v" + flixel.FlxG.LIBRARY_MAJOR_VERSION + "." + flixel.FlxG.LIBRARY_MINOR_VERSION;
}
flixel.FlxG.get_framerate = function() {
	return 1000 / flixel.FlxG.game.stepMS | 0;
}
flixel.FlxG.set_framerate = function(Framerate) {
	if(Framerate < flixel.FlxG.get_flashFramerate()) flixel.FlxG.log.warn("FlxG.framerate: The game's framerate shouldn't be smaller than the flash framerate, since it can stop your game from updating.");
	flixel.FlxG.game.stepMS = Math.abs(1000 / Framerate) | 0;
	flixel.FlxG.game.stepSeconds = flixel.FlxG.game.stepMS / 1000;
	if(flixel.FlxG.game.maxAccumulation < flixel.FlxG.game.stepMS) flixel.FlxG.game.maxAccumulation = flixel.FlxG.game.stepMS;
	return Framerate;
}
flixel.FlxG.get_flashFramerate = function() {
	if(flixel.FlxG.game.get_stage() != null) return flixel.FlxG.game.get_stage().get_frameRate() | 0;
	return 0;
}
flixel.FlxG.set_flashFramerate = function(Framerate) {
	if(Framerate > (1000 / flixel.FlxG.game.stepMS | 0)) flixel.FlxG.log.warn("FlxG.flashFramerate: The game's framerate shouldn't be smaller than the flash framerate, since it can stop your game from updating.");
	flixel.FlxG.game.flashFramerate = Math.abs(Framerate) | 0;
	if(flixel.FlxG.game.get_stage() != null) flixel.FlxG.game.get_stage().set_frameRate(flixel.FlxG.game.flashFramerate);
	flixel.FlxG.game.maxAccumulation = (2000 / flixel.FlxG.game.flashFramerate | 0) - 1;
	if(flixel.FlxG.game.maxAccumulation < flixel.FlxG.game.stepMS) flixel.FlxG.game.maxAccumulation = flixel.FlxG.game.stepMS;
	return Framerate;
}
flixel.FlxG.resetGame = function() {
	flixel.FlxG.game.requestedReset = true;
}
flixel.FlxG.resizeGame = function(Width,Height) {
	flixel.FlxG.camera.setSize(Math.ceil(Width / flixel.FlxG.camera.zoom),Math.ceil(Height / flixel.FlxG.camera.zoom));
	flixel.FlxG.width = Width;
	flixel.FlxG.height = Height;
}
flixel.FlxG.get_stage = function() {
	return flixel.FlxG.game.get_stage();
}
flixel.FlxG.get_state = function() {
	return flixel.FlxG.game.state;
}
flixel.FlxG.switchState = function(State) {
	flixel.FlxG.game.requestedState = State;
}
flixel.FlxG.resetState = function() {
	flixel.FlxG.game.requestedState = Type.createInstance(Type.resolveClass((function($this) {
		var $r;
		var s = Type.getClassName(Type.getClass(flixel.FlxG.game.state));
		if(s != null) {
			s = StringTools.replace(s,"::",".");
		}
		$r = s;
		return $r;
	}(this))),[]);
	if(js.Boot.__instanceof(flixel.FlxG.game.requestedState,flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for your game";
}
flixel.FlxG.overlap = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
	if(ObjectOrGroup1 == null) ObjectOrGroup1 = flixel.FlxG.game.state;
	if(ObjectOrGroup2 == ObjectOrGroup1) ObjectOrGroup2 = null;
	flixel.system.FlxQuadTree.divisions = flixel.FlxG.worldDivisions;
	var quadTree = flixel.system.FlxQuadTree.recycle(flixel.FlxG.worldBounds.x,flixel.FlxG.worldBounds.y,flixel.FlxG.worldBounds.width,flixel.FlxG.worldBounds.height);
	quadTree.load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback);
	var result = quadTree.execute();
	quadTree.destroy();
	return result;
}
flixel.FlxG.pixelPerfectOverlap = function(Sprite1,Sprite2,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 255;
	return flixel.util.FlxCollision.pixelPerfectCheck(Sprite1,Sprite2,AlphaTolerance,Camera);
}
flixel.FlxG.collide = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback) {
	return flixel.FlxG.overlap(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,flixel.FlxObject.separate);
}
flixel.FlxG.safeDestroy = function(Object) {
	if(Object != null) Object.destroy();
	return null;
}
flixel.FlxSubState = function(BGColor,UseMouse) {
	if(UseMouse == null) UseMouse = false;
	if(BGColor == null) BGColor = 0;
	this._initialized = false;
	flixel.FlxState.call(this);
	this.closeCallback = null;
	this._bgSprite = new flixel.system.FlxBGSprite();
	this.set_bgColor(BGColor);
	this._useMouse = UseMouse;
	this.updateMouseVisibility();
	UseMouse;
};
$hxClasses["flixel.FlxSubState"] = flixel.FlxSubState;
flixel.FlxSubState.__name__ = ["flixel","FlxSubState"];
flixel.FlxSubState.__super__ = flixel.FlxState;
flixel.FlxSubState.prototype = $extend(flixel.FlxState.prototype,{
	destroy: function() {
		flixel.FlxState.prototype.destroy.call(this);
		this._initialized = false;
		this._parentState = null;
		this.closeCallback = null;
	}
	,close: function(Destroy) {
		if(Destroy == null) Destroy = true;
		if(this._parentState != null) this._parentState.subStateCloseHandler(Destroy); else throw "This subState haven't any parent state";
	}
	,draw: function() {
		this._bgSprite.draw();
		flixel.FlxState.prototype.draw.call(this);
	}
	,set_bgColor: function(Value) {
		if(this._bgSprite != null) this._bgSprite.get_pixels().setPixel32(0,0,Value);
		return this._bgColor = Value;
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,initialize: function() {
		this._initialized = true;
	}
	,get_initialized: function() {
		return this._initialized;
	}
	,__class__: flixel.FlxSubState
	,__properties__: $extend(flixel.FlxState.prototype.__properties__,{get_initialized:"get_initialized"})
});
flixel.addons = {}
flixel.addons.tile = {}
flixel.addons.tile.FlxCaveGenerator = function() { }
$hxClasses["flixel.addons.tile.FlxCaveGenerator"] = flixel.addons.tile.FlxCaveGenerator;
flixel.addons.tile.FlxCaveGenerator.__name__ = ["flixel","addons","tile","FlxCaveGenerator"];
flixel.addons.tile.FlxCaveGenerator.convertMatrixToString = function(Matrix) {
	var mapString = "";
	var _g1 = 0, _g = Matrix.length;
	while(_g1 < _g) {
		var y = _g1++;
		var _g3 = 0, _g2 = Matrix[y].length;
		while(_g3 < _g2) {
			var x = _g3++;
			mapString += Std.string(Matrix[y][x]) + ",";
		}
		mapString += "\n";
	}
	return mapString;
}
flixel.addons.tile.FlxCaveGenerator.generateCaveMatrix = function(Columns,Rows,SmoothingIterations,WallRatio) {
	if(WallRatio == null) WallRatio = 0.5;
	if(SmoothingIterations == null) SmoothingIterations = 6;
	var matrix = flixel.addons.tile.FlxCaveGenerator.generateInitialMatrix(Columns,Rows);
	var _g = 0;
	while(_g < Rows) {
		var y = _g++;
		var _g1 = 0;
		while(_g1 < Columns) {
			var x = _g1++;
			matrix[y][x] = Math.random() < WallRatio?1:0;
		}
	}
	var matrix2 = flixel.addons.tile.FlxCaveGenerator.generateInitialMatrix(Columns,Rows);
	var _g = 0;
	while(_g < SmoothingIterations) {
		var i = _g++;
		flixel.addons.tile.FlxCaveGenerator.runCelluarAutomata(matrix,matrix2);
		var temp = matrix;
		matrix = matrix2;
		matrix2 = temp;
	}
	return matrix;
}
flixel.addons.tile.FlxCaveGenerator.generateCaveString = function(Columns,Rows,SmoothingIterations,WallRatio) {
	if(WallRatio == null) WallRatio = 0.5;
	if(SmoothingIterations == null) SmoothingIterations = 6;
	return flixel.addons.tile.FlxCaveGenerator.convertMatrixToString(flixel.addons.tile.FlxCaveGenerator.generateCaveMatrix(Columns,Rows,SmoothingIterations,WallRatio));
}
flixel.addons.tile.FlxCaveGenerator.generateInitialMatrix = function(Columns,Rows) {
	var matrix = new Array();
	var _g = 0;
	while(_g < Rows) {
		var y = _g++;
		matrix.push(new Array());
		var _g1 = 0;
		while(_g1 < Columns) {
			var x = _g1++;
			matrix[y].push(0);
		}
	}
	return matrix;
}
flixel.addons.tile.FlxCaveGenerator.countNumWallsNeighbors = function(Matrix,PosX,PosY,Distance) {
	if(Distance == null) Distance = 1;
	var count = 0;
	var rows = Matrix.length;
	var columns = Matrix[0].length;
	var _g1 = -Distance, _g = Distance + 1;
	while(_g1 < _g) {
		var y = _g1++;
		var _g3 = -Distance, _g2 = Distance + 1;
		while(_g3 < _g2) {
			var x = _g3++;
			if(PosX + x < 0 || PosX + x > columns - 1 || PosY + y < 0 || PosY + y > rows - 1) continue;
			if(Matrix[PosY + y][PosX + x] != 0) count++;
		}
	}
	return count;
}
flixel.addons.tile.FlxCaveGenerator.runCelluarAutomata = function(InMatrix,OutMatrix) {
	var rows = InMatrix.length;
	var columns = InMatrix[0].length;
	var _g = 0;
	while(_g < rows) {
		var y = _g++;
		var _g1 = 0;
		while(_g1 < columns) {
			var x = _g1++;
			var numWalls = flixel.addons.tile.FlxCaveGenerator.countNumWallsNeighbors(InMatrix,x,y,1);
			if(numWalls >= 5) OutMatrix[y][x] = 1; else OutMatrix[y][x] = 0;
		}
	}
}
flixel.animation = {}
flixel.animation.FlxBaseAnimation = function(Parent,Name) {
	this.curIndex = 0;
	this.parent = Parent;
	this.name = Name;
};
$hxClasses["flixel.animation.FlxBaseAnimation"] = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxBaseAnimation.__name__ = ["flixel","animation","FlxBaseAnimation"];
flixel.animation.FlxBaseAnimation.prototype = {
	clone: function(Parent) {
		return null;
	}
	,update: function() {
	}
	,destroy: function() {
		this.parent = null;
	}
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null && this.parent._curAnim == this) this.parent.set_frameIndex(Value);
		return Value;
	}
	,__class__: flixel.animation.FlxBaseAnimation
	,__properties__: {set_curIndex:"set_curIndex"}
}
flixel.animation.FlxAnimation = function(Parent,Name,Frames,FrameRate,Looped) {
	if(Looped == null) Looped = true;
	if(FrameRate == null) FrameRate = 0;
	this.curFrame = 0;
	flixel.animation.FlxBaseAnimation.call(this,Parent,Name);
	this.set_frameRate(FrameRate);
	this._frames = Frames;
	this.numFrames = this._frames.length;
	this.looped = Looped;
	this.finished = true;
	this.paused = true;
	this.set_curFrame(0);
	this._frameTimer = 0;
};
$hxClasses["flixel.animation.FlxAnimation"] = flixel.animation.FlxAnimation;
flixel.animation.FlxAnimation.__name__ = ["flixel","animation","FlxAnimation"];
flixel.animation.FlxAnimation.__super__ = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxAnimation.prototype = $extend(flixel.animation.FlxBaseAnimation.prototype,{
	clone: function(Parent) {
		return new flixel.animation.FlxAnimation(Parent,this.name,this._frames,this.frameRate,this.looped);
	}
	,set_curFrame: function(Frame) {
		if(Frame >= 0) {
			if(!this.looped && Frame >= this.numFrames) {
				this.finished = true;
				this.curFrame = this.numFrames - 1;
			} else this.curFrame = Frame;
		} else this.curFrame = Math.random() * this.numFrames | 0;
		this.set_curIndex(this._frames[this.curFrame]);
		return Frame;
	}
	,set_frameRate: function(value) {
		this.delay = 0;
		this.frameRate = value;
		if(value > 0) this.delay = 1.0 / value;
		return value;
	}
	,update: function() {
		if(this.delay > 0 && (this.looped || !this.finished) && !this.paused) {
			this._frameTimer += flixel.FlxG.elapsed;
			while(this._frameTimer > this.delay) {
				this._frameTimer = this._frameTimer - this.delay;
				if(this.looped && this.curFrame == this.numFrames - 1) this.set_curFrame(0); else {
					var _g = this, _g1 = _g.curFrame;
					_g.set_curFrame(_g1 + 1);
					_g1;
				}
			}
		}
	}
	,stop: function() {
		this.finished = true;
		this.paused = true;
	}
	,restart: function() {
		this.play(true);
	}
	,play: function(Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(!Force && (this.looped || !this.finished)) {
			this.paused = false;
			this.finished = false;
			this.set_curFrame(this.curFrame);
			return;
		}
		this.paused = false;
		this._frameTimer = 0;
		if(this.delay <= 0 || Frame == this.numFrames - 1) this.finished = true; else this.finished = false;
		if(Frame < 0) this.set_curFrame(Math.random() * this.numFrames | 0); else if(this.numFrames > Frame) this.set_curFrame(Frame); else this.set_curFrame(0);
	}
	,destroy: function() {
		this._frames = null;
		this.name = null;
		flixel.animation.FlxBaseAnimation.prototype.destroy.call(this);
	}
	,__class__: flixel.animation.FlxAnimation
	,__properties__: $extend(flixel.animation.FlxBaseAnimation.prototype.__properties__,{set_frameRate:"set_frameRate",set_curFrame:"set_curFrame"})
});
flixel.animation.FlxAnimationController = function(Sprite) {
	this.frameIndex = 0;
	this._sprite = Sprite;
	this._animations = new haxe.ds.StringMap();
};
$hxClasses["flixel.animation.FlxAnimationController"] = flixel.animation.FlxAnimationController;
flixel.animation.FlxAnimationController.__name__ = ["flixel","animation","FlxAnimationController"];
flixel.animation.FlxAnimationController.frameSortFunction = function(frame1,frame2) {
	var name1 = frame1.name;
	var name2 = frame2.name;
	var num1 = Std.parseInt(name1.substring(flixel.animation.FlxAnimationController.prefixLength,name1.length - flixel.animation.FlxAnimationController.postfixLength));
	var num2 = Std.parseInt(name2.substring(flixel.animation.FlxAnimationController.prefixLength,name2.length - flixel.animation.FlxAnimationController.postfixLength));
	if(num1 > num2) return 1; else if(num2 > num1) return -1;
	return 0;
}
flixel.animation.FlxAnimationController.prototype = {
	getFrameIndex: function(Frame) {
		return flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame(this._sprite.framesData.frames,Frame);
	}
	,get_frames: function() {
		return this._sprite.frames;
	}
	,set_finished: function(Value) {
		if(Value == true && this._curAnim != null) {
			this._curAnim.finished = true;
			this.set_frameIndex(this._curAnim.numFrames - 1);
		}
		return Value;
	}
	,get_finished: function() {
		var finished = true;
		if(this._curAnim != null) finished = this._curAnim.finished;
		return finished;
	}
	,set_paused: function(Value) {
		if(this._curAnim != null) this._curAnim.paused = Value;
		return Value;
	}
	,get_paused: function() {
		var paused = false;
		if(this._curAnim != null) paused = this._curAnim.paused;
		return paused;
	}
	,set_curAnim: function(Anim) {
		if(Anim != null && Anim != this._curAnim) {
			if(this._curAnim != null) this._curAnim.stop();
			Anim.play();
		}
		return this._curAnim = Anim;
	}
	,get_curAnim: function() {
		var anim = null;
		if(this._curAnim != null && this._curAnim.delay > 0 && (this._curAnim.looped || !this._curAnim.finished)) anim = this._curAnim;
		return anim;
	}
	,set_name: function(AnimName) {
		this.play(AnimName);
		return AnimName;
	}
	,get_name: function() {
		var animName = null;
		if(this._curAnim != null) animName = this._curAnim.name;
		return animName;
	}
	,set_frameName: function(Value) {
		if(this._sprite.framesData != null && this._sprite.framesData.framesHash.exists(Value)) {
			if(this._curAnim != null) {
				this._curAnim.stop();
				this._curAnim = null;
			}
			var frame = this._sprite.framesData.framesHash.get(Value);
			if(frame != null) this.set_frameIndex(flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame(this._sprite.framesData.frames,frame));
		}
		return Value;
	}
	,get_frameName: function() {
		return this._sprite.frame.name;
	}
	,set_frameIndex: function(Frame) {
		if(this._sprite.framesData != null) {
			Frame = Frame % this._sprite.frames;
			this._sprite.set_frame(this._sprite.framesData.frames[Frame]);
			if(this.callback != null) this.callback(this._curAnim != null?this._curAnim.name:null,this._curAnim != null?this._curAnim.curFrame:Frame,Frame);
		}
		return this.frameIndex = Frame;
	}
	,randomFrame: function() {
		if(this._curAnim != null) {
			this._curAnim.stop();
			this._curAnim = null;
		}
		this.set_frameIndex(Math.random() * this._sprite.frames | 0);
	}
	,getByName: function(Name) {
		return this._animations.get(Name);
	}
	,resume: function() {
		if(this._curAnim != null) this._curAnim.paused = false;
	}
	,pause: function() {
		if(this._curAnim != null) this._curAnim.paused = true;
	}
	,play: function(AnimName,Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(AnimName == null) {
			if(this._curAnim != null) this._curAnim.stop();
			this._curAnim = null;
		}
		if(this._animations.get(AnimName) == null) {
			flixel.FlxG.log.warn("No animation called \"" + AnimName + "\"");
			return;
		}
		if(this._curAnim != null && AnimName != this._curAnim.name) this._curAnim.stop();
		this._curAnim = this._animations.get(AnimName);
		this._curAnim.play(Force,Frame);
	}
	,addByPrefix: function(Name,Prefix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var animFrames = new Array();
			var l = this._sprite.framesData.frames.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				if(StringTools.startsWith(this._sprite.framesData.frames[i].name,Prefix)) animFrames.push(this._sprite.framesData.frames[i]);
			}
			if(animFrames.length > 0) {
				var name = animFrames[0].name;
				var postFix = name.substring(name.indexOf(".",Prefix.length),name.length);
				flixel.animation.FlxAnimationController.prefixLength = Prefix.length;
				flixel.animation.FlxAnimationController.postfixLength = postFix.length;
				animFrames.sort(flixel.animation.FlxAnimationController.frameSortFunction);
				var frameIndices = new Array();
				l = animFrames.length;
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					frameIndices.push(flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame(this._sprite.framesData.frames,animFrames[i]));
				}
				if(frameIndices.length > 0) {
					var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
					this._animations.set(Name,anim);
				}
			}
		}
	}
	,findSpriteFrame: function(Prefix,Index,Postfix) {
		var numFrames = this._sprite.frames;
		var flxFrames = this._sprite.framesData.frames;
		var _g = 0;
		while(_g < numFrames) {
			var i = _g++;
			var name = flxFrames[i].name;
			if(StringTools.startsWith(name,Prefix) && StringTools.endsWith(name,Postfix)) {
				var index = Std.parseInt(name.substring(Prefix.length,name.length - Postfix.length));
				if(index != null && index == Index) return i;
			}
		}
		return -1;
	}
	,addByIndicies: function(Name,Prefix,Indicies,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = new Array();
			var l = Indicies.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				var indexToAdd = this.findSpriteFrame(Prefix,Indicies[i],Postfix);
				if(indexToAdd != -1) frameIndices.push(indexToAdd);
			}
			if(frameIndices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,addByStringIndicies: function(Name,Prefix,Indicies,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var frameIndices = new Array();
			var l = Indicies.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				var name = Prefix + Indicies[i] + Postfix;
				if(this._sprite.framesData.framesHash.exists(name)) {
					var frameToAdd = this._sprite.framesData.framesHash.get(name);
					frameIndices.push(flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame(this._sprite.framesData.frames,frameToAdd));
				}
			}
			if(frameIndices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,frameIndices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,addByNames: function(Name,FrameNames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._sprite.cachedGraphics != null && this._sprite.cachedGraphics.data != null) {
			var indices = new Array();
			var l = FrameNames.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				var name = FrameNames[i];
				if(this._sprite.framesData.framesHash.exists(name)) {
					var frameToAdd = this._sprite.framesData.framesHash.get(name);
					indices.push(flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame(this._sprite.framesData.frames,frameToAdd));
				}
			}
			if(indices.length > 0) {
				var anim = new flixel.animation.FlxAnimation(this,Name,indices,FrameRate,Looped);
				this._animations.set(Name,anim);
			}
		}
	}
	,add: function(Name,Frames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[i] >= this._sprite.frames) Frames.splice(i,1);
			i--;
		}
		if(Frames.length > 0) {
			var anim = new flixel.animation.FlxAnimation(this,Name,Frames,FrameRate,Looped);
			this._animations.set(Name,anim);
		}
	}
	,get: function(Name) {
		return this._animations.get(Name);
	}
	,clear_animations: function() {
		if(this._animations != null) {
			var $it0 = ((function(_e) {
				return function() {
					return _e.iterator();
				};
			})(this._animations))();
			while( $it0.hasNext() ) {
				var anim = $it0.next();
				if(anim != null) anim.destroy();
			}
		}
		this._curAnim = null;
	}
	,clear_prerotated: function() {
		if(this._prerotated != null) this._prerotated.destroy();
		this._prerotated = null;
	}
	,destroy: function() {
		this.destroyAnimations();
		this._animations = null;
		this.callback = null;
		this._sprite = null;
	}
	,destroyAnimations: function() {
		this.clear_animations();
		this.clear_prerotated();
	}
	,createPrerotated: function(Controller) {
		this.destroyAnimations();
		Controller = Controller != null?Controller:this;
		this._prerotated = new flixel.animation.FlxPrerotatedAnimation(Controller,Controller._sprite.bakedRotation);
	}
	,copyFrom: function(controller) {
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(controller._animations))();
		while( $it0.hasNext() ) {
			var anim = $it0.next();
			this.add(anim.name,anim._frames,anim.frameRate,anim.looped);
		}
		if(controller._prerotated != null) this.createPrerotated();
		this.set_name(controller.get_name());
		this.set_frameIndex(controller.frameIndex);
		return this;
	}
	,update: function() {
		if(this._curAnim != null) this._curAnim.update(); else if(this._prerotated != null) this._prerotated.set_angle(this._sprite.angle);
	}
	,__class__: flixel.animation.FlxAnimationController
	,__properties__: {set_curAnim:"set_curAnim",get_curAnim:"get_curAnim",set_frameIndex:"set_frameIndex",set_frameName:"set_frameName",get_frameName:"get_frameName",set_name:"set_name",get_name:"get_name",set_paused:"set_paused",get_paused:"get_paused",set_finished:"set_finished",get_finished:"get_finished",get_frames:"get_frames"}
}
flixel.animation.FlxPrerotatedAnimation = function(Parent,Baked) {
	this.angle = 0;
	flixel.animation.FlxBaseAnimation.call(this,Parent,"prerotated_animation");
	this.baked = Baked;
	this.rotations = Math.round(360 / Baked);
};
$hxClasses["flixel.animation.FlxPrerotatedAnimation"] = flixel.animation.FlxPrerotatedAnimation;
flixel.animation.FlxPrerotatedAnimation.__name__ = ["flixel","animation","FlxPrerotatedAnimation"];
flixel.animation.FlxPrerotatedAnimation.__super__ = flixel.animation.FlxBaseAnimation;
flixel.animation.FlxPrerotatedAnimation.prototype = $extend(flixel.animation.FlxBaseAnimation.prototype,{
	clone: function(Parent) {
		return new flixel.animation.FlxPrerotatedAnimation(Parent,this.baked);
	}
	,set_curIndex: function(Value) {
		this.curIndex = Value;
		if(this.parent != null) this.parent.set_frameIndex(Value);
		return Value;
	}
	,set_angle: function(Value) {
		var oldIndex = this.curIndex;
		var angleHelper = Math.floor(Value % 360);
		while(angleHelper < 0) angleHelper += 360;
		var newIndex = Math.floor(angleHelper / this.baked + 0.5);
		newIndex = newIndex % this.rotations | 0;
		if(oldIndex != newIndex) this.set_curIndex(newIndex);
		return this.angle = Value;
	}
	,__class__: flixel.animation.FlxPrerotatedAnimation
	,__properties__: $extend(flixel.animation.FlxBaseAnimation.prototype.__properties__,{set_angle:"set_angle"})
});
flixel.util.FlxPool_flixel_effects_FlxFlicker = function() {
	this._pool = [];
};
$hxClasses["flixel.util.FlxPool_flixel_effects_FlxFlicker"] = flixel.util.FlxPool_flixel_effects_FlxFlicker;
flixel.util.FlxPool_flixel_effects_FlxFlicker.__name__ = ["flixel","util","FlxPool_flixel_effects_FlxFlicker"];
flixel.util.FlxPool_flixel_effects_FlxFlicker.prototype = {
	get_length: function() {
		return this._pool.length;
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,put: function(obj) {
		if(obj != null && flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPool_T(this._pool,obj) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = new flixel.effects.FlxFlicker();
		return obj;
	}
	,__class__: flixel.util.FlxPool_flixel_effects_FlxFlicker
	,__properties__: {get_length:"get_length"}
}
flixel.effects = {}
flixel.effects.FlxFlicker = function() {
};
$hxClasses["flixel.effects.FlxFlicker"] = flixel.effects.FlxFlicker;
flixel.effects.FlxFlicker.__name__ = ["flixel","effects","FlxFlicker"];
flixel.effects.FlxFlicker.recycle = function(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback) {
	var flicker = flixel.effects.FlxFlicker._pool.get();
	flicker.reset(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback);
	return flicker;
}
flixel.effects.FlxFlicker.put = function(Flicker) {
	flixel.effects.FlxFlicker._pool.put(Flicker);
}
flixel.effects.FlxFlicker.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	if(flixel.effects.FlxFlicker.isFlickering(Object)) {
		if(ForceRestart) flixel.effects.FlxFlicker.stopFlickering(Object); else return;
	}
	if(Interval <= 0) Interval = flixel.FlxG.elapsed;
	var fl = flixel.effects.FlxFlicker.recycle(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback);
	flixel.effects.FlxFlicker._boundObjects.set(Object,fl);
	fl;
	fl.start();
}
flixel.effects.FlxFlicker.isFlickering = function(Object) {
	return flixel.effects.FlxFlicker._boundObjects.h.hasOwnProperty(Object.__id__);
}
flixel.effects.FlxFlicker.stopFlickering = function(Object) {
	var boundFlicker = flixel.effects.FlxFlicker._boundObjects.h[Object.__id__];
	if(boundFlicker != null) boundFlicker.stop();
}
flixel.effects.FlxFlicker.prototype = {
	destroy: function() {
		this.object = null;
		this.timer = null;
		this.completionCallback = null;
		this.progressCallback = null;
	}
	,flickerProgress: function(Timer) {
		this.object.set_visible(!this.object.visible);
		if(this.progressCallback != null) this.progressCallback(this);
		if(Timer.loops > 0 && Timer.loops - Timer._loopsCounter == 0) {
			this.object.set_visible(this.endVisibility);
			if(this.completionCallback != null) this.completionCallback(this);
			this.release();
		}
	}
	,release: function() {
		flixel.effects.FlxFlicker._boundObjects.remove(this.object);
		flixel.effects.FlxFlicker.put(this);
	}
	,stop: function() {
		this.timer.abort();
		this.object.set_visible(true);
		this.release();
	}
	,start: function() {
		this.timer = flixel.util.FlxTimer.recycle();
		this.timer.run(this.interval,$bind(this,this.flickerProgress),this.duration / this.interval | 0);
	}
	,reset: function(Object,Duration,Interval,EndVisibility,CompletionCallback,ProgressCallback) {
		this.object = Object;
		this.duration = Duration;
		this.interval = Interval;
		this.completionCallback = CompletionCallback;
		this.progressCallback = ProgressCallback;
		this.endVisibility = EndVisibility;
	}
	,__class__: flixel.effects.FlxFlicker
}
flixel.group.FlxSpriteGroup = function(X,Y,MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.isDrawnDebug = false;
	this._skipTransformChildren = false;
	flixel.FlxSprite.call(this,X,Y);
	this.set_maxSize(MaxSize);
	this.set_autoReviveMembers(false);
};
$hxClasses["flixel.group.FlxSpriteGroup"] = flixel.group.FlxSpriteGroup;
flixel.group.FlxSpriteGroup.__name__ = ["flixel","group","FlxSpriteGroup"];
flixel.group.FlxSpriteGroup.__super__ = flixel.FlxSprite;
flixel.group.FlxSpriteGroup.prototype = $extend(flixel.FlxSprite.prototype,{
	updateFrameData: function() {
	}
	,updateColorTransform: function() {
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
	}
	,resetHelpers: function() {
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
	}
	,loadRotatedImageFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,loadImageFromTexture: function(Data,Reverse,Unique,FrameName) {
		if(Unique == null) Unique = false;
		if(Reverse == null) Reverse = false;
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Reverse,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Reverse == null) Reverse = false;
		if(Animated == null) Animated = false;
		return this;
	}
	,loadfromSprite: function(Sprite) {
		return this;
	}
	,dragTransform: function(Sprite,Drag) {
		Sprite.drag.copyFrom(Drag);
	}
	,scrollFactorTransform: function(Sprite,ScrollFactor) {
		Sprite.scrollFactor.copyFrom(ScrollFactor);
	}
	,accelerationTransform: function(Sprite,Acceleration) {
		Sprite.acceleration.copyFrom(Acceleration);
	}
	,maxVelocityTransform: function(Sprite,MaxVelocity) {
		Sprite.maxVelocity.copyFrom(MaxVelocity);
	}
	,velocityTransform: function(Sprite,Velocity) {
		Sprite.velocity.copyFrom(Velocity);
	}
	,scaleTransform: function(Sprite,Scale) {
		Sprite.scale.copyFrom(Scale);
	}
	,originTransform: function(Sprite,Origin) {
		Sprite.origin.copyFrom(Origin);
	}
	,offsetTransform: function(Sprite,Offset) {
		Sprite.offset.copyFrom(Offset);
	}
	,existsTransform: function(Sprite,Exists) {
		Sprite.set_exists(Exists);
	}
	,aliveTransform: function(Sprite,Alive) {
		Sprite.set_alive(Alive);
	}
	,solidTransform: function(Sprite,Solid) {
		Sprite.set_solid(Solid);
	}
	,activeTransform: function(Sprite,Active) {
		Sprite.set_active(Active);
	}
	,visibleTransform: function(Sprite,Visible) {
		Sprite.set_visible(Visible);
	}
	,immovableTransform: function(Sprite,Immovable) {
		Sprite.set_immovable(Immovable);
	}
	,blenfTransform: function(Sprite,Blend) {
		Sprite.set_blend(Blend);
	}
	,colorTransformF: function(Sprite,Color) {
		Sprite.set_color(Color);
	}
	,complexRenderTransform: function(Sprite,Complex) {
		Sprite.set_forceComplexRender(Complex);
	}
	,movesTransform: function(Sprite,Moves) {
		Sprite.set_moves(Moves);
	}
	,facingTransform: function(Sprite,Facing) {
		Sprite.set_facing(Facing);
	}
	,alphaTransform: function(Sprite,Alpha) {
		var _g = Sprite;
		_g.set_alpha(_g.alpha * Alpha);
	}
	,angleTransform: function(Sprite,Angle) {
		var _g = Sprite;
		_g.set_angle(_g.angle + Angle);
	}
	,yTransform: function(Sprite,Y) {
		var _g = Sprite;
		_g.set_y(_g.y + Y);
	}
	,xTransform: function(Sprite,X) {
		var _g = Sprite;
		_g.set_x(_g.x + X);
	}
	,set_autoReviveMembers: function(Value) {
		return this.group.autoReviveMembers = Value;
	}
	,get_autoReviveMembers: function() {
		return this.group.autoReviveMembers;
	}
	,get_members: function() {
		return this.group.get_members();
	}
	,set_maxSize: function(Size) {
		if(this.group == null) {
			this.group = new flixel.group.FlxTypedGroup(Size);
			return Size;
		}
		return this.group.set_maxSize(Size);
	}
	,get_maxSize: function() {
		return this.group.maxSize;
	}
	,get_length: function() {
		return this.group.length;
	}
	,set_forceComplexRender: function(Value) {
		if(this.exists && this.forceComplexRender != Value) this.transformChildren_Bool($bind(this,this.complexRenderTransform),Value);
		return flixel.FlxSprite.prototype.set_forceComplexRender.call(this,Value);
	}
	,set_solid: function(Solid) {
		if(this.exists && (this.allowCollisions & 4369) > 0 != Solid) this.transformChildren_Bool($bind(this,this.solidTransform),Solid);
		return flixel.FlxSprite.prototype.set_solid.call(this,Solid);
	}
	,set_blend: function(Blend) {
		if(this.exists && this._blend != Blend) this.transformChildren_flash_display_BlendMode($bind(this,this.blenfTransform),Blend);
		return this._blend = Blend;
	}
	,get_colorTransform: function() {
		return null;
	}
	,set_color: function(Color) {
		if(this.exists && this.color != Color) this.transformChildren_Int($bind(this,this.colorTransformF),Color);
		return this.color = Color;
	}
	,set_frame: function(Value) {
		return Value;
	}
	,set_pixels: function(Pixels) {
		return Pixels;
	}
	,get_pixels: function() {
		return null;
	}
	,set_maxVelocity: function(Value) {
		if(this.exists && this.maxVelocity != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.maxVelocityTransform),Value);
		return this.maxVelocity = Value;
	}
	,set_drag: function(Value) {
		if(this.exists && this.drag != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.dragTransform),Value);
		return this.drag = Value;
	}
	,set_acceleration: function(Value) {
		if(this.exists && this.acceleration != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.accelerationTransform),Value);
		return this.acceleration = Value;
	}
	,set_velocity: function(Value) {
		if(this.exists && this.velocity != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.velocityTransform),Value);
		return this.velocity = Value;
	}
	,set_scrollFactor: function(Value) {
		if(this.exists && this.scrollFactor != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.scrollFactorTransform),Value);
		return this.scrollFactor = Value;
	}
	,set_scale: function(Value) {
		if(this.exists && this.scale != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.scaleTransform),Value);
		return this.scale = Value;
	}
	,set_offset: function(Value) {
		if(this.exists && this.offset != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.offsetTransform),Value);
		return this.offset = Value;
	}
	,set_origin: function(Value) {
		if(this.exists && this.origin != Value && Value != null) this.transformChildren_flixel_util_FlxPoint($bind(this,this.originTransform),Value);
		return this.origin = Value;
	}
	,set_immovable: function(Value) {
		if(this.exists && this.immovable != Value) this.transformChildren_Bool($bind(this,this.immovableTransform),Value);
		return this.immovable = Value;
	}
	,set_moves: function(Value) {
		if(this.exists && this.moves != Value) this.transformChildren_Bool($bind(this,this.movesTransform),Value);
		return this.moves = Value;
	}
	,set_facing: function(Value) {
		if(this.exists && this.facing != Value) this.transformChildren_Int($bind(this,this.facingTransform),Value);
		return this.facing = Value;
	}
	,set_alpha: function(NewAlpha) {
		if(NewAlpha > 1) NewAlpha = 1; else if(NewAlpha < 0) NewAlpha = 0;
		if(this.exists && this.alpha != NewAlpha) {
			var factor = this.alpha > 0?NewAlpha / this.alpha:0;
			this.transformChildren_Float($bind(this,this.alphaTransform),factor);
		}
		return flixel.FlxSprite.prototype.set_alpha.call(this,NewAlpha);
	}
	,set_angle: function(NewAngle) {
		if(this.exists && this.angle != NewAngle) {
			var offset = NewAngle - this.angle;
			this.transformChildren_Float($bind(this,this.angleTransform),offset);
		}
		return this.angle = NewAngle;
	}
	,set_y: function(NewY) {
		if(!this._skipTransformChildren && this.exists && this.y != NewY) {
			var offset = NewY - this.y;
			this.transformChildren_Float($bind(this,this.yTransform),offset);
		}
		return this.y = NewY;
	}
	,set_x: function(NewX) {
		if(!this._skipTransformChildren && this.exists && this.x != NewX) {
			var offset = NewX - this.x;
			this.transformChildren_Float($bind(this,this.xTransform),offset);
		}
		return this.x = NewX;
	}
	,set_alive: function(Value) {
		if(this.exists && this.alive != Value) this.transformChildren_Bool($bind(this,this.aliveTransform),Value);
		return flixel.FlxSprite.prototype.set_alive.call(this,Value);
	}
	,set_active: function(Value) {
		if(this.exists && this.active != Value) this.transformChildren_Bool($bind(this,this.activeTransform),Value);
		return flixel.FlxSprite.prototype.set_active.call(this,Value);
	}
	,set_visible: function(Value) {
		if(this.exists && this.visible != Value) this.transformChildren_Bool($bind(this,this.visibleTransform),Value);
		return flixel.FlxSprite.prototype.set_visible.call(this,Value);
	}
	,set_exists: function(Value) {
		if(this.exists != Value) this.transformChildren_Bool($bind(this,this.existsTransform),Value);
		return flixel.FlxSprite.prototype.set_exists.call(this,Value);
	}
	,setPosition: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		var dx = X - this.x;
		var dy = Y - this.y;
		this.multiTransformChildren_Float([$bind(this,this.xTransform),$bind(this,this.yTransform)],[dx,dy]);
		this._skipTransformChildren = true;
		this.set_x(X);
		this.set_y(Y);
		this._skipTransformChildren = false;
	}
	,reset: function(X,Y) {
		this.revive();
		this.setPosition(X,Y);
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null) sprite.reset(X,Y);
		}
	}
	,revive: function() {
		flixel.FlxSprite.prototype.revive.call(this);
		this.group.revive();
	}
	,kill: function() {
		flixel.FlxSprite.prototype.kill.call(this);
		this.group.kill();
	}
	,clear: function() {
		this.group.clear();
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		return this.group.getRandom(StartIndex,Length);
	}
	,countDead: function() {
		return this.group.countDead();
	}
	,countLiving: function() {
		return this.group.countLiving();
	}
	,getFirstDead: function() {
		return this.group.getFirstDead();
	}
	,getFirstAlive: function() {
		return this.group.getFirstAlive();
	}
	,getFirstExisting: function() {
		return this.group.getFirstExisting();
	}
	,getFirstNull: function() {
		return this.group.getFirstNull();
	}
	,getFirstAvailable: function(ObjectClass,Force) {
		if(Force == null) Force = false;
		return this.group.getFirstAvailable(ObjectClass,Force);
	}
	,callAll: function(FunctionName,Args,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.callAll(FunctionName,Args,Recurse);
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		this.group.setAll(VariableName,Value,Recurse);
	}
	,sort: function(Index,Order) {
		if(Order == null) Order = -1;
		if(Index == null) Index = "y";
		this.group.sort(Index,Order);
	}
	,replace: function(OldObject,NewObject) {
		return this.group.replace(OldObject,NewObject);
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		return this.group.remove(Object,Splice);
	}
	,recycle: function(ObjectClass,ContructorArgs,Force) {
		if(Force == null) Force = false;
		return this.group.recycle(ObjectClass,ContructorArgs,Force);
	}
	,add: function(Sprite) {
		var _g = Sprite;
		_g.set_x(_g.x + this.x);
		var _g = Sprite;
		_g.set_y(_g.y + this.y);
		var _g = Sprite;
		_g.set_alpha(_g.alpha * this.alpha);
		this.group.add(Sprite);
		return Sprite;
	}
	,drawDebugOnCamera: function(Camera) {
		if(!this.isDrawnDebug) {
			this.group.drawDebug();
			this.isDrawnDebug = true;
		}
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var spritePositions;
		var _g = 0, _g1 = this.group.get_members();
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null) {
				spritePositions = sprite.replaceColor(Color,NewColor,FetchPositions);
				if(FetchPositions) positions = positions.concat(spritePositions);
			}
		}
		return positions;
	}
	,draw: function() {
		this.group.draw();
		this.isDrawnDebug = false;
	}
	,update: function() {
		this.group.update();
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		var result = false;
		var _g = 0, _g1 = this.group.get_members();
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.pixelsOverlapPoint(point,Mask,Camera);
		}
		return result;
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var result = false;
		var _g = 0, _g1 = this.group.get_members();
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.overlapsPoint(point,InScreenSpace,Camera);
		}
		return result;
	}
	,onScreen: function(Camera) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		var result = false;
		var _g = 0, _g1 = this.group.get_members();
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			if(sprite != null && sprite.exists && sprite.visible) result = result || sprite.onScreen(Camera);
		}
		return result;
	}
	,clone: function(NewSprite) {
		if(NewSprite == null || !js.Boot.__instanceof(NewSprite,flixel.group.FlxSpriteGroup)) NewSprite = new flixel.group.FlxSpriteGroup(0,0,this.group.maxSize);
		var cloned = NewSprite;
		cloned.set_maxSize(this.group.maxSize);
		var _g = 0, _g1 = this.group.get_members();
		while(_g < _g1.length) {
			var basic = _g1[_g];
			++_g;
			if(basic != null) cloned.add(basic.clone());
		}
		return cloned;
	}
	,destroy: function() {
		if(this.offset != null) {
			this.offset.destroy();
			this.set_offset(null);
		}
		if(this.origin != null) {
			this.origin.destroy();
			this.set_origin(null);
		}
		if(this.scale != null) {
			this.scale.destroy();
			this.set_scale(null);
		}
		if(this.velocity != null) {
			this.velocity.destroy();
			this.set_velocity(null);
		}
		if(this.maxVelocity != null) {
			this.maxVelocity.destroy();
			this.set_maxVelocity(null);
		}
		if(this.acceleration != null) {
			this.acceleration.destroy();
			this.set_acceleration(null);
		}
		if(this.scrollFactor != null) {
			this.scrollFactor.destroy();
			this.set_scrollFactor(null);
		}
		if(this.drag != null) {
			this.drag.destroy();
			this.set_drag(null);
		}
		if(this.group != null) {
			this.group.destroy();
			this.group = null;
		}
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,initVars: function() {
		this.collisionType = flixel.system.FlxCollisionType.SPRITEGROUP;
		this.set_offset(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.offsetTransform)));
		this.set_origin(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.originTransform)));
		this.set_scale(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.scaleTransform)));
		this.set_velocity(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.velocityTransform)));
		this.set_maxVelocity(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.maxVelocityTransform)));
		this.set_acceleration(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.accelerationTransform)));
		this.set_scrollFactor(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.scrollFactorTransform)));
		this.set_drag(new flixel.group._FlxSpriteGroup.FlxPointHelper(this,$bind(this,this.dragTransform)));
	}
	,multiTransformChildren_Float: function(FunctionArray,ValueArray) {
		if(this.group == null) return;
		var numProps = FunctionArray.length;
		if(numProps > ValueArray.length) return;
		var basic;
		var lambda;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			basic = this.group.get_members()[i];
			if(basic != null && basic.exists) {
				var _g2 = 0;
				while(_g2 < numProps) {
					var j = _g2++;
					lambda = FunctionArray[j];
					lambda(basic,ValueArray[j]);
				}
			}
		}
	}
	,transformChildren_Bool: function(Function,Value) {
		if(this.group == null) return;
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Float: function(Function,Value) {
		if(this.group == null) return;
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_Int: function(Function,Value) {
		if(this.group == null) return;
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_flixel_util_FlxPoint: function(Function,Value) {
		if(this.group == null) return;
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,transformChildren_flash_display_BlendMode: function(Function,Value) {
		if(this.group == null) return;
		var sprite;
		var _g1 = 0, _g = this.get_length();
		while(_g1 < _g) {
			var i = _g1++;
			sprite = this.group.get_members()[i];
			if(sprite != null && sprite.exists) Function(sprite,Value);
		}
	}
	,__class__: flixel.group.FlxSpriteGroup
	,__properties__: $extend(flixel.FlxSprite.prototype.__properties__,{get_members:"get_members",get_length:"get_length",set_maxSize:"set_maxSize",get_maxSize:"get_maxSize",set_autoReviveMembers:"set_autoReviveMembers",get_autoReviveMembers:"get_autoReviveMembers"})
});
flixel.group._FlxSpriteGroup = {}
flixel.group._FlxSpriteGroup.FlxPointHelper = function(parent,transformFunc) {
	this._parent = parent;
	this._transformFunc = transformFunc;
	flixel.util.FlxPoint.call(this,0,0);
};
$hxClasses["flixel.group._FlxSpriteGroup.FlxPointHelper"] = flixel.group._FlxSpriteGroup.FlxPointHelper;
flixel.group._FlxSpriteGroup.FlxPointHelper.__name__ = ["flixel","group","_FlxSpriteGroup","FlxPointHelper"];
flixel.group._FlxSpriteGroup.FlxPointHelper.__super__ = flixel.util.FlxPoint;
flixel.group._FlxSpriteGroup.FlxPointHelper.prototype = $extend(flixel.util.FlxPoint.prototype,{
	destroy: function() {
		flixel.util.FlxPoint.prototype.destroy.call(this);
		this._parent = null;
		this._transformFunc = null;
	}
	,set_y: function(Value) {
		flixel.util.FlxPoint.prototype.set_y.call(this,Value);
		this._parent.transformChildren_flixel_util_FlxPoint(this._transformFunc,this);
		return Value;
	}
	,set_x: function(Value) {
		flixel.util.FlxPoint.prototype.set_x.call(this,Value);
		this._parent.transformChildren_flixel_util_FlxPoint(this._transformFunc,this);
		return Value;
	}
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		flixel.util.FlxPoint.prototype.set.call(this,X,Y);
		this._parent.transformChildren_flixel_util_FlxPoint(this._transformFunc,this);
		return this;
	}
	,__class__: flixel.group._FlxSpriteGroup.FlxPointHelper
});
flixel.system._FlxAssets = {}
flixel.system._FlxAssets.FontDefault = function() {
	flash.text.Font.call(this);
};
$hxClasses["flixel.system._FlxAssets.FontDefault"] = flixel.system._FlxAssets.FontDefault;
flixel.system._FlxAssets.FontDefault.__name__ = ["flixel","system","_FlxAssets","FontDefault"];
flixel.system._FlxAssets.FontDefault.__super__ = flash.text.Font;
flixel.system._FlxAssets.FontDefault.prototype = $extend(flash.text.Font.prototype,{
	__class__: flixel.system._FlxAssets.FontDefault
});
flixel.system._FlxAssets.FontDebugger = function() {
	flash.text.Font.call(this);
};
$hxClasses["flixel.system._FlxAssets.FontDebugger"] = flixel.system._FlxAssets.FontDebugger;
flixel.system._FlxAssets.FontDebugger.__name__ = ["flixel","system","_FlxAssets","FontDebugger"];
flixel.system._FlxAssets.FontDebugger.__super__ = flash.text.Font;
flixel.system._FlxAssets.FontDebugger.prototype = $extend(flash.text.Font.prototype,{
	__class__: flixel.system._FlxAssets.FontDebugger
});
flixel.system.FlxAssets = function() { }
$hxClasses["flixel.system.FlxAssets"] = flixel.system.FlxAssets;
flixel.system.FlxAssets.__name__ = ["flixel","system","FlxAssets"];
flixel.system.FlxAssets.init = function() {
	flash.text.Font.registerFont(flixel.system._FlxAssets.FontDefault);
	flash.text.Font.registerFont(flixel.system._FlxAssets.FontDebugger);
}
flixel.system.FlxAssets.drawLogo = function(graph) {
	graph.beginFill(47394);
	graph.moveTo(50,13);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(87,51);
	graph.lineTo(51,87);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(13,50);
	graph.lineTo(50,13);
	graph.endFill();
	graph.beginFill(16761138);
	graph.moveTo(0,0);
	graph.lineTo(25,0);
	graph.lineTo(50,13);
	graph.lineTo(13,50);
	graph.lineTo(0,25);
	graph.lineTo(0,0);
	graph.endFill();
	graph.beginFill(16066382);
	graph.moveTo(100,0);
	graph.lineTo(75,0);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(100,25);
	graph.lineTo(100,0);
	graph.endFill();
	graph.beginFill(3555839);
	graph.moveTo(0,100);
	graph.lineTo(25,100);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(0,75);
	graph.lineTo(0,100);
	graph.endFill();
	graph.beginFill(314875);
	graph.moveTo(100,100);
	graph.lineTo(75,100);
	graph.lineTo(51,87);
	graph.lineTo(87,51);
	graph.lineTo(100,75);
	graph.lineTo(100,100);
	graph.endFill();
}
flixel.system.FlxAssets.getBitmapData = function(id) {
	return openfl.Assets.getBitmapData(id,false);
}
flixel.system.FlxAssets.cacheSounds = function() {
}
flixel.system.FlxBGSprite = function() {
	flixel.FlxSprite.call(this);
	this.makeGraphic(1,1,0,true,flixel.FlxG.bitmap.getUniqueKey("bg_graphic_"));
	this.scrollFactor.set();
};
$hxClasses["flixel.system.FlxBGSprite"] = flixel.system.FlxBGSprite;
flixel.system.FlxBGSprite.__name__ = ["flixel","system","FlxBGSprite"];
flixel.system.FlxBGSprite.__super__ = flixel.FlxSprite;
flixel.system.FlxBGSprite.prototype = $extend(flixel.FlxSprite.prototype,{
	draw: function() {
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		while(i < l) {
			camera = this.cameras[i++];
			if(!camera.visible || !camera.exists) continue;
			drawItem = camera.getDrawStackItem(this.cachedGraphics,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.set_x(camera.width * 0.5);
			this._point.set_y(camera.height * 0.5);
			var csx = camera.width;
			var ssy = 0;
			var ssx = 0;
			var csy = camera.height;
			currDrawData[currIndex++] = this._point.x;
			currDrawData[currIndex++] = this._point.y;
			currDrawData[currIndex++] = this.frame.tileID;
			currDrawData[currIndex++] = csx;
			currDrawData[currIndex++] = ssx;
			currDrawData[currIndex++] = -ssy;
			currDrawData[currIndex++] = csy;
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,__class__: flixel.system.FlxBGSprite
});
flixel.system.FlxList = function() {
	this.object = null;
	this.next = null;
	this.exists = true;
};
$hxClasses["flixel.system.FlxList"] = flixel.system.FlxList;
flixel.system.FlxList.__name__ = ["flixel","system","FlxList"];
flixel.system.FlxList.recycle = function() {
	if(flixel.system.FlxList._cachedListsHead != null) {
		var cachedList = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = flixel.system.FlxList._cachedListsHead.next;
		flixel.system.FlxList._NUM_CACHED_FLX_LIST--;
		cachedList.exists = true;
		cachedList.next = null;
		return cachedList;
	} else return new flixel.system.FlxList();
}
flixel.system.FlxList.clearCache = function() {
	while(flixel.system.FlxList._cachedListsHead != null) {
		var node = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = flixel.system.FlxList._cachedListsHead.next;
		node.object = null;
		node.next = null;
	}
	flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
}
flixel.system.FlxList.prototype = {
	destroy: function() {
		if(!this.exists) return;
		this.object = null;
		if(this.next != null) this.next.destroy();
		this.exists = false;
		this.next = flixel.system.FlxList._cachedListsHead;
		flixel.system.FlxList._cachedListsHead = this;
		flixel.system.FlxList._NUM_CACHED_FLX_LIST++;
	}
	,__class__: flixel.system.FlxList
}
flixel.system.FlxQuadTree = function(X,Y,Width,Height,Parent) {
	flixel.util.FlxRect.call(this,X,Y,Width,Height);
	this.reset(X,Y,Width,Height,Parent);
};
$hxClasses["flixel.system.FlxQuadTree"] = flixel.system.FlxQuadTree;
flixel.system.FlxQuadTree.__name__ = ["flixel","system","FlxQuadTree"];
flixel.system.FlxQuadTree.recycle = function(X,Y,Width,Height,Parent) {
	if(flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var cachedTree = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = flixel.system.FlxQuadTree._cachedTreesHead.next;
		flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES--;
		cachedTree.reset(X,Y,Width,Height,Parent);
		return cachedTree;
	} else return new flixel.system.FlxQuadTree(X,Y,Width,Height,Parent);
}
flixel.system.FlxQuadTree.clearCache = function() {
	while(flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var node = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = flixel.system.FlxQuadTree._cachedTreesHead.next;
		node.next = null;
	}
	flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
}
flixel.system.FlxQuadTree.__super__ = flixel.util.FlxRect;
flixel.system.FlxQuadTree.prototype = $extend(flixel.util.FlxRect.prototype,{
	overlapNode: function() {
		var overlapProcessed = false;
		var checkObject;
		while(flixel.system.FlxQuadTree._iterator != null) {
			if(flixel.system.FlxQuadTree._object == null || (!flixel.system.FlxQuadTree._object.exists || flixel.system.FlxQuadTree._object.allowCollisions <= 0)) break;
			checkObject = flixel.system.FlxQuadTree._iterator.object;
			if(flixel.system.FlxQuadTree._object == checkObject || !checkObject.exists || checkObject.allowCollisions <= 0) {
				flixel.system.FlxQuadTree._iterator = flixel.system.FlxQuadTree._iterator.next;
				continue;
			}
			flixel.system.FlxQuadTree._objectHullX = flixel.system.FlxQuadTree._object.x < flixel.system.FlxQuadTree._object.last.x?flixel.system.FlxQuadTree._object.x:flixel.system.FlxQuadTree._object.last.x;
			flixel.system.FlxQuadTree._objectHullY = flixel.system.FlxQuadTree._object.y < flixel.system.FlxQuadTree._object.last.y?flixel.system.FlxQuadTree._object.y:flixel.system.FlxQuadTree._object.last.y;
			flixel.system.FlxQuadTree._objectHullWidth = flixel.system.FlxQuadTree._object.x - flixel.system.FlxQuadTree._object.last.x;
			flixel.system.FlxQuadTree._objectHullWidth = flixel.system.FlxQuadTree._object.width + (flixel.system.FlxQuadTree._objectHullWidth > 0?flixel.system.FlxQuadTree._objectHullWidth:-flixel.system.FlxQuadTree._objectHullWidth);
			flixel.system.FlxQuadTree._objectHullHeight = flixel.system.FlxQuadTree._object.y - flixel.system.FlxQuadTree._object.last.y;
			flixel.system.FlxQuadTree._objectHullHeight = flixel.system.FlxQuadTree._object.height + (flixel.system.FlxQuadTree._objectHullHeight > 0?flixel.system.FlxQuadTree._objectHullHeight:-flixel.system.FlxQuadTree._objectHullHeight);
			flixel.system.FlxQuadTree._checkObjectHullX = checkObject.x < checkObject.last.x?checkObject.x:checkObject.last.x;
			flixel.system.FlxQuadTree._checkObjectHullY = checkObject.y < checkObject.last.y?checkObject.y:checkObject.last.y;
			flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.x - checkObject.last.x;
			flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.width + (flixel.system.FlxQuadTree._checkObjectHullWidth > 0?flixel.system.FlxQuadTree._checkObjectHullWidth:-flixel.system.FlxQuadTree._checkObjectHullWidth);
			flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.y - checkObject.last.y;
			flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.height + (flixel.system.FlxQuadTree._checkObjectHullHeight > 0?flixel.system.FlxQuadTree._checkObjectHullHeight:-flixel.system.FlxQuadTree._checkObjectHullHeight);
			if(flixel.system.FlxQuadTree._objectHullX + flixel.system.FlxQuadTree._objectHullWidth > flixel.system.FlxQuadTree._checkObjectHullX && flixel.system.FlxQuadTree._objectHullX < flixel.system.FlxQuadTree._checkObjectHullX + flixel.system.FlxQuadTree._checkObjectHullWidth && flixel.system.FlxQuadTree._objectHullY + flixel.system.FlxQuadTree._objectHullHeight > flixel.system.FlxQuadTree._checkObjectHullY && flixel.system.FlxQuadTree._objectHullY < flixel.system.FlxQuadTree._checkObjectHullY + flixel.system.FlxQuadTree._checkObjectHullHeight) {
				if(flixel.system.FlxQuadTree._processingCallback == null || flixel.system.FlxQuadTree._processingCallback(flixel.system.FlxQuadTree._object,checkObject)) {
					overlapProcessed = true;
					if(flixel.system.FlxQuadTree._notifyCallback != null) flixel.system.FlxQuadTree._notifyCallback(flixel.system.FlxQuadTree._object,checkObject);
				}
			}
			if(flixel.system.FlxQuadTree._iterator != null) flixel.system.FlxQuadTree._iterator = flixel.system.FlxQuadTree._iterator.next;
		}
		return overlapProcessed;
	}
	,execute: function() {
		var overlapProcessed = false;
		var iterator;
		if(this._headA.object != null) {
			iterator = this._headA;
			while(iterator != null) {
				flixel.system.FlxQuadTree._object = iterator.object;
				if(flixel.system.FlxQuadTree._useBothLists) flixel.system.FlxQuadTree._iterator = this._headB; else flixel.system.FlxQuadTree._iterator = iterator.next;
				if(flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions > 0 && flixel.system.FlxQuadTree._iterator != null && flixel.system.FlxQuadTree._iterator.object != null && flixel.system.FlxQuadTree._iterator.object.exists && this.overlapNode()) overlapProcessed = true;
				iterator = iterator.next;
			}
		}
		if(this._northWestTree != null && this._northWestTree.execute()) overlapProcessed = true;
		if(this._northEastTree != null && this._northEastTree.execute()) overlapProcessed = true;
		if(this._southEastTree != null && this._southEastTree.execute()) overlapProcessed = true;
		if(this._southWestTree != null && this._southWestTree.execute()) overlapProcessed = true;
		return overlapProcessed;
	}
	,addToList: function() {
		var ot;
		if(flixel.system.FlxQuadTree._list == 0) {
			if(this._tailA.object != null) {
				ot = this._tailA;
				this._tailA = flixel.system.FlxList.recycle();
				ot.next = this._tailA;
			}
			this._tailA.object = flixel.system.FlxQuadTree._object;
		} else {
			if(this._tailB.object != null) {
				ot = this._tailB;
				this._tailB = flixel.system.FlxList.recycle();
				ot.next = this._tailB;
			}
			this._tailB.object = flixel.system.FlxQuadTree._object;
		}
		if(!this._canSubdivide) return;
		if(this._northWestTree != null) this._northWestTree.addToList();
		if(this._northEastTree != null) this._northEastTree.addToList();
		if(this._southEastTree != null) this._southEastTree.addToList();
		if(this._southWestTree != null) this._southWestTree.addToList();
	}
	,addObject: function() {
		if(!this._canSubdivide || this._leftEdge >= flixel.system.FlxQuadTree._objectLeftEdge && this._rightEdge <= flixel.system.FlxQuadTree._objectRightEdge && this._topEdge >= flixel.system.FlxQuadTree._objectTopEdge && this._bottomEdge <= flixel.system.FlxQuadTree._objectBottomEdge) {
			this.addToList();
			return;
		}
		if(flixel.system.FlxQuadTree._objectLeftEdge > this._leftEdge && flixel.system.FlxQuadTree._objectRightEdge < this._midpointX) {
			if(flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northWestTree == null) this._northWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northWestTree.addObject();
				return;
			}
			if(flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southWestTree == null) this._southWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southWestTree.addObject();
				return;
			}
		}
		if(flixel.system.FlxQuadTree._objectLeftEdge > this._midpointX && flixel.system.FlxQuadTree._objectRightEdge < this._rightEdge) {
			if(flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northEastTree == null) this._northEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northEastTree.addObject();
				return;
			}
			if(flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southEastTree == null) this._southEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southEastTree.addObject();
				return;
			}
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northWestTree == null) this._northWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northWestTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northEastTree == null) this._northEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northEastTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southEastTree == null) this._southEastTree = flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southEastTree.addObject();
		}
		if(flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southWestTree == null) this._southWestTree = flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southWestTree.addObject();
		}
	}
	,add: function(ObjectOrGroup,list) {
		flixel.system.FlxQuadTree._list = list;
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.SPRITEGROUP) ObjectOrGroup = Reflect.field(ObjectOrGroup,"group");
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.GROUP) {
			var i = 0;
			var basic;
			var collisionType;
			var group = ObjectOrGroup;
			var members = group.get_members();
			var l = group.length;
			while(i < l) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					collisionType = basic.collisionType;
					if(collisionType == flixel.system.FlxCollisionType.SPRITEGROUP) basic = Reflect.field(ObjectOrGroup,"group");
					if(collisionType == flixel.system.FlxCollisionType.GROUP) this.add(basic,list); else if(collisionType == flixel.system.FlxCollisionType.OBJECT || collisionType == flixel.system.FlxCollisionType.TILEMAP) {
						flixel.system.FlxQuadTree._object = js.Boot.__cast(basic , flixel.FlxObject);
						if(flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions != 0) {
							flixel.system.FlxQuadTree._objectLeftEdge = flixel.system.FlxQuadTree._object.x;
							flixel.system.FlxQuadTree._objectTopEdge = flixel.system.FlxQuadTree._object.y;
							flixel.system.FlxQuadTree._objectRightEdge = flixel.system.FlxQuadTree._object.x + flixel.system.FlxQuadTree._object.width;
							flixel.system.FlxQuadTree._objectBottomEdge = flixel.system.FlxQuadTree._object.y + flixel.system.FlxQuadTree._object.height;
							this.addObject();
						}
					}
				}
			}
		} else {
			flixel.system.FlxQuadTree._object = js.Boot.__cast(ObjectOrGroup , flixel.FlxObject);
			if(flixel.system.FlxQuadTree._object.exists && flixel.system.FlxQuadTree._object.allowCollisions != 0) {
				flixel.system.FlxQuadTree._objectLeftEdge = flixel.system.FlxQuadTree._object.x;
				flixel.system.FlxQuadTree._objectTopEdge = flixel.system.FlxQuadTree._object.y;
				flixel.system.FlxQuadTree._objectRightEdge = flixel.system.FlxQuadTree._object.x + flixel.system.FlxQuadTree._object.width;
				flixel.system.FlxQuadTree._objectBottomEdge = flixel.system.FlxQuadTree._object.y + flixel.system.FlxQuadTree._object.height;
				this.addObject();
			}
		}
	}
	,load: function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
		this.add(ObjectOrGroup1,0);
		if(ObjectOrGroup2 != null) {
			this.add(ObjectOrGroup2,1);
			flixel.system.FlxQuadTree._useBothLists = true;
		} else flixel.system.FlxQuadTree._useBothLists = false;
		flixel.system.FlxQuadTree._notifyCallback = NotifyCallback;
		flixel.system.FlxQuadTree._processingCallback = ProcessCallback;
	}
	,destroy: function() {
		if(this._headA != null) this._headA.destroy();
		this._headA = null;
		if(this._tailA != null) this._tailA.destroy();
		this._tailA = null;
		if(this._headB != null) this._headB.destroy();
		this._headB = null;
		if(this._tailB != null) this._tailB.destroy();
		this._tailB = null;
		if(this._northWestTree != null) this._northWestTree.destroy();
		this._northWestTree = null;
		if(this._northEastTree != null) this._northEastTree.destroy();
		this._northEastTree = null;
		if(this._southEastTree != null) this._southEastTree.destroy();
		this._southEastTree = null;
		if(this._southWestTree != null) this._southWestTree.destroy();
		this._southWestTree = null;
		flixel.system.FlxQuadTree._object = null;
		flixel.system.FlxQuadTree._processingCallback = null;
		flixel.system.FlxQuadTree._notifyCallback = null;
		this.exists = false;
		this.next = flixel.system.FlxQuadTree._cachedTreesHead;
		flixel.system.FlxQuadTree._cachedTreesHead = this;
		flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES++;
	}
	,reset: function(X,Y,Width,Height,Parent) {
		this.exists = true;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		this;
		this._headA = this._tailA = flixel.system.FlxList.recycle();
		this._headB = this._tailB = flixel.system.FlxList.recycle();
		if(Parent != null) {
			var iterator;
			var ot;
			if(Parent._headA.object != null) {
				iterator = Parent._headA;
				while(iterator != null) {
					if(this._tailA.object != null) {
						ot = this._tailA;
						this._tailA = flixel.system.FlxList.recycle();
						ot.next = this._tailA;
					}
					this._tailA.object = iterator.object;
					iterator = iterator.next;
				}
			}
			if(Parent._headB.object != null) {
				iterator = Parent._headB;
				while(iterator != null) {
					if(this._tailB.object != null) {
						ot = this._tailB;
						this._tailB = flixel.system.FlxList.recycle();
						ot.next = this._tailB;
					}
					this._tailB.object = iterator.object;
					iterator = iterator.next;
				}
			}
		} else flixel.system.FlxQuadTree._min = Math.floor((this.width + this.height) / (2 * flixel.system.FlxQuadTree.divisions));
		this._canSubdivide = this.width > flixel.system.FlxQuadTree._min || this.height > flixel.system.FlxQuadTree._min;
		this._northWestTree = null;
		this._northEastTree = null;
		this._southEastTree = null;
		this._southWestTree = null;
		this._leftEdge = this.x;
		this._rightEdge = this.x + this.width;
		this._halfWidth = this.width / 2;
		this._midpointX = this._leftEdge + this._halfWidth;
		this._topEdge = this.y;
		this._bottomEdge = this.y + this.height;
		this._halfHeight = this.height / 2;
		this._midpointY = this._topEdge + this._halfHeight;
	}
	,__class__: flixel.system.FlxQuadTree
});
flixel.system.FlxSound = function() {
	this._volumeAdjust = 1.0;
	flixel.FlxBasic.call(this);
	this.reset();
};
$hxClasses["flixel.system.FlxSound"] = flixel.system.FlxSound;
flixel.system.FlxSound.__name__ = ["flixel","system","FlxSound"];
flixel.system.FlxSound.__super__ = flixel.FlxBasic;
flixel.system.FlxSound.prototype = $extend(flixel.FlxBasic.prototype,{
	gotID3: function(event) {
		flixel.FlxG.log.notice("Got ID3 info.");
		this.name = this._sound.id3.songName;
		this.artist = this._sound.id3.artist;
		this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
	}
	,cleanup: function(destroySound,resetPosition,resetFading) {
		if(resetFading == null) resetFading = true;
		if(resetPosition == null) resetPosition = true;
		if(destroySound) {
			this.reset();
			return;
		}
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		this.set_active(false);
		if(resetPosition) {
			this._position = 0;
			this._paused = false;
		}
		if(resetFading) {
			if(this._fade != null) this._fade.destroy();
			this._fade = null;
			this._onFadeComplete = null;
		}
	}
	,stopped: function(event) {
		if(this.onComplete != null) this.onComplete();
		if(this._looped) {
			this.cleanup(false);
			this.play();
		} else this.cleanup(this.autoDestroy);
	}
	,startSound: function(Position) {
		var numLoops = this._looped && Position == 0?9999:0;
		this._position = Position;
		this._paused = false;
		this._channel = this._sound.play(this._position,numLoops,this._transform);
		if(this._channel != null) {
			this._channel.addEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this.set_active(true);
		} else {
			this.set_exists(false);
			this.set_active(false);
		}
	}
	,updateTransform: function() {
		this._transform.volume = (flixel.FlxG.sound.muted?0:1) * flixel.FlxG.sound.volume * this._volume * this._volumeAdjust;
		if(this._channel != null) this._channel.set_soundTransform(this._transform);
	}
	,getActualVolume: function() {
		return this._volume * this._volumeAdjust;
	}
	,set_volume: function(Volume) {
		this._volume = Volume;
		if(this._volume < 0) this._volume = 0; else if(this._volume > 1) this._volume = 1;
		this.updateTransform();
		return Volume;
	}
	,get_volume: function() {
		return this._volume;
	}
	,get_playing: function() {
		return this._channel != null;
	}
	,fadeIn: function(Seconds) {
		if(this.get_playing() && this._fade == null) return;
		var fadeStartVolume = this._fade != null?this._fade.value:0;
		this._fade = new flixel.tweens.misc.NumTween();
		this._fade.tween(fadeStartVolume,1,Seconds);
		this._fade.start();
		this._onFadeComplete = null;
		this.play();
		this.update();
	}
	,fadeOut: function(Seconds,PauseInstead) {
		if(PauseInstead == null) PauseInstead = false;
		if(!this.get_playing()) return;
		var fadeStartVolume = this._fade != null?this._fade.value:1;
		this._fade = new flixel.tweens.misc.NumTween();
		this._fade.tween(fadeStartVolume,0,Seconds);
		this._fade.start();
		this._onFadeComplete = PauseInstead?$bind(this,this.pause):$bind(this,this.stop);
	}
	,stop: function() {
		this.cleanup(this.autoDestroy,true,true);
	}
	,pause: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		this._paused = true;
		this.cleanup(false,false,false);
	}
	,resume: function() {
		if(this._paused) this.startSound(this._position);
	}
	,play: function(ForceRestart) {
		if(ForceRestart == null) ForceRestart = false;
		if(!this.exists) return;
		if(ForceRestart) this.cleanup(false,true,true); else if(this.get_playing()) return;
		if(this._paused) this.resume(); else this.startSound(0);
	}
	,proximity: function(X,Y,TargetObject,Radius,Pan) {
		if(Pan == null) Pan = true;
		this.x = X;
		this.y = Y;
		this._target = TargetObject;
		this._radius = Radius;
		this._pan = Pan;
		return this;
	}
	,loadStream: function(SoundURL,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this._sound = new flash.media.Sound();
		this._sound.addEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
		this._sound.load(new flash.net.URLRequest(SoundURL));
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,loadEmbedded: function(EmbeddedSound,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		if(js.Boot.__instanceof(EmbeddedSound,flash.media.Sound)) this._sound = EmbeddedSound; else if(js.Boot.__instanceof(EmbeddedSound,Class)) this._sound = Type.createInstance(EmbeddedSound,[]); else if(js.Boot.__instanceof(EmbeddedSound,String)) this._sound = openfl.Assets.getSound(EmbeddedSound);
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.set_exists(true);
		this.onComplete = OnComplete;
		return this;
	}
	,kill: function() {
		flixel.FlxBasic.prototype.kill.call(this);
		this.cleanup(false);
	}
	,update: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		var radialMultiplier = 1.0;
		var fadeMultiplier = 1.0;
		if(this._target != null) {
			radialMultiplier = flixel.util.FlxMath.getDistance(new flixel.util.FlxPoint(this._target.x,this._target.y),new flixel.util.FlxPoint(this.x,this.y)) / this._radius;
			if(radialMultiplier < 0) radialMultiplier = 0;
			if(radialMultiplier > 1) radialMultiplier = 1;
			radialMultiplier = 1 - radialMultiplier;
			if(this._pan) {
				var d = (this.x - this._target.x) / this._radius;
				if(d < -1) d = -1; else if(d > 1) d = 1;
				this._transform.pan = d;
			}
		}
		if(this._fade != null) {
			this._fade.update();
			fadeMultiplier = this._fade.value;
			if(this._fade.get_percent() >= 1.0) {
				this._fade.destroy();
				if(this._onFadeComplete != null) this._onFadeComplete();
			}
		}
		this._volumeAdjust = radialMultiplier * fadeMultiplier;
		this.updateTransform();
		if(this._transform.volume > 0) {
			this.amplitudeLeft = this._channel.leftPeak / this._transform.volume;
			this.amplitudeRight = this._channel.rightPeak / this._transform.volume;
			this.amplitude = (this.amplitudeLeft + this.amplitudeRight) * 0.5;
		} else {
			this.amplitudeLeft = 0;
			this.amplitudeRight = 0;
			this.amplitude = 0;
		}
	}
	,destroy: function() {
		this._transform = null;
		this.set_exists(false);
		this.set_active(false);
		this._target = null;
		this.name = null;
		this.artist = null;
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		if(this._sound != null) {
			this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
			this._sound = null;
		}
		this.onComplete = null;
		flixel.FlxBasic.prototype.destroy.call(this);
	}
	,reset: function() {
		this.destroy();
		this.x = 0;
		this.y = 0;
		this._position = 0;
		this._paused = false;
		this._volume = 1.0;
		this._volumeAdjust = 1.0;
		this._looped = false;
		this._target = null;
		this._radius = 0;
		this._pan = false;
		if(this._fade != null) this._fade.destroy();
		this._fade = null;
		this._onFadeComplete = null;
		this.set_visible(false);
		this.amplitude = 0;
		this.amplitudeLeft = 0;
		this.amplitudeRight = 0;
		this.autoDestroy = false;
		if(this._transform == null) this._transform = new flash.media.SoundTransform();
		this._transform.pan = 0;
	}
	,__class__: flixel.system.FlxSound
	,__properties__: $extend(flixel.FlxBasic.prototype.__properties__,{get_playing:"get_playing",set_volume:"set_volume",get_volume:"get_volume"})
});
flixel.system.FlxSplash = function(NextState) {
	this._curPart = 0;
	this._nextState = NextState;
	flixel.FlxState.call(this);
};
$hxClasses["flixel.system.FlxSplash"] = flixel.system.FlxSplash;
flixel.system.FlxSplash.__name__ = ["flixel","system","FlxSplash"];
flixel.system.FlxSplash.__super__ = flixel.FlxState;
flixel.system.FlxSplash.prototype = $extend(flixel.FlxState.prototype,{
	onComplete: function(Tween) {
		flixel.FlxG.cameras.set_bgColor(this._cachedBgColor);
		flixel.FlxG.fixedTimestep = this._cachedTimestep;
		flixel.FlxG.autoPause = this._cachedAutoPause;
		flixel.FlxG.keyboard.enabled = true;
		flixel.FlxG.game.get_stage().removeChild(this._sprite);
		flixel.FlxG.game.get_stage().removeChild(this._text);
		flixel.FlxG.game.requestedState = Type.createInstance(this._nextState,[]);
	}
	,drawLightBlue: function() {
		this._gfx.beginFill(314875);
		this._gfx.moveTo(100,100);
		this._gfx.lineTo(75,100);
		this._gfx.lineTo(51,87);
		this._gfx.lineTo(87,51);
		this._gfx.lineTo(100,75);
		this._gfx.lineTo(100,100);
		this._gfx.endFill();
	}
	,drawBlue: function() {
		this._gfx.beginFill(3555839);
		this._gfx.moveTo(0,100);
		this._gfx.lineTo(25,100);
		this._gfx.lineTo(50,87);
		this._gfx.lineTo(13,51);
		this._gfx.lineTo(0,75);
		this._gfx.lineTo(0,100);
		this._gfx.endFill();
	}
	,drawRed: function() {
		this._gfx.beginFill(16066382);
		this._gfx.moveTo(100,0);
		this._gfx.lineTo(75,0);
		this._gfx.lineTo(51,13);
		this._gfx.lineTo(87,50);
		this._gfx.lineTo(100,25);
		this._gfx.lineTo(100,0);
		this._gfx.endFill();
	}
	,drawYellow: function() {
		this._gfx.beginFill(16761138);
		this._gfx.moveTo(0,0);
		this._gfx.lineTo(25,0);
		this._gfx.lineTo(50,13);
		this._gfx.lineTo(13,50);
		this._gfx.lineTo(0,25);
		this._gfx.lineTo(0,0);
		this._gfx.endFill();
	}
	,drawGreen: function() {
		this._gfx.beginFill(47394);
		this._gfx.moveTo(50,13);
		this._gfx.lineTo(51,13);
		this._gfx.lineTo(87,50);
		this._gfx.lineTo(87,51);
		this._gfx.lineTo(51,87);
		this._gfx.lineTo(50,87);
		this._gfx.lineTo(13,51);
		this._gfx.lineTo(13,50);
		this._gfx.lineTo(50,13);
		this._gfx.endFill();
	}
	,timerCallback: function(Timer) {
		this._functions[this._curPart]();
		this._text.set_textColor(this._colors[this._curPart]);
		this._text.set_text("HaxeFlixel");
		this._curPart++;
		if(this._curPart == 5) {
			flixel.tweens.FlxTween.multiVar(this._sprite,{ alpha : 0},2.3,{ ease : flixel.tweens.FlxEase.quadOut, complete : $bind(this,this.onComplete)});
			flixel.tweens.FlxTween.multiVar(this._text,{ alpha : 0},2.3,{ ease : flixel.tweens.FlxEase.quadOut});
		}
	}
	,create: function() {
		this._cachedBgColor = flixel.FlxG.camera == null?-16777216:flixel.FlxG.camera.bgColor;
		flixel.FlxG.cameras.set_bgColor(-16777216);
		this._cachedTimestep = flixel.FlxG.fixedTimestep;
		flixel.FlxG.fixedTimestep = false;
		this._cachedAutoPause = flixel.FlxG.autoPause;
		flixel.FlxG.autoPause = false;
		flixel.FlxG.keyboard.enabled = false;
		this._times = [0.041,0.184,0.334,0.495,0.636];
		this._colors = [47394,16761138,16066382,3555839,314875];
		this._functions = [$bind(this,this.drawGreen),$bind(this,this.drawYellow),$bind(this,this.drawRed),$bind(this,this.drawBlue),$bind(this,this.drawLightBlue)];
		var _g = 0, _g1 = this._times;
		while(_g < _g1.length) {
			var time = _g1[_g];
			++_g;
			flixel.util.FlxTimer.start(time,$bind(this,this.timerCallback));
		}
		this._sprite = new flash.display.Sprite();
		this._sprite.set_x(flixel.FlxG.width * flixel.FlxCamera.defaultZoom / 2 - 50);
		this._sprite.set_y(flixel.FlxG.height * flixel.FlxCamera.defaultZoom / 2 - 70);
		flixel.FlxG.game.get_stage().addChild(this._sprite);
		this._gfx = this._sprite.get_graphics();
		this._text = new flash.text.TextField();
		this._text.selectable = false;
		this._text.embedFonts = true;
		this._text.set_width(flixel.FlxG.width * flixel.FlxCamera.defaultZoom);
		var dtf = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,16,16777215);
		dtf.align = flash.text.TextFormatAlign.CENTER;
		this._text.set_defaultTextFormat(dtf);
		this._text.set_text("HaxeFlixel");
		this._text.set_y(this._sprite.get_y() + 130);
		flixel.FlxG.game.get_stage().addChild(this._text);
		null;
	}
	,__class__: flixel.system.FlxSplash
});
flixel.system.debug = {}
flixel.system.debug.Window = function(Title,IconPath,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	flash.display.Sprite.call(this);
	this._width = Math.abs(Width) | 0;
	this._height = Math.abs(Height) | 0;
	this.updateBounds(Bounds);
	this._drag = new flash.geom.Point();
	this._resizable = Resizable;
	this._shadow = new flash.display.Bitmap(new flash.display.BitmapData(1,2,true,-16777216));
	this.addChild(this._shadow);
	this._background = new flash.display.Bitmap(new flash.display.BitmapData(1,1,true,-580952225));
	this._background.set_y(15);
	this.addChild(this._background);
	this._header = new flash.display.Bitmap(new flash.display.BitmapData(1,15,true,-1442840576));
	this.addChild(this._header);
	this._title = new flash.text.TextField();
	this._title.set_x(2);
	this._title.set_y(-1);
	this._title.alpha = 0.8;
	this._title.set_height(20);
	this._title.selectable = false;
	this._title.multiline = false;
	this._title.embedFonts = true;
	this._title.set_defaultTextFormat(new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,12,16777215));
	this._title.set_text(Title);
	this.addChild(this._title);
	if(IconPath != null) {
		var _icon = new flash.display.Bitmap(openfl.Assets.getBitmapData(IconPath));
		_icon.set_x(5);
		_icon.set_y(2);
		_icon.alpha = 0.8;
		this._title.set_x(_icon.get_x() + _icon.get_width() + 2);
		this.addChild(_icon);
	}
	if(this._resizable) {
		this._handle = new flash.display.Bitmap(openfl.Assets.getBitmapData("flixel/img/debugger/windowHandle.png",false));
		this.addChild(this._handle);
	}
	if(this._width != 0 || this._height != 0) this.updateSize();
	this.bound();
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
	this._id = flixel.system.debug.Window.WINDOW_AMOUNT++;
	if(flixel.FlxG.save.data.windowSettings != null) this.set_visible(flixel.FlxG.save.data.windowSettings[this._id]); else flixel.FlxG.save.data.windowSettings = new Array();
};
$hxClasses["flixel.system.debug.Window"] = flixel.system.debug.Window;
flixel.system.debug.Window.__name__ = ["flixel","system","debug","Window"];
flixel.system.debug.Window.__super__ = flash.display.Sprite;
flixel.system.debug.Window.prototype = $extend(flash.display.Sprite.prototype,{
	toggleVisibility: function() {
		this.set_visible(!this.get_visible());
		flixel.FlxG.save.data.windowSettings[this._id] = this.get_visible();
	}
	,updateBounds: function(Bounds) {
		this._bounds = Bounds;
		this.minSize = new flash.geom.Point(50,30);
		if(this._bounds != null) this.maxSize = new flash.geom.Point(this._bounds.width,this._bounds.height); else this.maxSize = new flash.geom.Point(1.79e+308,1.79e+308);
	}
	,updateSize: function() {
		this._width = flixel.util.FlxMath.bound(this._width,this.minSize.x,this.maxSize.x) | 0;
		this._height = flixel.util.FlxMath.bound(this._height,this.minSize.y,this.maxSize.y) | 0;
		this._header.set_scaleX(this._width);
		this._background.set_scaleX(this._width);
		this._background.set_scaleY(this._height - 15);
		this._shadow.set_scaleX(this._width);
		this._shadow.set_y(this._height);
		this._title.set_width(this._width - 4);
		if(this._resizable) {
			this._handle.set_x(this._width - this._handle.get_width());
			this._handle.set_y(this._height - this._handle.get_height());
		}
	}
	,bound: function() {
		if(this._bounds != null) {
			this.set_x(flixel.util.FlxMath.bound(this.get_x(),this._bounds.get_left(),this._bounds.get_right() - this._width));
			this.set_y(flixel.util.FlxMath.bound(this.get_y(),this._bounds.get_top(),this._bounds.get_bottom() - this._height));
		}
	}
	,onMouseUp: function(E) {
		this._dragging = false;
		this._resizing = false;
	}
	,onMouseDown: function(E) {
		if(this._overHeader) {
			this.parent.addChild(this);
			this._dragging = true;
			this._drag.x = this.get_mouseX();
			this._drag.y = this.get_mouseY();
		} else if(this._overHandle) {
			this._resizing = true;
			this._drag.x = this._width - this.get_mouseX();
			this._drag.y = this._height - this.get_mouseY();
		}
	}
	,onMouseMove: function(E) {
		if(!this.parent.get_visible()) {
			this._overHandle = this._overHeader = false;
			return;
		}
		if(this._dragging) {
			this._overHeader = true;
			this.reposition(this.parent.get_mouseX() - this._drag.x,this.parent.get_mouseY() - this._drag.y);
		} else if(this._resizing) {
			this._overHandle = true;
			this.resize(this.get_mouseX() - this._drag.x,this.get_mouseY() - this._drag.y);
		} else if(this.get_mouseX() >= 0 && this.get_mouseX() <= this._width && this.get_mouseY() >= 0 && this.get_mouseY() <= this._height) {
			this._overHeader = this.get_mouseX() <= this._header.get_width() && this.get_mouseY() <= this._header.get_height();
			if(this._resizable) this._overHandle = this.get_mouseX() >= this._width - this._handle.get_width() && this.get_mouseY() >= this._height - this._handle.get_height();
		} else this._overHandle = this._overHeader = false;
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,reposition: function(X,Y) {
		this.set_x(X);
		this.set_y(Y);
		this.bound();
	}
	,resize: function(Width,Height) {
		this._width = Math.abs(Width) | 0;
		this._height = Math.abs(Height) | 0;
		this.updateSize();
	}
	,destroy: function() {
		this.minSize = null;
		this.maxSize = null;
		this._bounds = null;
		if(this._shadow != null) this.removeChild(this._shadow);
		this._shadow = null;
		if(this._background != null) this.removeChild(this._background);
		this._background = null;
		if(this._header != null) this.removeChild(this._header);
		this._header = null;
		if(this._title != null) this.removeChild(this._title);
		this._title = null;
		if(this._handle != null) this.removeChild(this._handle);
		this._handle = null;
		this._drag = null;
	}
	,__class__: flixel.system.debug.Window
});
flixel.system.debug.BmpLog = function(Title,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	flixel.system.debug.Window.call(this,Title,null,Width,Height,Resizable,Bounds);
	this._bmps = new Array();
};
$hxClasses["flixel.system.debug.BmpLog"] = flixel.system.debug.BmpLog;
flixel.system.debug.BmpLog.__name__ = ["flixel","system","debug","BmpLog"];
flixel.system.debug.BmpLog.__super__ = flixel.system.debug.Window;
flixel.system.debug.BmpLog.prototype = $extend(flixel.system.debug.Window.prototype,{
	updateSize: function() {
		flixel.system.debug.Window.prototype.updateSize.call(this);
	}
	,clear: function() {
		if(this._bmps != null) while(this._bmps.length > 0) {
			var bmp = this._bmps.pop();
			this.removeChild(bmp);
			if(bmp != null) {
				if(bmp.bitmapData != null) {
					bmp.bitmapData.dispose();
					bmp.set_bitmapData(null);
				}
				bmp = null;
			}
		}
	}
	,add: function(Data,FireOnce) {
		if(FireOnce == null) FireOnce = false;
		if(Data == null) return false;
		if(FireOnce) {
			var _g = 0, _g1 = this._bmps;
			while(_g < _g1.length) {
				var bmp = _g1[_g];
				++_g;
				if(bmp.bitmapData != null) {
					if(flixel.util.FlxBitmapUtil.compare(Data,bmp.bitmapData) == 0) return false;
				}
			}
		}
		var bmp = new flash.display.Bitmap(Data.clone());
		bmp.set_x(2);
		if(this._bmps.length > 0) {
			var last = this._bmps[this._bmps.length - 1];
			bmp.set_y(last.get_y() + last.get_height() + 2);
		} else bmp.set_y(15);
		this._bmps.push(bmp);
		this.addChild(bmp);
		return true;
	}
	,destroy: function() {
		this.clear();
		this._bmps = null;
		flixel.system.debug.Window.prototype.destroy.call(this);
	}
	,__class__: flixel.system.debug.BmpLog
});
flixel.system.debug.Console = function(Title,IconPath,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	this.defaultText = "(Click here / press [Tab] to enter command. Type 'help' for help.)";
	this.historyMax = 25;
	this.historyIndex = 0;
	flixel.system.debug.Window.call(this,Title,IconPath,Width,Height,Resizable,Bounds);
	this.cmdFunctions = new haxe.ds.StringMap();
	this.cmdObjects = new haxe.ds.StringMap();
	this.registeredObjects = new haxe.ds.StringMap();
	this.registeredFunctions = new haxe.ds.StringMap();
	this.objectStack = new Array();
	this.cmdHistory = new Array();
	if(flixel.FlxG.save.data.history != null) {
		this.cmdHistory = flixel.FlxG.save.data.history;
		this.historyIndex = this.cmdHistory.length;
	} else {
		this.cmdHistory = new Array();
		flixel.FlxG.save.data.history = this.cmdHistory;
	}
	this._input = new flash.text.TextField();
	this._input.set_type(flash.text.TextFieldType.INPUT);
	this._input.embedFonts = true;
	this._input.set_defaultTextFormat(new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,13,16777215,false,false,false));
	this._input.set_text(this.defaultText);
	this._input.set_width(this._width - 4);
	this._input.set_height(this._height - 15);
	this._input.set_x(2);
	this._input.set_y(15);
	this.addChild(this._input);
	this._input.addEventListener(flash.events.FocusEvent.FOCUS_IN,$bind(this,this.onFocus));
	this._input.addEventListener(flash.events.FocusEvent.FOCUS_OUT,$bind(this,this.onFocusLost));
	this._input.addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyPress));
	var commands = new flixel.system.debug.ConsoleCommands(this);
};
$hxClasses["flixel.system.debug.Console"] = flixel.system.debug.Console;
flixel.system.debug.Console.__name__ = ["flixel","system","debug","Console"];
flixel.system.debug.Console.__super__ = flixel.system.debug.Window;
flixel.system.debug.Console.prototype = $extend(flixel.system.debug.Window.prototype,{
	updateSize: function() {
		flixel.system.debug.Window.prototype.updateSize.call(this);
		this._input.set_width(this._width - 4);
		this._input.set_height(this._height - 15);
	}
	,destroy: function() {
		flixel.system.debug.Window.prototype.destroy.call(this);
		this._input.removeEventListener(flash.events.FocusEvent.FOCUS_IN,$bind(this,this.onFocus));
		this._input.removeEventListener(flash.events.FocusEvent.FOCUS_OUT,$bind(this,this.onFocusLost));
		this._input.removeEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyPress));
		if(this._input != null) this.removeChild(this._input);
		this._input = null;
		this.cmdFunctions = null;
		this.cmdObjects = null;
		this.registeredObjects = null;
		this.registeredFunctions = null;
		this.objectStack = null;
	}
	,registerFunction: function(FunctionAlias,Function) {
		var value = Function;
		this.registeredFunctions.set(FunctionAlias,value);
	}
	,registerObject: function(ObjectAlias,AnyObject) {
		var value = AnyObject;
		this.registeredObjects.set(ObjectAlias,value);
	}
	,addCommand: function(Command,AnyObject,Function,Alt) {
		if(Alt == null) Alt = "";
		var value = Function;
		this.cmdFunctions.set(Command,value);
		var value = AnyObject;
		this.cmdObjects.set(Command,value);
		if(Alt != "") {
			var value = Function;
			this.cmdFunctions.set(Alt,value);
			var value = AnyObject;
			this.cmdObjects.set(Alt,value);
		}
	}
	,getNextCommand: function() {
		if(this.historyIndex < this.cmdHistory.length) this.historyIndex++;
		if(this.cmdHistory[this.historyIndex] != null) return this.cmdHistory[this.historyIndex]; else return "";
	}
	,getPreviousCommand: function() {
		if(this.historyIndex > 0) this.historyIndex--;
		return this.cmdHistory[this.historyIndex];
	}
	,filterDigits: function(str) {
		var out = new StringBuf();
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = HxOverrides.cca(str,i);
			if(c >= 48 && c <= 57) out.b += String.fromCharCode(c);
		}
		return out.b;
	}
	,overrideDefaultSelection: function(e) {
		this._input.setSelection(this._input.get_text().length,this._input.get_text().length);
		this.removeEventListener(flash.events.Event.RENDER,$bind(this,this.overrideDefaultSelection));
	}
	,callFunction: function(obj,func,args,cmd) {
		try {
			func.apply(obj,args);
			return true;
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.ArgumentError) ) {
				if(e.errorID == 1063) {
					var expected = Std.parseInt(this.filterDigits(e.message).charAt(4));
					if(expected < args.length) {
						var shortenedArgs = args.slice(0,expected);
						func.apply(obj,shortenedArgs);
					} else {
						flixel.FlxG.log.error("Console: Invalid number or parameters: " + expected + " expected, " + args.length + " passed");
						return false;
					}
					return true;
				}
				return false;
			} else throw(e);
		}
	}
	,processCommand: function() {
		var args = StringTools.rtrim(this._input.get_text()).split(" ");
		var command = args.shift();
		var obj = this.cmdObjects.get(command);
		var func = this.cmdFunctions.get(command);
		if(func != null) {
			if(this.getPreviousCommand() != this._input.get_text()) {
				this.cmdHistory.push(this._input.get_text());
				flixel.FlxG.save.flush();
				if(this.cmdHistory.length > this.historyMax) this.cmdHistory.shift();
			}
			this.historyIndex = this.cmdHistory.length;
			if(Reflect.isFunction(func)) {
				if(command == "log") args = [args.join(" ")]; else if(command == "call") args[1] = args.slice(1,args.length); else if(command == "create" || command == "cr") args[2] = args.slice(2,args.length);
				this.callFunction(obj,func,args,command);
			}
			this._input.set_text("");
		} else flixel.FlxG.log.error("Console: Invalid command: '" + command + "'");
	}
	,onKeyPress: function(e) {
		if(e.keyCode == 32 && this._input.get_text() == " ") this._input.set_text("");
		if(e.keyCode == 13 && this._input.get_text() != "") this.processCommand(); else if(e.keyCode == 27) flixel.FlxG.game.get_stage().set_focus(null); else if(e.keyCode == 46) this._input.set_text(""); else if(e.keyCode == 38) {
			if(this.cmdHistory.length == 0) return;
			this._input.set_text(this.getPreviousCommand());
			this.addEventListener(flash.events.Event.RENDER,$bind(this,this.overrideDefaultSelection),false,0,true);
			flixel.FlxG.game.get_stage().invalidate();
		} else if(e.keyCode == 40) {
			if(this.cmdHistory.length == 0) return;
			this._input.set_text(this.getNextCommand());
		}
	}
	,onFocusLost: function(e) {
		flixel.FlxG.keyboard.enabled = true;
		if(this._input.get_text() == "") this._input.set_text(this.defaultText);
	}
	,onFocus: function(e) {
		flixel.FlxG.keyboard.enabled = false;
		if(this._input.get_text() == this.defaultText) this._input.set_text("");
	}
	,__class__: flixel.system.debug.Console
});
flixel.system.debug.ConsoleCommands = function(console) {
	this.watchingMouse = false;
	this._console = console;
	console.addCommand("help",this,$bind(this,this.help),"h");
	console.addCommand("log",flixel.FlxG,flixel.FlxG.log.add);
	console.addCommand("clearLog",flixel.FlxG,($_=flixel.FlxG.log,$bind($_,$_.clear)),"clear");
	console.addCommand("clearHistory",this,$bind(this,this.clearHistory),"ch");
	console.addCommand("resetState",this,$bind(this,this.resetState),"rs");
	console.addCommand("switchState",this,$bind(this,this.switchState),"ss");
	console.addCommand("resetGame",this,$bind(this,this.resetGame),"rg");
	console.addCommand("watchMouse",this,$bind(this,this.watchMouse),"wm");
	console.addCommand("visualDebug",this,$bind(this,this.visualDebug),"vd");
	console.addCommand("pause",this,$bind(this,this.pause),"p");
	console.addCommand("play",flixel.FlxG,($_=flixel.FlxG.sound,$bind($_,$_.play)));
	console.addCommand("playMusic",flixel.FlxG,($_=flixel.FlxG.sound,$bind($_,$_.playMusic)),"pm");
	console.addCommand("bgColor",this,$bind(this,this.bgColor),"bg");
	console.addCommand("shake",this,$bind(this,this.shake),"sh");
	console.addCommand("close",this,$bind(this,this.close),"cl");
	console.addCommand("create",this,$bind(this,this.create),"cr");
	console.addCommand("set",this,$bind(this,this.set));
	console.addCommand("call",this,$bind(this,this.call));
	console.addCommand("listObjects",this,$bind(this,this.listObjects),"lo");
	console.addCommand("listFunctions",this,$bind(this,this.listFunctions),"lf");
	console.addCommand("watch",this,$bind(this,this.watch),"w");
	console.addCommand("unwatch",this,$bind(this,this.unwatch),"uw");
	console.registerObject("FlxG",flixel.FlxG);
};
$hxClasses["flixel.system.debug.ConsoleCommands"] = flixel.system.debug.ConsoleCommands;
flixel.system.debug.ConsoleCommands.__name__ = ["flixel","system","debug","ConsoleCommands"];
flixel.system.debug.ConsoleCommands.prototype = {
	cLog: function(Text) {
		flixel.FlxG.log.advanced([Text],flixel.system.debug.LogStyle.CONSOLE);
	}
	,resolveObjectAndVariable: function(ObjectAndVariable,CommandName) {
		var searchArr = ObjectAndVariable.split(".");
		if(searchArr[0].length == ObjectAndVariable.length) {
			flixel.FlxG.log.error(CommandName + ": '" + ObjectAndVariable + "' does not refer to an object's field");
			return null;
		}
		var object = this._console.registeredObjects.get(searchArr.shift());
		var variableName = searchArr.join(".");
		if(!Reflect.isObject(object)) {
			flixel.FlxG.log.error(CommandName + ": '" + Std.string(object) + "' is not a valid Object");
			return null;
		}
		var l = searchArr.length;
		var tempObj = object;
		var tempVarName = "";
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			tempVarName = searchArr[i];
			try {
				if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
			} catch( e ) {
				flixel.FlxG.log.error(CommandName + ": " + Std.string(tempObj) + " does not have a field '" + tempVarName + "'");
				return null;
			}
		}
		return [tempObj,tempVarName];
	}
	,attemptToCreateInstance: function(ClassName,_Type,CommandName,Params) {
		if(Params == null) Params = [];
		var obj = Type.resolveClass(ClassName);
		if(!Reflect.isObject(obj)) {
			flixel.FlxG.log.error(CommandName + ": '" + ClassName + "' is not a valid class name. Try passing the full class path. Also make sure the class is being compiled.");
			return null;
		}
		var instance = Type.createInstance(obj,Params);
		if(!js.Boot.__instanceof(instance,_Type)) {
			flixel.FlxG.log.error(CommandName + ": '" + ClassName + "' is not a " + Type.getClassName(_Type));
			return null;
		}
		return instance;
	}
	,unwatch: function(ObjectAndVariable,VariableName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"watch");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		flixel.FlxG.game["debugger"].watch.remove(object,varName);
	}
	,watch: function(ObjectAndVariable,DisplayName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"watch");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		flixel.FlxG.game["debugger"].watch.add(object,varName,null);
	}
	,listFunctions: function() {
		this.cLog("Functions registered: \n" + flixel.util.FlxStringUtil.formatStringMap(this._console.registeredFunctions));
	}
	,listObjects: function() {
		this.cLog("Objects registered: \n" + flixel.util.FlxStringUtil.formatStringMap(this._console.registeredObjects));
	}
	,call: function(FunctionAlias,Params) {
		if(Params == null) Params = [];
		var func = this._console.registeredFunctions.get(FunctionAlias);
		if(!Reflect.isFunction(func)) {
			var searchArr = FunctionAlias.split(".");
			var objectName = searchArr.shift();
			var object = this._console.registeredObjects.get(objectName);
			if(!Reflect.isObject(object)) {
				flixel.FlxG.log.error("call: '" + Std.string(object) + "' is not a valid Object to call function from");
				return;
			}
			var tempObj = object;
			var tempVarName = "";
			var funcName = "";
			var l = searchArr.length - 1;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				tempVarName = searchArr[i];
				try {
					var prop = Reflect.getProperty(tempObj,tempVarName);
				} catch( e ) {
					flixel.FlxG.log.error("call: " + Std.string(tempObj) + " does not have a field '" + tempVarName + "' to call function from");
					return;
				}
				tempObj = Reflect.getProperty(tempObj,tempVarName);
			}
			func = Reflect.field(tempObj,searchArr[l]);
			if(func == null) {
				flixel.FlxG.log.error("call: " + Std.string(tempObj) + " does not have a method '" + searchArr[l] + "' to call");
				return;
			}
		}
		if(Reflect.isFunction(func)) {
			var success = this._console.callFunction(null,func,Params);
			if(Params.length == 0 && success) this.cLog("call: Called '" + FunctionAlias + "'"); else if(success) this.cLog("call: Called '" + FunctionAlias + "' with params " + Std.string(Params));
		} else flixel.FlxG.log.error("call: '" + FunctionAlias + "' is not a valid function");
	}
	,set: function(ObjectAndVariable,NewVariableValue,WatchName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"set");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		var variable = null;
		try {
			variable = Reflect.getProperty(object,varName);
		} catch( e ) {
			return;
		}
		if(js.Boot.__instanceof(variable,Bool)) {
			if(NewVariableValue == "false" || NewVariableValue == "0") NewVariableValue = false; else if(NewVariableValue == "true" || NewVariableValue == "1") NewVariableValue = true; else {
				flixel.FlxG.log.error("set: '" + Std.string(NewVariableValue) + "' is not a valid value for Booelan '" + varName + "'");
				return;
			}
		} else if(js.Boot.__instanceof(variable,Float) && Math.isNaN(Std.parseFloat(NewVariableValue))) {
			flixel.FlxG.log.error("set: '" + Std.string(NewVariableValue) + "' is not a valid value for number '" + varName + "'");
			return;
		} else if(!js.Boot.__instanceof(variable,Float) && !js.Boot.__instanceof(variable,Bool) && !js.Boot.__instanceof(variable,String)) {
			flixel.FlxG.log.error("set: '" + varName + ":" + Std.string(variable) + "' is not of a simple type (number, bool or string)");
			return;
		}
		Reflect.setProperty(object,varName,NewVariableValue);
		this.cLog("set: " + Std.string(object) + "." + varName + " is now " + Std.string(NewVariableValue));
		if(WatchName != null) flixel.FlxG.game["debugger"].watch.add(object,varName,WatchName);
	}
	,create: function(ClassName,MousePos,Params) {
		if(MousePos == null) MousePos = true;
		if(Params == null) Params = [];
		var instance = this.attemptToCreateInstance(ClassName,flixel.FlxObject,"create",Params);
		if(instance == null) return;
		var obj = instance;
		if(MousePos) {
			obj.set_x(flixel.FlxG.game.get_mouseX());
			obj.set_y(flixel.FlxG.game.get_mouseY());
		}
		flixel.FlxG.game.state.add(instance);
		if(Params.length == 0) this.cLog("create: New " + ClassName + " created at X = " + obj.x + " Y = " + obj.y); else this.cLog("create: New " + ClassName + " created at X = " + obj.x + " Y = " + obj.y + " with params " + Std.string(Params));
		this._console.objectStack.push(instance);
		this._console.registerObject(Std.string(this._console.objectStack.length),instance);
		this.cLog("create: " + ClassName + " registered as object '" + this._console.objectStack.length);
	}
	,close: function() {
		flixel.FlxG.game["debugger"].set_visible(false);
		flixel.FlxG["debugger"].visible = false;
	}
	,shake: function(Intensity,Duration) {
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(Math.isNaN(Intensity)) {
			this.cLog("shake: Intensity is not a number");
			return;
		}
		if(Math.isNaN(Duration)) {
			this.cLog("shake: Duration is not a number");
			return;
		}
		flixel.FlxG.cameras.shake(Intensity,Duration);
		this.cLog("shake: Shake started, Intensity: " + Intensity + " Duration: " + Duration);
	}
	,bgColor: function(Color) {
		var colorString = Std.string(Color);
		var color = Std.parseInt(Color);
		if(colorString != null) switch(colorString) {
		case "red":
			color = -65536;
			break;
		case "green":
			color = -16744448;
			break;
		case "blue":
			color = -16776961;
			break;
		case "pink":
			color = -16181;
			break;
		case "white":
			color = -1;
			break;
		case "black":
			color = -16777216;
			break;
		}
		if(!Math.isNaN(color)) {
			flixel.FlxG.cameras.set_bgColor(color);
			this.cLog("bgColor: Changed background color to '" + Std.string(Color) + "'");
		} else this.cLog("bgColor: Invalid color '" + Std.string(Color) + "'");
	}
	,pause: function() {
		if(flixel.FlxG.vcr.paused) {
			flixel.FlxG.vcr.resume();
			this.cLog("pause: Game unpaused");
		} else {
			flixel.FlxG.vcr.pause();
			this.cLog("pause: Game paused");
		}
	}
	,visualDebug: function() {
		flixel.FlxG["debugger"].visualDebug = !flixel.FlxG["debugger"].visualDebug;
		if(flixel.FlxG["debugger"].visualDebug) this.cLog("visualDebug: Enabled"); else this.cLog("visualDebug: Disabled");
	}
	,watchMouse: function() {
		if(!this.watchingMouse) {
			flixel.FlxG.game["debugger"].watch.add(flixel.FlxG,"mouse","Mouse Position");
			this.cLog("watchMouse: Mouse position added to watch window");
		} else {
			flixel.FlxG.game["debugger"].watch.remove(flixel.FlxG,"mouse");
			this.cLog("watchMouse: Mouse position removed from watch window");
		}
		this.watchingMouse = !this.watchingMouse;
	}
	,resetGame: function() {
		flixel.FlxG.game.requestedReset = true;
		this.cLog("resetGame: Game has been reset");
	}
	,switchState: function(ClassName) {
		var instance = this.attemptToCreateInstance(ClassName,flixel.FlxState,"switchState");
		if(instance == null) return;
		flixel.FlxG.switchState(instance);
		this.cLog("switchState: New '" + ClassName + "' created");
	}
	,resetState: function() {
		flixel.FlxG.resetState();
		this.cLog("resetState: State has been reset");
	}
	,clearHistory: function() {
		this._console.cmdHistory = new Array();
		flixel.FlxG.save.flush();
		this.cLog("clearHistory: Command history cleared");
	}
	,help: function(Command) {
		if(Command == null) Command = "";
		if(Command == "") {
			this.cLog("System commands: \nlog, clearLog, clearHistory, help, resetState, switchState, resetGame, watchMouse, visualDebug, pause, play, playMusic, bgColor, shake, create, set, call, close, listObjects, listFunctions, watch, unwatch");
			this.cLog("help (Command) for more information about a specific command");
		} else {
			this.cLog("help: " + Command);
			switch(Command) {
			case "log":
				this.cLog("log: Calls FlxG.log.add() with the text you enter");
				this.cLog("log [Text]");
				break;
			case "clearLog":case "clear":
				this.cLog("clearLog: {clear} Clears the log window");
				break;
			case "clearHistory":case "ch":
				this.cLog("clearHistory: {ch} Clears the command history");
				break;
			case "help":case "h":
				this.cLog("help: {h} Lists all system commands or provides more info on a specified command");
				this.cLog("help (Command)");
				break;
			case "resetState":case "rs":
				this.cLog("resetState: {rs} Calls FlxG.resetState()");
				break;
			case "resetGame":case "rg":
				this.cLog("resetGame: {rg} Calls FlxG.resetGame()");
				break;
			case "switchState":case "ss":
				this.cLog("switchState: {ss} Calls FlxG.switchState() with specified FlxState");
				this.cLog("switchState [FlxState]");
				break;
			case "watchMouse":case "wm":
				this.cLog("watchMouse: {wm} Adds the x and y pos of the mosue to the watch window. Super useful for GUI-Building stuff.");
				break;
			case "visualDebug":case "vd":
				this.cLog("visualDebug: {vd} Toggles visual debugging");
				break;
			case "pause":case "p":
				this.cLog("pause: {p} Pauses / unpauses the game");
				break;
			case "play":
				this.cLog("play: Plays a sound");
				this.cLog("play [Sound] (Volume = 1)");
				break;
			case "playMusic":case "pm":
				this.cLog("playMusic: {pm} Sets up and plays a looping background soundtrack.");
				this.cLog("playMusic [Music] (Volume = 1)");
				break;
			case "bgColor":case "bg":
				this.cLog("bgColor: {bg} Changes the background color to a specified color. You can also pass the colors 'red, green, blue, pink, white,  and black'");
				this.cLog("bgColor [Color]");
				break;
			case "shake":case "sh":
				this.cLog("shake: {sh} Calls FlxG.shake()");
				this.cLog("shake (Intensity = 0.05) (Duration = 0.5)");
				break;
			case "close":case "cl":
				this.cLog("close: {cl} Close the debugger overlay");
				break;
			case "create":case "cr":
				this.cLog("create: {cr} Creates a new FlxObject and registers it - by default at the mouse position.");
				this.cLog("create [FlxObject] (MousePos = true) (param0...paramX)");
				break;
			case "set":
				this.cLog("set: Changes a var within a previosuly registered object via FlxG.console.registerObject(). Supports nesting (a field within an object within a registered object). Set a WatchName if you want to add the var to the watch window.");
				this.cLog("set [Object.VariableName] [NewValue] (WatchName)");
				break;
			case "call":
				this.cLog("call: Calls a function previously registered via FlxG.console.registerFunction() with a set of params (or a function of a registered object");
				this.cLog("call [(Object.)Function] [param0...paramX]");
				break;
			case "listObjects":case "lo":
				this.cLog("listObjects: {lo} Lists all the aliases of the objects registered");
				break;
			case "listFunctions":case "lf":
				this.cLog("listFunctions: {lf} Lists all the aliases of the functions registered");
				break;
			case "watch":case "w":
				this.cLog("watch: {w} Calls FlxG.watch()");
				this.cLog("watch [Object.VariableName] (DisplayName)");
				break;
			case "unwatch":case "uw":
				this.cLog("unwatch: {uw} Calls FlxG.unwatch()");
				this.cLog("unwatch [Object(.VariableName)]");
				break;
			default:
				this.cLog("help: Couldn't find command '" + Command + "'");
			}
			this.cLog("{shortcut} [required param] (optional param)");
		}
	}
	,__class__: flixel.system.debug.ConsoleCommands
}
flixel.system.debug.FlxDebugger = function(Width,Height) {
	this.hasMouse = false;
	flash.display.Sprite.call(this);
	this.set_visible(false);
	this._layout = flixel.system.debug.DebuggerLayout.STANDARD;
	this._screen = new flash.geom.Point();
	this._topBar = new flash.display.Sprite();
	this._topBar.get_graphics().beginFill(0,170 / 255);
	this._topBar.get_graphics().drawRect(0,0,flixel.FlxG.game.get_stage().get_stageWidth(),20);
	this._topBar.get_graphics().endFill();
	this.addChild(this._topBar);
	var txt = new flash.text.TextField();
	txt.set_height(20);
	txt.selectable = false;
	txt.set_y(-9);
	txt.multiline = false;
	txt.embedFonts = true;
	var format = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,12,-1);
	txt.set_defaultTextFormat(format);
	txt.set_autoSize("LEFT");
	txt.set_text(flixel.FlxG.LIBRARY_NAME + " v" + flixel.FlxG.LIBRARY_MAJOR_VERSION + "." + flixel.FlxG.LIBRARY_MINOR_VERSION);
	this._leftButtons = new Array();
	this._rightButtons = new Array();
	this._middleButtons = new Array();
	this.log = new flixel.system.debug.Log("log","flixel/img/debugger/buttons/logDebug.png",0,0,true);
	this.addChild(this.log);
	this.watch = new flixel.system.debug.Watch("watch","flixel/img/debugger/buttons/watchDebug.png",0,0,true);
	this.addChild(this.watch);
	this.console = new flixel.system.debug.Console("console","flixel/img/debugger/buttons/console.png",0,0,false);
	this.addChild(this.console);
	this.stats = new flixel.system.debug.Stats("stats","flixel/img/debugger/buttons/statsDebug.png",0,0,false);
	this.addChild(this.stats);
	this.vcr = new flixel.system.debug.VCR(this);
	this.addButton(flixel.system.debug.ButtonAlignment.LEFT,"flixel/img/debugger/flixel.png",$bind(this,this.openHomepage));
	this.addButton(flixel.system.debug.ButtonAlignment.LEFT,null,$bind(this,this.openHomepage)).addChild(txt);
	this.addButton(flixel.system.debug.ButtonAlignment.RIGHT,"flixel/img/debugger/buttons/logDebug.png",($_=this.log,$bind($_,$_.toggleVisibility)),true).set_toggled(!this.log.get_visible());
	this.addButton(flixel.system.debug.ButtonAlignment.RIGHT,"flixel/img/debugger/buttons/watchDebug.png",($_=this.watch,$bind($_,$_.toggleVisibility)),true).set_toggled(!this.watch.get_visible());
	this.addButton(flixel.system.debug.ButtonAlignment.RIGHT,"flixel/img/debugger/buttons/console.png",($_=this.console,$bind($_,$_.toggleVisibility)),true).set_toggled(!this.console.get_visible());
	this.addButton(flixel.system.debug.ButtonAlignment.RIGHT,"flixel/img/debugger/buttons/statsDebug.png",($_=this.stats,$bind($_,$_.toggleVisibility)),true).set_toggled(!this.stats.get_visible());
	this.addButton(flixel.system.debug.ButtonAlignment.RIGHT,"flixel/img/debugger/buttons/visualDebug.png",$bind(this,this.toggleVisualDebug),true).set_toggled(!flixel.FlxG["debugger"].visualDebug);
	this._screen.x = Width;
	this._screen.y = Height;
	this._screenBounds = new flash.geom.Rectangle(2,21.,this._screen.x - 4,this._screen.y - 4 - 20);
	this.stats.updateBounds(this._screenBounds);
	this.log.updateBounds(this._screenBounds);
	this.watch.updateBounds(this._screenBounds);
	this.console.updateBounds(this._screenBounds);
	if(this.bmpLog != null) this.bmpLog.updateBounds(this._screenBounds);
	this._topBar.set_width(flixel.FlxG.game.get_stage().get_stageWidth());
	this.resetButtonLayout();
	this.resetLayout();
	this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
};
$hxClasses["flixel.system.debug.FlxDebugger"] = flixel.system.debug.FlxDebugger;
flixel.system.debug.FlxDebugger.__name__ = ["flixel","system","debug","FlxDebugger"];
flixel.system.debug.FlxDebugger.__super__ = flash.display.Sprite;
flixel.system.debug.FlxDebugger.prototype = $extend(flash.display.Sprite.prototype,{
	openHomepage: function() {
		flash.Lib.getURL(new flash.net.URLRequest("http://www.haxeflixel.com"),"_blank");
	}
	,toggleVisualDebug: function() {
		flixel.FlxG["debugger"].visualDebug = !flixel.FlxG["debugger"].visualDebug;
	}
	,addButton: function(Position,IconPath,DownHandler,ToggleMode,UpdateLayout) {
		if(UpdateLayout == null) UpdateLayout = false;
		if(ToggleMode == null) ToggleMode = false;
		var button = new flixel.system.ui.FlxSystemButton(IconPath,DownHandler,ToggleMode);
		var array;
		switch( (Position)[1] ) {
		case 0:
			array = this._leftButtons;
			break;
		case 1:
			array = this._middleButtons;
			break;
		case 2:
			array = this._rightButtons;
			break;
		}
		button.set_y(10. - button.get_height() / 2);
		array.push(button);
		this.addChild(button);
		if(UpdateLayout) this.resetButtonLayout();
		return button;
	}
	,resetButtonLayout: function() {
		this.hAlignSprites(this._leftButtons,10,true,10);
		var offset = flixel.FlxG.game.get_stage().get_stageWidth() * .5 - this.hAlignSprites(this._middleButtons,10,false) * .5;
		this.hAlignSprites(this._middleButtons,10,true,offset);
		var offset1 = flixel.FlxG.game.get_stage().get_stageWidth() - this.hAlignSprites(this._rightButtons,10,false);
		this.hAlignSprites(this._rightButtons,10,true,offset1);
	}
	,hAlignSprites: function(Sprites,Padding,Set,LeftOffset) {
		if(LeftOffset == null) LeftOffset = 0;
		if(Set == null) Set = true;
		if(Padding == null) Padding = 0;
		var width = 0;
		var last = LeftOffset;
		var _g1 = 0, _g = Sprites.length;
		while(_g1 < _g) {
			var i = _g1++;
			var o = Sprites[i];
			width += o.get_width() + Padding;
			if(Set) o.set_x(last);
			last = o.get_x() + o.get_width() + Padding;
		}
		return width;
	}
	,onResize: function(Width,Height) {
		this._screen.x = Width;
		this._screen.y = Height;
		this._screenBounds = new flash.geom.Rectangle(2,21.,this._screen.x - 4,this._screen.y - 4 - 20);
		this.stats.updateBounds(this._screenBounds);
		this.log.updateBounds(this._screenBounds);
		this.watch.updateBounds(this._screenBounds);
		this.console.updateBounds(this._screenBounds);
		if(this.bmpLog != null) this.bmpLog.updateBounds(this._screenBounds);
		this._topBar.set_width(flixel.FlxG.game.get_stage().get_stageWidth());
		this.resetButtonLayout();
		this.resetLayout();
	}
	,resetLayout: function() {
		var _g = this;
		switch( (_g._layout)[1] ) {
		case 1:
			this.log.resize(this._screen.x / 4,68);
			this.log.reposition(0,this._screen.y);
			this.console.resize(this._screen.x / 2 - 8,35);
			this.console.reposition(this.log.get_x() + this.log.get_width() + 2,this._screen.y);
			this.watch.resize(this._screen.x / 4,68);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.stats.reposition(this._screen.x,0);
			break;
		case 2:
			this.console.resize(this._screen.x - 4,35);
			this.console.reposition(2,this._screen.y);
			this.log.resize((this._screen.x - 6) / 2,this._screen.y / 2);
			this.log.reposition(0,this._screen.y - this.log.get_height() - this.console.get_height() - 3.);
			this.watch.resize((this._screen.x - 6) / 2,this._screen.y / 2);
			this.watch.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.console.get_height() - 3.);
			this.stats.reposition(this._screen.x,0);
			break;
		case 3:
			this.console.resize(this._screen.x - 4,35);
			this.console.reposition(0,0);
			this.log.resize((this._screen.x - 6) / 2,this._screen.y / 4);
			this.log.reposition(0,this.console.get_height() + 2 + 15);
			this.watch.resize((this._screen.x - 6) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this.console.get_height() + 2 + 15);
			this.stats.reposition(this._screen.x,this._screen.y);
			break;
		case 4:
			this.console.resize(this._screen.x - 4,35);
			this.console.reposition(2,this._screen.y);
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - 5.) / 2 - this.console.get_height() / 2 - 2);
			this.log.reposition(0,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - 5.) / 2 - this.console.get_height() / 2);
			this.watch.reposition(0,this.log.get_y() + this.log.get_height() + 2);
			this.stats.reposition(this._screen.x,0);
			break;
		case 5:
			this.console.resize(this._screen.x - 4,35);
			this.console.reposition(2,this._screen.y);
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - 5.) / 2 - this.console.get_height() / 2 - 2);
			this.log.reposition(this._screen.x,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - 5.) / 2 - this.console.get_height() / 2);
			this.watch.reposition(this._screen.x,this.log.get_y() + this.log.get_height() + 2);
			this.stats.reposition(0,0);
			break;
		case 0:
			this.console.resize(this._screen.x - 4,35);
			this.console.reposition(2,this._screen.y);
			this.log.resize((this._screen.x - 6) / 2,this._screen.y / 4);
			this.log.reposition(0,this._screen.y - this.log.get_height() - this.console.get_height() - 3.);
			this.watch.resize((this._screen.x - 6) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.console.get_height() - 3.);
			this.stats.reposition(this._screen.x,0);
			if(this.bmpLog != null) {
				this.bmpLog.resize((this._screen.x - 6) / 2,this._screen.y / 4);
				this.bmpLog.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.bmpLog.get_height() - this.console.get_height() - 3.);
			}
			break;
		}
	}
	,setLayout: function(Layout) {
		this._layout = Layout;
		this.resetLayout();
	}
	,onMouseOut: function(E) {
		this.hasMouse = false;
		if(!flixel.FlxG.vcr.paused) flixel.FlxG.mouse.set_useSystemCursor(false);
	}
	,onMouseOver: function(E) {
		this.hasMouse = true;
		flixel.FlxG.mouse.set_useSystemCursor(true);
	}
	,destroy: function() {
		this._screen = null;
		var _g = 0, _g1 = this._rightButtons;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.destroy();
		}
		this._rightButtons = null;
		var _g = 0, _g1 = this._leftButtons;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.destroy();
		}
		this._leftButtons = null;
		var _g = 0, _g1 = this._middleButtons;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.destroy();
		}
		this._middleButtons = null;
		this.removeChild(this._topBar);
		this._topBar = null;
		if(this.bmpLog != null) {
			this.removeChild(this.bmpLog);
			this.bmpLog.destroy();
			this.bmpLog = null;
		}
		if(this.log != null) {
			this.removeChild(this.log);
			this.log.destroy();
			this.log = null;
		}
		if(this.watch != null) {
			this.removeChild(this.watch);
			this.watch.destroy();
			this.watch = null;
		}
		if(this.stats != null) {
			this.removeChild(this.stats);
			this.stats.destroy();
			this.stats = null;
		}
		if(this.console != null) {
			this.removeChild(this.console);
			this.console.destroy();
			this.console = null;
		}
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
	}
	,__class__: flixel.system.debug.FlxDebugger
});
flixel.system.debug.ButtonAlignment = $hxClasses["flixel.system.debug.ButtonAlignment"] = { __ename__ : ["flixel","system","debug","ButtonAlignment"], __constructs__ : ["LEFT","MIDDLE","RIGHT"] }
flixel.system.debug.ButtonAlignment.LEFT = ["LEFT",0];
flixel.system.debug.ButtonAlignment.LEFT.toString = $estr;
flixel.system.debug.ButtonAlignment.LEFT.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.ButtonAlignment.MIDDLE = ["MIDDLE",1];
flixel.system.debug.ButtonAlignment.MIDDLE.toString = $estr;
flixel.system.debug.ButtonAlignment.MIDDLE.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.ButtonAlignment.RIGHT = ["RIGHT",2];
flixel.system.debug.ButtonAlignment.RIGHT.toString = $estr;
flixel.system.debug.ButtonAlignment.RIGHT.__enum__ = flixel.system.debug.ButtonAlignment;
flixel.system.debug.DebuggerLayout = $hxClasses["flixel.system.debug.DebuggerLayout"] = { __ename__ : ["flixel","system","debug","DebuggerLayout"], __constructs__ : ["STANDARD","MICRO","BIG","TOP","LEFT","RIGHT"] }
flixel.system.debug.DebuggerLayout.STANDARD = ["STANDARD",0];
flixel.system.debug.DebuggerLayout.STANDARD.toString = $estr;
flixel.system.debug.DebuggerLayout.STANDARD.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.MICRO = ["MICRO",1];
flixel.system.debug.DebuggerLayout.MICRO.toString = $estr;
flixel.system.debug.DebuggerLayout.MICRO.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.BIG = ["BIG",2];
flixel.system.debug.DebuggerLayout.BIG.toString = $estr;
flixel.system.debug.DebuggerLayout.BIG.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.TOP = ["TOP",3];
flixel.system.debug.DebuggerLayout.TOP.toString = $estr;
flixel.system.debug.DebuggerLayout.TOP.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.LEFT = ["LEFT",4];
flixel.system.debug.DebuggerLayout.LEFT.toString = $estr;
flixel.system.debug.DebuggerLayout.LEFT.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.DebuggerLayout.RIGHT = ["RIGHT",5];
flixel.system.debug.DebuggerLayout.RIGHT.toString = $estr;
flixel.system.debug.DebuggerLayout.RIGHT.__enum__ = flixel.system.debug.DebuggerLayout;
flixel.system.debug.Log = function(Title,IconPath,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	flixel.system.debug.Window.call(this,Title,IconPath,Width,Height,Resizable,Bounds);
	this._text = new flash.text.TextField();
	this._text.set_x(2);
	this._text.set_y(15);
	this._text.multiline = true;
	this._text.set_wordWrap(true);
	this._text.selectable = true;
	this._text.embedFonts = true;
	this._text.set_defaultTextFormat(new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,12,16777215));
	this.addChild(this._text);
	this._lines = new Array();
	flixel.FlxG.log.set_redirectTraces(true);
};
$hxClasses["flixel.system.debug.Log"] = flixel.system.debug.Log;
flixel.system.debug.Log.__name__ = ["flixel","system","debug","Log"];
flixel.system.debug.Log.__super__ = flixel.system.debug.Window;
flixel.system.debug.Log.prototype = $extend(flixel.system.debug.Window.prototype,{
	updateSize: function() {
		flixel.system.debug.Window.prototype.updateSize.call(this);
		this._text.set_width(this._width - 10);
		this._text.set_height(this._height - 15);
	}
	,clear: function() {
		this._text.set_text("");
		this._lines.splice(0,this._lines.length);
	}
	,add: function(Data,Style,FireOnce) {
		if(FireOnce == null) FireOnce = false;
		if(Data == null) return false;
		var texts = new Array();
		var _g1 = 0, _g = Data.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(js.Boot.__instanceof(Data[i],flixel.util.FlxPoint)) texts[i] = flixel.util.FlxStringUtil.formatFlxPoint(Data[i],flixel.FlxG["debugger"].pointPrecision); else if(js.Boot.__instanceof(Data[i],haxe.ds.StringMap)) texts[i] = flixel.util.FlxStringUtil.formatStringMap(Data[i]); else texts[i] = Std.string(Data[i]);
			texts[i] = StringTools.replace(texts[i],"<","");
			texts[i] = StringTools.replace(texts[i],">","");
		}
		var text = texts.join(" ");
		text = Style.prefix + text;
		if(FireOnce) {
			var _g = 0, _g1 = this._lines;
			while(_g < _g1.length) {
				var line = _g1[_g];
				++_g;
				if(text == line) return false;
			}
		}
		if(this._lines.length <= 0) this._text.set_text("");
		this._lines.push(text);
		if(this._lines.length > flixel.system.debug.Log.MAX_LOG_LINES) {
			this._lines.shift();
			var newText = "";
			var _g1 = 0, _g = this._lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				newText += this._lines[i] + "<br>";
			}
			this._text.set_text(newText);
		} else {
			var _g = this._text;
			_g.set_text(_g.get_text() + (text + "\n"));
		}
		this._text.scrollV = this._text.get_maxScrollV() | 0;
		return true;
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._lines = null;
		flixel.system.debug.Window.prototype.destroy.call(this);
	}
	,__class__: flixel.system.debug.Log
});
flixel.system.debug.LogStyle = function(Prefix,Color,Size,Bold,Italic,Underlined,ErrorSound,OpenConsole,CallbackFunction) {
	if(OpenConsole == null) OpenConsole = false;
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Size == null) Size = 12;
	if(Color == null) Color = "FFFFFF";
	if(Prefix == null) Prefix = "";
	this.prefix = Prefix;
	this.color = Color;
	this.size = Size;
	this.bold = Bold;
	this.italic = Italic;
	this.underlined = Underlined;
	this.errorSound = ErrorSound;
	this.openConsole = OpenConsole;
	this.callbackFunction = CallbackFunction;
};
$hxClasses["flixel.system.debug.LogStyle"] = flixel.system.debug.LogStyle;
flixel.system.debug.LogStyle.__name__ = ["flixel","system","debug","LogStyle"];
flixel.system.debug.LogStyle.prototype = {
	__class__: flixel.system.debug.LogStyle
}
flixel.system.debug.Stats = function(Title,IconPath,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	this._drawCallsMarker = 0;
	this._flashMarker = 0;
	this._activeObjectMarker = 0;
	this._visibleObjectMarker = 0;
	this._drawMarker = 0;
	this._updateMarker = 0;
	this._updateTimer = 0;
	this._lastTime = 0;
	flixel.system.debug.Window.call(this,Title,IconPath,Width,Height,Resizable,Bounds);
	this.resize(100,118);
	var leftText = this.createTextField(flash.text.TextFormatAlign.LEFT,14211288);
	leftText.set_text("FPS: \n" + "Mem: \n" + "U: \n" + "D: \n" + "DrawTiles: \n" + "QuadTrees: \n" + "Lists \n");
	this._text = this.createTextField(flash.text.TextFormatAlign.RIGHT,16777215);
	this._update = new Array();
	this._draw = new Array();
	this._flash = new Array();
	this._activeObject = new Array();
	this._visibleObject = new Array();
	this._drawCalls = new Array();
};
$hxClasses["flixel.system.debug.Stats"] = flixel.system.debug.Stats;
flixel.system.debug.Stats.__name__ = ["flixel","system","debug","Stats"];
flixel.system.debug.Stats.__super__ = flixel.system.debug.Window;
flixel.system.debug.Stats.prototype = $extend(flixel.system.debug.Window.prototype,{
	drawCalls: function(Drawcalls) {
		this._drawCalls[this._drawCallsMarker++] = Drawcalls;
	}
	,visibleObjects: function(Count) {
		this._visibleObject[this._visibleObjectMarker++] = Count;
	}
	,activeObjects: function(Count) {
		this._activeObject[this._activeObjectMarker++] = Count;
	}
	,flash: function(Time) {
		this._flash[this._flashMarker++] = Time;
	}
	,flixelDraw: function(Time) {
		this._draw[this._drawMarker++] = Time;
	}
	,flixelUpdate: function(Time) {
		this._update[this._updateMarker++] = Time;
	}
	,update: function() {
		var time = flixel.FlxG.game.ticks;
		var elapsed = time - this._lastTime;
		this._lastTime = flixel.FlxG.game.ticks;
		if(elapsed > 500) elapsed = 500;
		this._lastTime = time;
		this._updateTimer += elapsed;
		if(this._updateTimer > 500) {
			var i = 0;
			var output = "";
			var flashPlayerFramerate = 0;
			i = 0;
			while(i < this._flashMarker) flashPlayerFramerate += this._flash[i++];
			flashPlayerFramerate /= this._flashMarker;
			var updateTime = 0;
			i = 0;
			while(i < this._updateMarker) updateTime += this._update[i++];
			var activeCount = 0;
			i = 0;
			while(i < this._activeObjectMarker) activeCount += this._activeObject[i++];
			activeCount = activeCount / this._activeObjectMarker | 0;
			var drawTime = 0;
			i = 0;
			while(i < this._drawMarker) drawTime += this._draw[i++];
			var visibleCount = 0;
			i = 0;
			while(i < this._visibleObjectMarker) visibleCount += this._visibleObject[i++];
			visibleCount = visibleCount / this._visibleObjectMarker | 0;
			var drawCallsCount = 0;
			i = 0;
			while(i < this._drawCallsMarker) drawCallsCount += this._drawCalls[i++];
			drawCallsCount = drawCallsCount / this._drawCallsMarker | 0;
			output += (1 / (flashPlayerFramerate / 1000) | 0) + " / " + flixel.FlxG.get_flashFramerate() + " \n";
			output += Math.round(flash.system.System.get_totalMemory() * 0.000000954 * 100) / 100 + " MB" + " \n";
			output += activeCount + " (" + (updateTime / this._updateMarker | 0) + "ms)" + " \n";
			output += visibleCount + " (" + (drawTime / this._drawMarker | 0) + "ms)" + " \n";
			output += Std.string(drawCallsCount) + " \n";
			output += Std.string(flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES) + " \n";
			output += Std.string(flixel.system.FlxList._NUM_CACHED_FLX_LIST) + " \n";
			this._text.set_text(output);
			this._text.selectable = false;
			this._updateMarker = 0;
			this._drawMarker = 0;
			this._flashMarker = 0;
			this._activeObjectMarker = 0;
			this._visibleObjectMarker = 0;
			this._drawCallsMarker = 0;
			this._updateTimer -= 500;
		}
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._update = null;
		this._draw = null;
		this._flash = null;
		this._activeObject = null;
		this._visibleObject = null;
		this._drawCalls = null;
		flixel.system.debug.Window.prototype.destroy.call(this);
	}
	,createTextField: function(Alignment,Color) {
		var text = new flash.text.TextField();
		text.set_width(96);
		text.set_x(2);
		text.set_y(15);
		text.multiline = true;
		text.set_wordWrap(true);
		text.selectable = true;
		text.embedFonts = true;
		text.set_defaultTextFormat(new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEBUGGER,12,Color,false,false,false,null,null,Alignment));
		this.addChild(text);
		return text;
	}
	,__class__: flixel.system.debug.Stats
});
flixel.system.debug.VCR = function(Debugger) {
	this.runtime = 0;
	this.restartBtn = Debugger.addButton(flixel.system.debug.ButtonAlignment.MIDDLE,"flixel/img/debugger/buttons/restart.png",flixel.FlxG.resetState);
	this.playbackToggleBtn = Debugger.addButton(flixel.system.debug.ButtonAlignment.MIDDLE,"flixel/img/debugger/buttons/pause.png",($_=flixel.FlxG.vcr,$bind($_,$_.pause)));
	this.stepBtn = Debugger.addButton(flixel.system.debug.ButtonAlignment.MIDDLE,"flixel/img/debugger/buttons/step.png",$bind(this,this.onStep));
};
$hxClasses["flixel.system.debug.VCR"] = flixel.system.debug.VCR;
flixel.system.debug.VCR.__name__ = ["flixel","system","debug","VCR"];
flixel.system.debug.VCR.prototype = {
	onStep: function() {
		if(!flixel.FlxG.vcr.paused) flixel.FlxG.vcr.pause();
		flixel.FlxG.vcr.stepRequested = true;
	}
	,onResume: function() {
		this.playbackToggleBtn.downHandler = ($_=flixel.FlxG.vcr,$bind($_,$_.pause));
		this.playbackToggleBtn.changeIcon("flixel/img/debugger/buttons/pause.png");
	}
	,onPause: function() {
		this.playbackToggleBtn.downHandler = ($_=flixel.FlxG.vcr,$bind($_,$_.resume));
		this.playbackToggleBtn.changeIcon("flixel/img/debugger/buttons/play.png");
	}
	,__class__: flixel.system.debug.VCR
}
flixel.system.debug.Watch = function(Title,IconPath,Width,Height,Resizable,Bounds) {
	if(Resizable == null) Resizable = true;
	flixel.system.debug.Window.call(this,Title,IconPath,Width,Height,Resizable,Bounds);
	this._names = new flash.display.Sprite();
	this._names.set_x(2);
	this._names.set_y(15);
	this.addChild(this._names);
	this._values = new flash.display.Sprite();
	this._values.set_x(2);
	this._values.set_y(15);
	this.addChild(this._values);
	this._watching = new Array();
	this._quickWatchList = new haxe.ds.StringMap();
	this.editing = false;
	this.removeAll();
};
$hxClasses["flixel.system.debug.Watch"] = flixel.system.debug.Watch;
flixel.system.debug.Watch.__name__ = ["flixel","system","debug","Watch"];
flixel.system.debug.Watch.__super__ = flixel.system.debug.Window;
flixel.system.debug.Watch.prototype = $extend(flixel.system.debug.Window.prototype,{
	updateSize: function() {
		if((this._height | 0) < this._watching.length * 15 + 17) this._height = this._watching.length * 15 + 17;
		flixel.system.debug.Window.prototype.updateSize.call(this);
		this._values.set_x(this._width / 2 + 2);
		var i = 0;
		var l = this._watching.length;
		while(i < l) this._watching[i++].updateWidth(this._width / 2,this._width / 2 - 10);
	}
	,submit: function() {
		var i = 0;
		var l = this._watching.length;
		var watchEntry;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.editing) watchEntry.submit();
		}
		this.editing = false;
	}
	,update: function() {
		this.editing = false;
		var i = 0;
		var l = this._watching.length;
		while(i < l) if(!this._watching[i++].updateValue()) this.editing = true;
	}
	,removeAll: function() {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching.pop();
			this._names.removeChild(watchEntry.nameDisplay);
			this._values.removeChild(watchEntry.valueDisplay);
			watchEntry.destroy();
			i++;
		}
		this._watching = [];
		this._quickWatchList = new haxe.ds.StringMap();
	}
	,removeEntry: function(Entry,Index) {
		this._watching[Index] = this._watching[this._watching.length - 1];
		this._watching.pop();
		this._names.removeChild(Entry.nameDisplay);
		this._values.removeChild(Entry.valueDisplay);
		Entry.destroy();
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			this._watching[i].setY(i * 15);
			i++;
		}
	}
	,remove: function(AnyObject,VariableName,QuickWatchName) {
		if(AnyObject == null && VariableName == null && QuickWatchName != null) {
			var quickWatch = this._quickWatchList.get(QuickWatchName);
			if(quickWatch != null) this.removeEntry(quickWatch,flixel.util.FlxArrayUtil.indexOf_flixel_system_debug_WatchEntry(this._watching,quickWatch));
			this._quickWatchList.remove(QuickWatchName);
			return;
		}
		var watchEntry;
		var i = this._watching.length - 1;
		while(i >= 0) {
			watchEntry = this._watching[i];
			if(watchEntry.object == AnyObject && (VariableName == null || watchEntry.field == VariableName)) this.removeEntry(watchEntry,i);
			i--;
		}
		watchEntry = null;
	}
	,updateQuickWatch: function(Name,NewValue) {
		if(this._quickWatchList.get(Name) == null) {
			var quickWatch = new flixel.system.debug.WatchEntry(this._watching.length * 15,this._width / 2,this._width / 2 - 10,null,null,Name);
			this._names.addChild(quickWatch.nameDisplay);
			this._values.addChild(quickWatch.valueDisplay);
			this._watching.push(quickWatch);
			this._quickWatchList.set(Name,quickWatch);
		}
		var quickWatch = this._quickWatchList.get(Name);
		if(quickWatch != null) {
			var text = Std.string(NewValue);
			if(js.Boot.__instanceof(NewValue,haxe.ds.StringMap)) text = flixel.util.FlxStringUtil.formatStringMap(NewValue); else if(js.Boot.__instanceof(NewValue,flixel.util.FlxPoint)) text = flixel.util.FlxStringUtil.formatFlxPoint(NewValue,flixel.FlxG["debugger"].pointPrecision);
			quickWatch.valueDisplay.set_text(text);
		}
	}
	,add: function(AnyObject,VariableName,DisplayName) {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.object == AnyObject && watchEntry.field == VariableName) return;
		}
		watchEntry = new flixel.system.debug.WatchEntry(this._watching.length * 15,this._width / 2,this._width / 2 - 10,AnyObject,VariableName,DisplayName);
		if(watchEntry.field == null) {
			watchEntry.destroy();
			watchEntry = null;
			return;
		}
		this._names.addChild(watchEntry.nameDisplay);
		this._values.addChild(watchEntry.valueDisplay);
		this._watching.push(watchEntry);
	}
	,destroy: function() {
		if(this._names != null) this.removeChild(this._names);
		this._names = null;
		if(this._values != null) this.removeChild(this._values);
		this._values = null;
		if(this._watching != null) {
			var _g = 0, _g1 = this._watching;
			while(_g < _g1.length) {
				var watchEntry = _g1[_g];
				++_g;
				watchEntry.destroy();
			}
			this._watching = null;
		}
		this._quickWatchList = null;
		flixel.system.debug.Window.prototype.destroy.call(this);
	}
	,__class__: flixel.system.debug.Watch
});
flixel.system.debug.WatchEntry = function(Y,NameWidth,ValueWidth,Obj,Field,Custom) {
	this.quickWatch = false;
	this.editing = false;
	if(Obj == null && Field == null && Custom != null) this.quickWatch = true;
	this.custom = Custom;
	if(!this.quickWatch) {
		this.object = Obj;
		this.field = Field;
		var tempArr = this.field.split(".");
		var l = tempArr.length;
		var tempObj = this.object;
		var tempVarName = "";
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			tempVarName = tempArr[i];
			try {
				Reflect.getProperty(tempObj,tempVarName);
			} catch( e ) {
				flixel.FlxG.log.error("Watch: " + Std.string(tempObj) + " does not have a field '" + tempVarName + "'");
				tempVarName = null;
				break;
			}
			if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
		}
		this.object = tempObj;
		this.field = tempVarName;
	}
	var fontName = flixel.system.FlxAssets.FONT_DEBUGGER;
	var color = 16777215;
	if(this.quickWatch) color = 32768;
	this._whiteText = new flash.text.TextFormat(fontName,12,color);
	this._blackText = new flash.text.TextFormat(fontName,12,0);
	this.nameDisplay = new flash.text.TextField();
	this.nameDisplay.set_y(Y);
	this.nameDisplay.multiline = false;
	this.nameDisplay.selectable = true;
	this.nameDisplay.embedFonts = true;
	this.nameDisplay.set_defaultTextFormat(this._whiteText);
	this.valueDisplay = new flash.text.TextField();
	this.valueDisplay.set_y(Y);
	this.valueDisplay.set_height(20);
	this.valueDisplay.multiline = false;
	this.valueDisplay.selectable = true;
	this.valueDisplay.doubleClickEnabled = true;
	if(!this.quickWatch) {
		this.valueDisplay.addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
		this.valueDisplay.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	this.valueDisplay.set_background(false);
	this.valueDisplay.set_backgroundColor(16777215);
	this.valueDisplay.embedFonts = true;
	this.valueDisplay.set_defaultTextFormat(this._whiteText);
	this.updateWidth(NameWidth,ValueWidth);
};
$hxClasses["flixel.system.debug.WatchEntry"] = flixel.system.debug.WatchEntry;
flixel.system.debug.WatchEntry.__name__ = ["flixel","system","debug","WatchEntry"];
flixel.system.debug.WatchEntry.prototype = {
	doneEditing: function() {
		this.valueDisplay.set_type(flash.text.TextFieldType.DYNAMIC);
		this.valueDisplay.setTextFormat(this._whiteText);
		this.valueDisplay.set_defaultTextFormat(this._whiteText);
		this.valueDisplay.set_background(false);
		this.editing = false;
		flixel.FlxG.keyboard.enabled = true;
	}
	,submit: function() {
		var property = Reflect.getProperty(this.object,this.field);
		if(js.Boot.__instanceof(property,flixel.util.FlxPoint)) {
			var xString = this.valueDisplay.get_text().split(" |")[0];
			xString = xString.substring(3,xString.length);
			var xValue = Std.parseFloat(xString);
			var yString = this.valueDisplay.get_text().split("| ")[1];
			yString = yString.substring(3,yString.length);
			var yValue = Std.parseFloat(yString);
			if(!Math.isNaN(xValue)) property.x = xValue;
			if(!Math.isNaN(yValue)) property.y = yValue;
		} else Reflect.setProperty(this.object,this.field,this.valueDisplay.get_text());
		this.doneEditing();
	}
	,cancel: function() {
		this.valueDisplay.set_text(this.oldValue.toString());
		this.doneEditing();
	}
	,onKeyUp: function(FlashEvent) {
		if(FlashEvent.keyCode == 13 || FlashEvent.keyCode == 9 || FlashEvent.keyCode == 27) {
			if(FlashEvent.keyCode == 27) this.cancel(); else this.submit();
		}
	}
	,onMouseUp: function(FlashEvent) {
		this.editing = true;
		flixel.FlxG.keyboard.enabled = false;
		this.oldValue = Reflect.getProperty(this.object,this.field);
		this.valueDisplay.set_type(flash.text.TextFieldType.INPUT);
		this.valueDisplay.setTextFormat(this._blackText);
		this.valueDisplay.set_background(true);
	}
	,updateValue: function() {
		if(this.editing || this.quickWatch) return false;
		var property = Reflect.getProperty(this.object,this.field);
		if(js.Boot.__instanceof(property,flixel.util.FlxPoint)) this.valueDisplay.set_text(flixel.util.FlxStringUtil.formatFlxPoint(property,flixel.FlxG["debugger"].pointPrecision)); else this.valueDisplay.set_text(Std.string(property));
		return true;
	}
	,updateWidth: function(NameWidth,ValueWidth) {
		this.nameDisplay.set_width(NameWidth);
		this.valueDisplay.set_width(ValueWidth);
		if(this.custom != null) this.nameDisplay.set_text(this.custom); else if(this.field != null) {
			this.nameDisplay.set_text("");
			if(NameWidth > 120) this.nameDisplay.appendText((function($this) {
				var $r;
				var s = Type.getClassName(Type.getClass($this.object));
				if(s != null) {
					s = StringTools.replace(s,"::",".");
					if(NameWidth < 240) s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
				}
				$r = s;
				return $r;
			}(this)) + ".");
			this.nameDisplay.appendText(this.field);
		}
	}
	,setY: function(Y) {
		this.nameDisplay.set_y(Y);
		this.valueDisplay.set_y(Y);
	}
	,destroy: function() {
		this.object = null;
		this.oldValue = null;
		this.nameDisplay = null;
		this.field = null;
		this.custom = null;
		if(this.valueDisplay != null) {
			this.valueDisplay.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
			this.valueDisplay.removeEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
			this.valueDisplay = null;
		}
	}
	,__class__: flixel.system.debug.WatchEntry
}
flixel.system.frontEnds.BmpLogFrontEnd = function() {
};
$hxClasses["flixel.system.frontEnds.BmpLogFrontEnd"] = flixel.system.frontEnds.BmpLogFrontEnd;
flixel.system.frontEnds.BmpLogFrontEnd.__name__ = ["flixel","system","frontEnds","BmpLogFrontEnd"];
flixel.system.frontEnds.BmpLogFrontEnd.prototype = {
	add: function(Pixels) {
	}
	,__class__: flixel.system.frontEnds.BmpLogFrontEnd
}
flixel.system.input = {}
flixel.system.input.IFlxInput = function() { }
$hxClasses["flixel.system.input.IFlxInput"] = flixel.system.input.IFlxInput;
flixel.system.input.IFlxInput.__name__ = ["flixel","system","input","IFlxInput"];
flixel.system.input.IFlxInput.prototype = {
	__class__: flixel.system.input.IFlxInput
}
flixel.system.input.keyboard = {}
flixel.system.input.keyboard.FlxKey = function(Name) {
	this.last = 0;
	this.current = 0;
	this.name = Name;
};
$hxClasses["flixel.system.input.keyboard.FlxKey"] = flixel.system.input.keyboard.FlxKey;
flixel.system.input.keyboard.FlxKey.__name__ = ["flixel","system","input","keyboard","FlxKey"];
flixel.system.input.keyboard.FlxKey.prototype = {
	__class__: flixel.system.input.keyboard.FlxKey
}
flixel.system.input.keyboard.FlxKeyList = function(CheckFunction) {
	this.check = CheckFunction;
};
$hxClasses["flixel.system.input.keyboard.FlxKeyList"] = flixel.system.input.keyboard.FlxKeyList;
flixel.system.input.keyboard.FlxKeyList.__name__ = ["flixel","system","input","keyboard","FlxKeyList"];
flixel.system.input.keyboard.FlxKeyList.prototype = {
	get_ANY: function() {
		var _g = 0, _g1 = flixel.FlxG.keyboard._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null) {
				if(this.check(key.name)) return true;
			}
		}
		return false;
	}
	,get_RIGHT: function() {
		return this.check("RIGHT");
	}
	,get_LEFT: function() {
		return this.check("LEFT");
	}
	,get_DOWN: function() {
		return this.check("DOWN");
	}
	,get_UP: function() {
		return this.check("UP");
	}
	,get_SPACE: function() {
		return this.check("SPACE");
	}
	,get_ALT: function() {
		return this.check("ALT");
	}
	,get_CONTROL: function() {
		return this.check("CONTROL");
	}
	,get_NUMPADSLASH: function() {
		return this.check("NUMPADSLASH");
	}
	,get_SLASH: function() {
		return this.check("SLASH");
	}
	,get_NUMPADPERIOD: function() {
		return this.check("NUMPADPERIOD");
	}
	,get_PERIOD: function() {
		return this.check("PERIOD");
	}
	,get_COMMA: function() {
		return this.check("COMMA");
	}
	,get_M: function() {
		return this.check("M");
	}
	,get_N: function() {
		return this.check("N");
	}
	,get_B: function() {
		return this.check("B");
	}
	,get_V: function() {
		return this.check("V");
	}
	,get_C: function() {
		return this.check("C");
	}
	,get_X: function() {
		return this.check("X");
	}
	,get_Z: function() {
		return this.check("Z");
	}
	,get_SHIFT: function() {
		return this.check("SHIFT");
	}
	,get_ENTER: function() {
		return this.check("ENTER");
	}
	,get_QUOTE: function() {
		return this.check("QUOTE");
	}
	,get_SEMICOLON: function() {
		return this.check("SEMICOLON");
	}
	,get_L: function() {
		return this.check("L");
	}
	,get_K: function() {
		return this.check("K");
	}
	,get_J: function() {
		return this.check("J");
	}
	,get_H: function() {
		return this.check("H");
	}
	,get_G: function() {
		return this.check("G");
	}
	,get_F: function() {
		return this.check("F");
	}
	,get_D: function() {
		return this.check("D");
	}
	,get_S: function() {
		return this.check("S");
	}
	,get_A: function() {
		return this.check("A");
	}
	,get_CAPSLOCK: function() {
		return this.check("CAPSLOCK");
	}
	,get_BACKSLASH: function() {
		return this.check("BACKSLASH");
	}
	,get_RBRACKET: function() {
		return this.check("RBRACKET");
	}
	,get_LBRACKET: function() {
		return this.check("LBRACKET");
	}
	,get_P: function() {
		return this.check("P");
	}
	,get_O: function() {
		return this.check("O");
	}
	,get_I: function() {
		return this.check("I");
	}
	,get_U: function() {
		return this.check("U");
	}
	,get_Y: function() {
		return this.check("Y");
	}
	,get_T: function() {
		return this.check("T");
	}
	,get_R: function() {
		return this.check("R");
	}
	,get_E: function() {
		return this.check("E");
	}
	,get_W: function() {
		return this.check("W");
	}
	,get_Q: function() {
		return this.check("Q");
	}
	,get_TAB: function() {
		return this.check("TAB");
	}
	,get_BACKSPACE: function() {
		return this.check("BACKSPACE");
	}
	,get_DELETE: function() {
		return this.check("DELETE");
	}
	,get_NUMPADPLUS: function() {
		return this.check("NUMPADPLUS");
	}
	,get_PLUS: function() {
		return this.check("PLUS");
	}
	,get_NUMPADMINUS: function() {
		return this.check("NUMPADMINUS");
	}
	,get_MINUS: function() {
		return this.check("MINUS");
	}
	,get_INSERT: function() {
		return this.check("INSERT");
	}
	,get_END: function() {
		return this.check("END");
	}
	,get_HOME: function() {
		return this.check("HOME");
	}
	,get_PAGEDOWN: function() {
		return this.check("PAGEDOWN");
	}
	,get_PAGEUP: function() {
		return this.check("PAGEUP");
	}
	,get_NUMPADZERO: function() {
		return this.check("NUMPADZERO");
	}
	,get_NUMPADNINE: function() {
		return this.check("NUMPADNINE");
	}
	,get_NUMPADEIGHT: function() {
		return this.check("NUMPADEIGHT");
	}
	,get_NUMPADSEVEN: function() {
		return this.check("NUMPADSEVEN");
	}
	,get_NUMPADSIX: function() {
		return this.check("NUMPADSIX");
	}
	,get_NUMPADFIVE: function() {
		return this.check("NUMPADFIVE");
	}
	,get_NUMPADFOUR: function() {
		return this.check("NUMPADFOUR");
	}
	,get_NUMPADTHREE: function() {
		return this.check("NUMPADTHREE");
	}
	,get_NUMPADTWO: function() {
		return this.check("NUMPADTWO");
	}
	,get_NUMPADONE: function() {
		return this.check("NUMPADONE");
	}
	,get_ZERO: function() {
		return this.check("ZERO");
	}
	,get_NINE: function() {
		return this.check("NINE");
	}
	,get_EIGHT: function() {
		return this.check("EIGHT");
	}
	,get_SEVEN: function() {
		return this.check("SEVEN");
	}
	,get_SIX: function() {
		return this.check("SIX");
	}
	,get_FIVE: function() {
		return this.check("FIVE");
	}
	,get_FOUR: function() {
		return this.check("FOUR");
	}
	,get_THREE: function() {
		return this.check("THREE");
	}
	,get_TWO: function() {
		return this.check("TWO");
	}
	,get_ONE: function() {
		return this.check("ONE");
	}
	,get_F12: function() {
		return this.check("F12");
	}
	,get_F11: function() {
		return this.check("F11");
	}
	,get_F10: function() {
		return this.check("F10");
	}
	,get_F9: function() {
		return this.check("F9");
	}
	,get_F8: function() {
		return this.check("F8");
	}
	,get_F7: function() {
		return this.check("F7");
	}
	,get_F6: function() {
		return this.check("F6");
	}
	,get_F5: function() {
		return this.check("F5");
	}
	,get_F4: function() {
		return this.check("F4");
	}
	,get_F3: function() {
		return this.check("F3");
	}
	,get_F2: function() {
		return this.check("F2");
	}
	,get_F1: function() {
		return this.check("F1");
	}
	,get_ESCAPE: function() {
		return this.check("ESCAPE");
	}
	,__class__: flixel.system.input.keyboard.FlxKeyList
	,__properties__: {get_ESCAPE:"get_ESCAPE",get_F1:"get_F1",get_F2:"get_F2",get_F3:"get_F3",get_F4:"get_F4",get_F5:"get_F5",get_F6:"get_F6",get_F7:"get_F7",get_F8:"get_F8",get_F9:"get_F9",get_F10:"get_F10",get_F11:"get_F11",get_F12:"get_F12",get_ONE:"get_ONE",get_TWO:"get_TWO",get_THREE:"get_THREE",get_FOUR:"get_FOUR",get_FIVE:"get_FIVE",get_SIX:"get_SIX",get_SEVEN:"get_SEVEN",get_EIGHT:"get_EIGHT",get_NINE:"get_NINE",get_ZERO:"get_ZERO",get_NUMPADONE:"get_NUMPADONE",get_NUMPADTWO:"get_NUMPADTWO",get_NUMPADTHREE:"get_NUMPADTHREE",get_NUMPADFOUR:"get_NUMPADFOUR",get_NUMPADFIVE:"get_NUMPADFIVE",get_NUMPADSIX:"get_NUMPADSIX",get_NUMPADSEVEN:"get_NUMPADSEVEN",get_NUMPADEIGHT:"get_NUMPADEIGHT",get_NUMPADNINE:"get_NUMPADNINE",get_NUMPADZERO:"get_NUMPADZERO",get_PAGEUP:"get_PAGEUP",get_PAGEDOWN:"get_PAGEDOWN",get_HOME:"get_HOME",get_END:"get_END",get_INSERT:"get_INSERT",get_MINUS:"get_MINUS",get_NUMPADMINUS:"get_NUMPADMINUS",get_PLUS:"get_PLUS",get_NUMPADPLUS:"get_NUMPADPLUS",get_DELETE:"get_DELETE",get_BACKSPACE:"get_BACKSPACE",get_TAB:"get_TAB",get_Q:"get_Q",get_W:"get_W",get_E:"get_E",get_R:"get_R",get_T:"get_T",get_Y:"get_Y",get_U:"get_U",get_I:"get_I",get_O:"get_O",get_P:"get_P",get_LBRACKET:"get_LBRACKET",get_RBRACKET:"get_RBRACKET",get_BACKSLASH:"get_BACKSLASH",get_CAPSLOCK:"get_CAPSLOCK",get_A:"get_A",get_S:"get_S",get_D:"get_D",get_F:"get_F",get_G:"get_G",get_H:"get_H",get_J:"get_J",get_K:"get_K",get_L:"get_L",get_SEMICOLON:"get_SEMICOLON",get_QUOTE:"get_QUOTE",get_ENTER:"get_ENTER",get_SHIFT:"get_SHIFT",get_Z:"get_Z",get_X:"get_X",get_C:"get_C",get_V:"get_V",get_B:"get_B",get_N:"get_N",get_M:"get_M",get_COMMA:"get_COMMA",get_PERIOD:"get_PERIOD",get_NUMPADPERIOD:"get_NUMPADPERIOD",get_SLASH:"get_SLASH",get_NUMPADSLASH:"get_NUMPADSLASH",get_CONTROL:"get_CONTROL",get_ALT:"get_ALT",get_SPACE:"get_SPACE",get_UP:"get_UP",get_DOWN:"get_DOWN",get_LEFT:"get_LEFT",get_RIGHT:"get_RIGHT",get_ANY:"get_ANY"}
}
flixel.system.input.keyboard.FlxKeyShortcuts = function() {
	this.pressed = new flixel.system.input.keyboard.FlxKeyList(flixel.FlxG.keyboard.pressed);
	this.justPressed = new flixel.system.input.keyboard.FlxKeyList(flixel.FlxG.keyboard.justPressed);
	this.justReleased = new flixel.system.input.keyboard.FlxKeyList(flixel.FlxG.keyboard.justReleased);
};
$hxClasses["flixel.system.input.keyboard.FlxKeyShortcuts"] = flixel.system.input.keyboard.FlxKeyShortcuts;
flixel.system.input.keyboard.FlxKeyShortcuts.__name__ = ["flixel","system","input","keyboard","FlxKeyShortcuts"];
flixel.system.input.keyboard.FlxKeyShortcuts.prototype = {
	__class__: flixel.system.input.keyboard.FlxKeyShortcuts
}
flixel.system.input.keyboard.FlxKeyboard = function() {
	this.enabled = true;
	this._keyLookup = new haxe.ds.StringMap();
	this._keyList = new Array();
	flixel.util.FlxArrayUtil.setLength_flixel_system_input_keyboard_FlxKey(this._keyList,256);
	var i;
	i = 65;
	while(i <= 90) {
		this.addKey(String.fromCharCode(i),i);
		i++;
	}
	i = 48;
	this.addKey("ZERO",i++);
	this.addKey("ONE",i++);
	this.addKey("TWO",i++);
	this.addKey("THREE",i++);
	this.addKey("FOUR",i++);
	this.addKey("FIVE",i++);
	this.addKey("SIX",i++);
	this.addKey("SEVEN",i++);
	this.addKey("EIGHT",i++);
	this.addKey("NINE",i++);
	i = 96;
	this.addKey("NUMPADZERO",i++);
	this.addKey("NUMPADONE",i++);
	this.addKey("NUMPADTWO",i++);
	this.addKey("NUMPADTHREE",i++);
	this.addKey("NUMPADFOUR",i++);
	this.addKey("NUMPADFIVE",i++);
	this.addKey("NUMPADSIX",i++);
	this.addKey("NUMPADSEVEN",i++);
	this.addKey("NUMPADEIGHT",i++);
	this.addKey("NUMPADNINE",i++);
	this.addKey("PAGEUP",33);
	this.addKey("PAGEDOWN",34);
	this.addKey("HOME",36);
	this.addKey("END",35);
	this.addKey("INSERT",45);
	i = 1;
	while(i <= 12) this.addKey("F" + i,111 + i++);
	this.addKey("ESCAPE",27);
	this.addKey("MINUS",189);
	this.addKey("PLUS",187);
	this.addKey("DELETE",46);
	this.addKey("BACKSPACE",8);
	this.addKey("LBRACKET",219);
	this.addKey("RBRACKET",221);
	this.addKey("BACKSLASH",220);
	this.addKey("CAPSLOCK",20);
	this.addKey("SEMICOLON",186);
	this.addKey("QUOTE",222);
	this.addKey("ENTER",13);
	this.addKey("SHIFT",16);
	this.addKey("COMMA",188);
	this.addKey("PERIOD",190);
	this.addKey("SLASH",191);
	this.addKey("NUMPADSLASH",191);
	this.addKey("GRAVEACCENT",192);
	this.addKey("CONTROL",17);
	this.addKey("ALT",18);
	this.addKey("SPACE",32);
	this.addKey("UP",38);
	this.addKey("DOWN",40);
	this.addKey("LEFT",37);
	this.addKey("RIGHT",39);
	this.addKey("TAB",9);
	this.addKey("NUMPADMINUS",109);
	this.addKey("NUMPADPLUS",107);
	this.addKey("NUMPADPERIOD",110);
	flash.Lib.get_current().get_stage().addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyDown));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
	this.pressed = Reflect.makeVarArgs($bind(this,this.anyPressed));
	this.justPressed = Reflect.makeVarArgs($bind(this,this.anyJustPressed));
	this.justReleased = Reflect.makeVarArgs($bind(this,this.anyJustReleased));
};
$hxClasses["flixel.system.input.keyboard.FlxKeyboard"] = flixel.system.input.keyboard.FlxKeyboard;
flixel.system.input.keyboard.FlxKeyboard.__name__ = ["flixel","system","input","keyboard","FlxKeyboard"];
flixel.system.input.keyboard.FlxKeyboard.__interfaces__ = [flixel.system.input.IFlxInput];
flixel.system.input.keyboard.FlxKeyboard.prototype = {
	toString: function() {
		return "FlxKeyboard";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,updateKeyStates: function(KeyCode,Down) {
		var obj = this._keyList[KeyCode];
		if(obj != null) {
			if(obj.current > 0) {
				if(Down) obj.current = 1; else obj.current = -1;
			} else if(Down) obj.current = 2; else obj.current = 0;
		}
	}
	,inKeyArray: function(KeyArray,KeyCode) {
		if(KeyArray == null) return false; else {
			var _g = 0;
			while(_g < KeyArray.length) {
				var keyString = KeyArray[_g];
				++_g;
				if(keyString == "ANY" || this._keyLookup.get(keyString) == KeyCode) return true;
			}
		}
		return false;
	}
	,onKeyDown: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(this.enabled) this.updateKeyStates(c,true);
	}
	,onKeyUp: function(FlashEvent) {
		var c = FlashEvent.keyCode;
		if(flixel.FlxG.game["debugger"] != null && this.inKeyArray(flixel.FlxG["debugger"].toggleKeys,c)) flixel.FlxG["debugger"].set_visible(!flixel.FlxG["debugger"].visible);
		if(!this.enabled) return;
		if(this.inKeyArray(flixel.FlxG.sound.muteKeys,c)) {
			flixel.FlxG.sound.muted = !flixel.FlxG.sound.muted;
			if(flixel.FlxG.sound.volumeHandler != null) flixel.FlxG.sound.volumeHandler(flixel.FlxG.sound.muted?0:flixel.FlxG.sound.volume);
			if(flixel.FlxG.game.soundTray != null) flixel.FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel.FlxG.sound.volumeDownKeys,c)) {
			flixel.FlxG.sound.muted = false;
			var _g = flixel.FlxG.sound;
			_g.set_volume(_g.volume - 0.1);
			if(flixel.FlxG.game.soundTray != null) flixel.FlxG.game.soundTray.show();
		} else if(this.inKeyArray(flixel.FlxG.sound.volumeUpKeys,c)) {
			flixel.FlxG.sound.muted = false;
			var _g = flixel.FlxG.sound;
			_g.set_volume(_g.volume + 0.1);
			if(flixel.FlxG.game.soundTray != null) flixel.FlxG.game.soundTray.show();
		}
		this.updateKeyStates(c,false);
	}
	,destroy: function() {
		this._keyList = null;
		this._keyLookup = null;
	}
	,getIsDown: function() {
		var keysDown = new Array();
		var _g = 0, _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null && key.current > 0) keysDown.push(key);
		}
		return keysDown;
	}
	,getKeyCode: function(KeyName) {
		return this._keyLookup.get(KeyName);
	}
	,playback: function(Record) {
		var i = 0;
		var l = Record.length;
		var o;
		var o2;
		while(i < l) {
			o = Record[i++];
			o2 = this._keyList[o.code];
			o2.current = o.value;
		}
	}
	,record: function() {
		var data = null;
		var i = 0;
		while(i < 256) {
			var key = this._keyList[i++];
			if(key == null || key.current == 0) continue;
			if(data == null) data = new Array();
			data.push(new flixel.system.replay.CodeValuePair(i - 1,key.current));
		}
		return data;
	}
	,checkKeyStatus: function(KeyArray,Status) {
		if(KeyArray == null) return false;
		var _g = 0;
		while(_g < KeyArray.length) {
			var key = KeyArray[_g];
			++_g;
			key = Std.string(key).toUpperCase();
			var k = this._keyList[(function($this) {
				var $r;
				var key1 = key;
				$r = $this._keyLookup.get(key1);
				return $r;
			}(this))];
			if(k != null) {
				if(k.current == Status) return true; else if(Status == 1 && k.current == 2) return true; else if(Status == 0 && k.current == -1) return true;
			} else flixel.FlxG.log.error("Invalid Key: `" + Std.string(key) + "`. Note that function and numpad keys can only be used in flash and js.");
		}
		return false;
	}
	,anyJustReleased: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,-1);
	}
	,anyJustPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,2);
	}
	,anyPressed: function(KeyArray) {
		return this.checkKeyStatus(KeyArray,1);
	}
	,reset: function() {
		var _g = 0, _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key != null) {
				key.current = 0;
				key.last = 0;
			}
		}
	}
	,update: function() {
		var _g = 0, _g1 = this._keyList;
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			if(key == null) continue;
			if(key.last == -1 && key.current == -1) key.current = 0; else if(key.last == 2 && key.current == 2) key.current = 1;
			key.last = key.current;
		}
	}
	,addKey: function(KeyName,KeyCode) {
		this._keyLookup.set(KeyName,KeyCode);
		this._keyList[KeyCode] = new flixel.system.input.keyboard.FlxKey(KeyName);
	}
	,__class__: flixel.system.input.keyboard.FlxKeyboard
}
flixel.system.input.mouse = {}
flixel.system.input.mouse.FlxMouse = function(CursorContainer) {
	this.useSystemCursor = false;
	this._lastWheel = 0;
	this._lastY = 0;
	this._lastX = 0;
	this._wheelUsed = false;
	this._cursor = null;
	this.screenY = 0;
	this.screenX = 0;
	this.wheel = 0;
	flixel.util.FlxPoint.call(this);
	this.cursorContainer = CursorContainer;
	this.cursorContainer.mouseChildren = false;
	this.cursorContainer.mouseEnabled = false;
	this._point = new flixel.util.FlxPoint();
	this._globalScreenPosition = new flixel.util.FlxPoint();
	this._leftButton = new flixel.system.input.mouse.FlxMouseButton(true);
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,($_=this._leftButton,$bind($_,$_.onDown)));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,($_=this._leftButton,$bind($_,$_.onUp)));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this.onMouseWheel));
};
$hxClasses["flixel.system.input.mouse.FlxMouse"] = flixel.system.input.mouse.FlxMouse;
flixel.system.input.mouse.FlxMouse.__name__ = ["flixel","system","input","mouse","FlxMouse"];
flixel.system.input.mouse.FlxMouse.__interfaces__ = [flixel.system.input.IFlxInput];
flixel.system.input.mouse.FlxMouse.__super__ = flixel.util.FlxPoint;
flixel.system.input.mouse.FlxMouse.prototype = $extend(flixel.util.FlxPoint.prototype,{
	set_useSystemCursor: function(value) {
		this.useSystemCursor = value;
		if(!this.useSystemCursor) this.hideSystemCursor(); else this.showSystemCursor();
		return value;
	}
	,hideSystemCursor: function() {
		flash.ui.Mouse.hide();
		this.cursorContainer.set_visible(true);
	}
	,showSystemCursor: function() {
		flash.ui.Mouse.show();
		this.cursorContainer.set_visible(false);
	}
	,onFocusLost: function() {
		flash.ui.Mouse.show();
	}
	,onFocus: function() {
		this.reset();
		this.set_useSystemCursor(this.useSystemCursor);
	}
	,playback: function(Record) {
		this._leftButton.current = Record.button;
		this.wheel = Record.wheel;
		this._globalScreenPosition.set_x(Record.x);
		this._globalScreenPosition.set_y(Record.y);
		this.updateCursor();
	}
	,record: function() {
		if(this._lastX == this._globalScreenPosition.x && this._lastY == this._globalScreenPosition.y && this._leftButton.current == 0 && this._lastWheel == this.wheel) return null;
		this._lastX = Math.floor(this._globalScreenPosition.x);
		this._lastY = Math.floor(this._globalScreenPosition.y);
		this._lastWheel = this.wheel;
		return new flixel.system.replay.MouseRecord(this._lastX,this._lastY,this._leftButton.current,this._lastWheel);
	}
	,get_justReleased: function() {
		return this._leftButton.justReleased();
	}
	,get_justPressed: function() {
		return this._leftButton.justPressed();
	}
	,get_pressed: function() {
		return this._leftButton.current > 0;
	}
	,reset: function() {
		this._leftButton.reset();
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = new flixel.util.FlxPoint();
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = new flixel.util.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.set_x(this._point.x + Camera.scroll.x);
		point.set_y(this._point.y + Camera.scroll.y);
		return point;
	}
	,updateCursor: function() {
		if(this._updateCursorContainer) {
			this.cursorContainer.set_x(this._globalScreenPosition.x);
			this.cursorContainer.set_y(this._globalScreenPosition.y);
		}
		var camera = flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.set_x(this.screenX + camera.scroll.x);
		this.set_y(this.screenY + camera.scroll.y);
	}
	,update: function() {
		var X = Math.floor(flixel.FlxG.game.get_mouseX());
		var Y = Math.floor(flixel.FlxG.game.get_mouseY());
		this._globalScreenPosition.set_x(X);
		this._globalScreenPosition.set_y(Y);
		this.updateCursor();
		this._leftButton.update();
		if(!this._wheelUsed) this.wheel = 0;
		this._wheelUsed = false;
	}
	,unload: function() {
		if(this._cursor != null) {
			if(this.cursorContainer.get_visible()) this.load(); else {
				this.cursorContainer.removeChild(this._cursor);
				this._cursor = null;
			}
		}
	}
	,load: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		if(this._cursor != null) this.cursorContainer.removeChild(this._cursor);
		if(Graphic == null) Graphic = "flixel/img/ui/cursor.png";
		if(js.Boot.__instanceof(Graphic,Class)) this._cursor = Type.createInstance(Graphic,[]); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) this._cursor = new flash.display.Bitmap(js.Boot.__cast(Graphic , flash.display.BitmapData)); else if(js.Boot.__instanceof(Graphic,String)) this._cursor = new flash.display.Bitmap(flixel.system.FlxAssets.getBitmapData(Graphic)); else this._cursor = new flash.display.Bitmap(openfl.Assets.getBitmapData("flixel/img/ui/cursor.png",false));
		this._cursor.set_x(XOffset);
		this._cursor.set_y(YOffset);
		this._cursor.set_scaleX(Scale);
		this._cursor.set_scaleY(Scale);
		this.cursorContainer.addChild(this._cursor);
	}
	,get_visible: function() {
		return this._updateCursorContainer;
	}
	,hide: function() {
		this._updateCursorContainer = false;
		this.cursorContainer.set_visible(false);
		flash.ui.Mouse.hide();
	}
	,show: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		this._updateCursorContainer = true;
		if(!this.useSystemCursor) this.cursorContainer.set_visible(true);
		if(Graphic != null) this.load(Graphic,Scale,XOffset,YOffset); else if(this._cursor == null) this.load();
		if(this.useSystemCursor) flash.ui.Mouse.show();
	}
	,destroy: function() {
		this.cursorContainer = null;
		this._cursor = null;
		this._point = null;
		this._globalScreenPosition = null;
		if(this._cursorBitmapData != null) {
			this._cursorBitmapData.dispose();
			this._cursorBitmapData = null;
		}
	}
	,onMouseWheel: function(FlashEvent) {
		if(flixel.FlxG["debugger"].visible && flixel.FlxG.game["debugger"].hasMouse) return;
		this._wheelUsed = true;
		this.wheel = FlashEvent.delta;
	}
	,__class__: flixel.system.input.mouse.FlxMouse
	,__properties__: $extend(flixel.util.FlxPoint.prototype.__properties__,{get_visible:"get_visible",get_pressed:"get_pressed",get_justPressed:"get_justPressed",get_justReleased:"get_justReleased",set_useSystemCursor:"set_useSystemCursor"})
});
flixel.system.input.mouse.FlxMouseButton = function(IsLeftMouse) {
	if(IsLeftMouse == null) IsLeftMouse = false;
	this._isLeftMouse = false;
	this.last = 0;
	this.current = 0;
	this._isLeftMouse = IsLeftMouse;
};
$hxClasses["flixel.system.input.mouse.FlxMouseButton"] = flixel.system.input.mouse.FlxMouseButton;
flixel.system.input.mouse.FlxMouseButton.__name__ = ["flixel","system","input","mouse","FlxMouseButton"];
flixel.system.input.mouse.FlxMouseButton.prototype = {
	justReleased: function() {
		return this.current == -1 || this.current == -2;
	}
	,justPressed: function() {
		return this.current == 2 || this.current == -2;
	}
	,pressed: function() {
		return this.current > 0;
	}
	,reset: function() {
		this.current = 0;
		this.last = 0;
	}
	,onUp: function(FlashEvent) {
		if(flixel.FlxG["debugger"].visible && flixel.FlxG.game["debugger"].hasMouse) return;
		if(this.current == 2) this.current = -2; else if(this.current > 0) this.current = -1; else this.current = 0;
	}
	,onDown: function(FlashEvent) {
		if(this._isLeftMouse && flixel.FlxG["debugger"].visible) {
			if(flixel.FlxG.game["debugger"].hasMouse) return;
			if(flixel.FlxG.game["debugger"].watch.editing) flixel.FlxG.game["debugger"].watch.submit();
		}
		if(this.current > 0) this.current = 1; else this.current = 2;
	}
	,update: function() {
		if(this.last == -1 && this.current == -1) this.current = 0; else if(this.last == 2 && this.current == 2) this.current = 1; else if(this.last == -2 && this.current == -2) this.current = 0;
		this.last = this.current;
	}
	,__class__: flixel.system.input.mouse.FlxMouseButton
}
flixel.system.input.touch = {}
flixel.system.input.touch.FlxTouch = function(X,Y,PointID) {
	if(PointID == null) PointID = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.util.FlxPoint.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this._current = 0;
	this._last = 0;
	this._point = new flixel.util.FlxPoint();
	this._globalScreenPosition = new flixel.util.FlxPoint();
	this._flashPoint = new flash.geom.Point();
	this.updateTouchPosition(X,Y);
	this._touchPointID = PointID;
};
$hxClasses["flixel.system.input.touch.FlxTouch"] = flixel.system.input.touch.FlxTouch;
flixel.system.input.touch.FlxTouch.__name__ = ["flixel","system","input","touch","FlxTouch"];
flixel.system.input.touch.FlxTouch.__super__ = flixel.util.FlxPoint;
flixel.system.input.touch.FlxTouch.prototype = $extend(flixel.util.FlxPoint.prototype,{
	get_isActive: function() {
		return this._current != 0;
	}
	,get_justReleased: function() {
		return this._current == -1;
	}
	,get_justPressed: function() {
		return this._current == 2;
	}
	,get_pressed: function() {
		return this._current > 0;
	}
	,deactivate: function() {
		this._current = 0;
		this._last = 0;
	}
	,reset: function(X,Y,PointID) {
		this.updateTouchPosition(X,Y);
		this._touchPointID = PointID;
		this._current = 0;
		this._last = 0;
	}
	,overlaps: function(ObjectOrGroup,Camera) {
		if(js.Boot.__instanceof(ObjectOrGroup,flixel.group.FlxTypedGroup)) {
			var i = 0;
			var results = false;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.get_members();
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		return (js.Boot.__cast(ObjectOrGroup , flixel.FlxObject)).overlapsPoint(this,true,Camera);
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = new flixel.util.FlxPoint();
		point.set_x((this._globalScreenPosition.x - Camera.x) / Camera.zoom);
		point.set_y((this._globalScreenPosition.y - Camera.y) / Camera.zoom);
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = flixel.FlxG.camera;
		if(point == null) point = new flixel.util.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.set_x(this._point.x + Camera.scroll.x);
		point.set_y(this._point.y + Camera.scroll.y);
		return point;
	}
	,updateCursor: function() {
		var camera = flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.set_x(this.screenX + camera.scroll.x);
		this.set_y(this.screenY + camera.scroll.y);
	}
	,updateTouchPosition: function(X,Y) {
		this._flashPoint.x = X;
		this._flashPoint.y = Y;
		this._flashPoint = flixel.FlxG.game.globalToLocal(this._flashPoint);
		this._globalScreenPosition.set_x(this._flashPoint.x);
		this._globalScreenPosition.set_y(this._flashPoint.y);
		this.updateCursor();
	}
	,update: function() {
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1;
		this._last = this._current;
	}
	,get_touchPointID: function() {
		return this._touchPointID;
	}
	,destroy: function() {
		this._point = null;
		this._globalScreenPosition = null;
		this._flashPoint = null;
	}
	,__class__: flixel.system.input.touch.FlxTouch
	,__properties__: $extend(flixel.util.FlxPoint.prototype.__properties__,{get_touchPointID:"get_touchPointID",get_pressed:"get_pressed",get_justPressed:"get_justPressed",get_justReleased:"get_justReleased",get_isActive:"get_isActive"})
});
flixel.system.input.touch.FlxTouchManager = function() {
	this.list = new Array();
	this._inactiveTouches = new Array();
	this._touchesCache = new haxe.ds.IntMap();
	flixel.system.input.touch.FlxTouchManager.maxTouchPoints = flash.ui.Multitouch.maxTouchPoints;
	flash.ui.Multitouch.set_inputMode(flash.ui.MultitouchInputMode.TOUCH_POINT);
	flash.Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.handleTouchBegin));
	flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.handleTouchEnd));
	flash.Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.handleTouchMove));
};
$hxClasses["flixel.system.input.touch.FlxTouchManager"] = flixel.system.input.touch.FlxTouchManager;
flixel.system.input.touch.FlxTouchManager.__name__ = ["flixel","system","input","touch","FlxTouchManager"];
flixel.system.input.touch.FlxTouchManager.__interfaces__ = [flixel.system.input.IFlxInput];
flixel.system.input.touch.FlxTouchManager.prototype = {
	toString: function() {
		return "FlxTouchManager";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,recycle: function(X,Y,PointID) {
		if(this._inactiveTouches.length > 0) {
			var touch = this._inactiveTouches.pop();
			touch.reset(X,Y,PointID);
			return this.add(touch);
		}
		return this.add(new flixel.system.input.touch.FlxTouch(X,Y,PointID));
	}
	,add: function(Touch) {
		this.list.push(Touch);
		this._touchesCache.set(Touch.get_touchPointID(),Touch);
		return Touch;
	}
	,justReleased: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == -1) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,justStarted: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == 2) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,handleTouchMove: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) touch.updateTouchPosition(FlashEvent.stageX,FlashEvent.stageY);
	}
	,handleTouchEnd: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = -1; else touch._current = 0;
		}
	}
	,handleTouchBegin: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			touch.updateTouchPosition(FlashEvent.stageX,FlashEvent.stageY);
			if(touch._current > 0) touch._current = 1; else touch._current = 2;
		} else {
			touch = this.recycle(FlashEvent.stageX,FlashEvent.stageY,FlashEvent.touchPointID);
			touch._current = 2;
		}
	}
	,reset: function() {
		var $it0 = this._touchesCache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this._touchesCache.remove(key);
		}
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.deactivate();
			this._inactiveTouches.push(touch);
		}
		this.list.splice(0,this.list.length);
	}
	,update: function() {
		var i = this.list.length - 1;
		var touch;
		while(i >= 0) {
			touch = this.list[i];
			if(touch._current == 0) {
				touch.deactivate();
				this._touchesCache.remove(touch.get_touchPointID());
				this.list.splice(i,1);
				this._inactiveTouches.push(touch);
			} else touch.update();
			i--;
		}
	}
	,destroy: function() {
		var _g = 0, _g1 = this.list;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this.list = null;
		var _g = 0, _g1 = this._inactiveTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this._inactiveTouches = null;
		this._touchesCache = null;
	}
	,getFirst: function() {
		if(this.list[0] != null) return this.list[0]; else return null;
	}
	,__class__: flixel.system.input.touch.FlxTouchManager
}
flixel.system.layer = {}
flixel.system.layer.DrawStackItem = function() {
	this.antialiasing = false;
	this.initialized = false;
	this.useAlpha = false;
	this.position = 0;
	this.drawData = new Array();
};
$hxClasses["flixel.system.layer.DrawStackItem"] = flixel.system.layer.DrawStackItem;
flixel.system.layer.DrawStackItem.__name__ = ["flixel","system","layer","DrawStackItem"];
flixel.system.layer.DrawStackItem.prototype = {
	dispose: function() {
		this.graphics = null;
		this.drawData = null;
		this.next = null;
	}
	,reset: function() {
		this.graphics = null;
		this.initialized = false;
		this.antialiasing = false;
		this.position = 0;
	}
	,__class__: flixel.system.layer.DrawStackItem
}
flixel.system.layer.Region = function(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.startX = startX;
	this.startY = startY;
	this.tileWidth = tileWidth;
	this.tileHeight = tileHeight;
	this.spacingX = spacingX;
	this.spacingY = spacingY;
	this.width = width;
	this.height = height;
};
$hxClasses["flixel.system.layer.Region"] = flixel.system.layer.Region;
flixel.system.layer.Region.__name__ = ["flixel","system","layer","Region"];
flixel.system.layer.Region.prototype = {
	clone: function() {
		return new flixel.system.layer.Region(this.startX,this.startY,this.tileWidth,this.tileHeight,this.spacingX,this.spacingY,this.width,this.height);
	}
	,get_numCols: function() {
		var num = 1;
		if(this.tileWidth != 0) num = (this.width + this.spacingX) / (this.tileWidth + this.spacingX) | 0;
		return num;
	}
	,get_numRows: function() {
		var num = 1;
		if(this.tileHeight != 0) num = (this.height + this.spacingY) / (this.tileHeight + this.spacingY) | 0;
		return num;
	}
	,get_numTiles: function() {
		return this.get_numRows() * this.get_numCols();
	}
	,__class__: flixel.system.layer.Region
	,__properties__: {get_numTiles:"get_numTiles",get_numRows:"get_numRows",get_numCols:"get_numCols"}
}
flixel.system.layer.TileSheetData = function(Bitmap) {
	this.bitmap = Bitmap;
	this.tileSheet = new flixel.system.layer.TileSheetExt(this.bitmap);
	this.flxSpriteFrames = new haxe.ds.StringMap();
	this.flxFrames = new haxe.ds.StringMap();
	this.frameNames = new Array();
};
$hxClasses["flixel.system.layer.TileSheetData"] = flixel.system.layer.TileSheetData;
flixel.system.layer.TileSheetData.__name__ = ["flixel","system","layer","TileSheetData"];
flixel.system.layer.TileSheetData.prototype = {
	destroyFrameBitmapDatas: function() {
		var numFrames = this.frameNames.length;
		var _g = 0;
		while(_g < numFrames) {
			var i = _g++;
			this.flxFrames.get(this.frameNames[i]).destroyBitmapDatas();
		}
	}
	,addTexturePackerFrame: function(frameData,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var key = frameData.name;
		if(this.containsFrame(key)) return this.flxFrames.get(key);
		var texFrame = new flixel.system.layer.frames.FlxFrame(this);
		texFrame.trimmed = frameData.trimmed;
		texFrame.rotated = frameData.rotated;
		texFrame.name = key;
		texFrame.sourceSize = new flixel.util.FlxPoint().copyFrom(frameData.sourceSize);
		texFrame.offset = new flixel.util.FlxPoint().copyFrom(frameData.offset);
		texFrame.center = new flixel.util.FlxPoint(0,0);
		texFrame.frame = frameData.frame.clone();
		if(frameData.rotated) {
			texFrame.center.set(texFrame.frame.height * 0.5 + texFrame.offset.x,texFrame.frame.width * 0.5 + texFrame.offset.y);
			texFrame.additionalAngle = -90.0;
		} else texFrame.center.set(texFrame.frame.width * 0.5 + texFrame.offset.x,texFrame.frame.height * 0.5 + texFrame.offset.y);
		texFrame.tileID = this.addTileRect(texFrame.frame,new flash.geom.Point(0.5 * texFrame.frame.width,0.5 * texFrame.frame.height));
		this.flxFrames.set(key,texFrame);
		this.frameNames.push(key);
		return texFrame;
	}
	,getTexturePackerFrames: function(data,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(this.flxSpriteFrames.exists(data.assetName)) return this.flxSpriteFrames.get(data.assetName);
		data.parseData();
		var frame;
		var packerFrames = new flixel.system.layer.frames.FlxSpriteFrames(data.assetName);
		var l = data.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			frame = this.addTexturePackerFrame(data.frames[i],startX,startY);
			packerFrames.addFrame(frame);
		}
		this.flxSpriteFrames.set(data.assetName,packerFrames);
		return packerFrames;
	}
	,onContext: function(bitmap) {
		this.bitmap = bitmap;
		var newSheet = new flixel.system.layer.TileSheetExt(bitmap);
		newSheet.rebuildFromOld(this.tileSheet);
		this.tileSheet = newSheet;
	}
	,destroy: function() {
		this.bitmap = null;
		this.tileSheet.destroy();
		this.tileSheet = null;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.flxSpriteFrames))();
		while( $it0.hasNext() ) {
			var spriteData = $it0.next();
			spriteData.destroy();
		}
		var $it1 = ((function(_e1) {
			return function() {
				return _e1.iterator();
			};
		})(this.flxSpriteFrames))();
		while( $it1.hasNext() ) {
			var frames = $it1.next();
			frames.destroy();
		}
		this.flxSpriteFrames = null;
		var $it2 = ((function(_e2) {
			return function() {
				return _e2.iterator();
			};
		})(this.flxFrames))();
		while( $it2.hasNext() ) {
			var frame = $it2.next();
			frame.destroy();
		}
		this.flxFrames = null;
		this.frameNames = null;
	}
	,addTileRect: function(tileRect,point) {
		return this.tileSheet.addTileRectID(tileRect,point);
	}
	,containsFrame: function(key) {
		return this.flxFrames.exists(key);
	}
	,addSpriteSheetFrame: function(rect,point) {
		var key = this.getSpriteSheetFrameKey(rect,point);
		if(this.containsFrame(key)) return this.flxFrames.get(key);
		var frame = new flixel.system.layer.frames.FlxFrame(this);
		frame.tileID = this.addTileRect(rect,point);
		frame.name = key;
		frame.frame = rect;
		frame.rotated = false;
		frame.trimmed = false;
		frame.sourceSize = new flixel.util.FlxPoint(rect.width,rect.height);
		frame.offset = new flixel.util.FlxPoint(0,0);
		frame.center = new flixel.util.FlxPoint(0.5 * rect.width,0.5 * rect.height);
		this.flxFrames.set(key,frame);
		this.frameNames.push(key);
		return frame;
	}
	,containsSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var key = this.getKeyForSpriteSheetFrames(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		return this.flxSpriteFrames.exists(key);
	}
	,getKeyForSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var hash = 23;
		hash = hash * 31 + width;
		hash = hash * 31 + height;
		hash = hash * 31 + startX;
		hash = hash * 31 + startY;
		hash = hash * 31 + endX;
		hash = hash * 31 + endY;
		hash = hash * 31 + xSpacing;
		hash = hash * 31 + ySpacing;
		hash = hash * 31 + pointX;
		hash = hash * 31 + pointY;
		return Std.string(hash);
	}
	,getSpriteSheetFrameKey: function(rect,point) {
		var hash = 23;
		hash = hash * 31 + rect.x;
		hash = hash * 31 + rect.y;
		hash = hash * 31 + rect.width;
		hash = hash * 31 + rect.height;
		hash = hash * 31 + point.x;
		hash = hash * 31 + point.y;
		return Std.string(hash);
	}
	,getSpriteSheetFrames: function(region,origin) {
		var bitmapWidth = region.width;
		var bitmapHeight = region.height;
		var startX = region.startX;
		var startY = region.startY;
		var endX = startX + bitmapWidth;
		var endY = startY + bitmapHeight;
		var xSpacing = region.spacingX;
		var ySpacing = region.spacingY;
		var width = region.tileWidth == 0?bitmapWidth:region.tileWidth;
		var height = region.tileHeight == 0?bitmapHeight:region.tileHeight;
		var pointX = 0.5 * width;
		var pointY = 0.5 * height;
		if(origin != null) {
			pointX = origin.x;
			pointY = origin.y;
		}
		var key = this.getKeyForSpriteSheetFrames(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		if(this.flxSpriteFrames.exists(key)) return this.flxSpriteFrames.get(key);
		var numRows = region.get_numRows();
		var numCols = region.get_numCols();
		var tempPoint = origin;
		if(origin == null) tempPoint = new flash.geom.Point(pointX,pointY);
		var spriteData = new flixel.system.layer.frames.FlxSpriteFrames(key);
		var frame;
		var tempRect;
		var spacedWidth = width + xSpacing;
		var spacedHeight = height + ySpacing;
		var _g1 = 0, _g = numRows;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0, _g2 = numCols;
			while(_g3 < _g2) {
				var i = _g3++;
				tempRect = new flash.geom.Rectangle(startX + i * spacedWidth,startY + j * spacedHeight,width,height);
				frame = this.addSpriteSheetFrame(tempRect,tempPoint);
				spriteData.addFrame(frame);
			}
		}
		this.flxSpriteFrames.set(key,spriteData);
		return spriteData;
	}
	,getFrame: function(name) {
		return this.flxFrames.get(name);
	}
	,__class__: flixel.system.layer.TileSheetData
}
openfl.display = {}
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,__class__: openfl.display.Tilesheet
}
flixel.system.layer.TileSheetExt = function(bitmap) {
	openfl.display.Tilesheet.call(this,bitmap);
	this.tileIDs = new haxe.ds.StringMap();
	this.tileOrder = new Array();
	this.numTiles = 0;
};
$hxClasses["flixel.system.layer.TileSheetExt"] = flixel.system.layer.TileSheetExt;
flixel.system.layer.TileSheetExt.__name__ = ["flixel","system","layer","TileSheetExt"];
flixel.system.layer.TileSheetExt.__super__ = openfl.display.Tilesheet;
flixel.system.layer.TileSheetExt.prototype = $extend(openfl.display.Tilesheet.prototype,{
	destroy: function() {
		this.tileOrder = null;
		if(this.tileIDs != null) {
			var $it0 = ((function(_e) {
				return function() {
					return _e.iterator();
				};
			})(this.tileIDs))();
			while( $it0.hasNext() ) {
				var tileObj = $it0.next();
				tileObj.destroy();
			}
		}
		this.tileIDs = null;
	}
	,addTileRectID: function(rect,point) {
		var key = this.getKey(rect,point);
		if(this.tileIDs.exists(key)) return this.tileIDs.get(key).id;
		this.addTileRect(rect,point);
		var tileID = this.numTiles;
		this.numTiles++;
		this.tileOrder[tileID] = key;
		this.tileIDs.set(key,new flixel.system.layer.RectPointTileID(tileID,rect,point));
		return tileID;
	}
	,getKey: function(rect,point) {
		var hash = 23;
		hash = hash * 31 + rect.x;
		hash = hash * 31 + rect.y;
		hash = hash * 31 + rect.width;
		hash = hash * 31 + rect.height;
		if(point != null) {
			hash = hash * 31 + point.x;
			hash = hash * 31 + point.y;
		}
		return Std.string(hash);
	}
	,rebuildFromOld: function(old) {
		var num = old.tileOrder.length;
		var _g = 0;
		while(_g < num) {
			var i = _g++;
			var tileName = old.tileOrder[i];
			var tileObj = old.tileIDs.get(tileName);
			this.addTileRect(tileObj.rect,tileObj.point);
		}
		this.tileIDs = old.tileIDs;
		this.tileOrder = old.tileOrder;
		this.numTiles = old.numTiles;
		old.tileIDs = null;
		old.tileOrder = null;
		old.destroy();
	}
	,__class__: flixel.system.layer.TileSheetExt
});
flixel.system.layer.RectPointTileID = function(id,rect,point) {
	this.id = id;
	this.rect = rect;
	this.point = point;
};
$hxClasses["flixel.system.layer.RectPointTileID"] = flixel.system.layer.RectPointTileID;
flixel.system.layer.RectPointTileID.__name__ = ["flixel","system","layer","RectPointTileID"];
flixel.system.layer.RectPointTileID.prototype = {
	destroy: function() {
		this.rect = null;
		this.point = null;
	}
	,__class__: flixel.system.layer.RectPointTileID
}
flixel.system.layer.frames = {}
flixel.system.layer.frames.FlxFrame = function(tileSheet) {
	this.center = null;
	this.additionalAngle = 0;
	this.tileID = -1;
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
	this._tileSheet = tileSheet;
	this.additionalAngle = 0;
};
$hxClasses["flixel.system.layer.frames.FlxFrame"] = flixel.system.layer.frames.FlxFrame;
flixel.system.layer.frames.FlxFrame.__name__ = ["flixel","system","layer","frames","FlxFrame"];
flixel.system.layer.frames.FlxFrame.prototype = {
	destroyBitmapDatas: function() {
		if(this._bitmapData != null) {
			this._bitmapData.dispose();
			this._bitmapData = null;
		}
		if(this._hReversedBitmapData != null) {
			this._hReversedBitmapData.dispose();
			this._hReversedBitmapData = null;
		}
		if(this._vReversedBitmapData != null) {
			this._vReversedBitmapData.dispose();
			this._vReversedBitmapData = null;
		}
		if(this._hvReversedBitmapData != null) {
			this._hvReversedBitmapData.dispose();
			this._hvReversedBitmapData = null;
		}
	}
	,getHVReversedBitmap: function() {
		if(this._hvReversedBitmapData != null) return this._hvReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(-1,-1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.sourceSize.x | 0,this.sourceSize.y | 0);
		this._hvReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hvReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._hvReversedBitmapData;
	}
	,getVReversedBitmap: function() {
		if(this._vReversedBitmapData != null) return this._vReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(1,-1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(0,this.sourceSize.y | 0);
		this._vReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._vReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._vReversedBitmapData;
	}
	,getHReversedBitmap: function() {
		if(this._hReversedBitmapData != null) return this._hReversedBitmapData;
		var normalFrame = this.getBitmap();
		flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		flixel.system.layer.frames.FlxFrame.MATRIX.scale(-1,1);
		flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.sourceSize.x | 0,0);
		this._hReversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._hReversedBitmapData.draw(normalFrame,flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._hReversedBitmapData;
	}
	,getBitmap: function() {
		if(this._bitmapData != null) return this._bitmapData;
		this._bitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		if(this.rotated) {
			var temp = new flash.display.BitmapData(this.frame.width | 0,this.frame.height | 0,true,0);
			flixel.system.layer.frames.FlxFrame.POINT.x = flixel.system.layer.frames.FlxFrame.POINT.y = 0;
			temp.copyPixels(this._tileSheet.bitmap,this.frame,flixel.system.layer.frames.FlxFrame.POINT);
			flixel.system.layer.frames.FlxFrame.MATRIX.identity();
			flixel.system.layer.frames.FlxFrame.MATRIX.translate(-0.5 * this.frame.width,-0.5 * this.frame.height);
			flixel.system.layer.frames.FlxFrame.MATRIX.rotate(-90. * flixel.util.FlxAngle.TO_RAD);
			flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.offset.x + 0.5 * this.frame.height,this.offset.y + 0.5 * this.frame.width);
			this._bitmapData.draw(temp,flixel.system.layer.frames.FlxFrame.MATRIX);
			temp.dispose();
		} else {
			flixel.system.layer.frames.FlxFrame.POINT.x = this.offset.x;
			flixel.system.layer.frames.FlxFrame.POINT.y = this.offset.y;
			this._bitmapData.copyPixels(this._tileSheet.bitmap,this.frame,flixel.system.layer.frames.FlxFrame.POINT);
		}
		return this._bitmapData;
	}
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
		this.center = null;
		this._tileSheet = null;
		this.destroyBitmapDatas();
	}
	,__class__: flixel.system.layer.frames.FlxFrame
}
flixel.system.layer.frames.FlxSpriteFrames = function(name) {
	this.name = name;
	this.frames = [];
	this.framesHash = new haxe.ds.StringMap();
};
$hxClasses["flixel.system.layer.frames.FlxSpriteFrames"] = flixel.system.layer.frames.FlxSpriteFrames;
flixel.system.layer.frames.FlxSpriteFrames.__name__ = ["flixel","system","layer","frames","FlxSpriteFrames"];
flixel.system.layer.frames.FlxSpriteFrames.prototype = {
	destroy: function() {
		this.frames = null;
		this.framesHash = null;
		this.name = null;
	}
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.framesHash.set(frame.name,frame);
	}
	,__class__: flixel.system.layer.frames.FlxSpriteFrames
}
flixel.system.replay = {}
flixel.system.replay.CodeValuePair = function(Code,Value) {
	if(Value == null) Value = 0;
	if(Code == null) Code = 0;
	this.code = Code;
	this.value = Value;
};
$hxClasses["flixel.system.replay.CodeValuePair"] = flixel.system.replay.CodeValuePair;
flixel.system.replay.CodeValuePair.__name__ = ["flixel","system","replay","CodeValuePair"];
flixel.system.replay.CodeValuePair.prototype = {
	__class__: flixel.system.replay.CodeValuePair
}
flixel.system.replay.FlxReplay = function() {
	this.seed = 0;
	this.frame = 0;
	this.frameCount = 0;
	this.finished = false;
	this._frames = null;
	this._capacity = 0;
	this._marker = 0;
};
$hxClasses["flixel.system.replay.FlxReplay"] = flixel.system.replay.FlxReplay;
flixel.system.replay.FlxReplay.__name__ = ["flixel","system","replay","FlxReplay"];
flixel.system.replay.FlxReplay.prototype = {
	rewind: function() {
		this._marker = 0;
		this.frame = 0;
		this.finished = false;
	}
	,playNextFrame: function() {
		flixel.FlxG.inputs.reset();
		if(this._marker >= this.frameCount) {
			this.finished = true;
			return;
		}
		if(this._frames[this._marker].frame != this.frame++) return;
		var fr = this._frames[this._marker++];
		if(fr.keys != null) flixel.FlxG.keyboard.playback(fr.keys);
		if(fr.mouse != null) flixel.FlxG.mouse.playback(fr.mouse);
	}
	,recordFrame: function() {
		var continueFrame = true;
		var keysRecord = flixel.FlxG.keyboard.record();
		if(keysRecord == null) continueFrame = false;
		var mouseRecord = flixel.FlxG.mouse.record();
		if(mouseRecord == null) continueFrame = false;
		if(continueFrame) {
			this.frame++;
			return;
		}
		var frameRecorded = new flixel.system.replay.FrameRecord().create(this.frame++);
		frameRecorded.mouse = mouseRecord;
		frameRecorded.keys = keysRecord;
		this._frames[this.frameCount++] = frameRecorded;
		if(this.frameCount >= this._capacity) {
			this._capacity *= 2;
			flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		}
	}
	,save: function() {
		if(this.frameCount <= 0) return null;
		var output = this.seed + "\n";
		var i = 0;
		while(i < this.frameCount) output += this._frames[i++].save() + "\n";
		return output;
	}
	,init: function() {
		this._capacity = 100;
		this._frames = new Array();
		flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
		this.frameCount = 0;
	}
	,load: function(FileContents) {
		this.init();
		var lines = FileContents.split("\n");
		this.seed = Std.parseFloat(lines[0]);
		var line;
		var i = 1;
		var l = lines.length;
		while(i < l) {
			line = lines[i++];
			if(line.length > 3) {
				this._frames[this.frameCount++] = new flixel.system.replay.FrameRecord().load(line);
				if(this.frameCount >= this._capacity) {
					this._capacity *= 2;
					flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord(this._frames,this._capacity);
				}
			}
		}
		this.rewind();
	}
	,create: function(Seed) {
		this.destroy();
		this.init();
		this.seed = Seed;
		this.rewind();
	}
	,destroy: function() {
		if(this._frames == null) return;
		var i = this.frameCount - 1;
		while(i >= 0) this._frames[i--].destroy();
		this._frames = null;
	}
	,__class__: flixel.system.replay.FlxReplay
}
flixel.system.replay.FrameRecord = function() {
	this.frame = 0;
	this.keys = null;
	this.mouse = null;
};
$hxClasses["flixel.system.replay.FrameRecord"] = flixel.system.replay.FrameRecord;
flixel.system.replay.FrameRecord.__name__ = ["flixel","system","replay","FrameRecord"];
flixel.system.replay.FrameRecord.prototype = {
	load: function(Data) {
		var i;
		var l;
		var array = Data.split("k");
		this.frame = Std.parseInt(array[0]);
		array = array[1].split("m");
		var keyData = array[0];
		var mouseData = array[1];
		if(keyData.length > 0) {
			array = keyData.split(",");
			var keyPair;
			i = 0;
			l = array.length;
			while(i < l) {
				keyPair = array[i++].split(":");
				if(keyPair.length == 2) {
					if(this.keys == null) this.keys = new Array();
					this.keys.push(new flixel.system.replay.CodeValuePair(Std.parseInt(keyPair[0]),Std.parseInt(keyPair[1])));
				}
			}
		}
		if(mouseData.length > 0) {
			array = mouseData.split(",");
			if(array.length >= 4) this.mouse = new flixel.system.replay.MouseRecord(Std.parseInt(array[0]),Std.parseInt(array[1]),Std.parseInt(array[2]),Std.parseInt(array[3]));
		}
		return this;
	}
	,save: function() {
		var output = this.frame + "k";
		if(this.keys != null) {
			var object;
			var i = 0;
			var l = this.keys.length;
			while(i < l) {
				if(i > 0) output += ",";
				object = this.keys[i++];
				output += object.code + ":" + object.value;
			}
		}
		output += "m";
		if(this.mouse != null) output += this.mouse.x + "," + this.mouse.y + "," + this.mouse.button + "," + this.mouse.wheel;
		return output;
	}
	,destroy: function() {
		this.keys = null;
		this.mouse = null;
	}
	,create: function(Frame,Keys,Mouse) {
		this.frame = Math.floor(Frame);
		this.keys = Keys;
		this.mouse = Mouse;
		return this;
	}
	,__class__: flixel.system.replay.FrameRecord
}
flixel.system.replay.MouseRecord = function(X,Y,Button,Wheel) {
	this.x = X;
	this.y = Y;
	this.button = Button;
	this.wheel = Wheel;
};
$hxClasses["flixel.system.replay.MouseRecord"] = flixel.system.replay.MouseRecord;
flixel.system.replay.MouseRecord.__name__ = ["flixel","system","replay","MouseRecord"];
flixel.system.replay.MouseRecord.prototype = {
	__class__: flixel.system.replay.MouseRecord
}
flixel.system.ui = {}
flixel.system.ui.FlxFocusLostScreen = function() {
	flash.display.Sprite.call(this);
	var gfx = this.get_graphics();
	var screenWidth = flixel.FlxG.width * flixel.FlxCamera.defaultZoom | 0;
	var screenHeight = flixel.FlxG.height * flixel.FlxCamera.defaultZoom | 0;
	gfx.moveTo(0,0);
	gfx.beginFill(0,0.5);
	gfx.lineTo(screenWidth,0);
	gfx.lineTo(screenWidth,screenHeight);
	gfx.lineTo(0,screenHeight);
	gfx.lineTo(0,0);
	gfx.endFill();
	var halfWidth = screenWidth / 2 | 0;
	var halfHeight = screenHeight / 2 | 0;
	var helper = Math.min(halfWidth,halfHeight) / 3 | 0;
	gfx.moveTo(halfWidth - helper,halfHeight - helper);
	gfx.beginFill(16777215,0.65);
	gfx.lineTo(halfWidth + helper,halfHeight);
	gfx.lineTo(halfWidth - helper,halfHeight + helper);
	gfx.lineTo(halfWidth - helper,halfHeight - helper);
	gfx.endFill();
	var logo = new flash.display.Sprite();
	flixel.system.FlxAssets.drawLogo(logo.get_graphics());
	logo.set_scaleX(helper / 1000);
	if(logo.get_scaleX() < 0.2) logo.set_scaleX(0.2);
	logo.set_scaleY(logo.get_scaleX());
	logo.set_x(logo.set_y(5));
	logo.alpha = 0.35;
	this.addChild(logo);
	this.set_visible(false);
};
$hxClasses["flixel.system.ui.FlxFocusLostScreen"] = flixel.system.ui.FlxFocusLostScreen;
flixel.system.ui.FlxFocusLostScreen.__name__ = ["flixel","system","ui","FlxFocusLostScreen"];
flixel.system.ui.FlxFocusLostScreen.__super__ = flash.display.Sprite;
flixel.system.ui.FlxFocusLostScreen.prototype = $extend(flash.display.Sprite.prototype,{
	__class__: flixel.system.ui.FlxFocusLostScreen
});
flixel.system.ui.FlxSoundTray = function() {
	flash.display.Sprite.call(this);
	this.set_visible(false);
	this.set_scaleX(2);
	this.set_scaleY(2);
	var tmp = new flash.display.Bitmap(new flash.display.BitmapData(80,30,true,2130706432));
	this.set_x(flixel.FlxG.width / 2 * flixel.FlxCamera.defaultZoom - tmp.get_width() / 2 * this.get_scaleX());
	this.addChild(tmp);
	var text = new flash.text.TextField();
	text.set_width(tmp.get_width());
	text.set_height(tmp.get_height());
	text.multiline = true;
	text.set_wordWrap(true);
	text.selectable = false;
	var dtf = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,8,16777215);
	dtf.align = flash.text.TextFormatAlign.CENTER;
	text.set_defaultTextFormat(dtf);
	this.addChild(text);
	text.set_text("VOLUME");
	text.set_y(16);
	var bx = 10;
	var by = 14;
	this._bars = new Array();
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		tmp = new flash.display.Bitmap(new flash.display.BitmapData(4,i + 1,false,-1));
		tmp.set_x(bx);
		tmp.set_y(by);
		this.addChild(tmp);
		this._bars.push(tmp);
		bx += 6;
		by--;
	}
	this.set_y(-this.get_height());
	this.set_visible(false);
};
$hxClasses["flixel.system.ui.FlxSoundTray"] = flixel.system.ui.FlxSoundTray;
flixel.system.ui.FlxSoundTray.__name__ = ["flixel","system","ui","FlxSoundTray"];
flixel.system.ui.FlxSoundTray.__super__ = flash.display.Sprite;
flixel.system.ui.FlxSoundTray.prototype = $extend(flash.display.Sprite.prototype,{
	show: function(Silent) {
		if(Silent == null) Silent = false;
		if(!Silent) null;
		this._timer = 1;
		this.set_y(0);
		this.set_visible(true);
		this.active = true;
		var globalVolume = Math.round(flixel.FlxG.sound.volume * 10);
		if(flixel.FlxG.sound.muted) globalVolume = 0;
		var _g1 = 0, _g = this._bars.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < globalVolume) this._bars[i].alpha = 1; else this._bars[i].alpha = 0.5;
		}
	}
	,update: function(MS) {
		if(this._timer > 0) this._timer -= MS / 1000; else if(this.get_y() > -this.get_height()) {
			var _g = this;
			_g.set_y(_g.get_y() - MS / 1000 * flixel.FlxG.height * 2);
			if(this.get_y() <= -this.get_height()) {
				this.set_visible(false);
				this.active = false;
				flixel.FlxG.save.data.mute = flixel.FlxG.sound.muted;
				flixel.FlxG.save.data.volume = flixel.FlxG.sound.volume;
				flixel.FlxG.save.flush();
			}
		}
	}
	,__class__: flixel.system.ui.FlxSoundTray
});
flixel.system.ui.FlxSystemButton = function(IconPath,DownHandler,ToggleMode) {
	if(ToggleMode == null) ToggleMode = false;
	this.toggled = false;
	this.toggleMode = false;
	this.enabled = true;
	flash.display.Sprite.call(this);
	if(IconPath != null) {
		this.icon = new flash.display.Bitmap(openfl.Assets.getBitmapData(IconPath,false));
		this.addChild(this.icon);
	}
	this.buttonMode = true;
	this.downHandler = DownHandler;
	this.toggleMode = ToggleMode;
	this.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
};
$hxClasses["flixel.system.ui.FlxSystemButton"] = flixel.system.ui.FlxSystemButton;
flixel.system.ui.FlxSystemButton.__name__ = ["flixel","system","ui","FlxSystemButton"];
flixel.system.ui.FlxSystemButton.__super__ = flash.display.Sprite;
flixel.system.ui.FlxSystemButton.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function() {
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		this.icon = null;
		this.downHandler = null;
	}
	,onMouseOut: function(E) {
		this.alpha += 0.2;
	}
	,onMouseOver: function(E) {
		this.alpha -= 0.2;
	}
	,onMouseUp: function(E) {
		if(this.downHandler != null && this.enabled) {
			this.set_toggled(!this.toggled);
			this.downHandler.apply(null,[]);
		}
	}
	,changeIcon: function(IconPath) {
		if(this.icon != null) this.removeChild(this.icon);
		this.icon = new flash.display.Bitmap(openfl.Assets.getBitmapData(IconPath,false));
		this.addChild(this.icon);
	}
	,set_toggled: function(Value) {
		if(this.toggleMode) {
			if(Value) this.alpha = 0.3; else this.alpha = 1;
		}
		return this.toggled = Value;
	}
	,__class__: flixel.system.ui.FlxSystemButton
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{set_toggled:"set_toggled"})
});
flixel.text = {}
flixel.text.FlxText = function(X,Y,Width,Text,size,EmbeddedFont) {
	if(EmbeddedFont == null) EmbeddedFont = true;
	if(size == null) size = 8;
	this._heightInc = 0;
	this._widthInc = 0;
	this._regen = true;
	this.borderQuality = 1;
	this.borderSize = 1;
	this.borderColor = 0;
	this.borderStyle = 0;
	flixel.FlxSprite.call(this,X,Y);
	this._filters = [];
	var key = flixel.FlxG.bitmap.getUniqueKey("text");
	this.makeGraphic(Width,1,0,false,key);
	if(Text == null) Text = "";
	this._textField = new flash.text.TextField();
	this._textField.set_width(Width);
	this._textField.selectable = false;
	this._textField.multiline = true;
	this._textField.set_wordWrap(true);
	this._format = new flash.text.TextFormat(flixel.system.FlxAssets.FONT_DEFAULT,size,16777215);
	this._formatAdjusted = new flash.text.TextFormat();
	this._textField.set_defaultTextFormat(this._format);
	this._textField.set_text(Text);
	this._textField.embedFonts = EmbeddedFont;
	this._textField.set_height(Text.length <= 0?1:10);
	this.allowCollisions = 0;
	this.set_moves(false);
	if(Text != "") this.calcFrame(true);
};
$hxClasses["flixel.text.FlxText"] = flixel.text.FlxText;
flixel.text.FlxText.__name__ = ["flixel","text","FlxText"];
flixel.text.FlxText.__super__ = flixel.FlxSprite;
flixel.text.FlxText.prototype = $extend(flixel.FlxSprite.prototype,{
	clearFilters: function() {
		if(this._filters.length > 0) this.dirty = true;
		this._filters = [];
	}
	,removeFilter: function(filter) {
		var removed = HxOverrides.remove(this._filters,filter);
		if(removed) this.dirty = true;
	}
	,addFilter: function(filter,widthInc,heightInc) {
		if(heightInc == null) heightInc = 0;
		if(widthInc == null) widthInc = 0;
		if(this._widthInc != widthInc || this._heightInc != heightInc) this._regen = true;
		this._filters.push(filter);
		this.dirty = true;
	}
	,updateFormat: function(Format) {
		this._textField.setTextFormat(Format,0,this._textField.get_text().length);
	}
	,draw: function() {
		if(this._regen || this.dirty) this.calcFrame(true);
		flixel.FlxSprite.prototype.draw.call(this);
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region);
			this.set_frame(this.framesData.frames[0]);
			this.frames = 1;
		}
	}
	,convertTextAlignmentFromString: function(StrAlign) {
		if(StrAlign == "right") return flash.text.TextFormatAlign.RIGHT; else if(StrAlign == "center") return flash.text.TextFormatAlign.CENTER; else if(StrAlign == "justify") return flash.text.TextFormatAlign.JUSTIFY; else return flash.text.TextFormatAlign.LEFT;
	}
	,dtfCopy: function() {
		var defaultTextFormat = this._textField.get_defaultTextFormat();
		return new flash.text.TextFormat(defaultTextFormat.font,defaultTextFormat.size,defaultTextFormat.color,defaultTextFormat.bold,defaultTextFormat.italic,defaultTextFormat.underline,defaultTextFormat.url,defaultTextFormat.target,defaultTextFormat.align);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			if(this._filters != null) this._textField.set_filters(this._filters);
			this.regenGraphics();
			if(this._textField != null && this._textField.get_text() != null && this._textField.get_text().length > 0) {
				this._formatAdjusted.font = this._format.font;
				this._formatAdjusted.size = this._format.size;
				this._formatAdjusted.color = this._format.color;
				this._formatAdjusted.align = this._format.align;
				this._matrix.identity();
				this._matrix.translate(0.5 * this._widthInc | 0,0.5 * this._heightInc | 0);
				if(this._format.align == flash.text.TextFormatAlign.CENTER) {
					this._formatAdjusted.align = flash.text.TextFormatAlign.LEFT;
					this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					this._matrix.translate(Math.floor((this.width - this._textField.get_textWidth()) / 2),0);
				}
				if(this.borderStyle != 0) {
					var iterations = this.borderSize * this.borderQuality | 0;
					if(iterations <= 0) iterations = 1;
					var delta = this.borderSize / iterations;
					if(this.borderStyle == 1) {
						this._formatAdjusted.color = this.borderColor;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
						var _g = 0;
						while(_g < iterations) {
							var iter = _g++;
							this._matrix.translate(delta,delta);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
						}
						this._matrix.translate(-this.borderSize,-this.borderSize);
						this._formatAdjusted.color = this._format.color;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					} else if(this.borderStyle == 2) {
						this._formatAdjusted.color = this.borderColor;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
						var itd = delta;
						var _g1 = 1, _g = iterations + 1;
						while(_g1 < _g) {
							var iter = _g1++;
							this._matrix.translate(-itd,-itd);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(itd,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(itd,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(0,itd);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(0,itd);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(-itd,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(-itd,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(0,-itd);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(itd,0);
							itd += delta;
						}
						this._formatAdjusted.color = this._format.color;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					} else if(this.borderStyle == 3) {
						this._formatAdjusted.color = this.borderColor;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
						var itd = delta;
						var _g1 = 1, _g = iterations + 1;
						while(_g1 < _g) {
							var iter = _g1++;
							this._matrix.translate(-itd,-itd);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(itd * 2,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(0,itd * 2);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(-itd * 2,0);
							this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
							this._matrix.translate(itd,-itd);
							itd += delta;
						}
						this._formatAdjusted.color = this._format.color;
						this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					}
				}
				this.cachedGraphics.bitmap.draw(this._textField,this._matrix,this._colorTransform);
				this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
			}
			if(this.framePixels == null || this.framePixels.get_width() != this.cachedGraphics.bitmap.get_width() || this.framePixels.get_height() != this.cachedGraphics.bitmap.get_height()) {
				if(this.framePixels != null) this.framePixels.dispose();
				this.framePixels = new flash.display.BitmapData(this.cachedGraphics.bitmap.get_width(),this.cachedGraphics.bitmap.get_height(),true,0);
			}
			this.framePixels.copyPixels(this.cachedGraphics.bitmap,this._flashRect,this._flashPointZero);
			if(this.useColorTransform) this.framePixels.colorTransform(this._flashRect,this._colorTransform);
			this.origin.set(this.frameWidth * 0.5,this.frameHeight * 0.5);
		}
		this.dirty = false;
	}
	,regenGraphics: function() {
		if(this._regen) {
			this.set_height(this._textField.get_textHeight());
			var _g = this;
			_g.set_height(_g.height + 4);
			var key = this.cachedGraphics.key;
			flixel.FlxG.bitmap.remove(key);
			this.makeGraphic(this.width + this._widthInc | 0,this.height + this._heightInc | 0,0,false,key);
			this.frameHeight = this.height | 0;
			this._textField.set_height(this.height * 1.2);
			this._flashRect.x = 0;
			this._flashRect.y = 0;
			this._flashRect.width = this.width + this._widthInc;
			this._flashRect.height = this.height + this._heightInc;
			this._regen = false;
		} else this.cachedGraphics.bitmap.fillRect(this._flashRect,0);
	}
	,set_borderQuality: function(Value) {
		if(Value < 0) Value = 0; else if(Value > 1) Value = 1;
		if(Value != this.borderQuality && this.borderStyle != 0) this.dirty = true;
		this.borderQuality = Value;
		return Value;
	}
	,set_borderSize: function(Value) {
		if(Value != this.borderSize && this.borderStyle != 0) {
			this._regen = true;
			this.dirty = true;
		}
		this.borderSize = Value;
		return Value;
	}
	,set_borderColor: function(Color) {
		Color &= 16777215;
		if(this.borderColor != Color && this.borderStyle != 0) this.dirty = true;
		this.borderColor = Color;
		return Color;
	}
	,set_borderStyle: function(style) {
		if(style != this.borderStyle) {
			this.borderStyle = style;
			this.dirty = true;
		}
		return this.borderStyle;
	}
	,setBorderStyle: function(Style,Color,Size,Quality) {
		if(Quality == null) Quality = 1;
		if(Size == null) Size = 1;
		if(Color == null) Color = 0;
		this.set_borderStyle(Style);
		this.set_borderColor(Color);
		this.set_borderSize(Size);
		this.set_borderQuality(Quality);
	}
	,set_alignment: function(Alignment) {
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this.dirty = true;
		this._regen = true;
		return Alignment;
	}
	,get_alignment: function() {
		return js.Boot.__cast(this._format.align , String);
	}
	,set_wordWrap: function(value) {
		if(this._textField.get_wordWrap() != value) {
			this._textField.set_wordWrap(value);
			this._textField.multiline = value;
			this._regen = true;
		}
		return value;
	}
	,get_wordWrap: function() {
		return this._textField.get_wordWrap();
	}
	,set_bold: function(value) {
		if(this._format.bold != value) {
			this._format.bold = value;
			this._textField.set_defaultTextFormat(this._format);
			this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
			this._regen = true;
		}
		return value;
	}
	,get_bold: function() {
		return this._format.bold;
	}
	,set_systemFont: function(Font) {
		this._textField.embedFonts = false;
		this._format.font = Font;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Font;
	}
	,get_systemFont: function() {
		return this._format.font;
	}
	,get_embedded: function() {
		return this._textField.embedFonts = true;
	}
	,set_font: function(Font) {
		this._textField.embedFonts = true;
		this._format.font = openfl.Assets.getFont(Font).fontName;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Font;
	}
	,get_font: function() {
		return this._format.font;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		this._format.color = Color;
		this.color = Color;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this.dirty = true;
		return Color;
	}
	,set_size: function(Size) {
		this._format.size = Size;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Size;
	}
	,get_size: function() {
		return this._format.size;
	}
	,set_text: function(Text) {
		var ot = this._textField.get_text();
		this._textField.set_text(Text);
		if(this._textField.get_text() != ot) this._regen = true;
		return this._textField.get_text();
	}
	,get_text: function() {
		return this._textField.get_text();
	}
	,set_width: function(Width) {
		if(Width != this.width) {
			var newWidth = flixel.FlxSprite.prototype.set_width.call(this,Width);
			if(this._textField != null) this._textField.set_width(newWidth);
			this._regen = true;
		}
		return Width;
	}
	,setFormat: function(Font,Size,Color,Alignment,BorderStyle,BorderColor,Embedded) {
		if(Embedded == null) Embedded = true;
		if(BorderColor == null) BorderColor = 0;
		if(BorderStyle == null) BorderStyle = 0;
		if(Color == null) Color = 16777215;
		if(Size == null) Size = 8;
		if(Embedded) {
			if(Font == null) this._format.font = flixel.system.FlxAssets.FONT_DEFAULT; else this._format.font = openfl.Assets.getFont(Font).fontName;
		} else if(Font != null) this._format.font = Font;
		this._textField.embedFonts = Embedded;
		this._format.size = Size;
		Color &= 16777215;
		this._format.color = Color;
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this.set_borderStyle(BorderStyle);
		this.set_borderColor(BorderColor);
		this._regen = true;
		return this;
	}
	,destroy: function() {
		this._textField = null;
		this._format = null;
		this._formatAdjusted = null;
		this._filters = null;
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,__class__: flixel.text.FlxText
	,__properties__: $extend(flixel.FlxSprite.prototype.__properties__,{set_text:"set_text",get_text:"get_text",set_size:"set_size",get_size:"get_size",set_font:"set_font",get_font:"get_font",get_embedded:"get_embedded",set_systemFont:"set_systemFont",get_systemFont:"get_systemFont",set_bold:"set_bold",get_bold:"get_bold",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_alignment:"set_alignment",get_alignment:"get_alignment",set_borderStyle:"set_borderStyle",set_borderColor:"set_borderColor",set_borderSize:"set_borderSize",set_borderQuality:"set_borderQuality"})
});
flixel.text.pxText = {}
flixel.text.pxText.PxBitmapFont = function() {
	this._maxHeight = 0;
	this._bgTileID = -1;
	this._num_letters = 0;
	this._point = new flash.geom.Point();
	this._glyphs = new haxe.ds.IntMap();
};
$hxClasses["flixel.text.pxText.PxBitmapFont"] = flixel.text.pxText.PxBitmapFont;
flixel.text.pxText.PxBitmapFont.__name__ = ["flixel","text","pxText","PxBitmapFont"];
flixel.text.pxText.PxBitmapFont.store = function(PxHandle,PxFont) {
	flixel.text.pxText.PxBitmapFont._storedFonts.set(PxHandle,PxFont);
}
flixel.text.pxText.PxBitmapFont.fetch = function(PxHandle) {
	var f = flixel.text.pxText.PxBitmapFont._storedFonts.get(PxHandle);
	return f;
}
flixel.text.pxText.PxBitmapFont.clearStorage = function() {
	var $it0 = flixel.text.pxText.PxBitmapFont._storedFonts.iterator();
	while( $it0.hasNext() ) {
		var font = $it0.next();
		font.dispose();
	}
	flixel.text.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
}
flixel.text.pxText.PxBitmapFont.prototype = {
	setCachedGraphics: function(value) {
		if(this.cachedGraphics != null && this.cachedGraphics != value) {
			var _g = this.cachedGraphics, _g1 = _g.get_useCount();
			_g.set_useCount(_g1 - 1);
			_g1;
		}
		if(this.cachedGraphics != value && value != null) {
			var _g = value, _g1 = _g.get_useCount();
			_g.set_useCount(_g1 + 1);
			_g1;
		}
		this.cachedGraphics = value;
	}
	,get_numLetters: function() {
		return this._num_letters;
	}
	,get_bgTileID: function() {
		return this._bgTileID;
	}
	,get_pixels: function() {
		if(!this.cachedGraphics.isDumped) return this.cachedGraphics.bitmap;
		return null;
	}
	,getFontHeight: function() {
		return this._maxHeight;
	}
	,getTextWidth: function(PxText,PxLetterSpacing,PxFontScale) {
		if(PxFontScale == null) PxFontScale = 1;
		if(PxLetterSpacing == null) PxLetterSpacing = 0;
		var w = 0;
		var textLength = PxText.length;
		var _g1 = 0, _g = textLength;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			if(this._glyphs.exists(charCode)) w += this._glyphs.get(charCode).xadvance;
		}
		w = Math.round(w * PxFontScale);
		if(textLength > 1) w += (textLength - 1) * PxLetterSpacing;
		return w;
	}
	,render: function(DrawData,PxText,PxColor,PxSecondColor,PxAlpha,PxOffsetX,PxOffsetY,PxLetterSpacing,PxScale,PxUseColor) {
		if(PxUseColor == null) PxUseColor = true;
		var colorMultiplier = 1 / 255;
		var red = colorMultiplier;
		var green = colorMultiplier;
		var blue = colorMultiplier;
		if(PxUseColor) {
			red = (PxColor >> 16) * colorMultiplier;
			green = (PxColor >> 8 & 255) * colorMultiplier;
			blue = (PxColor & 255) * colorMultiplier;
		}
		PxSecondColor &= 16777215;
		red *= PxSecondColor >> 16;
		green *= PxSecondColor >> 8 & 255;
		blue *= PxSecondColor & 255;
		this._point.x = PxOffsetX;
		this._point.y = PxOffsetY;
		var glyph;
		var glyphWidth;
		var _g1 = 0, _g = PxText.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(PxText,i);
			glyph = this._glyphs.get(charCode);
			if(this._glyphs.exists(charCode)) {
				glyphWidth = glyph.xadvance;
				DrawData.push(glyph.tileID);
				DrawData.push(this._point.x + glyph.xoffset * PxScale);
				DrawData.push(this._point.y + glyph.yoffset * PxScale);
				DrawData.push(red);
				DrawData.push(green);
				DrawData.push(blue);
				this._point.x += glyphWidth * PxScale + PxLetterSpacing;
			}
		}
	}
	,setGlyph: function(Tiles,PxCharID,PxRect,PxOffsetX,PxOffsetY,PxAdvanceX) {
		if(PxAdvanceX == null) PxAdvanceX = 0;
		if(PxOffsetY == null) PxOffsetY = 0;
		if(PxOffsetX == null) PxOffsetX = 0;
		var tileID = Tiles.addTileRect(PxRect,flixel.text.pxText.PxBitmapFont.ZERO_POINT);
		var symbol = new flixel.text.pxText.PxFontSymbol();
		symbol.tileID = tileID;
		symbol.xoffset = PxOffsetX;
		symbol.yoffset = PxOffsetY;
		symbol.xadvance = PxAdvanceX;
		this._glyphs.set(PxCharID,symbol);
		this._num_letters++;
		if(Math.floor(PxRect.height) + PxOffsetY > this._maxHeight) this._maxHeight = Math.floor(PxRect.height) + PxOffsetY;
	}
	,dispose: function() {
		this._symbols = null;
		this._tileRects = null;
		this.setCachedGraphics(null);
		this._region = null;
		this._glyphs = null;
	}
	,prepareAngelCodeBitmapData: function(PxBitmapData,PxXMLData,PxSymbols) {
		var chars = null;
		var $it0 = PxXMLData.elements();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.get_nodeName() == "font") {
				var $it1 = node.elements();
				while( $it1.hasNext() ) {
					var nodeChild = $it1.next();
					if(nodeChild.get_nodeName() == "chars") {
						chars = nodeChild;
						break;
					}
				}
			}
		}
		var symbol;
		var maxX = 0;
		var maxY = 0;
		if(chars != null) {
			var $it2 = chars.elements();
			while( $it2.hasNext() ) {
				var node = $it2.next();
				if(node.get_nodeName() == "char") {
					symbol = new flixel.text.pxText._PxBitmapFont.HelperSymbol();
					symbol.x = Std.parseInt(node.get("x"));
					symbol.y = Std.parseInt(node.get("y"));
					symbol.width = Std.parseInt(node.get("width"));
					symbol.height = Std.parseInt(node.get("height"));
					symbol.xoffset = Std.parseInt(node.get("xoffset"));
					symbol.yoffset = Std.parseInt(node.get("yoffset"));
					symbol.xadvance = Std.parseInt(node.get("xadvance"));
					symbol.charCode = Std.parseInt(node.get("id"));
					PxSymbols.push(symbol);
					maxX = symbol.x + symbol.width;
					maxY = symbol.y + symbol.height;
				}
			}
		}
		return PxBitmapData;
	}
	,preparePixelizerBitmapData: function(PxBitmapData,PxRects) {
		var bgColor = PxBitmapData.getPixel(0,0);
		var cy = 0;
		var cx;
		while(cy < (PxBitmapData.___textureBuffer != null?PxBitmapData.___textureBuffer.height:0)) {
			var rowHeight = 0;
			cx = 0;
			while(cx < (PxBitmapData.___textureBuffer != null?PxBitmapData.___textureBuffer.width:0)) {
				if((PxBitmapData.getPixel(cx,cy) | 0) != bgColor) {
					var gx = cx;
					var gy = cy;
					while((PxBitmapData.getPixel(gx,cy) | 0) != bgColor) gx++;
					while((PxBitmapData.getPixel(cx,gy) | 0) != bgColor) gy++;
					var gw = gx - cx;
					var gh = gy - cy;
					PxRects.push(new flash.geom.Rectangle(cx,cy,gw,gh));
					if(gh > rowHeight) rowHeight = gh;
					if(gh > this._maxHeight) this._maxHeight = gh;
					cx += gw;
				}
				cx++;
			}
			cy += rowHeight + 1;
		}
		PxBitmapData.floodFill(0,0,0);
		return PxBitmapData;
	}
	,reset: function() {
		this.dispose();
		this._maxHeight = 0;
		this._glyphs = new haxe.ds.IntMap();
		this._bgTileID = -1;
		this._symbols = null;
		this._tileRects = null;
		this._glyphString = "";
	}
	,updateGlyphData: function(Tiles) {
		this._glyphs = new haxe.ds.IntMap();
		var rect;
		if(this._symbols != null) {
			this._glyphString = "";
			var point = new flash.geom.Point();
			var bd;
			var charString;
			var _g = 0, _g1 = this._symbols;
			while(_g < _g1.length) {
				var symbol = _g1[_g];
				++_g;
				rect = new flash.geom.Rectangle();
				rect.x = symbol.x;
				rect.y = symbol.y;
				rect.width = symbol.width;
				rect.height = symbol.height;
				point.x = symbol.xoffset;
				point.y = symbol.yoffset;
				charString = String.fromCharCode(symbol.charCode);
				this._glyphString += charString;
				var xadvance = symbol.xadvance;
				var charWidth = xadvance;
				if(rect.width > xadvance) {
					charWidth = symbol.width;
					point.x = 0;
				}
				if(charString != " " && charString != "") this.setGlyph(Tiles,symbol.charCode,rect,Math.floor(point.x),Math.floor(point.y),charWidth); else this.setGlyph(Tiles,symbol.charCode,rect,Math.floor(point.x),1,charWidth);
			}
		} else if(this._tileRects != null) {
			var _g1 = 0, _g = this._tileRects.length;
			while(_g1 < _g) {
				var letterID = _g1++;
				rect = this._tileRects[letterID];
				this.setGlyph(Tiles,HxOverrides.cca(this._glyphString,letterID),rect,0,0,rect.width | 0);
			}
		}
	}
	,loadAngelCode: function(pBitmapData,pXMLData) {
		this.reset();
		if(pBitmapData != null && pXMLData != null) {
			this._symbols = new Array();
			var result = this.prepareAngelCodeBitmapData(pBitmapData,pXMLData,this._symbols);
			var key = flixel.FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel.FlxG.bitmap.add(result,false,key));
			this.updateGlyphData(this.cachedGraphics.get_tilesheet());
		}
		return this;
	}
	,loadPixelizer: function(PxBitmapData,PxLetters) {
		this.reset();
		this._glyphString = PxLetters;
		if(PxBitmapData != null) {
			this._tileRects = [];
			var result = this.preparePixelizerBitmapData(PxBitmapData,this._tileRects);
			var key = flixel.FlxG.bitmap.getUniqueKey("font");
			this.setCachedGraphics(flixel.FlxG.bitmap.add(result,false,key));
			this._region = new flixel.system.layer.Region();
			this._region.width = this.cachedGraphics.bitmap.get_width();
			this._region.height = this.cachedGraphics.bitmap.get_height();
			var currRect;
			this.updateGlyphData(this.cachedGraphics.get_tilesheet());
		}
		return this;
	}
	,__class__: flixel.text.pxText.PxBitmapFont
	,__properties__: {get_numLetters:"get_numLetters",get_pixels:"get_pixels",get_bgTileID:"get_bgTileID"}
}
flixel.text.pxText._PxBitmapFont = {}
flixel.text.pxText._PxBitmapFont.HelperSymbol = function() {
};
$hxClasses["flixel.text.pxText._PxBitmapFont.HelperSymbol"] = flixel.text.pxText._PxBitmapFont.HelperSymbol;
flixel.text.pxText._PxBitmapFont.HelperSymbol.__name__ = ["flixel","text","pxText","_PxBitmapFont","HelperSymbol"];
flixel.text.pxText._PxBitmapFont.HelperSymbol.prototype = {
	__class__: flixel.text.pxText._PxBitmapFont.HelperSymbol
}
flixel.text.pxText.PxFontSymbol = function() {
};
$hxClasses["flixel.text.pxText.PxFontSymbol"] = flixel.text.pxText.PxFontSymbol;
flixel.text.pxText.PxFontSymbol.__name__ = ["flixel","text","pxText","PxFontSymbol"];
flixel.text.pxText.PxFontSymbol.prototype = {
	__class__: flixel.text.pxText.PxFontSymbol
}
flixel.tile = {}
flixel.tile.FlxTile = function(Tilemap,Index,Width,Height,Visible,AllowCollisions) {
	this.mapIndex = 0;
	this.callbackFunction = null;
	flixel.FlxObject.call(this,0,0,Width,Height);
	this.set_immovable(true);
	this.set_moves(false);
	this.filter = null;
	this.tilemap = Tilemap;
	this.index = Index;
	this.set_visible(Visible);
	this.allowCollisions = AllowCollisions;
};
$hxClasses["flixel.tile.FlxTile"] = flixel.tile.FlxTile;
flixel.tile.FlxTile.__name__ = ["flixel","tile","FlxTile"];
flixel.tile.FlxTile.__super__ = flixel.FlxObject;
flixel.tile.FlxTile.prototype = $extend(flixel.FlxObject.prototype,{
	destroy: function() {
		this.callbackFunction = null;
		this.tilemap = null;
		flixel.FlxObject.prototype.destroy.call(this);
	}
	,__class__: flixel.tile.FlxTile
});
flixel.tile.FlxTileblock = function(X,Y,Width,Height) {
	flixel.FlxSprite.call(this,X,Y);
	this.makeGraphic(Width,Height,0,true);
	this.set_active(false);
	this.set_immovable(true);
	this.set_moves(false);
};
$hxClasses["flixel.tile.FlxTileblock"] = flixel.tile.FlxTileblock;
flixel.tile.FlxTileblock.__name__ = ["flixel","tile","FlxTileblock"];
flixel.tile.FlxTileblock.__super__ = flixel.FlxSprite;
flixel.tile.FlxTileblock.prototype = $extend(flixel.FlxSprite.prototype,{
	loadTiles: function(TileGraphic,TileWidth,TileHeight,Empties) {
		if(Empties == null) Empties = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		if(TileGraphic == null) return this;
		var sprite = new flixel.FlxSprite().loadGraphic(TileGraphic,true,false,TileWidth,TileHeight);
		var spriteWidth = sprite.width | 0;
		var spriteHeight = sprite.height | 0;
		var total = sprite.frames + Empties;
		var regen = false;
		if(this.width % sprite.width != 0) {
			this.set_width((this.width / spriteWidth + 1 | 0) * spriteWidth);
			regen = true;
		}
		if(this.height % sprite.height != 0) {
			this.set_height((this.height / spriteHeight + 1 | 0) * spriteHeight);
			regen = true;
		}
		if(regen) this.makeGraphic(this.width | 0,this.height | 0,0,true); else flixel.util.FlxSpriteUtil.fill(this,0);
		var row = 0;
		var column;
		var destinationX;
		var destinationY = 0;
		var widthInTiles = this.width / spriteWidth | 0;
		var heightInTiles = this.height / spriteHeight | 0;
		while(row < heightInTiles) {
			destinationX = 0;
			column = 0;
			while(column < widthInTiles) {
				if(Math.random() * total > Empties) {
					sprite.animation.randomFrame();
					sprite.calcFrame(true);
					this.stamp(sprite,destinationX,destinationY);
				}
				destinationX += spriteWidth;
				column++;
			}
			destinationY += spriteHeight;
			row++;
		}
		sprite.destroy();
		return this;
	}
	,__class__: flixel.tile.FlxTileblock
});
flixel.tile.FlxTilemap = function() {
	this._randomLambda = null;
	this._randomChoices = null;
	this._randomIndices = null;
	this.customTileRemap = null;
	this.tileScaleHack = 1.01;
	this.scaleY = 1.0;
	this.scaleX = 1.0;
	flixel.FlxObject.call(this);
	this.collisionType = flixel.system.FlxCollisionType.TILEMAP;
	this.auto = 0;
	this.widthInTiles = 0;
	this.heightInTiles = 0;
	this.totalTiles = 0;
	this._buffers = new Array();
	this._flashPoint = new flash.geom.Point();
	this._flashRect = null;
	this._data = null;
	this._tileWidth = 0;
	this._tileHeight = 0;
	this._rectIDs = null;
	this._tileObjects = null;
	this.set_immovable(true);
	this.set_moves(false);
	this.cameras = null;
	this._lastVisualDebug = flixel.FlxG["debugger"].visualDebug;
	this._startingIndex = 0;
	this._helperPoint = new flash.geom.Point();
};
$hxClasses["flixel.tile.FlxTilemap"] = flixel.tile.FlxTilemap;
flixel.tile.FlxTilemap.__name__ = ["flixel","tile","FlxTilemap"];
flixel.tile.FlxTilemap.arrayToCSV = function(Data,Width,Invert) {
	if(Invert == null) Invert = false;
	var row = 0;
	var column;
	var csv = "";
	var Height = Data.length / Width | 0;
	var index;
	var offset = 0;
	while(row < Height) {
		column = 0;
		while(column < Width) {
			index = Data[offset];
			if(Invert) {
				if(index == 0) index = 1; else if(index == 1) index = 0;
			}
			if(column == 0) {
				if(row == 0) csv += index; else csv += "\n" + index;
			} else csv += ", " + index;
			column++;
			offset++;
		}
		row++;
	}
	return csv;
}
flixel.tile.FlxTilemap.bitmapToCSV = function(Bitmap,Invert,Scale,ColorMap) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	if(Scale < 1) Scale = 1;
	if(Scale > 1) {
		var bd = Bitmap;
		Bitmap = new flash.display.BitmapData((Bitmap.___textureBuffer != null?Bitmap.___textureBuffer.width:0) * Scale,(Bitmap.___textureBuffer != null?Bitmap.___textureBuffer.height:0) * Scale);
		var bdW = bd.___textureBuffer != null?bd.___textureBuffer.width:0;
		var bdH = bd.___textureBuffer != null?bd.___textureBuffer.height:0;
		var pCol = 0;
		var _g = 0;
		while(_g < bdW) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < bdH) {
				var j = _g1++;
				pCol = bd.getPixel(i,j);
				var _g2 = 0;
				while(_g2 < Scale) {
					var k = _g2++;
					var _g3 = 0;
					while(_g3 < Scale) {
						var m = _g3++;
						Bitmap.setPixel(i * Scale + k,j * Scale + m,pCol);
					}
				}
			}
		}
	}
	var row = 0;
	var column;
	var pixel;
	var csv = "";
	var bitmapWidth = Bitmap.___textureBuffer != null?Bitmap.___textureBuffer.width:0;
	var bitmapHeight = Bitmap.___textureBuffer != null?Bitmap.___textureBuffer.height:0;
	while(row < bitmapHeight) {
		column = 0;
		while(column < bitmapWidth) {
			pixel = Bitmap.getPixel(column,row);
			if(ColorMap != null) pixel = flixel.util.FlxArrayUtil.indexOf_Int(ColorMap,pixel); else if(Invert && pixel > 0 || !Invert && pixel == 0) pixel = 1; else pixel = 0;
			if(column == 0) {
				if(row == 0) csv += pixel; else csv += "\n" + pixel;
			} else csv += ", " + pixel;
			column++;
		}
		row++;
	}
	return csv;
}
flixel.tile.FlxTilemap.imageToCSV = function(ImageFile,Invert,Scale) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	var tempBitmapData;
	if(js.Boot.__instanceof(ImageFile,String)) tempBitmapData = flixel.system.FlxAssets.getBitmapData(ImageFile); else tempBitmapData = Type.createInstance(ImageFile,[]).bitmapData;
	return flixel.tile.FlxTilemap.bitmapToCSV(tempBitmapData,Invert,Scale);
}
flixel.tile.FlxTilemap.__super__ = flixel.FlxObject;
flixel.tile.FlxTilemap.prototype = $extend(flixel.FlxObject.prototype,{
	set_scaleY: function(Scale) {
		Scale = Math.abs(Scale);
		this.scaleY = Scale;
		this._scaledTileHeight = this._tileHeight * Scale;
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		if(this.cameras != null) {
			var i = 0;
			var l = this.cameras.length;
			while(i < l) {
				if(this._buffers[i] != null) this._buffers[i].updateRows(this._tileHeight,this.heightInTiles,Scale,this.cameras[i]);
				i++;
			}
		}
		return Scale;
	}
	,set_scaleX: function(Scale) {
		Scale = Math.abs(Scale);
		this.scaleX = Scale;
		this._scaledTileWidth = this._tileWidth * Scale;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		if(this.cameras != null) {
			var i = 0;
			var l = this.cameras.length;
			while(i < l) {
				if(this._buffers[i] != null) this._buffers[i].updateColumns(this._tileWidth,this.widthInTiles,Scale,this.cameras[i]);
				i++;
			}
		}
		return Scale;
	}
	,set_forceComplexRender: function(Value) {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].forceComplexRender = Value;
			}
		}
		return flixel.FlxObject.prototype.set_forceComplexRender.call(this,Value);
	}
	,updateBuffers: function() {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._buffers = new Array();
	}
	,tileToFlxSprite: function(X,Y,NewTile) {
		if(NewTile == null) NewTile = 0;
		var rowIndex = X + Y * this.widthInTiles;
		var rect = null;
		var tile = this._tileObjects[this._data[rowIndex]];
		if(tile == null || !tile.visible) {
		} else {
			var rx = (this._data[rowIndex] - this._startingIndex) * (this._tileWidth + this.region.spacingX);
			var ry = 0;
			if((rx | 0) >= this.region.width) {
				ry = (rx / this.region.width | 0) * (this._tileHeight + this.region.spacingY);
				rx %= this.region.width;
			}
			rect = new flash.geom.Rectangle(rx + this.region.startX,ry + this.region.startY,this._tileWidth,this._tileHeight);
		}
		var pt = new flash.geom.Point(0,0);
		var tileSprite = new flixel.FlxSprite();
		tileSprite.makeGraphic(this._tileWidth,this._tileHeight,0,true);
		tileSprite.set_x(X * this._tileWidth + this.x);
		tileSprite.set_y(Y * this._tileHeight + this.y);
		tileSprite.scale.set_x(this.scaleX);
		tileSprite.scale.set_y(this.scaleY);
		if(rect != null) tileSprite.get_pixels().copyPixels(this.cachedGraphics.bitmap,rect,pt);
		tileSprite.dirty = true;
		tileSprite.updateFrameData();
		if(NewTile >= 0) this.setTile(X,Y,NewTile);
		return tileSprite;
	}
	,updateFrameData: function() {
		if(this.cachedGraphics != null && this._tileWidth >= 1 && this._tileHeight >= 1) {
			this.framesData = this.cachedGraphics.get_tilesheet().getSpriteSheetFrames(this.region,new flash.geom.Point(0,0));
			this._rectIDs = new Array();
			flixel.util.FlxArrayUtil.setLength_Int(this._rectIDs,this.totalTiles);
			var i = 0;
			while(i < this.totalTiles) this.updateTile(i++);
		}
	}
	,updateTile: function(Index) {
		var tile = this._tileObjects[this._data[Index]];
		if(tile == null || !tile.visible) {
			this._rectIDs[Index] = -1;
			return;
		}
		this._rectIDs[Index] = this.framesData.frames[this._data[Index] - this._startingIndex].tileID;
	}
	,autoTile: function(Index) {
		if(this._data[Index] == 0) return;
		this._data[Index] = 0;
		if(Index - this.widthInTiles < 0 || this._data[Index - this.widthInTiles] > 0) this._data[Index] += 1;
		if(Index % this.widthInTiles >= this.widthInTiles - 1 || this._data[Index + 1] > 0) this._data[Index] += 2;
		if((Index + this.widthInTiles | 0) >= this.totalTiles || this._data[Index + this.widthInTiles] > 0) this._data[Index] += 4;
		if(Index % this.widthInTiles <= 0 || this._data[Index - 1] > 0) this._data[Index] += 8;
		if(this.auto == 2 && this._data[Index] == 15) {
			if(Index % this.widthInTiles > 0 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles - 1] <= 0) this._data[Index] = 1;
			if(Index % this.widthInTiles > 0 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles - 1] <= 0) this._data[Index] = 2;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles + 1] <= 0) this._data[Index] = 4;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles + 1] <= 0) this._data[Index] = 8;
		}
		this._data[Index] += 1;
	}
	,rayHit: function(Start,End,Resolution) {
		if(Resolution == null) Resolution = 1;
		var Result = null;
		var step = this._scaledTileWidth;
		if(this._scaledTileHeight < this._scaledTileWidth) step = this._scaledTileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._scaledTileWidth);
			tileY = Math.floor(curY / this._scaledTileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._scaledTileWidth | 0;
				tileY *= this._scaledTileHeight | 0;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._scaledTileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._scaledTileHeight) {
					if(Result == null) Result = new flixel.util.FlxPoint();
					Result.set_x(rx);
					Result.set_y(ry);
					return Result;
				}
				q = tileY;
				if(deltaY < 0) q += this._scaledTileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._scaledTileWidth) {
					if(Result == null) Result = new flixel.util.FlxPoint();
					Result.set_x(rx);
					Result.set_y(ry);
					return Result;
				}
				return null;
			}
			i++;
		}
		return null;
	}
	,ray: function(Start,End,Result,Resolution) {
		if(Resolution == null) Resolution = 1;
		var step = this._scaledTileWidth;
		if(this._scaledTileHeight < this._scaledTileWidth) step = this._scaledTileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._scaledTileWidth);
			tileY = Math.floor(curY / this._scaledTileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._scaledTileWidth | 0;
				tileY *= this._scaledTileHeight | 0;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._scaledTileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._scaledTileHeight) {
					if(Result != null) {
						Result.set_x(rx);
						Result.set_y(ry);
					}
					return false;
				}
				q = tileY;
				if(deltaY < 0) q += this._scaledTileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._scaledTileWidth) {
					if(Result != null) {
						Result.set_x(rx);
						Result.set_y(ry);
					}
					return false;
				}
				return true;
			}
			i++;
		}
		return true;
	}
	,getBounds: function(Bounds) {
		if(Bounds == null) Bounds = new flixel.util.FlxRect();
		return (function($this) {
			var $r;
			Bounds.x = $this.x;
			Bounds.y = $this.y;
			Bounds.width = $this.width;
			Bounds.height = $this.height;
			$r = Bounds;
			return $r;
		}(this));
	}
	,follow: function(Camera,Border,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = true;
		if(Border == null) Border = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		Camera.setBounds(this.x + Border * this._scaledTileWidth,this.y + Border * this._scaledTileHeight,this.width - Border * this._scaledTileWidth * 2,this.height - Border * this._scaledTileHeight * 2,UpdateWorld);
	}
	,setTileProperties: function(Tile,AllowCollisions,Callback,CallbackFilter,Range) {
		if(Range == null) Range = 1;
		if(AllowCollisions == null) AllowCollisions = 4369;
		if(Range <= 0) Range = 1;
		var tile;
		var i = Tile;
		var l = Tile + Range;
		while(i < l) {
			tile = this._tileObjects[i++];
			tile.allowCollisions = AllowCollisions;
			tile.callbackFunction = Callback;
			tile.filter = CallbackFilter;
		}
	}
	,setTileByIndex: function(Index,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(Index >= this._data.length) return false;
		var ok = true;
		this._data[Index] = Tile;
		if(!UpdateGraphics) return ok;
		this.setDirty();
		if(this.auto == 0) {
			this.updateTile(Index);
			return ok;
		}
		var i;
		var row = (Index / this.widthInTiles | 0) - 1;
		var rowLength = row + 3;
		var column = Index % this.widthInTiles - 1;
		var columnHeight = column + 3;
		while(row < rowLength) {
			column = columnHeight - 3;
			while(column < columnHeight) {
				if(row >= 0 && row < this.heightInTiles && column >= 0 && column < this.widthInTiles) {
					i = row * this.widthInTiles + column;
					this.autoTile(i);
					this.updateTile(i);
				}
				column++;
			}
			row++;
		}
		return ok;
	}
	,setTile: function(X,Y,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(X >= this.widthInTiles || Y >= this.heightInTiles) return false;
		return this.setTileByIndex(Y * this.widthInTiles + X,Tile,UpdateGraphics);
	}
	,getTileCoords: function(Index,Midpoint) {
		if(Midpoint == null) Midpoint = true;
		var array = null;
		var point;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				point = new flixel.util.FlxPoint(this.x + (i % this.widthInTiles | 0) * this._scaledTileWidth,this.y + (i / this.widthInTiles | 0) * this._scaledTileHeight);
				if(Midpoint) {
					var _g = point;
					_g.set_x(_g.x + this._scaledTileWidth * 0.5);
					var _g = point;
					_g.set_y(_g.y + this._scaledTileHeight * 0.5);
				}
				if(array == null) array = new Array();
				array.push(point);
			}
			i++;
		}
		return array;
	}
	,getTileInstances: function(Index) {
		var array = null;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				if(array == null) array = [];
				array.push(i);
			}
			i++;
		}
		return array;
	}
	,getTileCollisions: function(Index) {
		return this._tileObjects[Index].allowCollisions;
	}
	,getTileByIndex: function(Index) {
		return this._data[Index];
	}
	,getTile: function(X,Y) {
		return this._data[Y * this.widthInTiles + X];
	}
	,overlapsPoint: function(WorldPoint,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return this._tileObjects[this._data[Math.floor(Math.floor((WorldPoint.y - this.y) / this._scaledTileHeight) * this.widthInTiles + (WorldPoint.x - this.x) / this._scaledTileWidth)]].allowCollisions > 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		WorldPoint.set_x(WorldPoint.x - Camera.scroll.x);
		WorldPoint.set_y(WorldPoint.y - Camera.scroll.y);
		this.getScreenXY(this._point,Camera);
		return this._tileObjects[this._data[((WorldPoint.y - WorldPoint.y) / this._scaledTileHeight | 0) * this.widthInTiles + (WorldPoint.x - WorldPoint.x) / this._scaledTileWidth | 0]].allowCollisions > 0;
	}
	,overlapsWithCallback: function(Object,Callback,FlipCallbackParams,Position) {
		if(FlipCallbackParams == null) FlipCallbackParams = false;
		var results = false;
		var X = this.x;
		var Y = this.y;
		if(Position != null) {
			X = Position.x;
			Y = Position.y;
		}
		var selectionX = Math.floor((Object.x - X) / this._scaledTileWidth);
		var selectionY = Math.floor((Object.y - Y) / this._scaledTileHeight);
		var selectionWidth = selectionX + Math.ceil(Object.width / this._scaledTileWidth) + 1;
		var selectionHeight = selectionY + Math.ceil(Object.height / this._scaledTileHeight) + 1;
		if(selectionX < 0) selectionX = 0;
		if(selectionY < 0) selectionY = 0;
		if(selectionWidth > this.widthInTiles) selectionWidth = this.widthInTiles;
		if(selectionHeight > this.heightInTiles) selectionHeight = this.heightInTiles;
		var rowStart = selectionY * this.widthInTiles;
		var row = selectionY;
		var column;
		var tile;
		var overlapFound;
		var deltaX = X - this.last.x;
		var deltaY = Y - this.last.y;
		while(row < selectionHeight) {
			column = selectionX;
			while(column < selectionWidth) {
				var dataIndex = this._data[rowStart + column];
				if(dataIndex < 0) {
					column++;
					continue;
				}
				tile = this._tileObjects[dataIndex];
				tile.set_width(this._scaledTileWidth);
				tile.set_height(this._scaledTileHeight);
				tile.set_x(X + column * tile.width);
				tile.set_y(Y + row * tile.height);
				tile.last.set_x(tile.x - deltaX);
				tile.last.set_y(tile.y - deltaY);
				overlapFound = Object.x + Object.width > tile.x && Object.x < tile.x + tile.width && Object.y + Object.height > tile.y && Object.y < tile.y + tile.height;
				if(tile.allowCollisions != 0) {
					if(Callback != null) {
						if(FlipCallbackParams) overlapFound = Callback(Object,tile); else overlapFound = Callback(tile,Object);
					}
				}
				if(overlapFound) {
					if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
						tile.mapIndex = rowStart + column;
						tile.callbackFunction(tile,Object);
					}
					if(tile.allowCollisions != 0) results = true;
				}
				column++;
			}
			rowStart += this.widthInTiles;
			row++;
		}
		return results;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var objType = ObjectOrGroup.collisionType;
		if(ObjectOrGroup.collisionType == flixel.system.FlxCollisionType.SPRITEGROUP) {
			ObjectOrGroup = Reflect.field(ObjectOrGroup,"group");
			objType = flixel.system.FlxCollisionType.GROUP;
		}
		if(objType == flixel.system.FlxCollisionType.GROUP) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.get_members();
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					objType = basic.collisionType;
					if(objType == flixel.system.FlxCollisionType.OBJECT || objType == flixel.system.FlxCollisionType.TILEMAP) {
						this._point.set_x(X);
						this._point.set_y(Y);
						if(this.overlapsWithCallback(js.Boot.__cast(basic , flixel.FlxObject),null,false,this._point)) results = true;
					} else if(this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(objType == flixel.system.FlxCollisionType.OBJECT || objType == flixel.system.FlxCollisionType.TILEMAP) {
			this._point.set_x(X);
			this._point.set_y(Y);
			return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject),null,false,this._point);
		}
		return false;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		var objType = ObjectOrGroup.collisionType;
		if(objType == flixel.system.FlxCollisionType.SPRITEGROUP) {
			ObjectOrGroup = Reflect.field(ObjectOrGroup,"group");
			objType = flixel.system.FlxCollisionType.GROUP;
		}
		if(objType == flixel.system.FlxCollisionType.GROUP) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.get_members();
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					objType = basic.collisionType;
					if(objType == flixel.system.FlxCollisionType.OBJECT || objType == flixel.system.FlxCollisionType.TILEMAP) {
						if(this.overlapsWithCallback(js.Boot.__cast(basic , flixel.FlxObject))) results = true;
					} else if(this.overlaps(basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(objType == flixel.system.FlxCollisionType.OBJECT || objType == flixel.system.FlxCollisionType.TILEMAP) return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , flixel.FlxObject));
		return false;
	}
	,walkPath: function(Data,Start,Points) {
		Points.push(new flixel.util.FlxPoint(this.x + Math.floor(Start % this.widthInTiles) * this._scaledTileWidth + this._scaledTileWidth * 0.5,this.y + Math.floor(Start / this.widthInTiles) * this._scaledTileHeight + this._scaledTileHeight * 0.5));
		if(Data[Start] == 0) return;
		var left = Start % this.widthInTiles > 0;
		var right = Start % this.widthInTiles < this.widthInTiles - 1;
		var up = Start / this.widthInTiles > 0;
		var down = Start / this.widthInTiles < this.heightInTiles - 1;
		var current = Data[Start];
		var i;
		if(up) {
			i = Start - this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right) {
			i = Start + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(down) {
			i = Start + this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left) {
			i = Start - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && right) {
			i = Start - this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right && down) {
			i = Start + this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left && down) {
			i = Start + this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && left) {
			i = Start - this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		return;
	}
	,computePathDistance: function(StartIndex,EndIndex,WideDiagonal) {
		var mapSize = this.widthInTiles * this.heightInTiles;
		var distances = new Array();
		flixel.util.FlxArrayUtil.setLength_Int(distances,mapSize);
		var i = 0;
		while(i < mapSize) {
			if(this._tileObjects[this._data[i]].allowCollisions != 0) distances[i] = -2; else distances[i] = -1;
			i++;
		}
		distances[StartIndex] = 0;
		var distance = 1;
		var neighbors = [StartIndex];
		var current;
		var currentIndex;
		var left;
		var right;
		var up;
		var down;
		var currentLength;
		var foundEnd = false;
		while(neighbors.length > 0) {
			current = neighbors;
			neighbors = new Array();
			i = 0;
			currentLength = current.length;
			while(i < currentLength) {
				currentIndex = current[i++];
				if(currentIndex == (EndIndex | 0)) {
					foundEnd = true;
					neighbors = [];
					break;
				}
				left = currentIndex % this.widthInTiles > 0;
				right = currentIndex % this.widthInTiles < this.widthInTiles - 1;
				up = currentIndex / this.widthInTiles > 0;
				down = currentIndex / this.widthInTiles < this.heightInTiles - 1;
				var index;
				if(up) {
					index = currentIndex - this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right) {
					index = currentIndex + 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(down) {
					index = currentIndex + this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left) {
					index = currentIndex - 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && right) {
					index = currentIndex - this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right && down) {
					index = currentIndex + this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left && down) {
					index = currentIndex + this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && left) {
					index = currentIndex - this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
			}
			distance++;
		}
		if(!foundEnd) distances = null;
		return distances;
	}
	,raySimplifyPath: function(Points) {
		var source = Points[0];
		var lastIndex = -1;
		var node;
		var i = 1;
		var l = Points.length;
		while(i < l) {
			node = Points[i++];
			if(node == null) continue;
			if(this.ray(source,node,this._point)) {
				if(lastIndex >= 0) Points[lastIndex] = null;
			} else source = Points[lastIndex];
			lastIndex = i - 1;
		}
	}
	,simplifyPath: function(Points) {
		var deltaPrevious;
		var deltaNext;
		var last = Points[0];
		var node;
		var i = 1;
		var l = Points.length - 1;
		while(i < l) {
			node = Points[i];
			deltaPrevious = (node.x - last.x) / (node.y - last.y);
			deltaNext = (node.x - Points[i + 1].x) / (node.y - Points[i + 1].y);
			if(last.x == Points[i + 1].x || last.y == Points[i + 1].y || deltaPrevious == deltaNext) Points[i] = null; else last = node;
			i++;
		}
	}
	,findPath: function(Start,End,Simplify,RaySimplify,WideDiagonal) {
		if(WideDiagonal == null) WideDiagonal = true;
		if(RaySimplify == null) RaySimplify = false;
		if(Simplify == null) Simplify = true;
		var startIndex = ((Start.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((Start.x - this.x) / this._scaledTileWidth | 0);
		var endIndex = ((End.y - this.y) / this._scaledTileHeight | 0) * this.widthInTiles + ((End.x - this.x) / this._scaledTileWidth | 0);
		if(this._tileObjects[this._data[startIndex]].allowCollisions > 0 || this._tileObjects[this._data[endIndex]].allowCollisions > 0) return null;
		var distances = this.computePathDistance(startIndex,endIndex,WideDiagonal);
		if(distances == null) return null;
		var points = new Array();
		this.walkPath(distances,endIndex,points);
		var node;
		node = points[points.length - 1];
		node.set_x(Start.x);
		node.set_y(Start.y);
		node = points[0];
		node.set_x(End.x);
		node.set_y(End.y);
		if(Simplify) this.simplifyPath(points);
		if(RaySimplify) this.raySimplifyPath(points);
		var path = [];
		var i = points.length - 1;
		while(i >= 0) {
			node = points[i--];
			if(node != null) path.push(node);
		}
		return path;
	}
	,setDirty: function(Dirty) {
		if(Dirty == null) Dirty = true;
		var i = 0;
		var l = this._buffers.length;
		while(i < l) this._buffers[i++].dirty = Dirty;
	}
	,getData: function(Simple) {
		if(Simple == null) Simple = false;
		if(!Simple) return this._data;
		var i = 0;
		var l = this._data.length;
		var data = new Array();
		flixel.util.FlxArrayUtil.setLength_Int(data,l);
		while(i < l) {
			data[i] = this._tileObjects[this._data[i]].allowCollisions > 0?1:0;
			i++;
		}
		return data;
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
		var camera;
		var buffer;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i];
			if(!camera.visible || !camera.exists) continue;
			if(this._buffers[i] == null) {
				this._buffers[i] = new flixel.tile.FlxTilemapBuffer(this._tileWidth,this._tileHeight,this.widthInTiles,this.heightInTiles,camera,this.scaleX,this.scaleY);
				this._buffers[i].forceComplexRender = this.forceComplexRender;
			}
			buffer = this._buffers[i++];
			buffer.dirty = true;
			this.drawTilemap(buffer,camera);
			flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,drawDebugOnCamera: function(Camera) {
		var buffer = null;
		var l = flixel.FlxG.cameras.list.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			if(flixel.FlxG.cameras.list[i] == Camera) {
				buffer = this._buffers[i];
				break;
			}
		}
		if(buffer == null) return;
		this._helperPoint.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		this._helperPoint.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		var tileID;
		var debugColor;
		var drawX;
		var drawY;
		this._point.set_x(Camera.scroll.x * this.scrollFactor.x - this.x);
		this._point.set_y(Camera.scroll.y * this.scrollFactor.y - this.y);
		var screenXInTiles = Math.floor(this._point.x / this._scaledTileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._scaledTileHeight);
		var screenRows = buffer.rows;
		var screenColumns = buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		var debugTile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				tileID = this._rectIDs[columnIndex];
				if(tileID != -1) {
					drawX = this._helperPoint.x + columnIndex % this.widthInTiles * this._scaledTileWidth;
					drawY = this._helperPoint.y + Math.floor(columnIndex / this.widthInTiles) * this._scaledTileHeight;
					tile = this._tileObjects[this._data[columnIndex]];
					if(tile != null) {
						if(tile.allowCollisions <= 0) debugColor = -16776961; else if(tile.allowCollisions != 4369) debugColor = -16181; else debugColor = -16744448;
						var gfx = Camera._debugLayer.get_graphics();
						gfx.lineStyle(1,debugColor,0.5);
						gfx.drawRect(drawX,drawY,this._scaledTileWidth,this._scaledTileHeight);
					}
				}
				this._flashPoint.x += this._scaledTileWidth;
				column++;
				columnIndex++;
			}
			rowIndex += this.widthInTiles;
			this._flashPoint.y += this._scaledTileHeight;
			row++;
		}
	}
	,drawTilemap: function(Buffer,Camera) {
		this._helperPoint.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		this._helperPoint.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		var tileID;
		var drawX;
		var drawY;
		var hackScaleX = this.tileScaleHack * this.scaleX;
		var hackScaleY = this.tileScaleHack * this.scaleY;
		var drawItem = Camera.getDrawStackItem(this.cachedGraphics,false);
		var currDrawData = drawItem.drawData;
		var currIndex = drawItem.position;
		this._point.set_x(Camera.scroll.x * this.scrollFactor.x - this.x);
		this._point.set_y(Camera.scroll.y * this.scrollFactor.y - this.y);
		var screenXInTiles = Math.floor(this._point.x / this._scaledTileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._scaledTileHeight);
		var screenRows = Buffer.rows;
		var screenColumns = Buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		var debugTile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				tileID = this._rectIDs[columnIndex];
				if(tileID != -1) {
					drawX = this._helperPoint.x + columnIndex % this.widthInTiles * this._scaledTileWidth;
					drawY = this._helperPoint.y + Math.floor(columnIndex / this.widthInTiles) * this._scaledTileHeight;
					currDrawData[currIndex++] = Math.floor(drawX);
					currDrawData[currIndex++] = Math.floor(drawY);
					currDrawData[currIndex++] = tileID;
					currDrawData[currIndex++] = hackScaleX;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = hackScaleY;
				}
				column++;
				columnIndex++;
			}
			rowIndex += this.widthInTiles;
			row++;
		}
		drawItem.position = currIndex;
		Buffer.x = screenXInTiles * this._scaledTileWidth;
		Buffer.y = screenYInTiles * this._scaledTileHeight;
	}
	,update: function() {
		if(this._lastVisualDebug != flixel.FlxG["debugger"].visualDebug) {
			this._lastVisualDebug = flixel.FlxG["debugger"].visualDebug;
			this.setDirty();
		}
		flixel.FlxObject.prototype.update.call(this);
	}
	,setCustomTileMappings: function(mappings,randomIndices,randomChoices,randomLambda) {
		this.customTileRemap = mappings;
		this._randomIndices = randomIndices;
		this._randomChoices = randomChoices;
		this._randomLambda = randomLambda;
		if(this._randomIndices != null && (this._randomChoices == null || this._randomChoices.length == 0)) throw "You must provide valid 'randomChoices' if you wish to randomize tilemap indicies, please read documentation of 'setCustomTileMappings' function.";
	}
	,loadMap: function(MapData,TileGraphic,TileWidth,TileHeight,AutoTile,StartingIndex,DrawIndex,CollideIndex) {
		if(CollideIndex == null) CollideIndex = 1;
		if(DrawIndex == null) DrawIndex = 1;
		if(StartingIndex == null) StartingIndex = 0;
		if(AutoTile == null) AutoTile = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		this.auto = AutoTile;
		this._startingIndex = StartingIndex <= 0?0:StartingIndex;
		if(js.Boot.__instanceof(MapData,String)) {
			this._data = new Array();
			var columns;
			var rows = MapData.split("\n");
			this.heightInTiles = rows.length;
			this.widthInTiles = 0;
			var row = 0;
			var column;
			while(row < this.heightInTiles) {
				columns = rows[row++].split(",");
				if(columns.length <= 1) {
					this.heightInTiles = this.heightInTiles - 1;
					continue;
				}
				if(this.widthInTiles == 0) this.widthInTiles = columns.length;
				column = 0;
				while(column < this.widthInTiles) this._data.push(Std.parseInt(columns[column++]));
			}
		} else if(js.Boot.__instanceof(MapData,Array)) this._data = MapData; else throw "Unexpected MapData format '" + Std.string(Type["typeof"](MapData)) + "' passed into loadMap. Map data must be CSV string or Array<Int>.";
		var i;
		this.totalTiles = this._data.length;
		if(this.auto > 0) {
			this._startingIndex = 1;
			DrawIndex = 1;
			CollideIndex = 1;
			i = 0;
			while(i < this.totalTiles) this.autoTile(i++);
		}
		if(this.customTileRemap != null) {
			i = 0;
			while(i < this.totalTiles) {
				var old_index = this._data[i];
				var new_index = old_index;
				if(old_index < this.customTileRemap.length) new_index = this.customTileRemap[old_index];
				this._data[i] = new_index;
				i++;
			}
		}
		if(this._randomIndices != null) {
			var randLambda = this._randomLambda != null?this._randomLambda:Math.random;
			i = 0;
			while(i < this.totalTiles) {
				var old_index = this._data[i];
				var j = 0;
				var new_index = old_index;
				var _g = 0, _g1 = this._randomIndices;
				while(_g < _g1.length) {
					var rand = _g1[_g];
					++_g;
					if(old_index == rand) {
						var k = randLambda() * this._randomChoices[j].length | 0;
						new_index = this._randomChoices[j][k];
					}
					j++;
				}
				this._data[i] = new_index;
				i++;
			}
		}
		this.set_cachedGraphics(flixel.FlxG.bitmap.add(TileGraphic));
		this._tileWidth = TileWidth;
		if(this._tileWidth <= 0) this._tileWidth = this.cachedGraphics.bitmap.get_height();
		this._tileHeight = TileHeight;
		if(this._tileHeight <= 0) this._tileHeight = this._tileWidth;
		if(!js.Boot.__instanceof(TileGraphic,flixel.util.loaders.TextureRegion)) {
			this.region = new flixel.system.layer.Region(0,0,this._tileWidth,this._tileHeight);
			this.region.width = this.cachedGraphics.bitmap.get_width();
			this.region.height = this.cachedGraphics.bitmap.get_height();
		} else {
			var spriteRegion = TileGraphic;
			this.region = spriteRegion.region.clone();
			if(this.region.tileWidth > 0) this._tileWidth = this.region.tileWidth; else this.region.tileWidth = this._tileWidth;
			if(this.region.tileHeight > 0) this._tileHeight = this.region.tileWidth; else this.region.tileHeight = this._tileHeight;
		}
		this._tileObjects = new Array();
		var length = this.region.get_numTiles();
		length += this._startingIndex;
		var _g = 0;
		while(_g < length) {
			var i1 = _g++;
			this._tileObjects[i1] = new flixel.tile.FlxTile(this,i1,this._tileWidth,this._tileHeight,i1 >= DrawIndex,i1 >= CollideIndex?this.allowCollisions:0);
		}
		this._scaledTileWidth = this._tileWidth * this.scaleX;
		this._scaledTileHeight = this._tileHeight * this.scaleY;
		this.set_width(this.widthInTiles * this._scaledTileWidth);
		this.set_height(this.heightInTiles * this._scaledTileHeight);
		this.updateFrameData();
		return this;
	}
	,destroy: function() {
		this._flashPoint = null;
		this._flashRect = null;
		var i = 0;
		var l;
		if(this._tileObjects != null) {
			l = this._tileObjects.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._tileObjects[i1].destroy();
			}
			this._tileObjects = null;
		}
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._data = null;
		this._helperPoint = null;
		this._rectIDs = null;
		flixel.FlxObject.prototype.destroy.call(this);
	}
	,__class__: flixel.tile.FlxTilemap
	,__properties__: $extend(flixel.FlxObject.prototype.__properties__,{set_scaleX:"set_scaleX",set_scaleY:"set_scaleY"})
});
flixel.tile.FlxTilemapBuffer = function(TileWidth,TileHeight,WidthInTiles,HeightInTiles,Camera,ScaleX,ScaleY) {
	if(ScaleY == null) ScaleY = 1.0;
	if(ScaleX == null) ScaleX = 1.0;
	this.forceComplexRender = false;
	this.updateColumns(TileWidth,WidthInTiles,ScaleX,Camera);
	this.updateRows(TileHeight,HeightInTiles,ScaleY,Camera);
	this.dirty = true;
};
$hxClasses["flixel.tile.FlxTilemapBuffer"] = flixel.tile.FlxTilemapBuffer;
flixel.tile.FlxTilemapBuffer.__name__ = ["flixel","tile","FlxTilemapBuffer"];
flixel.tile.FlxTilemapBuffer.prototype = {
	updateRows: function(TileHeight,HeightInTiles,ScaleY,Camera) {
		if(ScaleY == null) ScaleY = 1.0;
		if(HeightInTiles < 0) HeightInTiles = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.rows = Math.ceil(Camera.height / (TileHeight * ScaleY)) + 1;
		if(this.rows > HeightInTiles) this.rows = HeightInTiles;
		this.height = this.rows * TileHeight * ScaleY | 0;
	}
	,updateColumns: function(TileWidth,WidthInTiles,ScaleX,Camera) {
		if(ScaleX == null) ScaleX = 1.0;
		if(WidthInTiles < 0) WidthInTiles = 0;
		if(Camera == null) Camera = flixel.FlxG.camera;
		this.columns = Math.ceil(Camera.width / (TileWidth * ScaleX)) + 1;
		if(this.columns > WidthInTiles) this.columns = WidthInTiles;
		this.width = this.columns * TileWidth * ScaleX | 0;
	}
	,destroy: function() {
	}
	,__class__: flixel.tile.FlxTilemapBuffer
}
flixel.tweens.FlxEase = function() { }
$hxClasses["flixel.tweens.FlxEase"] = flixel.tweens.FlxEase;
flixel.tweens.FlxEase.__name__ = ["flixel","tweens","FlxEase"];
flixel.tweens.FlxEase.quadIn = function(t) {
	return t * t;
}
flixel.tweens.FlxEase.quadOut = function(t) {
	return -t * (t - 2);
}
flixel.tweens.FlxEase.quadInOut = function(t) {
	return t <= .5?t * t * 2:1 - --t * t * 2;
}
flixel.tweens.FlxEase.cubeIn = function(t) {
	return t * t * t;
}
flixel.tweens.FlxEase.cubeOut = function(t) {
	return 1 + --t * t * t;
}
flixel.tweens.FlxEase.cubeInOut = function(t) {
	return t <= .5?t * t * t * 4:1 + --t * t * t * 4;
}
flixel.tweens.FlxEase.quartIn = function(t) {
	return t * t * t * t;
}
flixel.tweens.FlxEase.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
}
flixel.tweens.FlxEase.quartInOut = function(t) {
	return t <= .5?t * t * t * t * 8:(1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
}
flixel.tweens.FlxEase.quintIn = function(t) {
	return t * t * t * t * t;
}
flixel.tweens.FlxEase.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
}
flixel.tweens.FlxEase.quintInOut = function(t) {
	return (t *= 2) < 1?t * t * t * t * t / 2:((t -= 2) * t * t * t * t + 2) / 2;
}
flixel.tweens.FlxEase.sineIn = function(t) {
	return -Math.cos(flixel.tweens.FlxEase.PI2 * t) + 1;
}
flixel.tweens.FlxEase.sineOut = function(t) {
	return Math.sin(flixel.tweens.FlxEase.PI2 * t);
}
flixel.tweens.FlxEase.sineInOut = function(t) {
	return -Math.cos(flixel.tweens.FlxEase.PI * t) / 2 + .5;
}
flixel.tweens.FlxEase.bounceIn = function(t) {
	t = 1 - t;
	if(t < flixel.tweens.FlxEase.B1) return 1 - 7.5625 * t * t;
	if(t < flixel.tweens.FlxEase.B2) return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75);
	if(t < flixel.tweens.FlxEase.B4) return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375);
	return 1 - (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375);
}
flixel.tweens.FlxEase.bounceOut = function(t) {
	if(t < flixel.tweens.FlxEase.B1) return 7.5625 * t * t;
	if(t < flixel.tweens.FlxEase.B2) return 7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75;
	if(t < flixel.tweens.FlxEase.B4) return 7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375;
	return 7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375;
}
flixel.tweens.FlxEase.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < flixel.tweens.FlxEase.B1) return (1 - 7.5625 * t * t) / 2;
		if(t < flixel.tweens.FlxEase.B2) return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75)) / 2;
		if(t < flixel.tweens.FlxEase.B4) return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375)) / 2;
		return (1 - (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < flixel.tweens.FlxEase.B1) return 7.5625 * t * t / 2 + .5;
	if(t < flixel.tweens.FlxEase.B2) return (7.5625 * (t - flixel.tweens.FlxEase.B3) * (t - flixel.tweens.FlxEase.B3) + .75) / 2 + .5;
	if(t < flixel.tweens.FlxEase.B4) return (7.5625 * (t - flixel.tweens.FlxEase.B5) * (t - flixel.tweens.FlxEase.B5) + .9375) / 2 + .5;
	return (7.5625 * (t - flixel.tweens.FlxEase.B6) * (t - flixel.tweens.FlxEase.B6) + .984375) / 2 + .5;
}
flixel.tweens.FlxEase.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
}
flixel.tweens.FlxEase.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
}
flixel.tweens.FlxEase.circInOut = function(t) {
	return t <= .5?(Math.sqrt(1 - t * t * 4) - 1) / -2:(Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
}
flixel.tweens.FlxEase.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
}
flixel.tweens.FlxEase.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
}
flixel.tweens.FlxEase.expoInOut = function(t) {
	return t < .5?Math.pow(2,10 * (t * 2 - 1)) / 2:(-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
}
flixel.tweens.FlxEase.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
}
flixel.tweens.FlxEase.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
}
flixel.tweens.FlxEase.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
}
flixel.tweens.misc = {}
flixel.tweens.misc.AngleTween = function(complete,type) {
	if(type == null) type = 0;
	this.angle = 0;
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.misc.AngleTween"] = flixel.tweens.misc.AngleTween;
flixel.tweens.misc.AngleTween.__name__ = ["flixel","tweens","misc","AngleTween"];
flixel.tweens.misc.AngleTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.AngleTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.angle = (this._start + this._range * this._t) % 360;
		if(this.angle < 0) this.angle += 360;
	}
	,tween: function(fromAngle,toAngle,duration,ease) {
		this._start = this.angle = fromAngle;
		var d = toAngle - this.angle;
		var a = Math.abs(d);
		if(a > 181) this._range = (360 - a) * (d > 0?-1:1); else if(a < 179) this._range = d; else this._range = flixel.util.FlxRandom.floatRanged(180,-180);
		this._target = duration;
		this._ease = ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.misc.AngleTween
});
flixel.tweens.misc.ColorTween = function(complete,type) {
	if(type == null) type = 0;
	this.alpha = 1;
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.misc.ColorTween"] = flixel.tweens.misc.ColorTween;
flixel.tweens.misc.ColorTween.__name__ = ["flixel","tweens","misc","ColorTween"];
flixel.tweens.misc.ColorTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.ColorTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.alpha = this._startA + this._rangeA * this._t;
		this.red = (this._startR + this._rangeR * this._t) * 255 | 0;
		this.green = (this._startG + this._rangeG * this._t) * 255 | 0;
		this.blue = (this._startB + this._rangeB * this._t) * 255 | 0;
		this.color = this.red << 16 | this.green << 8 | this.blue;
	}
	,tween: function(duration,fromColor,toColor,fromAlpha,toAlpha,ease) {
		if(toAlpha == null) toAlpha = 1;
		if(fromAlpha == null) fromAlpha = 1;
		fromColor &= 16777215;
		toColor &= 16777215;
		this.color = fromColor;
		this.red = fromColor >> 16 & 255;
		this.green = fromColor >> 8 & 255;
		this.blue = fromColor & 255;
		this._startR = this.red / 255;
		this._startG = this.green / 255;
		this._startB = this.blue / 255;
		this._rangeR = (toColor >> 16 & 255) / 255 - this._startR;
		this._rangeG = (toColor >> 8 & 255) / 255 - this._startG;
		this._rangeB = (toColor & 255) / 255 - this._startB;
		this._startA = this.alpha = fromAlpha;
		this._rangeA = toAlpha - this.alpha;
		this._target = duration;
		this._ease = ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.misc.ColorTween
});
flixel.tweens.misc.MultiVarTween = function(complete,type) {
	if(type == null) type = 0;
	this._vars = new Array();
	this._start = new Array();
	this._range = new Array();
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.misc.MultiVarTween"] = flixel.tweens.misc.MultiVarTween;
flixel.tweens.misc.MultiVarTween.__name__ = ["flixel","tweens","misc","MultiVarTween"];
flixel.tweens.misc.MultiVarTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.MultiVarTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		var i = this._vars.length;
		while(i-- > 0) if(this._object != null) Reflect.setProperty(this._object,this._vars[i],this._start[i] + this._range[i] * this._t);
	}
	,tween: function(object,properties,duration,ease) {
		this._object = object;
		flixel.util.FlxArrayUtil.setLength_String(this._vars,0);
		flixel.util.FlxArrayUtil.setLength_Float(this._start,0);
		flixel.util.FlxArrayUtil.setLength_Float(this._range,0);
		this._target = duration;
		this._ease = ease;
		var p;
		var fields = null;
		if(Reflect.isObject(properties)) fields = Reflect.fields(properties); else throw "Unsupported MultiVar properties container - use Object containing key/value pairs.";
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			if(Reflect.getProperty(object,p1) == null) throw "The Object does not have the property \"" + p1 + "\", or it is not accessible.";
			var a = Reflect.getProperty(object,p1);
			if(Math.isNaN(a)) throw "The property \"" + p1 + "\" is not numeric.";
			this._vars.push(p1);
			this._start.push(a);
			this._range.push(Reflect.getProperty(properties,p1) - a);
		}
		this.start();
		return this;
	}
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
		this._vars = null;
		this._start = null;
		this._range = null;
	}
	,__class__: flixel.tweens.misc.MultiVarTween
});
flixel.tweens.misc.NumTween = function(complete,type) {
	if(type == null) type = 0;
	this.value = 0;
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.misc.NumTween"] = flixel.tweens.misc.NumTween;
flixel.tweens.misc.NumTween.__name__ = ["flixel","tweens","misc","NumTween"];
flixel.tweens.misc.NumTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.NumTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.value = this._start + this._range * this._t;
	}
	,tween: function(fromValue,toValue,duration,ease) {
		this._start = this.value = fromValue;
		this._range = toValue - this.value;
		this._target = duration;
		this._ease = ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.misc.NumTween
});
flixel.tweens.misc.VarTween = function(complete,type) {
	if(type == null) type = 0;
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.misc.VarTween"] = flixel.tweens.misc.VarTween;
flixel.tweens.misc.VarTween.__name__ = ["flixel","tweens","misc","VarTween"];
flixel.tweens.misc.VarTween.__super__ = flixel.tweens.FlxTween;
flixel.tweens.misc.VarTween.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		if(!this._isInt) Reflect.setProperty(this._object,this._property,this._start + this._range * this._t); else Reflect.setProperty(this._object,this._property,this._start + this._range * this._t | 0);
	}
	,tween: function(object,property,to,duration,ease) {
		this._object = object;
		this._ease = ease;
		if(!Reflect.isObject(object)) throw "A valid object was not passed.";
		this._property = property;
		if(Reflect.getProperty(this._object,property) == null) throw "The Object does not have the property\"" + property + "\", or it is not accessible.";
		var a = Reflect.getProperty(this._object,property);
		if(Math.isNaN(a)) throw "The property \"" + property + "\" is not numeric.";
		this._start = a;
		this._range = to - this._start;
		this._target = duration;
		this._isInt = Type["typeof"](a) == ValueType.TInt;
		this.start();
		return this;
	}
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,__class__: flixel.tweens.misc.VarTween
});
flixel.tweens.motion = {}
flixel.tweens.motion.Motion = function(duration,complete,type,ease) {
	if(type == null) type = 0;
	this.y = 0;
	this.x = 0;
	flixel.tweens.FlxTween.call(this,duration,type,complete,ease);
};
$hxClasses["flixel.tweens.motion.Motion"] = flixel.tweens.motion.Motion;
flixel.tweens.motion.Motion.__name__ = ["flixel","tweens","motion","Motion"];
flixel.tweens.motion.Motion.__super__ = flixel.tweens.FlxTween;
flixel.tweens.motion.Motion.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	postUpdate: function() {
		if(this._object != null) this._object.setPosition(this.x,this.y);
	}
	,update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		this.postUpdate();
	}
	,setObject: function(object) {
		this._object = object;
		this._object.set_immovable(true);
		return this;
	}
	,destroy: function() {
		flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,__class__: flixel.tweens.motion.Motion
});
flixel.tweens.motion.CircularMotion = function(complete,type) {
	if(type == null) type = 0;
	this._centerX = this._centerY = 0;
	this._radius = this.angle = 0;
	this._angleStart = this._angleFinish = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
};
$hxClasses["flixel.tweens.motion.CircularMotion"] = flixel.tweens.motion.CircularMotion;
flixel.tweens.motion.CircularMotion.__name__ = ["flixel","tweens","motion","CircularMotion"];
flixel.tweens.motion.CircularMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.CircularMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	get_circumference: function() {
		return this._radius * flixel.tweens.motion.CircularMotion._CIRC;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.angle = this._angleStart + this._angleFinish * this._t;
		this.x = this._centerX + Math.cos(this.angle) * this._radius;
		this.y = this._centerY + Math.sin(this.angle) * this._radius;
		if(this.finished) this.postUpdate();
	}
	,setMotion: function(CenterX,CenterY,Radius,Angle,Clockwise,DurationOrSpeed,UseDuration,Ease) {
		if(UseDuration == null) UseDuration = true;
		this._centerX = CenterX;
		this._centerY = CenterY;
		this._radius = Radius;
		this.angle = this._angleStart = Angle * Math.PI / -180;
		this._angleFinish = flixel.tweens.motion.CircularMotion._CIRC * (Clockwise?1:-1);
		if(UseDuration) this._target = DurationOrSpeed; else this._target = this._radius * flixel.tweens.motion.CircularMotion._CIRC / DurationOrSpeed;
		this._ease = Ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.motion.CircularMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_circumference:"get_circumference"})
});
flixel.tweens.motion.CubicMotion = function(complete,type) {
	if(type == null) type = 0;
	this._fromX = this._fromY = this._toX = this._toY = 0;
	this._aX = this._aY = this._bX = this._bY = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
};
$hxClasses["flixel.tweens.motion.CubicMotion"] = flixel.tweens.motion.CubicMotion;
flixel.tweens.motion.CubicMotion.__name__ = ["flixel","tweens","motion","CubicMotion"];
flixel.tweens.motion.CubicMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.CubicMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this._t * this._t * this._t * (this._toX + 3 * (this._aX - this._bX) - this._fromX) + 3 * this._t * this._t * (this._fromX - 2 * this._aX + this._bX) + 3 * this._t * (this._aX - this._fromX) + this._fromX;
		this.y = this._t * this._t * this._t * (this._toY + 3 * (this._aY - this._bY) - this._fromY) + 3 * this._t * this._t * (this._fromY - 2 * this._aY + this._bY) + 3 * this._t * (this._aY - this._fromY) + this._fromY;
		if(this.finished) this.postUpdate();
	}
	,setMotion: function(fromX,fromY,aX,aY,bX,bY,toX,toY,duration,ease) {
		this.x = this._fromX = fromX;
		this.y = this._fromY = fromY;
		this._aX = aX;
		this._aY = aY;
		this._bX = bX;
		this._bY = bY;
		this._toX = toX;
		this._toY = toY;
		this._target = duration;
		this._ease = ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.motion.CubicMotion
});
flixel.tweens.motion.LinearMotion = function(complete,type) {
	if(type == null) type = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
	this._fromX = this._fromY = this._moveX = this._moveY = 0;
	this._distance = -1;
};
$hxClasses["flixel.tweens.motion.LinearMotion"] = flixel.tweens.motion.LinearMotion;
flixel.tweens.motion.LinearMotion.__name__ = ["flixel","tweens","motion","LinearMotion"];
flixel.tweens.motion.LinearMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.LinearMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	get_distance: function() {
		if(this._distance >= 0) return this._distance;
		return this._distance = Math.sqrt(this._moveX * this._moveX + this._moveY * this._moveY);
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this._fromX + this._moveX * this._t;
		this.y = this._fromY + this._moveY * this._t;
		if(this.x == this._fromX + this._moveX && this.y == this._fromY + this._moveY && this.active && this._time >= this._target) this.finished = true;
		if(this.finished) this.postUpdate();
	}
	,setMotion: function(FromX,FromY,ToX,ToY,DurationOrSpeed,UseDuration,Ease) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._moveX = ToX - FromX;
		this._moveY = ToY - FromY;
		if(UseDuration) this._target = DurationOrSpeed; else this._target = this.get_distance() / DurationOrSpeed;
		this._ease = Ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.motion.LinearMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_distance:"get_distance"})
});
flixel.tweens.motion.LinearPath = function(complete,type) {
	if(type == null) type = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
	this._points = new Array();
	this._pointD = new Array();
	this._pointT = new Array();
	this.distance = this._speed = this._index = 0;
	this._pointD[0] = this._pointT[0] = 0;
};
$hxClasses["flixel.tweens.motion.LinearPath"] = flixel.tweens.motion.LinearPath;
flixel.tweens.motion.LinearPath.__name__ = ["flixel","tweens","motion","LinearPath"];
flixel.tweens.motion.LinearPath.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.LinearPath.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	get_pointCount: function() {
		return this._points.length;
	}
	,updatePath: function() {
		if(this._points.length < 2) throw "A LinearPath must have at least 2 points to operate.";
		if(this._pointD.length == this._pointT.length) return;
		var i = 0;
		while(i < this._points.length) this._pointT[i] = this._pointD[i++] / this.distance;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		var td;
		var tt;
		if(!this._backward && this._points != null) {
			if(this._index < this._points.length - 1) while(this._t > this._pointT[this._index + 1]) {
				this._index++;
				if(this._index == this._points.length - 1) {
					this._index -= 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index + 1] - td;
			td = (this._t - td) / tt;
			this._prevPoint = this._points[this._index];
			this._nextPoint = this._points[this._index + 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		} else if(this._points != null) {
			if(this._index > 0) while(this._t < this._pointT[this._index - 1]) {
				this._index -= 1;
				if(this._index == 0) {
					this._index += 1;
					break;
				}
			}
			td = this._pointT[this._index];
			tt = this._pointT[this._index - 1] - td;
			td = (this._t - td) / tt;
			this._prevPoint = this._points[this._index];
			this._nextPoint = this._points[this._index - 1];
			this.x = this._prevPoint.x + (this._nextPoint.x - this._prevPoint.x) * td;
			this.y = this._prevPoint.y + (this._nextPoint.y - this._prevPoint.y) * td;
		}
		flixel.tweens.motion.Motion.prototype.postUpdate.call(this);
	}
	,start: function() {
		if(!this._backward) this._index = 0; else this._index = this._points.length - 1;
		flixel.tweens.motion.Motion.prototype.start.call(this);
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this._points.length == 0) throw "No points have been added to the path yet.";
		return this._points[index % this._points.length];
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		if(this._last != null) {
			this.distance += Math.sqrt((x - this._last.x) * (x - this._last.x) + (y - this._last.y) * (y - this._last.y));
			this._pointD[this._points.length] = this.distance;
		}
		this._points[this._points.length] = this._last = new flixel.util.FlxPoint(x,y);
		return this;
	}
	,setMotion: function(DurationOrSpeed,UseDuration,Ease) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this._target = DurationOrSpeed;
			this._speed = this.distance / DurationOrSpeed;
		} else {
			this._target = this.distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this._ease = Ease;
		this.start();
		return this;
	}
	,destroy: function() {
		flixel.tweens.motion.Motion.prototype.destroy.call(this);
		this._points = null;
		this._pointD = null;
		this._pointT = null;
		this._last = null;
		this._prevPoint = null;
		this._nextPoint = null;
	}
	,__class__: flixel.tweens.motion.LinearPath
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_pointCount:"get_pointCount"})
});
flixel.tweens.motion.MotionType = $hxClasses["flixel.tweens.motion.MotionType"] = { __ename__ : ["flixel","tweens","motion","MotionType"], __constructs__ : ["LINEAR","CIRCULAR","QUAD","CUBIC"] }
flixel.tweens.motion.MotionType.LINEAR = ["LINEAR",0];
flixel.tweens.motion.MotionType.LINEAR.toString = $estr;
flixel.tweens.motion.MotionType.LINEAR.__enum__ = flixel.tweens.motion.MotionType;
flixel.tweens.motion.MotionType.CIRCULAR = ["CIRCULAR",1];
flixel.tweens.motion.MotionType.CIRCULAR.toString = $estr;
flixel.tweens.motion.MotionType.CIRCULAR.__enum__ = flixel.tweens.motion.MotionType;
flixel.tweens.motion.MotionType.QUAD = ["QUAD",2];
flixel.tweens.motion.MotionType.QUAD.toString = $estr;
flixel.tweens.motion.MotionType.QUAD.__enum__ = flixel.tweens.motion.MotionType;
flixel.tweens.motion.MotionType.CUBIC = ["CUBIC",3];
flixel.tweens.motion.MotionType.CUBIC.toString = $estr;
flixel.tweens.motion.MotionType.CUBIC.__enum__ = flixel.tweens.motion.MotionType;
flixel.tweens.motion.PathType = $hxClasses["flixel.tweens.motion.PathType"] = { __ename__ : ["flixel","tweens","motion","PathType"], __constructs__ : ["LINEAR","QUAD"] }
flixel.tweens.motion.PathType.LINEAR = ["LINEAR",0];
flixel.tweens.motion.PathType.LINEAR.toString = $estr;
flixel.tweens.motion.PathType.LINEAR.__enum__ = flixel.tweens.motion.PathType;
flixel.tweens.motion.PathType.QUAD = ["QUAD",1];
flixel.tweens.motion.PathType.QUAD.toString = $estr;
flixel.tweens.motion.PathType.QUAD.__enum__ = flixel.tweens.motion.PathType;
flixel.tweens.motion.QuadMotion = function(complete,type) {
	if(type == null) type = 0;
	this._distance = -1;
	this._fromX = this._fromY = this._toX = this._toY = 0;
	this._controlX = this._controlY = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
};
$hxClasses["flixel.tweens.motion.QuadMotion"] = flixel.tweens.motion.QuadMotion;
flixel.tweens.motion.QuadMotion.__name__ = ["flixel","tweens","motion","QuadMotion"];
flixel.tweens.motion.QuadMotion.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.QuadMotion.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	get_distance: function() {
		if(this._distance >= 0) return this._distance;
		var a = flixel.tweens.motion.QuadMotion.point;
		var b = flixel.tweens.motion.QuadMotion.point2;
		a.set_x(this.x - 2 * this._controlX + this._toX);
		a.set_y(this.y - 2 * this._controlY + this._toY);
		b.set_x(2 * this._controlX - 2 * this.x);
		b.set_y(2 * this._controlY - 2 * this.y);
		var A = 4 * (a.x * a.x + a.y * a.y), B = 4 * (a.x * b.x + a.y * b.y), C = b.x * b.x + b.y * b.y, ABC = 2 * Math.sqrt(A + B + C), A2 = Math.sqrt(A), A32 = 2 * A * A2, C2 = 2 * Math.sqrt(C), BA = B / A2;
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		this.x = this._fromX * (1 - this._t) * (1 - this._t) + this._controlX * 2 * (1 - this._t) * this._t + this._toX * this._t * this._t;
		this.y = this._fromY * (1 - this._t) * (1 - this._t) + this._controlY * 2 * (1 - this._t) * this._t + this._toY * this._t * this._t;
		if(this.finished) this.postUpdate();
	}
	,setMotion: function(FromX,FromY,ControlX,ControlY,ToX,ToY,DurationOrSpeed,UseDuration,Ease) {
		if(UseDuration == null) UseDuration = true;
		this._distance = -1;
		this.x = this._fromX = FromX;
		this.y = this._fromY = FromY;
		this._controlX = ControlX;
		this._controlY = ControlY;
		this._toX = ToX;
		this._toY = ToY;
		if(UseDuration) this._target = DurationOrSpeed; else this._target = this.get_distance() / DurationOrSpeed;
		this._ease = Ease;
		this.start();
		return this;
	}
	,__class__: flixel.tweens.motion.QuadMotion
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_distance:"get_distance"})
});
flixel.tweens.motion.QuadPath = function(complete,type) {
	if(type == null) type = 0;
	flixel.tweens.motion.Motion.call(this,0,complete,type,null);
	this._points = new Array();
	this._curve = new Array();
	this._curveD = new Array();
	this._curveT = new Array();
	this._distance = this._speed = this._index = 0;
	this._updateCurve = true;
	this._curveT[0] = 0;
};
$hxClasses["flixel.tweens.motion.QuadPath"] = flixel.tweens.motion.QuadPath;
flixel.tweens.motion.QuadPath.__name__ = ["flixel","tweens","motion","QuadPath"];
flixel.tweens.motion.QuadPath.__super__ = flixel.tweens.motion.Motion;
flixel.tweens.motion.QuadPath.prototype = $extend(flixel.tweens.motion.Motion.prototype,{
	curveLength: function(start,control,finish) {
		var a = flixel.tweens.motion.QuadPath._Point, b = flixel.tweens.motion.QuadPath._Point2;
		a.set_x(start.x - 2 * control.x + finish.x);
		a.set_y(start.y - 2 * control.y + finish.y);
		b.set_x(2 * control.x - 2 * start.x);
		b.set_y(2 * control.y - 2 * start.y);
		var A = 4 * (a.x * a.x + a.y * a.y), B = 4 * (a.x * b.x + a.y * b.y), C = b.x * b.x + b.y * b.y, ABC = 2 * Math.sqrt(A + B + C), A2 = Math.sqrt(A), A32 = 2 * A * A2, C2 = 2 * Math.sqrt(C), BA = B / A2;
		return (A32 * ABC + A2 * B * (ABC - C2) + (4 * C * A - B * B) * Math.log((2 * A2 + BA + ABC) / (BA + C2))) / (4 * A32);
	}
	,get_pointCount: function() {
		return this._points.length;
	}
	,updatePath: function() {
		if(this._points.length < 3) throw "A QuadPath must have at least 3 points to operate.";
		if(!this._updateCurve) return;
		this._updateCurve = false;
		var p, c, l = this._points[1], i = 2;
		while(i < this._points.length) {
			p = this._points[i];
			if(this._curve.length > i - 1) c = this._curve[i - 1]; else c = this._curve[i - 1] = new flixel.util.FlxPoint();
			if(i < this._points.length - 1) {
				c.set_x(l.x + (p.x - l.x) / 2);
				c.set_y(l.y + (p.y - l.y) / 2);
			} else {
				c.set_x(p.x);
				c.set_y(p.y);
			}
			l = p;
			i++;
		}
		i = 0;
		this._distance = 0;
		while(i < this._curve.length - 1) {
			this._curveD[i] = this.curveLength(this._curve[i],this._points[i + 1],this._curve[i + 1]);
			this._distance += this._curveD[i++];
		}
		i = 1;
		var d = 0;
		while(i < this._curve.length - 1) {
			d += this._curveD[i];
			this._curveT[i++] = d / this._distance;
		}
		this._curveT[this._curve.length - 1] = 1;
	}
	,update: function() {
		flixel.tweens.motion.Motion.prototype.update.call(this);
		var td;
		var tt;
		if(!this._backward && this._points != null) {
			if(this._index < this._curve.length - 1) while(this._t > this._curveT[this._index + 1]) {
				this._index++;
				if(this._index == this._curve.length - 1) {
					this._index -= 1;
					break;
				}
			}
			td = this._curveT[this._index];
			tt = this._curveT[this._index + 1] - td;
			td = (this._t - td) / tt;
			this._a = this._curve[this._index];
			this._b = this._points[this._index + 1];
			this._c = this._curve[this._index + 1];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		} else if(this._points != null) {
			if(this._index > 0) while(this._t < this._curveT[this._index - 1]) {
				this._index -= 1;
				if(this._index == 0) {
					this._index += 1;
					break;
				}
			}
			td = this._curveT[this._index];
			tt = this._curveT[this._index - 1] - td;
			td = (this._t - td) / tt;
			this._a = this._curve[this._index];
			this._b = this._points[this._index];
			this._c = this._curve[this._index - 1];
			this.x = this._a.x * (1 - td) * (1 - td) + this._b.x * 2 * (1 - td) * td + this._c.x * td * td;
			this.y = this._a.y * (1 - td) * (1 - td) + this._b.y * 2 * (1 - td) * td + this._c.y * td * td;
		}
		flixel.tweens.motion.Motion.prototype.postUpdate.call(this);
	}
	,start: function() {
		if(!this._backward) this._index = 0; else this._index = this._curve.length - 1;
		flixel.tweens.motion.Motion.prototype.start.call(this);
		return this;
	}
	,getPoint: function(index) {
		if(index == null) index = 0;
		if(this._points.length == 0) throw "No points have been added to the path yet.";
		return this._points[index % this._points.length];
	}
	,addPoint: function(x,y) {
		if(y == null) y = 0;
		if(x == null) x = 0;
		this._updateCurve = true;
		if(this._points.length == 0) this._curve[0] = new flixel.util.FlxPoint(x,y);
		this._points[this._points.length] = new flixel.util.FlxPoint(x,y);
		return this;
	}
	,setMotion: function(DurationOrSpeed,UseDuration,Ease) {
		if(UseDuration == null) UseDuration = true;
		this.updatePath();
		if(UseDuration) {
			this._target = DurationOrSpeed;
			this._speed = this._distance / DurationOrSpeed;
		} else {
			this._target = this._distance / DurationOrSpeed;
			this._speed = DurationOrSpeed;
		}
		this._ease = Ease;
		this.start();
		return this;
	}
	,destroy: function() {
		flixel.tweens.motion.Motion.prototype.destroy.call(this);
		this._points = null;
		this._curve = null;
		this._curveD = null;
		this._curveT = null;
		this._a = null;
		this._b = null;
		this._c = null;
	}
	,__class__: flixel.tweens.motion.QuadPath
	,__properties__: $extend(flixel.tweens.motion.Motion.prototype.__properties__,{get_pointCount:"get_pointCount"})
});
flixel.tweens.sound = {}
flixel.tweens.sound.Fader = function(complete,type) {
	if(type == null) type = 0;
	flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["flixel.tweens.sound.Fader"] = flixel.tweens.sound.Fader;
flixel.tweens.sound.Fader.__name__ = ["flixel","tweens","sound","Fader"];
flixel.tweens.sound.Fader.__super__ = flixel.tweens.FlxTween;
flixel.tweens.sound.Fader.prototype = $extend(flixel.tweens.FlxTween.prototype,{
	update: function() {
		flixel.tweens.FlxTween.prototype.update.call(this);
		flixel.FlxG.sound.set_volume(this._start + this._range * this._t);
	}
	,fadeTo: function(volume,duration,ease) {
		if(volume < 0) volume = 0;
		this._start = flixel.FlxG.sound.volume;
		this._range = volume - this._start;
		this._target = duration;
		this._ease = ease;
		this.start();
	}
	,__class__: flixel.tweens.sound.Fader
});
flixel.ui = {}
flixel.ui.FlxTypedButton = function(X,Y,Label,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.FlxSprite.call(this,X,Y);
	this.loadGraphic("flixel/img/ui/button.png",true,false,80,20);
	this._onUp = OnClick;
	this._onDown = null;
	this._onOut = null;
	this._onOver = null;
	this._onUpParams = [];
	this._onDownParams = [];
	this._onOutParams = [];
	this._onOverParams = [];
	this.soundOver = null;
	this.soundOut = null;
	this.soundDown = null;
	this.soundUp = null;
	this.status = 0;
	this._pressed = false;
	this._initialized = false;
	this.scrollFactor.set_x(0);
	this.scrollFactor.set_y(0);
	this._touchPointID = -1;
};
$hxClasses["flixel.ui.FlxTypedButton"] = flixel.ui.FlxTypedButton;
flixel.ui.FlxTypedButton.__name__ = ["flixel","ui","FlxTypedButton"];
flixel.ui.FlxTypedButton.__super__ = flixel.FlxSprite;
flixel.ui.FlxTypedButton.prototype = $extend(flixel.FlxSprite.prototype,{
	onMouseUp: function(event) {
		if(!this.exists || !this.visible || !this.active || this.status != 2) return;
		if(this._onUp != null) this._onUp.apply(null,this._onUpParams);
		if(this.soundUp != null) this.soundUp.play(true);
		this._touchPointID = -1;
		this.status = 0;
	}
	,setOnOutCallback: function(Callback,Params) {
		this._onOut = Callback;
		if(Params == null) Params = [];
		this._onOutParams = Params;
	}
	,setOnOverCallback: function(Callback,Params) {
		this._onOver = Callback;
		if(Params == null) Params = [];
		this._onOverParams = Params;
	}
	,setOnDownCallback: function(Callback,Params) {
		this._onDown = Callback;
		if(Params == null) Params = [];
		this._onDownParams = Params;
	}
	,setOnUpCallback: function(Callback,Params) {
		this._onUp = Callback;
		if(Params == null) Params = [];
		this._onUpParams = Params;
	}
	,setSounds: function(SoundOver,SoundOverVolume,SoundOut,SoundOutVolume,SoundDown,SoundDownVolume,SoundUp,SoundUpVolume) {
		if(SoundUpVolume == null) SoundUpVolume = 1;
		if(SoundDownVolume == null) SoundDownVolume = 1;
		if(SoundOutVolume == null) SoundOutVolume = 1;
		if(SoundOverVolume == null) SoundOverVolume = 1;
		if(SoundOver != null) this.soundOver = flixel.FlxG.sound.load(SoundOver,SoundOverVolume);
		if(SoundOut != null) this.soundOut = flixel.FlxG.sound.load(SoundOut,SoundOutVolume);
		if(SoundDown != null) this.soundDown = flixel.FlxG.sound.load(SoundDown,SoundDownVolume);
		if(SoundUp != null) this.soundUp = flixel.FlxG.sound.load(SoundUp,SoundUpVolume);
	}
	,drawDebug: function() {
		flixel.FlxSprite.prototype.drawDebug.call(this);
		if(this.label != null) this.label.drawDebug();
	}
	,draw: function() {
		flixel.FlxSprite.prototype.draw.call(this);
		if(this.label != null) {
			this.label.cameras = this.cameras;
			this.label.draw();
		}
	}
	,updateButtonStatus: function(Point,Camera,JustPressed,touchID) {
		var offAll = true;
		if(this.overlapsPoint(Point,true,Camera)) {
			offAll = false;
			if(JustPressed) {
				this.status = 2;
				if(this._onDown != null) this._onDown.apply(null,this._onDownParams);
				if(this.soundDown != null) this.soundDown.play(true);
				this._touchPointID = touchID;
			}
			if(this.status == 0) {
				this.status = 1;
				if(this._onOver != null) this._onOver.apply(null,this._onOverParams);
				if(this.soundOver != null) this.soundOver.play(true);
			}
		}
		return offAll;
	}
	,updateButton: function() {
		var continueUpdate = false;
		continueUpdate = true;
		continueUpdate = true;
		if(continueUpdate) {
			if(this.cameras == null) this.cameras = flixel.FlxG.cameras.list;
			var camera;
			var i = 0;
			var l = this.cameras.length;
			var offAll = true;
			while(i < l) {
				camera = this.cameras[i++];
				flixel.FlxG.mouse.getWorldPosition(camera,this._point);
				offAll = this.updateButtonStatus(this._point,camera,flixel.FlxG.mouse._leftButton.justPressed(),1) == false?false:offAll;
				var _g = 0, _g1 = flixel.FlxG.touches.list;
				while(_g < _g1.length) {
					var touch = _g1[_g];
					++_g;
					if(this._touchPointID == -1) {
						if(touch._current == 2) {
							touch.getWorldPosition(camera,this._point);
							offAll = this.updateButtonStatus(this._point,camera,touch._current == 2,touch.get_touchPointID()) == false?false:offAll;
						}
					} else if(touch.get_touchPointID() == this._touchPointID) {
						touch.getWorldPosition(camera,this._point);
						offAll = false;
						if(touch._current == -1 || !this.overlapsPoint(this._point,true,camera)) {
							offAll = true;
							this.onMouseUp(null);
						}
					}
				}
				if(!offAll) break;
			}
			if(offAll) {
				if(this.status != 0) {
					if(this._onOut != null) this._onOut.apply(null,this._onOutParams);
					if(this.soundOut != null) this.soundOut.play(true);
				}
				this.status = 0;
			}
		}
		if(this.label != null) {
			this.label.set_x(this.x);
			this.label.set_y(this.y);
			if(this.labelOffset != null) {
				var _g = this.label;
				_g.set_x(_g.x + this.labelOffset.x);
				var _g = this.label;
				_g.set_y(_g.y + this.labelOffset.y);
			}
			this.label.set_scrollFactor(this.scrollFactor);
		}
		this.set_frame(this.framesData.frames[this.status]);
	}
	,update: function() {
		if(!this._initialized) {
			if(flixel.FlxG.game.get_stage() != null) {
				flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
				this._initialized = true;
			}
		}
		flixel.FlxSprite.prototype.update.call(this);
		this.updateButton();
		if(this.label == null) return;
		var _g = this;
		switch(_g.status) {
		case 1:
			this.label.set_alpha(1.0);
			break;
		case 2:
			this.label.set_alpha(0.5);
			var _g1 = this.label, _g2 = _g1.y;
			_g1.set_y(_g2 + 1);
			_g2;
			break;
		default:
			this.label.set_alpha(0.8);
		}
	}
	,destroy: function() {
		if(flixel.FlxG.game.get_stage() != null) flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		if(this.label != null) {
			this.label.destroy();
			this.label = null;
		}
		this._onUp = null;
		this._onDown = null;
		this._onOut = null;
		this._onOver = null;
		this._onUpParams = null;
		this._onDownParams = null;
		this._onOutParams = null;
		this._onOverParams = null;
		if(this.soundOver != null) this.soundOver.destroy();
		if(this.soundOut != null) this.soundOut.destroy();
		if(this.soundDown != null) this.soundDown.destroy();
		if(this.soundUp != null) this.soundUp.destroy();
		flixel.FlxSprite.prototype.destroy.call(this);
	}
	,__class__: flixel.ui.FlxTypedButton
});
flixel.ui.FlxButton = function(X,Y,Label,OnClick) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.ui.FlxTypedButton.call(this,X,Y,Label,OnClick);
	if(Label != null) {
		this.labelOffset = new flixel.util.FlxPoint(-1,3);
		this.label = new flixel.text.FlxText(X + this.labelOffset.x,Y + this.labelOffset.y,80,Label);
		this.label.setFormat(null,8,3355443,"center");
	}
};
$hxClasses["flixel.ui.FlxButton"] = flixel.ui.FlxButton;
flixel.ui.FlxButton.__name__ = ["flixel","ui","FlxButton"];
flixel.ui.FlxButton.__super__ = flixel.ui.FlxTypedButton;
flixel.ui.FlxButton.prototype = $extend(flixel.ui.FlxTypedButton.prototype,{
	resetHelpers: function() {
		flixel.ui.FlxTypedButton.prototype.resetHelpers.call(this);
		if(this.label != null) {
			this.label.set_width(this.label.frameWidth = this.width | 0);
			this.label.set_size(this.label.get_size());
		}
	}
	,__class__: flixel.ui.FlxButton
});
flixel.util.FlxAngle = function() { }
$hxClasses["flixel.util.FlxAngle"] = flixel.util.FlxAngle;
flixel.util.FlxAngle.__name__ = ["flixel","util","FlxAngle"];
flixel.util.FlxAngle.rotatePoint = function(X,Y,PivotX,PivotY,Angle,point) {
	var sin = 0;
	var cos = 0;
	var radians = Angle * -flixel.util.FlxAngle.TO_RAD;
	while(radians < -Math.PI) radians += Math.PI * 2;
	while(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		sin = 1.27323954 * radians + .405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	} else {
		sin = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	}
	radians += Math.PI / 2;
	if(radians > Math.PI) radians = radians - Math.PI * 2;
	if(radians < 0) {
		cos = 1.27323954 * radians + 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	} else {
		cos = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	}
	var dx = X - PivotX;
	var dy = Y - PivotY;
	if(point == null) point = new flixel.util.FlxPoint();
	point.set_x(PivotX + cos * dx - sin * dy);
	point.set_y(PivotY - sin * dx - cos * dy);
	return point;
}
flixel.util.FlxAngle.getAngle = function(Point1,Point2) {
	var x = Point2.x - Point1.x;
	var y = Point2.y - Point1.y;
	var angle = 0;
	if(x != 0 || y != 0) {
		var c1 = Math.PI * 0.25;
		var c2 = 3 * c1;
		var ay = y < 0?-y:y;
		if(x >= 0) angle = c1 - c1 * ((x - ay) / (x + ay)); else angle = c2 - c1 * ((x + ay) / (ay - x));
		angle = (y < 0?-angle:angle) * flixel.util.FlxAngle.TO_DEG;
		if(angle > 90) angle = angle - 270; else angle += 90;
	}
	return angle;
}
flixel.util.FlxAngle.sinCosGenerator = function(length,sinAmplitude,cosAmplitude,frequency) {
	if(frequency == null) frequency = 1.0;
	if(cosAmplitude == null) cosAmplitude = 1.0;
	if(sinAmplitude == null) sinAmplitude = 1.0;
	var sin = sinAmplitude;
	var cos = cosAmplitude;
	var frq = frequency * Math.PI / length;
	flixel.util.FlxAngle.cosTable = new Array();
	flixel.util.FlxAngle.sinTable = new Array();
	var _g = 0;
	while(_g < length) {
		var c = _g++;
		cos -= sin * frq;
		sin += cos * frq;
		flixel.util.FlxAngle.cosTable[c] = cos;
		flixel.util.FlxAngle.sinTable[c] = sin;
	}
}
flixel.util.FlxAngle.wrapAngle = function(angle) {
	var result = angle | 0;
	if(angle > 180) result = -180; else if(angle < -180) result = 180;
	return result;
}
flixel.util.FlxAngle.angleLimit = function(angle,min,max) {
	var result = angle;
	if(angle > max) result = max; else if(angle < min) result = min;
	return result;
}
flixel.util.FlxAngle.asDegrees = function(radians) {
	return radians * flixel.util.FlxAngle.TO_DEG;
}
flixel.util.FlxAngle.asRadians = function(degrees) {
	return degrees * flixel.util.FlxAngle.TO_RAD;
}
flixel.util.FlxAngle.angleBetween = function(SpriteA,SpriteB,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = SpriteB.x + SpriteB.origin.x - (SpriteA.x + SpriteA.origin.x);
	var dy = SpriteB.y + SpriteB.origin.y - (SpriteA.y + SpriteA.origin.y);
	if(AsDegrees) return Math.atan2(dy,dx) * flixel.util.FlxAngle.TO_DEG; else return Math.atan2(dy,dx);
}
flixel.util.FlxAngle.angleBetweenPoint = function(Sprite,Target,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = Target.x - (Sprite.x + Sprite.origin.x);
	var dy = Target.y - (Sprite.y + Sprite.origin.y);
	if(AsDegrees) return Math.atan2(dy,dx) * flixel.util.FlxAngle.TO_DEG; else return Math.atan2(dy,dx);
}
flixel.util.FlxAngle.angleBetweenMouse = function(Object,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	if(Object == null) return 0;
	var p = Object.getScreenXY();
	var dx = flixel.FlxG.mouse.screenX - p.x;
	var dy = flixel.FlxG.mouse.screenY - p.y;
	if(AsDegrees) return Math.atan2(dy,dx) * flixel.util.FlxAngle.TO_DEG; else return Math.atan2(dy,dx);
}
flixel.util.FlxAngle.angleBetweenTouch = function(Object,Touch,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var p = Object.getScreenXY();
	var dx = Touch.screenX - p.x;
	var dy = Touch.screenY - p.y;
	if(AsDegrees) return Math.atan2(dy,dx) * flixel.util.FlxAngle.TO_DEG; else return Math.atan2(dy,dx);
}
flixel.util.FlxArrayUtil = function() { }
$hxClasses["flixel.util.FlxArrayUtil"] = flixel.util.FlxArrayUtil;
flixel.util.FlxArrayUtil.__name__ = ["flixel","util","FlxArrayUtil"];
flixel.util.FlxArrayUtil.setLength_flixel_system_replay_FrameRecord = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.getRandom_flixel_group_FlxTypedGroup_T = function(Objects,StartIndex,Length) {
	if(Length == null) Length = 0;
	if(StartIndex == null) StartIndex = 0;
	if(Objects != null) {
		if(StartIndex < 0) StartIndex = 0;
		if(Length < 0) Length = 0;
		var l = Length;
		if(l == 0 || l > Objects.length - StartIndex) l = Objects.length - StartIndex;
		if(l > 0) return Objects[StartIndex + ((function($this) {
			var $r;
			flixel.util.FlxRandom.globalSeed = 69621 * (flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(flixel.util.FlxRandom.globalSeed <= 0) flixel.util.FlxRandom.globalSeed += 1;
			$r = flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * l | 0)];
	}
	return null;
}
flixel.util.FlxArrayUtil.setLength_flixel_system_input_keyboard_FlxKey = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.setLength_flixel_group_FlxTypedGroup_T = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.indexOf_flixel_group_FlxTypedGroup_T = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_system_debug_WatchEntry = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_FlxCamera = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.setLength_Int = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxTimer = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.setLength_Float = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.setLength_String = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
flixel.util.FlxArrayUtil.indexOf_flixel_tweens_FlxTween = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_system_layer_frames_FlxFrame = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_Int = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPoint = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPath = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPool_T = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var index = -1;
	var len = array.length;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
flixel.util.FlxArrayUtil.intFromString = function(data) {
	if(data != null && data != "") {
		var strArray = data.split(",");
		var iArray = new Array();
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			iArray.push(Std.parseInt(str));
		}
		return iArray;
	}
	return null;
}
flixel.util.FlxArrayUtil.floatFromString = function(data) {
	if(data != null && data != "") {
		var strArray = data.split(",");
		var fArray = new Array();
		var _g = 0;
		while(_g < strArray.length) {
			var str = strArray[_g];
			++_g;
			fArray.push(Std.parseFloat(str));
		}
		return fArray;
	}
	return null;
}
flixel.util.FlxBitmapUtil = function() { }
$hxClasses["flixel.util.FlxBitmapUtil"] = flixel.util.FlxBitmapUtil;
flixel.util.FlxBitmapUtil.__name__ = ["flixel","util","FlxBitmapUtil"];
flixel.util.FlxBitmapUtil.compare = function(Bitmap1,Bitmap2) {
	if(Bitmap1 == Bitmap2) return 0;
	if((Bitmap1.___textureBuffer != null?Bitmap1.___textureBuffer.width:0) != (Bitmap2.___textureBuffer != null?Bitmap2.___textureBuffer.width:0)) return -3; else if((Bitmap1.___textureBuffer != null?Bitmap1.___textureBuffer.height:0) != (Bitmap2.___textureBuffer != null?Bitmap2.___textureBuffer.height:0)) return -4; else {
		var width = Bitmap1.___textureBuffer != null?Bitmap1.___textureBuffer.width:0;
		var height = Bitmap1.___textureBuffer != null?Bitmap1.___textureBuffer.height:0;
		var result = new flash.display.BitmapData(width,height,true,0);
		var identical = true;
		var pixel1, pixel2;
		var rgb1, rgb2;
		var r1, g1, b1;
		var r2, g2, b2;
		var alpha1, alpha2;
		var resultAlpha, resultColor;
		var resultR, resultG, resultB;
		var diffR, diffG, diffB, diffA;
		var checkAlpha = true;
		var _g = 0;
		while(_g < width) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < height) {
				var j = _g1++;
				pixel1 = Bitmap1.getPixel32(i,j);
				pixel2 = Bitmap2.getPixel32(i,j);
				if(pixel1 != pixel2) {
					identical = false;
					checkAlpha = true;
					rgb1 = pixel1 & 16777215;
					rgb2 = pixel2 & 16777215;
					if(rgb1 != rgb2) {
						r1 = pixel1 >> 16 & 255;
						g1 = pixel1 >> 8 & 255;
						b1 = pixel1 & 255;
						r2 = pixel2 >> 16 & 255;
						g2 = pixel2 >> 8 & 255;
						b2 = pixel2 & 255;
						diffR = r1 - r2;
						diffG = g1 - g2;
						diffB = b1 - b2;
						resultR = diffR >= 0?diffR:256 + diffR;
						resultG = diffG >= 0?diffG:256 + diffG;
						resultB = diffB >= 0?diffB:256 + diffB;
						resultColor = -16777216 | resultR << 16 | resultG << 8 | resultB;
						result.setPixel32(i,j,resultColor);
						checkAlpha = false;
					}
					if(checkAlpha) {
						alpha1 = pixel1 >> 24 & 255;
						alpha2 = pixel2 >> 24 & 255;
						diffA = alpha1 - alpha2;
						resultAlpha = diffA >= 0?diffA:256 + diffA;
						resultColor = resultAlpha | 16711680 | 65280 | 255;
						if(alpha1 != alpha2) result.setPixel32(i,j,resultColor);
					}
				}
			}
		}
		if(!identical) return result;
	}
	return 0;
}
var js = {}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
js.Browser.getLocalStorage = function() {
	try {
		var s = js.Browser.window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0, _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
flixel.util.FlxCollision = function() { }
$hxClasses["flixel.util.FlxCollision"] = flixel.util.FlxCollision;
flixel.util.FlxCollision.__name__ = ["flixel","util","FlxCollision"];
flixel.util.FlxCollision.pixelPerfectCheck = function(Contact,Target,AlphaTolerance,Camera) {
	if(AlphaTolerance == null) AlphaTolerance = 255;
	var pointA = new flash.geom.Point();
	var pointB = new flash.geom.Point();
	if(Camera != null) {
		pointA.x = Contact.x - (Camera.scroll.x * Contact.scrollFactor.x | 0) - Contact.offset.x;
		pointA.y = Contact.y - (Camera.scroll.y * Contact.scrollFactor.y | 0) - Contact.offset.y;
		pointB.x = Target.x - (Camera.scroll.x * Target.scrollFactor.x | 0) - Target.offset.x;
		pointB.y = Target.y - (Camera.scroll.y * Target.scrollFactor.y | 0) - Target.offset.y;
	} else {
		pointA.x = Contact.x - (flixel.FlxG.camera.scroll.x * Contact.scrollFactor.x | 0) - Contact.offset.x;
		pointA.y = Contact.y - (flixel.FlxG.camera.scroll.y * Contact.scrollFactor.y | 0) - Contact.offset.y;
		pointB.x = Target.x - (flixel.FlxG.camera.scroll.x * Target.scrollFactor.x | 0) - Target.offset.x;
		pointB.y = Target.y - (flixel.FlxG.camera.scroll.y * Target.scrollFactor.y | 0) - Target.offset.y;
	}
	var boundsA = new flash.geom.Rectangle(pointA.x,pointA.y,Contact.frameWidth,Contact.frameHeight);
	var boundsB = new flash.geom.Rectangle(pointB.x,pointB.y,Target.frameWidth,Target.frameHeight);
	var intersect = boundsA.intersection(boundsB);
	if(intersect.isEmpty() || intersect.width == 0 || intersect.height == 0) return false;
	intersect.x = Math.floor(intersect.x);
	intersect.y = Math.floor(intersect.y);
	intersect.width = Math.ceil(intersect.width);
	intersect.height = Math.ceil(intersect.height);
	if(intersect.isEmpty()) return false;
	var matrixA = new flash.geom.Matrix();
	matrixA.translate(-(intersect.x - boundsA.x),-(intersect.y - boundsA.y));
	var matrixB = new flash.geom.Matrix();
	matrixB.translate(-(intersect.x - boundsB.x),-(intersect.y - boundsB.y));
	Contact.calcFrame(true);
	Target.calcFrame(true);
	var testA = Contact.framePixels;
	var testB = Target.framePixels;
	var overlapArea = new flash.display.BitmapData(intersect.width | 0,intersect.height | 0,false);
	var overlapWidth = overlapArea.___textureBuffer != null?overlapArea.___textureBuffer.width:0;
	var overlapHeight = overlapArea.___textureBuffer != null?overlapArea.___textureBuffer.height:0;
	var targetX;
	var targetY;
	var pixelColor;
	var pixelAlpha;
	var transformedAlpha;
	var maxX = (testA.___textureBuffer != null?testA.___textureBuffer.width:0) + 1;
	var maxY = (testA.___textureBuffer != null?testA.___textureBuffer.height:0) + 1;
	var _g = 0;
	while(_g < maxX) {
		var i = _g++;
		targetX = Math.floor(i + matrixA.tx);
		if(targetX >= 0 && targetX < maxX) {
			var _g1 = 0;
			while(_g1 < maxY) {
				var j = _g1++;
				targetY = Math.floor(j + matrixA.ty);
				if(targetY >= 0 && targetY < maxY) {
					pixelColor = testA.getPixel32(i,j);
					pixelAlpha = pixelColor >> 24 & 255;
					if(pixelAlpha >= AlphaTolerance) overlapArea.setPixel32(targetX,targetY,-65536); else overlapArea.setPixel32(targetX,targetY,-1);
				}
			}
		}
	}
	maxX = (testB.___textureBuffer != null?testB.___textureBuffer.width:0) + 1;
	maxY = (testB.___textureBuffer != null?testB.___textureBuffer.height:0) + 1;
	var secondColor;
	var _g = 0;
	while(_g < maxX) {
		var i = _g++;
		targetX = Math.floor(i + matrixB.tx);
		if(targetX >= 0 && targetX < maxX) {
			var _g1 = 0;
			while(_g1 < maxY) {
				var j = _g1++;
				targetY = Math.floor(j + matrixB.ty);
				if(targetY >= 0 && targetY < maxY) {
					pixelColor = testB.getPixel32(i,j);
					pixelAlpha = pixelColor >> 24 & 255;
					if(pixelAlpha >= AlphaTolerance) {
						secondColor = overlapArea.getPixel32(targetX,targetY);
						if(secondColor == -65536) overlapArea.setPixel32(targetX,targetY,-16711681); else overlapArea.setPixel32(targetX,targetY,0);
					}
				}
			}
		}
	}
	flixel.util.FlxCollision.debug = overlapArea;
	var overlap = overlapArea.getColorBoundsRect(-1,-16711681);
	overlap.offset(intersect.x,intersect.y);
	if(overlap.isEmpty()) return false; else return true;
	return false;
}
flixel.util.FlxCollision.pixelPerfectPointCheck = function(PointX,PointY,Target,AlphaTolerance) {
	if(AlphaTolerance == null) AlphaTolerance = 255;
	if(flixel.util.FlxMath.pointInCoordinates(PointX,PointY,Math.floor(Target.x),Math.floor(Target.y),Target.width | 0,Target.height | 0) == false) return false;
	var test = Target.getFlxFrameBitmapData();
	var pixelAlpha = 0;
	pixelAlpha = test.getPixel32(Math.floor(PointX - Target.x),Math.floor(PointY - Target.y)) >> 24 & 255;
	pixelAlpha = pixelAlpha * Target.alpha | 0;
	if(pixelAlpha >= AlphaTolerance) return true; else return false;
}
flixel.util.FlxCollision.createCameraWall = function(Camera,Placement,Thickness,AdjustWorldBounds) {
	if(AdjustWorldBounds == null) AdjustWorldBounds = false;
	var left = null;
	var right = null;
	var top = null;
	var bottom = null;
	switch(Placement) {
	case 0:
		left = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel.tile.FlxTileblock(Math.floor(Camera.x + Camera.width),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Math.floor(Camera.y - Thickness),Camera.width + Thickness * 2,Thickness);
		bottom = new flixel.tile.FlxTileblock(Math.floor(Camera.x - Thickness),Camera.height,Camera.width + Thickness * 2,Thickness);
		if(AdjustWorldBounds) flixel.FlxG.worldBounds.set(Camera.x - Thickness,Camera.y - Thickness,Camera.width + Thickness * 2,Camera.height + Thickness * 2);
		break;
	case 1:
		left = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		right = new flixel.tile.FlxTileblock(Math.floor(Camera.x + Camera.width - Thickness),Math.floor(Camera.y + Thickness),Thickness,Camera.height - Thickness * 2);
		top = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Math.floor(Camera.y),Camera.width,Thickness);
		bottom = new flixel.tile.FlxTileblock(Math.floor(Camera.x),Camera.height - Thickness,Camera.width,Thickness);
		if(AdjustWorldBounds) flixel.FlxG.worldBounds.set(Camera.x,Camera.y,Camera.width,Camera.height);
		break;
	}
	var result = new flixel.group.FlxGroup(4);
	result.add(left);
	result.add(right);
	result.add(top);
	result.add(bottom);
	return result;
}
flixel.util.FlxColor = function() { }
$hxClasses["flixel.util.FlxColor"] = flixel.util.FlxColor;
flixel.util.FlxColor.__name__ = ["flixel","util","FlxColor"];
flixel.util.FlxColorUtil = function() { }
$hxClasses["flixel.util.FlxColorUtil"] = flixel.util.FlxColorUtil;
flixel.util.FlxColorUtil.__name__ = ["flixel","util","FlxColorUtil"];
flixel.util.FlxColorUtil.makeFromRGBA = function(Red,Green,Blue,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (Red & 255) << 16 | (Green & 255) << 8 | Blue & 255;
}
flixel.util.FlxColorUtil.makeFromHSBA = function(Hue,Saturation,Brightness,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	var red;
	var green;
	var blue;
	if(Saturation == 0.0) {
		red = Brightness;
		green = Brightness;
		blue = Brightness;
	} else {
		if(Hue == 360) Hue = 0;
		var slice = Hue / 60 | 0;
		var hf = Hue / 60 - slice;
		var aa = Brightness * (1 - Saturation);
		var bb = Brightness * (1 - Saturation * hf);
		var cc = Brightness * (1 - Saturation * (1.0 - hf));
		switch(slice) {
		case 0:
			red = Brightness;
			green = cc;
			blue = aa;
			break;
		case 1:
			red = bb;
			green = Brightness;
			blue = aa;
			break;
		case 2:
			red = aa;
			green = Brightness;
			blue = cc;
			break;
		case 3:
			red = aa;
			green = bb;
			blue = Brightness;
			break;
		case 4:
			red = cc;
			green = aa;
			blue = Brightness;
			break;
		case 5:
			red = Brightness;
			green = aa;
			blue = bb;
			break;
		default:
			red = 0;
			green = 0;
			blue = 0;
		}
	}
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (red * 255 | 0) << 16 | (green * 255 | 0) << 8 | (blue * 255 | 0);
}
flixel.util.FlxColorUtil.getRGBA = function(Color,Results) {
	var red = Color >> 16 & 255;
	var green = Color >> 8 & 255;
	var blue = Color & 255;
	var alpha = flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { red : red, green : green, blue : blue, alpha : alpha};
	return { red : red, green : green, blue : blue, alpha : alpha};
}
flixel.util.FlxColorUtil.getHSBA = function(Color,Results) {
	var hue;
	var saturation;
	var brightness;
	var alpha;
	var red = (Color >> 16 & 255) / 255;
	var green = (Color >> 8 & 255) / 255;
	var blue = (Color & 255) / 255;
	var m = red > green?red:green;
	var dmax = m > blue?m:blue;
	m = red > green?green:red;
	var dmin = m > blue?blue:m;
	var range = dmax - dmin;
	brightness = flixel.util.FlxMath.roundDecimal(dmax,4);
	saturation = 0;
	hue = 0;
	if(dmax != 0) saturation = flixel.util.FlxMath.roundDecimal(range / dmax,4);
	if(saturation != 0) {
		if(red == dmax) hue = (green - blue) / range; else if(green == dmax) hue = 2 + (blue - red) / range; else if(blue == dmax) hue = 4 + (red - green) / range;
		hue *= 60;
		if(hue < 0) hue += 360;
	}
	alpha = flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
	return { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
}
flixel.util.FlxColorUtil.getAlpha = function(Color) {
	return Color >> 24 & 255;
}
flixel.util.FlxColorUtil.getAlphaFloat = function(Color) {
	var f = Color >> 24 & 255;
	return f / 255;
}
flixel.util.FlxColorUtil.getRed = function(Color) {
	return Color >> 16 & 255;
}
flixel.util.FlxColorUtil.getGreen = function(Color) {
	return Color >> 8 & 255;
}
flixel.util.FlxColorUtil.getBlue = function(Color) {
	return Color & 255;
}
flixel.util.FlxColorUtil.getRandomColor = function(Min,Max,Alpha) {
	if(Alpha == null) Alpha = 255;
	if(Max == null) Max = 255;
	if(Min == null) Min = 0;
	if(Max > 255) {
		flixel.FlxG.log.warn("FlxColor: getRandomColor - max value too high");
		return 16777215;
	}
	if(Min > Max) {
		flixel.FlxG.log.warn("FlxColor: getRandomColor - min value higher than max");
		return 16777215;
	}
	var red = Min + (Math.random() * (Max - Min) | 0);
	var green = Min + (Math.random() * (Max - Min) | 0);
	var blue = Min + (Math.random() * (Max - Min) | 0);
	return Alpha << 24 | red << 16 | green << 8 | blue;
}
flixel.util.FlxColorUtil.getColor32 = function(Alpha,Red,Green,Blue) {
	return Alpha << 24 | Red << 16 | Green << 8 | Blue;
}
flixel.util.FlxColorUtil.getColor24 = function(Red,Green,Blue) {
	return Red << 16 | Green << 8 | Blue;
}
flixel.util.FlxColorUtil.getHSVColorWheel = function(Alpha) {
	if(Alpha == null) Alpha = 255;
	var colors = new Array();
	var _g = 0;
	while(_g < 360) {
		var c = _g++;
		colors[c] = flixel.util.FlxColorUtil.HSVtoRGBA(c,1.0,1.0,Alpha);
	}
	return colors;
}
flixel.util.FlxColorUtil.getComplementHarmony = function(Color) {
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var opposite = flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	return flixel.util.FlxColorUtil.HSVtoRGBA(opposite,1.0,1.0);
}
flixel.util.FlxColorUtil.getAnalogousHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	if(Threshold > 359 || Threshold < 0) flixel.FlxG.log.warn("FlxColor Warning: Invalid threshold given to getAnalogousHarmony()");
	var warmer = flixel.util.FlxMath.wrapValue(hsv.hue | 0,359 - Threshold,359);
	var colder = flixel.util.FlxMath.wrapValue(hsv.hue | 0,Threshold,359);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoRGBA(warmer,1.0,1.0), color3 : flixel.util.FlxColorUtil.HSVtoRGBA(colder,1.0,1.0), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
}
flixel.util.FlxColorUtil.getSplitComplementHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	if(Threshold >= 359 || Threshold <= 0) flixel.FlxG.log.warn("FlxColor: Invalid threshold given to getSplitComplementHarmony()");
	var opposite = flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	var warmer = flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite - Threshold,359);
	var colder = flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite + Threshold,359);
	flixel.FlxG.log.notice("hue: " + hsv.hue + " opposite: " + opposite + " warmer: " + warmer + " colder: " + colder);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoRGBA(warmer,hsv.saturation,hsv.value), color3 : flixel.util.FlxColorUtil.HSVtoRGBA(colder,hsv.saturation,hsv.value), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
}
flixel.util.FlxColorUtil.getTriadicHarmony = function(Color) {
	var hsv = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var triadic1 = flixel.util.FlxMath.wrapValue(hsv.hue | 0,120,359);
	var triadic2 = flixel.util.FlxMath.wrapValue(triadic1,120,359);
	return { color1 : Color, color2 : flixel.util.FlxColorUtil.HSVtoRGBA(triadic1,1.0,1.0), color3 : flixel.util.FlxColorUtil.HSVtoRGBA(triadic2,1.0,1.0)};
}
flixel.util.FlxColorUtil.getColorInfo = function(Color) {
	var rgba = flixel.util.FlxColorUtil.getRGBA(Color,null);
	var hsl = flixel.util.FlxColorUtil.RGBtoHSV(Color);
	var result = flixel.util.FlxColorUtil.RGBAtoHexString(Color) + "\n";
	result += "Alpha: " + rgba.alpha + " Red: " + rgba.red + " Green: " + rgba.green + " Blue: " + rgba.blue + "\n";
	result += "Hue: " + hsl.hue + " Saturation: " + hsl.saturation + " Lightnes: " + hsl.lightness;
	return result;
}
flixel.util.FlxColorUtil.RGBAtoHexString = function(Color) {
	var rgba = flixel.util.FlxColorUtil.getRGBA(Color,null);
	return "0x" + flixel.util.FlxColorUtil.colorToHexString(rgba.alpha | 0) + flixel.util.FlxColorUtil.colorToHexString(rgba.red) + flixel.util.FlxColorUtil.colorToHexString(rgba.green) + flixel.util.FlxColorUtil.colorToHexString(rgba.blue);
}
flixel.util.FlxColorUtil.RGBAtoWebString = function(Color) {
	var rgba = flixel.util.FlxColorUtil.getRGBA(Color,null);
	return "#" + flixel.util.FlxColorUtil.colorToHexString(rgba.red) + flixel.util.FlxColorUtil.colorToHexString(rgba.green) + flixel.util.FlxColorUtil.colorToHexString(rgba.blue);
}
flixel.util.FlxColorUtil.colorToHexString = function(Color) {
	var digits = "0123456789ABCDEF";
	var lsd = Color % 16;
	var msd = (Color - lsd) / 16;
	return digits.charAt(msd | 0) + digits.charAt(lsd | 0);
}
flixel.util.FlxColorUtil.HSVtoRGBA = function(H,S,V,Alpha) {
	if(Alpha == null) Alpha = 255;
	var result = 0;
	if(S == 0.0) result = Alpha << 24 | (V * 255 | 0) << 16 | (V * 255 | 0) << 8 | (V * 255 | 0); else {
		H = H / 60.0;
		var f = H - (H | 0);
		var p = V * (1.0 - S);
		var q = V * (1.0 - S * f);
		var t = V * (1.0 - S * (1.0 - f));
		var _g = H | 0;
		switch(_g) {
		case 0:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (t * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 1:
			result = Alpha << 24 | (q * 255 | 0) << 16 | (V * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 2:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (V * 255 | 0) << 8 | (t * 255 | 0);
			break;
		case 3:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (q * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 4:
			result = Alpha << 24 | (t * 255 | 0) << 16 | (p * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 5:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (p * 255 | 0) << 8 | (q * 255 | 0);
			break;
		default:
			flixel.FlxG.log.warn("FlxColor: HSVtoRGB: Unknown color");
		}
	}
	return result;
}
flixel.util.FlxColorUtil.RGBtoHSV = function(Color) {
	var rgb = flixel.util.FlxColorUtil.getRGBA(Color,null);
	var red = rgb.red / 255;
	var green = rgb.green / 255;
	var blue = rgb.blue / 255;
	var min = Math.min(red,Math.min(green,blue));
	var max = Math.max(red,Math.max(green,blue));
	var delta = max - min;
	var lightness = (max + min) / 2;
	var hue = 0;
	var saturation;
	if(delta == 0) {
		hue = 0;
		saturation = 0;
	} else {
		if(lightness < 0.5) saturation = delta / (max + min); else saturation = delta / (2 - max - min);
		var delta_r = ((max - red) / 6 + delta / 2) / delta;
		var delta_g = ((max - green) / 6 + delta / 2) / delta;
		var delta_b = ((max - blue) / 6 + delta / 2) / delta;
		if(red == max) hue = delta_b - delta_g; else if(green == max) hue = 1 / 3 + delta_r - delta_b; else if(blue == max) hue = 2 / 3 + delta_g - delta_r;
		if(hue < 0) hue += 1;
		if(hue > 1) hue -= 1;
	}
	hue *= 360;
	hue = Math.round(hue);
	return { hue : hue, saturation : saturation, lightness : lightness, value : lightness};
}
flixel.util.FlxColorUtil.RGBAtoRGB = function(Color) {
	return (Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255;
}
flixel.util.FlxColorUtil.interpolateColor = function(Color1,Color2,Steps,CurrentStep,Alpha) {
	if(Alpha == null) Alpha = 255;
	var src1 = flixel.util.FlxColorUtil.getRGBA(Color1,null);
	var src2 = flixel.util.FlxColorUtil.getRGBA(Color2,null);
	var r = (src2.red - src1.red) * CurrentStep / Steps + src1.red | 0;
	var g = (src2.green - src1.green) * CurrentStep / Steps + src1.green | 0;
	var b = (src2.blue - src1.blue) * CurrentStep / Steps + src1.blue | 0;
	return Alpha << 24 | r << 16 | g << 8 | b;
}
flixel.util.FlxColorUtil.interpolateColorWithRGB = function(Color,R2,G2,B2,Steps,CurrentStep) {
	var src = flixel.util.FlxColorUtil.getRGBA(Color,null);
	var r = (R2 - src.red) * CurrentStep / Steps + src.red | 0;
	var g = (G2 - src.green) * CurrentStep / Steps + src.green | 0;
	var b = (B2 - src.blue) * CurrentStep / Steps + src.blue | 0;
	return r << 16 | g << 8 | b;
}
flixel.util.FlxColorUtil.interpolateRGB = function(R1,G1,B1,R2,G2,B2,Steps,CurrentStep) {
	var r = (R2 - R1) * CurrentStep / Steps + R1 | 0;
	var g = (G2 - G1) * CurrentStep / Steps + G1 | 0;
	var b = (B2 - B1) * CurrentStep / Steps + B1 | 0;
	return r << 16 | g << 8 | b;
}
flixel.util.FlxColorUtil.darken = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel.util.FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel.util.FlxColorUtil.getAlphaFloat(Color);
	Factor = 1 - Factor;
	r = r * Factor | 0;
	g = g * Factor | 0;
	b = b * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
}
flixel.util.FlxColorUtil.brighten = function(Color,Factor) {
	if(Factor == null) Factor = 0.2;
	flixel.util.FlxMath.bound(Factor,0,1);
	var r = Color >> 16 & 255;
	var g = Color >> 8 & 255;
	var b = Color & 255;
	var a = flixel.util.FlxColorUtil.getAlphaFloat(Color);
	r += (255 - r) * Factor | 0;
	g += (255 - g) * Factor | 0;
	b += (255 - b) * Factor | 0;
	return (((a > 1?a:a * 255) | 0) & 255) << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
}
flixel.util.FlxMath = function() { }
$hxClasses["flixel.util.FlxMath"] = flixel.util.FlxMath;
flixel.util.FlxMath.__name__ = ["flixel","util","FlxMath"];
flixel.util.FlxMath.roundDecimal = function(Value,Precision) {
	var mult = 1;
	var _g = 0;
	while(_g < Precision) {
		var i = _g++;
		mult *= 10;
	}
	return Math.round(Value * mult) / mult;
}
flixel.util.FlxMath.bound = function(Value,Min,Max) {
	var lowerBound = Value < Min?Min:Value;
	return lowerBound > Max?Max:lowerBound;
}
flixel.util.FlxMath.lerp = function(Min,Max,Ratio) {
	return Min + Ratio * (Max - Min);
}
flixel.util.FlxMath.inBounds = function(Value,Min,Max) {
	return Value > Min && Value < Max;
}
flixel.util.FlxMath.computeVelocity = function(Velocity,Acceleration,Drag,Max) {
	if(Acceleration != 0) Velocity += Acceleration * flixel.FlxG.elapsed; else if(Drag != 0) {
		var drag = Drag * flixel.FlxG.elapsed;
		if(Velocity - drag > 0) Velocity = Velocity - drag; else if(Velocity + drag < 0) Velocity += drag; else Velocity = 0;
	}
	if(Velocity != 0 && Max != 0) {
		if(Velocity > Max) Velocity = Max; else if(Velocity < -Max) Velocity = -Max;
	}
	return Velocity;
}
flixel.util.FlxMath.isOdd = function(n) {
	if(((n | 0) & 1) != 0) return true; else return false;
}
flixel.util.FlxMath.isEven = function(n) {
	if(((n | 0) & 1) != 0) return false; else return true;
}
flixel.util.FlxMath.numericComparison = function(num1,num2) {
	if(num2 > num1) return -1; else if(num1 > num2) return 1;
	return 0;
}
flixel.util.FlxMath.pointInCoordinates = function(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
	if(pointX >= rectX && pointX <= rectX + rectWidth) {
		if(pointY >= rectY && pointY <= rectY + rectHeight) return true;
	}
	return false;
}
flixel.util.FlxMath.pointInFlxRect = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.get_right() && pointY >= rect.y && pointY <= rect.get_bottom()) return true;
	return false;
}
flixel.util.FlxMath.mouseInFlxRect = function(useWorldCoords,rect) {
	if(rect == null) return true;
	if(useWorldCoords) return flixel.util.FlxMath.pointInFlxRect(Math.floor(flixel.FlxG.mouse.x),Math.floor(flixel.FlxG.mouse.y),rect); else return flixel.util.FlxMath.pointInFlxRect(flixel.FlxG.mouse.screenX,flixel.FlxG.mouse.screenY,rect);
}
flixel.util.FlxMath.pointInRectangle = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.get_right() && pointY >= rect.y && pointY <= rect.get_bottom()) return true;
	return false;
}
flixel.util.FlxMath.maxAdd = function(value,amount,max,min) {
	if(min == null) min = 0;
	value += amount;
	if(value > max) value = max; else if(value <= min) value = min;
	return value;
}
flixel.util.FlxMath.wrapValue = function(value,amount,max) {
	var diff;
	value = Math.abs(value) | 0;
	amount = Math.abs(amount) | 0;
	max = Math.abs(max) | 0;
	diff = (value + amount) % max;
	return diff;
}
flixel.util.FlxMath.dotProduct = function(ax,ay,bx,by) {
	return ax * bx + ay * by;
}
flixel.util.FlxMath.vectorLength = function(dx,dy) {
	return Math.sqrt(dx * dx + dy * dy);
}
flixel.util.FlxMath.getDistance = function(Point1,Point2) {
	var dx = Point1.x - Point2.x;
	var dy = Point1.y - Point2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flixel.util.FlxMath.distanceBetween = function(SpriteA,SpriteB) {
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
flixel.util.FlxMath.distanceToPoint = function(Sprite,Target) {
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
flixel.util.FlxMath.distanceToMouse = function(Sprite) {
	var dx = Sprite.x + Sprite.origin.x - flixel.FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - flixel.FlxG.mouse.screenY;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
flixel.util.FlxMath.distanceToTouch = function(Sprite,Touch) {
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
flixel.util.FlxMath.getDecimals = function(Number) {
	var helperArray = Std.string(Number).split(".");
	var decimals = 0;
	if(helperArray.length > 1) decimals = helperArray[1].length;
	return decimals;
}
flixel.util.FlxMath.equal = function(aValueA,aValueB,aDiff) {
	if(aDiff == null) aDiff = 0.00001;
	return Math.abs(aValueA - aValueB) <= aDiff;
}
flixel.util.FlxMisc = function() { }
$hxClasses["flixel.util.FlxMisc"] = flixel.util.FlxMisc;
flixel.util.FlxMisc.__name__ = ["flixel","util","FlxMisc"];
flixel.util.FlxMisc.__properties__ = {get_gameContainer:"get_gameContainer",get_mouseIndex:"get_mouseIndex"}
flixel.util.FlxMisc.openURL = function(URL) {
	flash.Lib.getURL(new flash.net.URLRequest(URL),"_blank");
}
flixel.util.FlxMisc.deepCopy = function(v) {
	if(!Reflect.isObject(v)) return v; else if(js.Boot.__instanceof(v,Array)) {
		var r = Type.createInstance(Type.getClass(v),[]);
		var _g1 = 0, _g = v.length;
		while(_g1 < _g) {
			var ii = _g1++;
			r.push(flixel.util.FlxMisc.deepCopy(v[ii]));
		}
		return r;
	} else if(Type.getClass(v) == null) {
		var obj = { };
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var ff = _g1[_g];
			++_g;
			obj[ff] = flixel.util.FlxMisc.deepCopy(Reflect.field(v,ff));
		}
		return obj;
	} else {
		var obj = Type.createEmptyInstance(Type.getClass(v));
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var ff = _g1[_g];
			++_g;
			obj[ff] = flixel.util.FlxMisc.deepCopy(Reflect.field(v,ff));
		}
		return obj;
	}
	return null;
}
flixel.util.FlxMisc.get_mouseIndex = function() {
	var mouseIndex = -1;
	try {
		mouseIndex = flixel.FlxG.camera._flashSprite.parent.__children.length - 4;
	} catch( e ) {
		if( js.Boot.__instanceof(e,haxe.io.Error) ) {
		} else throw(e);
	}
	return mouseIndex;
}
flixel.util.FlxMisc.get_gameContainer = function() {
	return js.Boot.__cast(flixel.FlxG.camera._flashSprite.parent , flash.display.Sprite);
}
flixel.util.FlxPool = function() {
	this._pool = [];
};
$hxClasses["flixel.util.FlxPool"] = flixel.util.FlxPool;
flixel.util.FlxPool.__name__ = ["flixel","util","FlxPool"];
flixel.util.FlxPool.prototype = {
	get_length: function() {
		return this._pool.length;
	}
	,clear: function() {
		var oldPool = this._pool;
		this._pool = [];
		return oldPool;
	}
	,putUnsafe: function(obj) {
		if(obj != null) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,put: function(obj) {
		if(obj != null && flixel.util.FlxArrayUtil.indexOf_flixel_util_FlxPool_T(this._pool,obj) < 0) {
			obj.destroy();
			this._pool.push(obj);
		}
	}
	,get: function() {
		var obj = this._pool.pop();
		if(obj == null) obj = new flixel.util.FlxPool.T();
		return obj;
	}
	,__class__: flixel.util.FlxPool
	,__properties__: {get_length:"get_length"}
}
flixel.util.FlxRandom = function() { }
$hxClasses["flixel.util.FlxRandom"] = flixel.util.FlxRandom;
flixel.util.FlxRandom.__name__ = ["flixel","util","FlxRandom"];
flixel.util.FlxRandom["int"] = function() {
	var result = flixel.util.FlxRandom.intHelper | 0;
	result++;
	result *= 75;
	result %= 65537;
	result--;
	flixel.util.FlxRandom.intHelper++;
	if(flixel.util.FlxRandom.intHelper == 65536) flixel.util.FlxRandom.intHelper = 0;
	return result;
}
flixel.util.FlxRandom.intRanged = function(Min,Max,Excludes) {
	if(Min == null) Min = 0;
	if(Max == null) Max = 16777215;
	if(Min == Max) return Math.floor(Min);
	if(Excludes != null) {
		Excludes.sort(flixel.util.FlxMath.numericComparison);
		var result;
		do if(Min < Max) result = Math.floor(Min + Math.random() * (Max + 1 - Min)); else result = Math.floor(Max + Math.random() * (Min + 1 - Max)); while(flixel.util.FlxArrayUtil.indexOf_Int(Excludes,result) >= 0);
		return result;
	} else if(Min < Max) return Math.floor(Min + Math.random() * (Max + 1 - Min)); else return Math.floor(Max + Math.random() * (Min + 1 - Max));
}
flixel.util.FlxRandom["float"] = function() {
	flixel.util.FlxRandom.globalSeed = 69621 * (flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
	if(flixel.util.FlxRandom.globalSeed <= 0) flixel.util.FlxRandom.globalSeed += 1;
	return flixel.util.FlxRandom.globalSeed;
}
flixel.util.FlxRandom.floatRanged = function(min,max) {
	if(min == null) min = 0;
	if(max == null) max = 16777215;
	if(min == max) return min; else if(min < max) return min + Math.random() * (max - min); else return max + Math.random() * (min - max);
}
flixel.util.FlxRandom.srand = function(Seed) {
	return 69621 * (Seed * 2147483647 | 0) % 2147483647 / 2147483647;
}
flixel.util.FlxRandom.chanceRoll = function(chance) {
	if(chance == null) chance = 50;
	if(chance <= 0) return false; else if(chance >= 100) return true; else if(Math.random() * 100 >= chance) return false; else return true;
}
flixel.util.FlxRandom.sign = function() {
	return Math.random() > 0.5?1:-1;
}
flixel.util.FlxRandom.color = function(min,max,alpha) {
	if(alpha == null) alpha = 255;
	if(max == null) max = 255;
	if(min == null) min = 0;
	return flixel.util.FlxColorUtil.getRandomColor(min,max,alpha);
}
flixel.util.FlxSpriteUtil = function() { }
$hxClasses["flixel.util.FlxSpriteUtil"] = flixel.util.FlxSpriteUtil;
flixel.util.FlxSpriteUtil.__name__ = ["flixel","util","FlxSpriteUtil"];
flixel.util.FlxSpriteUtil.alphaMask = function(source,mask,output) {
	var data = null;
	if(js.Boot.__instanceof(source,String)) data = flixel.system.FlxAssets.getBitmapData(source); else if(js.Boot.__instanceof(source,Class)) data = Type.createInstance(source,[]).bitmapData; else if(js.Boot.__instanceof(source,flash.display.BitmapData)) data = (js.Boot.__cast(source , flash.display.BitmapData)).clone(); else return null;
	var maskData = null;
	if(js.Boot.__instanceof(mask,String)) maskData = flixel.system.FlxAssets.getBitmapData(mask); else if(js.Boot.__instanceof(mask,Class)) maskData = Type.createInstance(mask,[]).bitmapData; else if(js.Boot.__instanceof(mask,flash.display.BitmapData)) maskData = mask; else return null;
	data.copyChannel(maskData,new flash.geom.Rectangle(0,0,data.___textureBuffer != null?data.___textureBuffer.width:0,data.___textureBuffer != null?data.___textureBuffer.height:0),new flash.geom.Point(),8,8);
	output.set_pixels(data);
	return output;
}
flixel.util.FlxSpriteUtil.alphaMaskFlxSprite = function(sprite,mask,output) {
	var data = sprite.get_pixels();
	data.copyChannel(mask.get_pixels(),new flash.geom.Rectangle(0,0,sprite.width,sprite.height),new flash.geom.Point(),8,8);
	output.set_pixels(data);
	return output;
}
flixel.util.FlxSpriteUtil.screenWrap = function(sprite,Left,Right,Top,Bottom) {
	if(Bottom == null) Bottom = true;
	if(Top == null) Top = true;
	if(Right == null) Right = true;
	if(Left == null) Left = true;
	if(Left && sprite.x < 0) sprite.set_x(flixel.FlxG.width); else if(Right && sprite.x > flixel.FlxG.width) sprite.set_x(0);
	if(Top && sprite.y < 0) sprite.set_y(flixel.FlxG.height); else if(Bottom && sprite.y > flixel.FlxG.height) sprite.set_y(0);
}
flixel.util.FlxSpriteUtil.space = function(sprites,startX,startY,horizontalSpacing,verticalSpacing,spaceFromBounds) {
	if(spaceFromBounds == null) spaceFromBounds = false;
	if(verticalSpacing == null) verticalSpacing = 0;
	if(horizontalSpacing == null) horizontalSpacing = 0;
	var prevWidth = 0;
	var prevHeight = 0;
	var _g1 = 0, _g = sprites.length;
	while(_g1 < _g) {
		var i = _g1++;
		var sprite = sprites[i];
		if(spaceFromBounds) {
			sprite.set_x(startX + prevWidth + i * horizontalSpacing);
			sprite.set_y(startY + prevHeight + i * verticalSpacing);
		} else {
			sprite.set_x(startX + i * horizontalSpacing);
			sprite.set_y(startY + i * verticalSpacing);
		}
	}
}
flixel.util.FlxSpriteUtil.screenCenter = function(sprite,xAxis,yAxis) {
	if(yAxis == null) yAxis = true;
	if(xAxis == null) xAxis = true;
	if(xAxis) sprite.set_x(flixel.FlxG.width / 2 - sprite.width / 2);
	if(yAxis) sprite.set_y(flixel.FlxG.height / 2 - sprite.height / 2);
	return sprite;
}
flixel.util.FlxSpriteUtil.drawLine = function(sprite,StartX,StartY,EndX,EndY,Color,Thickness) {
	if(Thickness == null) Thickness = 1;
	var gfx = flixel.util.FlxSpriteUtil.flashGfx;
	gfx.clear();
	gfx.moveTo(StartX,StartY);
	var alphaComponent = (Color >> 24 & 255) / 255;
	if(alphaComponent < 0) alphaComponent = 0;
	gfx.lineStyle(Thickness,Color,alphaComponent);
	gfx.lineTo(EndX,EndY);
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite);
}
flixel.util.FlxSpriteUtil.drawRect = function(sprite,X,Y,Width,Height,Color) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255);
	flixel.util.FlxSpriteUtil.flashGfx.drawRect(X,Y,Width,Height);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite);
}
flixel.util.FlxSpriteUtil.drawRoundRect = function(sprite,X,Y,Width,Height,EllipseWidth,EllipseHeight,Color) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255);
	flixel.util.FlxSpriteUtil.flashGfx.drawRoundRect(X,Y,Width,Height,EllipseWidth,EllipseHeight);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite);
}
flixel.util.FlxSpriteUtil.drawCircle = function(sprite,X,Y,Radius,Color) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255);
	flixel.util.FlxSpriteUtil.flashGfx.drawCircle(X,Y,Radius);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite);
}
flixel.util.FlxSpriteUtil.drawEllipse = function(sprite,X,Y,Width,Height,Color) {
	flixel.util.FlxSpriteUtil.flashGfx.clear();
	flixel.util.FlxSpriteUtil.flashGfx.beginFill((Color >> 16 & 255) << 16 | (Color >> 8 & 255) << 8 | Color & 255);
	flixel.util.FlxSpriteUtil.flashGfx.drawEllipse(X,Y,Width,Height);
	flixel.util.FlxSpriteUtil.flashGfx.endFill();
	flixel.util.FlxSpriteUtil.updateSpriteGraphic(sprite);
}
flixel.util.FlxSpriteUtil.updateSpriteGraphic = function(sprite) {
	sprite.get_pixels().draw(flixel.util.FlxSpriteUtil.flashGfxSprite);
	sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
}
flixel.util.FlxSpriteUtil.fill = function(sprite,Color) {
	sprite.get_pixels().fillRect(sprite.get_pixels().rect,Color);
	if(sprite.get_pixels() != sprite.framePixels) sprite.dirty = true;
	sprite.cachedGraphics.get_tilesheet().destroyFrameBitmapDatas();
}
flixel.util.FlxSpriteUtil.flicker = function(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback) {
	if(ForceRestart == null) ForceRestart = true;
	if(EndVisibility == null) EndVisibility = true;
	if(Interval == null) Interval = 0.04;
	if(Duration == null) Duration = 1;
	flixel.effects.FlxFlicker.flicker(Object,Duration,Interval,EndVisibility,ForceRestart,CompletionCallback,ProgressCallback);
}
flixel.util.FlxSpriteUtil.isFlickering = function(Object) {
	return flixel.effects.FlxFlicker.isFlickering(Object);
}
flixel.util.FlxSpriteUtil.stopFlickering = function(Object) {
	flixel.effects.FlxFlicker.stopFlickering(Object);
}
flixel.util.FlxStringUtil = function() { }
$hxClasses["flixel.util.FlxStringUtil"] = flixel.util.FlxStringUtil;
flixel.util.FlxStringUtil.__name__ = ["flixel","util","FlxStringUtil"];
flixel.util.FlxStringUtil.formatTicks = function(StartTicks,EndTicks) {
	return Math.abs(EndTicks - StartTicks) / 1000 + "s";
}
flixel.util.FlxStringUtil.formatTime = function(Seconds,ShowMS) {
	if(ShowMS == null) ShowMS = false;
	var timeString = (Seconds / 60 | 0) + ":";
	var timeStringHelper = (Seconds | 0) % 60;
	if(timeStringHelper < 10) timeString += "0";
	timeString += timeStringHelper;
	if(ShowMS) {
		timeString += ".";
		timeStringHelper = (Seconds - (Seconds | 0)) * 100 | 0;
		if(timeStringHelper < 10) timeString += "0";
		timeString += timeStringHelper;
	}
	return timeString;
}
flixel.util.FlxStringUtil.formatArray = function(AnyArray) {
	var string = "";
	if(AnyArray != null && AnyArray.length > 0) {
		string = Std.string(AnyArray[0]);
		var i = 1;
		var l = AnyArray.length;
		while(i < l) string += ", " + Std.string(AnyArray[i++]);
	}
	return string;
}
flixel.util.FlxStringUtil.formatFlxPoint = function(Point,Precision) {
	var string = "";
	if(Point != null) {
		var xValue = flixel.util.FlxMath.roundDecimal(Point.x,Precision);
		var yValue = flixel.util.FlxMath.roundDecimal(Point.y,Precision);
		string = "x: " + xValue + " | y: " + yValue;
	}
	return string;
}
flixel.util.FlxStringUtil.formatStringMap = function(AnyMap) {
	var string = "";
	var $it0 = AnyMap.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		string += Std.string(key);
		string += ", ";
	}
	return string.substring(0,string.length - 2);
}
flixel.util.FlxStringUtil.formatMoney = function(Amount,ShowDecimal,EnglishStyle) {
	if(EnglishStyle == null) EnglishStyle = true;
	if(ShowDecimal == null) ShowDecimal = true;
	var helper;
	var amount = Math.floor(Amount);
	var string = "";
	var comma = "";
	var zeroes = "";
	while(amount > 0) {
		if(string.length > 0 && comma.length <= 0) {
			if(EnglishStyle) comma = ","; else comma = ".";
		}
		zeroes = "";
		helper = amount - Math.floor(amount / 1000) * 1000;
		amount = Math.floor(amount / 1000);
		if(amount > 0) {
			if(helper < 100) zeroes += "0";
			if(helper < 10) zeroes += "0";
		}
		string = zeroes + helper + comma + string;
	}
	if(ShowDecimal) {
		amount = (Amount * 100 | 0) - (Amount | 0) * 100;
		string += (EnglishStyle?".":",") + amount;
		if(amount < 10) string += "0";
	}
	return string;
}
flixel.util.FlxVector = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	flixel.util.FlxPoint.call(this,X,Y);
};
$hxClasses["flixel.util.FlxVector"] = flixel.util.FlxVector;
flixel.util.FlxVector.__name__ = ["flixel","util","FlxVector"];
flixel.util.FlxVector.__super__ = flixel.util.FlxPoint;
flixel.util.FlxVector.prototype = $extend(flixel.util.FlxPoint.prototype,{
	clone: function(vec) {
		if(vec == null) vec = new flixel.util.FlxVector();
		vec.set_x(this.x);
		vec.set_y(this.y);
		return vec;
	}
	,isValid: function() {
		return !Math.isNaN(this.x) && !Math.isNaN(this.y) && Math.isFinite(this.x) && Math.isFinite(this.y);
	}
	,bounceWithFriction: function(normal,bounceCoeff,friction) {
		if(friction == null) friction = 0;
		if(bounceCoeff == null) bounceCoeff = 1;
		var p1 = this.projectToNormalized(normal.rightNormal(flixel.util.FlxVector._vector3),flixel.util.FlxVector._vector1);
		var p2 = this.projectToNormalized(normal,flixel.util.FlxVector._vector2);
		var bounceX = -p2.x;
		var bounceY = -p2.y;
		var frictionX = p1.x;
		var frictionY = p1.y;
		this.set_x(bounceX * bounceCoeff + frictionX * friction);
		this.set_y(bounceY * bounceCoeff + frictionY * friction);
		return this;
	}
	,bounce: function(normal,bounceCoeff) {
		if(bounceCoeff == null) bounceCoeff = 1;
		var d = (1 + bounceCoeff) * (this.x * normal.x + this.y * normal.y);
		var _g = this;
		_g.set_x(_g.x - d * normal.x);
		var _g = this;
		_g.set_y(_g.y - d * normal.y);
		return this;
	}
	,distSquared: function(v) {
		var dx = v.x - this.x;
		var dy = v.y - this.y;
		return dx * dx + dy * dy;
	}
	,dist: function(v) {
		return Math.sqrt(this.distSquared(v));
	}
	,sign: function(a,b) {
		var signFl = (a.x - this.x) * (b.y - this.y) - (a.y - this.y) * (b.x - this.x);
		if(signFl == 0) return 0;
		return Math.round(signFl / Math.abs(signFl));
	}
	,degreesBetween: function(v) {
		return (function($this) {
			var $r;
			flixel.util.FlxVector._vector1 = $this.clone(flixel.util.FlxVector._vector1);
			flixel.util.FlxVector._vector2 = $this.clone(flixel.util.FlxVector._vector2);
			if(!(Math.abs($this.x * $this.x + $this.y * $this.y - 1) < 0.0000001 * 0.0000001)) flixel.util.FlxVector._vector1.normalize();
			if(!(Math.abs(v.x * v.x + v.y * v.y - 1) < 0.0000001 * 0.0000001)) flixel.util.FlxVector._vector2.normalize();
			$r = Math.acos(flixel.util.FlxVector._vector1.dotProduct(flixel.util.FlxVector._vector2));
			return $r;
		}(this)) * flixel.util.FlxAngle.TO_DEG;
	}
	,radiansBetween: function(v) {
		flixel.util.FlxVector._vector1 = this.clone(flixel.util.FlxVector._vector1);
		flixel.util.FlxVector._vector2 = this.clone(flixel.util.FlxVector._vector2);
		if(!(Math.abs(this.x * this.x + this.y * this.y - 1) < 0.0000001 * 0.0000001)) flixel.util.FlxVector._vector1.normalize();
		if(!(Math.abs(v.x * v.x + v.y * v.y - 1) < 0.0000001 * 0.0000001)) flixel.util.FlxVector._vector2.normalize();
		return Math.acos(flixel.util.FlxVector._vector1.dotProduct(flixel.util.FlxVector._vector2));
	}
	,truncate: function(max) {
		this.set_length(Math.min(max,Math.sqrt(this.x * this.x + this.y * this.y)));
		return this;
	}
	,findIntersectionInBounds: function(a,b,v,intersection) {
		if(intersection == null) intersection = new flixel.util.FlxVector();
		var t1 = this.ratio(a,b,v);
		var t2 = v.ratio(b,a,this);
		if(!Math.isNaN(t1) && !Math.isNaN(t2) && t1 > 0 && t1 <= 1 && t2 > 0 && t2 <= 1) return intersection.set(a.x + t1 * this.x,a.y + t1 * this.y);
		return intersection.set(Math.NaN,Math.NaN);
	}
	,findIntersection: function(a,b,v,intersection) {
		var t = this.ratio(a,b,v);
		if(intersection == null) intersection = new flixel.util.FlxVector();
		if(Math.isNaN(t)) return intersection.set(Math.NaN,Math.NaN);
		return intersection.set(a.x + t * this.x,a.y + t * this.y);
	}
	,ratio: function(a,b,v) {
		if(Math.abs(this.x * v.y - this.y * v.x) < 0.0000001 * 0.0000001) return Math.NaN;
		if(this.x * this.x + this.y * this.y < 0.0000001 * 0.0000001 || v.x * v.x + v.y * v.y < 0.0000001 * 0.0000001) return Math.NaN;
		flixel.util.FlxVector._vector1 = b.clone(flixel.util.FlxVector._vector1);
		flixel.util.FlxVector._vector1.substract(a);
		return flixel.util.FlxVector._vector1.perpProduct(v) / (this.y * v.x + -this.x * v.y);
	}
	,perpProduct: function(v) {
		return this.y * v.x + -this.x * v.y;
	}
	,projectToNormalized: function(v,proj) {
		var dp = this.x * v.x + this.y * v.y;
		if(proj == null) proj = new flixel.util.FlxVector();
		return proj.set(dp * v.x,dp * v.y);
	}
	,projectTo: function(v,proj) {
		var dp = this.x * v.x + this.y * v.y;
		var lenSq = v.x * v.x + v.y * v.y;
		if(proj == null) proj = new flixel.util.FlxVector();
		return proj.set(dp * v.x / lenSq,dp * v.y / lenSq);
	}
	,negateNew: function() {
		return this.clone(null).negate();
	}
	,negate: function() {
		var _g = this;
		_g.set_x(_g.x * -1);
		var _g = this;
		_g.set_y(_g.y * -1);
		return this;
	}
	,get_ly: function() {
		return -this.x;
	}
	,get_lx: function() {
		return this.y;
	}
	,leftNormal: function(vec) {
		if(vec == null) vec = new flixel.util.FlxVector();
		vec.set(this.y,-this.x);
		return vec;
	}
	,get_ry: function() {
		return this.x;
	}
	,get_rx: function() {
		return -this.y;
	}
	,rightNormal: function(vec) {
		if(vec == null) vec = new flixel.util.FlxVector();
		vec.set(-this.y,this.x);
		return vec;
	}
	,rotateWithTrig: function(sin,cos) {
		var tempX = this.x;
		this.set_x(tempX * cos - this.y * sin);
		this.set_y(tempX * sin + this.y * cos);
		return this;
	}
	,rotateByDegrees: function(degs) {
		return this.rotateByRadians(degs * flixel.util.FlxAngle.TO_RAD);
	}
	,rotateByRadians: function(rads) {
		var s = Math.sin(rads);
		var c = Math.cos(rads);
		var tempX = this.x;
		this.set_x(tempX * c - this.y * s);
		this.set_y(tempX * s + this.y * c);
		return this;
	}
	,set_radians: function(rads) {
		var len = Math.sqrt(this.x * this.x + this.y * this.y);
		this.set_x(len * Math.cos(rads));
		this.set_y(len * Math.sin(rads));
		return rads;
	}
	,get_radians: function() {
		if(Math.abs(this.x) < 0.0000001 && Math.abs(this.y) < 0.0000001) return 0;
		return Math.atan2(this.y,this.x);
	}
	,set_degrees: function(degs) {
		this.set_radians(degs * flixel.util.FlxAngle.TO_RAD);
		return degs;
	}
	,get_degrees: function() {
		return this.get_radians() * flixel.util.FlxAngle.TO_DEG;
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y;
	}
	,set_length: function(l) {
		var a = this.get_radians();
		this.set_x(l * Math.cos(a));
		this.set_y(l * Math.sin(a));
		return l;
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,equals: function(v) {
		return Math.abs(this.x - v.x) < 0.0000001 && Math.abs(this.y - v.y) < 0.0000001;
	}
	,isNormalized: function() {
		return Math.abs(this.x * this.x + this.y * this.y - 1) < 0.0000001 * 0.0000001;
	}
	,get_dy: function() {
		if(Math.abs(this.x) < 0.0000001 && Math.abs(this.y) < 0.0000001) return 0;
		return this.y / Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,get_dx: function() {
		if(Math.abs(this.x) < 0.0000001 && Math.abs(this.y) < 0.0000001) return 0;
		return this.x / Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,normalize: function() {
		if(Math.abs(this.x) < 0.0000001 && Math.abs(this.y) < 0.0000001) {
			this.set_x(1);
			return this;
		}
		return this.scale(1 / Math.sqrt(this.x * this.x + this.y * this.y));
	}
	,zero: function() {
		this.set_x(this.set_y(0));
		return this;
	}
	,isZero: function() {
		return Math.abs(this.x) < 0.0000001 && Math.abs(this.y) < 0.0000001;
	}
	,isParallel: function(v) {
		return Math.abs(this.x * v.y - this.y * v.x) < 0.0000001 * 0.0000001;
	}
	,crossProductLength: function(v) {
		return this.x * v.y - this.y * v.x;
	}
	,isPerpendicular: function(v) {
		return Math.abs(this.x * v.x + this.y * v.y) < 0.0000001 * 0.0000001;
	}
	,dotProdWithNormalizing: function(v) {
		var normalized = v.clone(flixel.util.FlxVector._vector1).normalize();
		return this.x * normalized.x + this.y * normalized.y;
	}
	,dotProduct: function(v) {
		return this.x * v.x + this.y * v.y;
	}
	,substractNew: function(v) {
		return this.clone(null).substract(v);
	}
	,substract: function(v) {
		var _g = this;
		_g.set_x(_g.x - v.x);
		var _g = this;
		_g.set_y(_g.y - v.y);
		return this;
	}
	,addNew: function(v) {
		return this.clone(null).add(v);
	}
	,add: function(v) {
		var _g = this;
		_g.set_x(_g.x + v.x);
		var _g = this;
		_g.set_y(_g.y + v.y);
		return this;
	}
	,scaleNew: function(k) {
		return this.clone(null).scale(k);
	}
	,scale: function(k) {
		var _g = this;
		_g.set_x(_g.x * k);
		var _g = this;
		_g.set_y(_g.y * k);
		return this;
	}
	,set: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.set_x(X);
		this.set_y(Y);
		return this;
	}
	,__class__: flixel.util.FlxVector
	,__properties__: $extend(flixel.util.FlxPoint.prototype.__properties__,{get_dx:"get_dx",get_dy:"get_dy",set_length:"set_length",get_length:"get_length",get_lengthSquared:"get_lengthSquared",set_degrees:"set_degrees",get_degrees:"get_degrees",set_radians:"set_radians",get_radians:"get_radians",get_rx:"get_rx",get_ry:"get_ry",get_lx:"get_lx",get_ly:"get_ly"})
});
flixel.util.loaders = {}
flixel.util.loaders.CachedGraphics = function(key,bitmap,persist) {
	if(persist == null) persist = false;
	this.destroyOnNoUse = false;
	this._useCount = 0;
	this.isDumped = false;
	this.persist = false;
	this.key = key;
	this.bitmap = bitmap;
	this.persist = persist;
};
$hxClasses["flixel.util.loaders.CachedGraphics"] = flixel.util.loaders.CachedGraphics;
flixel.util.loaders.CachedGraphics.__name__ = ["flixel","util","loaders","CachedGraphics"];
flixel.util.loaders.CachedGraphics.prototype = {
	set_useCount: function(Value) {
		this._useCount = Value;
		if(this._useCount <= 0 && this.destroyOnNoUse && !this.persist) flixel.FlxG.bitmap.remove(this.key);
		return Value;
	}
	,get_useCount: function() {
		return this._useCount;
	}
	,get_canBeDumped: function() {
		return this.assetsClass != null || this.assetsKey != null;
	}
	,destroy: function() {
		this.key = null;
		if(this.bitmap != null) this.bitmap.dispose();
		this.bitmap = null;
		if(this.data != null) this.data.destroy();
		this.data = null;
		if(this._tilesheet != null) this._tilesheet.destroy();
		this._tilesheet = null;
		this.assetsKey = null;
		this.assetsClass = null;
	}
	,getRegionForFrame: function(frameName) {
		var region = new flixel.util.loaders.TextureRegion(this);
		var frame = this.get_tilesheet().getFrame(frameName);
		if(frame != null) {
			region.region.startX = frame.frame.x | 0;
			region.region.startY = frame.frame.y | 0;
			region.region.width = frame.frame.width | 0;
			region.region.height = frame.frame.height | 0;
		}
		return region;
	}
	,getBitmapFromSystem: function() {
		var newBitmap = null;
		if(this.assetsClass != null) newBitmap = Type.createInstance(js.Boot.__cast(this.assetsClass , Class),[]); else if(this.assetsKey != null) newBitmap = openfl.Assets.getBitmapData(this.assetsKey,false);
		return newBitmap;
	}
	,get_tilesheet: function() {
		if(this._tilesheet == null) {
			if(this.isDumped) this.onContext();
			this._tilesheet = new flixel.system.layer.TileSheetData(this.bitmap);
		}
		return this._tilesheet;
	}
	,onContext: function() {
		if(this.isDumped) {
			this.undump();
			this.dump();
		}
	}
	,undump: function() {
	}
	,dump: function() {
	}
	,__class__: flixel.util.loaders.CachedGraphics
	,__properties__: {get_canBeDumped:"get_canBeDumped",get_tilesheet:"get_tilesheet",set_useCount:"set_useCount",get_useCount:"get_useCount"}
}
flixel.util.loaders.TextureAtlasFrame = function() {
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
};
$hxClasses["flixel.util.loaders.TextureAtlasFrame"] = flixel.util.loaders.TextureAtlasFrame;
flixel.util.loaders.TextureAtlasFrame.__name__ = ["flixel","util","loaders","TextureAtlasFrame"];
flixel.util.loaders.TextureAtlasFrame.prototype = {
	destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
	}
	,__class__: flixel.util.loaders.TextureAtlasFrame
}
flixel.util.loaders.TexturePackerData = function(description,assetName) {
	this.assetName = assetName;
	this.description = description;
	this.frames = new Array();
	this.parseData();
};
$hxClasses["flixel.util.loaders.TexturePackerData"] = flixel.util.loaders.TexturePackerData;
flixel.util.loaders.TexturePackerData.__name__ = ["flixel","util","loaders","TexturePackerData"];
flixel.util.loaders.TexturePackerData.prototype = {
	destroy: function() {
		var l = this.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			this.frames[i].destroy();
		}
		this.frames = null;
		this.assetName = null;
		this.asset = null;
	}
	,parseData: function() {
		if(this.frames.length != 0) return;
		if(this.assetName == null || this.description == null) return;
		this.asset = flixel.FlxG.bitmap.add(this.assetName).bitmap;
		var data = haxe.Json.parse(openfl.Assets.getText(this.description));
		var _g = 0, _g1 = Lambda.array(data.frames);
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			var texFrame = new flixel.util.loaders.TextureAtlasFrame();
			texFrame.trimmed = frame.trimmed;
			texFrame.rotated = frame.rotated;
			texFrame.name = frame.filename;
			texFrame.sourceSize = new flixel.util.FlxPoint(frame.sourceSize.w,frame.sourceSize.h);
			texFrame.offset = new flixel.util.FlxPoint(0,0);
			texFrame.offset.set(frame.spriteSourceSize.x,frame.spriteSourceSize.y);
			if(frame.rotated) texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.h,frame.frame.w); else texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.w,frame.frame.h);
			this.frames.push(texFrame);
		}
	}
	,__class__: flixel.util.loaders.TexturePackerData
}
flixel.util.loaders.TextureRegion = function(data,startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(spacingY == null) spacingY = 0;
	if(spacingX == null) spacingX = 0;
	if(tileHeight == null) tileHeight = 0;
	if(tileWidth == null) tileWidth = 0;
	if(startY == null) startY = 0;
	if(startX == null) startX = 0;
	this.data = data;
	if(width <= 0) width = data.bitmap.get_width();
	if(height <= 0) height = data.bitmap.get_height();
	this.region = new flixel.system.layer.Region(startX,startY,tileWidth,tileHeight,spacingX,spacingY,width,height);
};
$hxClasses["flixel.util.loaders.TextureRegion"] = flixel.util.loaders.TextureRegion;
flixel.util.loaders.TextureRegion.__name__ = ["flixel","util","loaders","TextureRegion"];
flixel.util.loaders.TextureRegion.prototype = {
	destroy: function() {
		this.data = null;
		this.region = null;
	}
	,clone: function() {
		return new flixel.util.loaders.TextureRegion(this.data,this.region.startX,this.region.startY,this.region.tileWidth,this.region.tileHeight,this.region.spacingX,this.region.spacingY,this.region.width,this.region.height);
	}
	,__class__: flixel.util.loaders.TextureRegion
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Json = function() {
};
$hxClasses["haxe.Json"] = haxe.Json;
haxe.Json.__name__ = ["haxe","Json"];
haxe.Json.parse = function(text) {
	return new haxe.Json().doParse(text);
}
haxe.Json.prototype = {
	parseNumber: function(c) {
		var start = this.pos - 1;
		var minus = c == 45, digit = !minus, zero = c == 48;
		var point = false, e = false, pm = false, end = false;
		while(true) {
			c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 48:
				if(zero && !point) this.invalidNumber(start);
				if(minus) {
					minus = false;
					zero = true;
				}
				digit = true;
				break;
			case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				if(zero && !point) this.invalidNumber(start);
				if(minus) minus = false;
				digit = true;
				zero = false;
				break;
			case 46:
				if(minus || point) this.invalidNumber(start);
				digit = false;
				point = true;
				break;
			case 101:case 69:
				if(minus || zero || e) this.invalidNumber(start);
				digit = false;
				e = true;
				break;
			case 43:case 45:
				if(!e || pm) this.invalidNumber(start);
				digit = false;
				pm = true;
				break;
			default:
				if(!digit) this.invalidNumber(start);
				this.pos--;
				end = true;
			}
			if(end) break;
		}
		var f = Std.parseFloat(HxOverrides.substr(this.str,start,this.pos - start));
		var i = f | 0;
		return i == f?i:f;
	}
	,invalidNumber: function(start) {
		throw "Invalid number at position " + start + ": " + HxOverrides.substr(this.str,start,this.pos - start);
	}
	,parseString: function() {
		var start = this.pos;
		var buf = new StringBuf();
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			if(c == 34) break;
			if(c == 92) {
				buf.addSub(this.str,start,this.pos - start - 1);
				c = this.str.charCodeAt(this.pos++);
				switch(c) {
				case 114:
					buf.b += "\r";
					break;
				case 110:
					buf.b += "\n";
					break;
				case 116:
					buf.b += "\t";
					break;
				case 98:
					buf.b += "";
					break;
				case 102:
					buf.b += "";
					break;
				case 47:case 92:case 34:
					buf.b += String.fromCharCode(c);
					break;
				case 117:
					var uc = Std.parseInt("0x" + HxOverrides.substr(this.str,this.pos,4));
					this.pos += 4;
					buf.b += String.fromCharCode(uc);
					break;
				default:
					throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
				}
				start = this.pos;
			} else if(c != c) throw "Unclosed string";
		}
		buf.addSub(this.str,start,this.pos - start - 1);
		return buf.b;
	}
	,parseRec: function() {
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 32:case 13:case 10:case 9:
				break;
			case 123:
				var obj = { }, field = null, comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 125:
						if(field != null || comma == false) this.invalidChar();
						return obj;
					case 58:
						if(field == null) this.invalidChar();
						obj[field] = this.parseRec();
						field = null;
						comma = true;
						break;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					case 34:
						if(comma) this.invalidChar();
						field = this.parseString();
						break;
					default:
						this.invalidChar();
					}
				}
				break;
			case 91:
				var arr = [], comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 93:
						if(comma == false) this.invalidChar();
						return arr;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					default:
						if(comma) this.invalidChar();
						this.pos--;
						arr.push(this.parseRec());
						comma = true;
					}
				}
				break;
			case 116:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 114 || this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return true;
			case 102:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 97 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 115 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return false;
			case 110:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 108) {
					this.pos = save;
					this.invalidChar();
				}
				return null;
			case 34:
				return this.parseString();
			case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 45:
				return this.parseNumber(c);
			default:
				this.invalidChar();
			}
		}
	}
	,invalidChar: function() {
		this.pos--;
		throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
	}
	,doParse: function(str) {
		this.str = str;
		this.pos = 0;
		return this.parseRec();
	}
	,__class__: haxe.Json
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype = {
	serialize: function(v) {
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 0:
			this.buf.b += "n";
			break;
		case 1:
			if(v == 0) {
				this.buf.b += "z";
				return;
			}
			this.buf.b += "i";
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += "k"; else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += "d";
				this.buf.b += Std.string(v);
			}
			break;
		case 3:
			this.buf.b += Std.string(v?"t":"f");
			break;
		case 6:
			var c = $e[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) return;
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += "a";
				var l = v.length;
				var _g1 = 0;
				while(_g1 < l) {
					var i = _g1++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += "n"; else {
								this.buf.b += "u";
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += "n"; else {
						this.buf.b += "u";
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += "h";
				break;
			case List:
				this.buf.b += "l";
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += "h";
				break;
			case Date:
				var d = v;
				this.buf.b += "v";
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case haxe.ds.StringMap:
				this.buf.b += "b";
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.IntMap:
				this.buf.b += "q";
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += ":";
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.ObjectMap:
				this.buf.b += "M";
				var v1 = v;
				var $it3 = v1.keys();
				while( $it3.hasNext() ) {
					var k = $it3.next();
					var id = Reflect.field(k,"__id__");
					Reflect.deleteField(k,"__id__");
					this.serialize(k);
					k.__id__ = id;
					this.serialize(v1.h[k.__id__]);
				}
				this.buf.b += "h";
				break;
			case haxe.io.Bytes:
				var v1 = v;
				var i = 0;
				var max = v1.length - 2;
				var charsBuf = new StringBuf();
				var b64 = haxe.Serializer.BASE64;
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt((b2 << 2 | b3 >> 6) & 63));
					charsBuf.b += Std.string(b64.charAt(b3 & 63));
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt(b2 << 2 & 63));
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt(b1 << 4 & 63));
				}
				var chars = charsBuf.b;
				this.buf.b += "s";
				this.buf.b += Std.string(chars.length);
				this.buf.b += ":";
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += "C";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += "g";
				} else {
					this.buf.b += "c";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += "o";
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += ":";
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += ":";
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g1 = 2;
			while(_g1 < l) {
				var i = _g1++;
				this.serialize(v[i]);
			}
			this.cache.push(v);
			break;
		case 5:
			throw "Cannot serialize function";
			break;
		default:
			throw "Cannot serialize " + Std.string(v);
		}
	}
	,serializeFields: function(v) {
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += Std.string(i);
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += ":";
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,__class__: haxe.Serializer
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		var id = key.__id__;
		if(!this.h.hasOwnProperty(id)) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.prototype = {
	__class__: haxe.io.Path
}
openfl.AssetCache = function() {
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,__class__: openfl.AssetCache
}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData);
				return bitmapData;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 116, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 122, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 128, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 165, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 171, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 177, className : "openfl.Assets", methodName : "getBytes"});
	return null;
}
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 228, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 234, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 240, className : "openfl.Assets", methodName : "getFont"});
	return null;
}
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
}
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 290, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 296, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 302, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
}
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 337, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 343, className : "openfl.Assets", methodName : "getPath"});
	return null;
}
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) return openfl.Assets.cache.sound.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 394, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 400, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 406, className : "openfl.Assets", methodName : "getSound"});
	return null;
}
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
}
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
}
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData);
				handler(bitmapData);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 573, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 579, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
}
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 609, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 615, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
}
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 666, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 672, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
}
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 702, className : "openfl.Assets", methodName : "loadLibrary"});
}
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 730, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 736, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
}
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		handler(openfl.Assets.cache.sound.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 787, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 793, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
}
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var callback = function(bytes) {
		if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
	};
	openfl.Assets.loadBytes(id,callback);
}
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
}
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
}
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName = HxOverrides.substr(key,key.indexOf(":") + 1,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
}
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
flash.ui.Multitouch.maxTouchPoints = 2;
flash.ui.Multitouch.supportedGestures = [];
flash.ui.Multitouch.supportsGestureEvents = false;
if(typeof(JSON) != "undefined") haxe.Json = JSON;
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
flixel.FlxBasic._ACTIVECOUNT = 0;
flixel.FlxBasic._VISIBLECOUNT = 0;
flixel.FlxObject.SEPARATE_BIAS = 4;
flixel.FlxObject.LEFT = 1;
flixel.FlxObject.RIGHT = 16;
flixel.FlxObject.UP = 256;
flixel.FlxObject.DOWN = 4096;
flixel.FlxObject.NONE = 0;
flixel.FlxObject.CEILING = 256;
flixel.FlxObject.FLOOR = 4096;
flixel.FlxObject.WALL = 17;
flixel.FlxObject.ANY = 4369;
flixel.FlxObject._pZero = new flixel.util.FlxPoint();
flixel.FlxObject._firstSeparateFlxRect = new flixel.util.FlxRect();
flixel.FlxObject._secondSeparateFlxRect = new flixel.util.FlxRect();
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
flixel.group.FlxTypedGroup.ASCENDING = -1;
flixel.group.FlxTypedGroup.DESCENDING = 1;
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.system.System.useCodePage = false;
flash.text.AntiAliasType.ADVANCED = "advanced";
flash.text.AntiAliasType.NORMAL = "normal";
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
flixel.FlxCamera.STYLE_LOCKON = 0;
flixel.FlxCamera.STYLE_PLATFORMER = 1;
flixel.FlxCamera.STYLE_TOPDOWN = 2;
flixel.FlxCamera.STYLE_TOPDOWN_TIGHT = 3;
flixel.FlxCamera.STYLE_SCREEN_BY_SCREEN = 4;
flixel.FlxCamera.STYLE_NO_DEAD_ZONE = 5;
flixel.FlxCamera.SHAKE_BOTH_AXES = 0;
flixel.FlxCamera.SHAKE_HORIZONTAL_ONLY = 1;
flixel.FlxCamera.SHAKE_VERTICAL_ONLY = 2;
flixel.util.FlxTimer.pool = new flixel.util.FlxPool_flixel_util_FlxTimer();
flixel.tweens.FlxTween.PERSIST = 1;
flixel.tweens.FlxTween.LOOPING = 2;
flixel.tweens.FlxTween.PINGPONG = 4;
flixel.tweens.FlxTween.ONESHOT = 8;
flixel.tweens.FlxTween.BACKWARD = 16;
flixel.util.FlxPath.pool = new flixel.util.FlxPool_flixel_util_FlxPath();
flixel.util.FlxPath.FORWARD = 0;
flixel.util.FlxPath.BACKWARD = 1;
flixel.util.FlxPath.LOOP_FORWARD = 16;
flixel.util.FlxPath.LOOP_BACKWARD = 256;
flixel.util.FlxPath.YOYO = 4096;
flixel.util.FlxPath.HORIZONTAL_ONLY = 65536;
flixel.util.FlxPath.VERTICAL_ONLY = 1048576;
flixel.util.FlxPath._point = new flixel.util.FlxPoint();
flixel.util.FlxSave.SUCCESS = 0;
flixel.util.FlxSave.PENDING = 1;
flixel.util.FlxSave.ERROR = 2;
flixel.FlxG.LIBRARY_NAME = "HaxeFlixel";
flixel.FlxG.LIBRARY_MAJOR_VERSION = "3";
flixel.FlxG.LIBRARY_MINOR_VERSION = "0.0-dev";
flixel.FlxG.paused = false;
flixel.FlxG.autoPause = true;
flixel.FlxG.autoResize = false;
flixel.FlxG.fixedTimestep = true;
flixel.FlxG.elapsed = 0;
flixel.FlxG.timeScale = 1;
flixel.FlxG.worldBounds = new flixel.util.FlxRect();
flixel.FlxG.save = new flixel.util.FlxSave();
flixel.FlxG.inputs = new flixel.system.frontEnds.InputFrontEnd();
flixel.FlxG.console = new flixel.system.frontEnds.ConsoleFrontEnd();
flixel.FlxG.log = new flixel.system.frontEnds.LogFrontEnd();
flixel.FlxG.watch = new flixel.system.frontEnds.WatchFrontEnd();
flixel.FlxG["debugger"] = new flixel.system.frontEnds.DebuggerFrontEnd();
flixel.FlxG.vcr = new flixel.system.frontEnds.VCRFrontEnd();
flixel.FlxG.bitmap = new flixel.system.frontEnds.BitmapFrontEnd();
flixel.FlxG.cameras = new flixel.system.frontEnds.CameraFrontEnd();
flixel.FlxG.plugins = new flixel.system.frontEnds.PluginFrontEnd();
flixel.FlxG.sound = new flixel.system.frontEnds.SoundFrontEnd();
flixel.animation.FlxAnimationController.prefixLength = 0;
flixel.animation.FlxAnimationController.postfixLength = 0;
flixel.animation.FlxPrerotatedAnimation.PREROTATED = "prerotated_animation";
flixel.effects.FlxFlicker._pool = new flixel.util.FlxPool_flixel_effects_FlxFlicker();
flixel.effects.FlxFlicker._boundObjects = new haxe.ds.ObjectMap();
flixel.system._FlxAssets.FontDefault.resourceName = "NME_font_flixel_system__FlxAssets_FontDefault";
flixel.system._FlxAssets.FontDebugger.resourceName = "NME_font_flixel_system__FlxAssets_FontDebugger";
flixel.system.FlxAssets.IMG_WINDOW_HANDLE = "flixel/img/debugger/windowHandle.png";
flixel.system.FlxAssets.IMG_FLIXEL = "flixel/img/debugger/flixel.png";
flixel.system.FlxAssets.IMG_VISUAL_DEBUG = "flixel/img/debugger/buttons/visualDebug.png";
flixel.system.FlxAssets.IMG_WATCH_DEBUG = "flixel/img/debugger/buttons/watchDebug.png";
flixel.system.FlxAssets.IMG_STATS_DEBUG = "flixel/img/debugger/buttons/statsDebug.png";
flixel.system.FlxAssets.IMG_LOG_DEBUG = "flixel/img/debugger/buttons/logDebug.png";
flixel.system.FlxAssets.IMG_CONSOLE = "flixel/img/debugger/buttons/console.png";
flixel.system.FlxAssets.IMG_OPEN = "flixel/img/debugger/buttons/open.png";
flixel.system.FlxAssets.IMG_RECORD_OFF = "flixel/img/debugger/buttons/record_off.png";
flixel.system.FlxAssets.IMG_RECORD_ON = "flixel/img/debugger/buttons/record_on.png";
flixel.system.FlxAssets.IMG_STOP = "flixel/img/debugger/buttons/stop.png";
flixel.system.FlxAssets.IMG_RESTART = "flixel/img/debugger/buttons/restart.png";
flixel.system.FlxAssets.IMG_PAUSE = "flixel/img/debugger/buttons/pause.png";
flixel.system.FlxAssets.IMG_PLAY = "flixel/img/debugger/buttons/play.png";
flixel.system.FlxAssets.IMG_STEP = "flixel/img/debugger/buttons/step.png";
flixel.system.FlxAssets.IMG_LOGO = "flixel/img/logo/logo.png";
flixel.system.FlxAssets.IMG_DEFAULT = "flixel/img/logo/default.png";
flixel.system.FlxAssets.IMG_CORNERS = "flixel/img/preloader/corners.png";
flixel.system.FlxAssets.IMG_LIGHT = "flixel/img/preloader/light.png";
flixel.system.FlxAssets.IMG_AUTO = "flixel/img/tile/autotiles.png";
flixel.system.FlxAssets.IMG_AUTO_ALT = "flixel/img/tile/autotiles_alt.png";
flixel.system.FlxAssets.IMG_BUTTON = "flixel/img/ui/button.png";
flixel.system.FlxAssets.IMG_CURSOR = "flixel/img/ui/cursor.png";
flixel.system.FlxAssets.IMG_BASE = "flixel/img/ui/analog/base.png";
flixel.system.FlxAssets.IMG_THUMB = "flixel/img/ui/analog/thumb.png";
flixel.system.FlxAssets.IMG_BUTTON_A = "flixel/img/ui/virtualpad/a.png";
flixel.system.FlxAssets.IMG_BUTTON_B = "flixel/img/ui/virtualpad/b.png";
flixel.system.FlxAssets.IMG_BUTTON_C = "flixel/img/ui/virtualpad/c.png";
flixel.system.FlxAssets.IMG_BUTTON_X = "flixel/img/ui/virtualpad/x.png";
flixel.system.FlxAssets.IMG_BUTTON_Y = "flixel/img/ui/virtualpad/y.png";
flixel.system.FlxAssets.IMG_BUTTON_UP = "flixel/img/ui/virtualpad/up.png";
flixel.system.FlxAssets.IMG_BUTTON_DOWN = "flixel/img/ui/virtualpad/down.png";
flixel.system.FlxAssets.IMG_BUTTON_LEFT = "flixel/img/ui/virtualpad/left.png";
flixel.system.FlxAssets.IMG_BUTTON_RIGHT = "flixel/img/ui/virtualpad/right.png";
flixel.system.FlxAssets.SND_BEEP = "flixel/snd/beep.wav";
flixel.system.FlxAssets.SND_FLIXEL = "flixel/snd/flixel.wav";
flixel.system.FlxAssets.FONT_DEFAULT = "Nokia Cellphone FC Small";
flixel.system.FlxAssets.FONT_DEBUGGER = "Arial";
flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
flixel.system.FlxQuadTree.A_LIST = 0;
flixel.system.FlxQuadTree.B_LIST = 1;
flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
flixel.system.debug.Window.BG_COLOR = -580952225;
flixel.system.debug.Window.TOP_COLOR = -1442840576;
flixel.system.debug.Window.WINDOW_AMOUNT = 0;
flixel.system.debug.FlxDebugger.GUTTER = 2;
flixel.system.debug.FlxDebugger.TOP_HEIGHT = 20;
flixel.system.debug.Log.MAX_LOG_LINES = 200;
flixel.system.debug.LogStyle.NORMAL = new flixel.system.debug.LogStyle();
flixel.system.debug.LogStyle.WARNING = new flixel.system.debug.LogStyle("[WARNING] ","FFFF00",12,true,false,false,"flixel/snd/beep.wav",true);
flixel.system.debug.LogStyle.ERROR = new flixel.system.debug.LogStyle("[ERROR] ","FF0000",12,true,false,false,"flixel/snd/beep.wav",true);
flixel.system.debug.LogStyle.NOTICE = new flixel.system.debug.LogStyle("[NOTICE] ","008000",12,true);
flixel.system.debug.LogStyle.CONSOLE = new flixel.system.debug.LogStyle("&#62; ","0000ff",12,true);
flixel.system.debug.Stats.UPDATE_DELAY = 500;
flixel.system.debug.Stats.WIDTH = 100;
flixel.system.debug.Watch.MAX_LOG_LINES = 1024;
flixel.system.debug.Watch.LINE_HEIGHT = 15;
flixel.system.input.keyboard.FlxKey.JUST_RELEASED = -1;
flixel.system.input.keyboard.FlxKey.RELEASED = 0;
flixel.system.input.keyboard.FlxKey.PRESSED = 1;
flixel.system.input.keyboard.FlxKey.JUST_PRESSED = 2;
flixel.system.input.keyboard.FlxKeyboard.TOTAL = 256;
flixel.system.input.mouse.FlxMouseButton.FAST_PRESS_RELEASE = -2;
flixel.system.input.mouse.FlxMouseButton.JUST_RELEASED = -1;
flixel.system.input.mouse.FlxMouseButton.RELEASED = 0;
flixel.system.input.mouse.FlxMouseButton.PRESSED = 1;
flixel.system.input.mouse.FlxMouseButton.JUST_PRESSED = 2;
flixel.system.input.touch.FlxTouchManager.maxTouchPoints = 0;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
flixel.system.layer.TileSheetExt._DRAWCALLS = 0;
flixel.system.layer.frames.FlxFrame.POINT = new flash.geom.Point();
flixel.system.layer.frames.FlxFrame.MATRIX = new flash.geom.Matrix();
flixel.text.FlxText.BORDER_NONE = 0;
flixel.text.FlxText.BORDER_SHADOW = 1;
flixel.text.FlxText.BORDER_OUTLINE = 2;
flixel.text.FlxText.BORDER_OUTLINE_FAST = 3;
flixel.text.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
flixel.text.pxText.PxBitmapFont.ZERO_POINT = new flash.geom.Point();
flixel.tile.FlxTilemap.imgAuto = "flixel/img/tile/autotiles.png";
flixel.tile.FlxTilemap.imgAutoAlt = "flixel/img/tile/autotiles_alt.png";
flixel.tile.FlxTilemap.OFF = 0;
flixel.tile.FlxTilemap.AUTO = 1;
flixel.tile.FlxTilemap.ALT = 2;
flixel.tweens.FlxEase.PI = Math.PI;
flixel.tweens.FlxEase.PI2 = Math.PI / 2;
flixel.tweens.FlxEase.EL = 2 * flixel.tweens.FlxEase.PI / .45;
flixel.tweens.FlxEase.B1 = 1 / 2.75;
flixel.tweens.FlxEase.B2 = 2 / 2.75;
flixel.tweens.FlxEase.B3 = 1.5 / 2.75;
flixel.tweens.FlxEase.B4 = 2.5 / 2.75;
flixel.tweens.FlxEase.B5 = 2.25 / 2.75;
flixel.tweens.FlxEase.B6 = 2.625 / 2.75;
flixel.tweens.motion.CircularMotion._CIRC = Math.PI * 2;
flixel.tweens.motion.QuadMotion.point = new flixel.util.FlxPoint();
flixel.tweens.motion.QuadMotion.point2 = new flixel.util.FlxPoint();
flixel.tweens.motion.QuadPath._Point = new flixel.util.FlxPoint();
flixel.tweens.motion.QuadPath._Point2 = new flixel.util.FlxPoint();
flixel.ui.FlxButton.NORMAL = 0;
flixel.ui.FlxButton.HIGHLIGHT = 1;
flixel.ui.FlxButton.PRESSED = 2;
flixel.util.FlxAngle.cosTable = new Array();
flixel.util.FlxAngle.sinTable = new Array();
flixel.util.FlxAngle.TO_DEG = 180 / Math.PI;
flixel.util.FlxAngle.TO_RAD = Math.PI / 180;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
flixel.util.FlxCollision.CAMERA_WALL_OUTSIDE = 0;
flixel.util.FlxCollision.CAMERA_WALL_INSIDE = 1;
flixel.util.FlxCollision.debug = new flash.display.BitmapData(1,1,false);
flixel.util.FlxColor.RED = -65536;
flixel.util.FlxColor.YELLOW = -256;
flixel.util.FlxColor.GREEN = -16744448;
flixel.util.FlxColor.BLUE = -16776961;
flixel.util.FlxColor.PINK = -16181;
flixel.util.FlxColor.PURPLE = -8388480;
flixel.util.FlxColor.WHITE = -1;
flixel.util.FlxColor.BLACK = -16777216;
flixel.util.FlxColor.GRAY = -8355712;
flixel.util.FlxColor.BROWN = -6927616;
flixel.util.FlxColor.TRANSPARENT = 0;
flixel.util.FlxColor.IVORY = -16;
flixel.util.FlxColor.BEIGE = -657956;
flixel.util.FlxColor.WHEAT = -663885;
flixel.util.FlxColor.TAN = -2968436;
flixel.util.FlxColor.KHAKI = -3952495;
flixel.util.FlxColor.SILVER = -4144960;
flixel.util.FlxColor.CHARCOAL = -12171706;
flixel.util.FlxColor.NAVY_BLUE = -16777088;
flixel.util.FlxColor.ROYAL_BLUE = -16233314;
flixel.util.FlxColor.MEDIUM_BLUE = -16777011;
flixel.util.FlxColor.AZURE = -16744449;
flixel.util.FlxColor.CYAN = -16711681;
flixel.util.FlxColor.AQUAMARINE = -8388652;
flixel.util.FlxColor.TEAL = -16744320;
flixel.util.FlxColor.FOREST_GREEN = -14513374;
flixel.util.FlxColor.OLIVE = -8355840;
flixel.util.FlxColor.CHARTREUSE = -8388864;
flixel.util.FlxColor.LIME = -4194560;
flixel.util.FlxColor.GOLDEN = -10496;
flixel.util.FlxColor.GOLDENROD = -2448096;
flixel.util.FlxColor.CORAL = -32944;
flixel.util.FlxColor.SALMON = -360334;
flixel.util.FlxColor.HOT_PINK = -258112;
flixel.util.FlxColor.FUCHSIA = -34817;
flixel.util.FlxColor.PUCE = -3372903;
flixel.util.FlxColor.MAUVE = -2051841;
flixel.util.FlxColor.LAVENDER = -4882724;
flixel.util.FlxColor.PLUM = -8113799;
flixel.util.FlxColor.INDIGO = -11861886;
flixel.util.FlxColor.MAROON = -8388608;
flixel.util.FlxColor.CRIMSON = -2354116;
flixel.util.FlxMath.MIN_VALUE = 0.0000000000000001;
flixel.util.FlxMath.MAX_VALUE = 1.79e+308;
flixel.util.FlxRandom.intHelper = 0;
flixel.util.FlxRandom.MAX_RANGE = 16777215;
flixel.util.FlxSpriteUtil.flashGfxSprite = new flash.display.Sprite();
flixel.util.FlxSpriteUtil.flashGfx = flixel.util.FlxSpriteUtil.flashGfxSprite.get_graphics();
flixel.util.FlxVector.EPSILON = 0.0000001;
flixel.util.FlxVector.EPSILON_SQUARED = 0.0000001 * 0.0000001;
flixel.util.FlxVector._vector1 = new flixel.util.FlxVector();
flixel.util.FlxVector._vector2 = new flixel.util.FlxVector();
flixel.util.FlxVector._vector3 = new flixel.util.FlxVector();
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
ApplicationMain.main();
})();

//@ sourceMappingURL=sandbox.js.map