import { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import diagonalArrowUpIcon from "../images/diagonal-arrow-up.svg";

const useStyles = createUseStyles({
  footerContainer: {
    borderTop: "1px solid #1E1E1E",
    height: "auto",
    padding: 48,
    fontSize: 14,
    "@media (min-width: 0px) and (max-width: 652px)": {
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  footerHeading: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    fontWeight: 300,
    margin: "0 0 15px 0",
    marginBottom: 8,
    "@media (min-width: 0px) and (max-width: 652px)": {
      marginBottom: 5,
    },
  },
  footerLinksCopyright: {
    display: "flex",
    justifyContent: "space-between",
    "@media (min-width: 0px) and (max-width: 652px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  footerItem: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    cursor: "pointer",
    textDecoration: "none",
    color: "#1E1E1E",
    "&:hover": {
      color: "#1E1E1E",
    },
  },
  footerLinkedin: {
    marginRight: 8,
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      "& $footerTextLineThrough": {
        transform: "translateY(-50%) scaleX(1)",
      },
    },
  },
  footerEmail: {
    marginLeft: 8,
    cursor: "default",
  },
  footerCopyright: {
    cursor: "text",
    "@media (min-width: 0px) and (max-width: 652px)": {
      paddingTop: 5,
    },
  },
  boxesImage: {
    position: "relative",
    top: 4,
    left: 7,
  },
  copiedAlert: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    position: "absolute",
    width: 55,
    height: 23,
    backgroundColor: "#1E1E1E",
    color: "white",
    textAlign: "center",
    left: 178,
    marginTop: 5,
    padding: 2,
    borderRadius: 3,
    fontSize: 12,
    "@media (min-width: 0px) and (max-width: 652px)": {
      left: 146,
    },
  },
  arrowUp: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid #1E1E1E",
    left: 201,
    "@media (min-width: 0px) and (max-width: 652px)": {
      left: 170,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes fadeOut": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  fadeIn: {
    opacity: 1,
    animationName: "$fadeIn",
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
    animationDuration: "1s",
  },
  fadeOut: {
    opacity: 0,
    animationName: "$fadeOut",
    animationIterationCount: 1,
    animationTimingFunction: "ease-out",
    animationDuration: "1.5s",
  },
  footerTextLineThrough: {
    position: "absolute",
    width: "100%",
    height: 1,
    bottom: -0.5,
    left: 0,
    backgroundColor: "#1E1E1E",
    transform: "translateY(-50%) scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.15s ease-in-out",
  },
  link: {
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
  copyText: {
    display: "none",
  },
});

const Footer = ({ containerStyles }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const [ShowHoverTooltip, setShowHoverTooltip] = useState("none");

  const copyText = async () => {
    setShowHoverTooltip("none");
    try {
      await navigator.clipboard.writeText("hello@julissa.zavala.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const handleMouseEnter = () => {
    if (!copied) {
      setShowHoverTooltip("block");
    }
  };

  const handleMouseLeave = () => {
    setShowHoverTooltip("none");
  };

  return (
    <footer className={classes.footerContainer} style={containerStyles}>
      <section className={classes.footerLinksCopyright}>
        <h4 className={classes.footerHeading}>Let&#8217;s connect! :)</h4>
        <a
          className={clsx(classes.link, classes.footerHeading)}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/julissa-zavala/portfolio-site"}
        >
          Hand coded in React{" "}
          <img
            src={diagonalArrowUpIcon}
            alt="Black arrow pointing up to the right diagonally"
            className={classes.diagonalArrowUp}
          />
        </a>
      </section>
      <section className={classes.footerLinksCopyright}>
        <section>
          <a
            className={clsx(classes.footerHeading, classes.link)}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/julissazavala/"
          >
            LinkedIn{" "}
            <img
              src={diagonalArrowUpIcon}
              alt="Black arrow pointing up to the right diagonally"
              className={classes.diagonalArrowUp}
            />{" "}
          </a>
          <span>/</span>
          <a
            onClick={copyText}
            className={clsx(classes.footerItem, classes.footerEmail)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            hello@julissa.zavala.com
          </a>
          <div
            className={clsx(classes.copiedAlert)}
            style={{ display: ShowHoverTooltip }}
          >
            Copy
          </div>
          <div
            className={clsx(classes.arrowUp)}
            style={{ display: ShowHoverTooltip }}
          ></div>
          {copied && (
            <>
              <div
                className={clsx(
                  classes.copiedAlert,
                  classes.fadeIn,
                  classes.fadeOut
                )}
              >
                Copied!
              </div>
              <div
                className={clsx(
                  classes.arrowUp,
                  classes.fadeIn,
                  classes.fadeOut
                )}
              ></div>
            </>
          )}
        </section>
        <span className={clsx(classes.footerItem, classes.footerCopyright)}>
          Copyright © Julissa Zavala 2025
        </span>
      </section>
    </footer>
  );
};

export default Footer;
