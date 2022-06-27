import { useNavigate,Link } from "react-router-dom";

export default function Index (){
    return (
        <main>
            <div> <h1> Projeto Vilões </h1></div>

            <div> <h3>Opções </h3> </div>

            <div>
                <a href="/cadastrar">
                <button> Cadastro </button> &nbsp; &nbsp;&nbsp;&nbsp;
                </a>

                <a href="/consulta">
                <button> Consultar </button>
                </a>

            </div>

        </main>
    )
}