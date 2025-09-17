import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import rightArrowIcon from "../images/right-arrow-black.svg";

const useStyles = createUseStyles({
  caseStudyContainer: {
    paddingTop: 48,
    paddingBottom: 48,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 48,
    marginRight: 0,
    marginLeft: 0,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 48,
    },
  },
  caseStudyImage: {
    width: "47%",
    borderRadius: 4,
    cursor: "pointer",
    "@media (min-width: 0px) and (max-width: 1280px)": {
      width: "clamp(300px, 98%, 608px)",
    },
  },
  caseStudyInfo: {
    width: "47%",
    height: "auto",
    paddingTop: 24,
    paddingBottom: 24,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 38,
      paddingBottom: 48,
      marginLeft: 0,
      width: "clamp(300px, 93%, 750px)",
    },
    "@media (min-width: 0px) and (max-width: 499px)": {
      paddingTop: 24,
    },
  },
  caseStudyTitle: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 4,
    "@media (min-width: 701px) and (max-width: 1200px)": {},
  },
  caseStudyDescription: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 14,
    marginTop: 16,
    lineHeight: 1.3,
  },
  readMoreText: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    color: "#1E1E1E",
    fontSize: 14,
    lineHeight: "normal",
  },
  readMoreTextLineThrough: {
    position: "absolute",
    width: 68.5,
    height: 1,
    bottom: 10.5,
    left: 0,
    backgroundColor: "#1E1E1E",
    transform: "translateY(-50%) scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.15s ease-in-out",
  },
  caseStudyReadMore: {
    position: "relative",
    color: "#1E1E1E",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 12,
    cursor: "pointer",
    top: 18,
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    width: 92,
    marginTop: 25,
    "&:hover $readMoreTextLineThrough": {
      transform: "translateY(-50%) scaleX(1)",
      bottom: 10.5,
    },
    "@media (min-width: 0px) and (max-width: 499px)": {
      marginTop: 0,
    },
  },
  rightArrow: {
    marginLeft: 7,
    position: "relative",
    bottom: 5,
    display: "block",
  },
  caseStudyCompanyName: {
    color: "#767676",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 12,
    fontWeight: 100,
  },
});

const CaseStudy = ({ title, description, route, image }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <section className={classes.caseStudyContainer}>
      <img
        src={image}
        className={classes.caseStudyImage}
        onClick={() => navigate(route)}
      />
      <section className={classes.caseStudyInfo}>
        <p className={classes.caseStudyTitle}>{title}</p>
        <span className={classes.caseStudyCompanyName}>
          New Visions For Public Schools
        </span>
        <p className={classes.caseStudyDescription}>{description}</p>
        <Link to={`/${route}`} className={classes.caseStudyReadMore}>
          <div className={classes.readMoreTextText}>READ MORE</div>
          <div className={classes.readMoreTextLineThrough}></div>
          <img
            src={rightArrowIcon}
            alt="Black arrow pointing to the right"
            className={classes.rightArrow}
          />
        </Link>
      </section>
    </section>
  );
};

export default CaseStudy;
