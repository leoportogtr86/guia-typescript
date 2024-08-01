// 9. **Exercício 9:** Defina uma interface `Config` com uma propriedade `url` (string) e um método
// `connect()` que retorna uma string. Crie uma classe `Api` que implemente essa interface.
interface Config {
    url: string;

    connect(): string;
}

class Api implements Config {
    constructor(public url: string) {
    }

    connect(): string {
        return `Conectado a ${this.url}`;
    }
}

const api = new Api('http://localhost:3000');

console.log(api.connect());