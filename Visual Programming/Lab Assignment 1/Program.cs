using System;
using System.Collections;

namespace Lab_Assignment_1 {
    enum Campus {
        ISB,
        LHR,
        ABT,
        WAH
    }
    enum Session {
        FA,
        SP
    }
    enum Program {
        BCS,
        BSE,
        BBA,
        BAF
    }
    enum Year {
        Y2018 = 18,
        Y2019,
        Y2020,
        Y2021
    }

    struct Student {
        private string name;
        private string gender;
        private Campus campus;
        private Session session;
        private Program program;
        private Year year;
        private string rollNo;

        public Student(string name = "Student", string gender = "M", Campus campus = Campus.ISB,
            Session session = Session.SP, Program program = Program.BCS, Year year = Year.Y2021, string rollNo = "001",
            bool redundant = true) {
            this.name = name;
            this.gender = gender;
            this.campus = campus;
            this.session = session;
            this.program = program;
            this.year = year;
            this.rollNo = rollNo;
        }

        public void addStudent(string name, string gender, Campus campus, Session session, Program program, Year year, string rollNo) {
            this.name = name;
            this.gender = gender;
            this.campus = campus;
            this.session = session;
            this.program = program;
            this.year = year;
            this.rollNo = rollNo;
        }

        public void updateStudent(string name, string gender, Campus campus, Session session, Program program, Year year, string rollNo) {
            this.name = name;
            this.gender = gender;
            this.campus = campus;
            this.session = session;
            this.program = program;
            this.year = year;
            this.rollNo = rollNo;
        }

        public void deleteStudent() {
            name = default;
            gender = default;
            campus = default;
            session = default;
            program = default;
            year = default;
            rollNo = default;
        }

        public void displayStudentDetails() {
            Console.WriteLine("Name: " + name);
            Console.WriteLine("Gender: " + gender);
            Console.WriteLine("Registration number: " + this);
            Console.WriteLine("Email: " + getRegNo() + "@" + campus.ToString().ToLower() + "student.comsats.edu.pk");
        }

        public override string ToString() {
            return "CUI/" + getRegNo() + "/" + campus;
        }

        private string getRegNo() {
            return $"{session}{Convert.ToInt32(year)}-{program}-{rollNo}";
        }
    }

    class Assignment {
        private static void Main(string[] args) {
            bool dynamic;
            while (true)
                try {
                    Console.Write("Choose Structure: \n" + "1 - static\n2 - dynamic\n");
                    var choiceInt = int.Parse(Console.ReadLine());
                    switch (choiceInt) {
                        case 1:
                            dynamic = false;
                            break;
                        case 2:
                            dynamic = true;
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            if (!dynamic) {
                int num;
                while (true) {
                    Console.Write("Enter number of students: ");
                    try {
                        num = int.Parse(Console.ReadLine());
                        break;
                    }
                    catch (Exception) {
                        Console.WriteLine("Invalid number .. try again");
                    }
                }

                // part 2 static list
                var students = new Student[num];

                for (var i = 0; i < students.Length; i++) students[i] = getStudentFromUser();

                for (var i = 0; i < students.Length; i++) {
                    students[i].displayStudentDetails();
                    Console.WriteLine();
                }
            }
            else {
                // part 3 dynamic list
                var students = new ArrayList();

                while (true) {
                    bool add;
                    while (true)
                        try {
                            Console.Write("Add student? : \n" + "1 - yes\n2 - no\n");
                            var choiseInt = int.Parse(Console.ReadLine());
                            switch (choiseInt) {
                                case 1:
                                    add = true;
                                    break;
                                case 2:
                                    add = false;
                                    break;
                                default:
                                    throw new ArgumentException("Invalid Option");
                            }

                            break;
                        }
                        catch (Exception) {
                            Console.WriteLine("Invalid option.. try again");
                        }

                    if (add)
                        students.Add(getStudentFromUser());
                    else
                        break;
                }

                foreach (Student student in students) {
                    student.displayStudentDetails();
                    Console.WriteLine();
                }
            }
        }

        private static Student getStudentFromUser() {
            while (true)
                try {
                    Console.Write("Use default values for studemt?: \n" + "1 - Yes\n2 - No, enter values manually\n");
                    var campusInt = int.Parse(Console.ReadLine());
                    switch (campusInt) {
                        case 1:
                            return new Student(redundant: true);
                        case 2:
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            string name;
            string gender;
            string rollNo;
            Campus campus;
            Session session;
            Program program;
            Year year;

            Console.Write("Enter name: ");
            name = Console.ReadLine();

            Console.Write("Enter gender: ");
            gender = Console.ReadLine();

            Console.Write("Enter roll number: ");
            rollNo = Console.ReadLine();

            while (true)
                try {
                    Console.Write("Choose Campus: \n" + "1 - ISB\n2 - LHR\n3 - ABT\n4 - WAH\n");
                    var campusInt = int.Parse(Console.ReadLine());
                    switch (campusInt) {
                        case 1:
                            campus = Campus.ISB;
                            break;
                        case 2:
                            campus = Campus.LHR;
                            break;
                        case 3:
                            campus = Campus.ABT;
                            break;
                        case 4:
                            campus = Campus.WAH;
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            while (true)
                try {
                    Console.Write("Choose Session: \n" + "1 - FA\n2 - SP\n");
                    var sessionInt = int.Parse(Console.ReadLine());
                    switch (sessionInt) {
                        case 1:
                            session = Session.FA;
                            break;
                        case 2:
                            session = Session.SP;
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            while (true)
                try {
                    Console.Write("Choose Program: \n" + "1 - BCS\n2 - BSE\n3 - BBA\n4 - BAF\n");
                    var programInt = int.Parse(Console.ReadLine());
                    switch (programInt) {
                        case 1:
                            program = Program.BCS;
                            break;
                        case 2:
                            program = Program.BSE;
                            break;
                        case 3:
                            program = Program.BBA;
                            break;
                        case 4:
                            program = Program.BAF;
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            while (true)
                try {
                    Console.Write("Choose Year: \n" + "1 - 2018\n2 - 2019\n3 - 2020\n4 - 2021\n");
                    var yearInt = int.Parse(Console.ReadLine());
                    switch (yearInt) {
                        case 1:
                            year = Year.Y2018;
                            break;
                        case 2:
                            year = Year.Y2019;
                            break;
                        case 3:
                            year = Year.Y2020;
                            break;
                        case 4:
                            year = Year.Y2021;
                            break;
                        default:
                            throw new ArgumentException("Invalid Option");
                    }

                    break;
                }
                catch (Exception) {
                    Console.WriteLine("Invalid option.. try again");
                }

            return new Student(name, gender, campus, session, program, year, rollNo, false);
        }
    }
}