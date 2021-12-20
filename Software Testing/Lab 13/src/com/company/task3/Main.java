package com.company.task3;

class Employee{
    String name;

    public Employee(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

class Student extends Employee{
    float[] assignmentMarks;
    float[] quizMarks;
    float[] sessionalMarks;

    public float[] getAssignmentMarks() {
        return assignmentMarks;
    }

    public void setAssignmentMarks(float[] assignmentMarks) {
        this.assignmentMarks = assignmentMarks;
    }

    public float[] getQuizMarks() {
        return quizMarks;
    }

    public void setQuizMarks(float[] quizMarks) {
        this.quizMarks = quizMarks;
    }

    public float[] getSessionalMarks() {
        return sessionalMarks;
    }

    public void setSessionalMarks(float[] sessionalMarks) {
        this.sessionalMarks = sessionalMarks;
    }

    public Student(String name, float[] assignmentMarks, float[] quizMarks, float[] sessionalMarks) {
        super(name);
        this.assignmentMarks = assignmentMarks;
        this.quizMarks = quizMarks;
        this.sessionalMarks = sessionalMarks;
    }
}

class Faculty extends Employee{
    String[] publications;

    public Faculty(String name, String[] publications) {
        super(name);
        this.publications = publications;
    }

    public String[] getPublications() {
        return publications;
    }

    public void setPublications(String[] publications) {
        this.publications = publications;
    }
}
