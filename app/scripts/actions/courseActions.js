import Reflux from 'reflux';

var CourseActions = Reflux.createActions([
  'loadCourses',
  'loadCoursesSuccess',
  'loadCoursesError'
]);

CourseActions.loadCourses.preEmit = function(data) {
  $.get('https://codedoor-backend.herokuapp.com/courses').then(function(courses) {
    CourseActions.loadCoursesSuccess(courses);
  },
  function(err) {
    CourseActions.loadCoursesError(err);
  });
};

module.exports = CourseActions;
