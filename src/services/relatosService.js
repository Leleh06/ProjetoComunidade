import {db} from '../config/db.js';
import express from 'express'

// criar relato
const relato = async(nome, categoria, descricao) => {
    const [results] = await db.query(
        'INSERT INTO post(nome, categoria, descricao) VALUES (?,?,?)',
        [nome, categoria, descricao]);
    const [relatoCriado] = await db.query(
        'SELECT * FROM post WHERE id_post=?', results.insertId);
    return relatoCriado;
};
// listar relato
const listarRelato = async() =>{
    const [results] = await db.query(
        'SELECT * FROM post');
    return results;
}
// atualizar relato
const atualizarRelato = async(nome, categoria, descricao,id) => {
    const [results] = await db.query(
        'UPDATE post SET nome = COALESCE(?, nome), categoria = COALESCE(?, categoria), descricao = COALESCE(?, descricao) WHERE id_post=?',
         [nome, categoria, descricao,id]);
    const [relatoAtualizado] = await db.query(
        'SELECT * FROM post WHERE id_post=?', [id]);
    return relatoAtualizado
};
// deletar relato
const deletarRelato = async(id) => {
    const [results] = await db.query(
        'DELETE FROM post WHERE id_post=?', id);
    return results
};

export {relato, listarRelato, atualizarRelato, deletarRelato};