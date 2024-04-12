import React from "react";

export const Navigation = (props) => {
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ marginLeft: '0px' }}>
            <img src="/img/laathi-icon.png" alt="Laathi Logo" style={{ width: '110px', height: 'auto' }} />
          </a>


        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Blog
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li style={{paddingLeft: "2rem",paddingTop: "1rem"}}>
            <button className="btn btn-danger page-scroll" onClick={scrollToContact}>
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
