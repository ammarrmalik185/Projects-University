using System;
using System.Windows;
using System.Windows.Media.Imaging;
using Microsoft.Win32;
using VP_Project.Scripts;

namespace VP_Project.UI.Settings_UI{
    public partial class account_settings_template{
        public account_settings_template(){
            InitializeComponent();
            initializeUI();
        }

        private void buttonClick_Account_Update(object sender, RoutedEventArgs e){
            bool changed = false;

            if (firstName.Text != ""){
                SessionInfo.CurrentUser.FirstName = firstName.Text;
                changed = true;
            }

            if (lastName.Text != ""){
                SessionInfo.CurrentUser.LastName = lastName.Text;
                changed = true;
            }

            if (email.Text != ""){
                if (CommonMethods.isEmailValid(email.Text)){
                    SessionInfo.CurrentUser.Email = email.Text;
                    changed = true;
                }
                else{
                    CommonMethods.showMessage("Email Invalid");
                }
            }

            if (changed){
                SessionInfo.CurrentUser.updateUserInfo();
                updateUI();
                CommonMethods.showMessage("Data Updated");
            }
        }

        private void buttonClick_Account_ChangePassword(object sender, RoutedEventArgs e){
            if (oldPassword.Password == SessionInfo.CurrentUser.Password){
                if (newPassword.Password == newPassword2.Password){
                    if (CommonMethods.isPasswordValid(newPassword.Password)){
                        SessionInfo.CurrentUser.Password = newPassword.Password;
                        SessionInfo.CurrentUser.updateUserInfo();
                    }
                    else{
                        CommonMethods.showMessage("New Password Invalid");
                    }
                }
                else{
                    CommonMethods.showMessage("Passwords do not match");
                }
            }else{
                CommonMethods.showMessage("Old Password Incorrect");
            }
        }

        private async void buttonClick_User_profilePicture(object sender, RoutedEventArgs e){
            var dialog = new OpenFileDialog{
                Filter =  "Image files (*.jpg, *.jpeg, *.jpe, *.jfif, *.png) | *.jpg; *.jpeg; *.jpe; *.jfif; *.png",
                Title = "Select Image"
            };
            if (dialog.ShowDialog() != true) return;
            try{
                progressOverlay.Visibility = Visibility.Visible;
                var uploadTask =
                    SessionInfo.DbManager.pushFile("users", SessionInfo.CurrentUser.Username, dialog.FileName);
                SessionInfo.CurrentUser.ProfilePicture = await uploadTask;
                SessionInfo.CurrentUser.updateUserInfo();
                progressOverlay.Visibility = Visibility.Collapsed;
                CommonMethods.showMessage("Profile Picture Updated");
                updateUI();
            }
            catch (Exception){
                CommonMethods.showMessage("File upload failed");
            }
        }

        private void initializeUI(){
            profilePicture.ImageSource = new BitmapImage(new Uri(SessionInfo.CurrentUser.ProfilePicture, UriKind.Absolute));
            DataContext = SessionInfo.CurrentUser;
        }

        private void updateUI(){
            profilePicture.ImageSource = new BitmapImage(new Uri(SessionInfo.CurrentUser.ProfilePicture, UriKind.Absolute));
            DataContext = SessionInfo.CurrentUser;
            try{
                SessionInfo.mainWindow.updateNavigationProfileViewer();
            }
            catch (Exception){
                //ignore
            }
        }

    }
}