using System;
using System.Collections.Generic;
using System.IO;

namespace VP_Lab_3 {
    
    class Program {
        enum program {
            BSE,
            BCS,
            BBA,
            BAF
        }
        enum sesson {
            Fa, 
            Sp
        };

        struct Regno {
            private program Program;
            private sesson Sesson;
            private string regNo;
            private string year;

            public Regno(program program, sesson sesson, string regNo, string year) {
                Program = program;
                Sesson = sesson;
                this.regNo = regNo;
                this.year = year;
            }

            public override string ToString() {
                return Sesson + year + "-" + Program + "-" + regNo;
            }
        }

        static void Main(string[] args) {

            Regno ammar = new Regno(program.BSE, sesson.Fa, "011", "18");
            Console.WriteLine(ammar);

            // while (true) {
            //     try {
            //         // Zero Error
            //         int a = 0;
            //         int x = 5 / a;
            //
            //         // Index Exception
            //         var y = new int[5];
            //         y[456423546] = 5;
            //
            //
            //     }
            //     catch (Exception e) {
            //         Console.WriteLine("exception {0}", e.Message);
            //         throw new Aseed();
            //     }
            //     // catch (IndexOutOfRangeException) {
            //     //     
            //     // }
            //     // catch (DivideByZeroException) {
            //     //     
            //     // }
            //     finally {
            //         Console.WriteLine("uh finally");                    
            //     }
            // }

            // Stack<int> stack = new Stack<int>();
            // stack.Push(6);
            // Console.WriteLine(stack.Pop());



        }
    }

    class Aseed : Exception {
        public override string ToString() {
            return "Aseed Noob";
        }
    }
}