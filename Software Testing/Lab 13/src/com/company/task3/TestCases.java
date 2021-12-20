package com.company.task3;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TestCases {
    public Student testObject1;
    public Faculty testObject2;

    @BeforeEach
    public void createObjects(){
        testObject1 = new Student("Ammar", new float[] {2,3,4}, new float[] {3,1,2},  new float[] {2,3} );
        testObject2 = new Faculty("Teacher 1", new String[] {"publication1", "publication2"});
    }

    @Test
    public void testStudentAssignmentMarks(){
        Assertions.assertEquals(2, testObject1.assignmentMarks[0]);
        Assertions.assertEquals(3, testObject1.assignmentMarks[1]);
        Assertions.assertEquals(4, testObject1.assignmentMarks[2]);
    }

    @Test
    public void testStudentQuizMarks(){
        Assertions.assertEquals(3, testObject1.quizMarks[0]);
        Assertions.assertEquals(1, testObject1.quizMarks[1]);
        Assertions.assertEquals(2, testObject1.quizMarks[2]);
    }

    @Test
    public void testStudentSessionalMarks(){
        Assertions.assertEquals(2, testObject1.sessionalMarks[0]);
        Assertions.assertEquals(3, testObject1.sessionalMarks[1]);
    }

    @Test
    public void testEmployeePublicationsCount(){
        Assertions.assertEquals(2, testObject2.publications.length);
    }

    @AfterEach
    public void after(){
        System.out.println("done");
    }

}
