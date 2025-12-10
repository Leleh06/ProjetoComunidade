// import { db } from "../config/db.js"
import * as likeService from '../services/likeService.js'

//post Curtida
export const curtir = async(req, res) => {
    try {
        const {body} = req;
        if (!body.ongLike_id || !body.userLike_id) {
            return res.status(400).json({message: "Campos obrigatórios faltando"});};

        const likeCriado = await likeService.curtir(body.ongLike_id, body.userLike_id);
        console.log(likeCriado);
        if(likeCriado){
            return res.status(201).json({message: "Curtido!!", data:likeCriado})
        } else{
            res.status(400).json({message: "Não foi curtida"})
        };
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "Não foi possível curtir"});
    };
};

//get Curtida
export const mostrarLike = async(req, res) =>{
    try {
        const {body} = req;
        const likeMostrado = await likeService.mostrarLike(body.ongLike_id, body.userLike_id);
        console.log(likeMostrado);
        if(likeMostrado){
            return res.status(200).json({message: "Todos os likes", data:likeMostrado})
        } else{
            res.status(400).json({message: "Não foi possível mostrar os likes"})
        };
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Não foi possível ver as curtidas"});
    };
}

//delete Curtida
export const retirarLike = async(req, res) =>{
    try {
        const {body} = req;
        const likeDeletado = await likeService.likeDeletado(body.ongLike_id, body.userLike_id);
        console.log(likeDeletado);
        if(likeDeletado){
            return res.status(200).json({message: "Curtida deletada com sucesso!", data:likeDeletado})
        } else{
            res.status(400).json({message: "Não foi possível descurtir"});
        };
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Não foi possível deletar a curtida"});
    }
}