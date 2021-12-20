#include <utility>
#include "Article.cpp"
#include <fstream>
#include <chrono>

// this class contains an article with authors as string(authors not parsed yet) .. the parseComplete Method makes
// objects of this class and sends it to the InsertArticle methods that copies its data, parses the author string and
// adds it to the data

class UnparsedArticle{
public:
    string Title;
    string Journal_name;
    string Year;
    string Month;
    string Publisher;
    string authors;
};

class Manager{

public:
    // count of authors and articles in the database
    int authorCount;
    int articleCount;
    // tries of author and articles
    TrieArticle *articles;
    TrieAuthor *authors;

    // constructor
    Manager(){
        authorCount = 0;
        articleCount = 0;
        authors = new TrieAuthor();
        articles = new TrieArticle();
    }

    // recieves an object of UnparsedArticle and adds it to the data
    void InsertArticle(UnparsedArticle *unparsedArticle){
        auto *article = new Article();
        article->Title = unparsedArticle ->Title.substr(1, unparsedArticle->Title.size()-2);
        article->Journal_name = unparsedArticle ->Journal_name.substr(2, unparsedArticle ->Journal_name.size()-4);
        article->Year = unparsedArticle ->Year.substr(1, unparsedArticle->Year.size()-2);
        article->Month = unparsedArticle ->Month.substr(2, unparsedArticle->Month.size()-4);
        article->Publisher = unparsedArticle ->Publisher.substr(2, unparsedArticle->Publisher.size()-4);

        int separator;
        string authorsForArticle = unparsedArticle->authors;
        authorsForArticle = authorsForArticle.substr(1, authorsForArticle.size()-2);
        string token;
        size_t pos = 0;

        for (char i : authorsForArticle) {
            if (i == ';'){
                while (token.find(' ') == 0)
                    token = token.substr(1,token.size()-1);
                if (token.compare("") == 0)
                    continue;

                separator = token.find(',');
                token = token.substr(separator+2, token.size()-1) + " " + token.substr(0,separator);

                authors -> search(token);

                Author *author;
                if (authors->loc == nullptr) {
                    author = new Author();
                    author->fullname = token;
                    authors->insert(author);
                    authorCount += 1;
                    author->articles = new ArticleLinkList();
                }
                else{
                    author = authors->loc->value;
                }
                article->authors->insertUnsorted(author);
                author->articles->insertUnsorted(article);
                token = "";
            }
            else
                token += i;
        }
        while (token.find(' ') == 0)
            token = token.substr(1,token.size()-1);
        if (token.compare("") == 0)
            return;
        separator = token.find(',');
        token = token.substr(separator+2, token.size()-1) + " " + token.substr(0,separator);
        authors -> search(token);
        Author *author;
        if (authors->loc == nullptr) {
            author = new Author();
            author->fullname = token;
            authors->insert(author);
            authorCount += 1;
            author->articles = new ArticleLinkList();
        }
        else{
            author = authors->loc->value;
        }

        article->authors->insertUnsorted(author);
        author->articles->insertUnsorted(article);
        articles->insert(article);
        articleCount++;
    }

    // prints authors
    void printAuthors(){
        authors->print();
    }

    //prints articles
    void printArticles(){
        articles->print();
    }

    // prints all author names and their articles
    void printArticlesOfAuthors(){
        printArticlesOfAuthors(authors->RootNode);
    }

    // overloaded method
    void printArticlesOfAuthors(TrieNodeAuthor *start){
        if (authors->isEmpty())
            return;

        for (int i = 0; i < TrieNodeAuthor::charCount; i++)
            if (start->character[i] != nullptr)
                printArticlesOfAuthors(start->character[i]);
        if (start->value != nullptr) {
            cout << start->value->fullname << endl;
            start->value->articles->print();
            cout << endl;
        }
    }

    //print all article titles and their authors
    void printAuthorsOfArticles(){
        articles->printAuthors();
    }

