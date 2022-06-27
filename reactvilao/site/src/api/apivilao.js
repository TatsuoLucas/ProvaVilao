import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})
 
export async function CadastrarVilao(nome, maldade, TemPoder){
    const resposta = await api.post('/vilao',
    {
        nome: nome,
        maldade: maldade,
        TemPoder: TemPoder
    } )
    return resposta.data;
}

export async function ConsultarVilao(nome,maldade,TemPoder){
    const resposta = await api.get('/vilao')
    return resposta.data;
}