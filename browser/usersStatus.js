angular.module('app')
  .directive('usersStatus', function(){

    return {
      template: '<div class="well">There are {{ users.length }} users.</div>',
      controller: function(UserService, $scope){
        UserService.findAll()
          .then(function(users){
            $scope.users = users;
          });
      }
    };
  
  });
