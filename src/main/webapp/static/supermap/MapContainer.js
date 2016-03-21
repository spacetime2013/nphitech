SuperMap.MapContainer = SuperMap.MapContainer || {};
SuperMap.MapContainer.map = null;
/**
 * 初始化地图控件
 * mapDiv：为页面div容器
 */
SuperMap.MapContainer.initialize = function() {
	SuperMap.MapContainer.map = new SuperMap.Map("mapDiv", { controls:[
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
 		SuperMap.MapContainer.map.addLayer(layer);
 		SuperMap.MapContainer.map.setCenter(new SuperMap.LonLat(113.53818, 22.26929), 4);
 		//map.zoomToMaxExtent();
 		//初始化企业信息
 		SuperMap.Business.CompanySearch.query({}, true);
 	}});
}

/**
 * 创建矢量图层
 * @param layerName 图层名字
 */
SuperMap.MapContainer.createFeatureLayer = function(layerName, option) {
    var layer = null;
    layer = new SuperMap.Layer.Vector(layerName, option);
    SuperMap.MapContainer.map.addLayer(layer);
    return layer;
};

/**
 * 通过图层名字获取图层对象。
 * @param layerName
 * @returns {*}
 */
SuperMap.MapContainer.getLayerByName = function(layerName) {
    var layer = SuperMap.MapContainer.map.getLayersByName(layerName);
    if (layer != null && layer.length > 0) {
        return layer[0];
    } else {
        return null;
    }
};

/**
 * 地图切换
 */
SuperMap.MapContainer.changemap = function (e) {
	if(e.id=='rp'){
		$("#mapDiv").css('display','none'); 
		$("#sw").css('display','block'); 
	}else if(e.id=='sl'){
		$("#mapDiv").css('display','block'); 
		$("#sw").css('display','none'); 
	}
};

/**
 * 清除所有元素,并移除图层、控件、弹出框
 */
SuperMap.MapContainer.trash = function() {
    //清空弹窗
    if(SuperMap.MapContainer.map.popups.length != 0){
        var i = 0,lengthPopup = SuperMap.MapContainer.map.popups.length;
        while(i < lengthPopup){
            SuperMap.MapContainer.map.removePopup(SuperMap.MapContainer.map.popups[0]);
            i++;
        }
    }
    //清空选择控件
    var controlArray = SuperMap.MapContainer.map.getControlsByClass("SuperMap.Control.SelectFeature");
    for (var i = controlArray.length-1; i >=0; i--) {
        if (controlArray[i].active) {
            controlArray[i].deactivate();
        }
        SuperMap.MapContainer.map.removeControl(controlArray[i]);
    }
    //清空画图控件
    controlArray = SuperMap.MapContainer.map.getControlsByClass("SuperMap.Control.DrawFeature");
    for (var i = controlArray.length-1; i >=0; i--) {
        if (controlArray[i].active) {
            controlArray[i].deactivate();
        }
        SuperMap.MapContainer.map.removeControl(controlArray[i]);
    }
    //清空vector图层
    var layerArray = SuperMap.MapContainer.map.getLayersByClass("SuperMap.Layer.Vector");
    for (var i = layerArray.length-1; i >=0; i--) {
        var layer = layerArray[i];
        if (layer.name == SuperMap.MapConfig.LayerNames.vectorLayer) {
        	continue;
        }
        if (layer.features.length > 0) {
            layer.removeAllFeatures();
        }
        SuperMap.MapContainer.map.removeLayer(layer);
        layer.destroy();
    }
    //清空marker图层
    var markersArray = SuperMap.MapContainer.map.getLayersByClass("SuperMap.Layer.Markers");
    for (var i = markersArray.length-1; i >=0; i--) {
        var layer = markersArray[i];
        if (layer.markers.length > 0) {
            layer.clearMarkers();
        }
        SuperMap.MapContainer.map.removeLayer(layer);
        layer.destroy();
    }
    //清空聚合图层
    layerArray = [];
    layerArray = SuperMap.MapContainer.map.getLayersByClass("SuperMap.Layer.ClusterLayer");
    for (var i = layerArray.length-1; i >=0; i--) {
        var layer = layerArray[i];
        if (layer.features.length > 0) {
            layer.destroyCluster();
        }
        SuperMap.MapContainer.map.removeLayer(layer);
    }
    //清空热点图层
    layerArray = [];
    layerArray = SuperMap.MapContainer.map.getLayersByClass("SuperMap.Layer.HeatMapLayer");
    for (var i = layerArray.length-1; i >=0; i--) {
        var layer = layerArray[i];
        if (layer.features.length > 0) {
            layer.removeAllFeatures();
        }
        SuperMap.MapContainer.map.removeLayer(layer);
        layer.destroy();
    }
};

