import React, { useState, useEffect } from 'react';
import axios from "axios";

export const useFetch = (url) => {
    const [fetchedData, setFetchedData] = useState([]); 

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setFetchedData(res.data);
            })
    }, [])

    return { fetchedData };

}