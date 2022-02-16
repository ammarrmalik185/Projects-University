package com.junitTest;
import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.Ignore;

public class NumberTest {

    Number test;

    @Before
    public void beforeTest() {
        test = new Number();
    }

    @Test
    public void palindromeTest (){
        assertEquals("palindrome",test.palindrome(22122));
    }

    @Test
    public void factTest (){
        assertEquals(5040,test.fact(7));
        assertEquals(4.5, 4.4, 0.2);
        fail();
    }

    @Test
    public void sumTest (){
        assertNull(null);
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



