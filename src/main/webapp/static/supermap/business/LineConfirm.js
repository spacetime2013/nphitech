/**
 * add by hechungui on 2015-12-10
 * 线路确认模块，弹出窗口，并让用户确认线路类型。
 */
(function () {
	function A(option) {
		var me = this;
		me.title = "";
		me.lineName = "";
		me.lineId = "";
		me.feedbackType = "";
		me.remarks = "";
		me.initialize(option);
		
	};
	
	/**
	 * 初始化
	 */
	A.prototype.initialize = function(option) {
		var me = this;
		for (var key in option) {
			me[key] = option[key];
        }
	};
	
	/**
	 * 初始化信息框内容
	 */
	A.prototype.initHtml = function() {
		var retHtml = "<form class='form-horizontal' style='margin-top: 5px;'>" + 
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
		return retHtml;
	};
	
	if (SuperMap.Business == undefined) {
		SuperMap.Business = new Object();
	}
	SuperMap.Business.LineConfirm = A;
})();