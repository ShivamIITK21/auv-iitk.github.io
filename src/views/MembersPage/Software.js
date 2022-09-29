import React from "react";
// reactstrap components


import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
// core components

import SubS from "views/TeamPage/components/Subsystems/Subsystem";
import Heading from "./components/Heading/Heading";
import FadeIn from 'views/Animations/FadeIn';
import TeamHeads from "./components/TeamHeads/TeamHeads";
// import { Container } from "reactstrap";
function Software() {
    // document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //     document.body.classList.add("profile-page");
    //     return function cleanup() {
    //         document.body.classList.remove("profile-page");
    //     };
    // });
    window.scrollTo(0,0);
    return (
        <div>
            <ExamplesNavbar activePage="/team" />
            <div className="main">
                <FadeIn>
                    <Heading subsystem="Software Subsystem"/>
                </FadeIn>
                <FadeIn>
                    <TeamHeads subsystem="software"/>
                </FadeIn>
            </div>
        </div>
    );
}

export default Software;
