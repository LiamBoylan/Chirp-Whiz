import React from 'react';
import Home from './Home';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitForElement } from '@testing-library/react'

it('test Home renders', () => {
    const container = render(<Home />)
    expect(container.firstChild).toMatchSnapshot();
});

test("check if we're at home", () => {
    const {getByText} = render(<Home />)
    expect(getByText("Chirp Whiz")).toBeInTheDocument();
    fireEvent.click(getByText('Start Quiz Now'))
});