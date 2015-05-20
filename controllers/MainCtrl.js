angular.module('myApp')
    .controller('mainCtrl', ['$scope', '$cordovaDialogs', '$cordovaBluetoothSerial',
    function ($scope, $cordovaDialogs, $cordovaBluetoothSerial) {
        $scope.btnClick = function() {
            $cordovaBluetoothSerial.enable().then(
              function () {
                  alert("Bluetooth LE is enabled", "Bluetooth LE", "GREAT!");
              },
              function () {
                  alert("Bluetooth LE is NOT enabled", "Bluetooth LE", "Oops!");
              }
            );
            //alert('yes');
        };
}]);