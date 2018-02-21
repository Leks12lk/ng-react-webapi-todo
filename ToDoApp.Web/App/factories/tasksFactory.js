
var tasksFactory = function ($http, baseUrl) {

    // taken from Web.config base url to call server 
    var urlBase = baseUrl;

    var tasksFactory = {};
  
    tasksFactory.getTasks = function () {       
        return $http.get(urlBase);
    };   

    tasksFactory.addTask = function (task) {
        return $http.post(urlBase, task);
    };

    tasksFactory.updateTask = function (task) {
        return $http.put(urlBase, task)
    };

    tasksFactory.deleteMarked = function () {
        return $http.delete(urlBase);
    };

    tasksFactory.deleteAll = function () {
        // this route is define on server side with [RouteAttribute]
        return $http.delete(urlBase +'/deleteall');
    };  

    return tasksFactory;
}

ToDoApp.factory('tasksFactory', ['$http', 'baseUrl', tasksFactory]);

