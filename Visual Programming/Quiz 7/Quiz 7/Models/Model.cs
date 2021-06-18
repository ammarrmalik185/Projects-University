using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Quiz_7.Models
{
    public class Course
    {
        public int ID { get; set; }
        public string code { get; set; }
        public string name { get; set; }
    }
    public class Student
    {
        public int ID { get; set; }
        public string name { get; set; }
        public string regNo { get; set; }
    }
    public class StudentCourse
    {
        public int ID { get; set; }
        public int studentId { get; set; }
        public virtual Student studentRef { get; set; }
        public int courseId { get; set; }
        public virtual Course courseRef { get; set; }
    }
}