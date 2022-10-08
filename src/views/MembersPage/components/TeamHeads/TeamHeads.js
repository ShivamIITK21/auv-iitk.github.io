import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";
import mechanicalteam from "../../../../data/MechanicalTeam.json";
import electricalTeam from "../../../../data/ElectricalTeam.json";
import softwareTeam from "../../../../data/SoftwareTeam.json";
import businessTeam from "../../../../data/BusinessTeam.json";
import FadeIn from "views/Animations/FadeIn";

function TeamHeads(props) {
    let data = {};
    if (props.subsystem === 'mechanical') {
        data = mechanicalteam;
    }
    else if (props.subsystem === 'electrical') {
        data = electricalTeam;
    }
    else if (props.subsystem === 'software') {
        data = softwareTeam;
    }
    else if (props.subsystem === 'business') {
        data = businessTeam;
    }

    const teamHeads = data.teamData[0].items.filter((member) => {
        return member.subheading.includes("Subsystem Head");
    })

    const seniorMembers = data.teamData[0].items.filter((member) => {
        return member.subheading.includes("Senior Member")
    })

    const teamMembers = data.teamData[0].items.filter((member => {
        return member.subheading.includes("Junior Member");
    }))

    return (
        <Container>
        <Row>
        <div>
            <h1 className="subsystem-headings heading-main">Team Heads</h1>
            <Container>
                <FadeIn>
                <div>
                    <Row>
                        {teamHeads.map((teamMember) => {
                            return (
                                <Col lg="3" md="6" className="team img-col text-center mr-auto ml-auto" key={teamMember.name}>
                                    <div className="member">
                                        <div className="member-img">
                                            <div className="overlay">
                                                <img src={require("assets/img/" + teamMember.image)}
                                                    className="member-img img-fluid" alt="" />
                                            </div>
                                            <div className="social">
                                                <a href={teamMember.facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" /></a>
                                                <a href={teamMember.linkedin} target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>{teamMember.name}</h4>
                                            <span>{teamMember.subheading}</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                </FadeIn>        
            </Container>
                {seniorMembers.length !== 0?
                <>
                    <h1 className="subsystem-headings heading-main">Senior Members</h1>
            <Container>
                    <FadeIn>
                <div>
                    <Row>
                        {seniorMembers.map((teamMember) => {
                            return (
                                <Col lg="3" md="6" className="team img-col text-center mr-auto ml-auto" key={teamMember.name}>
                                    <div className="member">
                                        <div className="member-img">
                                            <div className="overlay">
                                                <img src={require("assets/img/" + teamMember.image)}
                                                    className="member-img img-fluid" alt="" />
                                            </div>
                                            <div className="social">
                                                <a href={teamMember.facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" /></a>
                                                <a href={teamMember.linkedin} target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>{teamMember.name}</h4>
                                            <span>{teamMember.subheading}</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                </FadeIn>
            </Container></>:<></>}

            {teamMembers.length !== 0?
                <>
                    <h1 className="subsystem-headings heading-main">Junior Members</h1>
            <Container>
                <FadeIn>
                <div>
                    <Row>
                        {teamMembers.map((teamMember) => {
                            return (
                                <Col lg="3" md="6" className="team img-col text-center mr-auto ml-auto" key={teamMember.name}>
                                    <div className="member">
                                        <div className="member-img">
                                            <div className="overlay">
                                                <img src={require("assets/img/" + teamMember.image)}
                                                    className="member-img img-fluid" alt="" />
                                            </div>
                                            <div className="social">
                                                <a href={teamMember.facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" /></a>
                                                <a href={teamMember.linkedin} target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>{teamMember.name}</h4>
                                            <span>{teamMember.subheading}</span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                </FadeIn>
            </Container></>:<></>}

        </div>
        </Row>
        </Container>

    )
}

export default TeamHeads;
