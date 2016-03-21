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
		return "";
	};
	
	SuperMap.Business.LineConfirm = A;
})();