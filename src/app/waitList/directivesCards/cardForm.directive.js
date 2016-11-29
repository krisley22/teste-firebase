(function() {
  'use strict';

  angular
    .module('app.waitList')
    .directive('gzCardForm', gzCardForm);

  function gzCardForm() {
    return {
      templateUrl: 'app/waitList/directivesCards/cardForm.html',
      restrict: 'E',
      controller: CardFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        cards: '='
      }
    };
  }

  CardFormController.$inject = ['cardService'];

  function CardFormController(cardService) {
    var vm = this;

    vm.newCard = new cardService.Card();
    vm.addCard = addCard;

    function addCard() {

      vm.cards.$add(vm.newCard);
      vm.newCard = new cardService.Card();
    }
  }

})();
