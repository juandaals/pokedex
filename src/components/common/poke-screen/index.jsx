import React from "react";
import PokemonImage from "../../../assets/charmander.png";
import { Stats } from "../stats";
const mockData = [
{
name:"HP",
base_stat:35,
},
{
name:"attack",
base_stat:48,
},
{
name:"defense",
base_stat:40,
},
{
    name:"special-attack",
    base_stat:65,
},
{
    name:"special-defense",
    base_stat:90,
},
{
    name:"speed",
    base_stat:80,
},



]


export const PokeScreen = () => {


  return (
    <div className="pokedex-screen">
      <div className="pokemon-info">
        <h2 className="pokemon-name">Charmander</h2>
        <img
         className="pokemon-img"
          src={PokemonImage}
           alt="Charmander" />
           <ul className="pokemon-stats" >
               {mockData.map(item => <Stats key={item.name} item={item} />)}
           </ul>
      </div>
    </div>
  );
};
