import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNav/TopNavigation'
import HeaderBanner from '../Breadcrumb/HeaderBanner'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'

export default class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Us"/>
                <HeaderBanner pageTitle="CONTACT US" />
                <ContactSec />
                <Footer/>
            </Fragment>
        )
    }
}
