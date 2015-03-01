import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Dashboard from './pages/dashboard.jsx';
import Courses from './pages/courses.jsx';
import About from './pages/about.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="about" handler={ About } />
    <Route name="courses" handler={ Courses } />
    <Route name="dashboard" handler={ Dashboard } />
    <DefaultRoute handler={ Dashboard } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

module.exports = routes;
