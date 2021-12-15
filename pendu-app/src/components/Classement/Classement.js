import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { map } from 'lodash';

function Classement() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://animalfinderapi.herokuapp.come/score',
            );
            setDatas(result.data);
            console.log(result.data)
        }
        fetchData();
    }, [])

    return (
        <React.Fragment>
            {map(datas, (data) => (
            map(data, (score) => (
                <p>{score.username} : {score.score}</p>
            ))

            ))}
        </React.Fragment>
        
    )
}

export default Classement;