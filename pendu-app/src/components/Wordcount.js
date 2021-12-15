import React from 'react'
import { useState } from 'react';


export default function Wordcount() {
    const [letters] = useState([]) ;
    const [word] = useState([]) ;
    return (
        word.split("").map((letter) => {
            if (letters.includes(letter)){
              return letter ;
            } else {
              return "_" ;
            }
          })
    );
}



