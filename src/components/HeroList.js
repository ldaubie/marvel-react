import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, List, Typography } from '@material-ui/core';
import callApi from '../callApi';
import Footer from './Footer';

const HeroList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const charactersToSet = await callApi();
            setCharacters(charactersToSet);
        }

        fetchData();
    }, []);

    const handleOnClick = characterName => {
        if (selectedCharacters === characterName)
            setSelectedCharacters();
        else
            setSelectedCharacters(characterName);
    }

    const createComicList = (comics) => {
        const tabComic = []
        for (let i = 0; i < 3; i++){
            if (comics[i])
                tabComic.push(<Typography variant="body2" color="textSecondary" component="p"  key={comics[i].name}>- {comics[i].name}</Typography>);
        }
        return tabComic;
    }

    return(
        <Grid container justify="center">
            <List component="nav" aria-label="secondary mailbox folders">
                {characters.map(character => {
                    return (
                        <Card style={{maxWidth: 345}} key={character.id}>
                            <CardMedia
                                component="img"
                                alt={character.name}
                                height="140"
                                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}  />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" onClick={() => { handleOnClick(character.name) }}>{character.name}</Typography>
                                {selectedCharacters === character.name ?  
                                    <Grid>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {character.description ? character.description : 'Description missing'}
                                        </Typography> 
                                        <Typography variant="subtitle1" component="h2" >
                                            Number of appearance in comic: 
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {character.comics.available}
                                            </Typography> 
                                        </Typography>
                                        <Typography variant="subtitle1" component="h2" >
                                            First three comics where character appears:
                                            {createComicList(character.comics.items)}
                                        </Typography>
                                    </Grid>
                                    : null }
                            </CardContent>
                        </Card>
                    );
                })}
            </List>
            <Footer />
        </Grid>
    );
}


export default HeroList;