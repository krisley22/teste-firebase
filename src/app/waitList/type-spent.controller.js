/*angular.module('app.typeSpentList',[])



.controller('TypeSpentController', [,
                                  function() {



    $scope.typeSpents  = [{'name':'teste'}];//partyService.getTypeSpentByUser(user.uid);
  }


]);*/


  (function() {
    'use strict';

    angular
      .module('app.typeSpentList')
      .controller('TypeSpentController', TypeSpentController);

    TypeSpentController.$inject = ['cardService', 'user'];

    function TypeSpentController(cardService, user) {
      var vm = this;

        vm.typeSpents  = [{'name':'teste'}];
    }

  })();
