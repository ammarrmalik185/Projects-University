
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

public:
    LinkedList()
    {

        loc = nullptr;
        ploc = nullptr;
        start = nullptr;

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


    void search_not_arranged(int value)
    {
        loc = start;
        ploc = nullptr;
        bool found = false;
        while (loc != nullptr)
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


    void print_rev()
    {
        ListNode *last = nullptr;
        while (last != start)
        {
            loc = start;
            while (true)
                if (loc->next == last)
                {
                    cout << loc->data << " ";
                    last = loc;
                    break;
                }
                else
                    loc = loc->next;
        }
    }


    void delete_odd()
    {
        loc = start;
        ploc = nullptr;
        if (!isEmpty())
        {
            while (loc  != nullptr)
            {
                if (loc->data % 2 != 0)
                {
                    if (ploc != nullptr)
                    {
                        ploc->next = loc->next;
                        delete (loc);
                        loc = ploc->next;
                    }
                    else
                    {
                        loc = loc->next;
                        delete(start);
                        start = loc;



                    }
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
        ploc = nullptr;
        if (!isEmpty())
        {
            while (loc  != nullptr)
            {
                if (loc->data % 2 == 0)
                {
                    if (ploc != nullptr)
                    {
                        ploc->next = loc->next;
                        delete (loc);
                        loc = ploc->next;
                    }
                    else
                    {
                        loc = loc->next;
                        delete(start);
                        start = loc;



                    }
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

        if (isEmpty())
            return;
        loc = start;
        ploc = nullptr;
        auto *sloc = loc->next;

        while (loc != nullptr)
        {

            loc->next = ploc;
            ploc = loc;

            if (sloc == nullptr)
            {
                start = loc;
                break;
            }

            else
            {
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
            if (loc != nullptr)
            {
                auto loc1 = loc;
                auto ploc1 = ploc;
                search_not_arranged(value2);
                if (loc != nullptr)
                {
                    auto loc2 = loc;
                    auto ploc2 = ploc;
                    if (ploc1 == nullptr || ploc2== nullptr)
                    {
                        if (ploc1 == nullptr)
                        {
                            loc = loc2->next;
                            start = loc2;
                            ploc2->next = loc1;
                            start->next = loc1->next;
                            loc1->next = loc;
                        }
                        else
                        {
                            loc = loc1->next;
                            start = loc1;
                            ploc1->next = loc2;
                            start->next = loc2->next;
                            loc2->next = loc;
                        }
                    }
                    else
                    if(ploc1==loc2 || ploc2==loc1)
                    {
                        if (ploc2==loc1)
                        {
                            loc1->next=loc2->next;
                            loc2->next=loc1;
                            ploc1->next=loc2;
                        }
                        else
                        {
                            loc2->next=loc1->next;
                            loc1->next=loc2;
                            ploc2->next=loc1;
                        }
                    }
                    else
                    {

                        ploc1->next = loc2;
                        ploc2->next = loc1;
                        loc = loc2->next;
                        loc2->next = loc1->next;
                        loc1->next = loc;
                    }

                }
                else
                    cout << "value 2 not found" << endl;
            }
            else
                cout << "value 1 not found" << endl;
        }
    }


    void destroy()
    {
        if (!isEmpty())
        {
            loc = start;
            ploc = nullptr;
            while(loc!= nullptr)
            {
                ploc = loc;
                loc = loc->next;
                start = loc;
                delete(ploc);
            }
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
            while (temp_sloc != nullptr)
            {
                if (temp_loc->data % 2 != 0) {
                    temp = temp_loc;
                    value = temp->data;
                    while (temp != nullptr)
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
            insertSorted(rand());
        }
    }
};


int main()
{

    auto *list = new LinkedList();

    list->insertSorted(976);
    list->insertSorted(41);
    list->insertSorted(6451);
    list->insertSorted(7543);
    list->insertSorted(456);
    list->insertSorted(4654);

    list->print();
    list->Arrange();
    list->print();

    list->destroy();
    list->print();
    list->insert_random_values(7);
    list->print();
    list->delete_odd();
    list->print();
    list->delete_even();
    list->print();



    return 0;

}

