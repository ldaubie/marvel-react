import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, getByTestId} from "@testing-library/react";
import charactersMock from '../__mocks__/characters'
import HeroCard from '../components/HeroCard';
import useHeroCard from '../components/useHeroCard';

describe('HeroCard', () => {
    it('Should contain hero image url and name',  () => {
        const { container } = render(<HeroCard character={charactersMock[0]} />);
        const imgValue = getByTestId(container, "HeroCardImg");
        const name = getByTestId(container, "HeroCardName");

        expect(imgValue.src).toBe("http://localhost/batman.jpg");
        expect(name.textContent).toBe("super");
    })

    it('Should edit selectedCharacter when user click', () => {
        const { result } = renderHook(() => useHeroCard());
        act(() => {
            result.current.handleOnClick("Batman");
        });
        expect(result.current.selectedCharacters).toBe("Batman");
    })
});