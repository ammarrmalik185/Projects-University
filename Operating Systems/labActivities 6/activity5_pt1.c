#include<stdio.h> 
#include<stdlib.h> 
#include<sys/wait.h> 
#include<unistd.h>

int main(void) { 
    char name[100];
    char universityName[100];
    char* args[] = {"Hello", " ", "World", NULL};
    printf("Enter your name : ");
    scanf("%[^\n]%*c", name);
    printf("Enter your University name :");
    scanf("%[^\n]%*c", universityName);
    execv("./activity5_pt2", NULL);
}