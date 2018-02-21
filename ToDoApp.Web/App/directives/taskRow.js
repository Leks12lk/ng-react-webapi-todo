
//create a directive including React component

ToDoApp.directive('taskRow', function () {
    return {
        restrict: 'E',
        scope: {
            task: '=',
            updateTask: '&'
        },
        link: function (scope, el, attrs) {
            scope.$watch('task', function (newValue, oldValue) {
                var MyComponent = React.createFactory(TASKCOMPONENT);
                ReactDOM.render(
                        MyComponent({ task: newValue, updateTask: scope.updateTask }),
                        el[0]
                );
            })
        }
    }
});

