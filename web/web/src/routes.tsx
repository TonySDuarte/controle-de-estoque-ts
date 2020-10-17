import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import homePage from './pages/homePage';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={homePage}/>
        </BrowserRouter>
    )
}

export default Routes