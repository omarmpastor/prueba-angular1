export default class HeroesService {
    constructor(heroes) {
        this.heroes = heroes;
    }

    getAll() {
        return this.heroes;
    }

    addHeroe(name) {
        this.heroes.push(name);
    }
}
