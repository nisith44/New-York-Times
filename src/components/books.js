import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booklist: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fMoAiH8eeb00sHYdki3hqE753vKA9pPG')
            .then(Response => {
                console.log(Response);
                this.setState({
                    booklist: Response.data.results.books
                });
            })

        //console.log(this.state);

    }


    render() {
        const { booklist } = this.state;
        console.log(booklist);
        return (

            <div className="container-flud">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="#"> New York Times Best Selling Books</a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                            </ul>
                            <form class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success bg-light text-dark" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="row">
                    <div className="row row-cols-1 row-cols-md-4 g-4 col-md-9" style={{ marginLeft: '10px', marginTop: '10px' }}>


                        {
                            booklist.length ?
                                booklist.map(book => <div class="col">
                                    <div class="card">
                                        <img src={book.book_image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{book.title}</h5>
                                            <p class="card-text text-sm"><small>{book.description}</small></p>

                                            <a target="_blank" href={book.amazon_product_url} type="button" class="btn btn-primary">Buy On Amazon</a>
                                            <button data-title={book.title} style={{ marginLeft: '3px' }} type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target={`#nn${book.primary_isbn10}`}>
                                                Info
                                            </button>

                                            <div class="modal fade" id={`nn${book.primary_isbn10}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">{book.title}</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <img src={book.book_image} class="card-img-top" alt="..." />
                                                                </div>
                                                                <div className="col-md-9" style={{ textAlign: 'left' }}>
                                                                    <p><b>Title: </b>{book.title}</p>
                                                                    <p><b>Description: </b>{book.description}</p>
                                                                    <p><b>Author: </b>{book.author}</p>
                                                                    <p><b>publisher: </b>{book.publisher}</p>
                                                                    <p><b>ISBN: </b>{book.primary_isbn10}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <a type="button" target="_blank" href={book.amazon_product_url} class="btn btn-primary">Buy On Amazon</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>) :
                                null
                        }


                    </div>

                    <div className="col-md-3" >
                        <div class="card  border-primary mb-3 text-left" style={{ width: '280px', marginTop: '40px' }}  >
                            <div class="card-header">Best Selling Books</div>
                            <div class="card-body text-left" style={{ textAlign: 'left' }}>
                                <h5 class="card-title">New York Times Best Selling Books Ranking</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                {
                                    booklist.length ?
                                        booklist.map(book => <ul>
                                            <li className="text-left">{book.title}</li>
                                        </ul>) :
                                        null
                                }

                            </div>
                        </div>
                    </div>
                </div>




            </div>


        )
    }
}

export default books;