import React from "react";
// reactstrap components

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
// core components

import Heading from "./components/Heading/Heading";
import FadeIn from 'views/Animations/FadeIn';
import TeamHeads from "./components/TeamHeads/TeamHeads";

function Business() {
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
                    <Heading subsystem="Business Subsystem"/>
                </FadeIn>
                <FadeIn>
                    <TeamHeads subsystem="business"/>
                </FadeIn>
            </div>
        </div>
    );
}

export default Business;
