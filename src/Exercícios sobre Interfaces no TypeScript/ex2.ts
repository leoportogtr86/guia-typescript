// 2. **Exercício 2:** Crie uma interface `Livro` com as propriedades `titulo` (string), `autor` (string) e `paginas` (
//     number). Defina uma propriedade opcional `editora` (string). Crie um objeto do tipo `Livro` e imprima suas
// propriedades.
interface Livro {
    titulo: string;
    autor: string;
    paginas: number;
    editora?: string
}

const l1: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    paginas: 1000
}

const l2: Livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    paginas: 300,
    editora: "HarperCollins"
}

console.log(l1);
console.log(l2);
