import { useContext } from "react";
import { Nav, NavbarBrand, Navbar, NavItem, NavLink  } from "reactstrap";
import AuthContext from "../Auth/AuthContext";
import "./Navbar.css"

const Navigation = ({logout}) => {
    const {currUser} = useContext(AuthContext);

    return (
        <nav className="Navbar mb-3">
            <Navbar>
                <NavbarBrand 
                    style={{fontSize: '2rem', textShadow: '2px 2px 2px rgba(0,0,0,0.3'}} 
                    className="me-auto text-white" 
                    href="/">
                    Jobly
                </NavbarBrand>
                <Nav className="ms-auto navbar">
                    <NavItem>
                        <NavLink href='/companies'>Companies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/jobs'>Jobs</NavLink>
                    </NavItem>
                    {!currUser ?
                    <> 
                        <NavItem>
                            <NavLink href='/login'>Log In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/signup'>Sign Up</NavLink>
                        </NavItem>
                    </>
                    :
                    <> 
                        <NavItem>
                            <NavLink href='/profile'>My Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' onClick={logout}>Log Out</NavLink>
                        </NavItem>
                    </>
                    }
                </Nav>
            </Navbar>
        </nav>
    )
};

export default Navigation;