// 2. **Exercício 2:** Defina um tipo literal `DiaDaSemana` que aceite os
// valores `"Segunda"`, `"Terça"`, `"Quarta"`, `"Quinta"`, `"Sexta"`, `"Sábado"` e `"Domingo"`. Crie uma
// função `imprimirDia` que aceite um parâmetro desse tipo e imprima uma mensagem com o dia da semana.
type DiaDaSemana = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sábado" | "Domingo";

const imprimirDia = (dia: DiaDaSemana): void => {
    console.log(`Hoje é ${dia}.`);
}

imprimirDia("Quarta");