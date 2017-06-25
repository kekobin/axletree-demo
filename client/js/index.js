//基础库都可以在这里inline进来，不用在页面中手动引入
__inline('lib/zepto.js');
__inline('lib/underscore.js');

$(function() {
	console.log('= 同步输出的数据 api1 =');
	console.log(api1)

	//第二屏通过ajax异步获取数据拼装
	$.ajax({
		url: 'http://www.huya.com/hd/olddriver2/index.php?m=OldDriver2&do=ajaxGetCombatInfo',
		dataType: 'jsonp',
		success: function(resp) {
			var tpl = _.template($('#listTpl').html());

			$('#list').html(tpl({
				lists: resp.data
			}));
		}
	})
});