import { db } from "../config/db.sql";


// Criar conta ONG
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

// Logar no site 
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


//Deletar conta 
export const deletarONG = async (req, res) => {
    try {
        const {id} = req.params
        const [results] = await db.query (
            "DELETE * FROM ongs WHERE id_ong=?",
            id
        )
        res.status(201).json({mensagem:"Conta ONG deleta com sucesso"})

    } catch (error) {
        console.log(error);
        res.status(401).json ({mensagem: "Erro ao excluir conta! Confira as dados informados"})
    }
}

//Atualizar dados 
export const atualizarONG = async (req,res) => {
    try {
        const {id} = req.params;
        const {body} =req;
        const [results] = db.query(
            "UPDATE ongs SET nome=?, email=?, senha=?, contato=? WHERE id_ong=?",
            [body.nome, body.email, body.senha, body.contato, id]
        );
        res.status(200).json({ongs:results, mensagem: "Dados atualizado com sucesso!!"})

    } catch (error) {
        console.log(error);
        res.status(400).json({erro: "Dados preenchido incorreto"})
    }
}

