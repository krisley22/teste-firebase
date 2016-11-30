(function() {
  'use strict';

  angular
    .module('app.cardList')
    .controller('TypeSpentController', TypeSpentController);

  TypeSpentController.$inject = ['typeSpentService', 'user', '$scope'];

  function TypeSpentController(typeSpentService, user, $scope) {
    var vm = this;

    vm.typeSpents  = [{'name':'teste'}];
    $scope.teste = 'testeeeee';

    vm.typeSpents = typeSpentService.getTypeSpentsByUser(user.uid);


    $scope.add = function addCard() {

      vm.typeSpents.$add(vm.newTypeSpent);
      vm.newTypeSpent = new typeSpentService.TypeSpent();

    };

  $scope.remove =  function (card) {
      vm.typeSpents.$remove(card);
  };

  }

})();
