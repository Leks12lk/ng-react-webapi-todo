using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDoApp.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // get base url to call server from Web.config and assign it's value to ViewBag
            string baseUrl = System.Configuration.ConfigurationManager.AppSettings["baseUrl"];
            ViewBag.BaseUrl = baseUrl;

            return View();
        }
       
    }
}