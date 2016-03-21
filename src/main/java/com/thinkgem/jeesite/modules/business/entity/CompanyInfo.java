/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.thinkgem.jeesite.modules.business.entity;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

import com.thinkgem.jeesite.common.persistence.DataEntity;

/**
 * 企业信息表维护Entity
 * @author hechungui
 * @version 2016-03-19
 */
public class CompanyInfo extends DataEntity<CompanyInfo> {
	
	private static final long serialVersionUID = 1L;
	private Integer qid;		// 企业ID
	private String qname;		// 企业名称
	private String qaddress;		// 地址
	private String qscope;		// 营业范围
	private String product;		// 主要产品
	private String tel;		// 联系电话
	private String qgm;		// 规模
	private String people;		// 用工情况
	private String area;		// 厂地面积
	private String cytype;		// 产业类别
	private String picture;		// 照片
	private String orgId;		// 组织ID
	private Double lon;		// 经度
	private Double lat;		// 纬度
	
	public CompanyInfo() {
		super();
	}

	public CompanyInfo(String id){
		super(id);
	}

	@NotNull(message="企业ID不能为空")
	public Integer getQid() {
		return qid;
	}

	public void setQid(Integer qid) {
		this.qid = qid;
	}
	
	@Length(min=1, max=45, message="企业名称长度必须介于 1 和 45 之间")
	public String getQname() {
		return qname;
	}

	public void setQname(String qname) {
		this.qname = qname;
	}
	
	@Length(min=0, max=200, message="地址长度必须介于 0 和 200 之间")
	public String getQaddress() {
		return qaddress;
	}

	public void setQaddress(String qaddress) {
		this.qaddress = qaddress;
	}
	
	@Length(min=0, max=100, message="营业范围长度必须介于 0 和 100 之间")
	public String getQscope() {
		return qscope;
	}

	public void setQscope(String qscope) {
		this.qscope = qscope;
	}
	
	@Length(min=0, max=100, message="主要产品长度必须介于 0 和 100 之间")
	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}
	
	@Length(min=0, max=50, message="联系电话长度必须介于 0 和 50 之间")
	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}
	
	@Length(min=0, max=50, message="规模长度必须介于 0 和 50 之间")
	public String getQgm() {
		return qgm;
	}

	public void setQgm(String qgm) {
		this.qgm = qgm;
	}
	
	@Length(min=0, max=45, message="用工情况长度必须介于 0 和 45 之间")
	public String getPeople() {
		return people;
	}

	public void setPeople(String people) {
		this.people = people;
	}
	
	@Length(min=0, max=50, message="厂地面积长度必须介于 0 和 50 之间")
	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}
	
	@Length(min=0, max=45, message="产业类别长度必须介于 0 和 45 之间")
	public String getCytype() {
		return cytype;
	}

	public void setCytype(String cytype) {
		this.cytype = cytype;
	}
	
	@Length(min=0, max=100, message="照片长度必须介于 0 和 100 之间")
	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	@Length(min=0, max=255, message="组织ID长度必须介于 0 和 255 之间")
	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}
	
	public Double getLon() {
		return lon;
	}

	public void setLon(Double lon) {
		this.lon = lon;
	}
	
	public Double getLat() {
		return lat;
	}

	public void setLat(Double lat) {
		this.lat = lat;
	}
	
}