import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    Accordion,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import "./Subsystems.css"
import electronics from '../../../../assets/img/electronics.png'
import reactRouterDom from "react-router-dom";

function SubS() {
    return (
        <div className="section team-data landing-section">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col className="ml-auto mr-auto" md="12">
                        <h2 className="text-center heading-main">Subsystems</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="accordian-toggle text-center">
                        MECHANICAL <i class="fa fa-cogs fa-lg"></i>
                        <p className="hide">The mechanical subsystem is responsible for design and
                            manufacture of the vehicle. We design the entire vehicle and accessories -
                            working on Fluid Dynamics, Actuator controls, and Pneumatics. We plan, simulate
                            and test the physical structure of the AUV and then manufacture it
                            using state of art manufacturing techniques. We use latest software such as SolidWorks and ANSYS
                            to make the design robust, modular, light and strong.</p>
                        <Link to='/mechanical'>
                        <p className="redirect">Know More</p>
                        </Link>
                    </Col>
                    <Col className="accordian-toggle text-center">
                        ELECTRICAL <img src={electronics} style={{ width: "25px", height: "25px" }} />
                        <p className="hide">
                        The Electrical Subsystem builds the electrical framework
                            powering our AUV. We work on the electrical aspects of the AUV, providing
                            power, driving actuators and interfacing with various sensors on board. We
                            build custom made PCBs to meet the specific requirements of the tasks. The
                            Electrical framework consists of Power Distribution System and the Monitoring
                            system. Arduino Mega is used to control the actuation and read
                            data from various sensors which in turn is controlled by an Intel NUC.
                            The main aim of the Electrical subsystem is to manage electrical setup and
                            act as an interface between the software and mechanical subsystems.
                        </p>
                        <Link to='/electrical'>
                        <p className="redirect">Know More</p>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="accordian-toggle text-center">
                        SOFTWARE <i class="fa fa-code fa-lg" />
                        <p className="hide">
                        The software subsystem develops the algorithms
                            controlling the robot and making it autonomous. We use latest cutting edge
                            technologies in the world of robotics software. We use ROS(Robot Operating System)
                            as a communication middleware between all processes running on our robot.The software
                            stack of Anahita consists of dedicated layers for the hardware integration,
                            controls and navigation, motion planning, perception and acoustic localization.
                            The software subsytem carries out simulations Gazebo and UWSim to ensure  that
                            things work smoothly before actual testing.The main aim of software subsystem is
                            to write code, that is generic and error free, in order efficiently coordinate the
                            vehicles motion and enable it perform at full potential.
                        </p>
                        <Link to='/software'>
                        <p className="redirect">Know More</p>
                        </Link>
                    </Col>
                    <Col className="accordian-toggle text-center">
                        BUSINESS <i class="fa fa-briefcase fa-lg"></i>
                        <p className="hide">
                        The Business subsystem manages the fundings and outreach
                            activities of the team. We manage the expenditures and fundings of the team.
                            We represent the team before our sponsors and try to procure them.
                            We maintain the team website and pages on the different social media platforms.
                            The main aim of the business subsystem is to ensure that the team gets sufficient
                            fundings and has an excellent outreach to ensure the smooth functioning of the other
                            three subsystems.
                        </p>
                        <Link to='/business'>
                        <p className="redirect">Know More</p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubS