// 7. **Exercício 7:** Crie uma interface `Animal` com as propriedades `nome` (string) e `idade` (number).
// Adicione um método `emitirSom()` que retorna void. Implemente essa interface em uma classe `Cachorro`.
interface Animal {
    nome: string;
    idade: number;

    emitirSom(): void;
}

class Cachorro implements Animal {
    constructor(public idade: number, public nome: string) {
    }

    emitirSom(): void {
        console.log("Au au");
    }
}

const dog: Cachorro = new Cachorro(10, "Totó");

dog.emitirSom();