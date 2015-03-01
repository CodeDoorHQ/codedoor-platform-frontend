import React from 'react';
import CourseStore from '../stores/courseStore';
import CourseActions from '../actions/courseActions';

var CourseList = React.createClass({

  getInitialState() {
    return {
      courses : [],
      loading : false,
      error : false
    }
  },

  componentDidMount() {
    this.unsubscribe = CourseStore.listen(this.onStatusChange);
    CourseActions.loadCourses();
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    var courses = this.state.courses.map((item, itemIndex) => <li key={ item }>{ item }</li>),
      loading = this.state.loading ? <div>Loading...</div> : '';

    return (
      <div>
        { loading }
        <ul>
          {courses}
        </ul>
      </div>
    );
  }

});

module.exports = CourseList;
