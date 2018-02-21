using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ToDoApp.WebApi.Interfaces;
using ToDoApp.WebApi.Models;

namespace ToDoApp.WebApi.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private DataContext db = new DataContext();

        public IQueryable<Task> GetTasks
        {
            get { return db.Tasks; }
        }

        public void AddTask(Task task)
        {           
            db.Tasks.Add(task);
            db.SaveChanges();
        }

        public void UpdateTask(Task task)
        {            
            Task old = db.Tasks.Find(task.Id);
            if (old != null)
            {
                // redefine IsDone property
                old.IsDone = task.IsDone;
                db.SaveChanges();
            }           
        }

        public void DeleteDoneTasks()
        {
            var doneTasks = db.Tasks.Where(item => item.IsDone == true).ToList();

            foreach (var task in doneTasks)
            {
                var item = db.Tasks.Find(task.Id);
                if (item != null)
                {
                    db.Tasks.Remove(item);
                    db.SaveChanges();
                }
            }
            db.SaveChanges();
        }

        public void DeleteAllTasks()
        {
            var tasks = GetTasks.ToList();

            foreach (var task in tasks)
            {
                 db.Tasks.Remove(task);
                 db.SaveChanges();
               
            }
            db.SaveChanges();
        }

    }
}