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
   		scales: [1 / 40000, 1 / 20000, 1 / 10000, 1 / 8000, 1 / 4000],
        allOverlays: true
	});
	var baseLayer = new SuperMap.Layer.TiledDynamicRESTLayer(SuperMap.MapConfig.LayerNames.panoramaLayer, SuperMap.MapConfig.MapServer.panoramaLayerServer, {transparent: true, cacheEnabled: true}, {maxResolution:"auto"});
	baseLayer.events.on({"layerInitialized": function(layer) {
		map.addLayer(layer);
//		map.setCenter(new SuperMap.LonLat(113.5715774, 22.2737075), 0);
		map.zoomToMaxExtent();
	}});
});