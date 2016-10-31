/**
 * Created by Administrator on 2016/10/24.
 */
(function(){
    var serviceModule = angular.module('doubanApp.service',[]);
    serviceModule.service('jsonpService',['$window',function($window){
        this.jsonp = function (url,params,fn) {
        //
            var queryString = '?';
            //1.拼接参数
            //https://api.douban.com/v2/movie/in_theaters？count=10&start=1
            for (key in params){
                queryString += key+"="+ params[key]+"&";
            }
            //2.生成函数名称
            // ?count=12&start='1'&callback=my_jsonp123456'
            var fnName = 'myJsonp'+ new Date().getTime();
            queryString+='callback'+ '=' +fnName;

            //3.挂载函数
            $window[fnName]=function(data){
                //alert(123);
                //成功之后调用
                fn(data);
            }

            //4.添加script标签 加载外部数据 实现跨域操作
            var script = $window.document.createElement('script');
            script.src = url +queryString;
            $window.document.body.appendChild(script);
        }
    }])
})();