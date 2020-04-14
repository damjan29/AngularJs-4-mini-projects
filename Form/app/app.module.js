let app = angular.module("myApp", []);
app.controller("Cntrl", function ($scope, $http) {
    $http.get('names/price.json').then(function (response) {
        $scope.data = response.data
    })
    $scope.total = 0;
    $scope.myFunc = function (e) {
        if (!angular.element(e.target).hasClass('green')) {
            $scope.total += e.target.value;
        } else {
            $scope.total -= e.target.value;
        }

    }
})