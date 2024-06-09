var app = angular.module('todoApp', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.loggedIn = false;
    $scope.username = '';
    $scope.newTask = '';
    $scope.tasks = [];

    $scope.login = function() {
        if ($scope.username) {
            $scope.loggedIn = true;
        }
    };

    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({
                text: $scope.newTask,
                time: new Date(),
                completed: false
            });
            $scope.newTask = '';
        }
    };

    $scope.editTask = function(task) {
        var newText = prompt("Edit task:", task.text);
        if (newText !== null && newText.trim() !== "") {
            task.text = newText;
        }
    };

    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.toggleCompletion = function(task) {
        task.completed = !task.completed;
    };
}]);
