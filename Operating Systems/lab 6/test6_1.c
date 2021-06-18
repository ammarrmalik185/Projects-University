#include<stdio.h> 
#include<stdlib.h> 
#include<unistd.h>  

int main(int argc, char *argv[]){
    printf("This is part 1\n");
    char* args[] = {"Hello", " ", "World", NULL};
    execv("./test6_2", args);
    printf("back to part 1\n");
    return 0;
}