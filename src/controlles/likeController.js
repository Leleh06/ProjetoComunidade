// import { db } from "../config/db.js"
import * as likeService from '../services/likeService.js'

//post Curtida
export const curtir = async (req, res) => {
    try {
        const { body } = req;
        const likeCriado = likeService.curtir(body.id_ong, body.id_usuario);
        res.status(201).json({ message: "Curtido!!" }, likeCriado)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Não foi possível curtir" });
    }
}

// refazer
// ---------------------------------------
// ---------------------------------------
//get Curtida
export const mostrarLike = async (req, res) => {
    try {
        const [results] = await db.query(
            "SELECT * FROM curtida",
        );
        res.send(results);

    } catch (error) {
        console.log(error)
    }
}

//delete Curtida
export const retirarLike = async (req, res) => {
    try {
        const { query } = req;
        const id_ong = Number(query.id_ong)
        const id_usuario = Number(query.id_usuario)
        const [results] = await db.query(
            "DELETE FROM curtida WHERE id_ong=? AND id_usuario=?",
            [body.id_ong, body.id_usuario]
        );

        res.status(201).send(results)
    } catch (error) {
        console.log(error)
    }
}





