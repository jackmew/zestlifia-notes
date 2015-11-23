var app = angular.module('starter', ['ionic'])

app.controller('ListCtrl', function($scope) {
  $scope.notes = [
    {
      id: '1',
      title: 'First Notes',
      description: 'First Description'
    },
    { 
      id: '2',
      title: 'Second Notes',
      description: 'Second Description'
    }
  ] ;
});

app.controller('EditCtrl', function($scope, $state) {
  $scope.noteId = $state.params.noteId ;
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });
  $stateProvider.state('edit', {
    url: '/edit/:noteId',
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
