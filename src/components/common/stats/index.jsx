import React from 'react'

export const Stats = ({item}) => {
    return (
     <li className="pokemon-stat" >
         <span className="stat-name">
             <b>
                 {item.name}</b>
         </span>
         <span>{item.base_stat}</span>



     </li>
    )
}
