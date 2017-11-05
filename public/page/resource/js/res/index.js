(function() {
    var app = angular.module('app', ['btford.socket-io']);
    app.config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    });
    app.run(function($rootScope) {
        $rootScope.ROOT = window.appConfig;
    });
    //socket
    app.factory('socketService', function(socketFactory) {
        var myIoSocket = io.connect();

        var mySocket = socketFactory({
            prefix: 'io-',
            ioSocket: myIoSocket
        });
        mySocket.forward('error');
        return mySocket;
    });
    //main
    app.controller('mainController', function($scope, $http, socketService) {
        $scope.$on('socket:error', function(ev, data) {
            console.error(ev, data);
        });
        $scope.data = { success: true };
        socketService.emit('io-test', 'abc');
        socketService.on('io-testResponse', function(data) {
            $scope.data.socketResponse = data;
        });
    });

    app.controller('testsController', function($scope, $http, socketService) {
        var me = this;
        me.type = 'js';
        me.action = 'transform';
        $scope.types = [
            { id: 'js', text: 'js' },
            { id: 'html', text: 'html' },
            { id: 'less', text: 'less' },
            { id: 'sass', text: 'sass' },
            { id: 'css', text: 'css' },
            { id: 'image', text: 'image' }
        ];
        $scope.actions = [
            { id: 'transform', text: 'transform' },
            { id: 'minify', text: 'minify' },
            { id: 'uglify', text: 'uglify' },
            { id: 'pretty', text: 'pretty' },
            { id: 'copy', text: 'copy' }
        ];

        function api(options) {
            var defaultOptions = {
                url: '/tests/testApi/A',
                method: 'GET',
                params: angular.copy({ type: me.type, path: me.path, filter: me.filter, action: me.action, toPath: me.toPath })
            };
            var newOptions = angular.extend(defaultOptions, options);
            return $http(newOptions).then(function(result) {
                //响应成功
                return result.data;
            })
        }
        $scope.transform = function(e) {
            api({ url: '/res/testApi/do', }).then(function(result) {
                me.result = result;
            });
            e.stopPropagation();
        }
        socketService.on('io-doResponse', function(data) {
            $scope.data.doResponse = $scope.data.doResponse || [];
            $scope.data.doResponse.push(data);
        });
    });
})();