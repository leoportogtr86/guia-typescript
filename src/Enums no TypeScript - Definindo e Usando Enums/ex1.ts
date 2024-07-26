// 1. **Exercício 1:** Defina um enum chamado `DiasDaSemana` que contenha os dias da semana, começando com
// `Domingo = 0`. Crie uma variável do tipo `DiasDaSemana` e atribua a ela o valor `DiasDaSemana.Quarta`.
// Imprima o valor no console.

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

const dia = DiasDaSemana.Quarta;

console.log(dia);