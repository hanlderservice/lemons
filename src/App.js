import React from 'react';
import Login from "./components/Login";
import NotFound from './components/page/NotFound'
import Page from './Page'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {mainRouter} from "./routes";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" render={(routerProps) => {
                    return <Page {...routerProps}/>
                }}/>

                {

                    mainRouter.map(route => {
                        return <Route key={route.pathname} path={route.pathname} component={route.component}/>
                    })
                }
                <Redirect to="/admin" from="/" exact/>
                <Redirect to="/404"/>


            </Switch>
        </Router>
    );
}

export default App;
