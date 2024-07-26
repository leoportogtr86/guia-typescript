// 2. **Exercício 2:** Crie um enum chamado `Meses` que contenha os 12 meses do ano, com valores numéricos
// começando em 1 para `Janeiro`. Declare uma variável do tipo `Meses` e atribua a ela o valor `Meses.Dezembro`.
// Imprima o valor no console.
enum Meses {
    Janeiro = 1,
    Fevereiro,
    Marco,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}

const mes: Meses = Meses.Dezembro;

console.log(mes);