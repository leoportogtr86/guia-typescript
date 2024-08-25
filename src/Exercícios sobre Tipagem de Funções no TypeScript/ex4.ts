// Exercício 4: Crie uma função dividir que receba dois parâmetros do tipo number e
// retorne a divisão deles. Se o divisor for zero, retorne null.
// Tipifique os parâmetros e o retorno da função.
const dividir = (a: number, b: number): number | null => {
    return b === 0 ? null : a / b;
}

console.log(dividir(10, 4));
console.log(dividir(10, 0));
