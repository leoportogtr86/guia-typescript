// 3. **Exercício 3:** Defina um enum baseado em string chamado `Cores` com os valores `Vermelho`, `Verde` e `Azul`.
//     Declare uma variável do tipo `Cores` e atribua a ela o valor `Cores.Verde`. Imprima o valor no console.
enum Cores {
    Vermelho = "Vermelho",
    Verde = "Verde",
    Azul = "Azul",
    Amarelo = "Amarelo",
    Preto = "Preto",
    Branco = "Branco"
}

const cor: Cores = Cores.Verde;

console.log(cor);