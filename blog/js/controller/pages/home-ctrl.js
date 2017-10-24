app.controller('HomeCtrl', function($scope, $http) {

  document.title = 'Ex-cited!';

  $http({
    url: 'data/home.json',
    method: 'GET'
  }).success(function(response) {
    $scope.latestArticleList = response.latest;
    $scope.commentList = response.comments;
  });

  
});