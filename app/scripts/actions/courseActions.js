import alt from '../alt';

class CourseActions {
  constructor() {
    this.generateActions(
      'loadCoursesSuccess',
      'loadCoursesError'
    );
  }

  loadCourses(data) {
    $.get('https://codedoor-backend.herokuapp.com/courses').then((courses) => {
      this.actions.loadCoursesSuccess(courses);
    },
    (err) => {
      this.actions.loadCoursesError(err);
    });
  }
}

export default alt.createActions(CourseActions);
