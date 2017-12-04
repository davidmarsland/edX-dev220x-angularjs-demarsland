app.controller('labController', [
    '$scope', 'registration', 
    function ($scope, registration) {
      $scope.reset = reset;
      reset();
      function reset() {
        $scope.model = {
            username: 'foobar',
            password: 'secret',
            name: 'Foo Bar',
            phone: null,
            email: '',
            favorite: 'Margherita Pizza'  
        };
      }

      $scope.submit = submit;
      function submit(model) {
        registration.submit(model).$promise
          .then(function (response) {
            console.log('success token: ' + response.token);
            $scope.token = response.token;
            reset();
          },
          function (response) {
            alert('error:' + response.status + ' ' + response.data.error);
            console.log('error:' + response.status + ' ' + response.data.error);
            console.log(response);
          });
        // alert('Submitted\n' + JSON.stringify(model));
      }
    }
]);