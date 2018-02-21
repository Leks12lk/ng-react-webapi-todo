
var tasksCtrl = function ($http, $scope, tasksFactory) {
    // array of tasks
    $scope.tasks;

    // value from input to be taken from UI
    $scope.inputTask;

    // get not completed tasks count
    $scope.getNotCompletedTasksCount = function () {
        var notCompleted = [];
        angular.forEach($scope.tasks, function (x) {
            if (!x.IsDone) notCompleted.push(x);
        });
        return notCompleted.length == 1 ? notCompleted.length + " task" : notCompleted.length + " tasks";
    };

    // get all tasks
    var getTasks =  function() {
        tasksFactory.getTasks()
            .then(function (response) {
                $scope.tasks = response.data;
            }, function (error) {
                $scope.status = 'Unable to load tasks data: ' + error.message;
                alert($scope.status);
            });
    }
    getTasks();

    // add task
    $scope.addTask = function (inputTitle) {       
            var task = {};
            task.Title = inputTitle;            
            tasksFactory.addTask(task)
                .then(function (response) {                    
                    $scope.tasks = response.data;
                    $scope.inputTitle = '';
                }, function (error) {
                    $scope.status = 'Unable to add task: ' + error.message;
                    alert($scope.status);
                });        
    };

    // update task - to check and uncheck checkbox
    $scope.updateTask = function (task) {
        tasksFactory.updateTask(task)
            .then(function (response) {                
                $scope.tasks = response.data;
            }, function (error) {
                $scope.status = 'Unable to update task: ' + error.message;
                alert($scope.status);
            });
    };
    
    // delete marked tasks (tasks which are done)
    $scope.deleteMarked = function () {
        tasksFactory.deleteMarked()
        .then(function (response) {
           
        }, function (error) {
            $scope.status = 'Unable to delete marked tasks: ' + error.message;
            alert($scope.status);
        });
        //display only tasks which were not marked as done
        var oldList = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldList, function (x) {
            if (!x.IsDone) $scope.tasks.push(x);
        });
    };

    // delete all tasks (done and not completed)
    $scope.deleteAll = function () {
        tasksFactory.deleteAll()
       .then(function (response) {          
           $scope.tasks = [];          
       }, function (error) {
           $scope.status = 'Unable to delete all tasks: ' + error.message;
           alert($scope.status);
       });
    } 
};

ToDoApp.controller('tasksCtrl', ['$http', '$scope', 'tasksFactory', tasksCtrl]);