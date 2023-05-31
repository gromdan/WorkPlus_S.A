import express from "express";
import PostTrabalho from "../models/PostTrabalho.js"

const postTrabalho = express.Router();

postTrabalho.get("/", (req, res) => {
    res.send("Rota de postTrabalhado");
});

postTrabalho.post("/cadastro", async (req, res) => {

    const { idPostTrabalho, idUser, tipoServico, endereco, dtInicio, periodoMatutino, periodoVespertino, periodoNoturno, linkWhats, descricao } = req.body;

    const newPostTrabalho = new PostTrabalho({ idPostTrabalho, idUser, tipoServico, endereco, dtInicio, periodoMatutino, periodoVespertino, periodoNoturno, linkWhats, descricao});

    const savePostTrabalho = await newPostTrabalho.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não é possivel enviar esse Post"});
    });

    if(savePostTrabalho) res.json({ message: "Post de Trabalho enviado"});
});

postTrabalho.get("/findByPostTrabalho", async (req, res) => {
    const postsTrabalho = await PostTrabalho.findAll().catch(
        (err) => {
            console.log(err)
        }
    );
    
    if(postsTrabalho){
        return res.json({postsTrabalho})
    }else{
        return null
    };
});
 
export default postTrabalho;






 