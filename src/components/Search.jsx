import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import useData from '../hooks/useData';

const Search = () => {

    const { setData: setCharacter} = useData();

    const [searchCharacter, setSearchCharacter] = useState('')

    const handelSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchCharacter}`)
        .then(res => setCharacter(res.data));
    }

    console.log('search', searchCharacter)
    return (
        <div>
            <h2>Search</h2>
            <label htmlFor='name'>Character</label>
            <input 
                type="text"
                id='name'
                onChange={(e) => setSearchCharacter(e.target.value)}
                value={searchCharacter}
            />
            <button onClick={handelSearch}>Search</button>
        </div>
    );
};

export default Search;