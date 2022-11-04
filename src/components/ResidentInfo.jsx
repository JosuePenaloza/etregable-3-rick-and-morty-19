import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useData from '../hooks/useData';

const ResidentInfo = ({urlResidents}) => {

    //const [resident, setResident] = useState([]);
    
    ////hook
    const {data: resident,setData:setResident} = useData();

    useEffect(() => {
        axios.get(urlResidents)
        .then(res => setResident(res.data))
    }, []);

    console.log("resident", resident)
    return (
        <div>
            <h3>{resident.name}</h3>
            <div>
                <img src={resident.image} />
            </div>
            <ul>
                <li>{resident.status}</li>
                <li>{resident.origin?.name}</li>
                <li>{resident.episode?.length}</li>
            </ul>
        </div>
    );
};

export default ResidentInfo
/*
    Nombre (“name”).
Imagen (“image”).
Status: Vivo, muerto o desconocido (“status”).
Lugar de origen (“origin.name”).
Cantidad de episodios donde aparece (episode.length).


*/