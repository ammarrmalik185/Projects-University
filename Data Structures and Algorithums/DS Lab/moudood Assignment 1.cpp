//============================================================================
// Name        : SingleLinkedList.cpp
// Author      : Moudood Fiaz
// Version     :
// Copyright   : Design your own code you fool..
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
using namespace std;

class Node{
public:
	int data;
	Node *next;
};

class LinkedList{
	Node *first;
	Node *loc;
	Node *ploc;
	Node *sloc;

public:

	LinkedList(){
		first=NULL;
		loc=NULL;
		ploc=NULL;
		sloc=NULL;
	}

	bool isEmpty(){
		return (first==NULL);
	}

	void InsertAtFront(int value){
		Node *NN = new Node();
		NN->data=value;
		if(isEmpty()){
			first = NN;
		}
		else{
			NN->next=first;
			first=NN;
		}
	}

	void PrintList(){
		if(!isEmpty()){
			Node *temp = first;
			while(temp!=NULL)
			{
				cout<<temp->data<<" ";
				temp=temp->next;
			}
			cout<<endl;
		}
		else{
			cout<<"List is empty.."<<endl;
		}
	}

	void Search(int value){
		loc=first;
		ploc=NULL;
		if(isEmpty()){
			return;
		}
		while(loc!=NULL && loc->data<value){
			ploc=loc;
			loc=loc->next;
		}
		if(loc!=NULL && loc->data!=value){
			loc=NULL;
		}
	}

	void InsertedSorted(int value){
		Search(value);
		if(loc!=NULL){
			cout<<"Duplication not allowed";
			return;
		}
		else{
			if(ploc==NULL){
				InsertAtFront(value);
			}
			else{
				Node *NN=new Node();
				NN->data=value;
				NN->next=ploc->next;
				ploc->next=NN;
			}
		}
	}

	void Delete(int value){
		Search(value);
		if(loc==NULL){
			cout<<"Value is not in the list"<<endl;
		}
		else{
			if(ploc==NULL){
				first=first->next;
				delete loc;
			}
			else{
				ploc->next=loc->next;
				delete loc;
			}
		}
	}

	void PrintReversed(){
		if(isEmpty()){
			cout<<"list is empty"<<endl;
			return;
		}
		else{
			Node *temp=first;
			Node *loc;
			Node *last=NULL;
			while(temp!=NULL){
				loc=first;
				while(loc->next!=last){
					loc=loc->next;
				}
				cout<<loc->data<<" ";
				last=loc;
				temp=temp->next;
			}
			cout<<endl;
		}
	}

	void Destroy(){
		if(isEmpty()){
			cout<<"List is already empty.."<<endl;
		}
		else{
			Node *temp = first;
			while(first!=NULL){
				first=first->next;
				delete temp;
				temp=first;
			}
		}
	}

	void DeleteOdd(){
		if(isEmpty()){
			cout<<"List is empty.."<<endl;
			return;
		}
		else{
			Node *temp=first;
			while(temp!=NULL){
				if((temp->data%2)==0){
					temp=temp->next;
				}
				else{
					Node *del=temp;
					temp=temp->next;
					Delete(del->data);
				}
			}
		}
	}

	void Reverse(){
		if(isEmpty()){
			cout<<"List is empty.."<<endl;
			return;
		}
		else{
			ploc=NULL;
			loc=first;
			sloc=loc->next;
			while(loc!=NULL){
				loc->next=ploc;
				ploc=loc;
				if(sloc==NULL){
					first=loc;
					return;
				}
				loc=sloc;
				sloc=sloc->next;
			}
		}
	}

	void swap(int a, int b){
		if(a==b){
			cout<<"Duplicate inputs not possible.."<<endl;
			return;
		}
		if(isEmpty()){
			cout<<"List is Empty"<<endl;
			return;
		}
		int count=0;
		Node *temp=first;
		while(temp!=NULL){
			temp=temp->next;
			count++;
		}
		if(count<=1){
			cout<<"List has only 1 element"<<endl;
		}
		Node *loc1,*ploc1,*sloc1;
		Node *loc2,*ploc2,*sloc2;
		Search(a);
		if(loc==NULL){
			cout<<"1st value not found"<<endl;
			return;
		}
		else{
			loc1=loc;
			ploc1=ploc;
			sloc1=loc->next;
		}
		Search(b);
		if(loc==NULL){
			cout<<"2nd value not found"<<endl;
			return;
		}
		else{
			loc2=loc;
			ploc2=ploc;
			sloc2=loc->next;
		}

		if(ploc1==NULL && sloc1!=loc2){
			first=loc2;
			loc2->next=sloc1;
			ploc2->next=loc1;
			loc1->next=sloc2;
		}
		else if(ploc2==NULL && sloc2!=loc1){
			first=loc1;
			loc1->next=sloc2;
			ploc1->next=loc2;
			loc2->next=sloc1;
		}
		else if(sloc1==loc2){
			ploc1->next=loc2;
			loc1->next=sloc2;
			loc2->next=loc1;
		}
		else if(sloc1==loc2 && ploc1==NULL){
			first=loc2;
			loc1->next=sloc2;
			loc2->next=loc1;
		}
		else if(sloc2==loc1){
			ploc2->next=loc1;
			loc2->next=sloc1;
			loc1->next=loc2;
		}
		else if(sloc2==loc1 && ploc2==NULL){
			first=loc1;
			loc2->next=sloc1;
			loc1->next=loc2;
		}
		else{
			ploc1->next=loc2;
			loc2->next=sloc1;
			ploc2->next=loc1;
			loc1->next=sloc2;
		}
	}

	void Arrange(){
		if(isEmpty()){
			cout<<"List is empty.."<<endl;
			return;
		}
		int count=0;
		Node *temp=first;
		while(temp!=NULL){
			temp=temp->next;
			count++;
		}
		if(count<=2){
			return;
		}
		temp=first;

		LinkedList *even = new LinkedList();
		LinkedList *odd = new LinkedList();

		while(temp!=NULL){
			if((temp->data%2)==0){
				even->InsertedSorted(temp->data);
				temp=temp->next;
			}
			else{
				odd->InsertedSorted(temp->data);
				temp=temp->next;
			}
		}

		this->first=even->first;
		temp=this->first;
		while(temp!=NULL){
			if(temp->next==NULL){
				temp->next=odd->first;
				return;
			}
			temp=temp->next;
		}
	}
};

int main() {
	cout << "Hello World!" << endl; // prints Hello World!

	LinkedList *mdf	 = new LinkedList();
	mdf->InsertedSorted(1);
	mdf->InsertedSorted(2);
	mdf->InsertedSorted(3);
	mdf->InsertedSorted(4);
	mdf->InsertedSorted(5);
	mdf->InsertedSorted(6);
	mdf->PrintList();
	mdf->Arrange();
	mdf->PrintList();
	return 0;
}
