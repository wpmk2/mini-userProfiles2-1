var app = angular.module('userProfiles'); //wow

app.service('mainService', function($http) {

  this.getUsers = function() {
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    });
  };


});
