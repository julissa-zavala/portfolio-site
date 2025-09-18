import { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import clsx from "clsx";
import downArrowIcon from "../images/down-arrow-black.svg";
import rightArrowIcon from "../images/right-arrow-black.svg";
import dots from "../images/dots.svg";
import heroImage from "../images/hero_SP.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import beforeImageSVG from "../images/beforeStudentProfile.svg";
import afterImageSVG from "../images/after.svg";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "react-image-gallery/styles/css/image-gallery.css";
import line from "../images/line.svg";
import brainStorm from "../images/studentProfileBrainstormingSessionTemplate.jpg";
import drawingBoard from "../images/drawingboard_SP.svg";
import skeleton from "../images/skeleton.mp4";
import skeletonGif from "../images/skeleton.gif";
import validation from "../images/validation.svg";
import refinement from "../images/refinement.svg";
import wireframe from "../images/initialSolutions.svg";
import attendance from "../images/attendancemodule.mp4";
import attendanceGif from "../images/attendancemodule.gif";
import academics from "../images/academicsmodule.mp4";
import academicsGif from "../images/academicsmodule.gif";

const useStyles = createUseStyles({
  caseStudySection: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingLeft: 0,
    paddingRight: 0,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 40,
    marginRight: 0,
    marginLeft: 0,
    borderTop: "1px solid #767676",
    borderBottom: "1px solid #767676",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 48,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  caseStudyImage: {
    width: "100%",
  },
  caseStudyImageContainer: {
    width: "47%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  caseStudyInfo: {
    width: "47%",
    height: "auto",
    lineHeight: 1.3,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 0,
      paddingBottom: 32,
      marginLeft: 0,
      width: "100%",
    },
  },
  title: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif", 
    fontSize: 22,
    fontWeight: 800,
  },
  description: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 14,
    marginTop: 16,
  },
  caseStudyDetails: {
    color: "#1E1E1E",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    lineHeight: 1.2,
    fontSize: 12,
    fontWeight: 100,
    marginRight: 32,
  },
  caseStudyContainer: {
    paddingTop: 48,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      minHeight: "90vh",
    },
  },
  heroImage: {
    marginBottom: 32,
    display: "block",
    width: "100%",
    maxHeight: "60vh",
    objectFit: "cover",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      marginBottom: 24,
      maxHeight: "50vh",
    },
  },
  mainHeading: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    fontSize: 43,
    textAlign: "left",
    marginBottom: 16,
    lineHeight: 1.1,
    paddingTop: 8,
    "@media (min-width: 0px) and (max-width: 1139px)": {
      width: "100%",
    },
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
      marginBottom: 12,
      paddingTop: 4,
    },
  },
  bold: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
  },
  caption: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 12,
    marginTop: 10,
    color: "#767676",
  },
  scrollToLearnMore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  downArrow: {
    position: "relative",
    top: 4,
  },
  scrollToLearnMoreText: {
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
  number: {
    fontSize: 12,
    color: "#767676",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontWeight: 100,
    marginRight: 8,
  },
  dots: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  twoImageContainer: {
    width: "47%",
    display: "flex",
    justifyContent: "space-between",
  },
  ohOneStyles: {
    borderTop: "none",
    borderBottom: "none",
    paddingTop: 40,
    paddingBottom: 40,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  ohTwoStyles: {
    borderTop: "none",
    borderBottom: "none",
    paddingTop: 40,
    paddingBottom: 40,
    flexWrap: "wrap",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
  quote: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    fontSize: 32,
    color: "#01A4DC",
    lineHeight: 1.5,
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
    },
  },
  quoteContainer: {
    width: "46%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  graphImage: {
    marginBottom: 80,
    width: "100%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      marginBottom: 32,
    },
  },
  tldr: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingLeft: 0,
    paddingRight: 0,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 48,
    marginBottom: 48,
    marginRight: 0,
    marginLeft: 0,
    borderTop: "1px solid #767676",
    borderBottom: "1px solid #767676",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column-reverse",
      justifyContent: "center",
      paddingTop: 32,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  customVideo: {
    width: "47%",
    border: "0.5px solid #e4e4e7",
    borderRadius: 8,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  zoomBackground: {
    '& [data-rmiz-modal-overlay="visible"]': {
      backgroundColor: "#1E1E1E !important",
    },
  },
  results: {
    display: "flex",
    flexDirection: "column",
    width: "26%",
    fontSize: 14,
  },
  resultsPercentage: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    marginBottom: 8,
    fontSize: 22,
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
  },
  impactContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    "& > div:first-child": {
      width: "40%",
      "@media (min-width: 0px) and (max-width: 1200px)": {
        width: "100%",
      },
    },
    "@media (min-width: 0px) and (max-width: 1200px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  loadingContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    zIndex: 9999,
    transition: "opacity 0.5s ease-out",
  },
  percentageText: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    color: "#1E1E1E",
    fontSize: 14,
    lineHeight: "normal",
    position: "relative",
    marginBottom: 32,
  },
  loadingLineThrough: {
    position: "absolute",
    width: "100%",
    height: 1,
    bottom: 1,
    left: 0,
    backgroundColor: "#1E1E1E",
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.1s ease-out",
  },
  contentContainer: {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    "&.loaded": {
      opacity: 1,
      transform: "translateY(0px)",
    },
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
  nextProjectContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 24px",
    textAlign: "center",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: "32px 16px",
    },
  },
  nextProjectHeader: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 12,
    color: "#767676",
    marginBottom: 8,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  nextProjectTitle: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
    lineHeight: 1.3,
  },
  nextProjectLink: {
    display: "inline-block",
    textDecoration: "none",
    color: "#1E1E1E",
  },
  nextProjectCircleButton: {
    opacity: 1,
    color: "#444",
    textAlign: "center",
    backgroundColor: "#f4f4f8",
    borderRadius: "200px",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    marginTop: "10px",
    marginBottom: "100px",
    padding: "0",
    fontFamily: "Roobert, Verdana, sans-serif",
    fontSize: "45px",
    fontWeight: 300,
    display: "flex",
    position: "static",
    left: "50%",
    right: "0%",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      "& $nextProjectArrow": {
        transform: "translateX(4px)",
      },
    },
  },
  nextProjectArrow: {
    width: 48,
    height: 48,
    transition: "transform 0.3s ease-in-out",
  },
  studentProfileVideo: {
    width: "35%",
    marginLeft: "auto",
    "@media (min-width: 551px) and (max-width: 1200px)": {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

const StudentProfile = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [imagesLoaded, setImagesLoaded] = useState({
    heroImage: false,
    brainStorm: false,
    beforeImage: false,
    afterImage: false,
    drawingBoard: false,
    validation: false,
    refinement: false,
    wireframe: false,
  });
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [animatedSections, setAnimatedSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const [impactNumbersAnimated, setImpactNumbersAnimated] = useState(false);
  const impactAnimationTriggered = useRef(false);
  const [currentNumbers, setCurrentNumbers] = useState({ views: 0, dailyUsers: 0, monthlyUsers: 0 });

  useEffect(() => {
    const imagesToPreload = [
      { key: "heroImage", src: heroImage },
      { key: "brainStorm", src: brainStorm },
      { key: "beforeImage", src: beforeImageSVG },
      { key: "afterImage", src: afterImageSVG },
      { key: "drawingBoard", src: drawingBoard },
      { key: "validation", src: validation },
      { key: "refinement", src: refinement },
      { key: "wireframe", src: wireframe },
    ];

    const totalImages = imagesToPreload.length;
    let loadedCount = 0;

    const animatePercentage = (targetPercentage) => {
      let currentPercentage = 0;
      setLoadingPercentage(0);
      
      const timer = setInterval(() => {
        currentPercentage += 1;
        
        if (currentPercentage === 69) {
          currentPercentage += 1;
        }
        
        if (currentPercentage > 100) {
          currentPercentage = 100;
        }
        
        setLoadingPercentage(currentPercentage);
        
        if (currentPercentage >= targetPercentage || currentPercentage >= 100) {
          clearInterval(timer);
          if (currentPercentage >= 100 && loadedCount === totalImages) {
            setTimeout(() => {
              setAllImagesLoaded(true);
              setTimeout(() => {
                setShowLoader(false);
              }, 500);
            }, 800);
          }
        }
      }, 20);
    };

    imagesToPreload.forEach(({ key, src }) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [key]: true }));
        loadedCount++;
        const targetPercentage = Math.min(100, Math.round((loadedCount / totalImages) * 100));
        animatePercentage(targetPercentage);
      };
      img.src = src;
    });
  }, []);

  const animateNumbers = () => {
    const targetNumbers = { views: 150, dailyUsers: 40, monthlyUsers: 28 };
    const duration = 4000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCurrentNumbers({
        views: Math.round(targetNumbers.views * easeOutQuart),
        dailyUsers: Math.round(targetNumbers.dailyUsers * easeOutQuart),
        monthlyUsers: Math.round(targetNumbers.monthlyUsers * easeOutQuart),
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCurrentNumbers(targetNumbers);
      }
    }, stepDuration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.sectionIndex);
            setAnimatedSections(prev => new Set([...prev, sectionIndex]));
            if (sectionIndex === 12 && !impactAnimationTriggered.current) {
              impactAnimationTriggered.current = true;
              setImpactNumbersAnimated(true);
              animateNumbers();
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [allImagesLoaded]);

  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLoader]);

  const beforeImage = {
    imageUrl: beforeImageSVG,
  };

  const afterImage = {
    imageUrl: afterImageSVG,
  };

  return (
    <>
      {showLoader && (
        <div className={classes.loadingContainer}>
          <div className={classes.percentageText}>
            {loadingPercentage}%
            <div 
              className={classes.loadingLineThrough}
              style={{ transform: `scaleX(${loadingPercentage / 100})` }}
            ></div>
          </div>
        </div>
      )}
    <div className={`${classes.contentContainer} loaded`}>
      <section className="container">
        <HeaderNav />
        <section className={classes.caseStudyContainer}>
          <img src={heroImage} className={classes.heroImage} />
          <h1 className={classes.mainHeading}>
            From data silos to quick insights: Designing a student overview
            panel
          </h1>
          <div>
            {" "}
            <span
              className={clsx(classes.caseStudyDetails, classes.bold)}
              style={{ marginRight: 134 }}
            >
              Role
            </span>
            <span
              className={clsx(classes.caseStudyDetails, classes.bold)}
              style={{ marginRight: 30 }}
            >
              Duration
            </span>
            <span className={clsx(classes.caseStudyDetails, classes.bold)}>
              Tools
            </span>
          </div>
          <div>
            {" "}
            <span className={classes.caseStudyDetails}>
              Lead Product Designer
            </span>
            <span className={classes.caseStudyDetails}>13 Weeks</span>
            <span className={classes.caseStudyDetails}>
              Figma, Miro, Mixpanel
            </span>
          </div>


          <section 
            className={`${classes.tldr} ${classes.animatedSection} ${animatedSections.has(0) ? 'animate' : ''}`}
            ref={el => sectionRefs.current[0] = el}
            data-section-index="0"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>TL;DR</p>
              <p className={classes.description}>
                <span className={classes.bold}>The challenge: </span>Teachers
                were spending 5-10 minutes per student clicking through multiple
                data panels just to answer basic questions like "How is this
                student doing overall?
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>My solution: </span>
                Designed a student overview panel that synthesizes key insights
                from across main intervention areas, including attendance patterns, academic progress,
                graduation requirements, and intervention data—in one
                scannable view.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>The impact: </span>150% increase in student 
                profile page views, and 40% increase in daily active users on this page,
                 and 28% growth in monthly active users. 
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>Key innovation: </span>Created a
                skeleton loading system that became a reusable pattern adopted
                across 5 other Portal features, solving performance constraints
                while enhancing user experience.
              </p>
              <p className={classes.title} style={{ marginTop: 32 }}>
                My role
              </p>
              <p className={classes.description}>
                Lead Product Designer working directly with engineering, product
                management, and 8 NYC educators. I owned the end-to-end design
                process from research through implementation over 3 months.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <ReactBeforeSliderComponent
                firstImage={afterImage}
                secondImage={beforeImage}
                delimiterColor="#01A4DC"
              />
              <p
                className={classes.caption}
                style={{ paddingBottom: width <= 1200 ? 16 : null }}
              >
                Before and after of the student profile page
              </p>
            </div>
          </section>
          <section 
            className={`${classes.scrollToLearnMore} ${classes.animatedSection} ${animatedSections.has(1) ? 'animate' : ''}`}
            ref={el => sectionRefs.current[1] = el}
            data-section-index="1"
          >
            <section>            
              <h3 className={classes.scrollToLearnMoreText}>
                Scroll to learn more
              </h3>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
            </section>
          </section>


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(2) ? 'animate' : '')}
            ref={el => sectionRefs.current[2] = el}
            data-section-index="2"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>01</span>Uncovering the real
                problem
              </p>
              <p className={classes.description}>
                During contextual inquiry with 8 NYC educators, I observed
                teachers spending 5-10 minutes per student jumping between
                panels just to answer "How is this student doing overall?"
                Analytics confirmed this pattern: 73% of users accessed 3+
                panels per student session, following the same inefficient
                sequence every time.
              </p>
              <p className={classes.description}>
                As I was already redesigning the student profile's navigation
                layout to improve information hierarchy, the real insight came
                from watching their workflow—teachers weren't struggling with
                navigation alone, they were struggling to synthesize scattered
                data into actionable insights for parent conferences. This led
                me to propose adding a new overview panel to the redesigned
                profile.
              </p>
            </section>
            <div className={classes.quoteContainer}>
              <p className={classes.quote}>
                “I need to click through 4 different sections just to get the
                full picture before a parent conference.”
              </p>
              <p className={classes.caption}>
                - From a conversation with a frequent Portal user
              </p>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(3) ? 'animate' : '')}
            ref={el => sectionRefs.current[3] = el}
            data-section-index="3"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>02</span>The wrong solution
                (and learning from it)
              </p>
              <p className={classes.description}>
                Given carte blanche to create a dashboard-like summary, I
                initially created wireframes with 6+ modules, basing the 
                selection of data points on Mixpanel data and stakeholder requests. 
                After faciliating a design review with key stakeholders, I received feedback that this
                approach was comprehensive but unfocused.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={wireframe} width="100%" />
              </Zoom>
            </div>
          </section>
          <div
            className={`${classes.quoteContainer} ${classes.animatedSection} ${animatedSections.has(9) ? 'animate' : ''}`}
            ref={el => sectionRefs.current[9] = el}
            data-section-index="9"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: width >= 1201 ? 80 : 32,
            }}
          >
            <p className={classes.quote}>
              “Teachers don't need more data to look at. They need help
              understanding what it means for each student.”
            </p>
            <p className={classes.caption}>
              - From a stakeholder during design review
            </p>
          </div>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles, classes.animatedSection, animatedSections.has(4) ? 'animate' : '')}
            ref={el => sectionRefs.current[4] = el}
            data-section-index="4"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>03</span>Strategic focus over
                feature bloat
              </p>
              <p className={classes.description}>
                Another obstacle emerged when each product team wanted their
                metrics featured prominently in this new summary panel.
              </p>
              <p className={classes.description}>
                I facilitated alignment workshops with product managers across 5
                different teams and as a team, we established that this panel
                should "tell the student's educational journey" and provide
                "actionable information" for next steps. This became my design
                criteria.
              </p>
              <p className={classes.description}>
                The collaborative breakthrough was establishing that this panel
                shows highlights for quick student risk assessment, with each
                module clickable to access their team's detailed information in
                dedicated panels. This approach honored everyone's needs while
                serving our users.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              {" "}
              <Zoom
                classDialog={classes.zoomBackground}
                canSwipeToUnzoom={false}
              >
                <img
                  src={brainStorm}
                  width="100%"
                  style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
                />
              </Zoom>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(5) ? 'animate' : '')}
            ref={el => sectionRefs.current[5] = el}
            data-section-index="5"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>04</span>Back to the drawing
                board
              </p>
              <p className={classes.description}>
              With this foundation, I could redesign with clear purpose. After extensive stakeholder 
              conversations across multiple teams, we landed on 4 core modules that balanced immediate
               insight with actionable context: current month attendance, current GPA, credits earned, and 
               regents fulfilled. 
              </p>
              <p className={classes.description}>
              Each module follows the same pattern with the primary metric at top and a contextual 
              change indicator below, because users needed both "where the student stands now" and 
              "which direction they're trending." 
              </p>
              <p className={classes.description}>
              The month-over-month and marking period comparisons came from user research showing
               that static numbers felt meaningless without context. The graduation tracking statuses 
               addressed counselor workflows around intervention timing. This structure gives educators 
               the snapshot they need while showing whether each area requires immediate attention.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={drawingBoard} width="100%" />
              </Zoom>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(6) ? 'animate' : '')}
            ref={el => sectionRefs.current[6] = el}
            data-section-index="6"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>05</span>Validation and
                refinement
              </p>
              <p className={classes.description}>
                I tested the 4-module concept with 5 teachers using realistic
                student data. Results were clear: 60% reduction in assessment
                time and increased exploration of detailed information. When
                stakeholders pushed for progress bars in the 4 modules and
                additional data visualizations, inspired by the visual elements
                I'd successfully introduced elsewhere in the panel, I used this
                validation data to advocate for strategic focus.
              </p>
              <p className={classes.description}>
                The compromise was adding progress bars to the respective
                detailed panels where there's room to explain their complexity,
                while keeping the overview modules simple.
              </p>
              <p className={classes.description}>
                We also replaced the attendance graph with an interactive
                attendance calendar, addressing their preference for more visual
                data representation while maintaining core simplicity, since
                user research showed school staff needed to quickly identify
                attendance patterns that could inform intervention decisions.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={validation} width="100%" />
              </Zoom>
              <p
                className={classes.caption}
                style={{ marginBottom: width <= 1200 ? 32 : 48 }}
              >
                Some stakeholders pushed for progress bars in the top 4 modules
              </p>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={refinement} width="100%" />
              </Zoom>
              <p
                className={classes.caption}
                style={{ marginBottom: width <= 1200 ? 12 : 0 }}
              >
                Compromise was to add progress bars to the respective panels
                instead
              </p>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(7) ? 'animate' : '')}
            ref={el => sectionRefs.current[7] = el}
            data-section-index="7"
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>06</span>Solving the
                performance challenge
              </p>
              <p className={classes.description}>
                Engineering flagged a critical issue: the new overview panel required loading
                data from 4 different backend systems simultaneously (8+ API
                calls) versus existing on-demand loading. On school Chromebooks,
                this meant 5+ second load times that would lose users entirely.
              </p>
              <p className={classes.description}>
                I proposed skeleton loading for the entire overview panel. Users
                see the full structure with animated placeholders while data
                loads. I created design documentation defining skeleton states
                for different content types, establishing shared language
                between teams.
              </p>
              <p className={classes.description}>
                The solution was so effective that these skeleton loading
                components now serve 5 different Portal features and established
                design patterns for new features across the platform
              </p>
            </section>
            {width >= 551 && (
              <video
                controls={false}
                autoPlay
                loop
                muted
                className={classes.customVideo}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              >
                <source src={skeleton} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && (
              <img
                width="100%"
                src={skeletonGif}
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              />
            )}
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(8) ? 'animate' : '')}
            ref={el => sectionRefs.current[8] = el}
            data-section-index="8"
            style={{marginBottom: width <= 1200 && 0}}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>07</span>The final solution
              </p>
              <p className={classes.description}>
              Two new data visualizations were introduced as a apart of this work. One is 
              the interactive calendar widget, which shows daily attendance patterns because visual patterns 
              reveal insights that percentages hide. 
              </p>
              <p className={classes.description}>
                Teachers can instantly identify concerning patterns—like every Monday 
                absence suggesting weekend issues, or absences clustered around test dates. 
                This helps them distinguish between students needing family support versus 
                academic intervention.
              </p>
            </section>
            {width >= 551 && (
              <video
                controls={false}
                autoPlay
                loop
                muted
                className={clsx(classes.customVideo, classes.studentProfileVideo)}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              >
                <source src={attendance} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && (
              <img
                width="100%"
                src={attendanceGif}
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              />
            )}
          </section>
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(10) ? 'animate' : '')}
            ref={el => sectionRefs.current[10] = el}
            data-section-index="10"
            style={{marginBottom: width <= 1200 && 0}}
          >
            <section className={classes.caseStudyInfo}>
              <p
                className={classes.description}
                style={{ marginTop: width <= 1200 && 0 }}
              >
                For the academics section, I coordinated with the data team to
                establish a traffic light color system (green/yellow/red) for
                courses passing, making intervention needs instantly
                recognizable. We designed graceful fallback states for edge
                cases like beginning of year when grades aren't yet available,
                showing "In Progress" rather than confusing empty states.
              </p>
              <p className={classes.description}>
                The supporting modules provide detailed context while
                maintaining our principle of actionable information. Each
                element guides educators toward next steps rather than just
                displaying comprehensive data.
              </p>
            </section>
            {width >= 551 && (
              <video
                controls={false}
                autoPlay
                loop
                className={clsx(classes.customVideo, classes.studentProfileVideo)}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              >
                <source src={academics} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && (
              <img
                width="100%"
                src={academicsGif}
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              />
            )}
          </section>
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(11) ? 'animate' : '')}
            ref={el => sectionRefs.current[11] = el}
            data-section-index="11"
          >
            <section className={classes.caseStudyInfo}>
              <p
                className={classes.description}
                style={{ marginTop: width <= 1200 && 0 }}
              >
                The final design consolidates the four most 
                critical data points teachers need: attendance patterns, 
                academic performance, graduation progress, and state testing 
                requirements—all in one scannable view.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img
                  src={afterImageSVG}
                  width="100%"
                  style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
                />
              </Zoom>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles, classes.animatedSection, animatedSections.has(12) ? 'animate' : '')}
            ref={el => sectionRefs.current[12] = el}
            data-section-index="12"
          >
            <section
              className={classes.caseStudyInfo}
              style={{ width: "100%", paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>08</span>Impact
              </p>
              
              <div className={classes.impactContent}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: width > 1200 ? "50%" : "100%",
                    alignSelf: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
                      fontSize: 14,
                      marginTop: width >= 1200 ? 24 : 32,
                      marginBottom: 16,
                    }}
                  >
                    Results after 6 months:
                  </p>{" "}
                  <div className={classes.resultsContainer}>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>{currentNumbers.views}%</span>
                      Increase in student profile page views
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>{currentNumbers.dailyUsers}%</span>
                      Increase in daily active users on this page
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>{currentNumbers.monthlyUsers}%</span>
                      Growth in monthly active users
                    </p>
                  </div>
                  <ul
                    className={classes.description}
                    style={{
                      paddingBottom: width <= 1200 && 16,
                      paddingTop: width <= 1200 && 16,
                      paddingLeft: 14,
                      width: "90%",
                      marginTop: 24,
                    }}
                  >
                    <span style={{ position: "relative", right: 15 }}>
                      Systems-level impact:
                    </span>
                    <li>
                      Data visualization patterns I introduced were adopted
                      across 6 different product areas
                    </li>
                    <li>
                      Established the design language for how we present complex
                      educational data platform-wide
                    </li>
                    <li>
                      Became the most requested feature demo for new district
                      onboarding
                    </li>
                  </ul>
                </div>
                <div
                  className={classes.quoteContainer}
                  style={{ marginTop: width >= 1201 && 32 }}
                >
                  <p className={classes.quote}>
                    “I can answer parent questions immediately now instead of
                    saying 'let me look that up.”
                  </p>
                  <p
                    className={classes.caption}
                    style={{ marginBottom: width <= 1200 && 13 }}
                  >
                    - From a conversation with a frequent Portal user
                  </p>
                </div>
              </div>
            </section>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />


          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles, classes.animatedSection, animatedSections.has(13) ? 'animate' : '')}
            ref={el => sectionRefs.current[13] = el}
            data-section-index="13"
          >
            <section
              className={classes.caseStudyInfo}
              style={{ paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>09</span>Key takeaways
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>
                  Stakeholder alignment is as important as user research.{" "}
                </span>
                <br />
                Getting 5 product teams to agree on design criteria took just as
                much effort as the actual design work. I learned that framing
                decisions around shared goals ("tell the student's educational
                journey") worked better than trying to convince teams my
                approach was right.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>
                  Data builds consensus that opinions can't.
                </span>
                <br />
                When stakeholders wanted more complexity, showing them that
                teachers completed tasks 60% faster with the simple version
                aligned everyone around the focused approach. User testing
                became my best tool for organizational alignment, not just
                design validation.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>
                  Good solutions create ripple effects.
                </span>
                <br />
                The skeleton loading system we built to solve our performance
                problem became a reusable pattern adopted by 5 other teams. This
                taught me that addressing immediate constraints thoughtfully can
                drive platform-wide improvements.
              </p>
            </section>{" "}
          </section>
          
          <div className={classes.nextProjectContainer}>
            <p className={classes.nextProjectHeader}>Next Project</p>
            <p className={classes.nextProjectTitle}>The feature users loved to leave: Redesigning the data grid to stop spreadsheet exodus</p>
            <Link to="/dataGrid" className={classes.nextProjectLink}>
              <div className={classes.nextProjectCircleButton}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0LWljb24gbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4="
                  alt="Arrow pointing to the right"
                  className={classes.nextProjectArrow}
                />
              </div>
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default StudentProfile;
