using System.ComponentModel;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows;
using VP_Project.UI.customDialog_UIs;

namespace VP_Project.Scripts {
    public static class CommonMethods{
        public static void showAlert(string message){
            var alertDialog = new alert_dialog_template{messageShow ={Text = message}};
            alertDialog.Show();
        }

        public static void showMessage(string message){
            if (SessionInfo.mainWindow is null) return;
            SessionInfo.mainWindow.message.Content = message;
            SessionInfo.mainWindow.messageBox.Visibility = Visibility.Visible;
            var worker = new BackgroundWorker();
            if (worker.IsBusy) return;
            worker.DoWork += (sender, args) => {
                Thread.Sleep(3000);
            };
            worker.RunWorkerCompleted += (sender, args) => {
                SessionInfo.mainWindow.messageBox.Visibility = Visibility.Collapsed;
            };
            worker.RunWorkerAsync();
        }

        public static void showMessageLoginPage(string message){
            if (SessionInfo.loginWindow is null) return;
            SessionInfo.loginWindow.message.Content = message;
            SessionInfo.loginWindow.messageBox.Visibility = Visibility.Visible;
            var worker = new BackgroundWorker();
            if (worker.IsBusy) return;
            worker.DoWork += (sender, args) => {
                Thread.Sleep(3000);
            };
            worker.RunWorkerCompleted += (sender, args) => {
                SessionInfo.loginWindow.messageBox.Visibility = Visibility.Collapsed;
            };
            worker.RunWorkerAsync();

        }

        
        public static bool isPasswordValid(string password){
            return password.Length >= 6;
        }
        
        public static bool isEmailValid(string email){
            return email.Contains("@") && email.Contains(".");
            // const string validEmailPattern = @"^(?!\.)(""([^""\r\\]|\\[""\r\\])*""|"
            //                                  + @"([-a-z0-9!#$%&'+/=?^_`{|}~]|(?<!\.)\.))(?<!\.)"
            //                                  + @"@[a-z0-9][\w\.-][a-z0-9]\.[a-z][a-z\.][a-z]$";
            // return (new Regex(validEmailPattern)).IsMatch(email);
        }

    }
}