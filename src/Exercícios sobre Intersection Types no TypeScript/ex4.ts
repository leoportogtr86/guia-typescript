// 4. **Exercício 4:** Crie dois tipos, `Carro` com as propriedades `marca` (string) e `modelo` (string),
//     e `PropriedadesCarro` com as propriedades `cor` (string) e `ano` (number). Defina um Intersection
// Type `CarroCompleto` que combine ambos e crie um objeto desse tipo.

// @ts-ignore
type Carro = {
    marca: string;
    modelo: string;
}

type PropriedadesCarro = {
    cor: string;
    ano: number;
}

type CarroCompleto = Carro & PropriedadesCarro;

//@ts-ignore
const carroCompleto: CarroCompleto = {
    marca: "Renault",
    modelo: "Kwid",
    cor: "Laranja",
    ano: 2020,
}

console.log(carroCompleto);