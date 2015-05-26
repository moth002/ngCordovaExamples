angular.module('myApp')
    .controller('mainCtrl', ['$scope', '$cordovaBluetoothSerial',
    function ($scope, $cordovaBluetoothSerial) {
        $scope.btnClick = function () {
            //alert('test');
            //var printerId = '';
            //$cordovaBluetoothSerial.list(function (devices) { alert(devices); }, function () { alert('false'); });
            $cordovaBluetoothSerial.list().then(
              function (devices) {
                  $cordovaBluetoothSerial.connect(devices[0].id).then(
                      function () {
                          alert("Bluetooth connected", "Bluetooth LE", "Oops!");
                      },
                      function () {
                          alert("Bluetooth NOT connected", "Bluetooth LE", "Oops!");
                      }
                    );
              },
              function () {
                  alert("Bluetooth LE is NOT enabled", "Bluetooth LE", "Oops!");
              }
            );
            
            //alert('yes');
        };
}]);