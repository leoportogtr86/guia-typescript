// 4. **Defina um type alias `Operacao` para uma função que receba dois números
// e retorne um número. Implemente uma função `multiplicar` usando esse type alias.**
type Operacao = (a: number, b: number) => number;

const soma2: Operacao = (a: number, b: number) => a + b;
const subtracao2: Operacao = (a: number, b: number) => a - b;
const multiplicacao2: Operacao = (a: number, b: number) => a * b;
const divisao2: Operacao = (a: number, b: number) => a / b;

console.log(soma2(1, 2)); // 3
console.log(subtracao2(1, 2)); // -1
console.log(multiplicacao2(1, 2)); // 2
console.log(divisao2(1, 2)); // 0.5
