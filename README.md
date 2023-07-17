<h1 style='color: #5C95FF'>PhoneBook v1.0</h1>

## About

In this small script we can see a hashtable made using linked lists. The program is about a phone book, to do it we use as reference the problem (Pset 5) proposed by the Cs50 Course of Harvard University which I completed successfully. This program is made using OOP, so there is a difference between its inspiration and the one used in the Cs50 course.

Certificate: https://certificates.cs50.io/9ad8af9d-c32f-444c-a83c-02403eec4edb.pdf?size=letter

## Aggregates

A function was added to load the hashtable ```upload()`` using a txt file, which in future versions could be changed to an API.

Using the ```printAll`` function you can print all the buckets in the hashtable including the empty ones.

## Limitations

-Records cannot be deleted.
-The system is not asynchronous.
-Not adapted for large-scale use.
-To use it you need node.js.
-It would be better to separate the classes by modules.
-The list is not sorted.
