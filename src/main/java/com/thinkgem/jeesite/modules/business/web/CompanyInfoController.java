/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.business.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.thinkgem.jeesite.common.config.Global;
import com.thinkgem.jeesite.common.persistence.Page;
import com.thinkgem.jeesite.common.web.BaseController;
import com.thinkgem.jeesite.common.utils.StringUtils;
import com.thinkgem.jeesite.modules.business.entity.CompanyInfo;
import com.thinkgem.jeesite.modules.business.service.CompanyInfoService;

/**
 * 企业信息表维护Controller
 * @author hechungui
 * @version 2016-02-25
 */
@Controller
@RequestMapping(value = "${adminPath}/business/companyInfo")
public class CompanyInfoController extends BaseController {

	@Autowired
	private CompanyInfoService companyInfoService;
	
	@ModelAttribute
	public CompanyInfo get(@RequestParam(required=false) String id) {
		CompanyInfo entity = null;
		if (StringUtils.isNotBlank(id)){
			entity = companyInfoService.get(id);
		}
		if (entity == null){
			entity = new CompanyInfo();
		}
		return entity;
	}
	
	@RequiresPermissions("business:companyInfo:view")
	@RequestMapping(value = {"list", ""})
	public String list(CompanyInfo companyInfo, HttpServletRequest request, HttpServletResponse response, Model model) {
		Page<CompanyInfo> page = companyInfoService.findPage(new Page<CompanyInfo>(request, response), companyInfo); 
		model.addAttribute("page", page);
		return "modules/business/companyInfoList";
	}

	@RequiresPermissions("business:companyInfo:view")
	@RequestMapping(value = "form")
	public String form(CompanyInfo companyInfo, Model model) {
		model.addAttribute("companyInfo", companyInfo);
		return "modules/business/companyInfoForm";
	}

	@RequiresPermissions("business:companyInfo:edit")
	@RequestMapping(value = "save")
	public String save(CompanyInfo companyInfo, Model model, RedirectAttributes redirectAttributes) {
		if (!beanValidator(model, companyInfo)){
			return form(companyInfo, model);
		}
		companyInfoService.save(companyInfo);
		addMessage(redirectAttributes, "保存企业信息成功");
		return "redirect:"+Global.getAdminPath()+"/business/companyInfo/?repage";
	}
	
	@RequiresPermissions("business:companyInfo:edit")
	@RequestMapping(value = "delete")
	public String delete(CompanyInfo companyInfo, RedirectAttributes redirectAttributes) {
		companyInfoService.delete(companyInfo);
		addMessage(redirectAttributes, "删除企业信息成功");
		return "redirect:"+Global.getAdminPath()+"/business/companyInfo/?repage";
	}

}