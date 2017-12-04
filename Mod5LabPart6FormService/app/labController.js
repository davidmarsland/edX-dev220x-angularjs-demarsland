app.controller('labController', [
    '$scope', 'registration', 
    function ($scope, registration) {
      $scope.reset = reset;
      reset();
      function reset() {
        $scope.model = {
            username: 'foobar',
            password: null,
            name: 'Foo Bar',
            phone: 415551212,
            email: 'foo@bar.com',
            favorite: 'Margherita Pizza'  
        };
      }

      $scope.submit = submit;
      function submit(model) {
        registration.submit(model).$promise
          .then(function (response) {
            alert('success');
          },
          function (response) {
            alert('error:' + response.status + ' ' + response.data.error);
            console.log('error:' + response.status + ' ' + response.data.error);
            console.log(response);
          });
        alert('Submitted\n' + JSON.stringify(model));
      }
    }
]);