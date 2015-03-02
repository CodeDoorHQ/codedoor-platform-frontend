import React from 'react';
import CourseStore from '../stores/courseStore';
import CourseActions from '../actions/courseActions';
import Course from './course.jsx';

var CourseList = React.createClass({

  getInitialState() {
    return CourseStore.getState();
  },

  componentDidMount() {
    CourseStore.listen(this.onStatusChange);
    CourseActions.loadCourses();
  },

  componentWillUnmount() {
    CourseStore.unlisten(this.onStatusChange);
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    var courses = this.state.courses.map((course, courseIndex) => <Course course={ course } />),
      loading = this.state.loading ? <div>Loading...</div> : '';

    return (
      <div>
        { loading }
        <ul>
          { courses }
        </ul>
      </div>
    );
  }

});

module.exports = CourseList;
