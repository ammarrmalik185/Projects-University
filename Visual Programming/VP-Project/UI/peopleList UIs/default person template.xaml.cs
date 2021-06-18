using System.Windows;
using System.Windows.Controls;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;

namespace VP_Project.UI.PeopleList_UIs{
    public partial class default_person_template{
        public default_person_template(){
            InitializeComponent();
        }

        private void buttonClick_User_Follow(object sender, RoutedEventArgs e){
            if ((sender as Button)?.DataContext is User selectedUser) SessionInfo.CurrentUser.addFollow(selectedUser.Username);
            SessionInfo.mainWindow.allPeople.peopleViewer.Items.Refresh();
            SessionInfo.mainWindow.followedPeople.peopleViewer.Items.Refresh();
        }
        
        private void buttonClick_Post_DisplayUser(object sender, RoutedEventArgs e){
            if ((sender as Button)?.DataContext is User selectedUser) 
                SessionInfo.mainWindow.showProfile(selectedUser);
        }
    }
}