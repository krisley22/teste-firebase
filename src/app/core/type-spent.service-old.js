(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('typeSpentService', typeSpentService);

  typeSpentService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function typeSpentService($firebaseArray, firebaseDataService) {

    var typeSpents = null;

    var service = {
      TypeSpent: TypeSpent,
      getTypeSpentsByUser: getTypeSpentsByUser,
      reset: reset
    };

    return service;

    ////////////

    function TypeSpent() {
      this.name = '';
      this.visible = true;

    }

    function getTypeSpentsByUser(uid) {
      if (!typeSpents) {
        typeSpents = $firebaseArray(firebaseDataService.users.child(uid).child('typeSpents'));
      }
      return cards;
    }

    function reset() {
      if (typeSpents) {
        typeSpents.$destroy();
        typeSpents = null;
      }
    }

  }

})();
