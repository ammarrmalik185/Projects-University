using System;

namespace VP_Lab_4 {
    internal class Program {
        private static void Main(string[] args) {
            Console.WriteLine("Hello World!");
            MyClass c = new MyClass();
            IInterface i = c;
        }
    }

    internal abstract class WorkItem {
        public WorkItem(int id, string title, TimeSpan jobLength) {
            Id = id;
            Title = title;
            JobLength = jobLength;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public TimeSpan JobLength { get; set; }

        public override bool Equals(object obj) {
            return true;
        }

        public override int GetHashCode() {
            return 3;
        }

        public override string ToString() {
            return "ok";
        }

        public abstract void Update();
    }

    internal class ChangeRequest : WorkItem {
        public ChangeRequest(int id, string title, TimeSpan jobLength, int originalItemId) :
            base(id, title, jobLength) {
            OriginalItemId = originalItemId;
        }

        public int OriginalItemId { get; set; }
        public override void Update() {
            
        }
    }

    interface IInterface {
        
    }

    class MyClass:IInterface {
        
    }
}