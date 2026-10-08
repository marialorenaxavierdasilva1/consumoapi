import { useState } from 'react';
import './pokedex.css'
function Pokedex() {

    const [pokemon, setPokemon] = useState({});
    const [pesquisa, alteraPesquisa] = useState("")


    async function buscarPokemon(nome) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);
        const data = await response.json();
        console.log(data);
        setPokemon(data)
    }


    return (
        <div className="pokedex">
            <div className="cartao">
                <h1>Pokédex</h1>
                <p> Consulte um pokemon</p>


                <div className="pesquisa">
                    <input onChange={e => alteraPesquisa(e.target.value)} placeholder="Digite o Pokemon..." />
                    <button onClick={() => buscarPokemon(pesquisa)}>🔎 Pesquisa</button>
                    <hr />
                </div>
                <div className="informacoes">
                    <h2>Nome: {pokemon.name}</h2>

                    <p>
                        Tipo: {pokemon.types?.[0]?.type?.name}
                    </p>

                    <img
                        src={
                            pokemon.sprites?.versions?.["generation-v"]
                                ?.["black-white"]?.animated?.front_default
                        }
                        alt={pokemon.name}
                    />
                </div>
            </div>
        </div>
    );
}

export default Pokedex;