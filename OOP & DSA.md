# OOP

### Class
1. Data Members/Properties
2. Methods/Functions

### Object Creation
* Object in javascript --> const obj= new Object();
* Object in cpp --> Object obj;                    -------> in main function
- No memory allocation in RAM until object is created

### Function Overloading
* writing multiple functions with the same name in a class by
1. No. of arguments different 
2. Sequence of arguments different

### Operator Overloading
* to use operators with both built in and user defined data types.
1. void operator++(){c++}
2. Test operator+(ClassName c2){return num1+c2.num1} --> main{ClassName c1(5),c2(3); c1+c2}--> right=argument, left=function call


### Access Specifiers
1. public
2. private
3. protected
* to achieve `Encapsulation` we use access specifiers

### 1. Encapsulation
- hiding data
- Binding data and functions to protect it. e.g. class

### 2. Inheritance
- inherit values from parent class
- we use protected(in parent class) to achieve inheritance
1. single inheritance -->single parent          -> class Child:public Parent {}
2. multiple inheritance  -->multiple parents    -> class Child:public Father, public Mother {}
3. multilevel inheritance -->multilevel parents -> class Son:public Father {}; class Father:public GrandFather {}
4. Hybrid inheritance --> combination of multiple & multilevel inheritance 
-> class Father:public GrandFather, public GrandMother {} ; class Son:public Father {};

### 3. Abstraction
- show only the necessary information
- In this we don't want to show how we have calculated something by declaring properties/data members as private

### 4. Polymorphism
- many forms like a person as child, father, brother, husband etc
* 2 types: 1. compile time, 2. run time
* compile time: 1. function overloading, 2. operator overloading
* run time: 1. virtual function 



# DSA

### 1. Linear Search
from 1 place to anthor like trivarcry array

### 2. Binary Search
pick middle element, if > middle element then search from right else left

### 3. Stack 
- LIFO
- insertion and deletion on one end
- 2 operations: push and pop
- doesnt have any type
- only one pointer

### 4. Queue 
- FIFO
- insertion and deletion on opposite end
- 2 operations: rear and front
- various types : circular queue, general queue, doubly queue
- two different pointers

### 5. Tree
- non-lenear DS
- collection of nodes and edges
- unique node in tree called root node
- there's no loop/cycle
- hierarchal model
- contains N-1 edges

### 6. Graph
- non-lenear DS
- collection of vertices and edges
- no unique node in graph
- a loop/cycle can be performed
- network model
- contains no of edges depends on graph

### 7. Sorting
- to arrange N elements of array in a particular format either ascending or descending order.
1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Quick Sort
5. Merge Sort
6. Heap Sort
7. Redix Sort
8. Shell Sort
9. Tree Sort
10. Bucket Sort

### 8. Linked List
- it's the linear DS where data isn't sorted sequentially inside the computer memory but it's linked with each-other with the help of address.
* Types:
1. singly linked list
2. doubly linked list
3. circular linked list