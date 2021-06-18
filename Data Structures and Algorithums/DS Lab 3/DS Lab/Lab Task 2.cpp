
#include <iostream>
#include <random>
using namespace std;

class ListNode

{
public:
    int data;
    ListNode *next;
    ListNode *previous;

};


class LinkedList
{
public:
    ListNode *loc;
    ListNode *ploc;
    ListNode *start;
    ListNode *last;

public:
    LinkedList()
    {

        loc = NULL;
        ploc = NULL;
        start = NULL;
        last = NULL;

    }

    bool isEmpty()
    {
        return start == NULL;
    }

    void insertAtStart(int value)
    {

        ListNode *newNode = new ListNode();
        newNode -> data = value;
        newNode -> next = start;
        newNode -> previous = NULL;
        start = newNode;
        if(newNode->next == NULL)
            last = newNode;
        else
            newNode->next->previous = newNode;
    }

    void insertAtEnd(int value)
    {

        ListNode *newNode = new ListNode();
        newNode -> data = value;
        newNode -> previous = last;
        newNode -> next = NULL;
        last = newNode;
        if(newNode->previous == NULL)
            start = newNode;
        else
            newNode->previous->next = newNode;

    }

    void print()
    {

        ListNode *temp = start;
        if (!isEmpty())
            while(temp != NULL)
            {

                cout<<temp->data<<" ";
                temp = temp->next;

            }
        cout << endl;

    }

    void search(int value)
    {
        loc = start;
        ploc = NULL;
        bool found = false;
        while (loc != NULL && loc->data <= value)
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
            loc = NULL;
    }

    void search_not_arranged(int value)
    {
        loc = start;
        ploc = NULL;
        bool found = false;
        while (loc != NULL)
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
            loc = NULL;
    }

    void print_rev()
    {
        loc = last;
        while (loc != NULL)
        {
            cout << loc->data << " ";
            loc = loc->previous;
        }
    }

    void destroy()
    {
        if (!isEmpty())
        {
            loc = start;
            ploc = NULL;
            while(loc!= NULL)
            {
                ploc = loc;
                loc = loc->next;
                delete(ploc);
            }
            start = NULL;
            last = NULL;
        }
    }

    void deleteValue(int value)
    {
        search(value);
        if (isEmpty() || loc == NULL)
            cout << "value not found" << endl;
        else
        {
            if (loc != start and loc != last)
            {
                ploc->next = loc->next;
                loc->next->previous = ploc;
                delete loc;
                loc = ploc->next;
            }
            else
            if (loc == start && loc == last)
            {
                destroy();
            }
            else
            if (loc == last)
            {
                ploc->next = NULL;
                last = ploc;
                delete loc;
                loc = NULL;

            }
            else
            {
                start = loc->next;
                delete(loc);
                loc = start;
            }

        }


    }

    void insertSorted(int value)
    {
        if (!isEmpty())
        {
            search(value);

            if(loc==NULL)
            {

                if (last->data < value)
                    insertAtEnd(value);

                else if(start->data > value)
                    insertAtStart(value);

                else
                {
                    ListNode *newNode = new ListNode();
                    newNode->data = value;
                    newNode->next = ploc->next;
                    newNode->previous = ploc;
                    ploc-> next = newNode;
                    newNode->next->previous = newNode;
                }
            }
            else
                cout << "value already available";
        }
        else
        {
            insertAtStart(value);
        }


    }

    void delete_odd()
    {
        loc = start;
        ploc = NULL;
        if (!isEmpty())
        {
            while (loc  != NULL)
            {
                if (loc->data % 2 != 0)
                {
                    deleteValue(loc->data);
                }
                else
                {
                    ploc = loc;
                    loc = loc->next;
                }
            }
        }

    }

    void delete_even()
    {
        loc = start;
        ploc = NULL;
        if (!isEmpty())
        {
            while (loc  != NULL)
            {
                if (loc->data % 2 == 0)
                {
                    cout << loc->data << endl;
                    deleteValue(loc->data);
                }
                else
                {
                    ploc = loc;
                    loc = loc->next;
                }
            }
        }

    }

    void reverse_list()
    {
        if (isEmpty() || start == last)
            return;
        loc = start;
        ploc = NULL;

        last = start;
        ListNode *sloc = loc->next;
        while (loc != NULL)
        {

            loc->next = ploc;
            loc->previous = sloc;

            if (sloc == NULL)
            {
                start = loc;
                break;
            }

            else
            {
                ploc = loc;
                loc = sloc;
                sloc = sloc->next;
            }



        }
    }

