/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.business.dao;

import com.thinkgem.jeesite.common.persistence.CrudDao;
import com.thinkgem.jeesite.common.persistence.annotation.MyBatisDao;
import com.thinkgem.jeesite.modules.business.entity.CompanyInfo;

/**
 * 企业信息表维护DAO接口
 * @author hechungui
 * @version 2016-03-19
 */
@MyBatisDao
public interface CompanyInfoDao extends CrudDao<CompanyInfo> {
	
}