angular.module('myApp')
    .controller('mainCtrl', ['$scope', '$cordovaDialogs', '$cordovaBluetoothSerial',
    function ($scope, $cordovaDialogs, $cordovaBluetoothSerial) {
        $scope.btnClick = function() {
            $cordovaBluetoothSerial.showBluetoothSettings().then(
              function () {
                  $cordovaDialogs.alert("Bluetooth LE is enabled", "Bluetooth LE", "GREAT!");
              },
              function () {
                  $cordovaDialogs.alert("Bluetooth LE is NOT enabled", "Bluetooth LE", "Oops!");
              }
           );
        };
}]);