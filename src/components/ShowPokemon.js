'use client'
import React, {useContext} from 'react'
import {FetchContext} from '@/pages/index.js'

const ShowPokemon = ({}) => {
   const pokemon = useContext(FetchContext)
   console.log(pokemon?.name)
  return (
    <div>
         <p>ime: {pokemon?.name}</p>

     <img   style={{height:'10em', width:'10em'}}  src={pokemon?.sprites?.front_default}/>
    </div>
    
  );
};

export default ShowPokemon