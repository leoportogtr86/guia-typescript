// 8. **Exercício 8:** Declare uma interface `Veiculo` com as propriedades `marca` (string) e `modelo` (string).
// Crie uma interface `Carro` que estenda `Veiculo` e adicione a propriedade `portas` (number). Crie um objeto
// do tipo `Carro`.
interface Veiculo {
    marca: string;
}

// @ts-ignore
interface Carro extends Veiculo {
    portas: number;
}

const carro: Carro = {
    marca: "Honda",
    modelo: "HRV",
    portas: 4,
    ano: 2024
}