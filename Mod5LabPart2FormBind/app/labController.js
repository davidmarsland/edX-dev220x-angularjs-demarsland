app.controller('labController', [
    '$scope',
    function ($scope) {
      $scope.reset = reset;
      reset();
      function reset() {
        $scope.model = {};
      }
    }
]);