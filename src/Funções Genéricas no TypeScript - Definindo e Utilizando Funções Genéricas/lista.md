### Exercícios sobre Funções Genéricas no TypeScript

1. **Exercício 1:** Crie uma função genérica `identidade` que aceite um parâmetro de qualquer tipo e retorne esse mesmo
   valor. Utilize a tipagem genérica na função.

    ```typescript
    function identidade<T>(valor: T): T {
        return valor;
    }

    console.log(identidade(5)); // 5
    console.log(identidade("texto")); // "texto"
    ```

2. **Exercício 2:** Crie uma função genérica `criarArray` que receba dois parâmetros: um valor de qualquer tipo e um
   número. A função deve retornar um array contendo o valor repetido o número de vezes informado.

    ```typescript
    function criarArray<T>(valor: T, repeticoes: number): T[] {
        return Array(repeticoes).fill(valor);
    }

    console.log(criarArray(5, 3)); // [5, 5, 5]
    console.log(criarArray("a", 2)); // ["a", "a"]
    ```

3. **Exercício 3:** Crie uma função genérica `retornarUltimoElemento` que receba um array de qualquer tipo e retorne o
   último elemento desse array.

    ```typescript
    function retornarUltimoElemento<T>(array: T[]): T {
        return array[array.length - 1];
    }

    console.log(retornarUltimoElemento([1, 2, 3])); // 3
    console.log(retornarUltimoElemento(["a", "b", "c"])); // "c"
    ```

4. **Exercício 4:** Crie uma função genérica `trocarElementos` que receba uma tupla com dois valores de qualquer tipo e
   retorne uma nova tupla com os valores invertidos.

    ```typescript
    function trocarElementos<T, U>(par: [T, U]): [U, T] {
        return [par[1], par[0]];
    }

    console.log(trocarElementos([1, "a"])); // ["a", 1]
    ```

5. **Exercício 5:** Crie uma função genérica `obterTamanho` que aceite um array de qualquer tipo e retorne o número de
   elementos desse array.

    ```typescript
    function obterTamanho<T>(array: T[]): number {
        return array.length;
    }

    console.log(obterTamanho([1, 2, 3])); // 3
    console.log(obterTamanho(["a", "b", "c"])); // 3
    ```

6. **Exercício 6:** Crie uma função genérica `primeiroMaiorQue` que receba um array de qualquer tipo e uma função de
   callback. A função deve retornar o primeiro elemento do array que satisfaz a condição do callback.

    ```typescript
    function primeiroMaiorQue<T>(array: T[], condicao: (valor: T) => boolean): T | undefined {
        return array.find(condicao);
    }

    console.log(primeiroMaiorQue([1, 2, 3], (x) => x > 1)); // 2
    ```

7. **Exercício 7:** Crie uma função genérica `adicionarAoInicio` que aceite um valor de qualquer tipo e um array de
   qualquer tipo, e retorne um novo array com o valor adicionado no início.

    ```typescript
    function adicionarAoInicio<T>(valor: T, array: T[]): T[] {
        return [valor, ...array];
    }

    console.log(adicionarAoInicio(1, [2, 3])); // [1, 2, 3]
    ```

8. **Exercício 8:** Crie uma função genérica `removerPrimeiroElemento` que aceite um array de qualquer tipo e retorne um
   novo array sem o primeiro elemento.

    ```typescript
    function removerPrimeiroElemento<T>(array: T[]): T[] {
        return array.slice(1);
    }

    console.log(removerPrimeiroElemento([1, 2, 3])); // [2, 3]
    ```

9. **Exercício 9:** Crie uma função genérica `mapear` que aceite um array de qualquer tipo e uma função de callback que
   transforme cada elemento do array. A função deve retornar um novo array com os valores mapeados.

    ```typescript
    function mapear<T, U>(array: T[], transformacao: (valor: T) => U): U[] {
        return array.map(transformacao);
    }

    console.log(mapear([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
    ```

10. **Exercício 10:** Crie uma função genérica `mesclarObjetos` que receba dois objetos de tipos diferentes e retorne um
    novo objeto que seja a junção de ambos.

    ```typescript
    function mesclarObjetos<T, U>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 };
    }

    console.log(mesclarObjetos({ nome: "Maria" }, { idade: 25 })); // { nome: "Maria", idade: 25 }
    ```

