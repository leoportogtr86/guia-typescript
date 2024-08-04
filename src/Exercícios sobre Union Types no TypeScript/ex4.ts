// 4. **Exercício 4:** Defina um tipo `Resultado` que possa ser um objeto com `sucesso: true` e `dados: any`,
//ou `sucesso: false` e `erro: string`. Crie uma função `tratarResultado` que aceite um parâmetro desse
//tipo e imprima uma mensagem apropriada.
type Resultado = { sucesso: true, dados: any } | { sucesso: false, erro: string };

const tratarResultado = (res: Resultado) => {
    if (res.sucesso) {
        console.log("Sucesso!");
    } else {
        console.log("Ihh, deu ruim...");
    }
}

tratarResultado({sucesso: true, dados: [10]});