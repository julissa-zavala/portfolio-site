const Footer = ({ containerStyles }) => {
  return (
    <footer className="footer-container" style={containerStyles}>
      <h4 className="footer-heading">Let's Connect! :)</h4>
      <section className="footer-links-copyright">
        <section>
          <a className="footer-item footer-linkedin">LINKEDIN</a>
          <span>/</span>
          <a className="footer-item footer-email">HELLO@JULISSA.ZAVALA.COM</a>
        </section>
        <span className="footer-item footer-copyright">
          Copyright © Julissa Zavala 2025
        </span>
      </section>
    </footer>
  );
};

export default Footer;
