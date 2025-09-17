import { createUseStyles } from "react-jss";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import clsx from "clsx";
import downArrowIcon from "../images/down-arrow-black.svg";
import dots from "../images/dots.svg";
import graph from "../images/3_user_journey.svg";
import dataGridHero from "../images/DataGridHero.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import defaultViews from "../images/defaultView.svg";
import customViews from "../images/customViews.svg";
import beforeImageSVG from "../images/1_Before.svg";
import afterImageSVG from "../images/1_after.svg";
import templateViews from "../images/templateViews.svg";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import viewDiagram from "../images/4_viewDiagram.svg";
import workFlow from "../images/7_workflow.svg";
import gif from "../images/6_savebutton-ezgif.com-resize.gif";
import gif2 from "../images/8_sidebar.gif";
import saveButton from "../images/6_savebutton.mp4";
import sideBar from "../images/8_sidebar.mp4";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import line from "../images/line.svg";

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
      paddingTop: 40,
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
    marginBottom: 0,
    "@media (min-width: 701px) and (max-width: 1200px)": {},
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
    marginBottom: 48,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      marginBottom: 0,
    },
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
    color: "#05AA82",
    lineHeight: 1.5,
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
    },
  },
  quoteContainer: {
    width: "47%",
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
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  zoomBackground: {
    '& [data-rmiz-modal-overlay="visible"]': {
      backgroundColor: "#1E1E1E !important",
    },
  },
});

