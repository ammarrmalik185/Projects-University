using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Quiz_6{
    public class RouteConfig{
        public static void RegisterRoutes(RouteCollection routes){
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new{controller = "Home", action = "Index", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Add",
                url: "standard/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home" , action = "Calculate", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Subtract",
                url: "standard/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home", action = "Calculate", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Multiply",
                url: "standard/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home", action = "Calculate", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Divide",
                url: "standard/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home", action = "Calculate", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Power",
                url: "scientific/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home", action = "Calculate", id = UrlParameter.Optional}
            );
            routes.MapRoute(
                name: "Modulus",
                url: "scientific/{operation}/{value1}/{value2}",
                defaults: new{controller = "Home" , action = "Calculate", id = UrlParameter.Optional}
            );
        }
    }
}