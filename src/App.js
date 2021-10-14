import React from "react";
import Analysis from "./components/Analysis/Analysis";
import Service from "./components/Services/Service";
import Summary from "./components/Summary/Summary";
import Topbanner from "./components/TopBanner/Topbanner";
import TopNavigation from "./components/TopNav/TopNavigation";
import RecentProject from "./components/RecentProject/RecentProject";
import Course from "./components/Course/Course";
import Video from "./components/Video/Video";
import Review from "./components/Review/Review";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <Topbanner />
      <Service />
      <Analysis />
      <Summary />
      <RecentProject />
      <Course />
      <Video />
      <Review/>
      <AboutMe /> 
      <Course />
      <Footer />
    </div>
  );
}

export default App;
