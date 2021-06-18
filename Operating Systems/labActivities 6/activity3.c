#include<stdio.h> 
#include<stdlib.h> 
#include<sys/wait.h> 
#include<unistd.h>  

int main(void) { 
    int pid;
    printf("creating child"); 
    pid = fork(); 
    if (pid == 0){
        exit(0);
    }
    else{
        sleep(100);
    }
}