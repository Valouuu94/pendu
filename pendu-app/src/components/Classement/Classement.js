import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { map } from 'lodash';
import './Classement.css'

function Classement() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://animalfinderapi.herokuapp.com/score',
            );
            setDatas(result.data);
            console.log(result.data)
        }
        fetchData();
    }, [])

    return (
        <div class="classement"> 
        <h2>Classement des meilleurs joueurs</h2>
        <React.Fragment>
            {map(datas, (data) => (
            map(data, (score) => (
                <p>{score.username} : {score.score}</p>
            ))

            ))}
        </React.Fragment>
        </div>
        
    )
}

export default Classement;