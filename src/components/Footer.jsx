import { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import diagonalArrowUpIcon from "../images/diagonal-arrow-up.svg";
import { trackClick, trackExternalLink } from "../utils/analytics";

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
    cursor: "pointer",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    borderRadius: 4,
    padding: "2px 4px",
    "&:hover": {
      backgroundColor: "rgba(30, 30, 30, 0.05)",
      transform: "translateY(-1px)",
    },
    "&:active": {
      transform: "translateY(0)",
      backgroundColor: "rgba(30, 30, 30, 0.1)",
    },
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
    width: "auto",
    minWidth: 60,
    height: 32,
    backgroundColor: "#1E1E1E",
    color: "white",
    textAlign: "center",
    left: 188,
    marginTop: 5,
    paddingTop: 5,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "@media (min-width: 0px) and (max-width: 652px)": {
      left: 156,
    },
  },
  "@keyframes slideInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(8px) scale(0.95)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
  },
  "@keyframes slideOutDown": {
    "0%": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(8px) scale(0.95)",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.05)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "@keyframes checkmark": {
    "0%": {
      transform: "scale(0)",
      opacity: 0,
    },
    "50%": {
      transform: "scale(1.2)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
  slideInUp: {
    opacity: 1,
    animationName: "$slideInUp",
    animationIterationCount: 1,
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationDuration: "0.2s",
  },
  slideOutDown: {
    opacity: 0,
    animationName: "$slideOutDown",
    animationIterationCount: 1,
    animationTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
    animationDuration: "0.15s",
  },
  pulse: {
    animationName: "$pulse",
    animationIterationCount: 1,
    animationTimingFunction: "ease-in-out",
    animationDuration: "0.3s",
  },
  checkmark: {
    animationName: "$checkmark",
    animationIterationCount: 1,
    animationTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    animationDuration: "0.4s",
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
      "& $diagonalArrowUp": {
        transform: "translate(2px, -2px)",
      },
    },
  },
  diagonalArrowUp: {
    position: "relative",
    top: 3,
    right: 2,
    transition: "transform 0.3s ease-in-out",
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
    trackClick("button", "Copy Email", "Footer");

    const emailElement = document.querySelector("[data-email-copy]");
    if (emailElement) {
      emailElement.style.transform = "scale(0.98)";
      setTimeout(() => {
        emailElement.style.transform = "scale(1)";
      }, 100);
    }

    try {
      await navigator.clipboard.writeText("hello@julissa.zavala.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.log(err);
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
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

  const handleClick = () => {
    setShowHoverTooltip("none");
    copyText();
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
          onClick={() =>
            trackExternalLink(
              "https://github.com/julissa-zavala/portfolio-site",
              "Hand coded in React",
              "Footer"
            )
          }
        >
          Hand coded with React{" "}
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
            onClick={() =>
              trackExternalLink(
                "https://www.linkedin.com/in/julissazavala/",
                "LinkedIn",
                "Footer"
              )
            }
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
            onClick={handleClick}
            className={clsx(classes.footerItem, classes.footerEmail)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-email-copy
          >
            hello@julissa.zavala.com
          </a>
          <div
            className={clsx(classes.copiedAlert, classes.slideInUp)}
            style={{ display: ShowHoverTooltip }}
          >
            Copy
          </div>
          {copied && (
            <>
              <div
                className={clsx(
                  classes.copiedAlert,
                  classes.slideInUp,
                  classes.pulse
                )}
                style={{
                  backgroundColor: "#1E1E1E",
                }}
              >
                Copied!
              </div>
            </>
          )}
        </section>
        <span className={clsx(classes.footerItem, classes.footerCopyright)}>
          Julissa Zavala © 2025
        </span>
      </section>
    </footer>
  );
};

export default Footer;
