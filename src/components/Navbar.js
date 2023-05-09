import React, { Component } from 'react'

export class Navbar extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let searchValue = document.querySelector('.search-input').value;
        console.log(searchValue);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary" href="/">News Monkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item"><a href='/' className="nav-link">business</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">entertainment</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">general</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">health</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">science</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">sports</a></li>
                            <li className="nav-item"><a href='/' className="nav-link">technology</a></li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={this.handleSubmit}>
                            <input className="form-control search-input me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar