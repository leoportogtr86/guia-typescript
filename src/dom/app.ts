document.addEventListener("DOMContentLoaded", () => {
    const mensagemParagrafo = document.getElementById("mensagem") as HTMLParagraphElement;
    const btnMensagem = document.getElementById("btnMensagem") as HTMLButtonElement;
    const nomeInput = document.getElementById("nomeInput") as HTMLInputElement;
    const btnNome = document.getElementById("btnNome") as HTMLButtonElement;
    const nomeSaida = document.getElementById("nomeSaida") as HTMLParagraphElement;
    const imagem = document.getElementById("imagem") as HTMLImageElement;
    const btnImagem = document.getElementById("btnImagem") as HTMLButtonElement;

    // Manipulação de Mensagem
    btnMensagem.addEventListener("click", () => {
        mensagemParagrafo.textContent = "A mensagem foi alterada com sucesso!";
    });

    // Manipulação de Input de Nome
    btnNome.addEventListener("click", () => {
        const nome = nomeInput.value;
        if (nome) {
            nomeSaida.textContent = `Olá, ${nome}!`;
        } else {
            nomeSaida.textContent = "Por favor, digite seu nome.";
        }
    });

    // Troca de Imagem
    btnImagem.addEventListener("click", () => {
        if (imagem.src.includes("placeholder.com")) {
            imagem.src = "https://via.placeholder.com/200";
        } else {
            imagem.src = "https://via.placeholder.com/150";
        }
    });
});
