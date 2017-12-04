app.controller('pizzaController', [
  '$scope',
  function ($scope) {
    $scope.model = {
      title: 'Pizza Builder',
      availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage',
        'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'
      ],
      toppings: [],
      showToppingAdded: false,
      showNoResults: false
    };
    $scope.addTopping = function (topping) {
      if (topping) {
        $scope.model.toppings.push(topping);
        $scope.model.search = null;
        $scope.model.showToppingAdded = true;
        $scope.filteredToppings = [];
      }
    }
  }
]);