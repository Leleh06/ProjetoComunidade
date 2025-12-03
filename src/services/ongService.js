import {db} from '../config/db.js';
import express from 'express'

const createONG = async (nome, cnpj, area_atuacao, email, senha, contato) => {
    const [results] = await db.query(
        'INSERT INTO ong (nome, cnpj, area_atuacao, email, senha, contato) VALUES (?,?,?,?,?,?)',
        [body.nome, body.cnpj, body.area_atuacao, body.email, body.senha, body.contato]);
    const [ongCriada] = await db.query(
        'SELECT * FROM ong WHERE id_ong=?',
        results.insertId);

    return ongCriada;
}

const logarONG = async (email, senha) => {
    const [results] = await db.query(
        'SELECT * FROM ong WHERE `email`=? and `senha`=?',
        [email, senha]);
    const [ongLogada] = await db.query(
        'SELECT * FROM ong WHERE id_ong=?',
        results.insertId);
    return ongLogada;
}

const mostrarONG = async (id) => {
    const {id} = req.params;
    const [results] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?', id);
    return results;
}

const atualizarONG = async (nome, email, senha, contato, id) => {
    const {id} = req.params;
    const [results] = await db.query(
        'UPDATE ongs SET `nome`=?, `email`=?, `senha`=?, `contato`=? WHERE id_ong=?',
        [nome, email, senha, contato, id]);
    const [ongAtualizada] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?', results.insertId);
    return ongAtualizada;
}

const deletarONG = async(id) => {
    const [results] = await db.query(
        'DELETE FROM ongs WHERE id_ong=?', id);
    const [ongDeletada] = await db.query(
        'SELECT * FROM ongs WHERE id_ong=?', results.insertId);
    return ongDeletada;
};


export {createONG, logarONG, mostrarONG, atualizarONG, deletarONG};