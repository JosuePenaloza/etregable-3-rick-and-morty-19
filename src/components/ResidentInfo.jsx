import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useData from '../hooks/useData';

const ResidentInfo = ({urlResidents}) => {
    
    ////hook
    const {data: resident,setData:setResident} = useData();

    useEffect(() => {
        axios.get(urlResidents)
        .then(res => setResident(res.data))
    }, []);

    return (
        <div className='column'>
            <h2>Name: <br/>{resident.name}</h2>
            <img src={resident.image} />
            <div className='ResidentInfo'>        
                <ul>
                    <li><h3>Species: {resident.species}</h3></li>
                    <li><h3>Status: {resident.status}</h3></li>
                    <li><h3>Birthplace: {resident.origin?.name}</h3></li>
                    <li><h3>Number of episodes: {resident.episode?.length}</h3></li>
                </ul> 
            </div>
            <hr/>
        </div>    
    );
};

export default ResidentInfo