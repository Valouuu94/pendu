import React from 'react'

/* 
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
} */ 
export default function CurrentWord({currentWord, usedLetter}){
    return (
        <div>
            {currentWord.split('').map(
                letter => {
                    let status = 'finded'
                    if(!usedLetter.includes(letter)){
                        status = "not finded"
                    }
                    return <span key={letter} className={status} > {status === 'finded' ? letter : " __ "}</span>
                }
            )}

        </div>
    )
}




