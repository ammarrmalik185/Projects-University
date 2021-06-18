using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace Lab_8___WPF {
    /// <summary>
    ///     Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow {

        private readonly string[] images = {
            "https://static.remove.bg/remove-bg-web/71dbdf11b48cb655eefe2f609ad67295258ae141/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg",
            "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
            "https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg",
            "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg"
        };

        public MainWindow() {
            InitializeComponent();
        }

        private void RefreshButton_OnClick(object sender, RoutedEventArgs e) {
            Image1.Source = null;
            Image2.Source = null;
            Image3.Source = null;
        }

        private void ToggleButton_OnChecked(object sender, RoutedEventArgs e) {
            if (even == sender as RadioButton) {
                Image3.Source = new BitmapImage(new Uri(images[0]));
                Image2.Source = new BitmapImage(new Uri(images[2 % images.Length]));
                Image1.Source = new BitmapImage(new Uri(images[4 % images.Length]));
            }
            else if (odd == sender as RadioButton) {
                Image3.Source = new BitmapImage(new Uri(images[1 % images.Length]));
                Image2.Source = new BitmapImage(new Uri(images[3 % images.Length]));
                Image1.Source = new BitmapImage(new Uri(images[5 % images.Length]));
            }
        }
    }
}