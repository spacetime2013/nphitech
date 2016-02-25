<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>企业信息管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			
		});
		function page(n,s){
			$("#pageNo").val(n);
			$("#pageSize").val(s);
			$("#searchForm").submit();
        	return false;
        }
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li class="active"><a href="${ctx}/business/companyInfo/">企业信息列表</a></li>
		<shiro:hasPermission name="business:companyInfo:edit"><li><a href="${ctx}/business/companyInfo/form">企业信息添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="companyInfo" action="${ctx}/business/companyInfo/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>企业名称：</label>
				<form:input path="qname" htmlEscape="false" maxlength="45" class="input-medium"/>
			</li>
			<li><label>地址：</label>
				<form:input path="qaddress" htmlEscape="false" maxlength="200" class="input-medium"/>
			</li>
			<li><label>营业范围：</label>
				<form:input path="qscope" htmlEscape="false" maxlength="100" class="input-medium"/>
			</li>
			<li><label>主要产品：</label>
				<form:select path="product" class="input-medium">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictList('comp_product')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>规模：</label>
				<form:select path="qgm" class="input-medium">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictList('comp_gm')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>用工情况：</label>
				<form:select path="people" class="input-medium">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictList('comp_people')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>厂地面积：</label>
				<form:select path="area" class="input-medium">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictList('comp_area')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li><label>产业类别：</label>
				<form:select path="cytype" class="input-medium">
					<form:option value="" label=""/>
					<form:options items="${fns:getDictList('comp_cytype')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
				</form:select>
			</li>
			<li class="btns"><input id="btnSubmit" class="btn btn-primary" type="submit" value="查询"/></li>
			<li class="clearfix"></li>
		</ul>
	</form:form>
	<sys:message content="${message}"/>
	<table id="contentTable" class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>企业名称</th>
				<th>地址</th>
				<th>营业范围</th>
				<th>主要产品</th>
				<th>联系电话</th>
				<th>规模</th>
				<th>用工情况</th>
				<th>厂地面积</th>
				<th>产业类别</th>
				<shiro:hasPermission name="business:companyInfo:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="companyInfo">
			<tr>
				<td><a href="${ctx}/business/companyInfo/form?id=${companyInfo.qid}">
					${companyInfo.qname}
				</a></td>
				<td>
					${companyInfo.qaddress}
				</td>
				<td>
					${companyInfo.qscope}
				</td>
				<td>
					${fns:getDictLabel(companyInfo.product, 'comp_product', '')}
				</td>
				<td>
					${companyInfo.tel}
				</td>
				<td>
					${fns:getDictLabel(companyInfo.qgm, 'comp_gm', '')}
				</td>
				<td>
					${fns:getDictLabel(companyInfo.people, 'comp_people', '')}
				</td>
				<td>
					${fns:getDictLabel(companyInfo.area, 'comp_area', '')}
				</td>
				<td>
					${fns:getDictLabel(companyInfo.cytype, 'comp_cytype', '')}
				</td>
				<shiro:hasPermission name="business:companyInfo:edit"><td>
    				<a href="${ctx}/business/companyInfo/form?id=${companyInfo.qid}">修改</a>
					<a href="${ctx}/business/companyInfo/delete?id=${companyInfo.qid}" onclick="return confirmx('确认要删除该企业信息吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>