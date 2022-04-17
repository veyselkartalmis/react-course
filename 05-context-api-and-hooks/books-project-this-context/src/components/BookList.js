import React from "react";
import "./BookList.css";
import Book from "./Book";
import BookContext from "../contexts/BookContext";

class BookList extends React.Component {
    static contextType = BookContext; /* Kullanacağı contextType'i BookContext olarak belirttim */

    render() {
        const books = this.context;
        return (
            <section className="page-section" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">BookFolio</h2>
                        <h3 className="section-subheading text-muted">En Çok Okunan Kitapların Listesidir</h3>
                    </div>
                    <div className="row">
                        {
                            books.map((book, i) => {
                                return <Book book={book}
                                    key={i} /> /* Context API'den gelen verileri map ile Book comp. içerisine gönderiyorum */
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default BookList;