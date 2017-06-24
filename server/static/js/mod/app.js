define('app.js', function(require, exports, module) {

  //require widget下的组件，会同时动态引入其样式(fis3同名依赖功能)
  require('list');
  
  
  var Util = require('util.js');
  
  console.log(Util.VERSION)

});
