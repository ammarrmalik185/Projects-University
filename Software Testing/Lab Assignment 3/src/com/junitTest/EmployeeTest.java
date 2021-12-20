package com.junitTest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class EmployeeTest {

    @Test
    public void calculateBonusTest0(){
        Employee e = new Employee("Ammar", 1000, 0);
        assertEquals(0, e.calculateBonus(), 0.1);
    }

    @Test
    public void calculateBonusTest50(){
        Employee e = new Employee("Ammar", 1000, 2);
        assertEquals(500, e.calculateBonus(), 0.1);
    }

    @Test
    public void calculateBonusTest75(){
        Employee e = new Employee("Ammar", 1000, 7);
        assertEquals(750, e.calculateBonus(), 0.1);
    }

    @Test
    public void calculateBonusTest100(){
        Employee e = new Employee("Ammar", 1000, 11);
        assertEquals(1000, e.calculateBonus(), 0.1);
    }


}

class Employee {
    String name;
    float salary;
    int yearsOfService;

    Employee(String name, float salary, int yearsOfService){
        this.name = name;
        this.salary = salary;
        this.yearsOfService = yearsOfService;
    }

    float calculateBonus(){
        float bonus = 0;
        if (yearsOfService < 1)
            bonus = 0;
        else if (yearsOfService <=5)
            bonus = 50;
        else if (yearsOfService <= 9)
            bonus = 75;
        else if (yearsOfService <= 15)
            bonus = 100;

        float bonusAmount = salary * bonus / 100;
        System.out.println("The bonus percent of " + name + " is: " + bonus + " and the bonus amount is: " + bonusAmount);

        return bonusAmount;
    }
}
