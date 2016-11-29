(function() {
  'use strict';

  angular
    .module('app.cardList')
    .controller('CardListController', CardListController);

  CardListController.$inject = ['cardService', 'user'];

  function CardListController(cardService, user) {
    var vm = this;

    vm.cards  = cardService.getCardsByUser(user.uid);
  }

})();
