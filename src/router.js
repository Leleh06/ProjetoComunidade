import { Router } from "express";
export const conectaRouter = Router();

//ONG
import {
    createONG,
    logarONG,
    mostrarONG,
    deletarOng,
    atualizarONG

} from "./controlles/ongControllers.js";

conectaRouter.post("/ongsCriar", createONG);

conectaRouter.post("/ongsLogar", logarONG);

conectaRouter.get("/ongsMostra/:id", mostrarONG);

conectaRouter.delete("/ongsDelete/:id", deletarOng);

conectaRouter.put("/ongsUpdate/:id", atualizarONG);


//Usuario
import {
    createUser,
    logarUser,
    atualizarUser,
    deletarUser
} from "../src/controlles/userController.js";

conectaRouter.post("/usuarioCriar", createUser);
conectaRouter.post("/usuarioLogar", logarUser);
conectaRouter.put("/usuarioLUpdate/:id", atualizarUser);
conectaRouter.delete("/usuarioLDelet/:id", deletarUser);



//Curti
import {
    curtir,
    mostrarLike,
    retirarLike,

} from "./controlles/likeController.js";

conectaRouter.post("/curtida", curtir);

conectaRouter.get("/curtidaMostra", mostrarLike);

conectaRouter.delete("/curtidaDeleta", retirarLike);

// RELATOS
import {
    relato,
    atualizarRelato,
    deletarRelato,
    listarRelato
} from "./controlles/relatosControllers.js"

conectaRouter.post("/relatoCriar", relato);
conectaRouter.put("/relatoUpdate", atualizarRelato);
conectaRouter.delete("/relatoDelet", deletarRelato);

