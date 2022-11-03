'use strict';

const books = require('./bookList.json');

function getAllBooks(){
    return books;
}

function getAuthor (){
    const authors = [];
    for (const book of books){
        if (!books.includes(book.author)) {
            books.push((book.author));
        }
    }
    return authors;
}

function getTitle (){
    const titles = [];
    for (const book of books){
        if (!books.includes(book.title)) {
            boojs.push((book.title));
        }
    }
    return titles;
}

module.exports = { getAllBooks, getTitle, getAuthor}