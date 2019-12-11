import { useState, useEffect } from 'react';
import callApi from './callApi';

const useApp = () => {
    const [characters, setCharacters] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        const charactersToSet = await callApi();
        setCharacters(charactersToSet);
        setLoader(false);
    }

        fetchData();
    }, []);

    return { characters, loader };
}

export default useApp;