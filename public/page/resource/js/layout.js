(function(window, angular) {
    var app = angular.module('app', []);
    app.config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    });
    app.run(function($rootScope) {
        $rootScope.ROOT = window.appConfig;
    });
    app.controller('mainController', function($scope, $http) {
        $scope.data = "this is mainConroller,please overwrite this controller";
    });

})(window, angular);