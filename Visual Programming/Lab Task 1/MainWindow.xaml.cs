using System.Windows;
using System.Linq;

namespace Lab_Task_1{
    public partial class MainWindow : Window{
        DatabaseModel database = new DatabaseModel();
        public MainWindow(){
            InitializeComponent();
            var studentNames = from student in database.Students select student.Name;
            selection.ItemsSource = studentNames.ToArray();
            DataGrid.ItemsSource = null;
        }
        
        private void Button_Click(object sender, RoutedEventArgs e){
            string name = selection.SelectedItem.ToString();
            var result = from entry in database.EnrolledIns
                         where entry.Student.Name == name
                         select new {
                             Student = entry.Student.Name,
                             Course = entry.Course.Title,
                             CreditHours = entry.Course.CreditHours,
                             Lab = entry.Course.hasLab,
                             Teacher = entry.Teacher.Name
                         };
            DataGrid.ItemsSource = result.ToList();
        }
    }
}
