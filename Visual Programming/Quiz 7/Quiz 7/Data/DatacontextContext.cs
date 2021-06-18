using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Quiz_7.Data
{
    public class DatacontextContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public DatacontextContext() : base("name=DatacontextContext")
        {
        }

        public System.Data.Entity.DbSet<Quiz_7.Models.Student> Students { get; set; }

        public System.Data.Entity.DbSet<Quiz_7.Models.Course> Courses { get; set; }

        public System.Data.Entity.DbSet<Quiz_7.Models.StudentCourse> StudentCourses { get; set; }
    }
}
