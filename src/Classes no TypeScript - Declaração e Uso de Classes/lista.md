### Exercícios sobre Classes no TypeScript

1. **Exercício 1:** Crie uma classe `Pessoa` com as propriedades `nome` (string) e `idade` (number). A classe deve ter
   um método `cumprimentar`, que retorne uma string com uma saudação. Crie uma instância da classe e chame o método.

    ```typescript
    class Pessoa {
        nome: string;
        idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        cumprimentar(): string {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
        }
    }

    const pessoa = new Pessoa("João", 25);
    console.log(pessoa.cumprimentar());
    ```

2. **Exercício 2:** Crie uma classe `Carro` com as propriedades `marca` (string) e `modelo` (string). A classe deve ter
   um método `acelerar` que retorne uma string informando que o carro está acelerando.

    ```typescript
    class Carro {
        marca: string;
        modelo: string;

        constructor(marca: string, modelo: string) {
            this.marca = marca;
            this.modelo = modelo;
        }

        acelerar(): string {
            return `${this.marca} ${this.modelo} está acelerando!`;
        }
    }

    const carro = new Carro("Toyota", "Corolla");
    console.log(carro.acelerar());
    ```

3. **Exercício 3:** Crie uma classe `ContaBancaria` com a propriedade `saldo` (number). A classe deve ter
   métodos `depositar` e `sacar` para manipular o saldo. Utilize o modificador `private` na propriedade `saldo`.

    ```typescript
    class ContaBancaria {
        private saldo: number;

        constructor(saldoInicial: number) {
            this.saldo = saldoInicial;
        }

        depositar(valor: number): void {
            this.saldo += valor;
        }

        sacar(valor: number): void {
            this.saldo -= valor;
        }

        getSaldo(): number {
            return this.saldo;
        }
    }

    const conta = new ContaBancaria(1000);
    conta.depositar(500);
    conta.sacar(200);
    console.log(conta.getSaldo()); // 1300
    ```

4. **Exercício 4:** Crie uma classe `Retangulo` com as propriedades `largura` (number) e `altura` (number). Adicione um
   método `calcularArea` que retorne a área do retângulo.

    ```typescript
    class Retangulo {
        largura: number;
        altura: number;

        constructor(largura: number, altura: number) {
            this.largura = largura;
            this.altura = altura;
        }

        calcularArea(): number {
            return this.largura * this.altura;
        }
    }

    const retangulo = new Retangulo(5, 10);
    console.log(retangulo.calcularArea()); // 50
    ```

5. **Exercício 5:** Crie uma classe `Animal` com um método `fazerSom`. Em seguida, crie uma classe `Cachorro` que herde
   de `Animal` e sobrescreva o método `fazerSom` para retornar "Latindo".

    ```typescript
    class Animal {
        fazerSom(): string {
            return "Som de animal.";
        }
    }

    class Cachorro extends Animal {
        fazerSom(): string {
            return "Latindo";
        }
    }

    const cachorro = new Cachorro();
    console.log(cachorro.fazerSom()); // "Latindo"
    ```

6. **Exercício 6:** Crie uma classe abstrata `Forma` com um método abstrato `calcularArea`. Em seguida, crie uma
   classe `Circulo` que estenda `Forma` e implemente o método `calcularArea`.

    ```typescript
    abstract class Forma {
        abstract calcularArea(): number;
    }

    class Circulo extends Forma {
        raio: number;

        constructor(raio: number) {
            super();
            this.raio = raio;
        }

        calcularArea(): number {
            return Math.PI * this.raio * this.raio;
        }
    }

    const circulo = new Circulo(3);
    console.log(circulo.calcularArea()); // 28.27 (aproximadamente)
    ```

7. **Exercício 7:** Crie uma interface `Movimentavel` que tenha um método `mover`. Crie uma classe `Carro` que
   implemente essa interface.

    ```typescript
    interface Movimentavel {
        mover(): void;
    }

    class Carro implements Movimentavel {
        mover(): void {
            console.log("O carro está se movendo.");
        }
    }

    const carro = new Carro();
    carro.mover(); // "O carro está se movendo."
    ```

8. **Exercício 8:** Crie uma classe `Funcionario` com as propriedades `nome` (string) e `salario` (number). Adicione um
   método `aumentarSalario` que aceite um percentual e aumente o salário.

    ```typescript
    class Funcionario {
        nome: string;
        salario: number;

        constructor(nome: string, salario: number) {
            this.nome = nome;
            this.salario = salario;
        }

        aumentarSalario(percentual: number): void {
            this.salario += this.salario * (percentual / 100);
        }
    }

    const funcionario = new Funcionario("Carlos", 3000);
    funcionario.aumentarSalario(10);
    console.log(funcionario.salario); // 3300
    ```

