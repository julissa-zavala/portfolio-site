import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  navTextLinkWrapper: {
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      "& $navTextLineThrough": {
        transform: "translateY(-50%) scaleX(1)",
      },
    },
  },
  navText: {
    fontFamily: "Roobert_Latin_Regular, Verdana, sans-serif",
    color: "#1E1E1E",
    fontSize: 14,
    lineHeight: "normal",
  },
  navTextLineThrough: {
    position: "absolute",
    width: "100%",
    height: 1,
    bottom: 1,
    left: 0,
    backgroundColor: "#1E1E1E",
    transform: "translateY(-50%) scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.15s ease-in-out",
  },
});

const HeaderNav = () => {
  const classes = useStyles();

  return (
    <nav role="navigation" className={classes.navContainer}>
      <Link to={"/"} className={classes.navTextLinkWrapper}>
        <div className={classes.navText}>JULISSA ZAVALA</div>
        <div className={classes.navTextLineThrough}></div>
      </Link>
      <Link to={"/info"} className={classes.navTextLinkWrapper}>
        <div className={classes.navText}>INFO</div>
        <div className={classes.navTextLineThrough}></div>
      </Link>
    </nav>
  );
};

export default HeaderNav;
