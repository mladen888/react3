import React, { createContext, useState } from 'react';
import TextTheme from '@/components/TextTheme'; 
import Counter2 from '@/components/Counter2'
import Fetch from '@/components/Fetch'
import ShowPokemon from '@/components/ShowPokemon';

export const ThemeContext = createContext();
export const CounterContext2 = createContext()
export const FetchContext = createContext()

export default function Home() {
  const [theme, setTheme] = useState('white'); 
  const pokemon = Fetch()
  const [count, setCount] = useState(1)

  return (
    <>
    <div style={{background:`${theme}`}}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <TextTheme />
      </ThemeContext.Provider>

      <CounterContext2.Provider value={[count, setCount]}> 
       <Counter2/>
      </CounterContext2.Provider>
   
      <FetchContext.Provider value={pokemon}>
       <ShowPokemon/>
      </FetchContext.Provider>

    </div>
      
    </>
  );
}


