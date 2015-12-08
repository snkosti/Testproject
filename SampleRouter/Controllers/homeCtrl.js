

routingapp.controller('homeCtrl', ['$scope', 'friends', function ($scope, friends) {
    $scope.title = "Home";
    $scope.friends = friends;
    $scope.items = ['home', 'about', 'contact'];
    $scope.save = function ($http) {
        alert(JSON.stringify($scope.friends));
        $http.post('/api/friends', friends);
    }
}]);