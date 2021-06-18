
#include <iostream>
#include <random>
using namespace std;

class ListNode

{
public:
    int data;
    ListNode *next;

};


class LinkedList
{
public:
    ListNode *loc;
    ListNode *ploc;
    ListNode *start;
    bool keep;

public:
    LinkedList()
    {

        loc = nullptr;
        ploc = nullptr;
        start = nullptr;
        keep = true;

    }


    bool isEmpty()
    {
        return start == nullptr;
    }


    void addAtStart(int value)
    {

        auto *newNode = new ListNode();
        newNode -> data = value;
        newNode -> next = start;
        start = newNode;
    }


    void print()
    {

        ListNode *temp = start;
        if (! this->isEmpty())
            while(temp != nullptr)
            {

                cout<<temp->data<<" ";
                temp = temp->next;

            }
        cout << endl;

    }


    void search(int value)
    {
        loc = start;
        ploc = nullptr;
        bool found = false;
        while (loc != nullptr && loc->data <= value)
        {
            if (loc->data == value)
            {
                found = true;
                break;
            }
            else
            {
                ploc = loc;
                loc = loc->next;
            }
        }
        if (!found)
            loc = nullptr;
    }


    void insertSorted(int value)
    {
        if (!isEmpty())
        {
            search(value);
            if (loc != nullptr)
            {
                cout << "already available";
            }
            else
            {
                if (ploc != nullptr)
                {
                    auto *newNode = new ListNode();
                    newNode->data = value;
                    newNode->next = ploc->next;
                    ploc->next = newNode;
                }
                else
                {
                    addAtStart(value);
                }
            }
        }
        else
        {

            addAtStart(value);

        }


    }


    void deleteValue(int value)
    {
        search(value);
        if (isEmpty() || loc == nullptr)
            cout << "value not found" << endl;
        else
        {
            if (loc != start)
            {
                ploc->next = loc->next;
                delete loc;
            }
            else
            {
                start = loc->next;
                delete(loc);
            }

        }


    }

    void question1(){
        reverseList(start)->next = nullptr;
    }

    ListNode* reverseList(ListNode *node){
        if (!isEmpty()) {
            if (node->next == nullptr) {
                start = node;
                return node;
            } else {
                reverseList(node->next)->next = node;
                return node;
            }
        }
    }

    void question2(){
        question2(start);
        cout << endl;
    }

    void question2(ListNode *node){
        if (node == nullptr)
            return;
        else{
            if (node->data % 2 != 0){
                cout << node->data << " ,";
                question2(node->next);
            }
            else{
                question2(node->next);
                cout << node->data << " ,";
            }

        }
    }

    void question3(){
        question3(start)->next = nullptr;
    }

    ListNode* question3(ListNode *node){
        if (node->next == nullptr){
            keep = false;
            start = node;
            return node;
        }
        else{
            ListNode *lastNode = question3(node->next);
           if (keep) {
               lastNode->next = node;
               keep = false;
               return node;
           }
           else{
               keep = true;
               return lastNode;
           }
        }
    }

    void question4(){
        question4(start, true);
    }

    ListNode* question4(ListNode *node, bool odd){

        if ((node->next == nullptr || node->next->next == nullptr) && odd){
            start = node;
            return node;
        }
        else{
            if (odd){
                ListNode *lastNode = question4(node->next, !odd);
                lastNode->next = node;
                return node;
            }
            else{
                ListNode *lastNode = question4(node->next, !odd);
                node->next = node->next->next;
                return lastNode;
            }
        }

    }
};


void printAdded(int &c){
    c++;
    cout << c << endl;
}

//int main()
//{
//
//    int a = 8;
//    printAdded(a);
//    cout << a;



//    auto *list = new LinkedList();
//
//    list->insertSorted(1);
//    list->insertSorted(2);
//    list->insertSorted(3);
//    list->insertSorted(4);
//    list->insertSorted(5);
//    list->insertSorted(6);
//    list->insertSorted(7);
//    list->insertSorted(8);
//    list->insertSorted(9);
//    list->insertSorted(10);
//
//    list->print();
//
//    list->question1();
//
//    list->print();
//
//    list->question2();
//
//    list->print();
//
//    list->question3();
//
//    list->print();
//
//    list->question4();
//
//    list->print();



//
//    return 0;

//}

