using System;
using System.Windows;
using System.Linq;

namespace Lab_Assignment_4 {
    public partial class MainWindow{
        StudentDatabaseEntities databaseEntities = new StudentDatabaseEntities();
        public MainWindow() {
            InitializeComponent();
        }

        private void ButtonClick_Search_Students(object sender, RoutedEventArgs e) {
            var studentNameQuery = studentSearch_sName.Text;
            var studentRegQuery = studentSearch_sReg.Text;
            var result = from std in databaseEntities.Students
                         where std.name.Contains(studentNameQuery) && std.regno.Contains(studentRegQuery)
                         select new {
                             Student_Name = std.name,
                             Student_RegNo = std.regno,
                         };
            DataViewer.ItemsSource = result.ToArray();

        }

        private void ButtonClick_Search_Courses(object sender, RoutedEventArgs e) {
            var courseNameQuery = courseSearch_cName.Text;
            var courseCodeQuery = courseSearch_cCode.Text;
            var result = from crse in databaseEntities.Courses
                         where crse.name.Contains(courseNameQuery) && crse.code.Contains(courseCodeQuery)
                         select new {
                             Course_Name = crse.name,
                             Course_Code = crse.code,
                         };
            DataViewer.ItemsSource = result.ToArray();
        }

        private void ButtonClick_Query_AllStudentsCourses(object sender, RoutedEventArgs e) {
            var result = from std in databaseEntities.Students
                         join enrol in databaseEntities.Enrollments on std.Id equals enrol.studentId
                         join corse in databaseEntities.Courses on enrol.courseId equals corse.Id
                         select new {
                             Student_Name = std.name,
                             Student_RegNo = std.regno,
                             Course_Name = corse.name,
                             Course_Code = corse.code
                         };
            DataViewer.ItemsSource = result.ToArray();
        }

        private void ButtonClick_Query_StudentsWithoutCourses(object sender, RoutedEventArgs e) {
            var result = from std in databaseEntities.Students
                         where !(from enrol in databaseEntities.Enrollments select enrol.studentId).Contains(std.Id)
                         select new {
                             Student_Name = std.name,
                             Student_RegNo = std.regno,
                         };
            DataViewer.ItemsSource = result.ToArray();
        }

        private void ButtonClick_Query_CoursesWithoutStudents(object sender, RoutedEventArgs e) {
            var result = from crse in databaseEntities.Courses
                         where !(from enrol in databaseEntities.Enrollments select enrol.courseId).Contains(crse.Id)
                         select new {
                             Course_Name = crse.name,
                             Course_Code = crse.code,
                         };
            DataViewer.ItemsSource = result.ToArray();
        }

        private void ButtonClick_Add_Student(object sender, RoutedEventArgs e) {
            var studentName = studentAdd_sName.Text;
            var studentReg = studentAdd_sReg.Text;
            databaseEntities.Students.Add(new Student {
                name = studentName,
                regno = studentReg
            });
            databaseEntities.SaveChanges();
            studentAdd_sName.Text = "";
            studentAdd_sReg.Text = "";
        }

        private void ButtonClick_Add_Course(object sender, RoutedEventArgs e) {
            var courseName = courseAdd_cName.Text;
            var courseCode = courseAdd_cCode.Text;
            databaseEntities.Courses.Add(new Course {
                name = courseName,
                code = courseCode
            });
            databaseEntities.SaveChanges();
            courseAdd_cName.Text = "";
            courseAdd_cCode.Text = "";
;        }

        private void ButtonClick_Add_Enrolment(object sender, RoutedEventArgs e) {
            var studentReg = enrolmentAdd_sReg.Text;
            var courseCode = enrolmentAdd_cCode.Text;

            int studentId;
            int courseId;

            try {
                studentId = (from std in databaseEntities.Students where std.regno == studentReg select std.Id).ToArray()[0];
            } catch (IndexOutOfRangeException ex) {
                MessageBox.Show("Student does not exist, cannot enter record");
                return;
            }

            try {
                courseId = (from crse in databaseEntities.Courses where crse.code == courseCode select crse.Id).ToArray()[0];
            } catch (IndexOutOfRangeException ex) {
                MessageBox.Show("Course does not exist, cannot enter record");
                return;
            }

            databaseEntities.Enrollments.Add(new Enrollment {
                studentId = studentId,
                courseId = courseId
            });
            databaseEntities.SaveChanges();

            enrolmentAdd_cCode.Text = "";
            enrolmentAdd_sReg.Text = "";

        }
    }
}
