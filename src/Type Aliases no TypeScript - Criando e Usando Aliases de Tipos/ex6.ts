// 6. **Defina um type alias `Endereco` para representar um objeto com `rua` (string), `numero` (number)
// e `cidade` (string). Declare um objeto do tipo `Endereco`.**
type EnderecoType = {
    rua: string;
    numero: number;
    cidade: string
}

const endereco1: EnderecoType = {
    cidade: "João Pessoa",
    rua: "XPTO",
    numero: 100
}

console.log(endereco1);