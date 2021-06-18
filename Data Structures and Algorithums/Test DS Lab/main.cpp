#include <iostream>

#include <iostream>
using namespace std;
class ListNode{
public:
    int data;
    ListNode *next;
};
class LinkedList{
private:
    ListNode *loc;
    ListNode *ploc;
    ListNode *first;
    bool IsEmpty(){
        return first==NULL;
    }
    void InsertatFront(int value) {
        ListNode *listNode = new ListNode();
        listNode->data = value;
        listNode->next = first;
        first = listNode;
    }
    void Search(int value){
        if (IsEmpty())
            return;
        else{
            loc = first;
            ploc=NULL;
            while (loc!=NULL && loc->data<value){
                ploc = loc;
                loc = loc->next;
            }
            if (loc!=NULL && loc->data!=value)
                loc=NULL;
        }
    }
public:
    LinkedList() {
        first = NULL;
        loc = NULL;
        ploc = NULL;
    }
    void InsertSorted(int value){
        if (IsEmpty())
            InsertatFront(value);
        else{
            Search(value);
            if (loc!=NULL)
                cout << "Value Already Exists" << endl;
            else {
                if (ploc==NULL)
                    InsertatFront(value);
                else {
                    ListNode *listNode = new ListNode();
                    listNode->data = value;
                    listNode->next = ploc->next;
                    ploc->next = listNode;
                }
            }
        }
    }
    void PrintList(){
        if (IsEmpty()) {
            cout<<"List is Empty" << endl;
            return;
        }
        else{
            ListNode *temp;
            temp = first;
            while (temp!=NULL){
                cout << temp->data << " ";
                temp= temp->next;
            }
        }
        cout<<endl;
    }
    void ReversePrint(){
        if (IsEmpty())
            cout << "List is Empty " << endl;
        else{
            ListNode *Last = NULL;
            ListNode *temp;
            temp=first;
            while (temp==first && Last!=first)
                while (temp!=Last){
                    if (temp->next==Last){
                        cout<<temp->data << " ";
                        Last=temp;
                        temp=first;
                    }
                    else
                        temp = temp->next;
                }
            cout << endl;
        }
    }
    void Delete(int value){
        if (IsEmpty())
            return;
        else{
            Search(value);
            if (loc!=NULL && loc->data==value){
                if (ploc==NULL)
                    first=loc->next;
                else
                    ploc->next=loc->next;
                delete(loc);
            } else
                cout << "Value Doesnt Exists" << endl;
        }
    }
    void DeleteList(){
        if (IsEmpty())
            return;
        else{
            ListNode *temp = first;
            while (first!=NULL){
                first = first->next;
                delete(temp);
                temp = first;
            }
        }
    }
    void DeleteEven(){
        if (IsEmpty())
            return;
        else{
            ListNode *temp = first;
            while (temp!=NULL) {
                if (temp->data%2==0){
                    Search(temp->data);
                    if (ploc==NULL)
                        first=loc->next;
                    else
                        ploc->next = loc ->next;
                    temp = temp->next;
                } else{
                    temp=temp->next;
                }
            }
        }
    }
    void DeleteOdd(){
        if (IsEmpty())
            return;
        else{
            ListNode *temp = first;
            while (temp!=NULL) {
                if (temp->data%2!=0){
                    Search(temp->data);
                    if (ploc==NULL)
                        first=loc->next;
                    else
                        ploc->next = loc ->next;
                    temp = temp->next;
                } else{
                    temp=temp->next;
                }
            }
        }
    }
    void ReverseList(){
        if (IsEmpty())
            return;
        else{
            ListNode *ploc = NULL;
            ListNode *loc = first;
            ListNode *sloc = first->next;
            while (loc!=NULL){
                loc->next=ploc;
                ploc=loc;
                if (sloc==NULL){
                    first=loc;
                    return;
                }
                loc=sloc;
                sloc=sloc->next;
            }
        }
    }
    void Arrange(){
        if(IsEmpty()){
            cout<<"List is empty.."<<endl;
            return;
        }
        ListNode *temp=first;
        LinkedList *even = new LinkedList();
        LinkedList *odd = new LinkedList();
        while(temp!=NULL){
            if((temp->data%2)==0){
                even->InsertSorted(temp->data);
                temp=temp->next;
            }
            else{
                odd->InsertSorted(temp->data);
                temp=temp->next;
            }
        }
        this->first=even->first;
        temp=this->first;
        while(temp!=NULL){
            if(temp->next==NULL){
                temp->next=odd->first;
                return;
            } else
                temp=temp->next;
        }
    }
    void SwapElements(int value1 , int value2){
        if (IsEmpty()){
            return;
        } else{
            Search(value1);
            ListNode *loc1 = loc;
            ListNode *ploc1 = ploc;
            Search(value2);
            ListNode *loc2 = loc;
            ListNode *ploc2 = ploc;
            if(loc1==NULL&&loc2==NULL) {
                return;
            }
            else {
                if (loc1==first || loc2==first) {
                    if (loc1==first){
                        loc = loc2->next;
                        first = loc2;
                        ploc2->next = loc1;
                        first->next = loc1->next;
                        loc1->next = loc;
                    }
                    else{
                        loc = loc1->next;
                        first = loc1;
                        ploc1->next = loc2;
                        first->next = loc2->next;
                        loc2->next = loc;
                    }
                }
                else if(loc1->next==loc2 || loc2->next==loc1){
                    if (loc1->next==loc2){
                        loc1->next=loc2->next;
                        loc2->next=loc1;
                        ploc1->next=loc2;
                    } else{
                        loc2->next=loc1->next;
                        loc1->next=loc2;
                        ploc2->next=loc1;
                    }
                }
                else{
                    loc = loc2->next;
                    ploc1->next = loc2;
                    ploc2->next = loc1;
                    loc2->next = loc1->next;
                    loc1->next = loc;
                }
            }
        }
    }
};
int main() {
    LinkedList *linkedList = new LinkedList();
    linkedList->InsertSorted(2);
    linkedList->PrintList();
    linkedList->InsertSorted(8);
    linkedList->PrintList();
    linkedList->InsertSorted(10);
    linkedList->PrintList();
    linkedList->InsertSorted(9);
    linkedList->PrintList();
    linkedList->InsertSorted(16);
    linkedList->InsertSorted(91);
    linkedList->PrintList();
    linkedList->InsertSorted(5);
    linkedList->PrintList();
    linkedList->PrintList();
    linkedList->SwapElements(2,92);
    linkedList->PrintList();
    return 0;
}