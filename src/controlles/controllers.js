import { db } from "../config/db.sql";

export const createONG = async (req, res) => {
    try {
        const {body} = req;
        const [results] = await db.query(
            "INSERT INTO ong (nome, cnpj, area_atuacao, email, senha, contato) VALUES (?,?,?,?,?)",
            [body.nome, body.cnpj, body.area_atuacao, body.email, body.senha, body.contato]
        );

        const [ongCriada] = await db.query(
            "SELECT * FROM ong WHERE id=?",
            results.insertId
        );

        res.status(201).json(ongCriada)
    } catch (error) {
        console.log(error)
    }
};

export const logarONG = async (req, res) => {
    try {
        const {body} = req;

        const [ong] = await db.query(
            "SELECT * FROM ong WHERE email=? and senha=?"
            [body.email, body.senha]
        );

        if (ong.length > 0) {
            return res.status(200).json({
                message: "ONG logada com sucesso! Bem vindo!!",
                dados: ong
            })
        }else {
            return res.status(404).send("Email ou senha errada!");
        }
    } catch (error) {
        console.log(error);
    }
}

export const deletarONG = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}