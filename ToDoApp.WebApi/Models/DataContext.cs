using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ToDoApp.WebApi.Models
{
    // define the data context
    public class DataContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
    }
}