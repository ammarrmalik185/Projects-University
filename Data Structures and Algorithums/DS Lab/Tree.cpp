#include <iostream>
using namespace std;


class Node {
public:
    int value;
    Node* left;
    Node* right;

    Node(){
        value = 0;
        left = nullptr;
        right = nullptr;
    }

    Node(int value) {
        this->value = value;
        left = nullptr;
        right = nullptr;
    }
};


class Tree {
public:
    Node* root;
    Node* loc;
    Node* ploc;
    int count = 10;

    Tree() {
        root = nullptr;
        loc = nullptr;
        ploc = nullptr;
    }

    bool isEmpty() {
        return root == nullptr;
    }

    void search(int value) {
        if (isEmpty()) {
            cout << "Cannot Search, Tree is Empty!" << endl;
            return;
        }
        else {
            ploc = nullptr;
            loc = root;
            while (loc != nullptr) {
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
            if (loc == nullptr) {
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

    string getJson(){
        return "{\"Root\":" + printJson(root) + "}";
    }

    string printJson(Node *n){

        if (n->left == nullptr && n->right == nullptr)
            return R"({"value":")" + to_string(n->value) + "\"}";

        else if (n->right == nullptr){
            return R"({"value":")" + to_string(n->value) + "\"," + "\"Left\":" + printJson(n->left) + "}";
        }
        else if (n->left == nullptr){
            return  R"({"value":")" + to_string(n->value) + "\"," + "\"Right\":"  + printJson(n->right) + "}";

        }
        else{
            return R"({"value":")" + to_string(n->value) + "\"," + "\"Left\":" + printJson(n->left) + "," + "\"Right\":"  + printJson(n->right) + "}";
        }
    }

    void deleteNode(int value){
        if (!isEmpty()) {
            search(value);
            if (loc == nullptr) {
                cout << "value does not exist";
            }
            else{
           
                if (loc->left == nullptr && loc->right == nullptr)
                {
                    if (ploc != nullptr) {
                        delete (loc);
                        if (ploc->left == loc)
                            ploc->left = nullptr;
                        else if (ploc->right == nullptr)
                            ploc->right = nullptr;
                    }
                    else{
                        delete(loc);
                        root = nullptr;
                    }
                }
                else if (loc->right == nullptr){
                    if (ploc != nullptr) {
                        if (ploc->right == loc) {
                            ploc->right = loc->left;
                        } else if (ploc->left == loc) {
                            ploc->left = loc->left;
                        }
                    }
                    else{
                        root = loc->left;
                        delete(loc);
                    }
                }
                else if (loc->left == nullptr){
                    if (ploc != nullptr) {
                        if (ploc->right == loc) {
                            ploc->right = loc->right;
                        } else if (ploc->left == loc) {
                            ploc->left = loc->right;
                        }
                    }
                    else{
                        root = loc->right;
                        delete(loc);
                    }
                }
                else{
                    if (ploc != nullptr) {
                        if (loc->left->right != nullptr) {
                            Node *pTempLoc = loc->left;
                            Node *TempLoc = loc->left->right;
                            while (TempLoc->right != nullptr and TempLoc->left != nullptr)
                            {

                            }


                        } else {
                            if (ploc->left == loc) {
                                ploc->left = loc->left;
                                loc->left->right = loc->right;
                                delete(loc);
                            }
                        }
                    }
                    else{
                        if (loc->left->right != nullptr) {

                        } else {
                                root = loc->left;
                                root->right = loc->right;
                                delete(loc);
                        }
                    }
                }
            }
        }
    }

    int getDepth(){
        return getDepth(root, -1);
    }

    int getDepth(Node *n, int depth)
    {
        if (n == nullptr){
            return depth;
        }
        else{
            return max(getDepth(n->left, depth+1),getDepth(n->right,depth+1));
        }
    }

    int getHeight(){
        return getHeight(root);
    }

    int getHeight(Node *n){
        if (n == nullptr)
            return 0;
        else{
            return max(getHeight(n->left), getHeight(n->right)) + 1;
        }
    }

    void deleteTree(){
        deleteTree(root);
        root = nullptr;
    }

    void deleteTree(Node *n){
        if (n == nullptr)
            return;
        else{
            deleteTree(n->left);
            deleteTree(n->right);
            delete(n);
        }
    }

    int getLeaves() {
        if (isEmpty())
            return 0;
        else
            return getLeaves(root);

    }

    int getLeaves(Node *n){
        
        if (n->left == nullptr && n->right == nullptr)
            return 1;
        else if (n->left == nullptr){
            return getLeaves(n->right);
        }
        else if (n->right == nullptr){
            return getLeaves(n->left);
        }
        else
            return getLeaves(n->left) + getLeaves(n->right);
    }

    int getOneChildNodes(){
        return getOneChildNodes(root);
    }

    int getOneChildNodes(Node *n){

        if (n->left == nullptr && n->right == nullptr)
            return 0;
        else if (n->left == nullptr){
            return getOneChildNodes(n->right) + 1;
        }
        else if (n->right == nullptr){
            return getOneChildNodes(n->left) + 1;
        }
        else
            return getOneChildNodes(n->left) + getOneChildNodes(n->right);
    }
};

int main(){

    Tree *testTree = new Tree();

    testTree->insert(3);
    testTree->insert(9);
    testTree->insert(5);
    testTree->insert(1);
    testTree->insert(7);
    testTree->insert(32);
    testTree->insert(-32);
    testTree->insert(-2);
    testTree->insert(58);
    testTree->insert(-48);
    testTree->insert(-100);
    testTree->insert(17);
    testTree->insert(12);
    testTree->insert(10);

    cout << endl << testTree->getJson() <<endl;

    testTree->deleteNode(3);

    cout << endl << testTree->getJson() <<endl;
}

