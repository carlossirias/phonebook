<h1 style='color: #5C95FF'>PhoneBook v1.0</h1>

## About

In this small script we can see a hashtable made using linked lists. The program is about a phone book, to do it we use as reference the problem (Pset 5) proposed by the Cs50 Course of Harvard University which I completed successfully. This program is made using OOP, so there is a difference between its inspiration and the one used in the Cs50 course.

Certificate: https://certificates.cs50.io/9ad8af9d-c32f-444c-a83c-02403eec4edb.pdf?size=letter

## Aggregates

A function was added to load the hashtable ```upload()`` using a txt file, which in future versions could be changed to an API.

Using the ```printAll`` function you can print all the buckets in the hashtable including the empty ones.

## Features

1. **Upload data from a text file:** The `upload()` method allows you to read contact data from a text file and populate the HashTable with the contacts.

2. **Insert new contacts:** The `insert(...values)` method enables the insertion of new contacts into the HashTable. Each contact consists of a name, a number, and an email address.

3. **Get contacts by index:** The `getAllByIndex(index)` method allows you to retrieve all contacts stored at a specific index of the HashTable.

4. **Get contacts by the first letter of their name:** The `getAllByLetter(letter)` method lets you obtain all contacts whose names start with a given letter. The method internally calculates the index using the hash function based on the letter.

5. **Print all contacts:** The `printAll()` method displays all contacts stored in the HashTable, organized by their respective indices.

## Usage

1. First, create a new instance of the HashTable: `var hash = new HashTable();`

2. Upload contact data from a text file using the `upload()` method: `hash.upload();`

3. Insert new contacts using the `insert(...values)` method: `hash.insert('Belen', 131213, 'carlos@gmail.com');`

4. Get contacts by index with the `getAllByIndex(index)` method: `hash.getAllByIndex(1);`

5. Get contacts by the first letter of their name using the `getAllByLetter(letter)` method: `hash.getAllByLetter('C');`

6. Print all contacts in the HashTable using the `printAll()` method: `hash.printAll();`

## Note

- The text file format for data upload should be as follows: each line represents a contact with name, number, and email separated by the '|' character. For example: `John Doe|123456789|john@example.com`

- The hash function used in this implementation converts the first letter of the name to an index in the range of 0-25 (A-Z). Any names starting with a letter outside this range will result in an "empty bucket" message.

- Feel free to experiment with this HashTable implementation and adapt it to your needs.

## Limitations

-Records cannot be deleted.
-The system is not asynchronous.
-Not adapted for large-scale use.
-To use it you need node.js.
-It would be better to separate the classes by modules.
-The list is not sorted.
