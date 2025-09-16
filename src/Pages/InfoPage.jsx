import { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import selfie from "../images/about.jpg";
import diagonalArrowUpIcon from "../images/diagonal-arrow-up.svg";
import ceramicPot from "../images/ceramic-pot.svg";
import ceramicSculpture from "../images/ceramic-sculpture.svg";
import ceramicHandsFeet from "../images/ceramicHandsFeet.mp4";
import resumeFile from "../images/JulissaZavala_Resume.pdf";
import { createUseStyles } from "react-jss";
import useWindowDimensions from "../hooks/useWindowDimensions";

const useStyles = createUseStyles({
  infoContainer: {
    paddingTop: 32,
    paddingBottom: 32,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontSize: 14,
    lineHeight: 1.3,
    "@media (min-width: 701px) and (max-width: 1270px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  infoContainerLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    "@media (min-width: 701px) and (max-width: 1270px)": {
      width: "80%",
      marginBottom: "3%",
    },
    "@media (min-width: 0px) and (max-width: 930px)": {
      flexDirection: "column-reverse",
      marginBottom: 0,
      width: "100%",
    },
  },
  infoBio: {
    width: "55%",
    "@media (min-width: 0px) and (max-width: 930px)": {
      width: "100%",
    },
  },
  infoBioDetails: {
    margin: 0,
  },
  infoBioDetail: {
    display: "block",
    marginTop: 16,
    "@media (min-width: 0px) and (max-width: 930px)": {
      marginTop: 24,
    },
  },
  infoBioQuestion: {
    position: "relative",
    top: 80,
    "@media (min-width: 931px) and (max-width: 1270px)": {
      position: "absolute",
      top: 447,
    },
    "@media (min-width: 0px) and (max-width: 930px)": {
      top: 0,
      marginTop: 24,
    },
  },
  resumePdf: {
    color: "#1E1E1E",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.7,
    },
  },
  diagonalArrowUp: {
    position: "relative",
    top: 3,
    right: 2,
    width: 16,
  },
  infoImage: {
    width: 264,
    height: 319,
    borderRadius: 6,
    marginLeft: "0%",
    "@media (min-width: 931px) and (max-width: 1270px)": {
      marginLeft: "4%",
    },
    "@media (min-width: 0px) and (max-width: 930px)": {
      marginLeft: 0,
      marginBottom: 24,
    },
  },
  infoContainerRight: {
    width: "48%",
    "@media (min-width: 931px) and (max-width: 1270px)": {
      marginLeft: "auto",
      width: "60%",
    },
    "@media (min-width: 0px) and (max-width: 930px)": {
      marginTop: 24,
      width: "100%",
    },
  },
  customVideo: {
    display: "block",
    marginLeft: "auto",
    width: "75%",
    height: "auto",
    borderRadius: 6,
    "&::-webkit-media-controls-volume-slider, &::-webkit-media-controls-mute-button":
      {
        display: "none !important",
      },
    "@media (min-width: 0px) and (max-width: 499px)": {
      width: "100%",
    },
  },
  infoBioDetails3: {
    width: "85%",
    marginTop: 26,
    marginBottom: 26,
    marginLeft: "auto",
    marginRight: 0,
    "@media (min-width: 931px) and (max-width: 1270px)": {
      width: "95%",
    },
    "@media (min-width: 0px) and (max-width: 930px)": {
      width: "100%",
      marginLeft: 0,
      marginTop: 24,
      marginBottom: 24,
    },
  },
  ceramicPot: {
    display: "inline-block",
    position: "relative",
    bottom: 11,
    width: "42%",
    borderRadius: 6,
  },
  ceramicSculpture: {
    display: "inline-block",
    width: "49%",
    marginLeft: "9%",
    borderRadius: 6,
  },
});

const Info = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [imagesLoaded, setImagesLoaded] = useState({
    selfie: false,
    ceramicPot: false,
    ceramicSculpture: false,
  });

  useEffect(() => {
    const imagesToPreload = [
      { key: "selfie", src: selfie },
      { key: "ceramicPot", src: ceramicPot },
      { key: "ceramicSculpture", src: ceramicSculpture },
    ];

    imagesToPreload.forEach(({ key, src }) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [key]: true }));
      };
      img.src = src;
    });
  }, []);

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.infoContainer}>
          <section className={classes.infoContainerLeft}>
            <section className={classes.infoBio}>
              <p className={classes.infoBioDetails}>
                My name is Julissa Zavala and I am currently based in Queens,
                New York (where I&#8217;m from!).
                <span className={classes.infoBioDetail}>
                  I&#8217;ve spent the past four years at New Visions for Public
                  Schools designing tools for educators and administrators that
                  help with student tracking and resource management.
                </span>
                <span className={classes.infoBioDetail}>
                  Good design feels seamless. Getting there involves
                  conversations, testing, and iterating until something works.
                  I&#8217;m drawn to that problem-solving process and the
                  details that make the difference between functional and great.
                </span>
                <span className={classes.infoBioDetail}>
                  I design with the belief that technology should adapt to how
                  people work, not the other way around. I start by figuring out
                  where current tools fall short, then design solutions that
                  feel straightforward to use while driving the outcomes the
                  business needs.
                </span>
              </p>
              <p className={classes.infoBioQuestion}>
                Want to learn more about my work experience?
                <br />
                <a
                  className={classes.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resumeFile}
                >
                  Take a look at my resume{" "}
                  <img
                    src={diagonalArrowUpIcon}
                    alt="Black arrow pointing up to the right diagonally"
                    className={classes.diagonalArrowUp}
                  />
                </a>
              </p>
            </section>
            <img
              className={classes.infoImage}
              src={selfie}
              alt="A photo of me, Julissa Zavala, smiling and standing in front of closed storefront in NYC"
              loading="lazy"
              style={{
                opacity: imagesLoaded.selfie ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            ></img>
          </section>
          <section className={classes.infoContainerRight}>
            <video
              controls={width < 500}
              autoPlay={width > 500}
              loop
              muted
              className={classes.customVideo}
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
            >
              <source src={ceramicHandsFeet} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className={classes.infoBioDetails3}>
              When I&#8217;m away from my computer, you can usually find me in
              the kitchen trying out new recipes, going on long walks with my
              dog Penny, or more recently, learning how to dance salsa.
            </p>
            <p className={classes.infoBioDetails3}>
              I also really enjoy hands-on creative work like sketching,
              painting and ceramics. Here&#8217;s some recent ceramics projects
              I&#8217;ve been working on, at various point of WIP!
            </p>
            <img
              src={ceramicPot}
              alt="Cerapic pot of a girl with black hair and large hands leaning over and cradling herself"
              className={classes.ceramicPot}
              style={{
                opacity: imagesLoaded.selfie ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
            <img
              src={ceramicSculpture}
              alt="Ceramic sculpture of a hand holding a flower. The hand has a chrome finish and the flower has yellow petals and a green stem"
              className={classes.ceramicSculpture}
              style={{
                opacity: imagesLoaded.selfie ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Info;
