#include <iostream>
using namespace std;
class ListNode{
public:
    int data;
    ListNode *previous;
    ListNode *next;
};
class DoubleLinkedList{
private:
    ListNode *first = nullptr;
    ListNode *last = nullptr;
    ListNode *loc = nullptr;
    ListNode *ploc = nullptr;
public:
    bool IsEmpty(){
        return first==nullptr;
    }
    void InsertAtFront(int value){
        auto *listNode = new ListNode();
        listNode->data=value;
        if (IsEmpty()){
            first = listNode;
            last=first;
        }
        else {
            listNode->next = first;
            first->previous = listNode;
            first = listNode;
        }
    }
    void Search(int value){
        if (IsEmpty())
            return;
        else{
            loc = first;
            ploc = nullptr;
            while (loc!= nullptr && loc->data < value){
                ploc=loc;
                loc = loc->next;
            }
            if (loc!= nullptr && loc->data != value)
                loc= nullptr;
        }
    }
    void InsertSorted(int value){
        if (IsEmpty())
            InsertAtFront(value);
        else {
            Search(value);
            if (loc != nullptr) {
                cout << "Value Already Exists"<<endl;
                return;
        }
            else{
                if (ploc == nullptr)
                    InsertAtFront(value);
                else{
                    if (ploc->next==nullptr){
                        auto *listNode = new ListNode;
                        listNode->data = value;
                        listNode->next = ploc->next;
                        ploc->next = listNode;
                        listNode->previous = ploc;
                        last=listNode;
                    }
                    else{
                        auto *listNode = new ListNode;
                        listNode->data = value;
                        listNode->next = ploc->next;
                        ploc->next = listNode;
                        listNode->previous = ploc;
                        listNode->next->previous=listNode;
                    }
                }
            }
        }
    }
    void Delete(int value){
        if(IsEmpty())
            return;
        else{
            Search(value);
            if (loc== nullptr)
                return;
            else{
                if (loc == first && loc == last){
                    first = nullptr;
                    last= nullptr;
                    delete(loc);
                }
                else if (ploc == nullptr){
                    first = loc->next;
                    first->previous= nullptr;
                    delete(loc);
                } else if(loc->next== nullptr){
                    last=ploc;
                    delete(loc);
                    ploc->next= nullptr;
                }
                else{
                    if (loc->next!= nullptr){
                        ploc->next=loc->next;
                        loc->next->previous = ploc;
                        delete(loc);
                    } else{
                        ploc->next= nullptr;
                        delete(loc);
                    }
                }
            }
        }
    }
    void DeleteList(){
        if (IsEmpty())
            return;
        else {
            ListNode *temp = first;
            while (temp!= nullptr){
                temp=first->next;
                delete(first);
                first = temp;
            }
        }
    }
    void ReversePrint(){
        if(IsEmpty())
            return;
        else if (first==last)
            PrintList();
        else{
            cout << "Reverse Print: ";
            ListNode *temp = last;
            while (temp!= nullptr) {
                cout << temp->data << " ";
                temp = temp->previous;
            }
            cout << endl;
        }
    }
    void PrintList(){
        if (IsEmpty()){
            cout << "List is Empty" << endl;
            return;
        } else{
            cout << "List is: ";
            ListNode *temp = first;
            while (temp!= nullptr){
                cout << temp->data << " ";
                temp = temp->next;
            }
            cout << endl;
        }
    }
    void DeleteEven(){
        if(IsEmpty())
            return;
        else{
            ListNode *temp = first;
            while (temp!= nullptr){
                if(temp->data%2==0) {
                    if(temp==first){
                        Delete(temp->data);
                        temp = first;
                    }
                    else{
                        Delete(temp->data);
                        temp = ploc->next;
                    }
                }
                else
                    temp = temp->next;
            }
        }
    }
    void DeleteOdd(){
        if(IsEmpty())
            return;
        else{
            ListNode *temp = first;
            while (temp!= nullptr){
                if(temp->data%2!=0) {
                    if(temp == first){
                        cout<<temp->data;
                        Delete(temp->data);
                        temp = first;
                    }
                    else{
                        Delete(temp->data);
                        temp = ploc->next;
                    }
                }
                else
                    temp = temp->next;
            }
        }
    }
    void Arrange(){
        if(IsEmpty()){
            cout<<"List is empty.."<<endl;
            return;
        }
        ListNode *temp=first;
        auto *even = new DoubleLinkedList();
        auto *odd = new DoubleLinkedList();
        while(temp!= nullptr){
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
        while(temp!= nullptr){
            if(temp->next == nullptr){
                temp->next=odd->first;
                temp->next->previous=temp;
                this->last=odd->last;
                return;
            } else
                temp=temp->next;
        }
    }
    void SwapElements(int value1, int value2){
        if (IsEmpty())
            return;
        else if (first==last)
            return;
        else{
            Search(value1);
            ListNode *loc1= loc;
            Search(value2);
            ListNode *loc2=loc;
            if (loc1 == nullptr || loc2== nullptr) {
                return;
            } else if(loc1==loc2){
                return;
            }
            else
                if ((loc1==first && loc2==last) || (loc2==first && loc1 == last)){
                    if (loc1==first && loc2==last){
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->next=loc1->next;
                        loc2->previous=loc1->previous;
                        loc1->next=next;
                        loc1->previous=previous;
                        loc2->next->previous=loc2;
                        loc1->previous->next=loc1;
                        first=loc2;
                        last=loc1;
                    } else{
                        ListNode *next = loc1->next;
                        ListNode *previous = loc1->previous;
                        loc1->next=loc2->next;
                        loc1->previous=loc2->previous;
                        loc2->next=next;
                        loc2->previous=previous;
                        loc1->next->previous=loc1;
                        loc2->previous->next=loc2;
                        first=loc1;
                        last=loc2;
                    }
                }
                else if((loc1==first && loc2->previous==first) || (loc2==first && loc1->previous==first)){
                    if (loc1==first){
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->previous=loc1->previous;
                        loc2->next=loc1;
                        loc1->next=next;
                        loc1->previous=loc2;
                        first=loc2;
                    } else{
                        ListNode *next = loc1->next;
                        ListNode *previous = loc1->previous;
                        loc1->previous=loc2->previous;
                        loc1->next=loc2;
                        loc2->next=next;
                        loc2->previous=loc1;
                        first=loc1;
                    }
                }
                else if (loc1==first || loc2==first){
                    if (loc1==first){
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->next=loc1->next;
                        loc2->previous=loc1->previous;
                        loc1->next=next;
                        loc1->previous=previous;
                        loc2->next->previous=loc2;
                        loc1->next->previous=loc1;
                        loc1->previous->next=loc1;
                        first=loc2;
                    } else{
                        ListNode *next = loc1->next;
                        ListNode *previous = loc1->previous;
                        loc1->next=loc2->next;
                        loc1->previous=loc2->previous;
                        loc2->next=next;
                        loc2->previous=previous;
                        loc1->next->previous=loc1;
                        loc2->next->previous=loc2;
                        loc2->previous->next=loc2;
                        first=loc1;

                    }


                }else if((loc1==last && loc2->next==last) || (loc2==last && loc1->next==last)) {
                    if (loc1 == last) {
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->previous = loc1;
                        loc2->next = loc1->next;
                        loc1->next = loc2;
                        loc1->previous = previous;
                        loc1->previous->next=loc1;
                        last = loc2;
                    } else {
                        ListNode *next = loc1->next;
                        ListNode *previous = loc1->previous;
                        loc1->previous = loc2;
                        loc1->next = loc2->next;
                        loc2->next = loc1;
                        loc2->previous = previous;
                        loc2->previous->next=loc2;
                        last = loc1;
                    }
                }else if (loc1==last || loc2==last){
                    if(loc1==last){
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->next=loc1->next;
                        loc2->previous=loc1->previous;
                        loc1->next=next;
                        loc1->previous=previous;
                        loc2->previous->next=loc2;
                        loc1->next->previous=loc1;
                        loc1->previous->next=loc1;
                        last=loc2;
                    } else{
                        ListNode *next = loc1->next;
                        ListNode *previous = loc1->previous;
                        loc1->next=loc2->next;
                        loc1->previous=loc2->previous;
                        loc2->next=next;
                        loc2->previous=previous;
                        loc1->previous->next=loc1;
                        loc2->next->previous=loc2;
                        loc2->previous->next=loc2;
                        last=loc1;
                    }
                }
                else{
                    if((loc1->next==loc2 && loc2->previous==loc1) || (loc2->next==loc1 && loc1->previous==loc2)){
                        if (loc1->next==loc2 && loc2->previous==loc1){
                            ListNode *next = loc2->next;
                            ListNode *previous = loc2->previous;
                            loc2->previous=loc1->previous;
                            loc2->next=loc1;
                            loc1->previous=loc2;
                            loc1->next=next;
                            loc2->previous->next=loc2;
                            loc1->next->previous=loc1;
                        } else{
                            ListNode *next = loc1->next;
                            ListNode *previous = loc1->previous;
                            loc1->previous=loc2->previous;
                            loc1->next=loc2;
                            loc2->previous=loc1;
                            loc2->next=next;
                            loc1->previous->next=loc1;
                            loc2->next->previous=loc2;
                        }
                    } else{
                        ListNode *next = loc2->next;
                        ListNode *previous = loc2->previous;
                        loc2->next=loc1->next;
                        loc2->previous=loc1->previous;
                        loc1->next=next;
                        loc1->previous=previous;
                        loc1->previous->next=loc1;
                        loc1->next->previous=loc1;
                        loc2->next->previous=loc2;
                        loc2->previous->next=loc2;
                    }

                }
        }

    }
    void ReverseList(){
        if (IsEmpty())
            return;
        else if (first==last)
            return;
        else{
            loc=first;
            last=first;
            while (loc!= nullptr){
                ListNode *temp = loc->previous;
                loc->previous = loc->next;
                loc->next=temp;
                if (loc->previous== nullptr) {
                    first = loc;
                    return;
                } else
                    loc = loc->previous;
            }
        }
    }
};