// Declare um array de objetos que representem pessoas com nome e idade, e adicione um novo objeto ao array.
interface Pessoa {
    nome: string;
    idade: number;
}

const p1: Pessoa = {
    nome: "Leonardo",
    idade: 38
}

const p2: Pessoa = {
    nome: "Maria",
    idade: 25
}

const p3: Pessoa = {
    nome: "João",
    idade: 30
}

const p4: Pessoa = {
    nome: "Ana",
    idade: 20
}

const pessoas: Pessoa[] = [p1, p2, p3, p4];

console.log(pessoas);