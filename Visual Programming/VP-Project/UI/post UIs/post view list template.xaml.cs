using System.Runtime.Remoting.Channels;
using System.Windows;

namespace VP_Project.UI.post_UIs{
    public partial class post_view_list_template{

        public post_view_list_template(){
            InitializeComponent();
        }

        private static readonly RoutedEvent OnCommentPressed = EventManager.RegisterRoutedEvent("CommentPressed_MainList_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_footer));
        public event RoutedEventHandler CommentPressed{
            add => AddHandler(OnCommentPressed, value);
            remove => RemoveHandler(OnCommentPressed, value);
        }
        
        private static readonly RoutedEvent OnPostDeleted = EventManager.RegisterRoutedEvent("PostDeleted_MainList_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_footer));
        public event RoutedEventHandler PostDeleted{
            add => AddHandler(OnPostDeleted, value);
            remove => RemoveHandler(OnPostDeleted, value);
        }
        
        private void commentIsPressed(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnCommentPressed, sender));
        }
        private void valueIsChanged(object sender, RoutedEventArgs args){
            Items.Refresh();
        }

        private void postIsDeleted(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnPostDeleted, sender));
        }
    }
}