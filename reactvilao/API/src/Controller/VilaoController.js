import { Router } from 'express'
import {Listar, NovoVilao} from '../Repository/VilaoRepository.js'

const server = Router();


server.post('/vilao', async (req,resp) => {
    try { 
    const vilao = req.body;
    if(!vilao.nome) throw new Error ("Nome é Obrigatório")
    if(!vilao.maldade) throw new Error ("Maldade é Obrigatória")
    const resposta = await NovoVilao(vilao)
    resp.status(200).send(resposta)
    }
    catch(err){
        resp.status(400).send({ Erro:err.message })
    }
})


server.get('/vilao', async (req,resp) => {
    try {
        const vilao =req.body
        const resposta = await Listar(vilao)
        resp.status(200).send(resposta)
    } catch (err) {
    resp.status(400).send({
        Erro: err.message
    })
}
})

export default server;  