const DataGrid = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const beforeImage = {
    imageUrl: beforeImageSVG,
  };

  const afterImage = {
    imageUrl: afterImageSVG,
  };

  const images = [
    {
      original: templateViews,
    },
    {
      original: customViews,
    },
    {
      original: defaultViews,
    },
  ];

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.caseStudyContainer}>
          <img src={dataGridHero} className={classes.heroImage} />
          <h1 className={classes.mainHeading}>
            The feature users loved to leave: Redesigning the data grid to stop
            spreadsheet exodus
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
            <span className={classes.caseStudyDetails}>8 Weeks</span>
            <span className={classes.caseStudyDetails}>
              Figma, Miro, Mixpanel
            </span>
          </div>
          <section className={classes.tldr}>
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>TL;DR</p>
              <p className={classes.description}>
                <span className={classes.bold}>The challenge: </span>NYC's
                10,000+ educators were abandoning the Portal's most-used
                feature. They were forced to rebuild their grid setups every
                morning and ultimately exported to static spreadsheets,
                defeating the platform's core value of live, updated data across
                900+ columns.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>My solution: </span>
                Designed a hybrid view system with role-based templates plus
                custom saved views, featuring intuitive save/manage controls and
                sidebar organization.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>The impact: </span>Support
                tickets about session timeouts dropped 80% (from ~15 to 2-3
                weekly), feature abandonment dropped from 60% to 20%, and users
                returned to working with fresh daily data instead of static
                exports.
              </p>
              <p className={classes.title} style={{ marginTop: 32 }}>
                My role
              </p>
              <p className={classes.description}>
                Lead Product Designer responsible for user research, stakeholder
                alignment, and design strategy.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <ReactBeforeSliderComponent
                firstImage={afterImage}
                secondImage={beforeImage}
                className={classes.delimeterContainer}
                delimiterColor="#05AA82"
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
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>01</span>The great spreadsheet
                migration
              </p>
              <p className={classes.description}>
                Our student profile data grid served 10,000+ NYC educators
                daily, but it was driving them away. Users faced all 927 columns
                at once, creating an overwhelming interface. New users would
                abandon it immediately, while experienced users rebuilt their
                entire setup every morning after session timeouts or school
                switches.
              </p>
              <p className={classes.description}>
                Users abandoned the Portal entirely, exporting to Excel and
                Google Sheets just to preserve their work. This defeated our
                core value of fresh, daily-updated data as users traded live
                information for static snapshots.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img
                  src={beforeImageSVG}
                  width="100%"
                  style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
                />
              </Zoom>
            </div>
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>02</span>From Symptoms to Root
                Cause
              </p>
              <p className={classes.description}>
                Initial support data showed a high volume of session timeout
                complaints where users would configure their grid, navigate away
                to other tasks, then return to find their work lost. This led us
                to assume users simply needed save functionality.
              </p>
              <p className={classes.description}>
                Through 8 interviews with principals, counselors, and teachers,
                I discovered that session timeouts were just the final straw in
                a much larger workflow problem.
              </p>
              <ol
                className={classes.description}
                style={
                  width <= 1200
                    ? { paddingLeft: 20, marginBottom: 0 }
                    : { padding: 16, marginBottom: 0 }
                }
              >
                <li>
                  927-column cognitive overload forcing lengthy daily setup
                </li>
                <li>
                  No role-appropriate starting points, so everyone began with
                  the same overwhelming interface
                </li>
              </ol>
            </section>
            <div className={classes.quoteContainer}>
              <p className={classes.quote}>
                “I&#8217;d spend 20 minutes setting up my grid, leave to help a
                student, then come back to find the system logged me out and all
                my work gone. Now I just export to Sheets instead.”
              </p>
              <p className={classes.caption}>
                - Quote from a support ticket received
              </p>
            </div>
          </section>
          <Zoom classDialog={clsx(classes.zoomBackground)}>
            <img className={classes.graphImage} src={graph} />
          </Zoom>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>03</span>Designing with
                constraints
              </p>
              <p className={classes.description}>
                This made me realize we needed to shift. Instead of just adding
                the ability to save, how might we give users role-appropriate
                starting points while maintaining flexibility?
              </p>
              <p className={classes.description}>
                Our MongoDB architecture limited how much view data we could
                efficiently store, but this constraint led to a better solution.
                After multiple meetings with engineering, product managers, and
                school liaisons (where various teams initially wanted their own
                specialized templates), we established 5 core templates covering
                essential use cases.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              {" "}
              <Zoom classDialog={classes.zoomBackground}>
                <img src={viewDiagram} width="100%" />
              </Zoom>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
                    fontSize: 14,
                    marginTop: 32,
                    marginBottom: 32,
                  }}
                >
                  Three view types emerged:
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: width >= 901 ? "space-between" : "center",
                    width: "100%",
                    marginBottom: width >= 901 && 64,
                  }}
                >
                  {" "}
                  {width <= 900 && (
                    <ImageGallery
                      showFullscreenButton={false}
                      showPlayButton={false}
                      items={images}
                      showNav={false}
                      showBullets={true}
                    />
                  )}
                  {width >= 901 && (
                    <>
                      <img src={templateViews} style={{ width: "31.5%" }} />
                      <img src={customViews} style={{ width: "31.5%" }} />
                      <img src={defaultViews} style={{ width: "31.5%" }} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>04</span>Core interface design
              </p>
              <p className={classes.description}>
                The interface centered on an intuitive split-button save
                control. 'Save Changes' was prominently displayed with 'Save As
                New' accessible via dropdown, plus quick view switching via
                sidebar. We also added a save prompt that appeared whenever
                users navigated away from the grid, preventing work loss during
                session timeouts.
              </p>
              <p className={classes.description}>
                To accommodate new controls without overwhelming the interface,
                I restructured the page into two stacked menu bars: grid-related
                actions in the top bar, student-related actions in the bottom
                bar.
              </p>
              <p className={classes.description}>
                I tested this split-button concept with 5 users to ensure the
                distinction was clear before finalizing the design. Users
                immediately understood the primary action while easily
                discovering the secondary option.
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
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              >
                <source src={saveButton} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && (
              <img
                width="100%"
                src={gif}
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              />
            )}
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>05</span>Supporting workflows
                and validation
              </p>
              <p className={classes.description}>
                I also designed a workflow for creating views from scratch.
                Users could click a plus icon next to custom views to open the
                edit columns modal with no pre-selected columns, then name and
                save their new view.
              </p>
              <p className={classes.description}>
                Before launch, I conducted usability sessions with 4 users to
                test the end-to-end workflow of switching between views and
                saving configurations, which confirmed the new system was
                intuitive and significantly faster than their previous manual
                setup process.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              {" "}
              <Zoom classDialog={classes.zoomBackground}>
                <img src={workFlow} width="100%" />
              </Zoom>
            </div>
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>06</span>Impact
              </p>
              <p className={classes.description}>
                Three months post-launch, results validated the approach:
              </p>
              <ul
                className={classes.description}
                style={{ padding: 16, width: "100%" }}
              >
                <li>
                  80% reduction in support tickets about session timeouts and
                  lost work (from ~15 to 2-3 weekly)
                </li>
                <li>
                  Feature abandonment rate dropped from 60% to 20% as educators
                  stopped avoiding the grid
                </li>
                <li>
                  Average sessions per user per week increased from 2.3 to 4.1
                  showing sustained engagement
                </li>
                <li>
                  Percentage of users creating custom views increased from 15%
                  to 55% demonstrating deeper adoption
                </li>
              </ul>
              <p className={classes.description}>
                Follow-up interviews confirmed users appreciated accessing fresh
                data daily without setup burden, restoring our competitive
                advantage. Users also requested view sharing with colleagues—a
                feature we had identified during initial research but decided to
                prioritize for a future release.
              </p>
            </section>
            <div className={classes.quoteContainer}>
              <p className={classes.quote}>
                “Before, I&#8217;d spend the first half hour of my day
                rebuilding my graduation tracking view. Now I just switch to my
                saved view and I'm immediately seeing which students need
                interventions.”
              </p>
              <p className={classes.caption}>
                - From a guidance counselor, post launch
              </p>
            </div>
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>07</span>Key Learnings
              </p>
              <p className={classes.description}>
                This project taught me the importance of looking beyond what
                users say they need to understand what they actually need.
                Instead of building the save button users asked for, we dug
                deeper to understand the root cause (no role-appropriate
                starting points) and designed a system that solved the broader
                workflow issue.
              </p>
              <p className={classes.description}>
                The constraint lesson was crucial: our MongoDB limitations
                forced us to be strategic about what to build, which led to a
                more focused solution than unlimited flexibility would have
                provided. Sometimes technical constraints push you toward better
                design decisions.
              </p>
            </section>{" "}
            {width >= 551 && (
              <video
                controls={false}
                autoPlay
                loop
                muted
                className={classes.customVideo}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              >
                <source src={sideBar} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && (
              <img
                width="100%"
                src={gif2}
                style={{ border: "0.5px solid #e4e4e7", borderRadius: 8 }}
              />
            )}
          </section>
          <img src={width >= 901 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section
              className={classes.caseStudyInfo}
              style={{ paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>08</span>What I&#8217;d do
                differently
              </p>
              <p className={classes.description}>
                I would have tested the two-bar layout concept with users before
                implementation. While the two-bar solution worked well and
                solved our space constraints, getting user feedback on the grid
                vs. student action separation earlier could have validated this
                approach and potentially revealed other layout solutions I
                hadn't considered.
              </p>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default DataGrid;
