#include<iostream>
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
    ListNode *last;
    ListNode *ploc;
    ListNode *loc;

public:
    LinkedList()
    {
        last = NULL;
        ploc = NULL;
        loc = NULL;
    }

    bool isEmpty()
    {
        return ploc == NULL;
    }

    void insertAtFront(int value)
    {

        ListNode *newNode = new ListNode();
        newNode->data = value;

        if (isEmpty())
        {
            last = newNode;
            newNode->next = newNode;
            ploc = newNode;
        }
        else
        {
            newNode->next = last->next;
            last->next = newNode;
        }
    }

    void insertAtEnd(int value)
    {

        ListNode *newNode = new ListNode();
        newNode->data = value;

        if (isEmpty())
            insertAtFront(value);

        else
        {
            newNode->next = last->next;
            last->next = newNode;
            last = newNode;
        }
    }

    void print()
    {

        if(isEmpty()) {
            cout << "list empty" << endl;
            return;
        }

        ListNode *temp = last->next;
        do
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
        while(temp != last->next);
        cout << endl;
    }

    void search(int value)
    {

        if (isEmpty())
            return;

        loc = last->next;
        ploc = last;
        bool done = false;
        bool found = false;

        while(loc != last->next  || !done)
        {
            done = true;
            if (loc->data == value)
            {
                found = true;
                break;
            }
            else
            {
                ploc = loc;
                loc = loc->next;
                found = false;
            }
        }
        if (!found)
        {
            loc = NULL;
        }
    }

    void delete_value(int value)
    {

        if(isEmpty())
            return;

        search(value);

        if(loc==NULL)
            cout<<"Value not found. Deletion not possible"<<endl;
        else
        {
            if (loc == last)
            {
                ploc->next = loc->next;
                last = ploc;
                delete loc;
            }
            else
            {
                ploc->next = loc->next;
                delete(loc);
            }
        }



    }

    void delete_list() {
        if (isEmpty())
            return;

        loc = last->next;
        ploc = last;
        while (last->next != last)
        {
            ploc = loc;
            loc = loc->next;
            delete(ploc);
            last->next = loc;

        }
        delete(last);
        ploc = NULL;

    }

    void InsertSorted(int value)
    {
        if(!isEmpty())

        {
            search(value);
            if(loc==NULL)
            {

                if (last->data < value)
                {

                    insertAtEnd(value);
                }
                else
                {
                    if (last->next->data > value)
                    {

                        insertAtFront(value);
                    }

                    else
                    {

                        ListNode *newNode = new ListNode();
                        newNode->data = value;
                        loc = last->next;
                        ploc = last;
                        while (loc->data < value)
                        {
                            ploc = loc;
                            loc = loc->next;
                        }
                        newNode->next = loc;
                        ploc->next = newNode;
                    }
                }
            }
            else
                cout << "already available" << endl;
        }
        else
        {

            insertAtFront(value);
        }

    }

};


