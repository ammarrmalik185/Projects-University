using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using System.Windows.Media.Imaging;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;
using VP_Project.Scripts.Enums;
using VP_Project.UI;

namespace VP_Project {
    public partial class MainWindow{
        private Post[] lastPosts;
        private List<User> lastUsers;
        private User lastUser;
        
        public MainWindow() {
            InitializeComponent();
            SessionInfo.mainWindow = this;
            if (SessionInfo.CurrentUser == null) {
                navigateToLoginPage();
            }
            updateNavigationProfileViewer();
            attachActionListeners();
        }

        private void navigateToLoginPage() {
            LoginWindow loginWindow = new LoginWindow{WindowState = WindowState};
            loginWindow.Show();
            Close();
        }

        private void showNewsFeed(){
            var postsDatabase = SessionInfo.DbManager.getDocuments("Posts");
            var posts = new List<Post>();
            foreach (var databasePost in postsDatabase){
                Post post = new Post();
                post.getPostFromBson(databasePost);
                posts.Add(post);
            }

            var result = from post in posts
                where (post.Title + post.Description + post.PostCreator.Username).Contains(newsFeed.postSearchBar.Text)
                where SessionInfo.CurrentUser.Follows.Contains(post.PostCreator.Username)
                select post;
            lastPosts = result.ToArray();
            newsFeed.postViewer.ItemsSource = lastPosts;
        }

        private void showAllPosts(){
            var postsDatabase = SessionInfo.DbManager.getDocuments("Posts");
            var posts = new List<Post>();
            foreach (var databasePost in postsDatabase){
                Post post = new Post();
                post.getPostFromBson(databasePost);
                posts.Add(post);
            }

            var result = from post in posts
                where (post.Title + post.Description + post.PostCreator.Username).Contains(allPosts.postSearchBar.Text)
                select post;
            lastPosts = result.ToArray();
            allPosts.postViewer.ItemsSource = lastPosts;
        }

        private void showFollowedPeople(){
            var postsDatabase = SessionInfo.DbManager.getDocuments("Users");
            var users = new List<User>();
            foreach (var databasePost in postsDatabase){
                User user = new User();
                user.getUserFromBson(databasePost);
                users.Add(user);
            }

            var result = from user in users
                where (user.FirstName + user.LastName + user.Username).Contains(followedPeople.peopleSearchBar.Text) && SessionInfo.CurrentUser.Follows.Contains(user.Username)
                select user;

            lastUsers = result.ToList();
            followedPeople.peopleViewer.ItemsSource = lastUsers;
        }

        private void showAllPeople(){
            var peopleDatabase = SessionInfo.DbManager.getDocuments("Users");
            var users = new List<User>();
            foreach (var databasePerson in peopleDatabase){
                User user = new User();
                user.getUserFromBson(databasePerson);
                users.Add(user);
            }

            var result = from user in users
                where user.DisplayName.Contains(allPeople.peopleSearchBar.Text)
                select user;

            lastUsers = result.ToList();
            allPeople.peopleViewer.ItemsSource = lastUsers;
        }

        internal void showProfile(User user){
            lastUser = user;
            user = user ?? SessionInfo.CurrentUser;
            profileViewTab.IsSelected = true;
            var postsDatabase = SessionInfo.DbManager.getDocumentsFiltered("Posts", 
                "poster", user.Username);
            var posts = new List<Post>();
            foreach (var databasePost in postsDatabase){
                Post post = new Post();
                post.getPostFromBson(databasePost);
                posts.Add(post);
            }
            accountPosts.postViewer.ItemsSource = posts.ToArray();
            accountPosts.profilePicture.ImageSource = new BitmapImage(new Uri(user.ProfilePicture, UriKind.Absolute));
            accountPosts.Email.Content = user.Email;
            accountPosts.Username.Content = user.Username;
            accountPosts.FullName.Content = user.FirstName + " " + user.LastName;
        }

        private void showProfile(){
            showProfile(SessionInfo.CurrentUser);
        }

