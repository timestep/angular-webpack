import * as angular from 'angular';

import home from './home/index.jsx';
import uirouter from 'angular-ui-router';

import routing from './app.config.jsx';

angular.module('webpack', [uirouter, home])
  .config(routing);
