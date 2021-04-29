import React from "react";
import { PokeScreen } from "../../common/poke-screen";
import { PokeForm } from "../../form/poke-form";


export const PokedexLeft = () => {
  return (
    <div className="pokedex-left">
      <div className="pokedex-left-top">
        <div className="light is-sky is-big" />
        <div className="light is-red" />
        <div className="light is-yellow" />
        <div className="light is-green" />
      </div>
      <div className="pokedex-screen-container">
        <PokeScreen />
      </div>
      <div className="pokedex-left-bottom">
      <div className="pokedex-left-bottom-lights">
      <div className="light is-blue is-medium" />
        <div className="light is-green is-large" />
        <div className="light is-orange is-large" />
      </div>
<PokeForm/>
      </div>
    </div>
  );
};
