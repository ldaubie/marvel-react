import React from 'react';
import HeroList from '../components/HeroList';
import { render, getByTestId} from "@testing-library/react";

describe('HeroList', () => {
    it('Should return the footer text',  () => {
        const { container } = render(<HeroList />);
        const footerValue = getByTestId(container, "Footer");
        expect(footerValue.textContent).toBe("Data provided by Marvel. © 2014 Marvel");
    })
});