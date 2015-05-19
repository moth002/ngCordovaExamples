angular.module("myApp", ['ionic', 'ngCordova'])

.run(['$ionicPlatform', '$cordovaDialogs', '$cordovaBluetoothSerial', function ($ionicPlatform, $cordovaDialogs, $cordovaBluetoothSerial) {
    $ionicPlatform.ready(function () {
        $cordovaBluetoothSerial.isEnabled().then(
          function () {
              $cordovaDialogs.alert("Bluetooth LE is enabled", "Bluetooth LE", "GREAT!");
          },
          function () {
              $cordovaDialogs.alert("Bluetooth LE is NOT enabled", "Bluetooth LE", "Oops!");
          }
       );
    });
}])