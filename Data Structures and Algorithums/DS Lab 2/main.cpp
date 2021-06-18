#include <iostream>
using namespace std;


class nodeS{
public:
    nodeS *next;
    int value;
};

class nodeF{
public:
    nodeF *next;
    nodeS *root;
    int value;
};

class graph{

public:
    nodeF *root;
    nodeF *locX;

    graph(){
        root = nullptr;
    }

    bool hasEdges(){
        return root == nullptr;
    }

    void searchX(int x){
        locX = root;
        while(locX != nullptr){
            if (locX->value == x)
                return;
            locX = locX->next;
        }
        locX = nullptr;
    }

    void insertRelation(int x, int y){
        if (hasEdges()) {
            searchX(x);
            if
        }
    }

public:
    graph(int n)
    {

    };
};

int main() {
    return 0;
}