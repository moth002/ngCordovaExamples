angular.module("myApp", ['ionic', 'ngCordova'])

.run(['$ionicPlatform', '$cordovaBluetoothSerial', function ($ionicPlatform, $cordovaBluetoothSerial) {
    $ionicPlatform.ready(function () {
        //$cordovaBluetoothSerial.list(function (devices) { alert(devices); }, function () { alert('false'); });
        //$cordovaBluetoothSerial.connect('', function() { alert('true'); }, function() { alert('false'); });
    });
}])