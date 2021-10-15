import React, { Component, Fragment } from 'react'
import AllPortfolio from '../AllPortfolio/AllPortfolio'
import HeaderBanner from '../Breadcrumb/HeaderBanner'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNav/TopNavigation'

export default class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <HeaderBanner pageTitle="All Portfolio" />
                <AllPortfolio/>
                <Footer/>
            </Fragment>
        )
    }
}
