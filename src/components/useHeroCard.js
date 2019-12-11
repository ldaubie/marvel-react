import { useState } from 'react';

const useHeroCard = () => {
    const [selectedCharacters, setSelectedCharacters] = useState();
    const handleOnClick = characterName => {
        if (selectedCharacters === characterName)
            setSelectedCharacters();
        else 
            setSelectedCharacters(characterName);
    }
    
    return {selectedCharacters, handleOnClick};
}

export default useHeroCard;