import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Image from "./components/ImageBox/Image"
import TypeList from "./components/TypeList/TypeList"
import ArrowButton from './components/ArrowButtons/ArrowButton';
import { useState , useEffect} from 'react';
import InfoMovesPanel from './components/InfoMovesPanel/InfoMovesPanel';

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {name: string};
  }[];
  moves: {
    move: {name: string};
  }[];
};



function App() {
  const [pokemonId, setPokemonId] = useState<number>(1);
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"info" | "moves">("info");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        const data = await res.json();

        setPokemonData(data); // only update when new data arrives
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  fetchPokemon();
}, [pokemonId]);

  const handleNext = () => {
    setPokemonId(prev => prev + 1);
  };

  const handlePrev = () => {
    setPokemonId(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
    <div className = "container">
      <h1 className="header">Exercise 5 - Pokedex!</h1>

      <div className='info'>
        <div className = "leftSide">
          <div className = "imagebox">
            <Image
              sprite = {pokemonData?.sprites.front_default}
              name = {pokemonData?.name}
              loading = {loading}
            />
          </div>

          <div className = "typeList">
            <TypeList
              types={pokemonData?.types}
              loading={loading}          
            />
          </div>

          <div>
            <ArrowButton
              onNext = {handleNext}
              onPrev = {handlePrev}
            />
          </div>
        </div>

        <div className='rightSide'>
          <div className='moves/info'>
            <InfoMovesPanel
              activeTab = {activeTab}
              setActiveTab = {setActiveTab}
              stats={pokemonData?.stats}
              moves={pokemonData?.moves.map((m) => m.move.name)}
            />
          </div>
        </div>
      </div>


    </div>

  
  
    
    </>

  );
}

export default App;
