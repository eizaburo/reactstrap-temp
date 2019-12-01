import React from 'react';
import './App.css';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Jumbotron } from 'reactstrap';

class App extends React.Component {

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <React.Fragment>

                <Navbar color="light" light expand="sm">
                    <NavbarBrand href="/">Logo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem><NavLink href="#">Home</NavLink></NavItem>
                            <NavItem><NavLink href="#">Service</NavLink></NavItem>
                            <NavItem><NavLink href="#">About</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Jumbotron style={styles.jumbotron}>
                    <h1>未来を作る会社です。</h1>
                    <p>ITの力であなたのビジネスの課題を解決します。</p>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default App;

const styles = {
    jumbotron: {
        background: "url('http://www.eizaburo.com/img/top-img-3.jpg') center center",
        backgroundSize: "cover",
        color: "#fff",
        borderRadius: 0,
    }
}
