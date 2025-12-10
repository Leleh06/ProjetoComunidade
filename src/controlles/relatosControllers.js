import * as relatosService from '../services/relatosService.js'

// criar relato
export const relato = async(req, res) => {
    try {
        const {body} = req;
        if (!body.nome || !body.categoria || !body.descricao) {
            return res.status(400).json({message: "Campos obrigatórios faltando"});
        }

        const relatoCriado = await relatosService.relato(body.nome, body.categoria, body.descricao);
        console.log(relatoCriado);
        if(relatoCriado){
            return res.status(201).json({message: "Relato criado com sucesso!"})
        } else{
            res.status(400).json({message: "Não foi possível criar o relato"});
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível criar o relato, tente novamente"})
    };
};
// listar relato
export const listarRelato = async(req, res) => {
    try {
        const relatoListar = await relatosService.listarRelato();
        console.log(relatoListar);
        if(relatoListar){
            return res.status(200).json({messagem: "Aqui está todos os relatos!", data:relatoListar})
        } else{
            res.status(400).json({messagem: "Não foi possível listar os relatos"})
        };
    } catch (error) {
        console.log(error);
        ;res.status(404).json({message: "Não foi possível encontrar os relatos, tente novamente"})
    }
}
// atualizar relato
export const atualizarRelato = async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const relatoAtualizado = await relatosService.atualizarRelato(body.nome, body.categoria, body.descricao, id);
        console.log(relatoAtualizado);
        if(relatoAtualizado && relatoAtualizado.length > 0){
            return res.status(201).json({message: "Relato atualizado com sucesso!"})
        } else{
            res.status(400).json({message: "Não foi possível atualizar o relato"})
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível atualizar o relato, tente novamente"})
    };
};
// deletar relato
export const deletarRelato = async(req, res) => {
    try {
        const {id} = req.params;
        const relatoDeletado = await relatosService.deletarRelato(id);
        console.log(relatoDeletado);
        if(relatoDeletado.affectedRows > 0){
            return res.status(200).json({message: "Relato deletado com sucesso!"})
        } else{
            res.status(400).json({message: "Não foi possível deletar o relato"})
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível deletar o relato, tente novamente"})
    };
};

