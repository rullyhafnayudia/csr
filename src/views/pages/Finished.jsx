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

function Finished() {
  return (
    <>
        <div className="main-content bg-secondary pb-4">
            <section className="section pt-5 pb-5">
                <Container>
                    <Row sm="12" className="pb-2 text-center">
                        <Col>
                            <h1 className="display-3">
                                <strong>Pembayaran Selesai!</strong>
                            </h1>
                        </Col>
                    </Row>
                    <Row md="12">
                        <Col className="mb-3" >
                            <Card>
                                <CardBody>
                                    <Row className="mb-4 mt-2 align-items-center text-center">
                                        <Col md="12" sm="12">
                                            <span>
                                                <strong>Anda telah mendonasikan untuk</strong>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4 mt-4 align-items-center justify-content-md-center">
                                        <Col md="6" sm="12">
                                            <Row className="justify-content-md-center">
                                                <Col xl="6" lg="6" md="6" sm="12">
                                                    <img
                                                        alt="..."
                                                        className="img-fluid rounded"
                                                        src={require("assets/img/theme/img-1-1000x600.jpg").default}
                                                    />
                                                </Col>
                                                <Col xl="6" lg="6" md="6" sm="12">
                                                    <span>
                                                        <h2 className="mb-2 display-4">
                                                            <strong>(Nama Campaign)</strong>
                                                        </h2>
                                                    </span>
                                                    <span>
                                                        Penerima Manfaat
                                                    </span>
                                                    <Row className="mt-2">
                                                        <Col className="col-auto">
                                                            <a
                                                            className="avatar rounded-circle"
                                                            onClick={(e) => e.preventDefault()}
                                                            >
                                                            <img
                                                                alt="..."
                                                                src={require("assets/img/theme/team-1.jpg").default}
                                                            />
                                                            </a>
                                                        </Col>
                                                        <div className="col ml-0">
                                                            <span>
                                                                <h2 className="mb-0">
                                                                    <strong>John Doesonn</strong>
                                                                </h2>
                                                            </span>
                                                            <span>
                                                            Lokasi Penerima
                                                            </span>  
                                                        </div>
                                                    </Row>  
                                                </Col>
                                            </Row>
                                        </Col>
                                        
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row>
                                <Col>
                                    <Button className="btn-icon btn-3 mb-3" block href="/home/all-campaigns" color="default">
                                        <span className="btn-inner--text">Kembali ke Beranda</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className="btn-icon btn-3" block href="/home/single-campaign" color="primary">
                                        <span className="btn-inner--text">Lihat Campaign</span>
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

export default Finished;
