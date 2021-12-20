package com.junitTest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;



public class TriangleTest {

    @Before
    public void beforeTest() {
        System.out.println("Before");
    }


    @Test
    public void notTriangleTest (){
        assertFalse(Triangle.isTriangle(1, 2, 5));

    }

    @Test
    public void equilateralTriangleTest (){
        assertEquals("Equilateral",Triangle.getType(3, 3, 3));

    }


    @Test
    public void isoscelesTriangleTest (){
        assertEquals("Isosceles",Triangle.getType(2, 2, 3));

    }


    @Test
    public void scaleneTriangleTest (){
        assertEquals("Scalene",Triangle.getType(2, 3, 4));
    }



    @After
    public void afterTest() {
        System.out.println("After");
    }

}


class Triangle {

    public static void testTriangle(float s1,float s2,float s3){
        System.out.printf("The triangle (%f, %f, %f) ", s1, s2, s3);
        if (isTriangle(s1,s2,s3)){
            System.out.println("Is a " + getType(s1,s2,s3) + " triangle");
        }else {
            System.out.println("Is not a triangle");
        }
    }

    public static boolean isTriangle(float s1,float s2,float s3){
        if (s1 + s2 < s3)
            return false;
        else if (s1 + s3 < s2)
            return false;
        else return !(s2 + s3 < s1);
    }

    public static String getType(float s1,float s2,float s3){

        if (s1 == s2 && s2 == s3)
            return "Equilateral";
        else if (s3==s2 || s1==s2 || s1==s3)
            return "Isosceles";

        return "Scalene";
    }
}