using System.Windows;

namespace VP_Project.UI.customDialog_UIs{
    public partial class edit_post_dialog_template : Window{
        public edit_post_dialog_template(){
            InitializeComponent();
        }

        private void Decline_OnClick(object sender, RoutedEventArgs e){
            Close();
        }
    }
}