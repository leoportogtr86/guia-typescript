// 1. **Exercício 1:** Crie um tipo literal chamado `SinalDeTransito` que aceite os valores `"Vermelho"`, `"Amarelo"`
// e `"Verde"`. Declare uma variável desse tipo e atribua a ela o valor `"Verde"`. Em seguida, tente atribuir um valor
// inválido e observe o erro.
type SinalDeTransito = "Vermelho" | "Amarelo" | "Verde";

let sinal: SinalDeTransito = "Verde";

// sinal = "Preto";