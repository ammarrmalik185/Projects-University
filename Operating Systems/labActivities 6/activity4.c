#include<stdio.h> 
#include<stdlib.h> 
#include<sys/wait.h> 
#include<unistd.h>
int main(void) {
    
    printf("creating child\n"); 
    int pid = fork(); 

    if (pid == 0){
        int age;
        printf("Enter your Age :");
        scanf("%d", age);
        printf("You Typed: %d\n", age);
        return(age);
    }
    else{
        int age;
        wait(&age);
        printf("Your Age is: %d\n", age);
    }
}