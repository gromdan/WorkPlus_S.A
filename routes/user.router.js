import express from "express";
import User from "../models/User.js"
import verifyToken from "../config/auth.js"

const user = express.Router();

user.get("/", (req, res) => {
    const token = req.headers["token"];
    const authData = verifyToken(token, res);
});

user.post("/cadastro", async (req, res) => {
    const { name, userName, email, password, cpf, dataNascimento } = req.body;

    const alreadyExistsUser = await User.findOne(
        { where: { userName, email } }
    ).catch((err) => console.log("Error: ", err));

    if(alreadyExistsUser) {
        console.log("Usuário Existente: " + alreadyExistsUser);
        return res
            .status(409)
            .json({ message: "Usuário ou E-mail já utilizado por outro usuário"})
    }

    const newUser = new User ({ name, userName, email, password, cpf, dataNascimento });
    const saveUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({error: "Não foi possivel cadastrar o usuário."});
    });

    if(saveUser){
        console.log(saveUser);
        res.json({ message: "Obrigado pelo cadastro"})
    }
});

export default user;