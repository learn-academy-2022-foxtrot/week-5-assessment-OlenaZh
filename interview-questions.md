# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a gem?

Your answer:

In my understanding, gem is a library which contains a prebuilt code. Developers can use it to add some functionalities in an app, or for testing purpose. 

Researched answer:

In addition to that, Gems allowed RoR developers to add functionalities without writing a code. This allow you to spend less time on creating your app.

One of the most popular Ruby Gem is RSpec - a framework for building tests for the code.  We use it for writing unit tests cases and mainly used in TDD environments. The syntax of RSpec is pretty clear and it makes writing test cases very intuitive and simple. 

Another popular Gem is Active Record - a database mapper.  
It is very useful to install gem bundler, especially in pair programming. 
To do that run this command:
    gem install bundler

And then anybody who opens your app need to run the command:
    bundle install
Bundler is a gem that installs other gems which sometimes have dependencies on other Gems. 


2. What does the acronym CRUD stand for?

Your answer:
As I remember CRUD stands for:
- Create -> create method passing key:value pairs
- Read:
    .all -> returns all instances in the database. 
    .first -> returns the first instance in the DB
    .last -> returns the last instance in the DB
    .find(1) -> returns the instance based on primary key (return by id)
    .where(key:value) -> returns a set of all instances that matches key:value pair.
- Update
    .update
- Delete
    .destroy 

Researched answer:

The CRUD basically describes the 4 essential operations for creating and managing persistent data elements. 
CRUD is widely used in database apps. 
READ returns items or documents from a database table based on some search criteria.
UPDATE is used to modify existing items or documents in a database. 
DELETE is used to remove data/item/documents from the database.

3. What is Ruby on Rails?

Your answer:

Ruby on Rails is a free server side web app framework. It is written on Ruby, and covers both Front-End and Back-End.

Researched answer:

In addition to that, Rails is a Model-View-Controller framework where: 
- Model -> handles data logic;
- View -> displays the information from the model to the user;
- Controller -> controls the data flow into a model object and updates the view when data changes. 
Also, it provides default structures for database, a web service, and web pages.

RoR has it own philosophy. One of it -> "Fat Models, skinny Controllers", which means that most of the application logic should be placed within the model and leave controller as light as possible. 

4. What is a relational database? Are there other kinds of databases?

Your answer:
Relational databases is basically databases which organize data into rows and columns. And those rows and columns form a table. 
Here is a few examples of relational DB: 
- MySQL
- PostgreSQL
- SQLite

A good example of Relational DB can be an Employee Management System which includes a table which has a columns for name, title, phone ect. 

There are several different types of BDs. For example MongoDb, which is non-relational database document-oriented database. 

Researched answer:
There are some properties that Relational DBs have:
- All of the values in a column have the same data type;
- Each row is unique;
- Each column has a unique name;
- The sequence of columns is insignificant;
- The sequence of rows is insignificant.

There are some other common types of DBs:
- Cloud DB;
- NoSQL DB;
- Object-oriented DB;
- Graph Db;
- Centralized DB. 


5. What are primary keys? Why are they important?

Your answer:

In Relational Dbs, each row in table has a unique ID. This ID called Primary Key and it is automatically generated. Since databases stores a large amount of the information(including duplicates), it is very important to have an unique identifier for every table record. 

Researched answer:
One of the advantage of a Primary Key is that, since each row of a table is uniquely identified, it helps you to access data faster. 
The primary key also allow you to update/delete only specific records by uniquely identifying them (by id). 
It helps you avoid inserting duplicates in a table.  
- 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: 
RESt itself stands for Representational State Transfer. It is a way of mapping HTTP routs and the CRUD functionality. In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, DELETE. 
And Routs itself are the code that are responsible for listening and receiving requests and then deciding what to send back. 
And Restful routs are just a conventional pattern to follow when structuring different routs for interacting with the server whenever an HTTP request is made by client.
When you navigate through a site by clicking link. you are making a State Transition which brings you to the next page. And by clicking from page to page toy are following the REST principles. And when something follows the rest principle it is known as RESTFUL. 

This is what I learned from the resources. But I definitely need it to be explained in a very very simple words. 

2. JSON:
It is a text-based way of representing JavaScript object literals, arrays, and scalar data. It is a lightweight, text-based, language-independent data interchange format. 

3. ERB:
Embedded Ruby. It is a feature of Ruby that let you generate any kind of text, in any quantity, from templates. 
ERB is a templating engine. This engine let you to mix HTML and Ruby so you can generate web pages using data from your database. 
ERB is Rails default engine for rendering views. 

4. Params:
Params is stands for Parameters method. 
Params refers to the parameters being passed to the controller via a GET and POST request.

5. API:
API is Application Programming Interface. It is a set of code that manage/control the way software interacts with other software.  
