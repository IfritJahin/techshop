import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping as faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Card, Navbar } from 'react-bootstrap';
function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };
    window.addEventListener('DOMContentLoaded', (event) => {
        const selectElem = document.querySelector('.select');

        selectElem.addEventListener('mouseenter', function () {
            this.size = this.options.length;
        });

        selectElem.addEventListener('mouseleave', function () {
            this.size = 1;
        });
    });

    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if the window is scrolled more than 50 pixels, otherwise false.
            setIsScrolled(window.scrollY > 50);
        };

        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className='bg-dark fixed-top' variant="dark">
                {isScrolled ? (
                    <Card.Header className="gradient-navbar d-flex align-items-center justify-content-between px-3 py-0 shadow">
                        <img className="mr-3" style={{ width: '90px', marginLeft: '40px' }} src={Logo} alt="Logo" />
                        <Navbar className="d-flex justify-content-center flex-grow-1 text-white align-items-center flex-grow-1">
                            <Link to='/' className='nav-link text-decoration-none m-3'>Home</Link>
                            <Link to='/shop' className='nav-link text-decoration-none m-3'>Shop</Link>
                            <Link to='/products' className='nav-link text-decoration-none m-3'>Products</Link>
                            <Link to='/contact' className='nav-link text-decoration-none m-3'>Contact</Link>
                            <Link to='/help' className='nav-link text-decoration-none m-3'>Help & Support</Link>

                            <div className="dropdown">
                                <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Categories
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">All Categories</a>
                                    <a className="dropdown-item" href="#">Laptops</a>
                                    <a className="dropdown-item" href="#">Phones</a>
                                    {/* ... other items ... */}
                                </div>
                            </div>
                        </Navbar>
                        <section id='icons' className="d-flex align-items-center px-1 text-white" >
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center m-1">
                                    <FontAwesomeIcon icon={faUser} style={{ color: "#4084a1", fontSize: '20px' }} />
                                    <span className="m-2 accounttext">My Account</span>
                                </div>

                                <div className="d-flex align-items-center m-2">
                                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#4084a1", fontSize: '20px' }} />
                                    <span className="m-2 text">Your cart</span>
                                </div>

                                <div className="d-flex align-items-center m-1">
                                    <FontAwesomeIcon icon={faBars} style={{ color: "#4084a1", fontSize: '20px' }} />
                                    <span className="m-2 text">Wishlist</span>
                                </div>
                                <div className="d-flex align-items-center m-1">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#4084a1", fontSize: '20px', verticalAlign: 'middle' }} />
                                </div>
                            </div>
                        </section>
                    </Card.Header>
                ) : (
                    <>
                        <Card.Header className="bg d-flex align-items-center px-3">
                            <img className="mr-3" style={{ width: '100px', marginLeft: '40px' }} src={Logo} alt="Logo" />
                            <input
                                className="form-control search-input mr-3"
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '400px',
                                    flex: '0 1 auto',
                                    marginLeft: '300px',

                                }}
                            />
                            <Button variant="dark"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#4084a1", fontSize: '20px', verticalAlign: 'middle' }} /></Button>
                            <section id='icons' className="d-flex text-white  px-1" style={{ marginLeft: '45px', marginRight: '10px' }}>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center m-1">
                                        <FontAwesomeIcon icon={faUser} style={{ color: "#4084a1", fontSize: '20px' }} />
                                        <span className="m-2 accounttext">My Account</span>
                                    </div>

                                    <div className="d-flex align-items-center m-2">
                                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#4084a1", fontSize: '20px' }} />
                                        <span className="m-2 text">Your cart</span>
                                    </div>

                                    <div className="d-flex align-items-center m-1">
                                        <FontAwesomeIcon icon={faBars} style={{ color: "#4084a1", fontSize: '20px' }} />
                                        <span className="m-2 text">Wishlist</span>
                                    </div>
                                </div>
                            </section>
                        </Card.Header>
                        <Navbar className="gradient-navbar text-white  py-2">
                            <Link to='/' className='nav-link text-decoration-none m-3'>Home</Link>
                            <Link to='/shop' className='nav-link text-decoration-none m-3'>Shop</Link>
                            <Link to='/products' className='nav-link text-decoration-none m-3'>Products</Link>
                            <Link to='/contact' className='nav-link text-decoration-none m-3'>Contact</Link>
                            <Link to='/help' className='nav-link text-decoration-none m-3'>Help & Support</Link>
                            <div className="dropdown">
                                <button className="btn text-white text-decoration-none border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Categories
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">All Categories</a>
                                    <a className="dropdown-item" href="#">Laptops</a>
                                    <a className="dropdown-item" href="#">Phones</a>
                                    {/* ... other items ... */}
                                </div>
                            </div>

                        </Navbar>
                    </>
                )}
            </header>
        </div>
    )
}

export default Header
