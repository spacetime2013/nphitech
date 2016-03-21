<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
<meta name="decorator" content="default"/>
<title>Insert title here</title>
<script src="${ctxStatic}/supermap/libs/SuperMap.Include.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/MapConfig.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/MapContainer.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="${ctxStatic}/easyui/themes/gray/easyui.css">
<link rel="stylesheet" type="text/css" href="${ctxStatic}/easyui/themes/icon.css">
<script src="${ctxStatic}/easyui/jquery.easyui.min.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/business/CompanySearch.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/business/measure.js" type="text/javascript"></script>

<!-- <link href="${ctxStatic}/bootstrap/2.3.1/css_default/bootstrap.min.css" rel="stylesheet" type="text/css"/> -->
<link href="${ctxStatic}/jqGrid/4.6/css/ui.jqgrid.css" rel="stylesheet" type="text/css" />
<link href="${ctxStatic}/jqGrid/4.6/css/default/jquery-ui-1.8.2.custom.css" rel="stylesheet" type="text/css" />
<!-- <link href="${ctxStatic}/common/jeesite.css" type="text/css" rel="stylesheet"/> -->
<script src="${ctxStatic}/jqGrid/4.6/i18n/grid.locale-cn.js" type="text/javascript"></script>
<script src="${ctxStatic}/jqGrid/4.6/js/jquery.jqGrid.js" type="text/javascript"></script>
<script src="${ctxStatic}/jqGrid/4.6/plugins/grid.complexHeaders.js" type="text/javascript"></script>
</head>
<body>
    <div id="mapDiv" style="position:absolute; width:100%; height:100%; margin: 0; padding: 0; border: 0px;display:block">
    </div>
    <div id="sw" style="display:none">
    	<img alt="" src="${ctxStatic}/images/sw1.png">
    </div>
    <div id="searchWin" class="easyui-tabs" data-options="tools:'#tab-tools', onSelect: SuperMap.Business.CompanySearch.onSelect" style="width:350px; height:auto; position:absolute;z-index: 100; left: 100px; top: 0px;">
		<div title="企业查询" style="padding:10px;text-align:center" >
			企业名称：<input type="text" id="input_qymc" width="20px">&nbsp;&nbsp;
			<input class="btn btn-primary" type="button" value="搜索" onclick="SuperMap.Business.CompanySearch.queryByName()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<!-- <input class="btn btn-primary" type="button" value="取消"> -->
		</div>
		<div title="综合查询" style="padding:10px;text-align:center">
			企业名称：<input type="text" id="input_qymc2" width="20px"><br>
			企业地址：<input type="text" id="input_qydz" width="20px"><br>
			经营范围：<input type="text" id="input_qyjyfw" width="20px"><br>
			<!-- 产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值：<input type="text" id="input_qycz" width="20px"><br> -->
			<input class="btn btn-primary" type="button" value="搜索" onclick="SuperMap.Business.CompanySearch.queryByCondition()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<!-- <input class="btn btn-primary" type="button" value="取消"> -->
		</div>
	</div>
	<div id="result" style="width:350px; height:auto; position:absolute;z-index: 100; left: 100px; top: 120px;">
		<table id="list"></table> 
		<!-- <div id="pager"></div> -->
	</div>
	<div id="tab-tools">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-collapse'" onclick="SuperMap.Business.CompanySearch.onExpand()"></a>
	</div>
    <div class="easyui-panel" style="padding:5px; position:absolute;z-index: 100; right: 10px; top: 0px; width: 300px;">
		<a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-marker'">标记</a>
		<a href="#" class="easyui-menubutton" data-options="menu:'#mm1',iconCls:'icon-measure'">测量</a>
		<a href="#" class="easyui-menubutton" data-options="menu:'#mm2',iconCls:'icon-switch'">地图切换</a>
		<a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-trash'" onclick="javascript:SuperMap.MapContainer.trash()">清除</a>
	</div>
	<div id="mm1" style="width:100px;" data-options="onClick:SuperMap.Business.Measure.measureComputer">
		<div data-options="iconCls:'icon-distance', name:'distance'">测距</div>
		<div data-options="iconCls:'icon-area', name:'area'">侧面</div>
	</div>
	<div id="mm2" style="width:100px;" data-options="onClick:SuperMap.MapContainer.changemap">
		<div id="sl" data-options="iconCls:'icon-2D'">二维地图</div>
		<div id="yx" data-options="iconCls:'icon-graphic'">影像地图</div>
		<div id="rp" data-options="iconCls:'icon-3D'">三维地图</div>
	</div>
    <script type="text/javascript">
    var contextPath = "${ctxStatic}";
    var ctxPath = "${ctx}";
    $(document).ready(function() {
    	SuperMap.MapContainer.initialize();
    });
    </script>
</body>
</html>