        private void updatePosts(post_tab_template toUpdate){
            IEnumerable<Post> result;
            if (toUpdate.sortPostsByBox.SelectedValue != null){
                var sortBy= (SortPostsBy)Enum.Parse(typeof(SortPostsBy), toUpdate.sortPostsByBox.SelectedValue.ToString());
                
                switch (sortBy){
                    case SortPostsBy.postDate:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text)
                            orderby post.DatePosted descending 
                            select post;
                        break;
                    case SortPostsBy.likeCount:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text)
                            orderby post.LikeCount descending 
                            select post;
                        break;
                    case SortPostsBy.dislikeCount:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text) 
                            orderby post.DislikeCount descending 
                            select post;
                        break;
                    case SortPostsBy.commentCount:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text) 
                            orderby post.CommentCount descending 
                            select post;
                        break;
                    case SortPostsBy.likeDislikeRatio:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text) 
                            orderby post.LikeCount / (post.DislikeCount == 0 ?  1 : post.DislikeCount) descending 
                            select post;
                        break;
                    default:
                        result = from post in lastPosts
                            where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text) 
                            select post;
                        break;
                }
            }
            else{
                result = from post in lastPosts
                    where (post.Title + post.Description + post.PostCreator.DisplayName).Contains(toUpdate.postSearchBar.Text)
                    select post;
            }
            toUpdate.postViewer.ItemsSource = result.ToArray();
        }
        
        private void updatePeople(people_tab_template toUpdate){
            IEnumerable<User> result;
            if (toUpdate.sortPeopleByBox.SelectedValue != null){
                var sortBy= (SortPeopleBy)Enum.Parse(typeof(SortPeopleBy), toUpdate.sortPeopleByBox.SelectedValue.ToString());
                
                switch (sortBy){
                    case SortPeopleBy.Username:
                        result = from user in lastUsers
                            where user.DisplayName.Contains(toUpdate.peopleSearchBar.Text)
                            orderby user.Username
                            select user;
                        break;
                    case SortPeopleBy.FirstName:
                        result = from user in lastUsers
                            where user.DisplayName.Contains(toUpdate.peopleSearchBar.Text)
                            orderby user.FirstName
                            select user;
                        break;
                    case SortPeopleBy.LastName:
                        result = from user in lastUsers
                            where user.DisplayName.Contains(toUpdate.peopleSearchBar.Text) 
                            orderby user.LastName
                            select user;
                        break;
                    default:
                        result = from user in lastUsers
                            where user.DisplayName.Contains(toUpdate.peopleSearchBar.Text) select user;
                        break;
                }
            }
            else{
                result = from user in lastUsers
                    where user.DisplayName.Contains(toUpdate.peopleSearchBar.Text)
                    select user;
            }
            toUpdate.peopleViewer.ItemsSource = result.ToList();
            
        }

        internal void updateNavigationProfileViewer(){
            profilePicture.ImageSource = new BitmapImage(new Uri(SessionInfo.CurrentUser.ProfilePicture, UriKind.Absolute));
            Email.Content = SessionInfo.CurrentUser.Email;
            Username.Content = SessionInfo.CurrentUser.Username;
            FullName.Content = SessionInfo.CurrentUser.FirstName + " " + SessionInfo.CurrentUser.LastName;
        }
        
        private void attachActionListeners(){
            allPeople.peopleSearchBar.TextChanged += (sender, args) => {
                updatePeople(allPeople);
            };
            allPeople.sortPeopleByBox.SelectionChanged += (sender, args) => {
                updatePeople(allPeople);
            };
            followedPeople.peopleSearchBar.TextChanged += (sender, args) => {
                updatePeople(followedPeople);
            };
            followedPeople.sortPeopleByBox.SelectionChanged += (sender, args) => {
                updatePeople(followedPeople);
            };
            allPosts.postSearchBar.TextChanged += (sender, args) => {
                updatePosts(allPosts);
            };
            allPosts.sortPostsByBox.SelectionChanged += (sender, args) => {
                updatePosts(allPosts);
            };
            newsFeed.postSearchBar.TextChanged += (sender, args) => {
                updatePosts(newsFeed);
            };
            newsFeed.sortPostsByBox.SelectionChanged += (sender, args) => {
                updatePosts(newsFeed);
            };
        }
        
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

        private void buttonClick_Function_OpenDrawer(object sender, RoutedEventArgs e) {
            if (sender is ToggleButton button) button.IsChecked = false;
        }

        private void buttonClick_Function_Logout(object sender, RoutedEventArgs e) {
            SessionInfo.CurrentUser = null;
            navigateToLoginPage();
        }

        private void buttonClick_Account_ManageOpen(object sender, RoutedEventArgs e){
            accountManageOverlay.Visibility = Visibility.Visible;
        }
        
        private void buttonClick_Account_ManageClose(object sender, RoutedEventArgs e){
            accountManageOverlay.Visibility = Visibility.Collapsed;
        }
        
        private void tabChanged_Refresh_Tab(object sender, SelectionChangedEventArgs e){

            if (newsFeedTab.IsSelected){
                showNewsFeed();
                return;
            }

            if (allPostsTab.IsSelected){
                showAllPosts();
                return;
            }

            if (followedPeopleTab.IsSelected){
                showFollowedPeople();
                return;
            }

            if (allPeopleTab.IsSelected){
                showAllPeople();
                return;
            }

            if (profileViewTab.IsSelected){
                showProfile();
            }
        }

        private void buttonClick_Account_DeleteOpen(object sender, RoutedEventArgs e){
            deleteUserOverlay.Visibility = Visibility.Visible;
        }
        
        private void buttonClick_Account_DeleteClose(object sender, RoutedEventArgs e){
            deleteUserOverlay.Visibility = Visibility.Collapsed;
        }
        
        private void buttonClick_Account_Delete(object sender, RoutedEventArgs e){
            SessionInfo.CurrentUser.deleteUser();
            buttonClick_Function_Logout(sender, e);
        }

        private void NewsFeed_OnPostDeleted(object sender, RoutedEventArgs e){
            showNewsFeed();
        }

        private void AllPosts_OnPostDeleted(object sender, RoutedEventArgs e){
            showAllPosts();
        }

        private void AccountPosts_OnPostDeleted(object sender, RoutedEventArgs e){
            showProfile(lastUser);
        }

        private void buttonClick_Account_Show(object sender, RoutedEventArgs e){
            showProfile();
        }

        
    }
}