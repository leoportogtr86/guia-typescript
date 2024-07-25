//9. **Reduza um array de números para obter a soma total de seus elementos.**
const idades: number[] = [10, 20, 30, 40];
const soma = idades.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(soma);
