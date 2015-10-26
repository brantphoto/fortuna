/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { htSubheaderWatch } from './htSubheaderWatch.directive';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';

angular.module('frontendz', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('htSubheaderWatch', htSubheaderWatch);