    // parser
    void parseComplete() {
        cout << "-----------------------------------------------------------" << endl;
        cout << "parsing started ..." << endl;

        long start = chrono::duration_cast< chrono::milliseconds >(
                chrono::system_clock::now().time_since_epoch()).count();

        ifstream file;
        file.open("DataSet in CSV Format.csv");

        const int AuthorIndex = 3;
        const int TitleIndex = 4;
        const int Journal_nameIndex = 5;
        const int MonthIndex = 8;
        const int YearIndex = 10;
        const int PublisherIndex = 19;

        // wasting the line with column headings
        string publication;
        getline(file, publication, '\n');

        // temporary values to store data
        string value;
        string tempValue;
        int currentIndex = 0;
        bool dud = true;

        // a new Article just to print that the program is working
        auto *article = new UnparsedArticle();

        // file file has lines
        while (file.good()){

            // get a value
            getline(file, value,',');

            // sometimes when the cells have , in them, the program messes up ... this code is to ignore , in "" or {}
            if (value.find('{') != string::npos && value.find('}') == string::npos)
            {
                while (true) {
                    getline(file, tempValue, ',');
                    value.append("," + tempValue);
                    if (tempValue.find('}') != string::npos)
                        break;

                }
            }
            else if (value.find('"') != string::npos && value.rfind('"') != value.size()-1)
            {
                while (true) {
                    getline(file, tempValue, ',');
                    value.append("," + tempValue);
                    if (tempValue.find('"') != string::npos)
                        break;

                }
            }

            // assigning values (currentIndex in the current column number)
            switch(currentIndex) {
                case AuthorIndex:
                    article->authors = value;
                    break;
                case TitleIndex:
                    article->Title = value;
                    break;
                case Journal_nameIndex:
                    article->Journal_name = value;
                    break;
                case MonthIndex:
                    article->Month = value;
                    break;
                case YearIndex:
                    article->Year = value;
                    break;
                case PublisherIndex:
                    article->Publisher = value;
                    break;
            }

            // if a new record has started .. printing the record and resetting the column no

            // (resets when the column Identifier(in csv) is detected (all entries of the column start with "ISI:))
            if (value.find("\"ISI:") == 0)
            {
                if (!dud) {
                    // 2 because the number of the column Identifier is 2
                    currentIndex = 2;
                    InsertArticle(article);

                } else dud = false;
            }
            currentIndex ++;
        }
        InsertArticle(article);

        long end = chrono::duration_cast< chrono::milliseconds >(
                chrono::system_clock::now().time_since_epoch()).count();

        cout << "parsing complete" << endl;
        cout << "parsing took " << end-start << " milli-seconds" << endl;
        cout << "parsed " << authorCount << " authors and " << articleCount << " articles" << endl;

        cout << "-----------------------------------------------------------" << endl << endl;
    }

    void queryQ1(string authorName){
        authors -> search(move(authorName));
        if (authors->loc != nullptr){
            cout << authors->loc->value->articles->count << endl;
        }
        else{
            cout << "Author not found" << endl;
        }
    }

    void queryQ2(string authorName){
        authors -> search(move(authorName));
        if (authors->loc != nullptr){
            ArticleNode *aloc = authors->loc->value->articles->start;
            auto *list = new StringKeyedLinkList();
            while(aloc != nullptr){
                string year = aloc->value->Year;
                list->search(year);
                if (list->loc == nullptr){
                    list->insertSorted(year);
                    list->search(year);
                    list->loc->val3 = 1;
                }
                else{
                    list->loc->val3 += 1;
                }
                aloc = aloc->next;
            }
            list->loc = list->start;
            while (list->loc != nullptr){
                cout << list->loc->key << " : " << list->loc->val3 << endl;
                list->loc = list->loc->next;
            }
            list->destroy();
            delete(list);
        }
        else{
            cout << "Author not found" << endl;
        }
    }

