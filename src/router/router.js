import { Router } from "express";
export const conectaRouter = Router();

//ONG
import {
    createONG,
    logarONG,
    deletarONG,
    atualizarONG,
    
} from "../controlles/ONGcontrollers";
  
conectaRouter.post("/ongs", createONG);

conectaRouter.post("/ongs", logarONG );

conectaRouter.get("/ongs/:id", );

conectaRouter.delete("/ongs/:id", deletarONG);

conectaRouter.put("/ongs/:id", atualizarONG);


//Curti
import {
    curtir,
    mostrarLike,
    retirarLike,

} from "../controlles/likeController";

conectaRouter.post ("/curti", curtir);

conectaRouter.get ("/curti", mostrarLike);

conectaRouter.delete ("/curti", retirarLike);