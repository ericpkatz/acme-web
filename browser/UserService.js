angular.module('app')
  .factory('UserService', function($http, $window, $rootScope){
    var _users = [];
    var _usersPromise;

    $rootScope.$on('User.create', function(ev, data){
      _users.push(data);
      console.log(data);
      $rootScope.$apply();
    });

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