    void queryQ3(const string& authorName){
        authors -> search(authorName);
        if (authors->loc != nullptr){
            ArticleNode *aloc = authors->loc->value->articles->start;
            auto *list = new StringKeyedLinkList();
            while(aloc != nullptr){
                string year = aloc->value->Year;
                list->search(year);
                if (list->loc == nullptr){
                    list->insertSorted(year);
                    list->search(year);
                    AuthorNode *temp = aloc->value->authors->start;
                    list->loc->val1.append(";" + authorName);
                    while(temp != nullptr){
                        if (list->loc->val1.find(temp->value->fullname) == string::npos){
                            list->loc->val1.append(";" + temp->value->fullname);
                            list->loc->val3++;
                        }
                        temp = temp->next;
                    }
                    list->loc->val4 = 1;
                }
                else{
                    AuthorNode *temp = aloc->value->authors->start;
                    while(temp != nullptr){
                        if (list->loc->val1.find(temp->value->fullname) == string::npos){
                            list->loc->val1.append(";" + temp->value->fullname);
                            list->loc->val3++;
                        }
                        temp = temp->next;
                    }
                    list->loc->val4 += 1;
                }
                aloc = aloc->next;
            }
            list->loc = list->start;
            while (list->loc != nullptr){
                cout << list->loc->key << " : " << list->loc->val4 << " : " << list->loc->val3 << endl;
                list->loc = list->loc->next;
            }
            list->destroy();
            delete(list);
        }
        else{
            cout << "Author not found" << endl;
        }
    }

    void queryQ3v2(const string& authorName){
        int count = 1;
        authors->search(authorName);
        auto *list = new StringKeyedLinkList();
        if (authors->loc != nullptr){
            ArticleNode *aloc = authors->loc->value->articles->start;
            while (aloc != nullptr){

                string year = aloc->value->Year;
                auto *newNode = new StringKeyedLinkListNode();
                newNode->key = year;
                newNode->val1 = aloc->value->Title;
                AuthorNode *auloc = aloc->value->authors->start;
                while (auloc != nullptr){
                    if (auloc->value->fullname != authorName)
                        newNode->val3 += 1;
                    auloc = auloc->next;
                }
                list->insertSortedNode(newNode);
                aloc = aloc->next;
            }
            list->loc = list->start;
            while (list->loc != nullptr){
                cout << list->loc->key << " : " << list->loc->val3 << " : " << list->loc->val1 << endl;
                list->loc = list->loc->next;
            }
        }
    }

    void queryQ4(const string& authorName){
        authors->search(authorName);
        if (authors->loc != nullptr){
            ArticleNode *aloc = authors->loc->value->articles->start;
            auto *list = new StringKeyedLinkList();
            int pos;
            while (aloc != nullptr){
                pos = 0;
                AuthorNode *auloc = aloc->value->authors->start;

                while(auloc != nullptr){
                    pos ++;
                    if (auloc->value->fullname == authorName)
                        break;
                    auloc = auloc->next;
                }

                list->search(to_string(pos));

                if (list->loc == nullptr) {
                    list->insertSorted(to_string(pos));
                    list->search(to_string(pos));
                    list->loc->val3 = 1;

                }
                else {
                    list->loc->val3 += 1;
                }
                aloc = aloc->next;
            }
            list->loc = list->start;
            while(list->loc != nullptr){
                cout << list->loc->key << " : " << list->loc->val3 << endl;
                list->loc = list->loc->next;
            }
            list->destroy();
            delete(list);


        }
        else cout << "Author not found" << endl;
    }

    void queryQ5(string authorName){
        authors->search(move(authorName));
        if (authors->loc != nullptr){
            ArticleNode *aloc = authors->loc->value->articles->start;
            auto *list = new StringKeyedLinkList();
            while (aloc != nullptr){
                auto *node = new StringKeyedLinkListNode();
                node->key = aloc->value->Year;
                node->val1 = aloc->value->Journal_name;
                list->insertSortedNode(node);
                aloc = aloc->next;
            }
            list->loc = list->start;
            while (list->loc != nullptr){
                cout << list->loc->key << " : " << list->loc->val1 << endl;
                list->loc = list->loc->next;
            }

        }
        else cout << "Author not found " << endl;
    }
};
