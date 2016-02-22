/**
 * 地图相关配置
 */

SuperMap.MapConfig = function() {
	
};

//var org = "http://192.168.1.149:8090";
var org = "http://localhost:8090";

/**
 * 地图服务配置
 */
SuperMap.MapConfig.MapServer = {
    baseLayerServer: org + "/iserver/services/map-XZ/rest/maps/XZ",
    queryLayerServer: org + "/iserver/services/map-XZ/rest/maps/XZ",
    panoramaLayerServer: org + "/iserver/services/map-XZ/rest/maps/企业分布图"
};

/**
 * 图层名字配置
 */
SuperMap.MapConfig.LayerNames = {
    baseLayer: "底图",
    panoramaLayer: "企业分布图"
};