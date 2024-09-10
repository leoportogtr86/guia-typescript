// 4. **Exercício 4:** Crie uma função genérica `trocarElementos` que receba uma tupla com dois
// valores de qualquer tipo e retorne uma nova tupla com os valores invertidos.
function trocarElementos<T, U>(elementos: [T, U]): [U, T] {
    return [elementos[1], elementos[0]];
}