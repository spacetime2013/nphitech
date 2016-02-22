<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title>南屏科技工业园</title>
<style type="text/css">
body, table, tr, td, input, textarea, select, a, p {
	margin: 0;
	font-size: 12px;
	font-family: 宋体;
	color: #5f5f5f;
	border-spacing: 0px;
	border-collapse: collapse;
}

table.nav a:link, table.nav a:visited, table.nav a:active {
	color: #ffffff;
	font-size: 14;
	font-weight: bold;
}

table.nav a:hover {
	color: #fcb501;
}

A:hover {
	color: #023C5E;
	text-decoration: none;
}

a {
	color: #5f5f5f;
	text-decoration: none;
	text-transform: none;
}

a:visited {
	color: #666666 text-decoration: none
} /* 已访问的链接 */
A:active {
	color: #666666;
}

.banner_top {
	width: 1px;
	height: 28px;
	background-image: url(images/index/banner_top.jpg);
}
/*banner 上的橙色导航栏*/
.banner_buttom {
	width: 1px;
	height: 28px;
	background-image: url(images/index/banner_buttom.jpg);
}
/*底部*/
.bottom {
	width: 980px;
	height: 118px;
	background-repeat: no-repeat;
	background-image: url(images/index/bottom.jpg);
}

/*导航栏字体*/
.navfont {
	font-size: 14px;
}

.2left_titleback {
	width: 178px;
	height: 55px;
	background-image: url(images/2left_titleback.jpg);
}

.2left_back {
	width: 211px;
	height: 1px;
	background-image: url(images/2left_back.jpg);
}

.2left_button {
	cursor: hand;
	color: #ff981b;
	text-align: center;
	font-weight: bold;
	padding: 5px, 0px, 0px, 15px;
	width: 181px;
	height: 25px;
	background-image: url(images/2left_button.jpg);
}

.2right_gray {
	width: 3px;
	height: 8px;
	background-repeat: repeat-x;
	background-image: url(images/2right_gray.jpg);
}

.2right_title {
	font-size: 16;
	color: #ff981b;
	font-weight: bold;
	padding: 5px, 0px, 0px, 0px;
}

.2right_gray1 {
	width: 3px;
	height: 1px;
	background-repeat: repeat-x;
	background-image: url(images/2right_gray1.jpg);
}

.2right_titleback {
	width: 1px;
	height: 28px;
	background-repeat: repeat-x;
	background-image: url(images/2right_titleback.jpg);
}

.2right_list {
	width: 1px;
	height: 27px;
	background-repeat: repeat-x;
	background-position: bottom;
	background-image: url(images/2right_list.jpg);
}

.2right_list1 {
	width: 1px;
	height: 27px;
	background-repeat: repeat-x;
	background-image: url(images/2right_list1.jpg);
}

.2right_text {
	font-size: 14;
	color: #ffffff;
	font-weight: bold;
}

.2right_text1 {
	font-size: 14;
	color: #6fa6b7;
}

.2right_text2 {
	font-size: 13;
	color: #939393;
	font-weight: bold;
	padding: 5px, 0px, 0px, 0px
}

.2right_bottom {
	width: 1px;
	height: 18px;
	background-repeat: repeat-x;
	background-image: url(images/2right_bottom.jpg);
}

.right_33_1 {
	cursor: hand;
	width: 61px;
	height: 28px;
	background-image: url(images/right_33_1.jpg);
}

.left_33_1 {
	cursor: hand;
	width: 61px;
	height: 28px;
	background-image: url(images/left_33_1.jpg);
}

.right_33_2 {
	color: White;
	font-weight: bold;
	font-size: 15;
	width: 343px;
	height: 28px;
	background-image: url(images/right_33_2.jpg);
}

.left_33_2 {
	color: White;
	font-weight: bold;
	font-size: 15;
	width: 509px;
	height: 28px;
	background-image: url(images/left_33_2.jpg);
}

.left_back_1 {
	width: 394px;
	height: 27px;
	background-image: url(images/left_back_1.jpg);
}

.left_back_2 {
	width: 402px;
	height: 1px;
	background-image: url(images/left_back_2.jpg);
}

.right_back_2 {
	width: 571px;
	height: 1px;
	background-image: url(images/right_back_2.jpg);
}

.right_back_3 {
	width: 570px;
	height: 5px;
	background-image: url(images/right_back_3.jpg);
}

.buttom_33_1 {
	cursor: hand;
	width: 61px;
	height: 28px;
	background-image: url(images/buttom_33_1.jpg);
}

