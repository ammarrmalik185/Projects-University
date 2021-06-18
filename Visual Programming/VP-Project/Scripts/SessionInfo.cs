using VP_Project.Scripts.DataStructures;

namespace VP_Project.Scripts {
    public static class SessionInfo {
        public static User CurrentUser { get; set; }
        public static DatabaseManager DbManager { get; set; }
        public static MainWindow mainWindow{ get; set; }
        
        public static LoginWindow loginWindow{ get; set; }
    }
}