package com.junitTest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;


public class NumberTest {

    @Before
    public void beforeTest() {
        System.out.println("Before");
    }


    @Test
    public void palindromeTest (){
        Number test=new Number();
        assertEquals("palindrome",test.palindrome(22122));

    }

    @Test
    public void factTest (){
        Number test=new Number();
        assertEquals(5040,test.fact(7));
    }

    @Test
    public void sumTest (){
        Number test=new Number();
        assertEquals(16,test.sum(745));
    }



    @After
    public void afterTest() {
        System.out.println("After");
    }

}

class Number {

    public int fact(int num){
        int fact=1;
        for(int i=1; i<=num; i++){
            fact=fact*i;
        }
        return fact;
    }


    public int sum(int num){
        int sum=0;
        while(num != 0) {
            int digit = num % 10;
            sum = sum + digit;

            num /= 10;
        }

        return sum;
    }

    public String palindrome(int num){
        char[] a = Integer.toString(num).toCharArray();
        for (int x = 0; x < a.length; x++){
            if (a[x] != a[a.length - 1 - x])
                return "not palindrome";
        }
        return "palindrome";

    }

}



