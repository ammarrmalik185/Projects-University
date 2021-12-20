#include <iostream>
#include "Manager.cpp"

using namespace std;

int main() {
    auto *manager = new Manager();
    manager->parseComplete();


    cout << "Query No 1 : " << "No of Articles by Mohsen Guizani : ";
    manager->queryQ1("Mohsen Guizani");
    cout << "---------------------------------------------" << endl << endl;
    cout << "Query No 2 : " << "No of Articles by Mohsen Guizani (years) " << endl << "year : article count" << endl;
    manager->queryQ2("Mohsen Guizani");
    cout << "---------------------------------------------" << endl << endl;
    cout << "Query No 3 : " << "Journals by Mohsen Guizani " << endl << "year : position : Journal Name" << endl;
    manager->queryQ3v2("Mohsen Guizani");
    cout << "---------------------------------------------" << endl << endl;
    cout << "Query No 4 : " << "Position in which Mohsen Guizani has published an article" << endl << "position : count" << endl;
    manager->queryQ4("Mohsen Guizani");
    cout << "---------------------------------------------" << endl << endl;
    cout << "Query No 5 : " << "Journals by Mohsen Guizani " << endl << "year : Journal Name" << endl;
    manager->queryQ5("Mohsen Guizani");



}