9. **Exercício 9:** Crie uma classe `Estudante` com as propriedades `nome` (string) e `notas` (array de números).
   Adicione um método `calcularMedia` que retorne a média das notas.

    ```typescript
    class Estudante {
        nome: string;
        notas: number[];

        constructor(nome: string, notas: number[]) {
            this.nome = nome;
            this.notas = notas;
        }

        calcularMedia(): number {
            const total = this.notas.reduce((acc, nota) => acc + nota, 0);
            return total / this.notas.length;
        }
    }

    const estudante = new Estudante("Ana", [8, 9, 10]);
    console.log(estudante.calcularMedia()); // 9
    ```

10. **Exercício 10:** Crie uma classe `Livro` com as propriedades `titulo` (string) e `autor` (string). Adicione um
    método estático `compararLivros` que receba dois livros e retorne qual livro tem o título lexicograficamente maior.

    ```typescript
    class Livro {
        titulo: string;
        autor: string;

        constructor(titulo: string, autor: string) {
            this.titulo = titulo;
            this.autor = autor;
        }

        static compararLivros(livro1: Livro, livro2: Livro): string {
            return livro1.titulo > livro2.titulo ? livro1.titulo : livro2.titulo;
        }
    }

    const livro1 = new Livro("O Senhor dos Anéis", "Tolkien");
    const livro2 = new Livro("Harry Potter", "J.K. Rowling");
    console.log(Livro.compararLivros(livro1, livro2)); // "O Senhor dos Anéis"
    ```

11. **Exercício 11:** Crie uma classe `Veiculo` com a propriedade `velocidadeMaxima` (number). Crie uma subclasse `Moto`
    que tenha um método `acelerar` para aumentar a velocidade.

    ```typescript
    class Veiculo {
        velocidadeMaxima: number;

        constructor(velocidadeMaxima: number) {
            this.velocidadeMaxima = velocidadeMaxima;
        }
    }

    class Moto extends Veiculo {
        acelerar(): string {
            return `A moto está acelerando até ${this.velocidadeMaxima} km/h!`;
        }
    }

    const moto = new Moto(120);
    console.log(moto.acelerar()); // "A moto está acelerando até 120 km/h!"
    ```

12. **Exercício 12:** Crie uma classe `Produto` com as propriedades `nome` (string) e `preco` (number). Adicione um
    getter e setter para a propriedade `preco` que permita definir um preço mínimo de R$ 1,00.

    ```typescript
    class Produto {
        nome: string;
        private _preco: number;

        constructor(nome: string, preco: number) {
            this.nome = nome;
            this._preco = preco;
        }

        get preco(): number {
            return this._preco;
        }

        set preco(valor: number) {
            if (valor >= 1) {
                this._preco = valor;
            }
        }
    }

    const produto = new Produto("Cadeira", 50);
    produto.preco = 0.5; // Ignorado, preço mínimo é 1
    console.log(produto.preco); // 50
    ```

13. **Exercício 13:** Crie uma classe `ContaPoupanca` que herde de `ContaB

ancaria` e adicione um método `rendimento` que aumente o saldo em 2%.

    ```typescript
    class ContaBancaria {
        protected saldo: number;

        constructor(saldoInicial: number) {
            this.saldo = saldoInicial;
        }

        depositar(valor: number): void {
            this.saldo += valor;
        }

        getSaldo(): number {
            return this.saldo;
        }
    }

    class ContaPoupanca extends ContaBancaria {
        rendimento(): void {
            this.saldo += this.saldo * 0.02;
        }
    }

    const poupanca = new ContaPoupanca(1000);
    poupanca.rendimento();
    console.log(poupanca.getSaldo()); // 1020
    ```

14. **Exercício 14:** Crie uma classe `Funcionario` que implemente uma interface `Trabalhavel` com o método `trabalhar`.
    A implementação deve imprimir uma mensagem indicando que o funcionário está trabalhando.

    ```typescript
    interface Trabalhavel {
        trabalhar(): void;
    }

    class Funcionario implements Trabalhavel {
        trabalhar(): void {
            console.log("O funcionário está trabalhando.");
        }
    }

    const funcionario = new Funcionario();
    funcionario.trabalhar(); // "O funcionário está trabalhando."
    ```

