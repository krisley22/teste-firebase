(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('typeSpentService', typeSpentService);

  partyService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function partyService($firebaseArray, firebaseDataService) {

    var typeSpents = null;

    var service = {
      Party: Party,
      getPartiesByUser: getPartiesByUser,
      reset: reset
    };

    return service;

    ////////////



    function getTypeSpentByUser(uid) {
      if (!typeSpents) {
        typeSpents = $firebaseArray(firebaseDataService.users.child(uid).child('parties'));
      }
      return typeSpents;
    }

    function reset() {
      if (typeSpents) {
        typeSpents.$destroy();
        typeSpents = null;
      }
    }

  }

})();
