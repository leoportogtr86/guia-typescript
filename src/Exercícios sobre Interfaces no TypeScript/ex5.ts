// 5. **Exercício 5:** Declare uma interface `Forma` com uma propriedade `area` (number) e um método `calcularArea()` que
// não recebe parâmetros e retorna um número. Crie uma classe `Quadrado` que implemente essa interface.
interface Forma {
    area: number;

    calcularArea(): number;
}

class Quadrado implements Forma {
    constructor(public area: number) {
    }

    calcularArea(): number {
        return this.area;
    }
}

const q: Quadrado = new Quadrado(10);

console.log(q.calcularArea());