import { useEffect, useState } from 'react';
function App() {

    const[usuario,setUsuarios] = useState([]);
    const [pesquisa,alteraPesquisa] = useState("")

    async  function buscarTodos(){
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data);
        setUsuarios(data.users)
    }
   async function buscarNome(nome){
         const response = await fetch("https://dummyjson.com/users/search?q="+nome);
        const data = await response.json();
        console.log(data);
        setUsuarios(data.users)
    }

    function mostrarInformacoes(usuario){
        alert("Telefone:" + usuario.phone + "\nEmail:" + usuario.email + "\nmora em: " + usuario.address.city)

    }

    useEffect( ()=> {
        buscarTodos()
    }, [] )///Monitora o que eu pedir

    return (
        <div>

            <h1> Consumo de API</h1>
            <p> Buscando dados de API DummyJSON...</p>
           
           <hr/>
          <input onChange={ e=>alteraPesquisa(e.target.value)} placeholder="Digite um nome..."/> 
          <button onClick={()=> buscarNome(pesquisa)}>🔎Pesquisar</button>


            <ul>
                {
                    usuario.length == 0 ?
                    <p> Lista vazia...</p>
                    :
                    usuario.map( 
                        i => <li>
                            <img 
                            src={`https://ui-avatars.com/api/?name=${i.firstName}&background=${i.gender === "male" ? "00BCD4" : "e91e63" }&color=ffffff &rounded=true &size=50 &bold=true &color=ffffff`}
                            alt = {i.firstName}
                            /> 
                            
                        {i.gender === "male" ? "O senhor " :"A senhora "}
                        {i.firstName} tem {i.age}anos.

                        <button onClick={()=>mostrarInformacoes(i)}> Informações </button>  </li>
                    )
                }
                
            </ul>
        </div>
    );
}

export default App;
