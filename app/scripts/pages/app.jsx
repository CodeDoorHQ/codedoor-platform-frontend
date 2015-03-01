import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

var App = React.createClass({

  render() {
    return (
      <div id="wrapper">
        <Header />
        <div className="content">
          <RouteHandler/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = App;
