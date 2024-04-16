const listaDePessoas = []
let IDSequencial = 1

function gerarID() {
    return IDSequencial++;
}

function cadastrarPessoa(pessoa) {
    const id = gerarID();
    pessoa = { id, ...pessoa };
    listaDePessoas.push(pessoa);
    console.log(pessoa); //Teste
}

function atualizarPessoa(id, novosDados) {
    const pessoa = listaDePessoas.find(pessoa => pessoa.id === id);

    if (pessoa !== undefined) {
        Object.assign(pessoa, novosDados);
        console.log("Pessoa com ID", id, "atualizada com sucesso.");
    } else {
        console.log("Pessoa com ID", id, "não encontrada.");
    }
}

function deletarPessoa(id) {
    const pessoa = listaDePessoas.findIndex(pessoa => pessoa.id === id);

    if (pessoa !== -1) {
        listaDePessoas.splice(pessoa, 1);
        console.log("Pessoa com ID", id, "deletada com sucesso.");
    } else {
        console.log("Pessoa com ID", id, "não encontrada.");
    }
}

function listarPessoas() {
    return listaDePessoas;
}

cadastrarPessoa({ nome: "Emiclã", idade: 20, cidade: "Marau" })
cadastrarPessoa({ nome: "Gill", idade: 19, cidade: "Passo Fundo" })
cadastrarPessoa({ nome: "Arian", idade: 20, cidade: "Muliterno" })
cadastrarPessoa({ nome: "João", idade: 21, cidade: "Passo Fundo" })

atualizarPessoa(4, { nome: "João Pedro", idade: 22 });
deletarPessoa(2)

console.log("Depois das atualizações:", listarPessoas());
