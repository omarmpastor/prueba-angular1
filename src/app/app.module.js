import angularjs from 'angular';

import HeroesService from './heroes.service';

var heroesArr = [
    "Batman",
    "Spiderman",
    "Lobezno"
];

var myFactoryRandom = (arrHeroes = "Pepito") => {
    return arrHeroes;//heroes[Math.floor(Math.random() * heroes.length)];
}

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
myApp.value("heroes", heroesArr);
myApp.service("heroesSrv", ["heroes", HeroesService]);