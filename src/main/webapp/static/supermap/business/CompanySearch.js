SuperMap.Business = SuperMap.Business || {};
SuperMap.Business.CompanySearch = SuperMap.Business.CompanySearch || {};
//是否初始化
SuperMap.Business.CompanySearch.isInit = true;

/**
 * 企业查询窗口标签选择
 */
SuperMap.Business.CompanySearch.onSelect = function (title, index) {
	$("#result").css("top", $("#searchWin").height());
	$("#list").setGridHeight($("#mapDiv").height() - $("#searchWin").height()-55);
};

/**
 * 企业查询窗口展开或收缩
 */
SuperMap.Business.CompanySearch.onExpand = function () {
	if ($("#searchWin").height() == 30) {
		$("#searchWin").css("height", "auto");
		$("#result").css("top", $("#searchWin").height());
	} else {
		$("#searchWin").css("height", "30px");
		$("#result").css("top", "30px");
	}
	$("#list").setGridHeight($("#mapDiv").height() - $("#searchWin").height()-55);
};

/**
 * 企业查询
 */
SuperMap.Business.CompanySearch.queryByName = function() {
	if (!$("#input_qymc").val()) {
		$.jBox.tip("请输入企业名称。", 'error', { focusId: "input_qymc" }); // 关闭设置 yourname 为焦点
        return false;
	}
	var param = new Object();
	param.qname = $("#input_qymc").val();
	SuperMap.Business.CompanySearch.query(param, false);
};

/**
 * 综合查询
 */
SuperMap.Business.CompanySearch.queryByCondition = function() {
	if (!$("#input_qymc2").val() && !$("#input_qydz").val() && !$("#input_qyjyfw").val()) {
		$.jBox.tip("请至少输入名称、地址、经营范围中的一项。", 'error', { focusId: "input_qymc2" }); // 关闭设置 yourname 为焦点
        return false;
	}
	var param = new Object();
	if ($("#input_qymc2").val()) {
		param.qname = $("#input_qymc2").val();
	}
	if ($("#input_qydz").val()) {
		param.qaddress = $("#input_qydz").val();
	}
	if ($("#input_qyjyfw").val()) {
		param.qscope = $("#input_qyjyfw").val();
	}
	SuperMap.Business.CompanySearch.query(param, false);
};

/**
 * 根据条件，查询企业信息
 * param格式为：{qname:"物流", qaddress:"屏东一路", qscope:"交换机"}
 * isInit: 是否初始化
 */
SuperMap.Business.CompanySearch.query = function(param, isInit) {
	SuperMap.Business.CompanySearch.isInit = isInit;
	$.ajax({
    	type: 'POST',
    	url: ctxPath + '/business/companyInfo/json',
    	data: param,
    	success: SuperMap.Business.CompanySearch.queryCompleted,
    	dataType: 'json'
    });
};

/**
 * 查询成功处理方法
 * data格式为：
 * {area: "",
 *  createDate: "2016-03-19 14:38:00",
 *  cytype: "",
 *  isNewRecord: true,
 *  lat: 22.22084977,
 *  lon: 113.4773043,
 *  orgId: "",
 *  people: "",
 *  picture: "",
 *  product: "",
 *  qaddress: "屏北一路11号",
 *  qgm: "",
 *  qid: 256,
 *  qname: "海军南海舰队（原珠海市鹏通物流有限公司集装箱堆放处）",
 *  qscope: "",
 *  remarks: "",
 *  tel: "",
 *  updateDate: "2016-03-19 14:38:00"}
 */
