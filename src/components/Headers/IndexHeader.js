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
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div className="header bg-default pt-5 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="10">
                <div className="pr-5">
                  <h1 className="display-2 text-white font-weight-bold mb-0">
                    Donate, Paragonians!
                  </h1>
                  <h2 className="display-4 text-white font-weight-light">
                    You can start donate to our CSR Programs, right away!
                  </h2>
                  <div className="mt-5">
                    <Button
                      className="my-2"
                      color="secondary"
                      to="/home/all-campaigns"
                      tag={Link}
                    >
                      Explore Programs
                    </Button>
                  </div>
                </div>
              </Col>
              {/* <Col lg="6">
                <Row className="pt-5">
                  <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Components</h5>
                        <p>Argon comes with over 70 handcrafted components.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Plugins</h5>
                        <p>
                          Fully integrated and extendable third-party plugins
                          that you will love.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Pages</h5>
                        <p>
                          From simple to complex, you get a beautiful set of 15+
                          page examples.
                        </p>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">Documentation</h5>
                        <p>You will love how easy is to to work with Argon.</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
