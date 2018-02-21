using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoApp.WebApi.Interfaces
{
    public interface ITaskRepository
    {
        IQueryable<ToDoApp.WebApi.Models.Task> GetTasks { get; }
        void AddTask(ToDoApp.WebApi.Models.Task task);
        void UpdateTask(ToDoApp.WebApi.Models.Task task);
        void DeleteDoneTasks();
        void DeleteAllTasks();       
    }
}
