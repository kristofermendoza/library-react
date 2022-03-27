import React from 'react';
import Book from './ui/Book'
import { books } from '../data'

const Featured = () => {
    function getFiveStarBooks(){
        
    }
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">books</span>
                    </h2>
                    <div className="books">
                        {books
                        .filter((book) => book.rating === 5)
                        .slice(0,4)
                        .map((book, index) => (
                        <Book 
                            book={book} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
