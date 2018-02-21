using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ToDoApp.WebApi.Interfaces;
using ToDoApp.WebApi.Models;

namespace ToDoApp.WebApi.Controllers
{
    public class TasksController : ApiController
    {
        private ITaskRepository repository;

        public TasksController(ITaskRepository repo) 
        {
            this.repository = repo;
        }

        /// <summary>
        /// Get all tasks.
        /// </summary>
        /// <returns>All tasks.</returns>
        public IEnumerable<Task> GetTasks()
        {
            var model = repository.GetTasks.ToList();
            return model;
        }

        /// <summary>
        /// Create a new task.
        /// </summary>
        /// <returns>All tasks and status code.</returns>
        public IHttpActionResult PostAddTask(Task task)
        {      
            
            repository.AddTask(task);
            var model = repository.GetTasks.ToList();
            return Ok(model);
        }

        /// <summary>
        /// Update task(update property IsDone).
        /// </summary>
        /// <returns>All tasks and status code.</returns>
        public IHttpActionResult PutUpdateTask(Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            repository.UpdateTask(task);
            var model = repository.GetTasks.ToList();
            return Ok(model);
        }


        /// <summary>
        /// Delete completed tasks.
        /// </summary>
        /// <returns>Status Code</returns>
        public IHttpActionResult DeleteDoneTasks() 
        {
            repository.DeleteDoneTasks();
            return Ok();
        }

        /// <summary>
        /// Delete all (completed and non-completed) tasks.
        /// </summary>
        /// <returns>Status Code</returns>
        [Route("api/tasks/deleteall")]
        public IHttpActionResult DeleteAllTasks()
        {
            repository.DeleteAllTasks();
            return Ok();
        }
    }
}
