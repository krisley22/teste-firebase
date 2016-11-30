(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('controlSpentService', controlSpentService);

  controlSpentService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function controlSpentService($firebaseArray, firebaseDataService) {

    var controlSpents = null;

    var service = {
      ControlSpent: ControlSpent,
      getControlSpentsByUser: getControlSpentsByUser,
      reset: reset
    };

    return service;

    ////////////

    function ControlSpent() {
      this.concat = '';
      this.date = new Date().toJSON().slice(0,19);
      this.what = '';
      this.typeSpents = '';
      this.value = '';
      this.valueParcel = '';
      this.card = '',
      this.parcel = '';

    }

    function getControlSpentsByUser(uid) {
      if (!controlSpents) {
        controlSpents = $firebaseArray(firebaseDataService.users.child(uid).child('controlSpents'));
      }
      return controlSpents;
    }

    function reset() {
      if (controlSpents) {
        controlSpents.$destroy();
        controlSpents = null;
      }
    }

  }

})();
