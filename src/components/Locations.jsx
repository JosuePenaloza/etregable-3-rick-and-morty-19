import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import ResidentInfo from './ResidentInfo';
import useData from '../hooks/useData';
import Search from './Search';
import buuu from '../assets/audio/WUBBA.mp3.webm'

const Locations = () => {

    ////hook
    const {data: locations, setData: setLocations} = useData()

    

    useEffect(() => {

        ///// locasion random
    const random = Math.floor(Math.random() * 126) +1
    
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res => setLocations(res.data))
    }, []);

    return (
        <div className='location'>
            <Search />
            <div>
                <audio src={buuu} />
                <h1>{locations.name}</h1>
                <ul>
                    <li><h3>Type: {locations.type}</h3></li>
                    <li><h3>Dimension: {locations?.dimension}</h3></li>
                    <li><h3>Residens: {locations.residents?.length}</h3></li>
                </ul>
                <hr/>
            </div>
            <div className='card'>
                {
                    locations.residents?.map(url => (
                        <ResidentInfo urlResidents={url} key={url} />
                    ))
                }
            </div>
        </div>
    );
};

export default Locations;