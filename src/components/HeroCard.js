import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import HeroDetails from './HeroDetails';
import useHeroCard from './useHeroCard';

const HeroCard = (props) => {
    const { character } = props;
    const editing = useHeroCard();

    return(
        <Card style={{maxWidth: 345}}>
            <CardMedia
                data-testid="HeroCardImg"
                component="img"
                alt={character.name}
                height="140"
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}  />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" onClick={() => { editing.handleOnClick(character.name) }} data-testid="HeroCardName">{character.name}</Typography>
                {
                    editing.selectedCharacters === character.name ?  
                    <HeroDetails character={character} />
                    : null 
                }
            </CardContent>
        </Card>
    );
};

export default HeroCard;