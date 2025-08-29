import { Routes, Route } from "react-router-dom";
import StudentProfile from "./Pages/StudentProfilePage";
import Landing from "./Pages/LandingPage";
import Info from "./Pages/InfoPage";
import resumeFile from "./images/JulissaZavala_Resume_2024.pdf";

const App = () => {
  const resumeElement = () => {
    return (
      <a
        data-w-id="ffa6c21c-5688-992e-e776-53b0734125e2"
        target="_blank"
        href={resumeFile}
        className="d-109-link-block-wrapper w-inline-block"
      >
        Resume
      </a>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/resume" element={resumeElement()} />
        <Route path="/studentProfile" element={<StudentProfile />} />
      </Routes>
    </>
  );
};

export default App;