    void swap(int value1, int value2)
    {
        if (!isEmpty() && value1 != value2)
        {
            search_not_arranged(value1);
            if (loc != NULL)
            {
                ListNode *loc1 = loc;
                ListNode *ploc1 = ploc;
                search_not_arranged(value2);

                if (loc != NULL)
                {
                    ListNode *loc2 = loc;
                    ListNode *ploc2 = ploc;
                    ListNode *temp;
                    if ((loc1 == start || loc1 == last) && (loc2 == start || loc2 == last))
                    {
                        if (loc2 == start)
                        {
                            temp = loc2;
                            loc2 = loc1;
                            loc1 = temp;
                        }

                        loc1->previous = loc2->previous;
                        loc2->next = loc1->next;
                        loc2->previous = NULL;
                        loc1->next = NULL;
                        loc1->previous->next = loc1;
                        loc2->next->previous = loc2;
                        start = loc2;
                        last = loc1;


                    }
                    else if (loc1 == start || loc1 == last || loc2 == start || loc2 == last) {
                        if (loc1 == start) {
                            if (loc1->next == loc2) {
                                loc = loc2->next;
                                loc2->previous = loc1->previous;
                                loc2->next = loc1;
                                loc1->next = loc;
                                loc1->previous = loc2;
                                start = loc2;
                            }
                            else
                            {
                                ListNode *temp1 = loc2->next;
                                ListNode *temp2 = loc2->previous;
                                loc2->next=loc1->next;
                                loc2->previous=loc1->previous;
                                loc1->next=temp1;
                                loc1->previous=temp2;
                                loc2->next->previous=loc2;
                                loc1->next->previous=loc1;
                                loc1->previous->next=loc1;
                                start=loc2;
                            }

                        }
                        else if (loc1 == last)
                        {
                            if (loc1->previous == loc2)
                            {
                                loc = loc2->previous;
                                loc2->previous = loc1;
                                loc2->next = loc1->next;
                                loc1->next = loc2;
                                loc1->previous = loc;
                                loc1->previous->next=loc1;
                                last = loc2;
                            } else
                            {
                                ListNode *temp1 = loc2->next;
                                ListNode *temp2 = loc2->previous;
                                loc2->next=loc1->next;
                                loc2->previous=loc1->previous;
                                loc1->next=temp1;
                                loc1->previous=temp2;
                                loc2->previous->next=loc2;
                                loc1->next->previous=loc1;
                                loc1->previous->next=loc1;
                                last=loc2;
                            }

                        }
                        else if (loc2 == start)
                        {
                            if (loc2->next == loc1) {
                                loc = loc1->next;
                                loc1->previous = loc2->previous;
                                loc1->next = loc2;
                                loc2->next = loc;
                                loc2->previous = loc1;
                                start = loc1;
                            }
                            else
                            {
                                ListNode *temp1 = loc1->next;
                                ListNode *temp2 = loc1->previous;
                                loc1->next=loc2->next;
                                loc1->previous=loc2->previous;
                                loc2->next=temp1;
                                loc2->previous=temp2;
                                loc1->next->previous=loc1;
                                loc2->next->previous=loc2;
                                loc2->previous->next=loc2;
                                start=loc1;
                            }
                        }
                        else if (loc2 == last)
                        {
                            if (loc2->previous == loc1)
                            {
                                loc = loc1->previous;
                                loc1->previous = loc2;
                                loc1->next = NULL;
                                loc2->next = loc1;
                                loc2->previous = loc;
                                loc2->previous->next=loc2;
                                last = loc1;
                            }
                            else
                            {
                                ListNode *temp1 = loc1->next;
                                ListNode *temp2 = loc1->previous;
                                loc1->next=loc2->next;
                                loc1->previous=loc2->previous;
                                loc2->next=temp1;
                                loc2->previous=temp2;
                                loc1->previous->next=loc1;
                                loc2->next->previous=loc2;
                                loc2->previous->next=loc2;
                                last=loc1;
                            }
                        }
                    }
                    else
                    {
                        if (loc1->next == loc2)
                        {
                            loc = loc2->next;
                            loc2->previous=loc1->previous;
                            loc2->next=loc1;
                            loc1->previous=loc2;
                            loc1->next=loc;
                            loc2->previous->next=loc2;
                            loc1->next->previous=loc1;
                        }
                        else if (loc2->next == loc1)
                        {
                            loc = loc1->next;
                            loc1->previous=loc2->previous;
                            loc1->next=loc2;
                            loc2->previous=loc1;
                            loc2->next=loc;
                            loc1->previous->next=loc1;
                            loc2->next->previous=loc2;
                        }
                        else
                        {
                            ListNode *temp1 = loc2->next;
                            ListNode *temp2 = loc2->previous;
                            loc2->next=loc1->next;
                            loc2->previous=loc1->previous;
                            loc1->next=temp1;
                            loc1->previous=temp2;
                            loc1->previous->next=loc1;
                            loc1->next->previous=loc1;
                            loc2->next->previous=loc2;
                            loc2->previous->next=loc2;
                        }
                    }


                }
                else
                    cout << "value 2 not found" << endl;
            }
            else
                cout << "value 1 not found" << endl;
        }
    }

    void Arrange()
    {
        loc = start;
        int value;
        ListNode *temp;
        if (!isEmpty())
        {
            ListNode *temp_loc = start;
            ListNode *temp_sloc = temp_loc->next;
            while (temp_sloc != NULL)
            {
                if (temp_loc->data % 2 != 0) {
                    temp = temp_loc;
                    value = temp->data;
                    while (temp != NULL)
                        if (temp->data % 2 == 0) {
                            swap(value, temp->data);
                            break;
                        } else
                            temp = temp->next;
                }
                temp_loc = temp_sloc;
                temp_sloc = temp_loc->next;
            }
        }
    }

    void insert_random_values(int quantity)
    {
        for (int i=0; i<quantity; i++)
        {
            int x = rand();
            insertSorted(x);
        }
    }
};






