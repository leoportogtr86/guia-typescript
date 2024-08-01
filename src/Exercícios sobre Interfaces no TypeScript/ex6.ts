// 6. **Exercício 6:** Defina uma interface `Funcionario` com as propriedades `nome` (string), `cargo` (string)
// e `salario` (number). Crie uma função que aceite um array de `Funcionario` e calcule a média salarial.
interface Funcionario {
    nome: string;
    cargo: string;
    salario: number;
}

const f1: Funcionario = {
    nome: "Nome 1",
    cargo: "Cargo 1",
    salario: 1000
}

const f2: Funcionario = {
    nome: "Nome 2",
    cargo: "Cargo 2",
    salario: 2000
}

const f3: Funcionario = {
    nome: "Nome 3",
    cargo: "Cargo 3",
    salario: 3000
}

const f4: Funcionario = {
    nome: "Nome 4",
    cargo: "Cargo 4",
    salario: 4000
}

const funcionarios: Funcionario[] = [f1, f2, f3, f4];

function getMedia(funcionarios: Funcionario[]): number {
    let soma = 0;

    funcionarios.forEach((f) => {
        soma += f.salario;
    })

    return soma / funcionarios.length;
}

const media = getMedia(funcionarios);
console.log(media);