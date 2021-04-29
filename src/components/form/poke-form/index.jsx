import React, {useState} from "react";

export const PokeForm = () => {
    const [pokeName,setPokeName] = useState('')
  
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(pokeName);
    }
  
    return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokeName}
        onChange={e => setPokeName(e.target.value)}
        placeholder="Busca tu pokemón"
        autocomplete="off"
      />
    <button type="submit" className="pokemon-btn" />
    </form>
  );
};
