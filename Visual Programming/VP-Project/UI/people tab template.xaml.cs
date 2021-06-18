using System.Collections.Generic;
using VP_Project.Scripts.Enums;

namespace VP_Project.UI{
    public partial class people_tab_template{
        public people_tab_template(){
            InitializeComponent();
            addOptionsToComboBox();
        }
        
        private void addOptionsToComboBox(){
            List<SortPeopleBy> peopleSorts = new List<SortPeopleBy>{
                SortPeopleBy.Username,
                SortPeopleBy.FirstName,
                SortPeopleBy.LastName
            };
            sortPeopleByBox.ItemsSource = peopleSorts;
        }
    }
}