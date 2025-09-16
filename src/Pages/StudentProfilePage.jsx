import { createUseStyles } from "react-jss";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import clsx from "clsx";
import downArrowIcon from "../images/down-arrow-black.svg";
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
  },
  heroImage: {
    marginBottom: 48,
    display: "block",
    width: "100%",
  },
  mainHeading: {
    fontFamily: "Roobert_Latin_Bold, Verdana, sans-serif",
    fontSize: 43,
    textAlign: "left",
    marginBottom: 24,
    "@media (min-width: 0px) and (max-width: 1139px)": {
      width: "100%",
    },
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
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
});

const StudentProfile = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const beforeImage = {
    imageUrl: beforeImageSVG,
  };

  const afterImage = {
    imageUrl: afterImageSVG,
  };

  return (
    <>
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

          {/* ________________________TL;DR_____________________________ */}

          <section className={classes.tldr}>
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
                from across the system - attendance patterns, academic progress,
                graduation requirements, and intervention data - in one
                scannable view.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>The impact: </span>43% reduction
                in student assessment time, 67% increase in panel engagement,
                and 89% of teachers reported significantly improved workflow
                efficiency.
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
          <section className={classes.scrollToLearnMore}>
            <section>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
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

          {/* ________________________01: UNCOVERING THE REAL PROBLEM_____________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
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

          {/* ________________________02: THE WRONG SOLUTION_____________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>02</span>The wrong solution
                (and learning from it)
              </p>
              <p className={classes.description}>
                Given carte blanche to create a dashboard-like summary, I
                initially created wireframes with 6+ modules including detailed
                data visualizations for academics, graduation plans, regents,
                attendance, credits, and tasks/notes. After faciliating a design
                review with key stakeholders, I received feedback that this
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
            className={classes.quoteContainer}
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

          {/* ________________________03: STRATEGIC FOCUS_____________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
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

          {/* _____________________04: BACK TO THE DRAWING BOARD________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>04</span>Back to the drawing
                board
              </p>
              <p className={classes.description}>
                Given carte blanche to create a dashboard-like summary, I
                initially created wireframes with 6+ modules including detailed
                data visualizations for academics, graduation plans, regents,
                attendance, credits, and tasks/notes. After faciliating a design
                review with key stakeholders, I received feedback that this
                approach was comprehensive but unfocused.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={drawingBoard} width="100%" />
              </Zoom>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />

          {/* ________________________05: VALIDATION REFINEMENT________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
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

          {/* ________________________06: SOLVING THE PERFORMANCE CHALLENGE________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>06</span>Solving the
                performance challenge
              </p>
              <p className={classes.description}>
                Engineering flagged a critical issue: my panel required loading
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

          {/* ________________________07: THE FINAL SOLUTION_________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>07</span>The final solution
              </p>
              <p className={classes.description}>
                Engineering flagged a critical issue: my panel required loading
                data from 4 different backend systems simultaneously (8+ API
                calls) versus existing on-demand loading. On school Chromebooks,
                this meant 5+ second load times that would lose users entirely.
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
                style={{
                  width: "35%",
                  marginLeft: "auto",
                }}
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
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
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
                className={classes.customVideo}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                style={{
                  width: "35%",
                  marginLeft: "auto",
                }}
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
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p
                className={classes.description}
                style={{ marginTop: width <= 1200 && 0 }}
              >
                The final panel synthesized attendance patterns with interactive
                calendar, projected GPA, credits, and state testing progress.
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

          {/* _______________________08:IMPACT_________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section
              className={classes.caseStudyInfo}
              style={{ width: "100%", paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>08</span>Impact
              </p>
              <p
                className={classes.description}
                style={{ width: width > 1200 ? "47%" : "100%" }}
              >
                The final panel synthesized attendance patterns (with
                interactive calendar), projected GPA, credits, and state testing
                progress. Supporting modules provided detailed attendance and
                academic context.
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
                      <span className={classes.resultsPercentage}>150%</span>
                      Increase in student profile page views
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>40%</span>
                      Increase in daily active users on this page
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>28%</span>
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

          {/* _______________________09: KEY TAKEAWAYS________________________ */}

          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
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
        </section>
      </section>
      <Footer />
    </>
  );
};

export default StudentProfile;
