const NavBar = () => {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="ROSA SHIFT home">
        ROSA
        <span>SHIFT</span>
      </a>
      <div className="nav-links">
        <a href="#collection">Collection</a>
        <a href="#lookbook">Lookbook</a>
      </div>
      <a className="nav-cta" href="#collection">
        Shop the edit
      </a>
    </nav>
  );
};

export default NavBar;
