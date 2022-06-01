import React from 'react';
import {render, screen} from '@testing-library/react';

import AsyncList from './async-list';

test('Show the food data', async() => {

    render(<AsyncList />);
    const hamburguer = await screen.findByText(/hamburguer/i);
    expect(hamburguer).toBeInTheDocument();
})