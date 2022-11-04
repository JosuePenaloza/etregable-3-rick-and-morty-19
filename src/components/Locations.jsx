import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import ResidentInfo from './ResidentInfo';
import useData from '../hooks/useData';
import Search from './Search';

const Locations = () => {

    //const [ locations, setLocations] = useState([]);

    ////hook
    const {data: locations, setData: setLocations} = useData()

    ///// locasion random
    const random = Math.floor(Math.random() * 126) +1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocations(res.data))
    }, []);

    console.log("1",locations.residents)
    return (
        <div>
            <Search />
            <div>
                <h1>{locations.name}</h1>
                <ul>
                    <li>{locations.type}</li>
                    <li>{locations.dimension}</li>
                    <li>{locations.residents?.length}</li>
                </ul>
            </div>
            
            {
                locations.residents?.map(url => (
                    <ResidentInfo urlResidents={url} key={url} />
                ))
            }
        </div>
    );
};

export default Locations;


/*
Nombre (“name”)
Tipo (“type”)
Dimensión a la que pertenece (“dimension”)
La cantidad de residentes (residents.length).


*/