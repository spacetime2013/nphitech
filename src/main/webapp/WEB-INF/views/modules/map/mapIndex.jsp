<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>园区地图</title>
	<meta name="decorator" content="default"/>
	<%-- @include file="/WEB-INF/views/include/treeview.jsp" --%>
	<!-- <style type="text/css">
		.ztree {overflow:auto;margin:0;_margin-top:10px;padding:10px 0 0 10px;}
	</style> -->
</head>
<body>
	<sys:message content="${message}"/>
	<!-- <div id="content" class="row-fluid"> -->
	<div style="position:absolute; width:100%; height:100%; margin: 0; padding: 0;">
		<!-- <div id="left" class="accordion-group">
			<div class="accordion-heading">
		    	<a class="accordion-toggle">组织机构<i class="icon-refresh pull-right" onclick="refreshTree();"></i></a>
		    </div>
			<div id="ztree" class="ztree"></div>
		</div>
		<div id="openClose" class="close">&nbsp;</div>
		<div id="right">
			<iframe id="mapContent" src="${ctx}/map/map" width="100%" height="91%" frameborder="0"></iframe>
		</div> -->
		<iframe id="mapContent" src="${ctx}/map/map" width="100%" height="99%" frameborder="0"></iframe>
	</div>
	<script type="text/javascript">
		var ctx = "${ctx}";
		//var tree;
		/* var setting = {data:{simpleData:{enable:true,idKey:"id",pIdKey:"pId",rootPId:'0'}},
			callback:{onClick:function(event, treeId, treeNode){
					var id = treeNode.id == '0' ? '' :treeNode.id;
					//$('#mapContent').attr("src","${ctx}/sys/user/list?office.id="+id+"&office.name="+treeNode.name);
				}
			}
		}; */
		/*
		//增加线路树 modify by hechungui
		var lineSetting = {async:{enable:true,url:"${ctx}/nw/nwLineConfig/treeData",autoParam:["id=officeId"]},
			data:{simpleData:{enable:true}},callback:{
				onClick:function(event, treeId, treeNode){
					//console.log("线路名：" + treeNode.name + "GID：" + treeNode.lineGid + "OBJ_ID：" + treeNode.objId + "SMID：" + treeNode.smid);
					//tree.expandNode(treeNode);
					//确定是否有窗口，如有即关闭 add by hechungui on 2015-12-10
					if ($.jBox.getBox()) {
						$.jBox.close(true);
					}
					var condition = {};
					if (treeNode.level != 0) {
						if (treeNode.level == 1) {
							condition.province = treeNode.name.substr(0, 2);
							console.log(condition.province);
						} else if (treeNode.level == 2) {
							condition.department = treeNode.name.substr(0, 2);
							console.log(condition.department);
						} else {
							condition.smid = treeNode.smid;
							$.jBox(html, {title: "线路确认？", submit: submit, opacity: 0, top: 5});
							//console.log(treeNode, treeNode.name);
							$("#linenameInput").val(treeNode.lineName);
							$("#lineIdInput").val(treeNode.id);
							$("#lineTypeSelect").val(treeNode.feedbackType);
							$("#descriptText").val(treeNode.remarks);
						}
						$("#mapContent")[0].contentWindow.queryLineByCondition(condition);
					}
				}
			},
			view: {
				fontCss: getFont,
				nameIsHTML: true
			}
		};
		
		function getFont(treeId, node) {
			return node.font ? node.font : {};
		}
		
		function refreshTree(){
			$.getJSON("${ctx}/sys/office/treeData?type=4",function(data){
				tree = $.fn.zTree.init($("#ztree"), lineSetting, data);
				// 默认展开一级节点
				var nodes = tree.getNodesByParam("level", 0);
				for(var i=0; i<nodes.length; i++) {
					tree.expandNode(nodes[i], true, false, false);
				}
				//异步加载子节点（加载用户）
				var nodesOne = tree.getNodesByParam("isParent", true);
				for(var j=0; j<nodesOne.length; j++) {
					tree.reAsyncChildNodes(nodesOne[j],"!refresh",true);
				}
			});
		}
		refreshTree();
		
		var leftWidth = 180; // 左侧窗口大小
		var htmlObj = $("html"), mainObj = $("#main");
		var frameObj = $("#left, #openClose, #right, #right iframe");
		function wSize(){
			var strs = getWindowSize().toString().split(",");
			htmlObj.css({"overflow-x":"hidden", "overflow-y":"hidden"});
			mainObj.css("width","auto");
			frameObj.height(strs[0] - 5);
			var leftWidth = ($("#left").width() < 0 ? 0 : $("#left").width());
			$("#right").width($("#content").width()- leftWidth - $("#openClose").width() -5);
			$(".ztree").width(leftWidth - 10).height(frameObj.height() - 46);
		}*/
	</script>
	<!-- <script src="${ctxStatic}/common/wsize.min.js" type="text/javascript"></script> -->
</body>
</html>