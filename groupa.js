

const findAll = document.querySelector("#findAll");
const search = document.querySelector("#search");
const bookDisplay = document.querySelector(".books");
const bytitle = document.querySelector(".byTitle");
const byauthor = document.querySelector(".byAuthor");

let bookList = [];

const getBooks = async (bookUrl) => {
    const data = await fetch(bookUrl,{mode:'cors'});
    bookList = await data.json();
    console.log('booklist;',bookList);
    displayBooks(bookList);
}


const findAllBooks = () => {
    let allbooks = [];

    bookList.forEach(book => {
        if (book.age <= 7) {
            allbooks.push(book);
        }
    });

    console.log(allbooks);
    displayBooks(allbooks);
    return allbooks;
}

const displayBooks = (bookArry) => {
   
    const book = bookArry.map((book) => {

            return `<div class="container">
        <div class="book"> 
            <h5 id="book-name">${book.title}</h5>
            <img src= ${book.image} alt="${book.title}" width="100px">
            <div class="author"> 
                <label>Author:</label> <h5>${book.author}</h5>
            </div>
        </div>
        </div>`                 
        
    }).join('');
    
    bookDisplay.innerHTML = book;
}

const searchBooks = (bookUrl) => {
    
}

findAll.addEventListener("click", getBooks(`http://localhost:3000/books`));
byauthor.addEventListener("keyup", searchBooks(`http://localhost:3000/search/byauthor`));
bytitle.addEventListener("keyup", searchBooks(`http://localhost:3000/search/bytitle`));

