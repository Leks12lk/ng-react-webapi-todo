using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ToDoApp.WebApi.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }
        
        public bool IsDone { get; set; }

        public DateTime DateAdded { get; set; }

        public Task() 
        {
            IsDone = false;
            DateAdded = DateTime.Now;
        }
    }
}