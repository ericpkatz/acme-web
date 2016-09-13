angular.module('app')
  .factory('UserService', function($http, $window){

    return {
      findAll: function(){
        return (
            $http
              .get($window.API_URL + '/api/users')
              .then(function(result){
                return result.data;
              })
        );
      }
    };
  
  });
