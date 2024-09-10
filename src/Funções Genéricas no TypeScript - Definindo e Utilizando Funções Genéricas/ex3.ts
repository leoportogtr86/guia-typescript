// 3. **Exercício 3:** Crie uma função genérica `retornarUltimoElemento` que receba um array de
// qualquer tipo e retorne o último elemento desse array.
function retornarUltimoElemento<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

console.log(retornarUltimoElemento(["teste", "ultimo"]));