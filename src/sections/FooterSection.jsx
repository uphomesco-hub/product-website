const FooterSection = () => {
  return (
    <section className="footer-section">
      <img
        src={`${import.meta.env.BASE_URL}fashion/03-rose-knit-dress.jpg`}
        alt="Model wearing the deep-rose Rose Arc Knit dress"
        className="footer-image"
        width="900"
        height="1500"
        loading="lazy"
      />
      <div className="footer-scrim" />

      <div className="footer-content">
        <div className="footer-headline">
          <p>ROSA SHIFT</p>
          <h1>Make your entrance.</h1>
        </div>

        <div className="footer-actions">
          <a className="footer-button" href="#collection">
            Shop the edit
          </a>
          <a href="mailto:studio@example.com">studio@example.com</a>
        </div>

        <div className="copyright-box">
          <p>Concept fashion storefront. Mock products and pricing.</p>
          <p>© 2026 ROSA SHIFT</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
