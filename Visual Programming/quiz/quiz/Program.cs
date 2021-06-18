using System;

namespace quiz {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello World!");
        }
    }

    class WorkItem {
        
        private int id;
        private string title;
        private TimeSpan jobLength;

        public WorkItem() {
        }

        public WorkItem(int id, string title, TimeSpan jobLength) {
            this.id = id;
            this.title = title;
            this.jobLength = jobLength;
        }

        public int Id {
            get => id;
            set => id = value;
        }

        public string Title {
            get => title;
            set => title = value;
        }

        public TimeSpan JobLength {
            get => jobLength;
            set => jobLength = value;
        }

        public void Update() {
            
        }
        
    }

    class ChangeRequest : WorkItem {
        private int originalItemId;

        public ChangeRequest(int originalItemId) {
            this.originalItemId = originalItemId;
        }

        public ChangeRequest(int id, string title, TimeSpan jobLength) : base(id, title, jobLength) {
        }
        
    }
}