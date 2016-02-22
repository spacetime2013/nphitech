/**
 * 线路修改
 */
var html = "<form class='form-horizontal' style='margin-top: 5px;'>" + 
			"  <input type='hidden' id='lineIdInput' value=''>" + 
			"  <div class='control-group'>" + 
			"    <label class='control-label' for='linenameInput' style='width: 80px;'>线路名称：</label>" + 
			"    <div class='controls' style='margin-left: 10px;'>" + 
			"      <input type='text' id='linenameInput' disabled='disabled'>" + 
			"    </div>" + 
			"  </div>" + 
			"  <div class='control-group'>" + 
			"    <label class='control-label' for='lineTypeSelect' style='width: 80px;'>反馈类型：</label>" + 
			"    <div class='controls' style='margin-left: 10px;'>" + 
			"      <select id='lineTypeSelect' placeholder='请选择线路类型'>" + 
			"        <option value='1'>确认无误</option>" + 
			"        <option value='2'>杆塔错位</option>" + 
			"        <option value='3'>线路不全</option>" + 
			"        <option value='4'>其他</option>" + 
			"      </select>" + 
			"    </div>" + 
			"  </div>" + 
			"  <div class='control-group'>" + 
			"    <label class='control-label' for='descriptText' style='width: 80px;'>详细说明：</label>" + 
			"    <div class='controls' style='margin-left: 10px;'>" + 
			"      <textarea id='descriptText' rows='3'></textarea>" + 
			"    </div>" + 
			"  </div>" + 
			"</form>";

var submit = function (v, h, f) {
	var lineId = $("#lineIdInput").val();
	lineId = lineId.substring(2, lineId.length);
	var feedbackType = $("#lineTypeSelect").val();
	var remarks = $("#descriptText").val();
	//console.log(lineId, feedbackType, remarks);
	$.ajax({
		type: 'GET',
		url: ctx + "/nw/nwLineConfig/update?lineId="+lineId+"&feedbackType="+feedbackType+"&remarks="+remarks, 
		dataType: 'json',
		success: function(data){
			//线路更新成功后，对节点进行提醒处理。
			var node = tree.getSelectedNodes()[0];
			node.feedbackType = feedbackType;
			node.remarks = remarks;
			node.name = node.name;
			node.font = {'color':'red', 'font-weight':'bold'};
			tree.updateNode(node);
			$.jBox.tip("线路已更新成功。");
		}
    });
    return true;
};