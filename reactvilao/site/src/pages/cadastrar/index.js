import { CadastrarVilao } from '../../api/apivilao'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

export  default function Index (){
        const[Poder, SetPoder] = useState(false);
        const[Nome, SetNome] = useState('');
        const[Maldade, SetMaldade] = useState('');

        const navigate = useNavigate();

    async function SalvarClick (){
        try {
            if(!Maldade|| !Nome){
                alert("Coloque Todos os dados")
            }
            else{
                const r = await CadastrarVilao(Nome,Maldade,Poder);
                alert("Vilão cadastrado!")
            }

        } 
        catch (err) {
            alert(err.message)
        }

        function Voltar (){
            navigate('/')
        }

    }

    return(
        <main>
                <div>
                    <h1> Cadastrar Vilão </h1>
                </div>

                <div>
                    <h3> Insira as informações: </h3>
                </div>

                <div>
                    <input type='text' placeholder='Nome' value={Nome} onChange={e => SetNome(e.target.value)}/> &nbsp; &nbsp;&nbsp;&nbsp;
                    <input type='text' placeholder='Maldade' value={Maldade} onChange={e => SetMaldade(e.target.value)}/> &nbsp; &nbsp;&nbsp;&nbsp;
                    <p> Tem Poder </p>
                    <input type='checkbox' placeholder='TemPoder' checked={Poder} onChange={e=> SetPoder(e.target.checked)}/>
                </div>
                <div>
                    <button onClick={SalvarClick}> Cadastrar </button> &nbsp; &nbsp;&nbsp;&nbsp;
                    <a href='/'>
                        <button> Home </button>
                    </a>
                </div>
        </main>
    )
}