let app = angular.module("myApp",[]);
app.controller("Cntrl",function($scope,$http){
 $http.get('search.json').then(function(response) {
     $scope.names = response.data
     })

})