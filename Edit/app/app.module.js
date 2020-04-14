let app = angular.module("myApp",[]);
app.controller("Cntrl",function($scope){
    $scope.edit = "Edit me."
    $scope.showMe = false;
    $scope.myFunc = function(){
        $scope.showMe = !$scope.showMe;
    }
})