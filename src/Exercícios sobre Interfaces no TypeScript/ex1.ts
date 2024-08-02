// 1. **Exercício 1:** Declare uma interface `Carro` que tenha as propriedades `marca` (string), `modelo` (string)
// e `ano` (number). Crie um objeto do tipo `Carro` e imprima suas propriedades no console.
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

const c: Carro = {
    marca: "Renault",
    modelo: "Kwid",
    ano: 2020,
    portas: 2
}

console.log(c);