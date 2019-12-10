import React from 'react';
import HeroList from '../components/HeroList';
import { render, fireEvent, getByTestId} from "@testing-library/react";
import callApi from '../callApi';

describe('HeroList', () => {
    it('Should return the footer text',  () => {
        const { container } = render(<HeroList />);
        const countValue = getByTestId(container, "Footer");
        expect(countValue.textContent).toBe("Data provided by Marvel. © 2014 Marvel");
    })
});