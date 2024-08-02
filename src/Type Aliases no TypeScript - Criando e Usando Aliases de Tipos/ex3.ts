// 3. **Crie um type alias `Produto` para representar um objeto com `nome` (string) e
// `preco` (number). Declare um objeto do tipo `Produto`.**
// @ts-ignore
type Produto2 = {
    nome: string;
    preco: number;
}

const ps5: Produto2 = {
    nome: "Ps5",
    preco: 4000
}

console.log(ps5);