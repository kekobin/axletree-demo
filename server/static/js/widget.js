;/*!widget/footer/footer.js*/
define('footer', function(require, exports, module) {

  

});

;/*!widget/header/header.js*/
define('header', function(require, exports, module) {

  // var header = document.getElementById('header');
  
  // header.addEventListener('click', function() {
  // 	alert('this is header');
  // });
  
  module.exports = {};

});

;/*!widget/list/list.js*/
define('list', function(require, exports, module) {

  var $parent = $('.list-item').parent();
  
  $parent.click(function(e) {
  	console.log(this);
  })

});
