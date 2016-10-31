/**
 * Created by Administrator on 2016/10/23.
 */
(function () {
    var listModule = angular.module('doubanApp.listModule',['doubanApp.service']);
    listModule.controller('ListCtrl',['$scope','$http','jsonpService','$routeParams','$route','$rootScope',function ($scope,$http,jsonpService,$routeParams,$route,$rootScope) {

        $scope.subjects = [];


        //计算分页
        var count = 10;

        //$http.get('hot/data.json').then(function(value){
        //    //console.log(value);
        //    $scope.subjects = value.data.subjects;
        //},function (err) {
        //
        //})
        $rootScope.category = $routeParams.category;

        var currentPage = parseInt($routeParams.page||1);
        //console.log($routeParams.page)
        $scope.currentPage = currentPage;
        var start = (currentPage-1)*count;

        //搜索
        $rootScope.search = function () {
            //console.log($rootScope.input);
            //https://api.douban.com/v2/movie/search?q=王
            $route.updateParams({category:'search',q:$rootScope.input});
            $rootScope.input='';
        }

        //调用服务定义的方法
        jsonpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.category,{count:count,start:start,q:$routeParams.q},function(data){
            $scope.subjects = data.subjects;
            $scope.title = data.title;
            $scope.total=data.total;
            //console.log(data);

            $scope.totalPage = Math.ceil($scope.total/count);
            //告诉 angular 刷新界面上的数据
            //可以指定刷新特定的数据 不写参数刷新全局
            $scope.$apply($scope.subjects);

            //    分页 改变路由
            $scope.handlePage= function (page) {
                if (page < 1 || page > $scope.totalPage ){
                    return;
                }
                $route.updateParams({page:page});//更新app.js中的redirectTo 中的数字
            }
        })
    }])
})();
