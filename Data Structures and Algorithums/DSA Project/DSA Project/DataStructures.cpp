#include <utility>

using namespace std;

//declaring the classes
class Author;
class Article;
class AuthorNode;
class ArticleNode;
class AuthorLinkList;
class ArticleLinkList;
class TrieNodeAuthor;
class TrieNodeArticle;
class TrieArticle;
class TrieAuthor;


// Node for a simple string link list
class StringKeyedLinkListNode{
public:
    string key;
    string val1;
    string val2;
    int val3;
    int val4;
    StringKeyedLinkListNode *next;
};

// A link list that can contains string and integers and is sorted by the string "key"
class StringKeyedLinkList{
public:
    StringKeyedLinkListNode *start;
    StringKeyedLinkListNode *loc;
    StringKeyedLinkListNode *ploc;

    StringKeyedLinkList(){
        start = nullptr;
        loc = nullptr;
        ploc = nullptr;
    }

    bool isEmpty(){
        return start == nullptr;
    }

    void insert(string key){
        auto newNode = new StringKeyedLinkListNode();
        newNode->key = move(key);
        if(isEmpty()){
            start = newNode;
        }
        else{
            loc = start;
            ploc = nullptr;
            while (loc != nullptr){
                ploc = loc;
                loc = loc->next;
            }
            ploc->next = newNode;
        }
    }

    void insertSorted(string key){
        auto newNode = new StringKeyedLinkListNode();
        newNode->key = key;
        if(isEmpty()){
            start = newNode;
        }
        else{
            searchSorted(key);
            if (ploc == nullptr)
            {
                newNode->next = start;
                start = newNode;
            }
            else if (loc == nullptr){
                ploc->next = newNode;
            }else {
                newNode->next = loc;
                ploc->next = newNode;
            }
        }
    }

    void insertSortedNode(StringKeyedLinkListNode *newNode){
        if(isEmpty()){
            start = newNode;
        }
        else{
            searchSorted(newNode->key);
            if (ploc == nullptr)
            {
                newNode->next = start;
                start = newNode;
            }
            else if (loc == nullptr){
                ploc->next = newNode;
            }else {
                newNode->next = loc;
                ploc->next = newNode;
            }
        }
    }

    void search(string key){
        if (isEmpty()) {
            loc = nullptr;
            return;
        }
        loc = start;
        while (loc != nullptr){
            if (loc->key == key){
                return;
            }
            else{
                loc = loc->next;
            }
        }
    }

    void searchSorted(string key){
        if (isEmpty()) {
            loc = nullptr;
            return;
        }
        loc = start;
        ploc = nullptr;
        while (loc != nullptr && loc->key.compare(key) != 1){
            ploc = loc;
            loc = loc->next;
        }
    }



    void destroy(){
        destroy(start);
        start = nullptr;
    }

    void destroy(StringKeyedLinkListNode *node){
        if (node == nullptr)
            return;
        else{
            destroy(node->next);
            delete(node);
        }
    }
};

// a hash function that will be used in tries
int getLocation(char c){
    return c-32;
}