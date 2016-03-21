/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.business.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thinkgem.jeesite.common.persistence.Page;
import com.thinkgem.jeesite.common.service.CrudService;
import com.thinkgem.jeesite.modules.business.entity.CompanyInfo;
import com.thinkgem.jeesite.modules.business.dao.CompanyInfoDao;

/**
 * 企业信息表维护Service
 * @author hechungui
 * @version 2016-03-19
 */
@Service
@Transactional(readOnly = true)
public class CompanyInfoService extends CrudService<CompanyInfoDao, CompanyInfo> {

	public CompanyInfo get(String id) {
		return super.get(id);
	}
	
	public List<CompanyInfo> findList(CompanyInfo companyInfo) {
		return super.findList(companyInfo);
	}
	
	public Page<CompanyInfo> findPage(Page<CompanyInfo> page, CompanyInfo companyInfo) {
		return super.findPage(page, companyInfo);
	}
	
	@Transactional(readOnly = false)
	public void save(CompanyInfo companyInfo) {
		super.save(companyInfo);
	}
	
	@Transactional(readOnly = false)
	public void delete(CompanyInfo companyInfo) {
		super.delete(companyInfo);
	}
	
}