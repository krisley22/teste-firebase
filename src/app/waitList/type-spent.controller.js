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

    TypeSpentController.$inject = ['cardService', 'user', '$scope'];

    function TypeSpentController(cardService, user, $scope) {
      var vm = this;

        vm.typeSpents  = [{'name':'teste'}];
        $scope.teste = 'testeeeee';

        vm.cards = cardService.getCardsByUser(user.uid);


        $scope.add = function addCard() {

          vm.cards.$add(vm.newCard);
          vm.newCard = new cardService.Card();
        }
    }

  })();
