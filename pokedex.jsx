import{useState}from 'react';
import  './pokedex.css'
function Pokedex () {

    const[pokemon,setPokemon] = useState({});
    const[pesquisa,alteraPesquisa] =useState ("")

    
    async function buscarPokemon( nome ){
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon/"+nome);
    const data = await response.json();
    console.log(data);
    setPokemon (data)
    }

    function mostrarInformacoes(pokemon){
        alert("Nome:" +pokemon.name + "\nTipo"+ pokemon.type + pokemon.sprites.other )
    }

    return ( 
        <div className="caixa de texto">
            <h1>Pokédex</h1>
            <p> Consulte um pokemon</p>
            
          

            <input onChange={e=>alteraPesquisa(e.target.value)}placeholder="Digite o Pokemon..."/>
            <button onClick={()=>buscarPokemon(pesquisa)}>🔎 Pesquisa</button>
            <hr/>
          

            <h2>Nome:{pokemon.name} </h2>
            <p>Tipo: {pokemon.types?.[0]?.type?.name} </p>
            <img src={pokemon.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default}
            width="100"/>

        </div>
     );
}

export default Pokedex;