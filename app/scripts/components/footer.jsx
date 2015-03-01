import React from 'react';
import { Link } from 'react-router';

var Footer = React.createClass({

  render() {
    return (
      <footer className="text-cesnter">

        <div className="footer-top">
           <div className="container">
            <div className="row">
              <section className="col-md-3">
                <h4>CodeDoor.org</h4>
                <ul>
                  <li><Link to="about">About us</Link></li>
                  <li><a href="http://blog.codedoor.org">Blog</a></li>
                </ul>
              </section>
              <section className="col-md-3">
                <h4>Contribute</h4>
                <ul>
                  <li><a href="#">Become a student</a></li>
                  <li><a href="#">Become a tutor</a></li>
                </ul>
              </section>
              <section className="col-md-3">
                <h4>Learn</h4>
                <ul>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Certificates</a></li>
                </ul>
              </section>
              <section className="col-md-3">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Contribute</a></li>
                  <li><a href="#">Github</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>

          <div className="footer-bottom">
             <div className="container">
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6"> © Copyright 2015 by <a href="http://www.codedoor.org">CodeDoor.org</a></div>
                   <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                      <ul className="social social-icons-footer-bottom">
                         <li className="facebook"><a data-toggle="tooltip" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                         <li className="twitter"><a data-toggle="tooltip" title="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                         <li className="dribbble"><a data-toggle="tooltip" title="" data-original-title="Dribble"><i className="fa fa-dribbble"></i></a></li>
                         <li className="linkedin"><a data-toggle="tooltip" title="" data-original-title="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                         <li className="rss"><a data-toggle="tooltip" title="" data-original-title="Rss"><i className="fa fa-rss"></i></a></li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
      </footer>
    );
  }

});

module.exports = Footer;
