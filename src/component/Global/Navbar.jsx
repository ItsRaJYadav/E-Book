import React from 'react'
import { NavLink } from "react-router-dom";
import { Nav} from "react-bootstrap";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   
                    <Nav.Link as={NavLink} to='/' className="navbar-brand">
                        E-Book
                    </Nav.Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Nav.Link as={NavLink} to='/' className="nav-link active" aria-current="page" >
                                    Home
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link as={NavLink} to='/About' className="nav-link">
                                    About
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='https://www.linkedin.com/in/rajydv07/'>
                                    Contact
                                </a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar