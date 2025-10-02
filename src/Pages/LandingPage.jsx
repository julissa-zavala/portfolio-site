import { useState, useEffect, useRef } from "react";
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
  waveWord: {
    display: "inline-block",
    opacity: 0,
    transform: "translateY(20px) rotateX(90deg)",
    animation: "$waveIn 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
    transformOrigin: "center bottom",
    "&:nth-child(1)": { animationDelay: "0.2s" },
    "&:nth-child(2)": { animationDelay: "0.4s" },
    "&:nth-child(3)": { animationDelay: "0.6s" },
    "&:nth-child(4)": { animationDelay: "0.8s" },
    "&:nth-child(5)": { animationDelay: "1.0s" },
    "&:nth-child(6)": { animationDelay: "1.2s" },
  },
  wavePeriod: {
    display: "inline-block",
    opacity: 0,
    transform: "scale(0) rotate(180deg)",
    animation: "$periodPop 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
    animationDelay: "1.5s",
    transformOrigin: "center center",
  },
  "@keyframes waveIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px) rotateX(90deg)",
    },
    "50%": {
      opacity: 0.7,
      transform: "translateY(-5px) rotateX(0deg)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0) rotateX(0deg)",
    },
  },
  "@keyframes periodPop": {
    "0%": {
      opacity: 0,
      transform: "scale(0) rotate(180deg)",
    },
    "70%": {
      opacity: 1,
      transform: "scale(1.3) rotate(0deg)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1) rotate(0deg)",
    },
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
    color: "#707070",
  },
  animatedSection: {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "&.animate": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const Landing = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [animatedSections, setAnimatedSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const initialHeightRef = useRef(null);

  const caseStudies = [
    {
      title:
        "The feature users loved to leave: Building saved views to stop the spreadsheet exodus",

      description:
        "The Portal's most-used feature was driving away 10,000+ users who rebuilt grid setups daily before abandoning the platform for static spreadsheets. Through user research and stakeholder alignment, I designed a template system that balanced technical constraints with user needs. The solution restored engagement with live data and became foundational to how NYC educators interact with student information.",
      image: dataGridLandingImage,
      route: "dataGrid",
    },
    {
      title:
        "From data silos to quick insights: designing a student overview panel",
      description:
        "Every stakeholder team wanted their metrics included in the new student overview panel, creating a classic design challenge. Through user research and strategic collaboration, I turned competing priorities into a focused solution that educators actually wanted to use. The technical constraints led to innovations that improved performance across the entire platform.",
      image: studentProfileLandingImage,
      route: "studentProfile",
    },
  ];

  useEffect(() => {
    if (width >= 551) return;
    if (initialHeightRef.current === null && height) {
      initialHeightRef.current = height - 500;
    }
  }, [height, width]);


  useEffect(() => {
    const ref = sectionRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.sectionIndex);
            setAnimatedSections((prev) => new Set([...prev, sectionIndex]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    ref.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      ref.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.welcomeSection}>
          <h1 className={classes.landingHeading}>
            <span className={classes.waveWord}>Hi,</span>{" "}
            <span className={classes.waveWord}>my</span>{" "}
            <span className={classes.waveWord}>name</span>{" "}
            <span className={classes.waveWord}>is</span>{" "}
            <span className={classes.waveWord}>Julissa</span>
            <span className={classes.wavePeriod}>.</span>
          </h1>
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
            className={`${classes.selectedWork} ${classes.animatedSection} ${animatedSections.has(0) ? "animate" : ""
              }`}
            ref={(el) => (sectionRefs.current[0] = el)}
            data-section-index="0"
            style={{
              height: initialHeightRef.current || height - 500,
            }}
          >
            <section>
              <h3 className={classes.selectedWorkText}>Selected work</h3>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
            </section>
          </section>
        </section>
        <section
          className={`${classes.caseStudiesContainer} ${classes.animatedSection
            } ${animatedSections.has(1) ? "animate" : ""}`}
          ref={(el) => (sectionRefs.current[1] = el)}
          data-section-index="1"
        >
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
      <div
        className={`${classes.animatedSection} ${animatedSections.has(2) ? "animate" : ""
          }`}
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section-index="2"
      >
        <Footer />
      </div>
    </>
  );
};

export default Landing;
