#include <stdio.h> 
#include <unistd.h>

int main(void) { 
    int pid;
    printf("creating child\n"); 
    pid = fork(); 
    if (pid == 0){
        sleep(5); 
        printf("orphan child exiting\n");
    }
    else
        printf("parent exiting\n");
}
