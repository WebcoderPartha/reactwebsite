import React, { Component, Fragment } from 'react'
import Analysis from "../components/Analysis/Analysis";
import Service from "../components/Services/Service";
import Summary from "../components/Summary/Summary";
import Topbanner from "../components/TopBanner/Topbanner";
import TopNavigation from "../components/TopNav/TopNavigation";
import RecentProject from "../components/RecentProject/RecentProject";
import Course from "../components/Course/Course";
import Video from "../components/Video/Video";
import Review from "../components/Review/Review";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Welcome to WebcoderPartha"/>
        <Topbanner />
        <Service />
        <Analysis />
        <Summary />
        <RecentProject />
        <Course />
        <Video />
        <Review/>
        <AboutMe /> 
        <Footer />
      </Fragment>
    )
  }
}
