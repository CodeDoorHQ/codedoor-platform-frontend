import React from 'react';
import { Link } from 'react-router';

var Footer = React.createClass({

  render() {
    return (
      <footer className="container text-center">
        <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked">
                  <li><Link to="about">About us</Link></li>
                  <li><a href="http://blog.codedoor.org">Blog</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Become a student</a></li>
                  <li><a href="#">Become a tutor</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Certificates</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
            <div className="row">
                <div className="col-lg-12">
                    <ul className="nav nav-pills nav-justified">
                        <li><a href="/">© 2015 CodeDoor.org</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
      </footer>
    );
  }

});

module.exports = Footer;
