function makeBooks() {

    class book {
        constructor(age, title, id, author, image) {
            this.age = age;
            this.title = title;
            this.id = id;
            this.author = author;
            this.image = image;
        }
    }

    const books = [];

    books.push (new book(5, "The Owl Who Was Afraid of the Dark", "001", "Jill Tomlinson","https://cdn.waterstones.com/bookjackets/large/9781/4052/9781405271974.jpg"));
    books.push (new book(6, "Bunny vs Monkey", "002", "Jamie Smart","https://cdn.waterstones.com/override/v1/large/9781/7884/9781788452809.jpg"));
    books.push (new book(7, "Billy and the Giant Adventure", "003", "Jamie Oliver","https://cdn.waterstones.com/override/v1/large/9780/2416/9780241640944.jpg"));
    books.push (new book(8, "Spaceboy", "004", "David Williams","https://cdn.waterstones.com/override/v4/large/9780/0084/9780008467197.jpg"));
    books.push (new book(9, "Happy to Help", "005", "Liz Pichon","https://cdn.waterstones.com/override/v3/large/9780/7023/9780702313424.jpg"));
    books.push (new book(10, "Diary of a Wimpy Kid", "006", "Jeff Kinney","https://cdn.waterstones.com/override/v3/large/9780/2415/9780241583081.jpg"));

    return books;
}

 
// Exporting variables and functions
export {makeBooks};

