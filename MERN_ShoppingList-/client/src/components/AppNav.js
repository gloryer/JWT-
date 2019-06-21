import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Container from "reactstrap/es/Container";
import 'bootstrap/dist/css/bootstrap.min.css';




export default class AppNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    toggleNavbar=()=> {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                    <NavbarBrand href="/" >ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}