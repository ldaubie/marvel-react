import React from 'react';
import HeroDetails from '../components/HeroDetails';
import { render, getByTestId, findAllByTestId} from "@testing-library/react";

const characterMock = {
    description: "blabla",
    comics: {
        available: 2,
        items: [ {name: "fakeName1"}, {name: "fakeName2"}, {name:"fakeName3"}]
    }
}

describe('HeroDetails', () => {
    it('Should contain hero description',  () => {
        const { container } = render(<HeroDetails character={characterMock} />);
        const description = getByTestId(container, "HeroDetailsDescription");

        expect(description.textContent).toBe("blabla");
    })
    it('Should contain hero number of appearance in comic', () => {
        const { container } = render(<HeroDetails character={characterMock} />);
        const numberOfAppearance = getByTestId(container, "HeroDeatailNumberOfAppearance");

        expect(numberOfAppearance.textContent).toBe("2");
    })
    it('Should contain hero 3 first comics where he appears', async () => {
        const { container } = render(<HeroDetails character={characterMock} />);
        const firstComics = await findAllByTestId(container, "HeroDetailsFirstComics");
        expect(firstComics[0].textContent).toBe("- fakeName1");
        expect(firstComics[1].textContent).toBe("- fakeName2");
        expect(firstComics[2].textContent).toBe("- fakeName3");
    })
});