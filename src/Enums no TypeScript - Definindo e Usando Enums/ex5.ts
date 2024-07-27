// 5. **Exercício 5:** Defina um enum chamado `StatusTarefa` com os valores `NaoIniciada`, `EmAndamento` e
// `Concluida`. Crie uma função que aceite um parâmetro do tipo `StatusTarefa` e imprima uma
// mensagem apropriada dependendo do valor.
enum StatusTarefa {
    NaoIniciada,
    EmAndamento,
    Concluida
}

const logStatus = (status: StatusTarefa) => {
    switch (status) {
        case StatusTarefa.Concluida:
            console.log("Concluída");
            break;
        case StatusTarefa.EmAndamento:
            console.log("Em andamento");
            break;
        case StatusTarefa.NaoIniciada:
            console.log("Não iniciada");
            break;
        default:
            console.log("Status inválido");
    }
}