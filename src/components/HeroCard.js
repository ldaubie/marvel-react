import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import HeroDetails from './HeroDetails';

const HeroCard = (props) => {
    const { character } = props;
    const [selectedCharacters, setSelectedCharacters] = useState();

    const handleOnClick = characterName => {
        if (selectedCharacters === characterName)
            setSelectedCharacters();
        else
            setSelectedCharacters(characterName);
    }

    return(
        <Card style={{maxWidth: 345}}>
            <CardMedia
                data-testid="HeroCardImg"
                component="img"
                alt={character.name}
                height="140"
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}  />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" onClick={() => { handleOnClick(character.name) }} data-testid="HeroCardName">{character.name}</Typography>
                {
                    selectedCharacters === character.name ?  
                    <HeroDetails character={character} />
                    : null 
                }
            </CardContent>
        </Card>
    );
};

export default HeroCard;