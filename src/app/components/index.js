import angular from 'angular';

import {scoreList} from './scoreList/scoreList.component.js';

export let components = angular
 .module('components', [])
 .component('scoreList',scoreList)
 .name;