15. **Exercício 15:** Crie uma classe `Calculadora` com métodos estáticos para realizar operações matemáticas
    como `somar`, `subtrair`, `multiplicar` e `dividir`.

    ```typescript
    class Calculadora {
        static somar(a: number, b: number): number {
            return a + b;
        }

        static subtrair(a: number, b: number): number {
            return a - b;
        }

        static multiplicar(a: number, b: number): number {
            return a * b;
        }

        static dividir(a: number, b: number): number {
            return a / b;
        }
    }

    console.log(Calculadora.somar(10, 5)); // 15
    console.log(Calculadora.dividir(10, 2)); // 5
    ```

16. **Exercício 16:** Crie uma classe `Banco` com a propriedade `nome` (string) e um método estático `compararBancos`
    que compare dois objetos `Banco` pela propriedade `nome`.

    ```typescript
    class Banco {
        nome: string;

        constructor(nome: string) {
            this.nome = nome;
        }

        static compararBancos(banco1: Banco, banco2: Banco): string {
            return banco1.nome > banco2.nome ? banco1.nome : banco2.nome;
        }
    }

    const banco1 = new Banco("Banco A");
    const banco2 = new Banco("Banco B");
    console.log(Banco.compararBancos(banco1, banco2)); // "Banco B"
    ```

17. **Exercício 17:** Crie uma classe `Triangulo` que implemente a interface `FormaGeometrica`, com
    métodos `calcularArea` e `calcularPerimetro`. Utilize as fórmulas para calcular a área e o perímetro de um
    triângulo.

    ```typescript
    interface FormaGeometrica {
        calcularArea(): number;
        calcularPerimetro(): number;
    }

    class Triangulo implements FormaGeometrica {
        base: number;
        altura: number;
        ladoA: number;
        ladoB: number;
        ladoC: number;

        constructor(base: number, altura: number, ladoA: number, ladoB: number, ladoC: number) {
            this.base = base;
            this.altura = altura;
            this.ladoA = ladoA;
            this.ladoB = ladoB;
            this.ladoC = ladoC;
        }

        calcularArea(): number {
            return (this.base * this.altura) / 2;
        }

        calcularPerimetro(): number {
            return this.ladoA + this.ladoB + this.ladoC;
        }
    }

    const triangulo = new Triangulo(10, 5, 3, 4, 5);
    console.log(triangulo.calcularArea()); // 25
    console.log(triangulo.calcularPerimetro()); // 12
    ```

18. **Exercício 18:** Crie uma classe `Agenda` com um array de objetos contendo `nome` (string) e `telefone` (string).
    Adicione métodos para adicionar, remover e buscar contatos.

    ```typescript
    class Agenda {
        contatos: { nome: string, telefone: string }[] = [];

        adicionarContato(nome: string, telefone: string): void {
            this.contatos.push({ nome, telefone });
        }

        removerContato(nome: string): void {
            this.contatos = this.contatos.filter(contato => contato.nome !== nome);
        }

        buscarContato(nome: string): string | undefined {
            const contato = this.contatos.find(contato => contato.nome === nome);
            return contato ? contato.telefone : undefined;
        }
    }

    const agenda = new Agenda();
    agenda.adicionarContato("João", "1234-5678");
    agenda.adicionarContato("Maria", "9876-5432");
    console.log(agenda.buscarContato("Maria")); // "9876-5432"
    ```

19. **Exercício 19:** Crie uma classe `Biblioteca` com um array de livros. Adicione métodos para adicionar livros e
    listar todos os livros.

    ```typescript
    class Biblioteca {
        livros: string[] = [];

        adicionarLivro(livro: string): void {
            this.livros.push(livro);
        }

        listarLivros(): void {
            this.livros.forEach((livro) => {
                console.log(livro);
            });
        }
    }

    const biblioteca = new Biblioteca();
    biblioteca.adicionarLivro("O Senhor dos Anéis");
    biblioteca.adicionarLivro("1984");
    biblioteca.listarLivros(); // "O Senhor dos Anéis", "1984"
    ```

20. **Exercício 20:** Crie uma classe `CalculadoraCientifica` que herde de `Calculadora` e adicione um método para
    calcular a raiz quadrada de um número.

    ```typescript
    class CalculadoraCientifica extends Calculadora {
        static raizQuadrada(valor: number): number {
            return Math.sqrt(valor);
        }
    }

    console.log(CalculadoraCientifica.somar(10, 5)); // 15
    console.log(CalculadoraCientifica.raizQuadrada(9)); // 3
    ```

### Conclusão

Esses exercícios abrangem uma ampla variedade de cenários envolvendo classes no TypeScript, incluindo herança, uso de
interfaces, modificadores de acesso, métodos estáticos e abstratos. Ao praticar esses conceitos, você pode dominar o uso
de classes e aplicar os princípios da programação orientada a objetos de maneira eficiente no TypeScript.