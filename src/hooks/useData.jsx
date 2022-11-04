import React from 'react';
import { useState } from 'react';

const useData = () => {

    const [data, setData] = useState([]);
    
    return {data, setData}
};

export default useData;