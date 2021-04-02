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
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Container,
  Progress,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import AuthFooter from "components/Footers/AuthFooter.js";
import CampaignCards from "components/Cards/CampaignCards.js";

function CampaignCatalog() {
  return (
    <>
        <div className="main-content">
            <div className="header pt-lg-6">
                <Container>
                    <div className="header-body text-left mb-3">
                    <Row className="justify-content-left">
                        <Col className="px-10" lg="10" md="8" xl="12">
                            <h1 className="display-2 text-default">Browse Campaigns</h1>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
            <section className="bg-secondary section pt-4">
                <Container>
                    <Row className="justify-content-center">
                        {/* <Col xl="3" lg="3" md="3">
                            
                        </Col> */}
                        <Col xl="12" lg="12" md="12">
                            <Row>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                                <Col lg="4" md="4" sm="6">
                                    <CampaignCards />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="section section-lg pt-lg-4">
                <Container fluid>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row>
                            <CampaignCards />
                        </Row>
                    </Col>
                </Row>
                </Container>
            </section> */}
        </div>
    </>
  );
}

export default CampaignCatalog;
