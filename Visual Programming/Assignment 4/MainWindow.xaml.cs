using System.Linq;

namespace Assignment_4{
    public partial class MainWindow{
        private const string default_value = "None";
        private const string default_image = "default.jpg";

        public MainWindow(){
            InitializeComponent();
            DatabaseReference databaseReference = new DatabaseReference();
            var dataToDisplay = from employee in databaseReference.Employees
                                orderby employee.First_Name + " " + employee.Last_Name
                                select new {
                                    FullName = employee.First_Name + " " + employee.Last_Name,
                                    Designation = employee.Designation ?? default_value,
                                    PhoneNo = employee.Mobile ?? default_value,
                                    Telephone = employee.Telephone ?? default_value,
                                    Email = employee.Email ?? default_value,
                                    CompanyURL = employee.Company_URL ?? default_value,
                                    Image = "Image/" + (employee.Image ?? default_image)
                                };
            employeeListBox.ItemsSource = dataToDisplay.ToArray();
        }
    }
}
