
var routingapp = angular.module('routingapp', ['ui.router']);

routingapp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        //template:'home'
        templateUrl: 'Partials/home.html',
        controller: 'homeCtrl',
        resolve: {
            friends: ['$http', function ($http) {
                return $http.get('api/friends.json').then(function (response) {
                    return response.data;
                })
            }]
        }
    })
  .state('about', {
      url: '/about',
      //template:'home'
      templateUrl: 'Partials/about.html',
      controller: 'aboutCtrl'
  })
  .state('contact', {
      url: '/contact',
      templateUrl: 'Partials/contact.html'
  })
}]);