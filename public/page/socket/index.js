(function() {
    var app = angular.module('app', ['btford.socket-io']);
    app.factory('socketService', function(socketFactory) {
        var myIoSocket = io.connect();

        var mySocket = socketFactory({
            prefix: 'io-',
            ioSocket: myIoSocket
        });
        mySocket.forward('error');
        return mySocket;
    });
    app.controller('mainController', function($scope, socketService) {

        $scope.$on('socket:error', function(ev, data) {

        });
        $scope.data = { success: true };
        socketService.on('io-test1', function() {
            $scope.bar = true;
        });
        socketService.emit('io-test', 'abc');
        socketService.on('io-testResponse', function(data) {
            $scope.data.socketResponse = data;
        });
    });

})();