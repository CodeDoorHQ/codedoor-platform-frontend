import React from 'react';

var Course = React.createClass({

  getInitialState() {
    return {
      course : this.props.course,
      loading : false,
      error : false
    }
  },

  onStatusChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <li key={ this.props.course.description }><a href={ this.props.course.descriptionLink }>{ this.props.course.title }</a> by { this.props.course.platformId }</li>
    );
  }

});

module.exports = Course;
