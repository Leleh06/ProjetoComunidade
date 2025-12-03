import {db} from '../config/db.js';
import express from 'express'

const curtir = async (id_ong, id_usuario) =>{
    const [results] = await db.query(
        'INSERT INTO curtida (id_ong, id_usuario) VALUES (?, ?)',
        [id_ong, id_usuario]);
    const [curtidaCriada] = await db.query(
        'SELECT * FROM curtida WHERE id=?', results.insertId);
    return curtidaCriada;
};

const mostrarLike = async (curtida) =>{
    const [results] = await db.query(
        'SELECT * FROM curtida');
    return results;
};

const retirarLike = async () =>{};

export {curtir, mostrarLike, retirarLike};