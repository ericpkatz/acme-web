angular.module('app')
  .factory('UserService', function($http, $window){
    var _users = [];
    var _usersPromise;

    return {
      findAll: function(){
        if(_usersPromise){
          return _usersPromise;
        }
        _usersPromise = $http.get($window.API_URL + '/api/users')
                          .then(function(result){
                            angular.copy(result.data, _users);
                            return _users;
                          });
        return _usersPromise;
      }
    };
  
  });