/**
 * 创建marker图层
 * @param layerId
 * @returns {SuperMap.Layer.Markers}
 */
SuperMap.MapContainer.createMarkerLayer = function(layerId) {
    var markerLayer = new SuperMap.Layer.Markers(layerId);
    SuperMap.MapContainer.map.addLayer(markerLayer);
    return markerLayer;
};

/**
 * 信息弹出窗口
 * @param popupid 浮窗id
 * @param lon	经度
 * @param lat	纬度
 * @param width	宽度
 * @param height	高度
 * @param contentHTML	内容
 */
SuperMap.MapContainer.infoPopupWindows = function(popupid, lon, lat, width, height, contentHTML) {
    var popup = new SuperMap.Popup.FramedCloud(popupid, new SuperMap.LonLat(lon,lat), new SuperMap.Size(width,height), contentHTML, null, true);
    SuperMap.MapContainer.map.addPopup(popup,true);
};

/**
 * 关闭所有弹窗
 */
SuperMap.MapContainer.closeAllPopups = function() {
    //清空弹窗
    if(SuperMap.MapContainer.map.popups.length != 0){
        var i = 0,lengthPopup = SuperMap.MapContainer.map.popups.length;
        while(i < lengthPopup){
            SuperMap.MapContainer.map.removePopup(SuperMap.MapContainer.map.popups[0]);
            i++;
        }
    }
};

/**
 * 创建画图控件
 * @param layer 承载图层
 * @param controlId 控件id
 * @param type  控件类型，主要有：point, line, circle, rectangle, multilateral
 * @param config 控件配置
 * @returns {*}
 */
SuperMap.MapContainer.createDrawFeatureControl = function(layer, controlId, type, config) {
    var drawFeature;
    if (type == "point") {
        drawFeature = new SuperMap.Control.DrawFeature(layer, SuperMap.Handler.Point, config);
    } else if (type == "line") {
        drawFeature = new SuperMap.Control.DrawFeature(layer, SuperMap.Handler.Path, config);
    } else if (type == "circle") {
        drawFeature = new SuperMap.Control.DrawFeature(layer, SuperMap.Handler.RegularPolygon, config);
        drawFeature.handler.setOptions({sides: 50});
    } else if (type == "rectangle") {
        drawFeature = new SuperMap.Control.DrawFeature(layer, SuperMap.Handler.RegularPolygon, config);
        drawFeature.handler.setOptions({sides: 4, irregular: true});
    } else if (type == "multilateral") {
        drawFeature = new SuperMap.Control.DrawFeature(layer, SuperMap.Handler.Polygon, config);
    }
    drawFeature.id = controlId;
    SuperMap.MapContainer.map.addControl(drawFeature);
    return drawFeature;
};

/**
 * 根据控件ID获取控件
 * @param controlId
 * @returns {*}
 */
SuperMap.MapContainer.getControlById = function(controlId) {
    var control = SuperMap.MapContainer.map.getControl(controlId);
    if (!control) {
        control = null;
    }
    return control;
};