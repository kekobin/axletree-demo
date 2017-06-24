//基础库都可以在这里inline进来，不用在页面中手动引入
__inline('lib/zepto.js');

$(function() {
	console.log('this is entry!')
});