app.controller('menuController', [
  '$scope',
  function ($scope) {
    $scope.model = {title: 'Our Menu from Mars'};
    $scope.changeMainDish = function (item) {
      $scope.model.mainDish = item;
    };
    $scope.$watch('model.mainDish', function (newValue, oldValue) {
      if(newValue) {
        console.log(newValue, oldValue);
      };
    });
  }
])