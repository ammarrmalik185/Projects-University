using System;
using System.Windows;
using System.Windows.Controls;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;

namespace VP_Project.UI.post_UIs{
    public partial class post_template_footer{

        public static readonly RoutedEvent OnValueChanged = EventManager.RegisterRoutedEvent("ValueChanged_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_footer));
        public event RoutedEventHandler ValueChanged{
            add => AddHandler(OnValueChanged, value);
            remove => RemoveHandler(OnValueChanged, value);
        }
        
        public static readonly RoutedEvent OnCommentPressed = EventManager.RegisterRoutedEvent("CommentPressed_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(post_template_footer));
        public event RoutedEventHandler CommentPressed{
            add => AddHandler(OnCommentPressed, value);
            remove => RemoveHandler(OnCommentPressed, value);
        }
        
        public post_template_footer(){
            InitializeComponent();
        }
        private void buttonClick_Post_Like(object sender, RoutedEventArgs e){
            var selectedPost = (sender as Button)?.DataContext as Post;
            selectedPost?.likePost();
            RaiseEvent(new RoutedEventArgs(OnValueChanged, this));
        }

        private void buttonClick_Post_Dislike(object sender, RoutedEventArgs e){
            var selectedPost = (sender as Button)?.DataContext as Post;
            selectedPost?.dislikePost();
            RaiseEvent(new RoutedEventArgs(OnValueChanged, this));
        }

        private void buttonClick_Post_Comment(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnCommentPressed, sender));
        }
    }
}