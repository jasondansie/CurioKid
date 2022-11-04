let cardData = document.querySelector(".cards")
let search = document.querySelector('#searchBook')
class Book {
    constructor(age, title, id, author, image) {
        this.age = age;
        this.title = title;
        this.id = id;
        this.author = author;
        this.image = image;
    }
}

const books = [];

books.push(new Book (8, "Spaceboy", "004", "David Williams","https://cdn.waterstones.com/override/v4/large/9780/0084/9780008467197.jpg"));
books.push(new Book (8, "Spaceboy", "004", "David Williams","https://cdn.waterstones.com/override/v4/large/9780/0084/9780008467197.jpg"));
books.push(new Book (8, "Spaceboy", "004", "David Williams","https://cdn.waterstones.com/override/v4/large/9780/0084/9780008467197.jpg"));
books.push (new Book(9, "Happy to Help", "005", "Liz Pichon","https://cdn.waterstones.com/override/v3/large/9780/7023/9780702313424.jpg"));
books.push (new Book(9, "Happy to Help", "005", "Liz Pichon","https://cdn.waterstones.com/override/v3/large/9780/7023/9780702313424.jpg"));
books.push (new Book(9, "Happy to Help", "005", "Liz Pichon","https://cdn.waterstones.com/override/v3/large/9780/7023/9780702313424.jpg"));
books.push (new Book(10, "Diary of a Wimpy Kid", "006", "Jeff Kinney","https://cdn.waterstones.com/override/v3/large/9780/2415/9780241583081.jpg"));
books.push (new Book(10, "Diary of a Wimpy Kid", "006", "Jeff Kinney","https://cdn.waterstones.com/override/v3/large/9780/2415/9780241583081.jpg"));
books.push (new Book(10, "Diary of a Wimpy Kid", "006", "Jeff Kinney","https://cdn.waterstones.com/override/v3/large/9780/2415/9780241583081.jpg"));
books.push (new Book(10, "Diary of a Wimpy Kid", "006", "Jeff Kinney","https://cdn.waterstones.com/override/v3/large/9780/2415/9780241583081.jpg"));

console.log(books);

const getBooks = () => {
    const displayBooks = books => {
        const bookCards = books.map (
            book => `
            <div class="card">
                <img src="${book.image}" alt="book image">
                <h2>${book.title}</h2>
                <h3>${book.author}</h3>
            </div>
            `
        ).join("");
        cardData.innerHTML = bookCards;
    }
    /* displayBooks(books); */
    
    const searchBooks = e => {
        e.preventDefault();

        let Books = books.filter(book => book.title.includes(search.value));

        if (search.value == "") {
            displayBooks(books);
        }
        else {
            displayBooks(Books); 
        }
    }
    search.addEventListener("keyup", searchBooks);
}
getBooks();