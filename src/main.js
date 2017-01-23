console.log('COLLABORATE');

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        // alt way       React.createElement(Counter),
        <Navbar />,
        document.getElementById('root')
    );
});