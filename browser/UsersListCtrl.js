angular.module('app')
  .controller('UsersListCtrl', function($window, UserService, $scope){
    UserService
      .findAll()
      .then(function(users){
        $scope.users = users;
      })
      .catch(function(err){
        console.log(err);
      });
  
  });
