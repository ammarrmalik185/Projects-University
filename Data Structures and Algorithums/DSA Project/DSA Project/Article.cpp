#include <iostream>
#include "Author.cpp"

using namespace std;

// class that contains data of an article
class Article {
public:
   string Title;
   string Journal_name;
   string Year;
   string Month;
   string Publisher;
   AuthorLinkList *authors;
   Article(){
       authors = new AuthorLinkList();
   }
};

// node of article link list
class ArticleNode{
public:
    ArticleNode *next;
    Article *value;
};

// a link list for article
class ArticleLinkList{
public:
    ArticleNode *start;
    ArticleNode *loc;
    ArticleNode *ploc;
    int count;

    ArticleLinkList(){
        start = nullptr;
        count = 0;
    };

    bool isEmpty(){
        return start == nullptr;
    }

    void search(string name){
        if (isEmpty()){
            loc = nullptr;
            return;
        }
        else
        {
            loc = start;
            while (loc != nullptr)
            {
                if (loc->value->Title.compare(name) == 0)
                    return;
                else
                    loc = loc->next;
            }
        }

    }

    void searchSorted(string name){

        loc = start;
        ploc = nullptr;
        while (loc != nullptr){
            if (loc->value->Title.compare(name) == 1){
                return;
            }
            else{
                ploc = loc;
                loc = loc->next;
            }
        }
        loc = nullptr;
    }

    void insertSorted(Article *article){
        auto *newNode = new ArticleNode();
        newNode->value = article;
        if (isEmpty()){
            start = newNode;
        }
        else {
            searchSorted(article->Title);
            if (ploc == nullptr) {
                newNode->next = start;
                start = newNode;
            } else {
                if (loc == nullptr) {
                    ploc->next = newNode;
                    newNode->next = nullptr;
                } else {
                    newNode->next = loc;
                    ploc->next = newNode;
                }
            }
        }
    }

    void insertUnsorted(Article *article){
        count ++;
        auto *newNode = new ArticleNode();
        newNode->value = article;
        if (isEmpty()){
            start = newNode;
        }else{
            loc = start;
            ploc = nullptr;
            while (loc != nullptr){
                ploc = loc;
                loc = loc->next;
            }
            ploc->next = newNode;

        }
    }

    void print(){
        loc = start;
        while(loc != nullptr)
        {
            cout << loc->value->Title << endl;
            loc = loc->next;
        }
    }
};

// node of article tries
class TrieNodeArticle
{
public:
    static const int charCount = 96;
    TrieNodeArticle *character[charCount]{};
    Article *value;

    // Constructor
    TrieNodeArticle()
    {
        value = nullptr;
        for (auto & i : this->character)
            i = nullptr;
    }

};

// article tries
class TrieArticle {
public:
    TrieNodeArticle *RootNode ;
    TrieNodeArticle *loc;
    int count = 0;

    bool isEmpty(){
        return RootNode == nullptr;
    }

    void insert(Article *article) {
        if (isEmpty())
            RootNode = new TrieNodeArticle();

        loc = RootNode;
        for (char i : article->Title) {
            if (loc->character[getLocation(i)] == nullptr) {
                loc->character[getLocation(i)] = new TrieNodeArticle();
            }
            loc = loc->character[getLocation(i)];
        }
        if (loc->value == nullptr) {
            loc->value = article;
            count ++;
        }
    }

    void search(string Title) {
        if (isEmpty()) {
            loc = nullptr;
            return;
        }

        loc = RootNode;
        for (char i : Title) {
            loc = loc->character[getLocation(i)];
            if (loc == nullptr)
                return;
        }
    }

    void print(){
        print(RootNode);
    }

    void print(TrieNodeArticle *start){
        if (isEmpty())
            return;

        for (int i = 0; i < TrieNodeArticle::charCount; i++)
            if (start -> character[getLocation(i)] != nullptr)
                print(start->character[getLocation(i)]);
        if (start -> value != nullptr){
            cout << start ->value -> Title << endl;
            cout << start ->value -> Journal_name << endl;
            cout << start ->value -> Year << endl;
            cout << start ->value -> Month << endl;
            cout << start ->value -> Publisher << endl;
            cout << endl;
        }
    }

    void printAuthors(){
        printAuthors(RootNode);
    }

    void printAuthors(TrieNodeArticle *start){
        if (isEmpty())
            return;

        for (int i = 0; i < start->charCount; i++)
            if (start -> character[i] != nullptr)
                printAuthors(start->character[i]);
        if (start -> value != nullptr){
            cout << start->value->Title << endl;
            start->value->authors->print();
            cout << "--------------------" << endl;
        }
    }
};
