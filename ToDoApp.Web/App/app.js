
var ToDoApp = angular.module('ToDoApp', ['ngRoute']);

ToDoApp.config(function ($routeProvider) {
    $routeProvider

        // route for the page build with Angular only
        .when('/', {
            templateUrl: 'App/views/tasks.html',
            controller: 'tasksCtrl'
        })
        // route for the page build with Angular + React
        .when('/tasksreact', {
            templateUrl: 'App/views/tasksreact.html',
            controller: 'tasksCtrl'
        })
        .otherwise({ redirectTo: '/' });
});