import React, { Component, Fragment } from 'react'
import HeaderBanner from '../Breadcrumb/HeaderBanner'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNav/TopNavigation'
import ServicesSec from '../ServicesSec/ServicesSec'

export default class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <HeaderBanner pageTitle="ALL SERVICES"/>
                <ServicesSec/>
                <ContactSec/>
                <Footer/>
            </Fragment>
        )
    }
}
