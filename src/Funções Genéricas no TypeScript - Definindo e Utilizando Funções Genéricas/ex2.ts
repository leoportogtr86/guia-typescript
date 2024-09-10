// 2. **Exercício 2:** Crie uma função genérica `criarArray` que receba dois parâmetros: um valor de
// qualquer tipo e um número. A função deve retornar um array contendo o valor repetido o número de
// vezes informado.

function criarArray<T, K extends number>(param1: T, param2: K): T[] {
    const arr: T[] = [];
    for (let i = 0; i < param2; i++) {
        arr.push(param1);
    }
    return arr;
}

console.log(criarArray(10, 5));