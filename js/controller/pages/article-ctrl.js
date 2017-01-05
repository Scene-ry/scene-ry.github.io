app.controller('ArticleCtrl', function($scope, $http, $routeParams, $timeout) {

  $scope.comment = '';

  $scope.sendComment = function() {
    console.log($scope.comment);
  };
  
  $http({
    url: 'data/article/' + $routeParams.articleId + '.json',
    method: 'GET'
  }).success(function(response) {
    $scope.currentArticle = response;
    $scope.currentArticle.exist = true;
  }).error(function() {
    $scope.currentArticle = {
      title: 'Article not found',
      info: 'No information',
      content: '<p>The article with this id does not exist.</p>',
      exist: false
    };
  }).finally(function() {
    document.title = $scope.currentArticle.title + ' - Excited!';
  });

});