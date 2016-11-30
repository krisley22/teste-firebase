(function() {
  'use strict';

  angular
    .module('app.cardList')
    .controller('ControlSpentController', ControlSpentController);

  ControlSpentController.$inject = ['controlSpentService', 'user', '$scope'];

  function ControlSpentController(controlSpentService, user, $scope) {
    var vm = this;

    vm.controlSpents  = [{'name':'teste'}];
    $scope.teste = 'testeeeee';

    vm.controlSpents = controlSpentService.getControlSpentsByUser(user.uid);


    $scope.add = function() {

      vm.controlSpents.$add(vm.newControlSpent);
      vm.newControlSpent = new controlSpentService.ControlSpent();

    };

  $scope.remove =  function (obj) {
      vm.controlSpents.$remove(obj);
  };

  }

})();
