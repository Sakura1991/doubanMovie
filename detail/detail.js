/**
 * Created by Administrator on 2016/10/23.
 */
(function () {
    var detailModule = angular.module('doubanApp.detailModule',['doubanApp.service']);
    detailModule.controller('DetailCtrl',['$scope','$http','jsonpService','$routeParams','$route','$rootScope',function ($scope,$http,jsonpService,$routeParams,$route,$rootScope) {



        //调用服务定义的方法
        jsonpService.jsonp('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
                    //console.log(data);
            $scope.movie = data;
            $scope.$apply();//手动更新第三方请求
        });
    }])

    detailModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/detail/:id',{
            templateUrl:'detail/detail.html',
            controller:'DetailCtrl'
        })
    }])
})();
