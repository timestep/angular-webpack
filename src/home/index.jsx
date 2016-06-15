import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.jsx';
import HomeController from './HomeController.jsx';

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
