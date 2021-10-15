
public class Main{

    public static void main(String[]args){

        CourseResult c1 = new CourseResult(); 
        c1.studentName= "Ali";
        c1.courseName= "OOP";
        c1.grade= "A";
        c1.display();

        CourseResult c2=new CourseResult();
        c2.studentName= "Saba";
        c2.courseName= "ICP";
        c2.grade= "A+";
        c2.display();

    }

}

public class CourseResult{

    public String studentName;
    public String courseName;
    public String grade;

    public void display(){
        // if grade is A, it is shown as A+
        System.out.println("Student Name is:" + courseName + "\nCourse Name is:" + studentName + "\nGrade is:" + (grade=="A"?"A+":grade) + "\n"); 
    }
}

// Test cases:
//      Working:
//          ("a", "a", "B")
//          ("b", "b", "C")
//          ("c", "c", "A+")
//      Not Working:
//          ("a", "a", "A")
//          ("b", "a", "C")
//          ("c", "f", "A+")