angular.module('app.type-spent.service' ,[])




.factory('typeSpentService',
//.factory('typeSpentService', [ '$firebaseArray', 'firebaseDataService',


  function partyService() {
//    function partyService($firebaseArray, firebaseDataService) {

    var typeSpents = null;

    var service = {

    };

    function getTypeSpentByUser(uid) {
      if (!typeSpents) {
        typeSpents =  [{name:'tes'}];//$firebaseArray(firebaseDataService.users.child(uid).child('cards'));
      }
      return typeSpents;
    }

    return service;


  }

);
