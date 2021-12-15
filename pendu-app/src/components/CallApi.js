import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {includes, map} from "lodash" ;

let GOOD_LETTER = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéàè";
function CallApi (){


const[data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'https://animalfinderapi.herokuapp.com/word',
);
setData(result.data);
console.log(result.data);
    }
    fetchData();
  }, [])
  const handleKeyDown = (event) => {
    if(GOOD_LETTER.includes(event.key)){
      console.log('A key was pressed', event.key);
    }
  };
  useEffect(() => {

    window.addEventListener('keydown', handleKeyDown);


    // cleanup this component

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

    };

  }, []);

return (
  <div className="App">
    <h1> Jeux du Pendu</h1>
    <ul>
      {map(data, animal => (
        <React.Fragment key={animal.id}>
          <p>{animal.word}</p> 
        </React.Fragment>
      ))}
    </ul>
  </div>
);
      }
export default CallApi ;