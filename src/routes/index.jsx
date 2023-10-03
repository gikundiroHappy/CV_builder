import React from "react";
import { Route, Routes } from "react-router-dom";
import Makecv from "../pages/makecv";
import Viewcv from "../pages/viewcv";
import PersonalInfo from "../components/personalInfo";
import Education from "../components/education";
import Experience from "../components/experience";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Makecv />} />
        <Route path="/view" element={<Viewcv />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default Index;
