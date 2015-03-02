import alt from '../alt';
import CourseActions from '../actions/courseActions';

class CourseStore {

  constructor() {
    this.courses = [];
    this.loading = false;
    this.error = null;

    this.bindListeners({
      loadCourses: CourseActions.loadCourses,
      loadCoursesSuccess: CourseActions.loadCoursesSuccess,
      loadCoursesError: CourseActions.loadCoursesError
    });
  }

  loadCourses() {
    loading: true
  }

  loadCoursesSuccess(courses) {
    this.courses = courses;
    this.loading = false
  }

  loadCoursesError(error) {
    this.error = error;
    this.loading = false;
  }

}

export default alt.createStore(CourseStore, 'CourseStore');
