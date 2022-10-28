import {makeBooks} from './books.js';

const findAll = document.querySelector("#findAll");
const search = document.querySelector("#search");


const books = makeBooks();

/*
books.forEach(book => {
    console.log(book.title);
});
*/

const findAllBooks = () => {
    let allbooks = [];

    books.forEach(book => {
        if (book.age <= 7) {
            allbooks.push(book);
        }
    });

    console.log(allbooks);
    return allbooks;
}

findAll.addEventListener("click", findAllBooks)