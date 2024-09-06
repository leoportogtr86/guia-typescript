### Exercícios sobre Sobrecarga de Funções no TypeScript

1. **Exercício 1:** Crie uma função `somar` que tenha duas assinaturas: uma para somar dois números e outra para
   concatenar duas strings. Implemente a função para cobrir ambos os casos.

    ```typescript
    function somar(a: number, b: number): number;
    function somar(a: string, b: string): string;

    function somar(a: any, b: any): any {
        return a + b;
    }

    console.log(somar(10, 20)); // 30
    console.log(somar("Olá, ", "Mundo!")); // "Olá, Mundo!"
    ```

2. **Exercício 2:** Crie uma função `buscarItem` que tenha duas assinaturas: uma que aceite um `id` (número) e retorne
   uma string com o nome do item, e outra que aceite um nome (string) e retorne um objeto com o id e o nome do item.

    ```typescript
    function buscarItem(id: number): string;
    function buscarItem(nome: string): { id: number, nome: string };

    function buscarItem(idOuNome: any): any {
        if (typeof idOuNome === "number") {
            return "Item com ID " + idOuNome;
        } else {
            return { id: 1, nome: idOuNome };
        }
    }

    console.log(buscarItem(1)); // "Item com ID 1"
    console.log(buscarItem("Cadeira")); // { id: 1, nome: "Cadeira" }
    ```

3. **Exercício 3:** Crie uma função `calcular` que tenha duas assinaturas: uma que aceite dois números para somar, e
   outra que aceite um array de números para somar todos os elementos.

    ```typescript
    function calcular(a: number, b: number): number;
    function calcular(numeros: number[]): number;

    function calcular(aOuNumeros: any, b?: any): any {
        if (Array.isArray(aOuNumeros)) {
            return aOuNumeros.reduce((acc, num) => acc + num, 0);
        } else {
            return aOuNumeros + b;
        }
    }

    console.log(calcular(3, 4)); // 7
    console.log(calcular([1, 2, 3, 4])); // 10
    ```

4. **Exercício 4:** Crie uma função `multiplicarOuConcatenar` que tenha duas assinaturas: uma para multiplicar dois
   números e outra para concatenar um número e uma string.

    ```typescript
    function multiplicarOuConcatenar(a: number, b: number): number;
    function multiplicarOuConcatenar(a: number, b: string): string;

    function multiplicarOuConcatenar(a: any, b: any): any {
        if (typeof b === "number") {
            return a * b;
        } else {
            return a + b;
        }
    }

    console.log(multiplicarOuConcatenar(5, 2)); // 10
    console.log(multiplicarOuConcatenar(5, " vezes")); // "5 vezes"
    ```

5. **Exercício 5:** Crie uma função `formatarData` que tenha três assinaturas: uma que aceite uma data como string,
   outra que aceite uma data como número (timestamp), e uma que aceite um objeto `Date`. A função deve retornar a data
   formatada como "YYYY-MM-DD".

    ```typescript
    function formatarData(data: string): string;
    function formatarData(data: number): string;
    function formatarData(data: Date): string;

    function formatarData(data: any): string {
        if (typeof data === "string") {
            return new Date(data).toISOString().split("T")[0];
        } else if (typeof data === "number") {
            return new Date(data).toISOString().split("T")[0];
        } else {
            return data.toISOString().split("T")[0];
        }
    }

    console.log(formatarData("2024-01-01")); // "2024-01-01"
    console.log(formatarData(1672531199000)); // formato correto da data
    console.log(formatarData(new Date())); // Data atual no formato "YYYY-MM-DD"
    ```

6. **Exercício 6:** Crie uma função `filtrar` que tenha duas assinaturas: uma que aceite um array de números e outra que
   aceite um array de strings. A função deve retornar o array filtrado, onde o valor mínimo é 5 para números e o valor
   mínimo em ordem alfabética é "C" para strings.

    ```typescript
    function filtrar(valores: number[]): number[];
    function filtrar(valores: string[]): string[];

    function filtrar(valores: any[]): any[] {
        if (typeof valores[0] === "number") {
            return valores.filter(valor => valor >= 5);
        } else {
            return valores.filter(valor => valor >= "C");
        }
    }

    console.log(filtrar([3, 5, 8, 1])); // [5, 8]
    console.log(filtrar(["A", "B", "C", "D"])); // ["C", "D"]
    ```

7. **Exercício 7:** Crie uma função `converter` que tenha duas assinaturas: uma para converter um número em uma string e
   outra para converter uma string em um número.

    ```typescript
    function converter(valor: number): string;
    function converter(valor: string): number;

    function converter(valor: any): any {
        if (typeof valor === "number") {
            return valor.toString();
        } else {
            return parseInt(valor);
        }
    }

    console.log(converter(123)); // "123"
    console.log(converter("456")); // 456
    ```

8. **Exercício 8:** Crie uma função `encontrarMaximo` que tenha duas assinaturas: uma que aceite um array de números e
   retorne o maior número, e outra que aceite um array de strings e retorne a string de maior comprimento.

    ```typescript
    function encontrarMaximo(valores: number[]): number;
    function encontrarMaximo(valores: string[]): string;

    function encontrarMaximo(valores: any[]): any {
        if (typeof valores[0] === "number") {
            return Math.max(...valores);
        } else {
            return valores.reduce((a, b) => (a.length > b.length ? a : b));
        }
    }

    console.log(encontrarMaximo([1, 2, 3, 4, 5])); // 5
    console.log(encontrarMaximo(["casa", "carro", "bicicleta"])); // "bicicleta"
    ```

9. **Exercício 9:** Crie uma função `criarMensagem` que tenha duas assinaturas: uma para criar uma mensagem com um
   número, e outra para criar uma mensagem com uma string. A função deve retornar uma string que combine o valor com uma
   mensagem padrão.

    ```typescript
    function criarMensagem(valor: number): string;
    function criarMensagem(valor: string): string;

    function criarMensagem(valor: any): string {
        if (typeof valor === "number") {
            return `O número é ${valor}`;
        } else {
            return `A palavra é "${valor}"`;
        }
    }

    console.log(criarMensagem(123)); // "O número é 123"
    console.log(criarMensagem("palavra")); // "A palavra é 'palavra'"
    ```

10. **Exercício 10:** Crie uma função `calcularArea` que tenha duas assinaturas: uma para calcular a área de um
    quadrado (um parâmetro `lado`), e outra para calcular a área de um retângulo (dois parâmetros `largura` e `altura`).

    ```typescript
    function calcularArea(lado: number): number;
    function calcularArea(largura: number, altura: number): number;

    function calcularArea(a: number, b?: number): number {
        if (b === undefined) {
            return a * a; // Quadrado
        } else {
            return a * b; // Retângulo
        }
    }

    console.log(calcularArea(5)); // 25 (área do quadrado)
    console.log(calcularArea(5, 10)); // 50 (área do retângulo)
    ```

### Conclusão

Esses exercícios cobrem uma variedade de cenários para praticar sobrecarga de funções no TypeScript. Eles permitem que
você crie funções flexíveis que podem lidar com diferentes tipos de entradas e saídas, garantindo que o código seja
seguro e eficiente.