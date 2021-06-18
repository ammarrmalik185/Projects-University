using System.Windows;

namespace VP_Project.UI.customDialog_UIs{
    public partial class confirmation_dialog_template{
        public confirmation_dialog_template(){
            InitializeComponent();
        }

        private void Decline_OnClick(object sender, RoutedEventArgs e){
            Close();
        }
    }
}