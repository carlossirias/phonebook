class Node
{
    constructor(name, number = 1234, email = 'carlos.sirias04@gmail.com', next = null)
    {
        this.name = name
        this.number = number
        this.email = email
        this.next = next
    }
}

class List
{
    constructor()
    {
        this.head = null
    }

    add(...values)
    {
        if(this.head == null) this.head = new Node(...values)
        else
        {
            var ref = this.head

            while(ref.next != null)
            {
                ref = ref.next
            }
            ref.next = new Node(...values)
        }
    }

    getAll()
    {
        var arr = [{'name': this.head.name, 'number': this.head.number, 'email': this.head.email}]

        var ref = this.head
        while(ref.next != null)
        {
            arr.push({'name': ref.next.name, 'number': ref.next.number, 'email': ref.next.email})
            ref = ref.next
        }
        return arr
    }
}

class HashTable
{
    constructor(size = 26)
    {
        this.buckets = new Array(size)
    }

    upload()
    {
        const fs = require("fs");
        var names;

        try {
            const data = fs.readFileSync("./DATA/contacts.txt");
            names = data.toString().split('\r\n');
            names.shift()
            names.forEach(name => this.insert(...name.split('|')))
        } catch (err) {
        console.error("Error al leer el archivo:", err);
        }
    }

    insert(...values)
    {
        var key = this.hash(values[0])
        if(this.buckets[key] == null)
        {
            this.buckets[key] = new List()
        }

        this.buckets[key].add(...values)
    }

    hash(value)
    {
        return (value[0].toUpperCase().charCodeAt() - 65) % 26
    }

    getAllByIndex(index)
    {
        if(this.buckets[index] != undefined) 
        {
            var users = this.buckets[index].getAll()
            console.log(users)
        }
        else console.log('This bucket is empty')
    }

    getAllByLetter(letter)
    {
        var index = this.hash(letter)
        this.getAllByIndex(index)
    }

    printAll()
    {
        for(var i = 0; i< this.buckets.length; i++)
        {
            console.log(String.fromCharCode(i+65), '=>')
            console.log(this.getAllByIndex(i) ? this.getAllByIndex(i): '')
        }
    }
}

var hash = new HashTable()

//----Upload .txt from data to our HashTable
hash.upload()

//---Insert allow us to inser data in the HashTable
hash.insert('Belen', 131213, 'carlos@gmail.com')
hash.insert('Olman', 131213, 'carlos@gmail.com')

//---Print by index
//hash.getAllByIndex(1)

//---Print all registers by letter or word
//hash.getAllByLetter('Carlos')
//hash.getAllByLetter('H')

//---Print All
hash.printAll()