// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

	Dinner.Dish.get({id:$routeParams.dishId},function(data){
     	$scope.dish=data;
     	$scope.ingredients=data.Ingredients;
     	var pris = 0.00;
     	for (x in data.Ingredients){
     		pris += data.Ingredients[x].Quantity;
     		console.log(pris);
     	}
     	$scope.totalPrice = pris;
     	alert(data);
   			},function(data){
     	$scope.status = "There was an error";
   	});

	$scope.getNumberOfGuests = function() {
  		console.log("Nu är jag inne numFunc in DishC");
    	return Dinner.getNumberOfGuests();
  	}

});