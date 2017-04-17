import angular from 'angular';

import {services} from './services/index.js';
import {components} from './components/index.js';

import '../style/app.css';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [services, components])
  .component('appContainer', {
      template: require('./appContainer.html'),
      controller: appContainerController
  });

function appContainerController(scoreStorage, keyCaptureService, $scope){
  let $ctrl = this;

  $ctrl.scores = [];

  $ctrl.$onInit = function () {
    $ctrl.scores = scoreStorage.getScores();
    window.onkeydown = (event) => {
      keyCaptureService.keyPressed(event);
      refreshList();
    }
  }

  function refreshList (){
    $scope.$apply(()=>{
      $ctrl.scores = scoreStorage.getScores();
    });
  }
}

export default MODULE_NAME;
