import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, List, Typography } from '@material-ui/core';
import callApi from '../callApi';
import Footer from './Footer';
import HeroCard from './HeroCard';

const HeroList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        console.log("LALA")
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