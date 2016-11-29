/*angular.module('app.typeSpentList',[])



.controller('TypeSpentController', [,
                                  function() {



    $scope.typeSpents  = [{'name':'teste'}];//partyService.getTypeSpentByUser(user.uid);
  }


]);*/
(function() {
  'use strict';

  angular.module('app.typeSpentList', []);
})();

  (function() {
    'use strict';

    angular.module('app.typeSpentList')
      .controller('TypeSpentController', TypeSpentController);

    TypeSpentController.$inject = ['typeSpentService', 'user', '$scope'];

    function TypeSpentController(typeSpentService, user, $scope) {
      var vm = this;

        vm.typeSpents  = [{'name':'teste'}];
        $scope.teste = 'testeeeee';

        vm.typeSpents = typeSpentService.getCardsByUser(user.uid);


        $scope.add = function addCard() {

          vm.typeSpents.$add(vm.newTypeSpent);
          vm.newTypeSpent = new typeSpentService.TypeSpent();

        }
    }

  })();
