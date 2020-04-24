import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import All_Parkings from "./All_Parkings/All_Parkings";
import Testpage from "./Testpage/Testpage";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/All_Parkings" component={All_Parkings} />
                    <Route path="/Testpage" component={Testpage} />
                </Switch>
            </Router>
        )
    }
}
