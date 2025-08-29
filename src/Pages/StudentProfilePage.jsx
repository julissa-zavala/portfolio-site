import React, { useState, useRef, useEffect } from "react";
import arrowRight from "../images/realredarrow-right.svg";
import metrics from "../images/4_metrics.svg";
import pmInterviews from "../images/3_pmInterviews.png";
import wireframeOne from "../images/5_wireframeOne.svg";
import wireframeTwo from "../images/5_wireframeTwo.svg";
import finalNav from "../images/5_finalNav_ES.svg";
import finalHeader from "../images/9_finalheaderProfile.svg";
import snapshot from "../images/snapshot.svg";
import finalDesigns from "../images/finalDesigns.svg";
import oldProfileVideo from "../images/new_oldprof_video.mp4";
import tasksNotesVideo from "../images/new_tasksandnotes_vid.mov";
import HeaderNav from "../components/HeaderNav";

const StudentProfile = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const foregroundRef = useRef(null);
  const sliderButtonRef = useRef(null);

  const handleSliderChange = (e) => {
    const newPosition = e.target.value;
    setSliderPos(newPosition);
  };

  useEffect(() => {
    if (foregroundRef.current && sliderButtonRef.current) {
      foregroundRef.current.style.width = `${sliderPos}%`;
      sliderButtonRef.current.style.left = `calc(${sliderPos}% - 18px)`;
    }
  }, [sliderPos]);

  return (
    <>
      <HeaderNav />
      <div className="back-to-top">
        <div id="Top" className="top"></div>
        <a href="#Top" className="top-button w-inline-block"></a>
      </div>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "50px" }}>
          <nav className="col-lg-3 col-md-3 hidden-sm hidden-xs">
            <div className="bs-docs-sidebar">
              <ul className="nav nav-stacked" id="sidebar">
                <li>
                  <a href="#overview">Overview</a>
                  <ul className="nav nav-stacked">
                    <li>
                      <a href="#context">Project context</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#discovery">Discovery</a>
                  <ul className="nav nav-stacked">
                    <li>
                      <a href="#kickoff">Kickoff</a>
                    </li>
                    <li>
                      <a href="#def-success">Defining success</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#approach">Approach</a>
                  <ul className="nav nav-stacked">
                    <li>
                      <a href="#exploring-layout">Exploring a new layout</a>
                    </li>
                    <li>
                      <a href="#navigation">New way to navigate</a>
                    </li>
                    <li>
                      <a href="#history-log">Moving the history log</a>
                    </li>
                    <li>
                      <a href="#revamp-header">Revamping the header</a>
                    </li>
                    <li>
                      <a href="#student-snapshot">Adding a student snapshot</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#insights">User insights</a>
                </li>
                <li>
                  <a href="#finalDesigns">Final designs</a>
                </li>
                <li>
                  <a href="#impact">Impact </a>
                </li>
                <li>
                  <a href="#Takeaways">Takeaways </a>
                </li>
              </ul>
            </div>
          </nav>
          <h1
            style={{ marginBottom: "0px" }}
            className="work-heading-21 mobileHeading"
          >
            Redesigning the Student Profile
          </h1>
          <div className="work-preview-2"></div>
          <div
            className="bg bg-eatxplore"
            data-aos="fade-up"
            data-aos-duration="600"
          ></div>
          <div
            id="top"
            className="section-2 haze"
            data-aos="fade-up"
            data-aos-duration="600"
          ></div>
          <div className="col-lg-7 col-md-7 col-sm-10 col-xs-12 col-centered main-content first-section">
            <br />
            <br />
            <section
              id="overview"
              className="group"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1
                style={{ marginBottom: "0px" }}
                className="work-heading-21 desktopHeading"
              >
                Redesigning the Student Profile
              </h1>
              <div className="container-9">
                <div className="text-block-19  role">
                  <span className="text-span-10">Role</span>
                  <br />
                  Lead Product Designer
                </div>
                <div className="text-block-19 project-duration">
                  <span className="text-span-10">Project Duration</span>
                  <br />4 weeks
                </div>
                <div className="text-block-19 tools">
                  <span className="text-span-10">Tools</span>
                  <br />
                  Figma, Miro, Mixpanel
                </div>
              </div>
              <h1 className="heading-50">* * *</h1>
              <h1 className="work-heading-2">Overview</h1>
              <br />
              <div id="context" className="row">
                <div className="subgroup-left-side col-lg-12 col-md-8 col-sm-12 col-xs-12">
                  <h4 className="heading-11 heading-41">Project context</h4>
                  <p className="paragraph-4">
                    The Portal is a comprehensive school management tool
                    utilized by NYC public schools and over 200 housing
                    shelters, streamlining access to student data for educators.
                    The aim is to empower educators with efficient data access,
                    eliminating the need for manual collection and analysis.
                    <br />
                    <br />
                    The Portal aims to expand beyond NYC. However, before
                    pursuing further expansion, stakeholders identified a need
                    to improve the UX/UI of key features throughout the Portal.
                    The Student Profile is the most visited page in the Portal,
                    offering a detailed view of a student's data across major
                    content areas. Recognizing its importance through user
                    feedback and analytics, the Student Profile emerged as a key
                    focus for redesign.
                    <br />
                    <br />
                    The goal of the redesign was to introduce a clear
                    information hierarchy, enhancing the user's ability to
                    quickly assess a student's progress across various content
                    areas.
                  </p>
                  <div className="sliderContainer">
                    <div className="sliderImg background-img"></div>
                    <div
                      ref={foregroundRef}
                      className="sliderImg foreground-img"
                    ></div>
                    <input
                      type="range"
                      id="slider"
                      min="0"
                      max="100"
                      value={sliderPos}
                      onChange={handleSliderChange}
                      className="slider"
                    />
                    <div ref={sliderButtonRef} className="slider-button"></div>
                  </div>
                  <p className="caption sliderCaption">
                    Drag slider to view the Student Profile before this project
                    and after this project.
                  </p>
                  <br />
                  <br />
                  <a
                    href="#finalDesigns"
                    target="_blank"
                    data-w-id="47da1261-65c3-9db1-b51d-259838678e03"
                    className="button-wrapper w-inline-block final-wrapper"
                  >
                    <div
                      style={{ opacity: 0 }}
                      className="button-background"
                    ></div>
                    <div className="button-text">Jump to Final Designs</div>
                    <img
                      src={arrowRight}
                      width="40"
                      alt="Arrow pointing right"
                      className="button-arrow"
                    />
                  </a>
                  <br />
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-10 col-xs-12 col-centered main-content">
            <section id="discovery" className="group">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="discovery"
              >
                <h1 className="heading-12">* * *</h1>
                <h1 className="work-heading-2">Discovery</h1>
              </div>
              <div id="kickoff" className="subgroup">
                <h4 className="heading-11 heading-46">Kickoff</h4>
                <p className="paragraph-4">
                  At the project's start, we identified two pain points based on
                  user research and stakeholder feedback: navigating through
                  data-heavy panels and reducing the height of the Student
                  Profile header.
                </p>
                <div
                  className="video-container vc1"
                  style={{ marginTop: "-13px" }}
                >
                  <video id="vid1" width="320" height="240" autoPlay muted>
                    <source src={oldProfileVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p style={{ marginBottom: "30px" }} className="caption">
                  With 12 data-heavy panels, it's cumbersome to go to a
                  particular panel. Users get around this by collapsing all
                  panels to see which panels are available, then navigating to
                  the desired panel.
                </p>
                <br /> <br />
                <div className="center-images">
                  <a data-fancybox="images22" href={metrics}>
                    <img
                      src={metrics}
                      alt="Metrics showing space usage in the interface"
                    />
                  </a>
                </div>
                <p style={{ marginBottom: "20px" }} className="caption">
                  Many of our users access the Portal through their school's
                  Chromebooks. This means that many of our users are viewing the
                  Student Profile on a resolution of 1280x780. Vertical space on
                  this page is valuable and the current page header takes up a
                  sizeable amount of real estate.
                </p>
                <br /> <br />
              </div>
              <br />
              <div id="def-success" className="subgroup">
                <h4 className="heading-11">Defining success</h4>
                <p className="paragraph-11">
                  The next step was to refine our understanding of the "ideal"
                  Student Profile experience and align the product team on a
                  shared vision.
                </p>
                <p className="paragraph-17">To accomplish this:</p>
                <ul role="list" className="list-2">
                  <li className="list-item">
                    I organized brainstorming sessions with the product
                    management team and the Head of Design to help define
                    long-term and short-term goals for the Student Profile
                    design.
                  </li>
                  <li className="list-item-2">
                    I interviewed product managers from different verticals to
                    gather insights on user needs and workflows. This was
                    crucial, given that the Student Profile comprised 12 panels,
                    each developed independently by different teams, resulting
                    in siloed knowledge about their design.
                  </li>
                </ul>

                <div className="center-images">
                  <a data-fancybox="images22" href={pmInterviews}>
                    <img src={pmInterviews} alt="PM interview insights board" />
                  </a>
                </div>
                <p className="caption">
                  This is a sample Insights board for the Postsecondary panel in
                  the Student Profile. Similar boards were made for each panel,
                  outlining available panel information and leaving space for
                  notes from interviews with product managers, documented using
                  stickies.
                </p>
              </div>
            </section>
            <section
              id="approach"
              className="group"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h6> </h6>
              <br />
              <h1 className="heading-12">* * *</h1>
              <h1 className="work-heading-2">Approach</h1>
              <br />
              <p className="paragraph-6">
                Due to the amount of feedback received, I split the redesign
                work into phases. The goal of phase 1 was to introduce a design
                with a clear information hierarchy and strategic nudges to the
                user.
                <br /> <br />
                Phase 1's four main design deliverables:
                <br />
              </p>
              <ul role="list" className="list-2">
                <li className="list-item">Explore a new layout.</li>
                <li className="list-item-2">
                  Introduce navigation for easy panel access.
                </li>
                <li className="list-item-3">
                  Rethink the Student Profile header, reducing its height.
                </li>
                <li className="list-item-3">
                  Add an overview section for a quick progress summary.
                </li>
              </ul>
              <div id="exploring-layout" className="subgroup">
                <h4 className="heading-8">Exploring a new layout</h4>
                <p className="paragraph-4">
                  I started by creating three blockframe options. I prioritized
                  navigation space and addressed the user pain point of
                  overwhelming data by considering an 'action items' section for
                  actionable next steps. From there, I created three low-fi
                  wireframes to share with stakeholders.
                </p>
                <div className="center-images">
                  <a data-fancybox="images22" href={wireframeOne}>
                    <img
                      src={wireframeOne}
                      alt="Initial wireframe explorations"
                    />
                  </a>
                </div>
                <p style={{ marginBottom: "40px" }} className="caption">
                  Before going straight to low-fidelity wireframes, it was
                  helpful to start with more exploratory blockframes to play
                  around with the layout of the page.
                </p>
                <br />

                <p className="paragraph-4">
                  Stakeholder feedback showed that the navigation in the third
                  option was more intuitive and easier to parse through. I
                  decided to move forward with the third option and converted
                  the design into a two-column layout for future mobile
                  responsiveness. The final design incorporated integrated
                  action items into the navigation using notification badges.
                </p>
                <div className="center-images">
                  <a data-fancybox="images22" href={wireframeTwo}>
                    <img src={wireframeTwo} alt="Final wireframe layout" />
                  </a>
                </div>
                <p style={{ marginBottom: "40px" }} className="caption">
                  The final page layout.
                </p>
              </div>
            </section>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-10 col-xs-12 col-centered main-content">
            <section className="group">
              <div id="navigation" className="row subgroup">
                <h4>New way to navigate</h4>
                <p className="paragraph-4">
                  Utilizing product analytics and insights from the product
                  team, I designed a left-hand sidenav for the Student Profile.
                  The order of panels reflects common user workflows and click
                  rates. To enhance visual appeal and reduce text density, I
                  incorporated icons into the navigation.
                </p>
                <div style={{ marginBottom: "0px" }} className="center-images">
                  <a data-fancybox="images22" href={finalNav}>
                    <img
                      width="40%"
                      src={finalNav}
                      alt="Side navigation designs for different school types"
                    />
                  </a>
                </div>
                <p className="caption">
                  (Left) The sidenav for 6-12 schools, (Right) The sidenav for
                  K-5 schools
                </p>
              </div>
            </section>
            <br />
            <br />
            <div id="history-log" className="subgroup">
              <h4 className="heading-8">Moving the history log</h4>
              <p className="paragraph-4">
                To accommodate the new navigation, I relocated the history log
                to a new panel. Despite some pushback from the product team on
                relocating the history log, I decided to proceed, aiming to
                collect user feedback during testing.
                <br />
                <br />
                Simultaneously, another team was implementing a task management
                system for the Portal and there was a need to show tasks
                assigned to a student within the Student Profile. I collaborated
                with their designer, adding tasks to the new history log panel
                (now called Tasks and Notes) and incorporating pagination to
                maintain consistent panel height.
              </p>
              <br />
              <div
                className="video-container vc2"
                style={{ marginTop: "-13px" }}
              >
                <video id="vid2" width="640" height="480" autoPlay muted>
                  <source src={tasksNotesVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="caption">
                The new Tasks and Notes panel lets users switch between viewing
                assigned tasks and written notes for the student. Users can also
                toggle to Activity to see metadata related to actions taken on
                the student via the Portal.
              </p>
            </div>
            <br />
            <br />
            <div id="revamp-header" className="subgroup">
              <h4>Revamping the header</h4>
              <p className="paragraph-4">
                To reduce the header height, I crafted mockups condensing the
                information into two lines. In line with discovery phase
                findings highlighting the need to alleviate the data-heavy
                nature, I introduced color to the header of this page.
              </p>
              <div className="center-images">
                <a data-fancybox="images22" href={finalHeader}>
                  <img
                    src={finalHeader}
                    alt="Redesigned student profile header"
                  />
                </a>
              </div>
              <p className="caption">
                The finalized Student Profile page header.
              </p>
              <br />
            </div>
            <br />
            <div id="student-snapshot" className="subgroup">
              <h4>Adding a student snapshot</h4>
              <p className="paragraph-4">
                To enhance the Student Profile's information hierarchy and
                discoverability, our central goal was to create a narrative for
                the student's performance across different content areas.
                Insights from product manager interviews guided the content for
                a new student snapshot panel at the top of the page. This panel
                offers a summarized overview of the student's data, enabling
                users to click for further exploration.
              </p>
              <br />
              <div style={{ marginTop: "-20px" }} className="center-images">
                <a data-fancybox="images22" href={snapshot}>
                  <img
                    src={snapshot}
                    alt="Student snapshot panels for different school types"
                  />
                </a>
              </div>
              <p style={{ marginBottom: "40px" }} className="caption">
                The student snapshot panel for High School (left), Middle School
                (center) and Elementary School (right).
              </p>
            </div>
            <section
              id="insights"
              className="group"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h1 className="heading-12">* * *</h1>
              <h1 className="work-heading-2">User insights</h1>
              <br />
              <p className="paragraph-17">
                I created an interactive prototype, which included two versions
                to a/b test with participants. One version featured a static
                page where users could click into the panel, introducing a new
                flow. The other allowed seamless scrolling from panel to panel,
                preserving the existing flow.
                <br />
                <br />
                The feedback was unanimously positive, with only minor design
                adjustments needed.
              </p>
              <br />
              <blockquote className="block-quote">
                <span className="text-span-12">&quot;</span>
                <em>
                  It looks cleaner. I like how the information is presented and
                  now I can go straight to the panel I need to go to. I like how
                  everything is now spelled out and just laid out easier.
                </em>
                <span className="text-span-13">
                  <em>&quot;</em>
                </span>
              </blockquote>
              <p className="paragraph-17">Key insights Include:</p>
              <ul role="list" className="list-2">
                <li className="list-item">
                  Participants highlighted the significance of scrolling between
                  panels, particularly for tasks like adding a graduation plan.
                  Maintaining this scrolling capability was deemed essential.
                </li>
                <li className="list-item-2">
                  I received a lot of feedback from participants about the
                  information available in the student header, which helped
                  define with metrics were crucial.
                </li>
                <li className="list-item-3">
                  Surprisingly, participants found the new history log/notes
                  panel more discoverable, with some perceiving it as a new and
                  exciting feature. This positive response confirmed the
                  validity of relocating the history log to a new panel.
                </li>
              </ul>
            </section>
            <br />
            <div id="finalDesigns" className="subgroup prototype">
              <div data-aos="fade-up" data-aos-duration="600">
                <h1 style={{ marginTop: "-25px" }} className="heading-12">
                  * * *
                </h1>
                <h1 className="work-heading-2">Final designs</h1>
                <br />
                <div
                  style={{ marginTop: "-20px", marginBottom: "15px" }}
                  className="center-images"
                >
                  <a data-fancybox="images22" href={finalDesigns}>
                    <img
                      src={finalDesigns}
                      alt="Final student profile designs for different school types"
                    />
                  </a>
                </div>
                <p className="caption">
                  The Student Profile page for High School (left), Middle School
                  (center) and Elementary School (right).
                </p>
              </div>
            </div>
            <div id="impact" className="subgroup prototype">
              <div data-aos="fade-up" data-aos-duration="600">
                <h1 style={{ marginTop: "50px" }} className="heading-12">
                  * * *
                </h1>
                <h1 className="work-heading-2">Impact</h1>
                <br />
                <div className="paragraph-28">
                  <p>
                    {" "}
                    It's still the early days since the launch of this redesign,
                    but we've received overwhelmingly positive feedback from
                    users. There also has been a noticeable uptick in user
                    traffic to the Student Profile and a corresponding increase
                    in time spent on the page since the launch of the updated
                    Student Profile.
                  </p>
                  <ul>
                    <li>
                      Since the launch, the average of individual Student
                      Profile views per user have gone up 100%.
                    </li>
                    <li>
                      The new Student Snapshot panel has also had 800 unique
                      clicks by users in the first month post-release, while the
                      other panels have an average of 400 clicks by users.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "35px" }} id="Takeaways" className="group">
              <div data-aos="fade-up" data-aos-duration="600">
                <h1 className="heading-12">* * *</h1>
                <h1 className="work-heading-2">Takeaways</h1>
                <br />
                <p style={{ marginBottom: "100px" }} className="paragraph-28">
                  In four weeks, I undertook a significant overhaul of the
                  Student Profile in the Portal to address usability challenges
                  systematically. Handling a tight deadline and numerous
                  redesign possibilities, I learned how crucial it is to take a
                  phased approach when tackling a project this large.
                  Collaborating closely with stakeholders and seamlessly
                  incorporating features from other teams made it a collective
                  effort. The revamped Student Profile isn't just updated; it's
                  now user-centric, polished, and adaptable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
