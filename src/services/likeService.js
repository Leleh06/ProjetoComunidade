import {db} from '../config/db.js';
import express from 'express'

const curtir = async (ongLike_id, userLike_id) =>{
    const [results] = await db.query(
        'INSERT INTO curtitOng (ongLike_id, userLike_id) VALUES (?, ?)',
        [ongLike_id, userLike_id]);
    const [curtidaCriada] = await db.query(
        'SELECT * FROM curtitOng WHERE id=?', results.insertId);
    return curtidaCriada;
};

const mostrarLike = async (ongLike_id, userLike_id) =>{
    const [results] = await db.query(
        'SELECT count(*) FROM curtitOng WHERE ongLike_id=? and userLike_id=?',
        [ongLike_id, userLike_id]);
    return results;
};

const retirarLike = async ( ongLike_id, userLike_id ) => { 
    const [results] = await db.query(
        'DELETE from WHERE ongLike_id=? and userLike_id=?',
        [ongLike_id, userLike_id]);
    return results;
};

export {curtir, mostrarLike, retirarLike};