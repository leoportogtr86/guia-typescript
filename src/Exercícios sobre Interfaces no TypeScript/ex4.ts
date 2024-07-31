// 4. **Exercício 4:** Crie uma interface `Produto` com as propriedades `nome` (string), `preco` (number) e `categoria` (
//     string). Declare um array de objetos do tipo `Produto` e imprima o nome e o preço de cada produto.
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

const produtos: Produto[] = [
    {nome: 'Notebook', preco: 3000, categoria: 'Informática'},
    {nome: 'Celular', preco: 1500, categoria: 'Telefonia'},
    {nome: 'Smart TV', preco: 2500, categoria: 'Eletrônicos'}
]

produtos.forEach((produto) => {
    console.log(`Nome: ${produto.nome} - Preço: ${produto.preco}`);
})