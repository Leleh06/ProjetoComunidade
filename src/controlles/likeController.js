import {db} from "../config/db.js"

//post Curtida
export const curtir = async (req, res) => {
    try {
        const { body} = req;
        const [results] = await db.query(
            "INSERT INTO curtida (id_ong, id_usuario) VALUES (?,?)",
            [body.id_ong, body.id_usuario]
        )
        const [curtidaCriada] = await db.query(
            "SELECT*FROM curtida WHERE id=?",
            results.insertId
        );
        res.status(201).json(curtidaCriada);

    } catch (error) {
        console.log(error)
    }
};

//get Curtida
export const mostrarLike = async (req,res) => {
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
export const retirarLike = async (req,res) => {
    try {
        const {query} = req;
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