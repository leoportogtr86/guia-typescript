// 8. **Filtre um array de números para obter apenas os números ímpares.**
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares: number[] = numbers.filter((e) => e % 2 !== 0);

console.log(impares);