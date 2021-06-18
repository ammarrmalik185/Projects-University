using System;

namespace Lab_Assignment_2 {
    class Program {
        static void Main(string[] args) {
            Box a = new Box(4 ,6 , 7);
            Box b = new Box(10, 20, 30);
            Console.WriteLine(a == b);
            Console.WriteLine(a != b);
            Console.WriteLine(a > b);
            Console.WriteLine(a < b);
            Console.WriteLine(a >= b);
            Console.WriteLine(a <= b);
        }
    }

    class Box{
        private double width;
        private double lenght;
        private double height;

        public Box(double width, double lenght, double height) {
            this.width = width;
            this.lenght = lenght;
            this.height = height;
        }
        public Box() {
        }
        
        public double getVolume() {
            return width * lenght * height;
        }
        
        // both the setter and properties were not needed but the assignment said to make properties so ...
        public void setWidth(double w) {
            width = w;
        }
        public void setLenght(double l) {
            lenght = l;
        }
        public void setHeight(double h) {
            height = h;
        }
        
        public static bool operator== (Box a, Box b) {
            return a.getVolume() == b.getVolume();
        }
        public static bool operator!= (Box a, Box b) {
            return a.getVolume() != b.getVolume();
        }
        public static bool operator> (Box a, Box b) {
            return a.getVolume() > b.getVolume();
        }
        public static bool operator>= (Box a, Box b) {
            return a.getVolume() >= b.getVolume();
        }
        public static bool operator< (Box a, Box b) {
            return a.getVolume() < b.getVolume();
        }
        public static bool operator<= (Box a, Box b) {
            return a.getVolume() <= b.getVolume();
        }

        public double Width {
            get => width;
            set => width = value;
        }
        public double Lenght {
            get => lenght;
            set => lenght = value;
        }
        public double Height {
            get => height;
            set => height = value;
        }
    }
}