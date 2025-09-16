import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Info from "./Pages/InfoPage";
import DataGrid from "./Pages/DataGridPage";
import StudentProfile from "./Pages/StudentProfilePage";
import "./css/index.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/"
);

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dataGrid" element={<DataGrid />} />
        <Route path="/studentProfile" element={<StudentProfile />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
