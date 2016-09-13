angular.module('app', ['ui.router']);

angular.module('app')
  .config( ($stateProvider, $urlRouterProvider)=> {
    $stateProvider
      .state('home', {
        url: '/',
        template: 'Welcome'
      })
      .state('users', {
        url: '/users',
        templateUrl: '/templates/users.html',
        controller: 'UsersListCtrl'
      })

      $urlRouterProvider.otherwise('/');
  });
