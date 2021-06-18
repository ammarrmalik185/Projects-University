using System;
using System.Collections.Generic;
using System.Windows;
using Firebase.Storage;
using Microsoft.Win32;
using VP_Project.Scripts;
using VP_Project.Scripts.DataStructures;
using VP_Project.Scripts.Enums;

namespace VP_Project.UI{
    public partial class newPost_tab_template{
        private PostType currentPostType;
        private string currentSelectedFile;
        
        public newPost_tab_template(){
            InitializeComponent();
        }

        private async void buttonClick_Post_Create(object sender, RoutedEventArgs e){
            progressOverlay.Visibility = Visibility.Visible;

            try{
                var post = new Post{
                    Title = titleField.Text,
                    Description = descriptionField.Text,
                    DatePosted = DateTime.Now,
                    PostCreator = SessionInfo.CurrentUser,
                    postType = currentPostType
                };
                post.addPostToDatabase();
                if (currentPostType != PostType.Text){
                    var uploadTask = SessionInfo.DbManager.pushFile("posts", post.Id.ToString(), currentSelectedFile);
                    post.fileUri = await uploadTask;
                    post.updateFilePath();
                }
                CommonMethods.showMessage("Posted");
                reset();
            }
            catch (KeyNotFoundException){
                CommonMethods.showMessage("Unable to make post (Check Internet Connection)");
            }
            catch (TimeoutException){
                CommonMethods.showMessage("Connection Timed out");
            }
            catch (Exception exception){
                CommonMethods.showMessage("Unknown Exception: " + exception.Message);
            }
            progressOverlay.Visibility = Visibility.Collapsed;
        }

        private void reset(){
            currentPostType = PostType.Text;
            addImageButton.Content = "Add Image";
            addVideoButton.Content = "Add Video";
            titleField.Text = "";
            descriptionField.Text = "";
        }
        
        private void buttonClick_Post_AddImage(object sender, RoutedEventArgs e){
            if (currentPostType == PostType.Image){
                currentPostType = PostType.Text;
                addImageButton.Content = "Add Image";
                return;
            }
            
            var dialog = new OpenFileDialog{
                Filter =  "Image files (*.jpg, *.jpeg, *.jpe, *.jfif, *.png) | *.jpg; *.jpeg; *.jpe; *.jfif; *.png",
                Title = "Select Image"
            };
            if (dialog.ShowDialog() != true) return;
            
            if (currentPostType == PostType.Video) {
                addVideoButton.Content = "Add Video";
            }
            currentPostType = PostType.Image;
            currentSelectedFile = dialog.FileName;
            addImageButton.Content = "Image Selected, Press again to remove";

        }
        
        private void buttonClick_Post_AddVideo(object sender, RoutedEventArgs e){
            if (currentPostType == PostType.Video){
                currentPostType = PostType.Text;
                addVideoButton.Content = "Add Video";
                return;
            }
            
            var dialog = new OpenFileDialog{
                Filter =  "Video files (*.mp4, *.gif, *.3gp, *.mkv, *.flv) | *.mp4; *.gif; *.3gp; *.mkv; *.flv",
                Title = "Select Video"
            };
            if (dialog.ShowDialog() != true) return;
            
            if (currentPostType == PostType.Image) {
                addImageButton.Content = "Add Image";
            }
            currentPostType = PostType.Video;
            currentSelectedFile = dialog.FileName;
            addVideoButton.Content = "Video Selected, Press again to remove";
        }
    }
}