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
import { Link, useParams } from "react-router-dom";
// reactstrap components
import {
    Breadcrumb,
    BreadcrumbItem,
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
    Media,
} from "reactstrap";

import qoreContext from "./../../qoreContext";


function CampaignPage() {
    const params = useParams()
    const {data: selectedProgram, status, error} = qoreContext.view("activity").useGetRow(params.campaignId, { networkPolicy: "network-and-cache" });
    const {data: donation, statuses, errors} = qoreContext.view("recentDonation").useRelation(params.campaignId)

    const numberFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    const dateFormat = new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })
    const percentAchievement = selectedProgram && selectedProgram.target ? Math.ceil(selectedProgram.achievement * 100 / selectedProgram.target) : 100;
    return (
    <>
        <div className="main-content bg-secondary pb-4">
            <section className="section pt-5 pb-5">
                <Container>
                    <Row className="pb-4" sm="12">
                        <Breadcrumb
                            className="d-none d-md-inline-block ml-md-3"
                            sm="12"
                            listClassName="breadcrumb-links breadcrumb-dark"
                            >
                            <BreadcrumbItem>
                            <a href="/" style={{ color: '#172b4d' }}>
                                <i className="fas fa-home" />
                            </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                            <a href="/home/all-campaigns" className="text-primary">
                                Semua Campaigns
                            </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem aria-current="page" style={{ color: '#000000' }} className="active">
                                {selectedProgram ? selectedProgram.name : 'Judul'} 
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <Row sm="12" className="pb-2">
                        <Col>
                            <h1 className="display-3">
                            <strong>{selectedProgram ? selectedProgram.name : 'Judul'}</strong>
                            </h1>
                        </Col>
                    </Row>
                    <Row sm="12">
                        <Col xl="8" lg="8" md="6" className="mb-3" >
                            <Card className="align-items-center justify-content-md-center">
                                <CardBody>
                                    <img 
                                        className="align-center" src={selectedProgram && selectedProgram.image ? selectedProgram.image : require("assets/img/theme/default.jpg").default}
                                        style={{ height: "450px", width: "600px", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}
                                    />
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <Row className="align-items-center">
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
                                                <h2 className="display-4 mb-0">
                                                    <strong>{selectedProgram && selectedProgram.pic ? selectedProgram.pic.displayField : 'John Doe'}</strong>
                                                </h2>
                                            </span>
                                            <span>
                                            Menginisiasi Acara Ini
                                            </span>  
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row>
                                <Container>
                                    <p className="py-2">
                                        <strong>
                                            {selectedProgram ? selectedProgram.description : ''}
                                        </strong>
                                    </p>
                                </Container>
                            </Row>
                            <Row sm="12" className="pt-4 pb-2">
                                <Col>
                                    <h1 className="display-4">
                                        <strong>Detail Campaign</strong>
                                    </h1>
                                </Col>
                            </Row>
                            <Card>
                                <CardBody>
                                    <Row className="align-items-center">
                                        <Col>
                                            <span className="btn-inner--text h2">{selectedProgram ? selectedProgram.name : 'Judul'}</span>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col>
                                            <span className="btn-inner--icon mr-3">
                                                <i className="ni ni-favourite-28" />
                                            </span>
                                            <span className="btn-inner--text h4">{selectedProgram && selectedProgram.category ? selectedProgram.category.displayField : 'Unknown'}</span>
                                        </Col>
                                        <Col>
                                            <span className="btn-inner--icon mr-3">
                                                <i className="ni ni-calendar-grid-58" />
                                            </span>
                                            <span className="btn-inner--text h4">{selectedProgram ? `${dateFormat.format(new Date(selectedProgram.dateStart))} - ${dateFormat.format(new Date(selectedProgram.dateEnd))}` : 'Tanggal Mulai - Tanggal Selesai'}</span>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col>
                                            <span className="btn-inner--icon mr-3">
                                                <i className="ni ni-single-02" />
                                            </span>
                                            <span className="btn-inner--text h4">{selectedProgram ? selectedProgram.penerima : 'John Doe'}</span>
                                        </Col>
                                        <Col>
                                            <span className="btn-inner--icon mr-3">
                                                <i className="ni ni-square-pin" />
                                            </span>
                                            <span className="btn-inner--text h4">Lokasi Penerima</span>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <Row sm="12" className="py-2">
                                <Col>
                                    <h1 className="display-4">
                                        <strong>Histori dan Komentar</strong>
                                    </h1>
                                </Col>
                            </Row>
                            <Card>
                                <CardBody>
                                    <Media className="media-comment">
                                        <img
                                        alt="..."
                                        className="avatar avatar-lg media-comment-avatar rounded-circle"
                                        src={require("assets/img/theme/team-1.jpg").default}
                                        />
                                        <Media>
                                            <div className="media-comment-text">
                                                <h3 className="mb-1">
                                                    <strong>John Doesonn</strong>
                                                </h3>
                                                <span>
                                                mendonasikan Rp 25,000
                                                </span>
                                                <p className="text-sm">
                                                Cras sit amet nibh libero nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio vestibulum in
                                                vulputate viverra turpis.
                                                </p>
                                            </div>
                                        </Media>
                                    </Media>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="4" lg="4" md="6" className="pl-4">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <h1 name="amount-now" className="text-left">
                                                {selectedProgram ? numberFormat.format(selectedProgram.achievement) : numberFormat.format(0)}
                                            </h1>
                                            <Progress
                                                color="default"
                                                max="100"
                                                value={percentAchievement}
                                            />
                                            <div className="progress-info">
                                                <div className="progress-label" name="status">
                                                    <span>{selectedProgram ? selectedProgram.state : 'unknown'}</span>
                                                </div>
                                                <div className="progress-percentage text-right">
                                                    <span>Target: {selectedProgram ? numberFormat.format(selectedProgram.target) : numberFormat.format(0)}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-4 mb-2">
                                                <Col md="8">
                                                    <span>
                                                        <h3>
                                                            <strong>Jumlah Donatur</strong>
                                                        </h3>
                                                    </span>
                                                </Col>
                                                <Col md="4">
                                                    <h2 className="text-right">
                                                        {selectedProgram ? selectedProgram.totalDonatur : 0}
                                                    </h2> 
                                                </Col>     
                                            </div>
                                            <div className="row mb-2">
                                                <Col md="8">
                                                    <span>
                                                        <h3>
                                                            <strong>Dibagikan</strong>
                                                        </h3>
                                                    </span>
                                                </Col>
                                                <Col md="4">
                                                    <h2 className="text-right">
                                                        {selectedProgram ? selectedProgram.totalShare : 0}
                                                    </h2> 
                                                </Col>     
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="btn-icon btn-3 my-2" href="/home/checkout" block color="primary">
                                                <span className="btn-inner--icon">
                                                    <i className="ni ni-money-coins" />
                                                </span>
                                                <span className="btn-inner--text">Donasi Sekarang</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className="btn-icon btn-3 my-2" href="#share" block color="warning">
                                                <span className="btn-inner--icon">
                                                    <i className="ni ni-send" />
                                                </span>
                                                <span className="btn-inner--text">Bagikan</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className="my-2 mt-4">
                                        <Col xl="7" lg="7" md="7">
                                            <h2>
                                                Donasi Terbaru
                                            </h2>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center my-3">
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
                                        <div className="col ml--2">
                                            <span>
                                                <h3 className="mb-0">
                                                    <strong>John Doesonn</strong>
                                                </h3>
                                            </span>
                                            <span>
                                            Rp 25,000
                                            </span>  
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    </>
  );
}

export default CampaignPage;
