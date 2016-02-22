<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
<meta name="decorator" content="default"/>
<title>Insert title here</title>
<script src="${ctxStatic}/supermap/libs/SuperMap.Include.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/MapConfig.js" type="text/javascript"></script>
<script src="${ctxStatic}/supermap/panoramaMap.js" type="text/javascript"></script>
</head>
<body>
    <div id="mapDiv" style="position:absolute; width:100%; height:100%; margin: 0; padding: 0; border: 0px;">
    </div>
</body>
</html>