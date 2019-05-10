import angularjs from 'angular';

var myApp = angularjs.module("myApp", [])

myApp.controller('myCtrl', ["$scope", function ($scope) {
        this.data = {
            nombre: "",
            heroes: [
                "Batman",
                "Spiderman",
                "Lobezno"
            ]
        };

        this.addHeroe = (name) => {
            this.data.heroes.push(name);
        }
    }]);