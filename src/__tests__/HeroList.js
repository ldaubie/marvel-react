import React from 'react';
import HeroList from '../components/HeroList';
import { render } from "@testing-library/react";
import charactersMock from '../__mocks__/characters'

describe('HeroList', () => {
    it('renders without crashing',  () => {
        render(<HeroList characters={charactersMock}/>);
    })
});