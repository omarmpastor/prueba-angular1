import angularjs from 'angular';

angularjs.module("myApp", [])
    .controller('myCtrl', ["$scope", function ($scope) {
        $scope.nombre = "Prueba";
        $scope.toUpper = () => $scope.nombre.toUpperCase();
    }]);