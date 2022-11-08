import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import useData from '../hooks/useData';

const Search = () => {

    ///hook
    const {setData} = useData();

    const [id, setId] = useState('');

    const handelSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setData(res?.data));
    }

    return (
        <div className='search'>
            <form>
                <label htmlFor='id'>ID</label>
                <input 
                    type="text"
                    id='id'
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />
                <button onClick={handelSearch}>Search</button>
            </form>
            <h2>Search</h2>        
        </div>
    );
};

export default Search;