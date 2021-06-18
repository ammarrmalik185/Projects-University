#include <iostream>
using namespace std;
class Node {
public:
	int data;
	Node* next;
};


class LinkedList {
public:
	Node* first;
	Node* loc;
	Node* ploc;

	LinkedList() {
		first = NULL;
		loc = NULL;
		ploc = NULL;

	}

	bool isEmpty() {
		return first == NULL;
	}

	void insertStart(int value) {
		Node* insert = new Node();
		insert->data = value;
		insert->next = first;
		first = insert;
	}

	void insertEnd(int value) {
		Node* insert = new Node();
		insert->data = value;
		loc = first;
		while (loc->next != NULL)
			loc = loc->next;
		loc->next = insert;
	}

	void print() {
		if (isEmpty())
			cout << "List Is Empty!" << endl;
		else {
			Node* print = first;
			while (print != NULL) {
				cout << print->data << " ";
				print = print->next;
			}
			cout << endl;
		}

	}

	void searchSorted(int value) {
		if (isEmpty())
			return;
		else {
			bool found = false;
			loc = first;
			ploc = NULL;
			while (loc != NULL && loc->data <= value)
				if (loc->data == value) {
					break;
					found = true;
				}
				else {
					ploc = loc;
					loc = loc->next;
				}

			if (!found)
				loc = NULL;
		}
	}

	void searchNotSorted(int value) {
		if (isEmpty())
			return;
		else {
			loc = first;
			ploc = NULL;
			while (loc != NULL)
				if (loc->data == value) {
					break;
				}
				else {
					ploc = loc;
					loc = loc->next;
				}

		}
	}

	void insertSorted(int value) {
		if (isEmpty())
			insertStart(value);
		else {
			searchSorted(value);
			if (ploc != NULL) {
				Node* insert = new Node();
				insert->data = value;
				insert->next = ploc->next;
				ploc->next = insert;
			}
			else
				insertStart(value);
		}
	}

	void del(int value) {
		if (isEmpty())
			cout << "List Is Empty" << endl;
		else {
			searchNotSorted(value);
			if (loc != NULL) {
				if (loc == first) {
					first = loc->next;
					delete loc;
				}
				else {
					ploc->next = loc->next;
					delete loc;
				}
			}
			else
				cout << "Value Not Found" << endl;
		}
	}

	void delList() {
		if (isEmpty())
			cout << "List Is Already Empty" << endl;
		else {
			loc = first;
			while (loc != NULL) {
				first = loc->next;
				delete loc;
				loc = first;
			}
		}
	}

	void printRev() {
		if (isEmpty())
			cout << "List Is Empty" << endl;
		else {
			ploc = NULL;
			while (ploc != first) {
				loc = first;
				while (true) {
					if (loc->next == ploc) {
						cout << loc->data << " ";
						break;
					}
					else
						loc = loc->next;
				}
				ploc = loc;
			}
			cout << endl;
		}
	}

	void delOdd() {
		if (isEmpty())
			cout << "List Is Empty" << endl;
		else {
			loc = first;
			ploc = NULL;
			while (loc != NULL) {
				if (loc->data % 2 == 1) {
					if (ploc == NULL) {
						loc = loc->next;
						delete first;
						first = loc;
					}
					else {
						ploc->next = loc->next;
						delete loc;
						loc = ploc->next;
					}
				}
				else {
					ploc = loc;
					loc = loc->next;
				}
			}
		}
	}

	void reverse() {
		if (!isEmpty()) {
			loc = first;
			int count = 0;

			while (first->next != NULL)
			{
				first = first->next;
				count++;
			}

			while (count != 0) {
				ploc = loc;
				for (int x = 1; x < count; x++)
					ploc = ploc->next;
				ploc->next->next = ploc;
				ploc->next = NULL;
				count--;
			}

		}
		else
			return;
	}

	void swap(int val1, int val2) {
		if (isEmpty())
			return;
		else {
			searchNotSorted(val1);
			Node* loc1 = loc;
			Node* ploc1 = ploc;
			searchNotSorted(val2);
			Node* loc2 = loc;
			Node* ploc2 = ploc;

			if (loc1 == NULL || loc2 == NULL)
				cout << "Either Or Both Values Not Found" << endl;
			else if (ploc1 == NULL && ploc2 != NULL) {
				loc = loc2->next;
				first = loc2;
				ploc2->next = loc1;
				first->next = loc1->next;
				loc1->next = loc;
			}
			else if (ploc1 != NULL && ploc2 == NULL) {
				loc = loc1->next;
				first = loc1;
				ploc1->next = loc2;
				first->next = loc2->next;
				loc2->next = loc;
			}
			else {
				if (ploc1 == loc2 || ploc2 == loc1)
				{
					if (ploc2 == loc1)
					{
						loc1->next = loc2->next;
						loc2->next = loc1;
						ploc1->next = loc2;
					}
					else
					{
						loc2->next = loc1->next;
						loc1->next = loc2;
						ploc2->next = loc1;
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

		}
	}

	void printRev(Node* x)
	{
		if (x != NULL)
		{
			printRev(x->next);
			cout << x->data << " ";
		}
	}

	void reverse(Node* x)
	{
		if (x->next == NULL)
			first = x;
		else {
			reverse(x->next);
			x->next->next = x;
			x->next = NULL;
		}
	}
};


int main()
{
	LinkedList* ob = new LinkedList();
	ob->insertStart(8);
	ob->insertStart(5);
	ob->insertSorted(9);
	ob->insertSorted(1);
	ob->insertSorted(2);
	ob->insertSorted(3);
	ob->insertSorted(4);
	ob->insertSorted(7);
	ob->insertSorted(6);
	ob->insertEnd(10);
	ob->print();
	//ob->del(10);
	//ob->print();
	//ob->printRev();
	//ob->printRev(ob->first);
	//ob->delOdd();
	//ob->print();
	//ob->swap(2,4);
	//ob->print();
	//ob->delList();
	//ob->print();
	ob->reverse();
	ob->print();
}