import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'bootstrap';
import './styles.scss';


class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShrink: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      this.setState({
        isShrink: this.navigation && $(this.navigation).offset().top > 100,
      });
    });
  };

  render() {
    const { homePageBtn, menuItems } = this.props;
    const { isShrink } = this.state;
    let navClasses = 'navbar navbar-expand-lg navbar-light fixed-top';
    if (isShrink) {
      navClasses += ' navbar-shrink';
    }

    return (
      <nav id="main-nav" className={navClasses} ref={(ref) => this.navigation = ref}>
        <div className="container">
          <a
            className="navbar-brand js-scroll-trigger"
            href={homePageBtn.href}
            onClick={homePageBtn.onClick}
          >
            {homePageBtn.text}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.text}>
                  <a className="nav-link js-scroll-trigger" href={item.href} onClick={item.onClick}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const MENU_ITEM_PROPTYPE = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Navigation.propTypes = {
  homePageBtn: PropTypes.shape(MENU_ITEM_PROPTYPE).isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape(MENU_ITEM_PROPTYPE)),
};

export default Navigation;
