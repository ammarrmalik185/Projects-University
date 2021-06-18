using System;

namespace Test{
    internal class Program{
        public static void Main(string[] args){
            StorageManager manager = new StorageManager();
            manager.pushFile("test", "example",
                "E:\\Rider Projects\\University\\Visual Programming\\Test\\login.png");
            Console.Write("enter to end");
            string input = Console.ReadLine();
        }
    }
}