(function() {

var app = angular.module('starter', ['ionic']);

var notes = [
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

function getNote(noteId) {

  for(var i = 0 ; i < notes.length ; i++) {
    if(notes[i].id === noteId) {
      return notes[i];
    }
  }
  return undefined ;
};

function updateNote(note) {

  for(var i = 0 ; i < notes.length ; i++) {
    if(notes[i].id === note.id) {
      notes[i] = note ;
      return ;
    }
  }
}

app.controller('ListCtrl', function($scope) {
  $scope.notes = notes ;
});

app.controller('EditCtrl', function($scope, $state) {
  $scope.note = angular.copy(getNote($state.params.noteId));

  $scope.save = function() {
    updateNote($scope.note);
    $state.go("list");
  }
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

}());