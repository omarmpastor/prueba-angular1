import angularjs from 'angular';

import HeroesService from './heroes.service';

var myApp = angularjs.module("myApp", []);

myApp.controller('myCtrl', ["heroesSrv", function (heroesSrv) {
        this.heroesService = heroesSrv;

        this.getHeroes = () => {
            return heroesSrv.getAll();
        }

        this.addHeroe = (name) => {
            heroesSrv.addHeroe(name);
        }
    }]);
myApp.service("heroesSrv", ["$http", HeroesService]);
/*
myApp.provider("heroesSrvProvider", () => {
    $get = function(HeroesService) {
        return new HeroesService();
    }
});
*/
myApp.provider('heroesSrvProvider', function(){
    this.$get = ["heroesSrv",(HeroesService) => {
        return new HeroesService(["Joker","Dos caras"]);
    }];
});