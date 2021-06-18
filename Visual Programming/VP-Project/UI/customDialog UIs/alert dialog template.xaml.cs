using System.Windows;

namespace VP_Project.UI.customDialog_UIs{
    public partial class alert_dialog_template{
        public alert_dialog_template(){
            InitializeComponent();
        }

        private void Confirm_OnClick(object sender, RoutedEventArgs e){
            Close();
        }
    }
}