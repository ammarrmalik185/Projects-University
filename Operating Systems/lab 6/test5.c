// C program to demonstrate working of wait() and exit()
#include<stdio.h> 
#include<stdlib.h> 
#include<sys/wait.h> 
#include<unistd.h>   

int main() {     
    pid_t cpid;     
    if (fork()== 0){    
        sleep(10);     
        exit(0);
    }           
        /* terminate child – exit (0) means normal termination */
    else        
        cpid = wait(NULL); 
        /* parent will wait until child terminates */    
    printf("Parent pid = %d\n", getpid()); 
    printf("Child pid = %d\n", cpid);
    return 0; 
} 