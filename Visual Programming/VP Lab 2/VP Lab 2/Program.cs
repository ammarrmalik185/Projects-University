using System;
using System.Linq;

namespace VP_Lab_2 {
    class Program {
        static void Main(string[] args) {
            // NORMAL ARRAYS
            // Console.WriteLine("Hello World!");
            //
            // var x = new int[5]{6,7,8,9,10};
            // x[0] = 5;
            // foreach (var i in x) {
            //     Console.Write(i + "  ");
            // }
            //
            // int[] y = new int[5]{1,2,3,4,5};
            // y[0] = 5;
            // foreach (var i in y) {
            //     Console.Write(i + "  ");
            // }
            
            // MULTI DIMENSIONAL ARRAY
            // int[,] z = new int[5, 3]{{1,2,3},{7,6,4},{2,3,6},{7,8,9},{6,5,3}};
            //
            // for (var index0 = 0; index0 < z.GetLength(0); index0++) {
            //     for (var index1 = 0; index1 < z.GetLength(1); index1++) {
            //         var i = z[index0, index1];
            //         Console.Write(i + "  ");
            //     }
            //     Console.WriteLine();
            // }

            // MULTI DIMENSIONAL ARRAY JAGGED
            // int[][] w = new int[2][] {
            //     new[] {2, 3, 5},
            //     new[] {1, 3}
            // };
            // for (var i = 0; i < w.Length; i++) {
            //     for (var j = 0; j < w[i].Length; j++) {
            //         var p = w[i][j];
            //         Console.Write(p + "  ");
            //     }
            //     Console.WriteLine();
            // }
            
            // MULTI DIMENSIONAL ARRAY JAGGED 2
            // int[][] v = new int[2][];
            // v[0] = new int[] {2, 3, 5};
            // v[1] = new int[] {1, 3};
            //
            // for (var i = 0; i < v.GetLength(0); i++) {
            //     for (var j = 0; j < v.GetLength(1); j++) {
            //         var p = v[i][j];
            //         Console.Write(p);
            //     }
            //     Console.WriteLine();
            // }
            
            // OOP TEST
            // Test test = new Test();
            // Test test2 = new Test();
            // Console.WriteLine(test.Equals(test2));

            // String[] months =
            //     {"Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Oct", "Sep", "Oct", "Nov", "Dec"};
            // PrintArray(months);
            // ChangeArray(months);
            // PrintArray(months);

            String[] s = {"Hello", "and", "welcome", "to", "this", "demo"};
            Console.WriteLine(ConcatArray(s));
        }

        private static String ConcatArray(string[] array) {
            string returnString = "";
            foreach (string letter in array) {
                returnString += letter + " ";
            }

            return returnString;
        }
        
        private static void PrintArray(String[] array) {
            foreach (var variable in array) {
                Console.WriteLine(variable);
            }
        }
        private static void ChangeArrayElement(String[] array) {
            var a = array[0];
            var b = array[1];
            array[1] = a;
            array[0] = b;
        }

        private static void ChangeArray(String[] array) {
            Array.Reverse(array);
        }
    }
    
    // OOP
    // class Test {
    //     private string id;
    //     public Test(string id = "temp") {
    //         this.id = id;
    //     }
    //
    //     public override bool Equals(object? obj) {
    //         if (obj == null || obj.GetType() != this.GetType()) return false;
    //         var other = (Test) obj;
    //         if (other.id == this.id)
    //             return true;
    //
    //         return false;
    //     }
    //
    //     protected bool Equals(Test other) {
    //         return id == other.id;
    //     }
    //
    //     public override string ToString() {
    //         return id;
    //     }
    // }
}