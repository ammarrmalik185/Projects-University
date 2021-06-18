using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Windows;
using MongoDB.Bson;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;

namespace VP_Project{
    public partial class Test{
        const string url = "https://firebasestorage.googleapis.com/v0/b/visual-programming-project.appspot.com/o/posts%2F60bb2e5fe3676c03fc69d027.mp4?alt=media&token=64c7bdec-2ed6-4554-a093-5be54cc00caf";

        private int count = 0;
        
        public Test(){
            InitializeComponent();
        }

        private void ButtonBase_OnClick(object sender, RoutedEventArgs e){
            const string absTestPath = @"E:\Rider Projects\University\Visual Programming\VP-Project\Resources\Test\videoTest.mp4";

            display.Source = new Uri(absTestPath, UriKind.Absolute);
            
            var path = Path.GetTempPath();
            var fileName = Path.GetFileName(url);
            fileName = fileName.Split('%')[1];
            fileName = fileName.Split('?')[0];
            CommonMethods.showAlert(fileName);
            var tmpFile = Path.Combine(path, fileName);
            var wc = new WebClient();
            wc.DownloadFileAsync (new Uri(url), tmpFile);
            wc.DownloadFileCompleted += (arg1, args) => { display.Source = new Uri(tmpFile, UriKind.Absolute); };
        }

        private void ButtonBase_OnClick2(object sender, RoutedEventArgs e){
            counter.Content = ++count;
        }
    }
}