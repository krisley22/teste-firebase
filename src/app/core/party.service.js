(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('partyService', partyService);

  partyService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function partyService($firebaseArray, firebaseDataService) {

    var parties = null;
    var typeSpents = null;

    var service = {
      Party: Party,
      getPartiesByUser: getPartiesByUser,
      getTypeSpentByUser: getTypeSpentByUser,
      reset: reset
    };

    return service;

    ////////////

    function Party() {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
      this.phone2 = '';
      this.date = new Date().toJSON().slice(0,19);
    }

    function getPartiesByUser(uid) {
      if (!parties) {
        parties = $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
      }
      return parties;
    }

    function getTypeSpentByUser(uid) {
      if (!typeSpents) {
        typeSpents = $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
      }
      return typeSpents;
    }

    function reset() {
      if (parties) {
        parties.$destroy();
        parties = null;
      }
    }

  }

})();
