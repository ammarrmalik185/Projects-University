using System;

namespace Lab_Assignment_2 {
    public class Part_3 {
        // public static void Main(string[] args) {
        //     BSE_Student student = new BSE_Student("Ammar", "FA18-BSE-011", "3.64", "Male");
        //     CSTeacher teacher = new CSTeacher("a", "b", "c", new DateTime(), "male");
        //     while (true)
        //         try {
        //             Console.Write("Options: \n" + "1 - Add\n2 - Update\n3 - Delete\n4 - View\n5 - Exit\n");
        //             var campusInt = int.Parse(Console.ReadLine());
        //             switch (campusInt) {
        //                 case 1:
        //                     student.Add();
        //                     break;
        //                 case 2:
        //                     student.Update();
        //                     break;
        //                 case 3:
        //                     student.Delete();
        //                     break;
        //                 case 4:
        //                     Console.WriteLine(student);
        //                     break;
        //                 case 5:
        //                     return;
        //                 default:
        //                     throw new ArgumentException("Invalid Option");
        //             }
        //         }
        //         catch (Exception) {
        //             Console.WriteLine("Invalid option.. try again");
        //         }
        //     
        // }
    }

    public interface IPerson {
        void Add();
        void Update();
        void Delete();
    }

    abstract class Student : IPerson {
        private string name;
        private string registration;
        private string cgpa;
        private string gender;

        protected Student(string name, string registration, string cgpa, string gender) {
            this.name = name;
            this.registration = registration;
            this.cgpa = cgpa;
            this.gender = gender;
        }

        public string Name {
            get => name;
            set => name = value;
        }

        public string Registration {
            get => registration;
            set => registration = value;
        }

        public string Cgpa {
            get => cgpa;
            set => cgpa = value;
        }

        public string Gender {
            get => gender;
            set => gender = value;
        }

        public void Add() {
            Console.WriteLine("student added");
        }

        public void Update() {
            Console.WriteLine("student updated");
        }

        public void Delete() {
            Console.WriteLine("student deleted");
        }

        public override string ToString() {
            return $"Name: {this.name}, Reg Id: {registration}, Gender{gender}";
        }
    }
    
    abstract class Teacher : IPerson {
        private string name;
        private string course;
        private string highestDegree;
        private DateTime dateOfJoining;
        private string gender;

        protected Teacher(string name, string course, string highestDegree, DateTime dateOfJoining, string gender) {
            this.name = name;
            this.course = course;
            this.highestDegree = highestDegree;
            this.dateOfJoining = dateOfJoining;
            this.gender = gender;
        }

        public string Name {
            get => name;
            set => name = value;
        }

        public string Course {
            get => course;
            set => course = value;
        }

        public string HighestDegree {
            get => highestDegree;
            set => highestDegree = value;
        }

        public DateTime DateOfJoining {
            get => dateOfJoining;
            set => dateOfJoining = value;
        }

        public string Gender {
            get => gender;
            set => gender = value;
        }

        public void Add() {
            Console.WriteLine("teacher added");
        }

        public void Update() {
            Console.WriteLine("teacher updated");
        }

        public void Delete() {
            Console.WriteLine("teacher deleted");
        }
        
        public override string ToString() {
            return $"Name: {this.name}, Course: {course}, Gender{gender}";
        }
    }

    class BSE_Student : Student {
        public BSE_Student(string name, string registration, string cgpa, string gender) : base(name, registration, cgpa, gender) {
            
        }
    }
    
    class CSTeacher : Teacher {
        public CSTeacher(string name, string course, string highestDegree, DateTime dateOfJoining, string gender) : base(name, course, highestDegree, dateOfJoining, gender) {
            
        }
    }
    
}