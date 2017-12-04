app.controller('menuController', [
  '$scope',
  function ($scope) {
    $scope.model = {title: 'Our Menu from Mars'};
    $scope.changeMainDish = function (name, price) {
      $scope.model.mainDish = {
        name: name,
        price: price
      };
    };
    $scope.$watch('model.mainDish', function (newValue, oldValue) {
      if(newValue) {
        console.log(newValue, oldValue);
      };
    });
  }
])