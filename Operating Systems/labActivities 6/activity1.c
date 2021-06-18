#include <stdio.h> 
#include <unistd.h>

int main(void) { 
    int pid;
    printf("I am the parent process and pid is: %d .\n",getpid()); 
    pid = fork(); 
    if (pid == 0)
        printf("I am the child process and pid is :%d.\n",getpid()); 
    else
        
        printf("I am the parent process and pid if my child is: %d .\n",pid); 
}