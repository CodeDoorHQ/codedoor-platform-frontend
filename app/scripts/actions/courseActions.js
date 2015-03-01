import Reflux from 'reflux';

var CourseActions = Reflux.createActions([
  'loadCourses',
  'loadCoursesSuccess',
  'loadCoursesError'
]);

CourseActions.loadCourses.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(function(){
    var courses = ['Codecademy', 'Khan Academy', 'Codeschool'];
    CourseActions.loadCoursesSuccess(courses);

    // on error
    // CourseActions.loadCoursesError('an error occured');
  },500);
};

module.exports = CourseActions;
