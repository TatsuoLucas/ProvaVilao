import {con} from './Connection.js'


export async function NovoVilao (vilao){
    const comando = `
    insert into tb_vilao (nm_vilao, ds_maldade, bt_super_poder)
    values (?, ?, ?)
    `
    const [resposta] =  await con.query(comando, [vilao.nome,vilao.maldade,vilao.TemPoder])
    vilao.id = resposta.insertId;
    return vilao;
}

export async function Listar (){
    const comando = `
    Select 
    id_vilao        id,
    nm_vilao		nome,
    ds_maldade		maldade,
    bt_super_poder	TemPoder
    from tb_vilao;
    `
    const [resposta] = await con.query(comando)
    return resposta
}