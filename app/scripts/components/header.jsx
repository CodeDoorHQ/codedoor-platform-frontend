import React from 'react';
import { Link } from 'react-router';

var Header = React.createClass({

  render() {
    return (
      <header className="clearfix">
        <Link to="dashboard">CodeDoor.org</Link>

        <nav className="clearfix">
          <div className="nav-item"><Link to="courses">Courses</Link></div>
          <div className="nav-item"><Link to="tutors">Tutors</Link></div>
          <div className="nav-item"><Link to="about">About</Link></div>
        </nav>
      </header>
    );
  }

});

module.exports = Header;
