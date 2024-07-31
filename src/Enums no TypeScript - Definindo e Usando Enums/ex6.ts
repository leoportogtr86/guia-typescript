// 6. **Exercício 6:** Crie um enum chamado `PermissaoUsuario` com os valores `Admin`, `Editor` e `Leitor`. Declare uma
// variável do tipo `PermissaoUsuario` e atribua a ela o valor `PermissaoUsuario.Editor`. Imprima o valor no console.
enum PermissaoUsuario {
    Admin,
    Editor,
    Leitor
}

const permissao: PermissaoUsuario = PermissaoUsuario.Editor;

console.log(permissao);