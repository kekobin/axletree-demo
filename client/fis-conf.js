//设置项目名称，也即静态资源发布的目录
var projectName = 'axletree-demo';
//发布的域
var domain = 'http://hd.huya.com/';

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

// 生产环境
fis.media('prod')
.match('/(**.html)', {
    release: '/$1'
})
.match('!{*.{html,tpl}, js/mod/**}', {
    domain: domain + projectName,
    deploy: fis.plugin('local-deliver', {
        to: '../pub/'+projectName+'/'
    })
})
.match('{widget/**.tpl,**.html,apiConf.js}', {
    deploy: fis.plugin('local-deliver', {
        to: '../pub/'+projectName+'View/'
    })
});

