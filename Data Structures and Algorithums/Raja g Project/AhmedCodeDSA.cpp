#include <iostream>
#include <fstream>
#include <chrono>
#include <sstream>

using namespace std;

class AuthorNode;
class ArticleNode;
class AuthorListNode;
class ArticleListNode;
class AuthorList;
class ArticleList;
class Author;
class Article;


class ArticleNode {
public:
	int year;
	string month;
	string title;
	AuthorList* all_authors;
	string journal;
	ArticleNode* next;
};

class AuthorNode {
public:
	string name;
	ArticleList* all_articles{};
	int total_articles;
	AuthorNode* next;
};
class ArticleListNode {
public:
	ArticleNode* article;
	ArticleListNode* next;
};
class AuthorListNode {
public:
	AuthorNode* author;
	AuthorListNode* next;
};
class ArticleList {
public:
	ArticleListNode* first{};
	ArticleListNode* loc{};
	ArticleListNode* ploc{};
	ArticleList() {
		first = nullptr;
		loc = nullptr;
		ploc = nullptr;
	}
	bool isEmpty() {
		return first == nullptr;
	}
	void Search(ArticleNode* Node) {
		if (isEmpty()) {
			return;
		}
		else
		{
			loc = first;
			ploc = nullptr;
			while (loc != nullptr) {
				if (loc->article == Node)
					return;
				else {
					ploc = loc;
					loc = loc->next;
				}
			}
		}
	}
	void Insert(ArticleNode* Node) {
		if (isEmpty()) {
			ArticleListNode* articlelist = new ArticleListNode();
			articlelist->article = Node;
			articlelist->next = nullptr;
		}
		else {
			Search(Node);
			if (loc == nullptr) {
				ArticleListNode* articlelist = new ArticleListNode();
				articlelist->article = Node;
				articlelist->next = nullptr;
				ploc->next = articlelist;
			}
		}
	}
};
class AuthorList {
public:
	AuthorListNode* first{};
	AuthorListNode* loc{};
	AuthorListNode* ploc{};
	AuthorList() {
		first = nullptr;
		loc = nullptr;
		ploc = nullptr;
	}
	bool isEmpty() {
		return first == nullptr;
	}
	void Search(AuthorNode* Node) {
		if (isEmpty()) {
			return;
		}
		else
		{
			loc = first;
			ploc = nullptr;
			while (loc != nullptr) {
				if (loc->author == Node)
					return;
				else {
					ploc = loc;
					loc = loc->next;
				}
			}
		}
	}
	void Insert(AuthorNode* Node) {
		if (isEmpty()) {
			AuthorListNode* authorlist = new AuthorListNode();
			authorlist->author = Node;
			authorlist->next = nullptr;
			first = authorlist;
		}
		else {
			Search(Node);
			if (loc == nullptr) {
				AuthorListNode* authorlist = new AuthorListNode();
				authorlist->author = Node;
				authorlist->next = nullptr;
				ploc->next = authorlist;
			}
		}
	}
	void Print() {
		if (isEmpty()){
            return;
		}
		else {
			loc = first;
			while (loc != nullptr) {
				cout << loc->author->name << endl;
				loc = loc->next;
			}
		}
	}
};
class Author {
private:
	AuthorNode* first{};
	AuthorNode* loc{};
	AuthorNode* ploc{};
public:
	bool isEmpty(){
		return (first == nullptr);
	}
	void Search(string Name) {
		if (isEmpty())
			return;
		else {
			loc = first;
			ploc = nullptr;
			while (loc != nullptr) {
				if (loc->name == Name)
					return;
				else {
					ploc = loc;
					loc = loc->next;
				}
			}
		}

	}
	AuthorNode* Insert(string Name, ArticleNode* article) {
		if (isEmpty()) {
			AuthorNode* author = new AuthorNode();
			author->name = Name;
			author->all_articles = new ArticleList();
			author->all_articles->Insert(article);
			author->total_articles = 0;
			author->next = nullptr;
			first = author;
			return author;
		}
		else {
			Search(Name);
			if (loc == nullptr) {
				AuthorNode* author = new AuthorNode();
				author->name = Name;
				author->all_articles = new ArticleList();
				author->all_articles->Insert(article);
				author->total_articles = 0;
				author->next = nullptr;
				ploc = author;
				return author;
			}
			else {
				loc->all_articles->Insert(article);
				return loc;
			}
		}
	}
};
class Article {
private:
	ArticleNode* first{};
	ArticleNode* loc{};
	ArticleNode* ploc{};
public:
	bool isEmpty() {
		return (first == nullptr);
	}
	void Search(string Title) {
		if (isEmpty())
			return;
		else {
			loc = first;
			ploc = nullptr;
			while (loc != nullptr) {
				if (loc->title == Title)
					return;
				else {
					ploc = loc;
					loc = loc->next;
				}
			}
		}

	}
	ArticleNode* Insert(string Title, string Journal, string Month, int Year) {
		if (isEmpty()) {
			ArticleNode* article = new ArticleNode();
			article->title = Title;
			article->all_authors = new AuthorList();
			article->journal = Journal;
			article->month = Month;	
			article->year = Year;
			article->next = nullptr;
			first = article;
			return article;
		}
		else {
			Search(Title);
			if (loc != nullptr) {
				ArticleNode* article = new ArticleNode();
				article->title = Title;
				article->all_authors = new AuthorList();
				article->journal = Journal;
				article->month = Month;
				article->year = Year;
				article->next = nullptr;
				ploc = article;
				return article;
			}
			else {
				return loc;
			}
		}
	}
	void InsertAuthor(string Title, AuthorList* authorList){
	    Search(Title);
	    loc->all_authors = authorList;
	}
	void Print() {
		if (isEmpty())
			return;
		else {
			loc = first;
			while (loc != nullptr) {
				cout << loc->title << endl;
				cout << loc->journal << endl;
				cout << loc->month << endl;
				cout << loc->year << endl;
				loc->all_authors->Print();
				loc = loc->next;
			}
		}
	}
};
void parseComplete(Author* author,Article* article){
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
    ArticleNode* temparticle;
    AuthorNode* tempauthor;
    string title, journal, month, year, publisher, authors;
    // a new Article just to print that the program is working

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

                authors = value;
                break;
            case TitleIndex:
                cout << "WTf";
                title = value;
                break;
            case Journal_nameIndex:
                journal = value;
                break;
            case MonthIndex:
                month = value;
                break;
            case YearIndex:
                year = value;
                break;
            case PublisherIndex:
                publisher = value;
                break;
        }
        cout << "WTf";

        // if a new record has started .. printing the record and resetting the column no

        // (resets when the column Identifier(in csv) is detected (all entries of the column start with "ISI:))
        if (value.find("\"ISI:") == 0)
        {
            if (!dud) {
                cout << "WTf";
                string SubMonth = month.substr(2, 3);
                string SubStringYear = year.substr(1, 4);
                int yearinInt = stoi(SubStringYear);
                temparticle = article->Insert(title,journal,SubMonth,yearinInt);
                auto* authorlist = new AuthorList();
                int i=0;
                string FullName;
                string HalfName;
                string FirstName;
                string LastName;
                stringstream FirstSplit(authors);
                while (getline(FirstSplit, FullName, ';')) {
                    stringstream SecondSplit(FullName);
                    while (getline(SecondSplit, HalfName, ',')) {
                        if (i % 2 == 0) {
                            LastName = HalfName;
                            i++;
                        } else {
                            FirstName = HalfName;
                            tempauthor = author->Insert(FirstName + LastName, temparticle);
                            authorlist->Insert(tempauthor);
                            i++;
                        }
                    }
                }
                article->InsertAuthor(title,authorlist);
                // 2 because the number of the column Identifier is 2
                currentIndex = 2;


            } else dud = false;
        }
        currentIndex ++;
    }

    long end = chrono::duration_cast< chrono::milliseconds >(
            chrono::system_clock::now().time_since_epoch()).count();

    cout << "parsing complete" << endl;
    cout << "parsing took " << end-start << " milli-seconds" << endl;

    cout << "-----------------------------------------------------------" << endl << endl;
    article->Print();
}

int main() {
	Author* author = new Author();
	Article* article = new Article();
	parseComplete(author,article);
	article->Print();
	return 0;
}
