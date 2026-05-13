import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Info from "./Pages/InfoPage";
import DataGrid from "./Pages/DataGridPage";
import StudentProfile from "./Pages/StudentProfilePage";
import "./css/index.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
import { trackPageView } from "./utils/analytics";

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
  const location = useLocation(); 

  useEffect(() => {
    const preventWheelUnzoom = (e) => {
      const modal = document.querySelector("[data-rmiz-modal][open]");
      if (modal) {
        e.stopImmediatePropagation();
      }
    };

    const preventTouchZoom = (e) => {
      const modal = document.querySelector("[data-rmiz-modal][open]");
      if (modal && e.touches.length > 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    const preventDoubleTapZoom = (e) => {
      const modal = document.querySelector("[data-rmiz-modal][open]");
      if (modal) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    // Prevent wheel zoom on desktop
    document.addEventListener("wheel", preventWheelUnzoom, {
      passive: true,
      capture: true,
    });

    // Prevent pinch zoom on mobile
    document.addEventListener("touchstart", preventTouchZoom, {
      passive: false,
      capture: true,
    });

    document.addEventListener("touchmove", preventTouchZoom, {
      passive: false,
      capture: true,
    });

    // Prevent double-tap zoom on mobile
    document.addEventListener("touchend", preventDoubleTapZoom, {
      passive: false,
      capture: true,
    });

    return () => {
      document.removeEventListener("wheel", preventWheelUnzoom, {
        capture: true,
      });
      document.removeEventListener("touchstart", preventTouchZoom, {
        capture: true,
      });
      document.removeEventListener("touchmove", preventTouchZoom, {
        capture: true,
      });
      document.removeEventListener("touchend", preventDoubleTapZoom, {
        capture: true,
      });
    };
  }, []);

  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Landing Page' :
      location.pathname === '/info' ? 'About Page' :
        location.pathname === '/dataGrid' ? 'Data Grid Case Study' :
          location.pathname === '/studentProfile' ? 'Student Profile Case Study' :
            'Unknown Page';

    trackPageView(pageName, location.pathname);
  }, [location]);

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
