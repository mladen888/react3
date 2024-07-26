'use client';
import React, {useContext} from 'react'

import {ThemeContext} from '@/pages/index.js'

const TextTheme = ({}) => {
    const [theme, setTheme] = useContext(ThemeContext)
    function changeColor(){ 
      setTheme('red')
    }

  return (
    <div>
        <p>Cao {theme}</p>
        <button onClick={changeColor}>batn</button>
    </div>
  );
};

export default TextTheme