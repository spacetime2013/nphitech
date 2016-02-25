/**
 * Copyright &copy; hechungui
 */
package com.thinkgem.jeesite.modules.map.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.thinkgem.jeesite.common.web.BaseController;

/**
 * 地图Controller
 * @author hechungui
 * @version 2016-2-20
 */
@Controller
public class MapController extends BaseController {

	/**
	 * 地图首页
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/index")
	public String index(HttpServletRequest request, HttpServletResponse response){
		System.out.println("************地图首页");
		return "modules/map/mapIndex";
	}
	
	/**
	 * 地图容器
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/map")
	public String getMap(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############地图容器");
		return "modules/map/mapContainer";
	}
	
	/**
	 * 企业查询
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/search")
	public String search(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############地图查询");
		return "modules/map/mapSearch";
	}
	
	/**
	 * 综合搜索
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/advsearch")
	public String advSearch(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############地图综合查询");
		return "modules/map/mapAdvSearch";
	}
	
	/**
	 * 统计分析
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/statistic")
	public String statistic(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############地图统计");
		return "modules/map/mapStatistic";
	}
	
	/**
	 * 园区全景图
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/panorama")
	public String panoramaIndex(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############全景图");
		return "modules/map/panorama";
	}
	
	@RequestMapping(value = "${adminPath}/map/introduct")
	public String introductIndex(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############园区介绍");
		return "modules/map/introduct";
	}
	
	/**
	 * 柱状图
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/barAnaly")
	public String barIndex(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############柱状图");
		return "modules/map/barAnaly";
	}
	/**
	 * 饼状图
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "${adminPath}/map/pieAnaly")
	public String pieIndex(HttpServletRequest request, HttpServletResponse response){
		System.out.println("###############柱状图");
		return "modules/map/pieAnaly";
	}
}
