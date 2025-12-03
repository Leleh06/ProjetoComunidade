import * as userService from '../services/userService.js'


// CRIAR
// check
export const createUser = async (req, res) => {
    try {
        const { body } = req;
        const usuarioCriado = userService.createUser(body.nome, body.bairro, body.email, body.senha);
        res.status(201).json({ mensagem: "Usuário criado com sucesso!" }, usuarioCriado);

    } catch (error) {
        console.log(error);
        res.status(400).json({ mensage: "Não foi possível criar o usuário, tente novamente" });
    }
}

// LOGAR
// check
export const logarUser = async (req, res) => {
    try {
        const { body } = req;
        const { usuarioLogado } = userService.logarUser(body.email, body.senha);
        res.status(201).json({ message: "Usuário logado com sucesso!" }, usuarioLogado);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Não foi possível entar na conta" });
    };
}

// ATUALIZAR
export const atualizarUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const [usuarioAtualizado] = userService.usuarioAtualizado(body.nome, body.bairro, body.email, body.senha, id);
        res.status(201).json({ mesage: "Usuário atualizado com sucesso!" }, usuarioAtualizado)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Não foi possível atualizar os dados, tente novamente" });
    }
}


// DELETAR
export const deletarUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [usuarioDeletado] = userService.deletarUser(id);
        res.status(201).json({ message: "Usuário deletado com sucesso!" }, usuarioDeletado)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Não foi possível deletar o usuário, tente novamente" })
    }
}