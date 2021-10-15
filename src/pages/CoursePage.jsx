import React, { Component, Fragment } from 'react'
import AllCourses from '../AllCourses/AllCourses'
import HeaderBanner from '../Breadcrumb/HeaderBanner'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNav/TopNavigation'

export default class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <HeaderBanner pageTitle="All Courses" />
                <AllCourses/>
                <Footer/>
            </Fragment>
        )
    }
}
