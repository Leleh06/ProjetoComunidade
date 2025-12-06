import {db} from '../config/db.js';
import * as userController from '../controlles/userController.js';
import express from 'express'

// CRIAR
const createUser = async (nome,bairro,email,senha) => {
    const [results] = await db.query (
        'INSERT INTO usuario (nome,bairro,email,senha) VALUES (?,?,?,?)',
        [nome,bairro,email,senha]);
    const [usuarioCriado] = await db.query(
        'SELECT * FROM usuario WHERE id_usuario=?',
        results.insertId);

        return usuarioCriado;
};

// logarUser
const logarUser = async (email, senha) => {
    const [results] = await db.query(
        'SELECT * FROM usuario WHERE `email`=? and `senha`=?',
        [email,senha]);
    // const [usuarioLogado] = await db.query(
        // 'SELECT * FROM usuario WHERE id_usuario=?', results);
        return results;
}

// const atualizarUser
// const atualizarUser = async (nome, bairro, email, senha, id) =>{
    // const [results] = await db.query(
        // 'UPDATE usuario SET `nome`=?, `bairro`=?, `email`=?, `senha`=? WHERE id_usuario=?',
        // [nome, bairro, email, senha, id]);
    // const [usuarioAtualizado] = await db.query(
        // 'SELECT * FROM usuario WHERE id_usuario=?',
        // results.insertId);
// 
    // return usuarioAtualizado;
// }
// ATUALIZAR VERSAO 2
const atualizarUser = async (nome, bairro, email, senha, id) => {
    // Busca os dados atuais
    const [rows] = await db.query('SELECT * FROM usuario WHERE id_usuario=?', [id]);
    if (rows.length === 0) return null;

    const atual = rows[0];

  // Usa os novos valores se existirem, senão mantém os antigos
    const novoNome = nome ?? atual.nome;
    const novoBairro = bairro ?? atual.bairro;
    const novoEmail = email ?? atual.email;
    const novaSenha = senha ?? atual.senha;

  await db.query(
    'UPDATE usuario SET nome=?, bairro=?, email=?, senha=? WHERE id_usuario=?',
    [novoNome, novoBairro, novoEmail, novaSenha, id]
  );

  const [usuarioAtualizado] = await db.query('SELECT * FROM usuario WHERE id_usuario=?', [id]);
  return usuarioAtualizado;
};

// const deletarUser
const deletarUser = async (id) => {
    const [results] = await db.query(
        'DELETE FROM usuario WHERE id_usuario=?',[id]);

    return results
}

export {createUser, logarUser, atualizarUser, deletarUser};
