package com.junitTest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Before
    public void beforeTest() {
        System.out.println("Before");
    }


    @Test
    public void addTest (){
        Calculator test=new Calculator();
        assertEquals(4, test.add(2, 2));
    }

    @Test
    public void subTest (){
        Calculator test=new Calculator();
        assertEquals(2, test.sub(7, 5));
    }

    @Test
    public void mulTest (){
        Calculator test=new Calculator();
        assertEquals(6, test.mul(2, 3));
    }

    @Test
    public void squareTest (){
        Calculator test=new Calculator();
        assertEquals(9, test.square(3));
    }

    @Test
    public void cubeTest (){
        Calculator test=new Calculator();
        assertEquals(27, test.cube(3));
    }

    @After
    public void afterTest() {
        System.out.println("After");
    }

}

class Calculator{
    int add(int a, int b){
        return a + b;
    }
    int sub(int a, int b){
        return a - b;
    }
    int mul(int a, int b){
        return a * b;
    }
    int square(int a){
        return a * a;
    }
    int cube(int a){
        return a * a * a;
    }
}
