#include<stdio.h> 
#include<stdlib.h> 
#include<sys/wait.h> 
#include<unistd.h>

int main(char *argc, char *argv) { 
    char degreeName[100];
    char departmentName[100];
    printf("Enter your degree name : ");
    scanf("%[^\n]%*c", degreeName);
    printf("Enter your department name : ");
    scanf("%[^\n]%*c", departmentName);
}