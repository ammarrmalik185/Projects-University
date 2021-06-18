#include <iostream>
using namespace std;
class Node {
public:
	int value;
	Node* left;
	Node* right;

	Node(){
		value = 0;
		left = NULL;
		right = NULL;
	}

	Node(int value) {
		this->value = value;
		left = NULL;
		right = NULL;
	}
};

class Tree {
public:
	Node* root;
	Node* loc;
	Node* ploc;
	int count = 10;

	Tree() {
		root = NULL;
		loc = NULL;
		ploc = NULL;
	}

	bool isEmpty() {
		return root == NULL;
	}

	void search(int value) {
		if (isEmpty()) {
			cout << "Cannot Search, Tree is Empty!" << endl;
			return;
		}
		else {
			ploc = NULL;
			loc = root;
			while (loc != NULL) {
				if (loc->value == value)
					return;
				else if (loc->value > value) {
					ploc = loc;
					loc = loc->left;
				}
				else {
					ploc = loc;
					loc = loc->right;
				}
			}
		}
	}

	void insert(int value) {
		if (isEmpty()) {
			Node* first = new Node(value);
			root = first;
		}
		else {
			search(value);
			if (loc == NULL) {
				Node* insert = new Node(value);
				if (ploc->value > value)
					ploc->left = insert;
				else
					ploc->right = insert;
			}
			else {
				cout << "Value already exists!";
				return;
			}
		}
	}

	void print2DUtil(Node* root, int space)
	{
		// Base case  
		if (root == NULL)
			return;

		// Increase distance between levels  
		space += count;

		// Process right child first  
		print2DUtil(root->right, space);

		// Print current node after space  
		// count  
		cout << endl;
		for (int i = count; i < space; i++)
			cout << " ";
		cout << root->value << "\n";

		// Process left child  
		print2DUtil(root->left, space);
	}

	void print2D()
	{
		print2DUtil(root, 0);
	}

	int countLeaf(Node* temp) {
		if (temp == NULL)
			return 1;
		else
			return countLeaf(temp->left) + countLeaf(temp->right);
	}
};

