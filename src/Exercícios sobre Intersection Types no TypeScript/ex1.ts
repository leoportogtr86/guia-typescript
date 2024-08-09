// Exercício 1: Crie dois tipos, Pessoa e Endereco, onde Pessoa tenha as propriedades nome
// (string) e idade (number), e Endereco tenha as propriedades rua (string) e cidade (string).
// Defina um Intersection Type PessoaComEndereco que combine esses dois tipos. Crie um objeto
// do tipo PessoaComEndereco.

// @ts-ignore
type Pessoa = {
    nome: string;
    idade: number;
}

// @ts-ignore
type Endereco = {
    rua: string;
    cidade: string;
}

type PessoaComEndereco = Pessoa & Endereco;

const pessoaComEndereco: PessoaComEndereco = {
    nome: "Bob",
    idade: 50,
    rua: "Rua 123",
    cidade: "Cidade A",
    numero: 100,
    complemento: "Comp."
}

console.log(pessoaComEndereco);