SuperMap.Business.CompanySearch.queryCompleted = function (data) {
	var layer, features = [];
	if (SuperMap.Business.CompanySearch.isInit) {
		layer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.vectorLayer);
	    if(!layer) {
	        //新建矢量图层
	    	layer = SuperMap.MapContainer.createFeatureLayer(SuperMap.MapConfig.LayerNames.vectorLayer, {
	            styleMap: new SuperMap.StyleMap({
	                "default": new SuperMap.Style({
	                    fill: true,
	                    stroke: true,
	                    graphic: true,
	                    externalGraphic: contextPath + "/images/comp.png",
	                    graphicWidth: 16,
                        graphicHeight: 16,
	                    graphicOpacity: 0.8,
	                    graphicXOffset: 0,
	                    graphicYOffset: 0
	                })
	            })
	        });
	    } else {
	    	layer.removeAllFeatures();
	    }
	    $.each(data,function(n,value) {
	    	features.push(new SuperMap.Feature.Vector(new SuperMap.Geometry.Point(value.lon,value.lat),value,null));
	    });
	    layer.addFeatures(features);
	} else {
		layer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.markerLayer);
	    if(!layer) {
	    	layer = SuperMap.MapContainer.createMarkerLayer(SuperMap.MapConfig.LayerNames.markerLayer);
	    } else {
	    	layer.clearMarkers();
	    }
		var size, icon, offset, marker;
		$.each(data,function(n,value) {
			size = new SuperMap.Size(32,32);
			offset = new SuperMap.Pixel(-(size.w/2)+10, -(size.h/2));
			icon = new SuperMap.Icon(contextPath + '/images/comp_blue.png', size, offset);
			marker = new SuperMap.Marker(new SuperMap.LonLat(value.lon,value.lat),icon);
			marker.attributes = value;
			layer.addMarker(marker);
			marker.events.on({
			   "click":SuperMap.Business.CompanySearch.mouseClickHandler,
			   "scope": marker
			});
		});
		SuperMap.MapContainer.map.zoomToExtent(layer.getDataExtent());
		SuperMap.Business.CompanySearch.loadData(data);
	}
};

/**
 * 鼠标点击事件
 */
SuperMap.Business.CompanySearch.mouseClickHandler = function(e) {
	var marker = e.object;
	var lonlat = marker.getLonLat();
	SuperMap.Business.CompanySearch.openInfoWin(lonlat, marker.attributes);
};

/**
 * 弹出浮窗
 */
SuperMap.Business.CompanySearch.openInfoWin = function(lonlat, attributes) {
	var contentHTML = "<div style='font-size:12px;font-weight:bold ; opacity: 1'>";
	contentHTML += "<div>企业ID："+attributes.qid+"</div>";
    contentHTML += "<div>企业名称："+attributes.qname+"</div>";
    contentHTML += "<div>企业地址："+attributes.qaddress+"</div>";
    contentHTML += "<div>经营范围："+attributes.qscope+"</div>";
    contentHTML += "<div>组织ID："+attributes.orgId+"</div>";
    contentHTML += "<div>行业类型："+attributes.cytype+"</div></div>";
	SuperMap.MapContainer.infoPopupWindows("popup_"+attributes.qid, lonlat.lon, lonlat.lat, 100, 100, contentHTML);
};

/**
 * 加载数据，显示结果列表
 */
SuperMap.Business.CompanySearch.loadData = function(mydata) {
	$("#list").jqGrid('clearGridData', false);
	$("#list").jqGrid({
        datatype : "local",
        height : $("#mapDiv").height() - $("#searchWin").height()-55,
        colNames : ['企业名称', '企业地址', '企业ID'],
        colModel : [ 
                     {name : 'qname', index : 'qname', width : 187}, 
                     {name : 'qaddress', index : 'qaddress', width : 150},
                     {name : 'qid', index : 'qid', width : 50, hidden: true}
                   ],
        multiselect : false,
        caption : "查询结果列表",
        onSelectRow: SuperMap.Business.CompanySearch.onSelectRow
      });
	  for ( var i = 0; i <= mydata.length; i++){
		  $("#list").jqGrid('addRowData', i + 1, mydata[i]);
	  }
};

/**
 * 选择表格行触发方法
 */
SuperMap.Business.CompanySearch.onSelectRow = function(rowid) {
	var obj = $("#list").getRowData(rowid);
	var layer = SuperMap.MapContainer.getLayerByName(SuperMap.MapConfig.LayerNames.markerLayer);
	$.each(layer.markers,function(n,marker) {
		if (marker.attributes.qid == obj.qid) {
//			SuperMap.MapContainer.map.panTo(marker.getLonLat());
			SuperMap.MapContainer.map.setCenter(marker.getLonLat());
			SuperMap.Business.CompanySearch.openInfoWin(marker.getLonLat(), marker.attributes);
		}
	});
};