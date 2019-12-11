import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const HeroDetails = (props) => {
    const { character } = props;

    const createComicList = (comics) => {
        const tabComic = []
        for (let i = 0; i < 3; i++){
            if (comics[i])
                tabComic.push(<Typography variant="body2" color="textSecondary" component="p"  key={comics[i].name} data-testid="HeroDetailsFirstComics">- {comics[i].name}</Typography>);
        }
        return tabComic;
    }

    return (
        <Grid>
            <Typography variant="body2" color="textSecondary" component="p" data-testid="HeroDetailsDescription">
                {character.description ? character.description : 'Description missing'}
            </Typography> 
            <Typography variant="subtitle1" component="h2" >
                Number of appearance in comic: 
                <Typography variant="body2" color="textSecondary" component="p" data-testid="HeroDeatailNumberOfAppearance">
                    {character.comics.available}
                </Typography> 
            </Typography>
            <Typography variant="subtitle1" component="h2" >
                First three comics where character appears:
                {createComicList(character.comics.items)}
            </Typography>
        </Grid>
    );
}

export default HeroDetails;