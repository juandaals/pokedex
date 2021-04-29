import React,{useState} from "react";
import { PokedexLeft } from "../../containers/pokedex-left";
import { ButtonScreen } from "../../containers/screen-botton";
import "./styled.css";
export const Pokedex = () => {
  const [state, setState] = useState('')

  const handlePanel = (text) =>{
    handleClear()
    setState(prev=>`${prev} ${text}`)
  }

  const handleClear=()=>setState('')
  return (
    <div className="pokedex">
      <PokedexLeft />
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back">
        <div className="pokemon-screen">
          <div className="light is-blue is-medium"></div>
          <div className="pantalla">
          <h1  >{state}</h1>
           
           
          </div>
          <ButtonScreen handlePanel={handlePanel} handleClear={handleClear}/>
          <button className="button" onClick={()=>{
         
         window.open("https://github.com/juandaals?tab=repositories", "_blank")
          }} >
         
<span  >Github </span>
</button>
          
          <br></br>

          <div className=" pokedex-left-bottom-lights">
            <div className="light is-green is-large">Zona</div>
            <div className="light is-orange is-large">Mapa</div>
          </div>
          <div className="pokedex-left-bottom-lights">
            <div className="light.is-black is-large" />
            <div className="black">Enter</div>
            <div className="black">Options</div>
          </div>
        </div>
      </div>
    </div>
  );
};
