import React, { createContext, useState } from 'react';
import TextTheme from '@/components/TextTheme'; 
import Counter from '@/components/Counter'
import Fetch from '@/components/Fetch'
import ShowPokemon from '@/components/ShowPokemon';

export const ThemeContext = createContext();
export const CounterContext = createContext()
export const FetchContext = createContext()

export default function Home() {
  const [theme, setTheme] = useState('white'); 
  const pokemon = Fetch()
  
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <TextTheme />
      </ThemeContext.Provider>

      {/* NE VALJA COUNTER! */}
      <CounterContext.Provider> 
      <Counter/>
    </CounterContext.Provider>
   
    <FetchContext.Provider value={pokemon}>
     <ShowPokemon/>
    </FetchContext.Provider>

      
    </>
  );
}


