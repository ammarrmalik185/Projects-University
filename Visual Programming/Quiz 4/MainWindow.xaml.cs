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

namespace Quiz_4 {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow{
        public MainWindow() {
            InitializeComponent();
            DataContext = new CommandContext();
        }

        private void MenuItem_OnClick(object sender, RoutedEventArgs e) {
            TextBox.Text += DateTime.Now.ToString();
        }
    }
    
    public class TimeKey: ICommand {
        
        public void Execute(object parameter) {
            foreach (Window window in Application.Current.Windows) {
                if (window.GetType() == typeof(MainWindow)) {
                    ((MainWindow) window).TextBox.Text += DateTime.Now;
                }
            }

        }

        public bool CanExecute(object parameter) {
            return true;
        }

        public event EventHandler CanExecuteChanged;
    }
    public class CommandContext {
        public ICommand TimeCommand => new TimeKey();
    }
}