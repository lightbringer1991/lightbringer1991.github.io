import React from 'react';
import $ from 'jquery';
import 'jquery.easing';
import Navigation from '../Navigation';
import Map from '../Map';
import { PAGE_TOP, SECTION_ABOUT, SECTION_PROJECTS, SECTION_CONTACT } from '../../constants';
import '../../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../../../node_modules/font-awesome/scss/font-awesome.scss';
import './styles.scss';


class Main extends React.PureComponent {
  navigationOnclick = (menuContentId) => () => {
    $('html, body').animate({
      scrollTop: ($(`#${menuContentId}`).offset().top - 48),
    }, 1000, 'easeInOutExpo');
  };

  render() {
    const navigationProps = {
      homePageBtn: {
        text: 'Homepage',
        href: '#',
        onClick: this.navigationOnclick(PAGE_TOP),
      },
      menuItems: [
        {
          text: 'About',
          href: '#',
          onClick: this.navigationOnclick(SECTION_ABOUT),
        },
        {
          text: 'Projects',
          href: '#',
          onClick: this.navigationOnclick(SECTION_PROJECTS),
        },
        {
          text: 'Contact',
          href: '#',
          onClick: this.navigationOnclick(SECTION_CONTACT),
        },
      ],
    };

    return (
      <div>
        <Navigation {...navigationProps} />

        {/* Intro Header */}
        <header className="masthead">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h1 className="brand-heading">Tuan M. Nguyen</h1>
                  <p className="intro-text">
                    Fullstack Developer
                    <br />
                    Specialized in React, Angular, PHP
                  </p>
                  <a className="btn btn-circle" onClick={this.navigationOnclick(SECTION_ABOUT)}>
                    <i className="fa fa-angle-double-down animated" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id={SECTION_ABOUT} className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>About Tuan</h2>
                <p>
                  Graduated in Federation University, Bachelor of Information Technology with distinction,
                  I started working as a web developer since. Having worked as a freelancer helps me get familiar
                  with modern technologies, as well as honing my skills for existing ones.
                </p>
                <p>
                  I have developed websites using below technologies:<br />
                  <strong>Frontend</strong>: React, Angular, AngularJS, pure javascript/jQuery<br />
                  <strong>Backend</strong>: Express.js(Node), Laravel(PHP), Symfony(PHP), Zend Framework(PHP)
                </p>
                <p>
                  I also have experienced in Java, C++ and have developed softwares using them.<br />
                  Some of the examples can be seen in the Projects section below.
                </p>
                <a className="btn btn-circle" onClick={this.navigationOnclick(SECTION_PROJECTS)}>
                  <i className="fa fa-angle-double-down animated" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id={SECTION_PROJECTS} className="download-section content-section text-center">
          <div className="container">
            <div className="col-lg-8 mx-auto">
              <h2>Projects that I have participated in</h2>
              TBD
            </div>
            <a className="btn btn-circle" onClick={this.navigationOnclick(SECTION_CONTACT)}>
              <i className="fa fa-angle-double-down animated" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id={SECTION_CONTACT} className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact Tuan Nguyen</h2>
                <p>Feel free to leave me a message if you want to have something done.</p>
                <ul className="list-inline banner-social-buttons">
                  <li className="list-inline-item">
                    <a href="mailto:tuanmnguyen91@gmail.com?Subject=Hello%20Tuan" className="btn btn-default btn-lg" target="_top">
                      <i className="fa fa-google fa-fw" />
                      <span className="network-name">Email</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/lightbringer1991" className="btn btn-default btn-lg" target="_blank">
                      <i className="fa fa-github fa-fw" />
                      <span className="network-name">Github</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.linkedin.com/in/tuan-nguyen-bab67141" className="btn btn-default btn-lg" target="_blank">
                      <i className="fa fa-linkedin fa-fw" />
                      <span className="network-name">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <Map />

        {/* Footer Section */}
        <footer>
          <div className="container text-center">
            <p>Copyright &copy; Tuan Nguyen Showcase 2017</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
