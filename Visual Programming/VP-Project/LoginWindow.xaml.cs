using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Windows;
using System.Windows.Input;
using MongoDB.Bson;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;

namespace VP_Project {
    
    public partial class LoginWindow {
        public LoginWindow() {
            InitializeComponent();
            SessionInfo.loginWindow = this;
            getCredentialsFromFile();
            SessionInfo.DbManager = new DatabaseManager();
            SessionInfo.DbManager.connectToDatabase();
        }
        
        // Action listener for login button
        private void ButtonClick_Action_Login(object sender, RoutedEventArgs e) {
            progressBarText.Content = "Logging in";
            progressOverlay.Visibility = Visibility.Visible;

            var bgWorkerReply = new string[2];
            var loginArguments = new []{
                login_uName.Text,
                login_password.Password
            };

            // Getting the user data from database (null if not available)
            var worker = new BackgroundWorker();
            worker.DoWork += (o, args) => {
                BsonDocument userData;
                try{
                    userData = SessionInfo.DbManager.getDocument("Users", "username", loginArguments[0]);
                }
                catch (TimeoutException){
                    bgWorkerReply[1] = "Timed out while connecting";
                    return;
                }
            
                if (!(userData is null)) {
                    if (userData["password"] == loginArguments[1]) {
                        var user = new User();
                        user.getUserFromBson(userData);
                        SessionInfo.CurrentUser = user;
                        bgWorkerReply[0] = "success";
                    }else {
                        bgWorkerReply[1] = "Incorrect Password";
                    }
                }else {
                    bgWorkerReply[1] = "User does not exist";
                }
            };
            worker.RunWorkerCompleted += (o, args) => {
                if (bgWorkerReply[0] == "success"){
                    saveCredentialsToFile();
                    NavigateToMainPage();
                }
                else{
                    CommonMethods.showMessageLoginPage(bgWorkerReply[1]);
                }
                progressOverlay.Visibility = Visibility.Collapsed;

            };
            worker.RunWorkerAsync();
        }
        
        // Action listener for signup button
        private void ButtonClick_Action_Signup(object sender, RoutedEventArgs e){
            progressOverlay.Visibility = Visibility.Visible;
            progressBarText.Content = "Signing Up";

            var bgWorkerReply = new string[2];
            var signupArguments = new []{
                signup_uName.Text,
                signup_email.Text,
                signup_fName.Text,
                signup_lName.Text,
                signup_password.Password,
                signup_password2.Password
            };
            
            
            var worker = new BackgroundWorker();
            worker.DoWork += (o, args) => {
                if (signupArguments[4] != signupArguments[5]){
                    bgWorkerReply[1] = "Passwords do not match";
                    return;
                }
                if (signupArguments[0] == ""){
                    bgWorkerReply[1] = "Username cannot be empty";
                    return;
                }
                if (!CommonMethods.isEmailValid(signupArguments[1])){
                    bgWorkerReply[1] = "Invalid Email";
                    return;
                }
                if (!CommonMethods.isPasswordValid(signupArguments[4])){
                    bgWorkerReply[1] = "Invalid Password";
                    return;
                }
                if (SessionInfo.DbManager.checkForUser(signupArguments[0])){
                    bgWorkerReply[1] = "Username taken";
                    return;
                }
                var user = new User {
                    Username = signupArguments[0],
                    Email = signupArguments[1],
                    FirstName = signupArguments[2],
                    LastName = signupArguments[3],
                    Password = signupArguments[4]
                };
                try {
                    user.addUserToDatabase();
                    SessionInfo.CurrentUser = user;
                    bgWorkerReply[0] = "success";
                }
                catch (Exception ex) {
                    bgWorkerReply[1] = "Unable to create user: " + ex.Message;
                    
                }
            };
            worker.RunWorkerCompleted += (o, args) => {
                if (bgWorkerReply[0] == "success"){
                    NavigateToMainPage();
                }
                else{
                    CommonMethods.showMessageLoginPage(bgWorkerReply[1]);
                }
                progressOverlay.Visibility = Visibility.Collapsed;
            };
            worker.RunWorkerAsync();
        }

        // Go to MainWindow.xaml
        private void NavigateToMainPage() {
            var mainWindow = new MainWindow{WindowState = WindowState};
            mainWindow.Show();
            Close();
        }

        // Get credentials saved in the "remember.txt" file (if any) and add them to the login text boxes
        private void getCredentialsFromFile() {
            try {
                if (!File.Exists("remember.txt"))
                    return;
                var lines = File.ReadAllLines(Path.Combine(Environment.CurrentDirectory, "remember.txt"));
                if (lines[0] == "") return;
                string[] splittingStrings = {"<Sep>"};
                login_remember.IsChecked = true;
                var split = lines[0].Split(splittingStrings, StringSplitOptions.RemoveEmptyEntries);
                login_uName.Text = split[0];
                login_password.Password = split[1];
            }
            catch (Exception e) {
                CommonMethods.showAlert(e.Message);
            }
        }
        
        // Save credentials to the "remember.txt"
        private void saveCredentialsToFile() {
            try {
                var fs = File.Create(Path.Combine(Environment.CurrentDirectory, "remember.txt"));
                var sr = new StreamWriter(fs);
                if (login_remember.IsChecked != null && login_remember.IsChecked.Value) {
                    sr.WriteLine($"{SessionInfo.CurrentUser.Username}<Sep>{SessionInfo.CurrentUser.Password}");
                }
                else {
                    sr.WriteLine("");
                }
                sr.Close();
            }
            catch (Exception e) {
                CommonMethods.showAlert(e.Message);
            }
        }
        
        // Action listener so that the top buttons worked and window is draggable
        protected override void OnMouseLeftButtonDown(MouseButtonEventArgs e) {
            base.OnMouseLeftButtonDown(e);
            DragMove();
        }
        private void buttonClick_Function_CloseWindow(object sender, RoutedEventArgs e) {
            Application.Current.Shutdown();
        }
        private void buttonClick_Function_MaximizeWindow(object sender, RoutedEventArgs e) {
            WindowState = WindowState != WindowState.Maximized ? WindowState.Maximized : WindowState.Normal;
        }
        private void buttonClick_Function_MinimizeWindow(object sender, RoutedEventArgs e) {
            WindowState = WindowState.Minimized;
        }
    }
}