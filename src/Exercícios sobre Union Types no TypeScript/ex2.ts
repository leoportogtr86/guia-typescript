// 2. **Exercício 2:** Crie uma função `exibirValor` que aceite um parâmetro do tipo `number` ou
// `boolean`. A função deve imprimir uma mensagem diferente para cada tipo.
const exibirValor = (param: string | number) => {
    if (typeof param === "number"){
        console.log("O tipo do param é numérico.");
    } else {
        console.log("O tipo do param é string.");
    }
}

exibirValor(10);
exibirValor("10");
