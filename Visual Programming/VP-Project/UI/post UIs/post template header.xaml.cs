using System;
using System.Windows;
using System.Windows.Controls;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;
using VP_Project.UI.customDialog_UIs;

namespace VP_Project.UI.post_UIs{
    public partial class post_template_header{
        private static readonly RoutedEvent OnValueChanged = EventManager.RegisterRoutedEvent("ValueChanged_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_header));
        public event RoutedEventHandler ValueChanged{
            add => AddHandler(OnValueChanged, value);
            remove => RemoveHandler(OnValueChanged, value);
        }
        
        private static readonly RoutedEvent OnPostDeleted = EventManager.RegisterRoutedEvent("PostDeleted_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_header));
        public event RoutedEventHandler PostDeleted{
            add => AddHandler(OnPostDeleted, value);
            remove => RemoveHandler(OnPostDeleted, value);
        }

        public post_template_header(){
            InitializeComponent();
        }

        private void buttonClick_Post_DisplayUser(object sender, RoutedEventArgs e){
            var selectedPost = (sender as Button)?.DataContext as Post;
            SessionInfo.mainWindow.showProfile(selectedPost?.PostCreator);
        }
        
        private void buttonClick_User_Follow(object sender, RoutedEventArgs e){
            if ((sender as Button)?.DataContext is Post selectedPost) 
                SessionInfo.CurrentUser.addFollow(selectedPost.PostCreator.Username);
            RaiseEvent(new RoutedEventArgs(OnValueChanged, this));

        }
        private void buttonClick_User_Edit(object sender, RoutedEventArgs e){
            if (!((sender as Button)?.DataContext is Post selectedPost)) return;
            var editPostDialog = new edit_post_dialog_template{
                titleField ={Text = selectedPost.Title}, 
                descriptionField ={Text = selectedPost.Description}
            };

            editPostDialog.confirm.Click += (o, args) => {

                try{
                    selectedPost.Title = editPostDialog.titleField.Text;
                    selectedPost.Description = editPostDialog.descriptionField.Text;
                    selectedPost.updatePostToDatabase();
                    editPostDialog.Close();
                    CommonMethods.showMessage("Post Updated");
                }
                catch (Exception){
                    CommonMethods.showMessage("Edit Failed");
                }
                RaiseEvent(new RoutedEventArgs(OnValueChanged, this));
            };
            editPostDialog.Show();
        }
        private void buttonClick_User_Delete(object sender, RoutedEventArgs e){
            if (!((sender as Button)?.DataContext is Post selectedPost)) return;
            var deleteConfirmation = new confirmation_dialog_template{
                messageShow = {Text = "Are you sure you want to delete this post?"},
            };
            deleteConfirmation.confirm.Click += (o, args) => {
                try{
                    selectedPost.deletePost();
                    CommonMethods.showMessage("Post Deleted");
                    deleteConfirmation.Close();
                }
                catch (Exception){
                    CommonMethods.showMessage("Failed to delete post");
                }

                RaiseEvent(new RoutedEventArgs(OnPostDeleted, this));
            };
            deleteConfirmation.Show();
        }
    }
}