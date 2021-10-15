import React, { Component, Fragment } from 'react'
import { BrowserRouter as Switch,Route } from "react-router-dom";
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import CoursePage from '../pages/CoursePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage'
export default class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route exact path="/courses" component={CoursePage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact-us" component={ContactPage} />
                </Switch>
            </Fragment>
        )
    }
}
