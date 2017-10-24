app.controller('ArticleCtrl', function($scope, $http, $routeParams, $timeout) {

  $scope.sendComment = function() {
    console.log($scope.currentArticle.comment);
  };
  
  $http({
    url: 'data/article/' + $routeParams.articleId + '.json',
    method: 'GET'
  }).success(function(response) {
    $scope.currentArticle = response;
    $scope.currentArticle.exist = true;
    $scope.currentArticle.commentToSend = '<p><br></p>';
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

  $timeout(function() {
    $('#input-focus')[0].focus();
  }, 10);

});