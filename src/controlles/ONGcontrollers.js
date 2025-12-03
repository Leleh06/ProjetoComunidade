import * as ongService from '../services/ongService.js'

// Criar no site
export const createONG = async(req, res) => {
    try {
        const {body} = req;
        const ongCriada = ongService.ongCriada(body.nome, body.email, body.senha, body.contato);
        res.status(201).json({message: "Ong criada com sucesso!"}, ongCriada)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível criar a Ong, tente novamente"});
    }
}

// Logar Ong
export const logarONG = async(req, res) => {
    try {
        const {body} = req;
        const ongLogada = ongService.logarONG(body.nome, body.senha);
        res.status(200).json({message: "Ong logada com sucesso!"}, ongLogada)
    } catch (error) {
         console.log(error);
        res.status(400).json({message: "Não foi possível entrar na Ong, tente novamente"});
    }
}

// mostrarOng
export const mostrarONG = async (req, res) => {
    try {
        const {id} = req.params;
        const [results] = await db.query(
            'SELECT * FROM ongs WHERE id_ong=?', id);
        res.status(200).json({message: "Ong encontrada"}, results);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível mostrar a Ong"})
    }
}

//Atualizar dados 
export const atualizarONG = async(req, res) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const ongAtualizada = ongService.atualizarONG(body.nome, body.email, body.senha, body.contato, id);
        res.status(200).json({message: "Ong atualizada com suceso!"}, ongAtualizada)
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível atualizar os dados da ong, tente novamente"})
    }
}

//Deletar conta 
export const deletarOng = async(req, res) => {
    try {
        const {id} = req.params;
        const ongDeletada = ongService.deletarONG(id);
        res.status(200).json({message: "Ong deletada com sucesso!"}, ongDeletada);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível deletar a ong, tente novamente"});
    }
}
