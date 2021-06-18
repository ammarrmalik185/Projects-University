using System.Windows;
using System.Windows.Controls;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;

namespace VP_Project.UI.comment_UIs{
    public partial class comment_view_template{
        private static readonly RoutedEvent OnCommentUpdated = EventManager.RegisterRoutedEvent("CommentUpdated_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(comment_view_template));
        public event RoutedEventHandler CommentUpdated{
            add => AddHandler(OnCommentUpdated, value);
            remove => RemoveHandler(OnCommentUpdated, value);
        }
        public comment_view_template(){
            InitializeComponent();
        }
        private void buttonClick_Post_DisplayUser(object sender, RoutedEventArgs e){
            var selectedPost = (sender as Button)?.DataContext as Comment;
            SessionInfo.mainWindow.showProfile(selectedPost?.CommentCreator);
        }
        
        private void buttonClick_User_Follow(object sender, RoutedEventArgs e){
            if ((sender as Button)?.DataContext is Comment selectedComment) 
                SessionInfo.CurrentUser.addFollow(selectedComment.CommentCreator.Username);
            RaiseEvent(new RoutedEventArgs(OnCommentUpdated, this));
        }
    }
}