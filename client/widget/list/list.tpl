<%
	lists.forEach(function(list) {
%>
<li class="list-item clearfix">
	<img src="/img/avatar.png" alt="">
	<div class="detail clearfix">
		<h3><%=list.name%></h3>
		<p><%=list.address%></p>
	</div>
</li>
<%})%>