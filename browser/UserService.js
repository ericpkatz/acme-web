angular.module('app')
  .factory('UserService', function($http, $window, $rootScope){
    var _users = [];
    var _usersPromise;

    $rootScope.$on('User.create', function(ev, data){
      _users.push(data);
      $rootScope.$apply();
    });

    $rootScope.$on('User.destroy', function(ev, data){
      let idx;
      _users.forEach( (user, index)=> {
        if(user.id === data.id)
          idx = index;
      });
      if(idx !== undefined)
        _users.splice(idx, 1);
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
