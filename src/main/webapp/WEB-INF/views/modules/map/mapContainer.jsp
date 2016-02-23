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
</head>
<body>
	<!-- <div id="searchWin" class="easyui-window" title="企业查询" data-options="iconCls:'icon-save',minimizable:false,maximizable:false,top:5,left:100,cache:false"
         style="width:350px;height:200px;padding:0;">
        <div class="easyui-tabs" style="width:100%;height:100%;padding:0;margin: 0;">
			<div title="企业查询" style="padding:10px">
				<p style="font-size:14px">jQuery EasyUI framework helps you build your web pages easily.</p>
				<ul>
					<li>easyui is a collection of user-interface plugin based on jQuery.</li>
					<li>easyui provides essential functionality for building modem, interactive, javascript applications.</li>
					<li>using easyui you don't need to write many javascript code, you usually defines user-interface by writing some HTML markup.</li>
					<li>complete framework for HTML5 web page.</li>
					<li>easyui save your time and scales while developing your products.</li>
					<li>easyui is very easy but powerful.</li>
				</ul>
			</div>
			<div title="综合查询" data-options="iconCls:'icon-help',closable:true" style="padding:10px">
				This is the help content.
			</div>
		</div>
    </div> -->
    <div id="mapDiv" style="position:absolute; width:100%; height:100%; margin: 0; padding: 0; border: 0px;display:none">
    </div>
    <div id="sw">
    	<img alt="" src="${ctxStatic}/images/sw1.png">
    </div>
    <div id="searchWin" class="easyui-tabs" data-options="tools:'#tab-tools'" style="width:350px; height:150px; position:absolute;z-index: 100; left: 100px; top: 0px;">
		<div title="企业查询" style="padding:10px;text-align:center" >
			企业名称：<input type="text" id="qname" width="20px">&nbsp;&nbsp;
			<input type="button" value="搜索" onclick="querybysql()">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="button" value="取消">
		</div>
		<div title="综合查询" style="padding:10px;text-align:center">
			企业名称：<input type="text" id="qname" width="20px"><br>
			企业地址：<input type="text" id="qname" width="20px"><br>
			经营范围：<input type="text" id="qname" width="20px"><br>
			产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;值：<input type="text" id="qname" width="20px"><br>
			<input type="button" value="搜索">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="button" value="取消">
		</div>
	</div>
	<div id="tab-tools">
		<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-collapse'" onclick="onExpand()"></a>
	</div>
    <div class="easyui-panel" style="padding:5px; position:absolute;z-index: 100; right: 10px; top: 0px; width: 250px;">
		<a href="#" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-marker'">标记</a>
		<a href="#" class="easyui-menubutton" data-options="menu:'#mm1',iconCls:'icon-measure'">测量</a>
		<a href="#" class="easyui-menubutton" data-options="menu:'#mm2',iconCls:'icon-reload'">地图切换</a>
	</div>
	<div id="mm1" style="width:100px;">
		<div data-options="iconCls:'icon-distance'">测距</div>
		<div data-options="iconCls:'icon-area'">侧面</div>
	</div>
	<div id="mm2" style="width:100px;">
		<div>二维地图</div>
		<div>影像地图</div>
		<div>三维地图</div>
	</div>
    <script type="text/javascript">
    var contextPath = "${ctxStatic}"; 
    function onExpand() {
    	if ($("#searchWin").height() == 30) {
    		$("#searchWin").height(150);
    	} else {
    		$("#searchWin").css("height", "30px");
    	}
    }
    function querybysql(){
    	queryBySQL();
    }
    </script>
</body>
</html>