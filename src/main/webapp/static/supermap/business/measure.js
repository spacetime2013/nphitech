SuperMap.Business = SuperMap.Business || {};
SuperMap.Business.Measure = SuperMap.Business.Measure || {};

/**
 * 测量计算
 * @param type  type="distance"为测量距离，type="area"为测量面积
 */
SuperMap.Business.Measure.measureComputer = function(item) {
    var drawFeatureControl,drawLayer, labelLayer;
    drawLayer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.drawFeatureLayer);
    labelLayer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.labelLayer);
    if(!drawLayer || !labelLayer) {
        //新建矢量图层
        drawLayer = SuperMap.MapContainer.createFeatureLayer(SuperMap.MapConfig.LayerNames.drawFeatureLayer, null);
        drawLayer.style = {fillColor:'#00FF00', fillOpacity:0.5, pointRadius:5, strokeColor:'#aaee77', strokeWidth:3 };
        //新建标签图层
        labelLayer = SuperMap.MapContainer.createFeatureLayer(SuperMap.MapConfig.LayerNames.labelLayer, {
            styleMap: new SuperMap.StyleMap({
                "default": new SuperMap.Style({
                    fill: false,
                    stroke: false,
                    graphic: false,
                    label: "${label}",
                    fontColor: "blue",
                    fontSize: "16px",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                    labelAlign: "center",
                    labelXOffset: 0,
                    labelYOffset: 0,
                    labelOutlineColor: "white",
                    labelOutlineWidth: 3
                })
            })
        });
    } else {
        drawLayer.removeAllFeatures();
        labelLayer.removeAllFeatures();
    }
    drawFeatureControl = SuperMap.MapContainer.getControlById(item.name + "Control");
    if (!drawFeatureControl) {
        if (item.name == "distance") {
            drawFeatureControl = SuperMap.MapContainer.createDrawFeatureControl(drawLayer, item.name + "Control", "line", { multi: true });
        } else {
            drawFeatureControl = SuperMap.MapContainer.createDrawFeatureControl(drawLayer, item.name + "Control", "multilateral", null);
        }
    }
    //注册featureadded事件,触发drawCompleted()方法
    drawFeatureControl.events.on({"featureadded": SuperMap.Business.Measure.drawFeatureCompleted});
    drawFeatureControl.activate();
};

/**
 * 在地图上绘画完成后触发方法，调用测量服务，计算距离和面积
 * @param drawGeometryArgs
 */
SuperMap.Business.Measure.drawFeatureCompleted = function(drawGeometryArgs) {
    //停止画线画面控制
    var drawFeatureControl;
    drawGeometryArgs.object.deactivate();
    //获得图层几何对象
    var geometry = drawGeometryArgs.feature.geometry;

    // MeasureParameters： 量算参数类。 客户端要量算的地物间的距离或某个区域的面积
    //myMeasuerService： 量算服务类，该类负责将量算参数传递到服务端，并获取服务端返回的量算结果
    var measureParam = new SuperMap.REST.MeasureParameters(geometry),
        myMeasuerService = new SuperMap.REST.MeasureService(SuperMap.MapConfig.MapServer.baseLayerServer);
    myMeasuerService.events.on({ "processCompleted": SuperMap.Business.Measure.measureCompleted });
    //对MeasureService类型进行判断和赋值，当判断出是LineString时设置MeasureMode.DISTANCE，否则是MeasureMode.AREA
    if (geometry.CLASS_NAME.indexOf("LineString") > -1) {
        myMeasuerService.measureMode = SuperMap.REST.MeasureMode.DISTANCE;
    } else {
        myMeasuerService.measureMode = SuperMap.REST.MeasureMode.AREA;
    }
    //processAsync负责将客户端的量算参数传递到服务端。
    myMeasuerService.processAsync(measureParam);
};

/**
 * 测量计算后触发方法
 * @param measureEventArgs
 */
SuperMap.Business.Measure.measureCompleted = function(measureEventArgs) {
    var distance = measureEventArgs.result.distance,
        area = measureEventArgs.result.area,
        unit = measureEventArgs.result.unit;
    var vectorLayer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.drawFeatureLayer);
    var labelLayer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.labelLayer);

    var geometry = null;
    if (vectorLayer.features && vectorLayer.features.length > 0) {
        geometry = vectorLayer.features[0].geometry;
    }
    if (distance != -1) {
        labelLayer.addFeatures(new SuperMap.Feature.Vector(geometry.getCentroid(), {label: distance + "米"}, null));
    } else if (area != -1) {
        labelLayer.addFeatures(new SuperMap.Feature.Vector(geometry.getCentroid(), {label: area + "平方米"}, null));
    }
};