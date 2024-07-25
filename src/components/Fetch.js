'use client';
import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [pokemon, setPokemon] = useState({})

   useEffect(() => {
    async function fetchData() {
     
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/10002');
        const data = await response.json();
        setPokemon(data);
        console.log('API fetched!', data);
      
       
    }

    fetchData();
  }, []);
  return (
    pokemon
  );
};

export default Fetch    