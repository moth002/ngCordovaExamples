angular.module('myApp')
    .controller('mainCtrl', ['$scope', '$cordovaBluetoothSerial',
    function ($scope, $cordovaBluetoothSerial) {
        $scope.btnClick = function () {
            alert('test');
            //$cordovaBluetoothSerial.list(function (devices) { alert(devices); }, function () { alert('false'); });
            $cordovaBluetoothSerial.list().then(
              function (devices) {
                  alert(devices[0].id);
              },
              function () {
                  alert("Bluetooth LE is NOT enabled", "Bluetooth LE", "Oops!");
              }
            );
            //alert('yes');
        };
}]);