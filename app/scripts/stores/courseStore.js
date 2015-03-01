import Reflux from 'reflux';
import CourseActions from '../actions/courseActions';

var CourseStore = Reflux.createStore({

  init() {
    this.courses = [];

    this.listenTo(CourseActions.loadCourses, this.loadCourses);
    this.listenTo(CourseActions.loadCoursesSuccess, this.loadCoursesSuccess);
    this.listenTo(CourseActions.loadCoursesError, this.loadCoursesError);
  },

  loadCourses() {
    this.trigger({
      loading: true
    });
  },

  loadCoursesSuccess(courses) {
    this.courses = courses;

    this.trigger({
      courses : this.courses,
      loading: false
    });
  },

  loadCoursesError(error) {
    this.trigger({
      error : error,
      loading: false
    });
  }

});

module.exports = CourseStore;
