(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('gzCardTable', gzCardTable);

  function gzCardTable() {
    return {
      templateUrl: 'app/waitList/directivesCards/cardTable.html',
      restrict: 'E',
      controller: CardTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        cards: '='
      }
    };
  }

  CardTableController.$inject = ['textMessageService'];

  function CardTableController(textMessageService) {
    var vm = this;

    vm.removeCard = removeCard;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;

    function removeCard(card) {
      vm.cards.$remove(card);
    }

    function sendTextMessage(card) {
      textMessageService.sendTextMessage(card, vm.cards);
    }

    function toggleDone(card) {
      vm.cards.$save(card);
    }
  }

})();
