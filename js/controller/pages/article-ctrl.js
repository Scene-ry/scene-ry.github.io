app.controller('ArticleCtrl', function($scope, $http, $routeParams) {
  
  $http({
    url: 'data/article/' + $routeParams.articleId + '.json',
    method: 'GET'
  }).success(function(response) {
    $scope.title = response.title;
    $scope.info = response.info;
    $scope.content = response.content;
  }).error(function() {
    $scope.title = 'Article not found';
    $scope.info = '<p>No information</p>';
    $scope.content = '<p>The article with this id does not exist.</p>'
  }).finally(function() {
    document.title = $scope.title + ' - Excited!';
  });
});