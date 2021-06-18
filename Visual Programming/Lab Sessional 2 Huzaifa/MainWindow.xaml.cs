using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Lab_Sessional_2_Huzaifa {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window {
        private List<Student> students = new List<Student>();

        public MainWindow() {
            InitializeComponent();
        }

        private void search(object sender, RoutedEventArgs e) {
            var studentsSearch = from student in students
                where student.Name == keyword.Text
                select student;
            dataGrid.ItemsSource = studentsSearch;
        }

        private void addRecord(object sender, RoutedEventArgs e) {
            students.Add(new Student() {
                Name = nameBox.Text, RegNumber = regBox.Text
            });
        }

        public class Student {
            public string Name;
            public string RegNumber;

        }
    }
}