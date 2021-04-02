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
    Input,
    InputGroup,
    FormGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";

function Checkout() {
  return (
    <>
        <div className="main-content bg-secondary pb-4">
            <section className="section pt-5 pb-5">
                <Container>
                    <Row sm="12" className="pb-2">
                        <Col>
                            <h1 className="display-3">
                                <strong>Donasi</strong>
                            </h1>
                        </Col>
                    </Row>
                    <Row sm="12">
                        <Col xl="8" lg="8" md="6" className="mb-3" >
                            <Card>
                                <CardBody>
                                    <Row className="mb-5 mt-2 align-items-center">
                                        <Col xl="4" lg="4" md="4" sm="12">
                                            <img
                                                alt="..."
                                                className="img-fluid rounded"
                                                src={require("assets/img/theme/img-1-1000x600.jpg").default}
                                            />
                                        </Col>
                                        <Col xl="8" lg="8" md="8" sm="12">
                                            <span>
                                                <strong>Donasi untuk kegiatan</strong>
                                            </span>
                                            <span>
                                                <h2 className="mb-1 display-4">
                                                    <strong>(Nama Campaign)</strong>
                                                </h2>
                                            </span>
                                            <span>
                                            Donasi akan diberikan kepada (Nama Penerima)
                                            </span>  
                                        </Col>
                                    </Row>
                                    <Row className="mt-5 mb-5 align-items-center">
                                        <Col>
                                            <Row>
                                                <div className="col ml-0">
                                                    <span>
                                                        <p className="mb-3">
                                                            <strong>Penanggungjawab</strong>
                                                        </p>
                                                    </span> 
                                                </div>
                                            </Row>
                                            <Row>
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
                                                    Menginisiasi Acara Ini
                                                    </span>  
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <div className="col ml-0">
                                                    <span>
                                                        <p className="mb-3">
                                                            <strong>Penerima</strong>
                                                        </p>
                                                    </span> 
                                                </div>
                                            </Row>
                                            <Row>
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
                                                    Menginisiasi Acara Ini
                                                    </span>  
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <span>
                                        <strong>Masukkan Data dan Jumlah Donasi anda</strong>
                                    </span>
                                    <Row className="mt-2 align-items-center">
                                        <Col>
                                            <Row>
                                                <div className="col ml-0">
                                                    <FormGroup>
                                                        <span>
                                                            <p className="mb-3">
                                                                <strong>Nama</strong>
                                                            </p>
                                                        </span>
                                                        <InputGroup
                                                            className={classnames("input-group-merge")}
                                                        >
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </div>
                                                <div className="col ml-0">
                                                    <FormGroup>
                                                        <span>
                                                            <p className="mb-3">
                                                                <strong>No. Handphone</strong>
                                                            </p>
                                                        </span>
                                                        <InputGroup
                                                            className={classnames("input-group-merge")}
                                                        >
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="fas fa-phone" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col ml-0">
                                                    <span>
                                                        <p className="mb-3">
                                                            <strong>Email</strong>
                                                        </p>
                                                    </span> 
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col ml-0">
                                                    <FormGroup>
                                                        <InputGroup
                                                            className={classnames("input-group-merge")}
                                                        >
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <small className="font-weight-bold">@</small>
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                className="form-control"
                                                                type="text"
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center">
                                        <Col>
                                            <Row>
                                                <div className="col ml-0">
                                                    <span>
                                                        <p className="mb-3">
                                                            <strong>Jumlah Donasi</strong>
                                                        </p>
                                                    </span> 
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="col ml-0">
                                                    <FormGroup>
                                                        <InputGroup
                                                            className={classnames("input-group-merge")}
                                                        >
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <small className="font-weight-bold">IDR</small>
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                className="form-control-lg"
                                                                type="number"
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row md="1">
                                <Col>
                                    <Button className="btn-icon" size="sm" href="./single-campaign" color="primary">
                                        <span className="btn-inner--icon">
                                            <i className="ni ni-bold-left" />
                                        </span>
                                        <span className="btn-inner--text">Kembali ke Detail Campaign</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="4" lg="4" md="6" className="pl-4">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h3 name="amount-now" className="text-left">
                                                    Detail Pembayaran
                                            </h3>
                                            <div className="row mt-4 mb-2">
                                                <Col md="5" >
                                                    <span>
                                                        <p>
                                                            <strong>Donasi Anda</strong>
                                                        </p>
                                                    </span>
                                                </Col>
                                                <Col md="7">
                                                    <h3 className="text-right">
                                                        Rp 1,350,000
                                                    </h3> 
                                                </Col>     
                                            </div>
                                            <div className="row mt-2">
                                                <Col md="5">
                                                    <span>
                                                        <p>
                                                            <strong>Biaya Lain</strong>
                                                        </p>
                                                    </span>
                                                </Col>
                                                <Col md="7">
                                                    <h3 className="text-right">
                                                        Rp 0
                                                    </h3> 
                                                </Col>     
                                            </div>
                                            <hr/>
                                            <div className="row mb-2">
                                                <Col md="5">
                                                    <span>
                                                        <h3>
                                                            <strong>TOTAL</strong>
                                                        </h3>
                                                    </span>
                                                </Col>
                                                <Col md="7">
                                                    <h3 className="text-right">
                                                        Rp 1,350,000
                                                    </h3> 
                                                </Col>     
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>            
                            </Card>
                            <Row>
                                <Container>
                                    <p className="pb-2">
                                        <strong>
                                            Dengan klik <b>Lanjutkan</b>, saya telah membaca dan menerima <a href="#">Syarat dan Ketentuan</a>
                                        </strong>
                                    </p>
                                </Container>
                            </Row>
                            <Row>
                                <Col>
                                    <Button className="btn-icon btn-3" href="/home/payment-confirmation" block color="primary">
                                        <span className="btn-inner--text">Lanjutkan</span>
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

export default Checkout;
