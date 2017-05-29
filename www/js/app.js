// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // Set FullScreen
    ionic.Platform.showFullScreen(true);
  });
})

.controller('UniqueCtrl', function ($scope, $log, $timeout, $interval){

    // color, emoticon and title
    $scope.colors = [
        {
            color: '#fcdc05',
            face: ':-)',
            title: 'Happy'
        },{
            color: '#ff0000',
            face: ':-S',
            title: 'Mad'
        },{
            color: '#0000ff',
            face: ':-(',
            title: 'Sad'
        },{
            color: '#00ff00',
            face: ':-/',
            title: 'Disgust'
        },{
            color: '#660099',
            face: ':-O',
            title: 'Worry'
        }
    ];

    // random number
    $scope.getRandomSpan = function(){
        return Math.floor((Math.random()*4));
    }

    // color by default
    $scope.myMood = $scope.colors[0];

    // magic
    $scope.diego = function(){
        $log.info('Diego is actived');
        $interval(function(){
            $scope.myMood = $scope.colors[$scope.getRandomSpan()];
            $log.info($scope.myMood.title);
        }, 30000);
    }

    // set mood
    $scope.mood = function(mood){
        $timeout(function(){
            $scope.myMood = $scope.colors[mood];
            $log.info('Diego changed his mood to', $scope.colors[mood].title);
        }, 1000);
        $scope.diego();
    }

});
