using System;

namespace Assignment_1{
    internal class Program{
        public static void Main(string[] args){
        }
    }
    
    public class Singleton {
        private static Singleton instance;
        private Singleton() {}
        public static Singleton getInstance(){
            return instance ?? (instance = new Singleton());
        }
    }

    public sealed class InheritanceSafeSingleton {
        private static InheritanceSafeSingleton instance;
        private InheritanceSafeSingleton () {}
        public static InheritanceSafeSingleton getInstance(){
            return instance ?? (instance = new InheritanceSafeSingleton());
        }
    }
    
    public sealed class ThreadSafeSingleton {
        private static volatile ThreadSafeSingleton instance = null;
        private static readonly object padlock = new object();
        private ThreadSafeSingleton () {}
        public static ThreadSafeSingleton getInstance() {
            lock(padlock) return instance ?? (instance = new ThreadSafeSingleton());
        }
    }


}