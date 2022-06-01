import React from 'react';
import { render, screen } from '@testing-library/react';

import HelloWorld from './hello-world';

test('Renders hello world', () => {
    render(<HelloWorld />)

    const title = screen.getByText(/Hello world/i);
    expect(title).toBeInTheDocument();
})
