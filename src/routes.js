import React from 'react';
import {Route} from 'react-router-dom';

import AboutPage from './components/about/About';
import HomePage from './components/home/Home';

export default (
    <div>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </div>
);
