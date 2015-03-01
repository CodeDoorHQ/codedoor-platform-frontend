import React from 'react';
import CourseList from '../components/courseList.jsx';

var Courses = React.createClass({

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList />
      </div>
    );
  }
  
});

module.exports = Courses;
