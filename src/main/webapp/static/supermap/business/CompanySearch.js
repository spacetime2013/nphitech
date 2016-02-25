var ctxstatic="${ctxStatic}";
var markerLayer;
/**
     * 查询
     * @return {[type]} [description]
     */
    function queryBySQL() {
       // markerLayer.clearMarkers();
        var queryParam, queryBySQLParams, queryBySQLService;
        queryParam = new SuperMap.REST.FilterParameter({
            name: "公司企业@XZ",
            attributeFilter: "SMID < 50"
        });
        queryBySQLParams = new SuperMap.REST.QueryBySQLParameters({
            queryParams: [queryParam]
        });
        queryBySQLService = new SuperMap.REST.QueryBySQLService(SuperMap.MapConfig.MapServer.queryLayerServer, {
            eventListeners: {"processCompleted": processCompleted, "processFailed": processFailed}});
        queryBySQLService.processAsync(queryBySQLParams);
    }
    /**
     * 查询完成触发方法
     * @param  {[type]} queryEventArgs [description]
     * @return {[type]}                [description]
     */
    function processCompleted(queryEventArgs) {
        var i, j, feature, marker,
                result = queryEventArgs.result;
        markerLayer = new SuperMap.Layer.Markers("Markers");
        if (result && result.recordsets) {
            for (i=0; i<result.recordsets.length; i++) {
                if (result.recordsets[i].features) {
                    for (j=0; j<result.recordsets[i].features.length; j++) {
                        feature = result.recordsets[i].features[j];
                        var num =parseInt(feature.attributes.SmID);
                        if(num<15){
	                        var point = feature.geometry,
	                                size = new SuperMap.Size(32, 32),
	                                icon = new SuperMap.Icon("../../../nphitech/static/images/tddown.png", size, null);
	                        marker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
	                        marker.qname = feature.attributes.Name;
	                        marker.events.on({
	                            "click":openInfoWin,
	                            "scope": marker
	                        });
	                        markerLayer.addMarker(marker);
                        }
                        if(15<num&&num<25){
	                        var point = feature.geometry,
	                                size = new SuperMap.Size(32, 32),
	                                icon = new SuperMap.Icon("../../../nphitech/static/images/m1.png", size, null);
	                        marker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
	                        marker.qname = feature.attributes.Name;
	                        marker.events.on({
	                            "click":openInfoWin,
	                            "scope": marker
	                        });
	                        
	                        markerLayer.addMarker(marker);
                        }
                       if(25<num&&num<35){
	                        var point = feature.geometry,
	                                size = new SuperMap.Size(32, 32),
	                                icon = new SuperMap.Icon("../../../nphitech/static/images/m2.png", size, null);
	                        marker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
	                        marker.qname = feature.attributes.Name;
	                        marker.events.on({
	                            "click":openInfoWin,
	                            "scope": marker
	                        });
	                        markerLayer.addMarker(marker);
                        }
                        if(34<num&&num<50){
	                        var point = feature.geometry,
	                                size = new SuperMap.Size(32, 32),
	                                icon = new SuperMap.Icon("../../../nphitech/static/images/m3.png", size, null);
	                        marker = new SuperMap.Marker(new SuperMap.LonLat(point.x, point.y), icon);
	                        marker.qname = feature.attributes.Name;
	                        marker.events.on({
	                            "click":openInfoWin,
	                            "scope": marker
	                        });
	                        markerLayer.addMarker(marker);
                        }
                       // markerLayer.addMarker(marker);
                    }
                }
            }
            map.addLayer(markerLayer);
        }
    }
    /**
     * 打开浮窗
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    function openInfoWin(event) {
        // alert(event.object.sm_capital);
        var marker = event.object;
        var lonlat = marker.getLonLat();
        var contentHTML = "<div style='font-size:1em; opacity: 0.8; overflow-y:hidden;'>";
        contentHTML += "<div>企业名称："+marker.qname+"</div></div>";
        var size = new SuperMap.Size(0, 33);
        var icon = new SuperMap.Icon("./theme/images/marker.png", size, null);
        var popup = new SuperMap.Popup.FramedCloud("popwin",
                new SuperMap.LonLat(lonlat.lon,lonlat.lat),
                null,
                contentHTML,
                icon,
                true);
        infowin = popup;
        map.addPopup(popup, true);
    }
    /**
     * 查询失败后触发方法
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    function processFailed(e) {
        alert(e.error.errorMsg);
    }