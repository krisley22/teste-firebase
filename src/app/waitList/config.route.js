(function() {
  'use strict';

  angular
    .module('app.waitList')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider.when('/waitlist', {
      templateUrl: 'app/waitList/waitList.html',
      controller: 'WaitListController',
      controllerAs: 'vm',
      resolve: {user: resolveUser}
    })
    .when('/cards', {
      templateUrl: 'app/waitList/cardList.html',
      controller: 'CardListController',
      controllerAs: 'vm',
      resolve: {user: resolveUser}
    })

    .when('/types', {
      templateUrl: 'app/waitList/type-spent.html',
      controller: 'TypeSpentController',
      controllerAs: 'vm',
      resolve: {user: resolveUser}
    })

    ;
  }

  resolveUser.$inject = ['authService'];

  function resolveUser(authService) {
    return authService.firebaseAuthObject.$requireSignIn();
  }

})();
