import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css'

import LandingPage from './pages/LandingPage';
import DailiesPage from './pages/DailiesPage';
import NotFound from './pages/NotFound';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path='/dailies' component={DailiesPage} />
                <Route exact path="/404" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App; 
