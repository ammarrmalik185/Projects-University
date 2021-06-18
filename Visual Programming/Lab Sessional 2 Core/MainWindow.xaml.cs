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

namespace Lab_Sessional_2_Core {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow {
        private List<Student> students = new List<Student>();
        public MainWindow() {
            InitializeComponent();
        }

        private void updateDataGrid() {
            var dataToDisplay = from std in students
                where std.Name.ToLower().Contains(query.Text.ToLower())
                select std;
            dataView.ItemsSource = dataToDisplay;
        }

        private void ButtonBase_OnClick(object sender, RoutedEventArgs e) {
            updateDataGrid();
        }
        
        private void ButtonBase_OnClick_Add(object sender, RoutedEventArgs e) {
            students.Add(new Student(stdName.Text, stdRegNo.Text));
            updateDataGrid();
            MessageBox.Show("Record Added!");
        }
    }

    public class Student {
        private string name;
        private string regNo;

        public Student(string name, string regNo) {
            this.name = name;
            this.regNo = regNo;
        }

        public string Name {
            get => name;
            set => name = value;
        }

        public string RegNo {
            get => regNo;
            set => regNo = value;
        }
    }
}