// Exercício 3: Defina um tipo Animal com a propriedade especie (string) e um tipo Domestico
// com a propriedade nome (string). Crie um Intersection Type Pet que combine
// ambos e crie um objeto desse tipo.
// @ts-ignore
type Animal = {
    especie: string;
}

type Domestico = {
    nome: string;
}

type Pet = Animal & Domestico;

const pet: { idade: number; nome: string } = {
    nome: "cachorro",
    idade: 5
}

console.log(pet);