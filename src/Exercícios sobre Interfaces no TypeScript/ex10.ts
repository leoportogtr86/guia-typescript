// 10. **Exercício 10:** Crie uma interface `Endereco` com as propriedades `rua` (string), `numero` (number) e `cidade` (
//     string). Adicione uma propriedade opcional `complemento` (string). Declare um objeto do tipo `Endereco` e imprima
// suas propriedades.
// @ts-ignore
interface Endereco {
    rua: string;
    numero: number;
    cidade: string;
    complemento?: string;
}

const end: Endereco = {
    cidade: "João Pessoa",
    rua: "Rua XPTO",
    numero: 100,
    complemento: "Apto 100"
}

console.log(end);