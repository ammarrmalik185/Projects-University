using System.Windows;
using System.Windows.Controls;
using VP_Project.Scripts.DataStructures;
using VP_Project.Scripts.Enums;

namespace VP_Project.Scripts{
    public class PostTypeTemplateSelector : DataTemplateSelector{
        public DataTemplate TextTemplate{ get; set; }
        public DataTemplate ImageTemplate{ get; set; }
        public DataTemplate VideoTemplate{ get; set; }
        public override DataTemplate SelectTemplate(object item, DependencyObject container){
            var post = item as Post;
            if (post is null) return base.SelectTemplate(item, container);
            if (post.postType == PostType.Text) return TextTemplate;
            if (post.postType == PostType.Image) return ImageTemplate;
            if (post.postType == PostType.Video){
                // CommonMethods.showAlert(post.ToString());
                // return VideoTemplate;
                return TextTemplate;
            }
            return base.SelectTemplate(item, container);
        }
    }
}