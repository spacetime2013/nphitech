var map;
$(document).ready(function() {
	map = new SuperMap.Map("mapDiv", { controls:[
		new SuperMap.Control.ScaleLine(),
	    new SuperMap.Control.PanZoomBar({showSlider: true}),
	    new SuperMap.Control.MousePosition(),
	    //new SuperMap.Control.LayerSwitcher(),
	    new SuperMap.Control.OverviewMap({maximized: false}),
	    new SuperMap.Control.Navigation({
		    dragPanOptions:{
		    	enableKinetic:true
		    }
	    })],
   		//scales: [1 / 13000000, 1 / 9750000, 1 / 6500000, 1 / 3250000, 1 / 1625000, 1 / 812500, 1 / 406250, 1 / 203125, 1 / 100000, 1 / 50000, 1 / 25000, 1 / 10000, 1 / 5000, 1 / 2000],
        allOverlays: true
	});
	var baseLayer = new SuperMap.Layer.TiledDynamicRESTLayer(SuperMap.MapConfig.LayerNames.baseLayer, SuperMap.MapConfig.MapServer.baseLayerServer, {transparent: true, cacheEnabled: true}, {maxResolution:"auto"});
	baseLayer.events.on({"layerInitialized": function(layer) {
		map.addLayer(layer);
		map.setCenter(new SuperMap.LonLat(113.53818, 22.26929), 4);
		//map.zoomToMaxExtent();
	}});
});