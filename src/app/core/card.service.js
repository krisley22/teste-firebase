(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('cardService', cardService);

  cardService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function cardService($firebaseArray, firebaseDataService) {

    var cards = null;

    var service = {
      Card: Card,
      getCardsByUser: getCardsByUser,
      reset: reset
    };

    return service;

    ////////////

    function Card() {
      this.name = '';
      this.visible = true;

    }

    function getCardsByUser(uid) {
      if (!cards) {
        cards = $firebaseArray(firebaseDataService.users.child(uid).child('cards'));
      }
      return cards;
    }

    function reset() {
      if (cards) {
        cards.$destroy();
        cards = null;
      }
    }

  }

})();
