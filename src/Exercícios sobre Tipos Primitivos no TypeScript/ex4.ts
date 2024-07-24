// Exercício 4: Defina uma função chamada saudacao que receba um parâmetro do tipo string
// e retorne uma saudação personalizada. Utilize o tipo de retorno string.
const saudacao = (text: string): string => {
    return `Saudação: ${text}`;
}

console.log(saudacao("Hello, world!"));