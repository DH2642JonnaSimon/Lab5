// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

Dinner.DishSearch.get({title_kw:'chicken'});

  $scope.setNumberOfGuest = function(number){
  	console.log("Set number of guests - controller");
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
  	console.log("Get number of guests - controller");
    return Dinner.getNumberOfGuests();
  }


    $scope.getMenu = function(){
      $scope.menu = Dinner.menu;
      console.log($scope.menu);
      var pris = 0.00;
      $scope.prices = [];
      $scope.prices = Dinner.getDishPrices();
    }


  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});