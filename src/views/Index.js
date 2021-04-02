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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import CampaignCards from "components/Cards/CampaignCards.js";

import qoreContext from "../qoreContext";


function Index() {
  const {data: topPrograms, status} = qoreContext.view("topProgram").useListRow({
    limit: 3
  },
  { networkPolicy: "network-and-cache", pollInterval: 5000 });
  return (
    <>
      <IndexNavbar />
      <div className="main-content">
        <IndexHeader />
        <section className="py-6 pb-9">
          <Container fluid>
            <Row className="justify-content-center text-center">
              <Col md="6">
                <h2 className="display-3 text-default">
                  Top Campaigns
                </h2>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg pt-lg-0 mt--7">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row>
                  {topPrograms.map(program => (
                    <Col lg="4">
                      <CampaignCards program={program}/>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <AuthFooter />
    </>
  );
}

export default Index;