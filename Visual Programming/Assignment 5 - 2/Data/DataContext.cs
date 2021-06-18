using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Assignment_5___2.Data
{
    public class DataContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public DataContext() : base("name=DataContext")
        {
        }

        public System.Data.Entity.DbSet<Assignment_5___2.Models.Assignment_5.Models.Employee> Employees { get; set; }

        public System.Data.Entity.DbSet<Assignment_5___2.Models.Assignment_5.Models.Department> Departments { get; set; }

        public System.Data.Entity.DbSet<Assignment_5___2.Models.Assignment_5.Models.Manages> Manages { get; set; }

        public System.Data.Entity.DbSet<Assignment_5___2.Models.Assignment_5.Models.Works_In> Works_In { get; set; }
    }
}
