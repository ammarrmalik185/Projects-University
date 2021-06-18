using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Quiz_6.Controllers{
    public class HomeController : Controller{
        public ActionResult Index(){
            return View();
        }

        public ActionResult About(){
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact(){
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult Calculate(string operation, int value1, int value2){
            float result = 0;
            switch (operation){
                case "add":
                    result = value1 + value2;
                    break;
                case "sub":
                    result = value1 - value2;
                    break;
                case "mul":
                    result = value1 * value2;
                    break;
                case "div":
                    result = value1 / value2;
                    break;
                case "mod":
                    result = value1 % value2;
                    break;
                case "pow":
                    result = (float) Math.Pow(value1, value2);
                    break;
            }

            ViewBag.result = result;

            return View();
        }
    }
}