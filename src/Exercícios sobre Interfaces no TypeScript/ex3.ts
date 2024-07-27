// 3. **Exercício 3:** Defina uma interface `Pessoa` com as propriedades `nome` (string) e `idade` (number).
// Crie uma função que aceite um parâmetro do tipo `Pessoa` e imprima uma saudação usando essas propriedades.
interface Pessoa {
    nome: string;
    idade: number;
}

const saudacao1 = (pessoa: Pessoa): void => {
    console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos de idade.`);
}

const p: Pessoa = {
    nome: "Leonardo",
    idade: 38
}

saudacao1(p);