app.controller('labController', [
    '$scope',
    function ($scope) {
      $scope.reset = reset;
      reset();
      function reset() {
        $scope.model = {};
      }

      $scope.submit = submit;
      function submit(model) {
        $scope.model = model;
        alert('Submitted\n' + JSON.stringify(model));
      }
    }
]);