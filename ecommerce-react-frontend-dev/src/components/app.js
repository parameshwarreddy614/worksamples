import React, { Component } from 'react';
import Navigation from './navigation';
import {HashRouter} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
             <HashRouter>
            
          <Navigation></Navigation>

          </HashRouter>

      </div>
    );
  }
}
