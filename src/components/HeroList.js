import React from 'react';
import { Grid, List } from '@material-ui/core';
import Footer from './Footer';
import HeroCard from './HeroCard';

const HeroList = (props) => {
    const { characters } = props;
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