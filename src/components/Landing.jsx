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
import axios from "axios";
// sidebar
import Preview from "./sidebar/preview/Preview";
import License from "./sidebar/license/License";
import Social from "./sidebar/social/Social";
// content
import Home from "./content/home/Home";
import About from "./content/about/About";
import Timeline from "./content/timeline/Timeline";
import Contact from "./content/contact/Contact";
import React, { useState, useEffect } from "react";
const Landing = () => {
  let [info, setInfo] = useState({});
  const [verticalActive, setVerticalActive] = useState("tab1");
  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };
  useEffect(() => {
    const HOST = process.env.REACT_APP_HOST;
    const INFO_USER = process.env.REACT_APP_INFO_USER;

    axios
      .get(`${HOST}${INFO_USER}`)
      .then((result) => {
        let information = result["data"];
        setInfo(information);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3" className="text-center">
            <Preview />
            <Social />
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
                <Home
                  name={info["name"]}
                  summary={info["summary"]}
                  cv={info["cv"]}
                />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                <About summary={info["summary"]} />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                <Contact
                  email={info["email"]}
                  address={info["address"]}
                  phone={info["phone"]}
                />
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Landing;
