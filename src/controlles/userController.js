import * as userService from '../services/userService.js'

// CRIAR
export const createUser = async (req, res) => {
    try {
        const { body } = req;
        if (!body.nome || !body.bairro || !body.email || !body.senha) {
            return res.status(400).json({ message: "Campos obrigatórios faltando" });
        };

        const usuarioCriado = await userService.createUser(body.nome, body.bairro, body.email, body.senha);
        console.log(usuarioCriado);
        if (usuarioCriado) {
            return res.status(201).json({ mensagem: "Usuário criado com sucesso!", data: usuarioCriado });
        } else {
            res.status(400).json({ mensagem: "Não foi possível criar o usuario" });
        };


    } catch (error) {
        console.log(error);
        res.status(400).json({ mensage: "Não foi possível criar o usuário, tente novamente" });
    };
};

// LOGAR
export const logarUser = async(req, res) => {
    try {
        const {body} = req;
        const usuarioLogado = await userService.logarUser(body.email, body.senha);
        console.log(usuarioLogado);
        if(usuarioLogado && usuarioLogado.length > 0){
            return res.status(201).json({message:"Usuário logado com sucesso!", data:usuarioLogado});
        } else{
            res.status(400).json({message: "Não foi possível entrar na conta"})
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível entar na conta"});
    };
};



// ATUALIZAR
// export const atualizarUser = async(req, res) => {
// try {
// const {id} = req.params;
// const {body} = req;
// const [usuarioAtualizado] = await userService.usuarioAtualizado(body.nome, body.bairro, body.email, body.senha, id);
// console.log(usuarioAtualizado);
// if(usuarioAtualizado){
// return res.status(201).json({mesage: "Usuário atualizado com sucesso!", data:usuarioAtualizado })
// } else{
// res.status(400).json({messagem: "Não foi possível atualizar o usuário"})
// };
// } catch (error) {
// console.log(error);
// res.status(400).json({message: "Não foi possível atualizar os dados, tente novamente"});
// };
// };
// ATUALIZAR VERSAO 2
export const atualizarUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const usuarioAtualizado = await userService.atualizarUser(body.nome, body.bairro, body.email, body.senha, id);
        console.log(usuarioAtualizado);
        if (usuarioAtualizado && usuarioAtualizado.length > 0) {
            return res.status(200).json({ message: "Usuário atualizado com sucesso!", data: usuarioAtualizado[0] });
        } else {
            return res.status(400).json({ message: "Não foi possível atualizar o usuário" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Não foi possível atualizar os dados, tente novamente" });
    }
};


// DELETAR
export const deletarUser = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioDeletado = await userService.deletarUser(id);
        console.log(usuarioDeletado);
        if (usuarioDeletado.affectedRows > 0) {
            return res.status(201).json({ message: "Usuário deletado com sucesso!" });
        } else {
            res.status(400).json({ message: "Não foi possível deletar o usuário" })
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Não foi possível deletar o usuário, tente novamente" })
    };
};