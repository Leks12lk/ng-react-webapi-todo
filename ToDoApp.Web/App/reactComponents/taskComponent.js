
var TASKCOMPONENT = React.createClass({
    displayName: 'TASKCOMPONENT',

    // get task.IsDone prop and assign it to state
    getInitialState: function () {
        return {
            checked: this.props.task.IsDone
        };
    },

    render: function () {
        var component = this;
        var task = this.props.task;
        var updateTask = this.props.updateTask;
        var isChecked = this.state.checked;

        // function to handle checkbox change event
        function checkHandler() {
            console.log(task.IsDone);
            if (isChecked) {
                task.IsDone = false;
            }
            else {
                task.IsDone = true;
            }
            // trigger angular function to call server
            updateTask(task);
        }

        return (
          React.DOM.p(null, React.DOM.input({ type: 'checkbox', checked: this.state.checked, onChange: checkHandler }),
            React.DOM.span(null, this.props.task.Title))

        );
    }

});