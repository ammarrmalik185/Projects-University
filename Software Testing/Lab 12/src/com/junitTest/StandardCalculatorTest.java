package com.junitTest;

import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import java.util.Arrays;
import java.util.Collection;

import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
//@Category(UnitTest.class)
public class StandardCalculatorTest {

    @Parameters
    public static Collection<Object[]> testData() {
        return Arrays.asList(new Object[][]{
                {0, 0, 0}, {1, 1, 2}, {2, 3, 5}
        });
    }

    private final Calculator calculator;
    private final int first;
    private final int second;
    private final int expectedSum;

    public StandardCalculatorTest(int first, int second, int expectedSum) {
        this.calculator = new Calculator();
        this.first = first;
        this.second = second;
        this.expectedSum = expectedSum;
    }

    @Test
    public void shouldReturnCorrectSum() {
        int actualSum = calculator.sum(first, second);
        assertEquals(actualSum, expectedSum);
    }
}

class Calculator {

    public int sum(int first, int second) {
        return first + second;
    }
}