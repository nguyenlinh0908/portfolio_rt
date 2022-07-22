import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
// sidebar
import Preview from "./sidebar/preview/Preview";
import License from "./sidebar/license/License";
// content
import Home from "./content/home/Home";
import About from "./content/about/About";
import Timeline from "./content/timeline/Timeline";
import Contact from "./content/contact/Contact";
import React, { useState } from "react";
const Landing = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3" className="text-center">
            <Preview />
            <MDBTabs className="flex-column text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab1")}
                  active={verticalActive === "tab1"}
                >
                  Home
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab2")}
                  active={verticalActive === "tab2"}
                >
                  About
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab3")}
                  active={verticalActive === "tab3"}
                >
                  Contact
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <License />
          </MDBCol>
          <MDBCol size="9">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <Home />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                <About />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                <Contact />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Landing;
