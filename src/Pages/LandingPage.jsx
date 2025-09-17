import HeaderNav from "../components/HeaderNav";
import CaseStudy from "../components/CaseStudy";
import Footer from "../components/Footer";
import downArrowIcon from "../images/down-arrow-black.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import dataGridLandingImage from "../images/dataDrigLandingImage.svg";
import studentProfileLandingImage from "../images/homepage_SPpicture.svg";

const useStyles = createUseStyles({
  welcomeSection: {
    width: "100%",
    paddingTop: 200,
    marginBottom: 0,
    "@media (min-width: 501px) and (max-width: 644px)": {
      paddingTop: 180,
    },
    "@media (min-width: 376px) and (max-width: 500px)": {
      paddingTop: 70,
    },
    "@media (min-width: 0px) and (max-width: 390px)": {
      paddingTop: 50,
    },
  },
  landingHeading: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    fontSize: 48,
    marginBottom: 24,
  },
  landingSecondaryHeading: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontWeight: 100,
    fontSize: 14,
    width: 650,
    "@media (min-width: 0px) and (max-width: 700px)": {
      width: "100%",
    },
  },
  secondaryHeadingLineBreak: {
    marginTop: 18,
  },
  selectedWork: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  downArrow: {
    position: "relative",
    top: 4,
  },
  selectedWorkText: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 14,
    textAlign: "center",
    display: "inline-block",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 100,
  },
  caseStudiesContainer: {
    paddingTop: 29,
    "@media (min-width: 701px) and (max-width: 1200px)": {
      paddingTop: 96,
    },
  },
  companyName: {
    color: "#767676",
  },
});

const Landing = () => {
  const classes = useStyles();
  const { height } = useWindowDimensions();

  const caseStudies = [
    {
      title:
        "From data silos to quick insights: designing a student overview panel",
      description:
        "Every stakeholder team wanted their metrics included in the new student overview panel, creating a classic design challenge. Through user research and strategic collaboration, I turned competing priorities into a focused solution that educators actually wanted to use. The technical constraints led to innovations that improved performance across the entire platform.",
      image: studentProfileLandingImage,
      route: "studentProfile",
    },
    {
      title:
        "The feature users loved to leave: Redesigning the data grid to stop the spreadsheet exodus",

      description:
        "The Portal's most-used feature was driving away 10,000+ users who rebuilt grid setups daily before abandoning the platform for static spreadsheets. Through user research and stakeholder alignment, I designed a template system that balanced technical constraints with user needs. The solution restored engagement with live data and became foundational to how NYC educators interact with student information.",
      image: dataGridLandingImage,
      route: "dataGrid",
    },
  ];

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.welcomeSection}>
          <h1 className={classes.landingHeading}>Hi, my name is Julissa.</h1>
          <p className={classes.landingSecondaryHeading}>
            Currently working as a Product Designer II at{" "}
            <span className={classes.companyName}>
              New Visions for Public Schools
            </span>
            , designing a district-wide SaaS application that serves NYC's
            entire public school system, including 1,700+ schools and over 1
            million students.
          </p>
          <p
            className={clsx(
              classes.landingSecondaryHeading,
              classes.secondaryHeadingLineBreak
            )}
          >
            Experience in web-based, enterprise SaaS applications, solving
            complex data visualization challenges, improving user adoption
            rates, and designing for multi-role educational platforms.
          </p>
          <section
            className={classes.selectedWork}
            style={{ height: height - 500 }}
          >
            <section>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
              <h3 className={classes.selectedWorkText}>Selected work</h3>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
            </section>
          </section>
        </section>
        <section className={classes.caseStudiesContainer}>
          {caseStudies.map((caseStudy) => (
            <CaseStudy
              key={caseStudy.route}
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              route={caseStudy.route}
            />
          ))}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
