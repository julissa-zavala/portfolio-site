import { Link } from "react-router-dom";
import "../css/index.css";
import rightArrowIcon from "../images/right-arrow-black.svg";

const CaseStudy = ({ route, containerStyles }) => {
  return (
    <section className="case-study-container" style={containerStyles}>
      <section className="case-study-image"></section>
      <section className="case-study-info">
        <p className="case-study-title">
          Introducing a Gradebook feature to provide real-time grade trends for
          over 77,000 teachers.
        </p>
        <span className="case-study-company-name">
          NEW VISIONS FOR PUBLIC SCHOOLS
        </span>
        <p className="case-study-description">
          I collaborated with leadership to strengthen our partnership with the
          NYC DOE by developing a proposal to integrate gradebook data into the
          Portal, enabling teachers and school leaders to track student progress
          and coordinate support for those in need of intervention.
        </p>
        <Link to={`/${route}`} className="case-study-read-more">
          READ MORE
          <img src={rightArrowIcon} alt="Right arrow" className="right-arrow" />
        </Link>
      </section>
    </section>
  );
};

export default CaseStudy;
