// 3. **Exercício 3:** Crie um tipo literal `Tamanho` que aceite os valores `"Pequeno"`, `"Médio"` e `"Grande"`. Declare
// uma variável desse tipo e atribua a ela o valor `"Médio"`. Em seguida, crie uma função que aceite um parâmetro desse
// tipo e retorne uma mensagem adequada.

type Tamanho = "Pequeno" | "Médio" | "Grande";

let tamanho: Tamanho = "Médio";

function mensagem(tamanho: Tamanho): string {
    return `O tamanho é ${tamanho}`;
}

console.log(mensagem(tamanho));
