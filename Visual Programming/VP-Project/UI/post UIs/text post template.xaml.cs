using System.Windows;
using System.Windows.Controls;

namespace VP_Project.UI.post_UIs{
    public partial class text_post_template{
        private static readonly RoutedEvent OnValueChanged = EventManager.RegisterRoutedEvent("ValueChanged_TextPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(text_post_template));
        public event RoutedEventHandler ValueChanged_TextPost{
            add => AddHandler(OnValueChanged, value);
            remove => RemoveHandler(OnValueChanged, value);
        }

        private static readonly RoutedEvent OnCommentPressed = EventManager.RegisterRoutedEvent("CommentPressed_TextPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(Button));
        public event RoutedEventHandler CommentPressed{
            add => AddHandler(OnCommentPressed, value);
            remove => RemoveHandler(OnCommentPressed, value);
        }
        
        private static readonly RoutedEvent OnPostDeleted = EventManager.RegisterRoutedEvent("PostDeleted_TextPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(Button));
        public event RoutedEventHandler PostDeleted{
            add => AddHandler(OnPostDeleted, value);
            remove => RemoveHandler(OnPostDeleted, value);
        }
        
        private void onValueChanged(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnValueChanged, sender));
        }
        
        public text_post_template(){
            InitializeComponent();
        }
        
        private void onCommentPressed(object sender, RoutedEventArgs e){
            var raisedEvent = new RoutedEventArgs(OnCommentPressed, sender){
                Source = sender
            };
            RaiseEvent(raisedEvent);
        }

        private void onPostDeleted(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnPostDeleted, this));
        }
    }
}