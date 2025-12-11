import {db} from '../config/db.js';
import express from 'express'

// CRIAR
const createONG = async (nome, cnpj, area_atuacao, email, senha, contato) => {
    const [results] = await db.query(
        'INSERT INTO ongs (nome, cnpj, area_atuacao, email, senha, contato) VALUES (?,?,?,?,?,?)',
        [nome, cnpj, area_atuacao, email, senha, contato]);
    const [ongCriada] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?',
        results.insertId);

    return ongCriada;
}
// Logar Ong
const logarONG = async (email, senha) => {
    const [results] = await db.query(
        'SELECT * FROM ongs WHERE `email`=? and `senha`=?',
        [email, senha]);
    const [ongLogada] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?',
        results.insertId);
    return ongLogada;
}
// mostrarOng
const mostrarONG = async (id) => {
    const [results] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?', [id]);
    return results;
}
//Atualizar dados 
// const atualizarONG = async (nome, email, senha, contato, id) => {
    // const [results] = await db.query(
        // 'UPDATE ongs SET `nome`=?, `email`=?, `senha`=?, `contato`=? WHERE id_ong=?',
        // [nome, email, senha, contato, id]);
    // const [ongAtualizada] = await db.query(
        // 'SELECT * FROM ongs WHERE id_ong=?', [id]);
    // return ongAtualizada;
// }

// ATUALIZAR VER 2
// SERVE PARA ELE ATUALIZAR APENAS OS CAMPOS QUE FOR ENVIADO, EVITANDO RETORNAR COM OS DEMAIS (NÃO ALTERADOS) COMO NULL
const atualizarONG = async (dados, id) => {
  const campos = [];
  const valores = [];

  if (dados.nome) { campos.push("nome=?"); valores.push(dados.nome); }
  if (dados.email) { campos.push("email=?"); valores.push(dados.email); }
  if (dados.senha) { campos.push("senha=?"); valores.push(dados.senha); }
  if (dados.contato) { campos.push("contato=?"); valores.push(dados.contato); }

  if (campos.length === 0) return null; // nada para atualizar

  valores.push(id);

  const sql = `UPDATE ongs SET ${campos.join(", ")} WHERE id_ong=?`;
  await db.query(sql, valores);

  const [ongAtualizada] = await db.query('SELECT * FROM ongs WHERE id_ong=?', [id]);
  return ongAtualizada;
};

//Deletar conta 
const deletarONG = async(id) => {
    const [results] = await db.query(
        'DELETE FROM ongs WHERE id_ong=?', [id]);
    const [ongDeletada] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?', results.insertId);
    return ongDeletada;
};


export {createONG, logarONG, mostrarONG, atualizarONG, deletarONG};