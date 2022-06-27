import { useEffect, useState } from 'react'
import { ConsultarVilao } from '../../api/apivilao'
import { useNavigate } from 'react-router-dom'

export default function Index() {

    const[Vilao, SetVilao] = useState([]);
    const navigate = useNavigate();
    
    async function CarregarTodos() {
        const resp = await ConsultarVilao();
        SetVilao(resp)
    }
     
    useEffect(() => {
        CarregarTodos();
    }, [])

    function Voltar (){
        navigate('/')
    }

    return(
        <main>
            <div> <h1> Vilões </h1> </div>
            <table>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Nome</th>
                            <th> maldade  </th> 
                            <th> TemPoder </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {Vilao.map(item => 

                            <tr>
                                <td> {item.id} </td>
                                <td> {item.nome} </td>
                                <td> {item.maldade} </td>
                                <td> {item.TemPoder ? 'Sim' : 'Não'} </td>
                            </tr>
                            )}
                           
                    </tbody>
                </table>
                <div>
                    <button onClick={Voltar}> Home</button>
                </div>
        </main>
    )
}