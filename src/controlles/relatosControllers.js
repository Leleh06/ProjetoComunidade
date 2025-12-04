import * as relatosService from '../services/relatosService.js'

// criar relato
export const relato = async(req, res) => {
    try {
        const {body} = req;
        const relatoCriado = relatosService.relato(body.nome, body.catgoria, body.descricao);
        res.status(201).json({message: "Relato criado com sucesso!"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível criar o relato, tente novamente"})
    }
};
// listar relato
export const listarRelato = async(req, res) => {
    try {
        const relatoListar = relatosService.listarRelato();
        res.status(200).json({messagem: "Aqui está todos os relatos!"})
    } catch (error) {
        console.log(error);
        res.status(404).json({message: "Não foi possível encontrar os relatos, tente novamente"})
    }
}
// atualizar relato
export const atualizarRelato = async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const relatoAtualizado = relatosService.atualizarRelato(body.nome, body.categoria, body.descricao, id);
        res.status(201).json({message: "Relato atualizado com sucesso!"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível atualizar o relato, tente novamente"})
    }
};
// deletar relato
export const deletarRelato = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível deletar o relato, tente novamente"})
    }
};

