import React, { useState, useEffect } from 'react';
import { Grid, List } from '@material-ui/core';
import callApi from '../callApi';
import Footer from './Footer';
import HeroCard from './HeroCard';

const HeroList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const charactersToSet = await callApi();
            setCharacters(charactersToSet);
        }

        fetchData();
    }, []);

   
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


export default HeroList;