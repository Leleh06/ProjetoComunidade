import { Router } from "express";
export const conectaRouter = Router();

//ONG
import {
    createONG,
    logarONG,
    mostrarONG,
    deletarONG,
    atualizarONG

} from "./controlles/ONGcontrollers.js";
conectaRouter.post("/ongsCriar", createONG); //CHECK
conectaRouter.post("/loginOng", logarONG); //CHECK
conectaRouter.get("/ongsMostra/:id", mostrarONG);//CHECK
conectaRouter.delete("/ongsDelete/:id", deletarONG); //CHECK
conectaRouter.put("/ongsUpdate/:id", atualizarONG); //CHECK

//Usuario
import {
    createUser,
    logarUser,
    atualizarUser,
    deletarUser
} from "../src/controlles/userController.js";
conectaRouter.post("/usuarioCriar", createUser); //CHECK
conectaRouter.post("/loginUser", logarUser); //CHECK
conectaRouter.put("/usuarioLUpdate/:id", atualizarUser); //CHECK
conectaRouter.delete("/usuarioLDelet/:id", deletarUser); // CHECK

// RELATOS
import {
    relato,
    listarRelato,
    atualizarRelato,
    deletarRelato,
    upload   // importar o upload que configuramos no controller

} from "./controlles/relatosControllers.js"

// conectaRouter.post("/relatoCriar", relato); //CHECK
conectaRouter.post( "/relatoCriar",upload.fields([{ name: "foto" }, { name: "video" }]),relato);
conectaRouter.put("/relatoUpdate/:id", atualizarRelato); //CHECK
conectaRouter.get("/relatoListar", listarRelato); //CHECK
conectaRouter.delete("/relatoDelet/:id", deletarRelato); //CHECK

//Curti
import {
    curtir,
    mostrarLike,
    retirarLike,

} from "./controlles/likeController.js";
conectaRouter.post("/curtida", curtir); //
conectaRouter.get("/curtidaMostra", mostrarLike); //
conectaRouter.delete("/curtidaDeleta/:id", retirarLike); //

