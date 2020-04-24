import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Test from "./Test/Test";
import All_Parkings from "./All_Parkings/All_Parkings";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Test" component={Test} />
                    <Route path="/All_Parkings" component={All_Parkings} />
                </Switch>
            </Router>
        )
    }
}
