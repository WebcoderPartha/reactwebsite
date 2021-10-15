import React, { Component, Fragment } from 'react'
import AboutDetails from '../components/AboutDetails/AboutDetails'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNav/TopNavigation'
import HeaderBanner from '../Breadcrumb/HeaderBanner'
import AboutMe from '../components/AboutMe/AboutMe'

export default class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About Us"/>
                <HeaderBanner pageTitle="About Us"/>
                <AboutMe/>
                <AboutDetails/>
                <Footer/>
            </Fragment>
        )
    }
}
