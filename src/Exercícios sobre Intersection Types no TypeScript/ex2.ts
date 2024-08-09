// Exercício 2: Defina dois tipos, Identificavel com a propriedade id (number) e Nomeavel com
// a propriedade nome (string). Crie um Intersection Type Usuario que combine ambos e crie
// uma função exibirUsuario que aceite um parâmetro do tipo Usuario e imprima id e nome.
type Identificavel = {
    id: number;
}

type Nomeavel = {
    nome: string;
}

type Usuario = Identificavel & Nomeavel;

const exibirUsuario = (usuario: Usuario): void => {
    console.log(usuario.id);
    console.log(usuario.nome);
}

exibirUsuario({nome: "joe", id: 1});