11. **Exercício 11:** Crie uma função genérica `somarValores` que aceite um array de números e retorne a soma de todos
    os valores.

    ```typescript
    function somarValores<T extends number>(array: T[]): number {
        return array.reduce((acc, valor) => acc + valor, 0);
    }

    console.log(somarValores([1, 2, 3])); // 6
    ```

12. **Exercício 12:** Crie uma função genérica `filtrarArray` que aceite um array e uma função de filtro. A função deve
    retornar um novo array contendo apenas os elementos que passam no filtro.

    ```typescript
    function filtrarArray<T>(array: T[], filtro: (valor: T) => boolean): T[] {
        return array.filter(filtro);
    }

    console.log(filtrarArray([1, 2, 3], (x) => x > 1)); // [2, 3]
    ```

13. **Exercício 13:** Crie uma função genérica `procurarElemento` que aceite um array e um valor de qualquer tipo, e
    retorne `true` se o valor estiver no array, e `false` caso contrário.

    ```typescript
    function procurarElemento<T>(array: T[], valor: T): boolean {
        return array.includes(valor);
    }

    console.log(procurarElemento([1, 2, 3], 2)); // true
    ```

14. **Exercício 14:** Crie uma função genérica `concatenarArrays` que aceite dois arrays de tipos diferentes e retorne
    um único array contendo os elementos de ambos.

    ```typescript
    function concatenarArrays<T, U>(array1: T[], array2: U[]): (T | U)[] {
        return [...array1, ...array2];
    }

    console.log(concatenarArrays([1, 2], ["a", "b"])); // [1, 2, "a", "b"]
    ```

15. **Exercício 15:** Crie uma função genérica `duplicarElementos` que aceite um array e retorne um novo array contendo
    cada elemento do array original duplicado.

    ```typescript
    function duplicarElementos<T>(array: T[]): T[] {
        return array.flatMap((valor) => [valor, valor]);
    }

    console.log(duplicarElementos([1, 2, 3])); // [1, 1, 2, 2, 3, 3]
    ```

16. **Exercício 16:** Crie uma função genérica `ordenarArray` que aceite um array de números e retorne o array ordenado
    em ordem crescente.

    ```typescript
    function ordenarArray<T extends number>(array: T[]): T[] {
        return array.sort((a, b) => a - b);
    }

    console.log(ordenarArray([3, 1, 2])); // [1, 2, 3]
    ```

17. **Exercício 17:** Crie uma função genérica `obterChave` que receba um objeto e uma chave, e retorne o valor
    correspondente à chave. Use a restrição `extends keyof`.

    ```typescript
    function obterChave<T, K extends keyof T>(objeto: T, chave: K): T[K] {
        return objeto[chave];
    }

    const pessoa = { nome: "João", idade: 30 };
    console.log(obterChave(pessoa, "nome")); // "João"
    ```

18. **Exercício 18:** Crie uma função genérica `inverterArray` que receba um array e retorne um novo array com os
    elementos em ordem inversa.

    ```typescript
    function inverterArray<T>(array: T[]): T[] {
        return array.reverse();
    }

    console.log(inverterArray([1, 2, 3])); // [3, 2, 1]
    ```

19. **Exercício 19:** Crie uma função genérica `dividirArray` que aceite um array e um número `n

`, e divida o array em subarrays de tamanho `n`.

    ```typescript
    function dividirArray<T>(array: T[], tamanho: number): T[][] {
        const resultado: T[][] = [];
        for (let i = 0; i < array.length; i += tamanho) {
            resultado.push(array.slice(i, i + tamanho));
        }
        return resultado;
    }

    console.log(dividirArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
    ```

20. **Exercício 20:** Crie uma função genérica `repetirValor` que aceite um valor e um número `n`, e retorne um array
    contendo o valor repetido `n` vezes.

    ```typescript
    function repetirValor<T>(valor: T, repeticoes: number): T[] {
        return Array(repeticoes).fill(valor);
    }

    console.log(repetirValor(5, 3)); // [5, 5, 5]
    ```

### Conclusão

Esses exercícios permitem que você pratique a criação e o uso de funções genéricas no TypeScript, cobrindo uma ampla
gama de cenários. Ao trabalhar com tipos genéricos, você pode criar funções mais flexíveis e reutilizáveis, mantendo a
segurança de tipo que o TypeScript oferece.