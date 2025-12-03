import {db} from '../config/db.js';

import express from 'express'

const createUser = async (nome,bairro,email,senha) => {
    const [results] = await db.query (
        'INSERT INTO usuario (nome,bairro,email,senha) VALUES (?,?,?,?)',
        [nome,bairro,email,senha]);
    
        
    const [usuarioCriado] = await db.query(
        'SELECT*FROM usuario WHERE id_usuario=?',
        results.insertId);

        return usuarioCriado;
};


// const logarUser
// check
const logarUser = async (email, senha) => {
    const [results] = await db.query(
        'SELECT * FROM usuario WHERE `email`=? and `senha`=?',
        [email,senha]);
    const [usuarioLogado] = await db.query(
        'SELECT * FROM usuario WHERE id_usuario=?',
        results.insertId);

        return usuarioLogado;
}

// const atualizarUser
const atualizarUser = async (nome, bairro, email, senha, id) =>{
    const {id} = requestAnimationFrame.params;
    const [results] = await db.query(
        'UPDATE usuario SET `nome`=?, `bairro`=?, `email`=?, `senha`=? WHERE id_usuario=?',
        [nome, bairro, email, senha, id]);
    const [usuarioAtualizado] = await db.query(
        'SELECT * FROM usuario WHERE id_usuario=?',
        results.insertId);

    return usuarioAtualizado;
}


// const deletarUser
const deletarUser = async (id) => {
    const [results] = await db.query(
        'DELETE FROM usuario WHERE id_usuario=?',
        [id]);
    const [usuarioDeletado] = await db.query(
        'SELECT * FROM usuario WHERE id_usuario=?',
        results.insertId);

    return usuarioDeletado
}

export {createUser, logarUser, atualizarUser, deletarUser};
