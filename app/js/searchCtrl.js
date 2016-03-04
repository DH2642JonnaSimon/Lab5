// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.


  $scope.search = function(query) {
   $scope.status = "Searching...";
   Dinner.DishSearch.get({title_kw:query},function(data){
     $scope.dishes=data.Results;
     $scope.status = "Showing " + data.Results.length + " results";
   },function(data){
     $scope.status = "There was an error";
   });
 }

   $scope.selectSearch = function(query2, query) {
    Dinner.DishSearch.get({include_primarycat:query2},function(data){
     alert(query2 + " " + query);
     alert(data.Results.length);
     $scope.dishes=data.Results;
     $scope.status = "Showing " + data.Results.length + " results";
     console.log(data.Results);
   },function(data){
     $scope.status = "There was an error";
   });
 }
});