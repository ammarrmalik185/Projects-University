using System.Windows;
using System.Windows.Controls;

namespace VP_Project.UI.post_UIs{
    public partial class video_post_template{
        private static readonly RoutedEvent OnValueChanged = EventManager.RegisterRoutedEvent("ValueChanged_VideoPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(video_post_template));
        public event RoutedEventHandler ValueChanged_VideoPost{
            add => AddHandler(OnValueChanged, value);
            remove => RemoveHandler(OnValueChanged, value);
        }

        private static readonly RoutedEvent OnCommentPressed = EventManager.RegisterRoutedEvent("CommentPressed_VideoPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(video_post_template));
        public event RoutedEventHandler CommentPressed{
            add => AddHandler(OnCommentPressed, value);
            remove => RemoveHandler(OnCommentPressed, value);
        }
        private void onValueChanged(object sender, RoutedEventArgs e){
            RaiseEvent(new RoutedEventArgs(OnValueChanged, sender));
        }
        
        private static readonly RoutedEvent OnPostDeleted = EventManager.RegisterRoutedEvent("PostDeleted_VideoPost_event", RoutingStrategy.Bubble, typeof(RoutedEventArgs), typeof(Button));
        public event RoutedEventHandler PostDeleted{
            add => AddHandler(OnPostDeleted, value);
            remove => RemoveHandler(OnPostDeleted, value);
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
        
        public video_post_template(){
            InitializeComponent();
        }

        private void getVideoAsync(){
            // BackgroundWorker worker = new BackgroundWorker();
            // worker.DoWork += (sender, args) => {
            //     bool found = false;
            //     do{
            //         var videoUrl = videoUriGetter.Content;
            //         var videoUrl2 = (DataContext as Post)?.fileUri;
            //         if (videoUrl is null || videoUrl2 is null){
            //             Thread.Sleep(500);
            //         }
            //         else{
            //             found = true;
            //         }
            //         CommonMethods.showAlert("hello");
            //     } while (true);
            //
            // };
            // worker.RunWorkerAsync();
            // var videoUrl = (this.DataContext as Post)?.fileUri;
            // CommonMethods.showAlert(videoUrl);
            // var videoUrl2 = videoUriGetter.Content;
            // CommonMethods.showAlert(videoUrl);
            // var path = Path.GetTempPath();
            // var fileName = Path.GetFileName(videoUrl);
            // fileName = fileName.Split('%')[1];
            // fileName = fileName.Split('?')[0];
            // CommonMethods.showAlert(fileName);
            // var tmpFile = Path.Combine(path, fileName);
            // var wc = new WebClient();
            // wc.DownloadFileAsync(new Uri(videoUrl), tmpFile);
            // wc.DownloadFileCompleted += (arg1, args) => {
            //     videoPlayer.Source = new Uri(tmpFile, UriKind.Absolute);
            // };
        }
    }
}