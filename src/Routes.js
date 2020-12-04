import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Products from "./Test";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Products" component={Products} />
            </Switch>
        </Router>
    )
}

export default Routes;