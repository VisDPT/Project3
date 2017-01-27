import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';


ReactDOM.render(
		<div className='main-container'>

<Navbar />
<LandingPage />
</div>,
	document.getElementById('root')
)