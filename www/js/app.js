var app = angular.module('starter', ['ionic'])

app.controller('ListCtrl', function($scope) {
  $scope.notes = [
    {
      title: 'First Notes',
      description: 'First Description'
    },
    {
      title: 'Second Notes',
      description: 'Second Description'
    }
  ] ;
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });
  $stateProvider.state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html'
  });
  $urlRouterProvider.otherwise('/list');
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
