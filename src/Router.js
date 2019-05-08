import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import Page from './components/Page';

console.disableYellowBox = true;
const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} title="Home" hideNavBar initial/>
            <Scene key="page" component={Page} title="page" hideNavBar />
        </Scene>
    </Router>
  );
};

export default RouterComponent;
