//import Math.*;
public class Main{
    public static void main(String args[]) {
        Line line = new Line(new Point(1, 2), new Point(3, 4));
        System.out.println(line.calculateLength());

        Line line2 = new Line(new Point(2, 2), new Point(2, 2));
        System.out.println(line2.calculateLength());
    }
}

public class Point{
    public double x;
    public double y;
    Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}

public class Line{
    public Point startPoint;
    public Point endPoint;
    Line(Point p1, Point p2){
        startPoint = p1;
        // Problem is here (no fault if p1 == p2)
        endPoint = p1;
    }
    public int calculateLength(){
        // Lossy converstion looses float point when calculating
        return (int) Math.hypot(startPoint.x - endPoint.x, startPoint.y - endPoint.y);
    }
}

// Test cases:
//      Working:
//          (1, 2, 1, 2)
//          (1, 3, 1, 3)
//          (4, 5, 4, 5)
//      Not Working:
//          (1, 2, 2, 3)
//          (2, 3, 5, 6)
//          (3, 5, 2, 1)