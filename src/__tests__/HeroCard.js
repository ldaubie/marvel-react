import React from 'react';
import HeroCard from '../components/HeroCard';
import { render, getByTestId} from "@testing-library/react";


const characterMock = {
    thumbnail: {
        path: "batman",
        extension: "jpg"
    },
    name: "super"
}

describe('HeroCard', () => {
    it('Should contain hero image url and name',  () => {
        const { container } = render(<HeroCard character={characterMock} />);
        const imgValue = getByTestId(container, "HeroCardImg");
        const name = getByTestId(container, "HeroCardName");

        expect(imgValue.src).toBe("http://localhost/batman.jpg");
        expect(name.textContent).toBe("super");
    })
    // should set characters if user click on hero name
});