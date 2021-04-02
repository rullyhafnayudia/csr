/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import classnames from "classnames";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    NavItem,
    NavLink,
    Nav,
    Progress,
    TabContent,
    TabPane,
    Row,
    Form
} from "reactstrap";

function ConfirmPayment() {
  return (
    <>
        <div className="main-content bg-secondary pb-4">
            <section className="section pt-5 pb-5">
                <Container>
                    <Row sm="12" className="pb-2 text-center">
                        <Col>
                            <h1 className="display-3">
                                <strong>Konfirmasi Pembayaran</strong>
                            </h1>
                        </Col>
                    </Row>
                    <Row sm="12">
                        <Col className="mb-3" >
                            <Card>
                                <CardBody>
                                    <Row className="mb-4 mt-2 align-items-center text-center">
                                        <Col md="12" sm="12">
                                            <span>
                                                <strong>Silahkan lakukan Transfer Manual sejumlah</strong>
                                            </span>
                                            <span>
                                                <h2 className="mb-1 display-4">
                                                    <strong>Rp 123,456</strong>
                                                </h2>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 mt-2 align-items-center text-center">
                                        <Col md="12" sm="12">
                                            <span>
                                                <strong>Menuju akun</strong>
                                            </span>
                                            <span>
                                                <h2 className="mb-1 display-3">
                                                    <strong>12345678901</strong>
                                                </h2>
                                            </span>
                                            <span>
                                            BANK MANDIRI
                                            </span>  
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 mt-2 align-items-center text-center">
                                        <Col md="12" sm="12">
                                            <span>
                                                <strong>Atas nama</strong>
                                            </span>
                                            <span>
                                                <h2 className="mb-1">
                                                    <strong>PARAGON TECHNOLOGY AND INFORMATION</strong>
                                                </h2>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 text-center">
                                        <Col md="12" sm="12">
                                            <span className="text-center">
                                                Lalu, silahkan upload bukti transfer disini
                                            </span> 
                                        </Col>
                                    </Row>
                                    <Row className="mt-2 mb-2 justify-content-md-center">
                                        <Col md="6" sm="12">
                                            <Form>
                                                <div className="custom-file">
                                                    <input
                                                        className="custom-file-input"
                                                        id="customFileLang"
                                                        lang="en"
                                                        type="file"
                                                    />
                                                    <label
                                                        className="custom-file-label"
                                                        htmlFor="customFileLang"
                                                    >
                                                        Select file
                                                    </label>
                                                </div>
                                            </Form>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row>
                                <Col>
                                    <Button className="btn-icon btn-3" href="/home/finished" block color="primary">
                                        <span className="btn-inner--text">Upload Bukti Transfer</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    </>
  );
}

export default ConfirmPayment;
