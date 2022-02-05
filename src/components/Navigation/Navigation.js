
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user } = useAuth();
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand to="/home"><img width="50%" src="" alt=''></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto' >
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

                        </Nav>
                        <Nav >

                            {
                                !user.email ?
                                    <>
                                        <Nav.Link as={NavLink} to="/login"><Button>Login</Button></Nav.Link>
                                        <Nav.Link as={NavLink} to="/registration"><Button>Registration</Button></Nav.Link>
                                    </>
                                    :
                                    <>

                                        <NavDropdown title={<img style={{ width: "45px", borderRadius: "50%", }} src='' alt="" />
                                        }
                                        >
                                            <div className="text-center">
                                                <Link to="/profile" >View Profile</Link>
                                                <button className="btn btn-primary mt-2">
                                                    Sign Out
                                                </button>
                                            </div>
                                        </NavDropdown>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;