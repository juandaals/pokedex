
    import React from "react";
    import "./styled.css";
    
    export const ButtonScreen = ({handlePanel, handleClear}) => {
      return (
        <div className="pokedex-screen-container3">
                <div className="celdas-azules " onClick={()=>handlePanel('mapa de regiones')}><p>region</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('evoluciones')}><p>evol</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('escanear pokemon')}><p>scan</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('medallas obtenidas')}><p>medlls</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('gimnasios')}><p>gyms</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('tiendas')}><p>shops</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('hospitales')}><p>hosp</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('cualquier chimbada')}><p>otros</p></div>
                <div className="celdas-azules " onClick={()=>handlePanel('ergwer99')}><p><a href="http://www.google.com">GitHub</a></p></div>
                <div className="celdas-azules " onClick={handleClear}><p>Clear</p></div>
                
    
        </div>
      );
    };