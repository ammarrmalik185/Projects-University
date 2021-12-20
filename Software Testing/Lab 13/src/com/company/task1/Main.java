package com.company.task1;

class Cylinder {
    private Circle topCircle;
    private Circle bottomCircle;
    private Line leftHeight;
    private Line rightHeight;

    public Cylinder(Circle topCircle, Circle bottomCircle, Line leftHeight, Line rightHeight) {
        this.topCircle = topCircle;
        this.bottomCircle = bottomCircle;
        this.leftHeight = leftHeight;
        this.rightHeight = rightHeight;
    }

    public Circle getTopCircle() {
        return topCircle;
    }

    public void setTopCircle(Circle topCircle) {
        this.topCircle = topCircle;
    }

    public Circle getBottomCircle() {
        return bottomCircle;
    }

    public void setBottomCircle(Circle bottomCircle) {
        this.bottomCircle = bottomCircle;
    }

    public Line getLeftHeight() {
        return leftHeight;
    }

    public void setLeftHeight(Line leftHeight) {
        this.leftHeight = leftHeight;
    }

    public Line getRightHeight() {
        return rightHeight;
    }

    public void setRightHeight(Line rightHeight) {
        this.rightHeight = rightHeight;
    }
}

class Circle{

    private double radius;
    private Point center;

    public Circle(double radius){
        this.radius = radius;
    }

    public double getArea(){
        return Math.PI * radius * radius;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    public Point getCenter() {
        return center;
    }

    public void setCenter(Point center) {
        this.center = center;
    }
}

class Line{
    private Point start;
    private Point end;
    public Line(Point start, Point end){
        this.start = start;
        this.end = end;
    }
    
    public double getDistance(){
        return Math.sqrt(Math.pow(start.getX() - end.getX(), 2) + Math.pow(start.getY() - end.getY(), 2));
    }

    public Point getStart() {
        return start;
    }

    public void setStart(Point start) {
        this.start = start;
    }

    public Point getEnd() {
        return end;
    }

    public void setEnd(Point end) {
        this.end = end;
    }
}

class Point{

    private double x;
    private double y;

    public Point(double x, double y){
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }
}
