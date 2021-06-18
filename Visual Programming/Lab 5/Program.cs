using System;

namespace Lab_5 {
    class Program {
        static void Main(string[] args) {
            
            Container<string, Int32> c = new Container<string, Int32>(10);
            c[3] = "ok";
            c["lol"] = 4;
            
            Console.WriteLine(c[3]);
            Console.WriteLine(c["lol"]);

        }
    }

    class Container<A, B> {
        private A[] arrA;
        private B[] arrB;
        private int currentIndex;

        public Container(int count) {
            arrA = new A[count];
            arrB = new B[count];
            currentIndex = 0;
        }

        public A this[B i] {
            get {
                int index = find_in_array(i, arrB);
                if (index == -1) {
                    throw new ArgumentException("data does not exist");
                }
                return arrA[index];
            }
            set {
                if (find_in_array(i, arrB) == -1) {
                    arrB[currentIndex] = i;
                    arrA[currentIndex] = value;
                    currentIndex++;
                }
                else {
                    throw new ArgumentException("data already exists");
                }
            }
        }
        
        public B this[A i] {
            get {
                int index = find_in_array(i, arrA);
                if (index == -1) {
                    throw new ArgumentException("data does not exist");
                }
                return arrB[index];
            }
            set {
                if (find_in_array(i, arrA) == -1) {
                    arrB[currentIndex] = value;
                    arrA[currentIndex] = i;
                    currentIndex++;
                }
                else {
                    throw new ArgumentException("data already exists");
                }
            }
        }

        private int find_in_array(A key, A[] array) {
            for (int i = 0; i < array.Length; i++) {
                if (array[i].Equals(key)) {
                    return i;
                }
            }

            return -1;
        }
        
        private int find_in_array(B key, B[] array) {
            for (int i = 0; i < array.Length; i++) {
                try {
                    if (array[i].Equals(key)) {
                        return i;
                    }
                }
                catch (NullReferenceException) {
                    if (array[i] == key) {
                        return i;
                    }
                }
            }

            return -1;
        }
    }
}