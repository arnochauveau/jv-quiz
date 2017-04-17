import angular from 'angular';
import {scoreStorage} from './ScoreStorage.js';
import {keyCaptureService} from './keyCaptureService.js';

export let services = angular
  .module('services',[])
  .service('scoreStorage', scoreStorage)
  .service('keyCaptureService',keyCaptureService)
  .name;
