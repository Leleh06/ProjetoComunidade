// import { db } from "../config/db.js"
import * as likeService from '../services/likeService.js'

//post Curtida
export const curtir = async(req, res) => {
    try {
        const {body} = req;
        const likeCriado = likeService.curtir(body.ongLike_id, body.userLike_id);
        res.status(201).json({message: "Curtido!!"}, likeCriado)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "Não foi possível curtir"});
    }
};

//get Curtida
export const mostrarLike = async(req, res) =>{
    try {
        const {body} = req;
        const likeMostrado = likeService.mostrarLike(body.ongLike_id, body.userLike_id);
        res.status(200).json({message: "Todos os likes"}, likeMostrado)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Não foi possível ver as curtidas"});
    }
}

//delete Curtida
export const retirarLike = async(req, res) =>{
    try {
        const {body} = req;
        const likeDeletado = likeService.likeDeletado(body.ongLike_id, body.userLike_id);
        res.status(200).json({message: "Curtida deletada com sucesso!"}, likeDeletado)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Não foi possível deletar a curtida"});
    }
}