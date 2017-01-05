var app = angular.module('sceBlog', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .when('/article/:articleId', {
      templateUrl: 'templates/article.html',
      controller: 'ArticleCtrl'
    })
    .when('/add-article', {
      templateUrl: 'templates/edit-article.html',
      controller: 'EditArticleCtrl'
    })
    .when('/edit-article/:articleId', {
      templateUrl: 'templates/edit-article.html',
      controller: 'EditArticleCtrl'
    })
    .otherwise({
      redirectTo:'/'
    });
}).directive('elemReady', function($parse) {
  return {
    restrict: 'A',
    link: function($scope, elem, attrs) {    
      elem.ready(function() {
        $scope.$apply(function() {
          var func = $parse(attrs.elemReady);
          func($scope);
        });
      });
    }
  }
}).directive('contenteditable', function() {
  return {
    restrict: 'A' ,
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      // 初始化 编辑器内容
      if (!ngModel) {
        return;
      } // do nothing if no ng-model
      // Specify how UI should be updated
      ngModel.$render = function() {
        element.html(ngModel.$viewValue || '');
      };
      // Listen for change events to enable binding
      element.on('blur keyup change', function() {
        scope.$apply(readViewText);
      });
      // No need to initialize, AngularJS will initialize the text based on ng-model attribute
      // Write data to the model
      function readViewText() {
        var html = element.html();
        // When we clear the content editable the browser leaves a <br> behind
        // If strip-br attribute is provided then we strip this out
        if (attrs.stripBr && html === '<br>') {
          html = '';
        }
        ngModel.$setViewValue(html);
      }

      //wangEditor.config.printLog = false;

      // 创建编辑器
      var editor = new wangEditor(element);
      editor.config.menus = [
        'source',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontsize',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'video',
        'insertcode',
        '|',
        'undo',
        'redo',
        //'fullscreen'
      ];
      editor.create();
    }
  };
}).run(function($rootScope, $window) {
  $rootScope.$on('$locationChangeStart', function(event, next, current) {
    $window.scroll(0, 0);
  });
});
