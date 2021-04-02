import React from 'react';

// react library for routing
import { Route, Switch } from "react-router-dom";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "../routes.js";

class Home extends React.Component {
    getRoutes = routes => {
        return routes.map((prop, key) => {
        if (prop.collapse) {
            return this.getRoutes(prop.views);
        }
        if (prop.layout === "/home") {
            return (
            <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
            />
            );
        } else {
            return null;
        }
        });
    };
    render() {
        return (
        <>
            <IndexNavbar />
            <div className="main-content" ref="mainContent">
                <Switch>{this.getRoutes(routes)}</Switch>
            </div>
            <AuthFooter />
        </>
        );
    }
}

export default Home;
