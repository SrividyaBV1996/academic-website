import React, { useRef } from "react";

const Header = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const collapseNav = () => {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button ref={navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" onClick={() => collapseNav()} href="/">Home</a>
            <a className="nav-item nav-link" onClick={() => collapseNav()} href="#/bio">Bio</a>
            <a className="nav-item nav-link" onClick={() => collapseNav()} href="#/publications">Publications</a>
            <a className="nav-item nav-link" onClick={() => collapseNav()} href="#/talksAndSeminars">Talks/Seminars</a>
            <a className="nav-item nav-link" onClick={() => collapseNav()} href="#/teaching">Teaching</a>
            <a className="nav-item nav-link" onClick={() => collapseNav()}href="#/blogs">Blogs</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;