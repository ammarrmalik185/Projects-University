package com.company.task1;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TestCases {
    public Cylinder testObject;

    @BeforeEach
    public void createObject(){
        testObject = new Cylinder(
                new Circle(12),
                new Circle(32),
                new Line( new Point(1,2), new Point(3,4)),
                new Line( new Point(3,4), new Point(4,5))
        );
    }

    @Test
    public void testArea1(){
        Assertions.assertEquals(452.38, testObject.getTopCircle().getArea(), 0.1);
    }

    @Test
    public void testArea2(){
        Assertions.assertEquals(3216.99, testObject.getBottomCircle().getArea(), 0.1);
    }

    @Test
    public void testHeight1(){
        Assertions.assertEquals(2.8, testObject.getLeftHeight().getDistance(), 0.1);
    }

    @Test
    public void testHeight2(){
        Assertions.assertEquals(1.4, testObject.getRightHeight().getDistance(), 0.1);
    }

    @AfterEach
    public void testCaseDone(){
        System.out.println("done");
    }

}
