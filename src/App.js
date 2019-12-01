import React from 'react';
import './App.css';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Jumbotron,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Button,
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleOnSubmit = (values) => {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>

                <Navbar dark expand="sm" fixed="top" style={{ backgroundColor: "rgb(100,100,100,.9)" }}>
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
                    <h1 className="mt-5 ml-5">未来を作る会社です。</h1>
                    <p className="ml-5">ITの力であなたのビジネスの課題を解決します。</p>
                </Jumbotron>

                <main>
                    <section class="py-5">
                        <h2 class="mb-5 text-center">サービス</h2>
                        <div class="container">
                            <div class="row">

                                <div class="text-center mb-5 col-sm-6">
                                    <img src="http://www.eizaburo.com/img/service-2.jpg" width="400" />
                                    <h3 class="my-3">Development</h3>
                                    <p>どんなソフトウエアでも、あらゆる言語を使って開発します。</p>
                                </div>

                                <div class="text-center col-sm-6">
                                    <img src="http://www.eizaburo.com/img/service-1.jpg" width="400" />
                                    <h3 class="my-3">Operation</h3>
                                    <p>どんなシステムでも、あらゆる手段を使って運用します。</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section class="py-5 bg-light">
                        <h2 class="mb-5 text-center">会社概要</h2>
                        <div class="container">
                            <table class="table table-borderless col-8 m-auto">
                                <tbody>
                                    <tr class="row">
                                        <th class="col-4 text-left">会社名</th>
                                        <td class="col-8 text-left">○○○○○○株式会社</td>
                                    </tr>
                                    <tr class="row">
                                        <th class="col-4 text-left">住所</th>
                                        <td class="col-8 text-left">東京都千代田区丸の内1-1-1</td>
                                    </tr>
                                    <tr class="row">
                                        <th class="col-4 text-left">代表者</th>
                                        <td class="col-8 text-left">山田 太郎</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section class="py-5">
                        <h2 class="mb-5 text-center">お問合せ</h2>
                        <div class="container">
                            <Formik
                                initialValues={{ email: '', title: '', note: '' }}
                                onSubmit={this.handleOnSubmit}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email().required(),
                                    title: Yup.string().required(),
                                    note: Yup.string().required(),
                                })}
                            >
                                {
                                    ({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                        <Form className="col-8 m-auto" onSubmit={handleSubmit}>

                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    invalid={touched.email && errors.email}
                                                />
                                                <FormFeedback>
                                                    {errors.email}
                                                </FormFeedback>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="title">問合せタイトル</Label>
                                                <Input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    value={values.title}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    invalid={touched.title && errors.title}
                                                />
                                                <FormFeedback>
                                                    {errors.title}
                                                </FormFeedback>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="note">問合せ内容</Label>
                                                <Input
                                                    type="textarea"
                                                    name="note"
                                                    id="note"
                                                    value={values.note}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    invalid={touched.note && errors.note}
                                                    rows="5"
                                                />
                                                <FormFeedback>
                                                    {errors.note}
                                                </FormFeedback>
                                            </FormGroup>
                                            <div className="my-4">
                                                <Button type="submit" color="primary">問合せる</Button>
                                            </div>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </section>

                </main>

                <footer class="py-5 bg-dark text-center text-light">
                    &copy; ○○○○○株式会社
                </footer>

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
        height: "360px"
    }
}
