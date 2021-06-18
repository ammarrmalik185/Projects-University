using System.Windows;
using VP_Project.Scripts.DataStructures;
using VP_Project.UI.post_UIs;

namespace VP_Project.UI{
    public partial class accountView_tab_template{
        private Post commentPost;
        private static readonly RoutedEvent OnPostDeleted = EventManager.RegisterRoutedEvent("PostDeleted_AccountTab_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_footer));
        public event RoutedEventHandler PostDeleted{
            add => AddHandler(OnPostDeleted, value);
            remove => RemoveHandler(OnPostDeleted, value);
        }
        public accountView_tab_template(){
            InitializeComponent();
        }
        
        private void commentButtonPressed(object sender, RoutedEventArgs e){
            var post = ((e.OriginalSource as text_post_template)?.DataContext as Post ?? (e.OriginalSource as image_post_template)?.DataContext as Post) ??
                       (e.OriginalSource as video_post_template)?.DataContext as Post;
            commentViewList.ItemsSource = post?.Comments;
            commentOverlay.Visibility = Visibility.Visible;
            commentPost = post;
            
        }

        private void buttonClick_Comment_Close(object sender, RoutedEventArgs e){
            commentOverlay.Visibility = Visibility.Collapsed;
        }

        private void buttonClick_Comment_Send(object sender, RoutedEventArgs e){
            commentPost.makeComment(commentContent.Text);
            commentViewList.Items.Refresh();
            commentViewList.ItemsSource = commentPost?.Comments;
        }
        
        private void comment_view_template_OnCommentUpdated(object sender, RoutedEventArgs e){
            commentViewList.Items.Refresh();
            postViewer.Items.Refresh();
        }
        private void PostViewer_OnPostDeleted(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnPostDeleted, this));
        }
    }
}