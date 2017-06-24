var $parent = $('.list-item').parent();

$parent.click(function(e) {
	console.log(this);
})