// Exercício 3: Crie uma função subtrair que receba dois parâmetros do tipo number, onde
// o segundo parâmetro é opcional. Se o segundo parâmetro não for fornecido, subtraia 0.
// Tipifique os parâmetros e o retorno da função.

const subtrair = (a: number, b = 0): number => a - b;

console.log(subtrair(10, 45));