.buttom_33_2 {
	color: White;
	font-weight: bold;
	font-size: 15;
	width: 920px;
	height: 28px;
	background-image: url(images/buttom_33_2.jpg);
}

.buttom_back_2 {
	width: 978px;
	height: 1px;
	background-image: url(images/buttom_back_2.jpg);
}

.buttom_back_3 {
	width: 994px;
	height: 5px;
	background-image: url(images/buttom_back_3.jpg);
}

.left_back_3 {
	width: 402px;
	height: 5px;
	background-image: url(images/left_back_3.jpg);
}

.right_pic3 {
	width: 183px;
	height: 146px;
	background-repeat: no-repeat;
	background-image: url(images/right_pic3.jpg);
}
</style>
</head>
<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0">
	<table width="99%" align="center" cellpadding="0" cellspacing="0">
		<tbody>
			<tr>
				<td width="15" height="1375"></td>
				<td valign="top">
					<table width="100%" height="100%" cellpadding="0" cellspacing="0">
						<tbody>
							<tr height="5">
								<td></td>
							</tr>
							<tr>
								<td colspan="3" valign="top">

									<div id="divdetail">
										<div style="width: 100%; border: solid 1px #939393;">
											<div
												style="text-align: center; font-size: 16px; font-weight: bolder; margin-top: 20px;">
												园区概况</div>


											<div style="text-align: left; margin: 20px 20px 20px 20px;">
												<div>
													<div
														style="BORDER-BOTTOM-COLOR:; BORDER-TOP-COLOR:; BORDER-RIGHT-COLOR:; BORDER-LEFT-COLOR:"
														align="center">
														<img
															style="BORDER-BOTTOM-COLOR:; BORDER-TOP-COLOR:; BORDER-RIGHT-COLOR:; BORDER-LEFT-COLOR:"
															border="0" alt=""
															src="${ctxStatic}/modules/map/images/logo.jpg"
															width="650" height="163">
													</div>
												</div>
												<div>&nbsp;</div>
												<div>&nbsp;</div>
												<p align="left">
													<!--?xml:namespace prefix = st1 /-->
													<st1:chsdate w:st="on" year="1999" month="3" day="6"
														islunardate="False" isrocdate="False">
														<span lang="EN-US">&nbsp;&nbsp;&nbsp; 1999</span>
														<span>年<span lang="EN-US">3</span>月<span
															lang="EN-US">6</span>日
														</span>
													</st1:chsdate>
													<span>，南屏科技工业园正式挂牌成立，是珠海国家高新技术产业开发区主要组成部分，是珠海市发展最成熟，单位产值最高的科技工业园区之一。成为珠海市发展高新科技产业、开展对外贸易的主要基地和重要的战略经济增长点。</span>
												</p>
												<p align="left">
													<span>&nbsp;&nbsp;&nbsp;
														南屏科技工业园坐落于珠海市中心城区香洲区南屏镇，位处珠海市东西主干道交通喉舌珠海大道北侧，紧连洪湾、前山两大物流中心。园区东距市区<span
														lang="EN-US">5</span>公里，离九洲港货柜码头<span lang="EN-US">15</span>公里，京珠高速公路、粤西沿海高速公路、太澳高速公路均有接驳高速通过园区。园区距珠海高栏深水港为<span
														lang="EN-US">40</span>分钟车程，距珠海国际机场<span lang="EN-US">30</span>分钟车程，交通四通八达。
													</span>
												</p>
												<p>
													<span>&nbsp;&nbsp;&nbsp; 园区主园区占地面积<span lang="EN-US">4.36</span>平方公里，<span
														lang="EN-US">2008</span>年<span lang="EN-US">7</span>月纳入园区管辖范围的格力工业城占地面积为<span
														lang="EN-US">3.3</span>平方公里，现园区总面积共为<span lang="EN-US">7.66</span>平方公里。截止到<span
														lang="EN-US">2015</span>年<span lang="EN-US">9</span>月，南屏科技园共有企业<span
														lang="EN-US">634</span>家。实现规模以上工业总产值<span lang="EN-US">717.88</span>亿元，同比增长<span
														lang="EN-US">6.95%</span>（未计算物价指数）；其中格力工业城工业总产值<span
														lang="EN-US">529.84</span>亿元，同比增长<span lang="EN-US">6.32%</span>（未计算物价指数）；主园区工业总产值<span
														lang="EN-US">188.04</span>亿元，同比增长<span lang="EN-US">8.78%</span>（未计算物价指数）。
													</span>
												</p>
												<p>
													<span lang="EN-US">&nbsp;</span>
												</p>
												<p align="left">
													<span>一、机构职能情况</span>
												</p>
												<p align="left">
													<span lang="EN-US">&nbsp;&nbsp;&nbsp; 1999</span><span>年至<span
														lang="EN-US">2003</span>年，管委会作为市政府的派出机构，专门负责区内经济开发建设，集中行使市一级经济管理权限，实行“一条龙服务、一站式管理、一个窗口对外”。行使外经、工商、税务、海关、劳务、国土、规划等<span
														lang="EN-US">13</span>个部门授予的审批和办理权，推动了工业园的高速发展．
													</span>
												</p>
												<p align="left">
													<span lang="EN-US">&nbsp;&nbsp;&nbsp; 2006</span><span>年<span
														lang="EN-US">8</span>月份起南屏科技工业园管委会由香洲区政府管理，内设办公室、建设管理局、经济发展局，编制人员<span
														lang="EN-US">10</span>个。负责土地开发、企业经济、安全生产等工作。市政设施管理由市、区相关市政单位负责，行政审批由市相关部门负责。
													</span>
												</p>
												<p align="left">
													<span lang="EN-US">&nbsp;</span>
												</p>
												<p align="left">
													<span>二、企业情况</span>
												</p>
												<p align="left">
													<span>&nbsp;&nbsp;&nbsp; 截止到<span lang="EN-US">2015</span>年<span
														lang="EN-US">9</span>月底，南屏科技工业园企业总数为<span lang="EN-US">634</span>家，其中规模以上工业企业<span
														lang="EN-US">117</span>家。产值亿元以上工业企业<span lang="EN-US">30</span>家，包括珠海天威飞马打印耗材有限公司、珠海及成通讯科技股份有限公司、珠海许继电气有限公司、珠海美蓓亚精密马达有限公司、松下系统网络科技（珠海）有限公司、珠海赛纳打印科技股份有限公司、东信和平科技股份有限公司、珠海松下马达有限公司、珠海晨新科技有限公司、珠海紫翔电子科技有限公司等。
													</span>
												</p>
												<div>
													<span>&nbsp;&nbsp;&nbsp;
														我园的主导产业是家电电器、电子信息、办公自动化及打印耗材、装备制造业、生物医药等五类，其中：规模以上家电电器类企业<span
														lang="EN-US">4</span>家，创造产值<span lang="EN-US">401.15</span>亿元，同比增长<span
														lang="EN-US">2.16%</span>（未计算物价指数），占园区规模以上产值的<span
														lang="EN-US">55.88</span>％；规模以上电子信息类企业<span lang="EN-US">15</span>家创造产值<span
														lang="EN-US">6.97</span>亿元，同比增长<span lang="EN-US">0.94%</span>（未计算物价指数），占园区规模以上产值的<span
														lang="EN-US">0.97</span>％；规模以上办公自动化及打印耗材类企业<span
														lang="EN-US">14</span>家创造产值<span lang="EN-US">16.92</span>亿元，同比增长<span
														lang="EN-US">-0.08%</span>（未计算物价指数），占园区规模以上产值的<span
														lang="EN-US">2.36</span>％；规模以上装备制造类企业<span lang="EN-US">67</span>家创造产值<span
														lang="EN-US">278.61</span>亿元，同比增长<span lang="EN-US">16.40%</span>（未计算物价指数），占园区规模以上产值的<span
														lang="EN-US">38.81%</span>；规模以上生物制药类企业<span lang="EN-US">4</span>家创造产值<span
														lang="EN-US">7.63</span>亿元，同比增长<span lang="EN-US">-1.18%</span>（未计算物价指数），占园区规模以上产值的<span
														lang="EN-US">1.06</span>％；五大主导产业占园区规模以上工业产值的<span
														lang="EN-US">99.08</span>％。
													</span>
												</div>
												<div>&nbsp;</div>
												<div
													style="BORDER-BOTTOM-COLOR:; BORDER-TOP-COLOR:; BORDER-RIGHT-COLOR:; BORDER-LEFT-COLOR:"
													align="center"></div>
												<div>
													&nbsp;
													<div align="center">
														<img border="0" hspace="5" alt=""
															src="${ctxStatic}/modules/map/images/ponorama.PNG">
													</div>
												</div>
												<div>&nbsp;</div>
												<div align="right"></div>
											</div>
										</div>
									</div>

								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
	<table height="7">
		<tbody>
			<tr>
				<td></td>
			</tr>
		</tbody>
	</table>
	<!--底部开始-->
	<!--底部结束-->

</body>
</html>