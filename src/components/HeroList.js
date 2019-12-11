import React, { useState, useEffect } from 'react';
import { Grid, List } from '@material-ui/core';
import callApi from '../callApi';
import Footer from './Footer';
import HeroCard from './HeroCard';
import Loader from './Loader';

const HeroList = () => {
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

    if (loader){
        return <Loader />
    }else{
        return(
            <Grid container justify="center">
                <List component="nav" aria-label="secondary mailbox folders">
                    {characters.map(character => {
                        return (
                            <HeroCard key={character.id} character={character} />
                        );
                    })}
                </List>
                <Footer />
            </Grid>
        );
    }
}


export default HeroList;