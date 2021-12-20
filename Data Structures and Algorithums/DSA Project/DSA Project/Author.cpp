#include <iostream>
#include "DataStructures.cpp"

using namespace std;

// class that contains data of an author
class Author{
public:
    string fullname;
    ArticleLinkList *articles;
    Author(){

    }

};

// node of author link list
class AuthorNode{
public:
    AuthorNode *next;
    Author *value;
};

// a link list for author
class AuthorLinkList{
public:
    AuthorNode *start;
    AuthorNode *loc;
    AuthorNode *ploc;
    int count;

    AuthorLinkList(){
        start = nullptr;
        count = 0;
    };

    bool isEmpty(){
        return start == nullptr;
    }

    void search(string name){
        if (isEmpty()){
            loc = nullptr;
            return;
        }
        else
        {
            loc = start;
            while (loc != nullptr)
            {
                if (loc->value->fullname.compare(name) == 0)
                    return;
                else
                    loc = loc->next;
            }
        }

    }

    void searchSorted(string name){

        loc = start;
        ploc = nullptr;
        while (loc != nullptr){
            if (loc->value->fullname.compare(name) == 1){
                return;
            }
            else{
                ploc = loc;
                loc = loc->next;
            }
        }
        loc = nullptr;
    }

    void insertSorted(Author *author){
        auto *newNode = new AuthorNode();
        newNode->value = author;
        if (isEmpty()){
            start = newNode;
        }
        else{
            searchSorted(author->fullname);
            if (ploc == nullptr){
                newNode ->next = start;
                start = newNode;

            }
            else{
                if (loc  == nullptr){
                    ploc ->next = newNode;
                    newNode->next = nullptr;

                }
                else{
                    newNode->next = loc;
                    ploc ->next = newNode;
                }
            }
        }
    }

    void insertUnsorted(Author *author){
        count ++;
        auto *newNode = new AuthorNode();
        newNode->value = author;
        if (isEmpty()){
            start = newNode;
        }else{
            loc = start;
            ploc = nullptr;
            while (loc != nullptr){
                ploc = loc;
                loc = loc->next;
            }
            ploc->next = newNode;

        }
    }

    void print(){
        loc = start;
        while(loc != nullptr)
        {
            cout << loc->value->fullname << endl;
            loc = loc->next;
        }
    }
};

// node of author tries
class TrieNodeAuthor
{
public:
    static const int charCount = 96;
    TrieNodeAuthor *character[charCount];
    Author *value;

    // Constructor
    TrieNodeAuthor()
    {
        value = nullptr;
        for (int i = 0; i < charCount; i++)
            this->character[i] = nullptr;
    }
};

// author tries
class TrieAuthor {
public:
    TrieNodeAuthor *RootNode;
    TrieNodeAuthor *loc;
    int count = 0;

    bool isEmpty() {
        return RootNode == nullptr;
    }

    void insert(Author *author) {
        if (isEmpty())
            RootNode = new TrieNodeAuthor();

        loc = RootNode;
        for (char i : author->fullname) {
            if (loc->character[getLocation(i)] == nullptr) {
                loc->character[getLocation(i)] = new TrieNodeAuthor();
            }
            loc = loc->character[getLocation(i)];
        }
        if (loc->value == nullptr) {
            loc->value = author;
            count++;
        }
    }

    void search(string fullname) {
        if (isEmpty()) {
            loc = nullptr;
            return;
        }
        loc = RootNode;
        for (char i : fullname) {
            loc = loc->character[getLocation(i)];
            if (loc == nullptr)
                return;
        }
    }

    void print() {
        print(RootNode);
    }

    void print(TrieNodeAuthor *start) {
        if (isEmpty())
            return;

        for (int i = 0; i < TrieNodeAuthor::charCount; i++)
            if (start->character[getLocation(i)] != nullptr)
                print(start->character[getLocation(i)]);
        if (start->value != nullptr) {
            cout << start->value->fullname << endl;
        }
    }


};





