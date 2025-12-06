import * as ongService from '../services/ongService.js'

// Criar no site
export const createONG = async(req, res) => {
    try {
        const {body} = req;
        if (!body.nome || !body.cnpj || !body.area_atuacao || !body.email || !body.senha || !body.contato) {
            return res.status(400).json({message: "Campos obrigatórios faltando"});};
            
        const ongCriada = await ongService.createONG(body.nome, body.cnpj, body.area_atuacao, body.email, body.senha, body.contato);
        console.log(ongCriada);
        if(ongCriada){
            return res.status(201).json({message: "Ong criada com sucesso!", data:ongCriada});
        } else{
            return res.status(400).json({message: "Não foi possível criar a Ong"});
        };
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Não foi possível criar a Ong, tente novamente"});
    }
}

// Logar Ong
export const logarONG = async(req, res) => {
    try {
        const {body} = req;
        const ongLogada = ongService.logarONG(body.nome, body.senha);
        console.log(ongLogada);
        res.status(200).json({message: "Ong logada com sucesso!"}, ongLogada)
    } catch (error) {
         console.log(error);
        res.status(400).json({message: "Não foi possível entrar na Ong, tente novamente"});
    }
}

// mostrarOng
// USAR DE SEGUMENTO PARA O RESTANTE
export const mostrarONG = async (req, res) => {
    try {
        // const {id}= req.params;
        // const ongMostrada = await ongService.mostrarONG(id);
        const {body}= req;
        const ongMostrada = await ongService.mostrarONG(body.nome, body.email, body.contato);
        console.log(ongMostrada); //ADICIONAR EM TDS
        if (ongMostrada){
            res.status(200).json({message: "Ong encontrada", data:ongMostrada});
        } else{
            res.status(400).json({message: "Não foi possível mostrar a Ong"})
        };
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível mostrar a Ong"})
    }
}

//Atualizar dados 
// export const atualizarONG = async(req, res) => {
    // try {
        // const {id} = req.params;
        // const {body} = req;
        // const ongAtualizada = await ongService.atualizarONG(body.nome, body.email, body.senha, body.contato, id);
        // console.log(ongAtualizada);
        // if(ongAtualizada){
            // return res.status(200).json({message: "Ong atualizada com suceso!", data: ongAtualizada});
        // } else{
            // res.status(400).json({message: "Não foi possível atualizar os dados da ong"});
        // }
    // } catch (error) {
        // console.log(error);
        // res.status(400).json({message: "Não foi possível atualizar os dados da ong, tente novamente"})
    // }
// }
// ATUALIZAR VER. 2
// SERVE PARA ELE ATUALIZAR APENAS OS CAMPOS QUE FOR ENVIADO, EVITANDO RETORNAR COM OS DEMAIS (NÃO ALTERADOS) COMO NULL
export const atualizarONG = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    // passa o body inteiro para o service
    const ongAtualizada = await ongService.atualizarONG(body, id);

    if (ongAtualizada && ongAtualizada.length > 0) {
      return res.status(200).json({
        message: "Ong atualizada com sucesso!",
        data: ongAtualizada[0] // retorna o objeto atualizado
      });
    } else {
      return res.status(400).json({ message: "Não foi possível atualizar os dados da ong" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Não foi possível atualizar os dados da ong, tente novamente" });
  }
};

//Deletar conta 
export const deletarONG = async(req, res) => {
    try {
        const {id} = req.params;
        const ongDeletada = ongService.deletarONG(id);
        console.log(ongDeletada);
        if(!ongDeletada){
            return res.status(400).json({message: "Não foi possível deletar a ong, tente novamente"});
        } else{
            res.status(200).json({message: "Ong deletada com sucesso!"}, ongDeletada);
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Não foi possível deletar a ong, tente novamente"});
    }
}
