export default class HeroesService {
    constructor($http) {
        this.heroes = [];
        this.$http = $http;

        this.$http.get('./data.json')
            .then(res => this.heroes = res.data)
            .catch(err => console.log(err));
    }

    getAll() {
        return this.heroes;
    }

    addHeroe(name) {
        this.heroes.push({ name });
    }
}
