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
import React, { useState } from "react";

import Profile from "./admin/dashboard/Profile";
const Admin = () => {
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
          <MDBCol size="1" className="text-center">
            <MDBTabs className="flex-column text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab1")}
                  active={verticalActive === "tab1"}
                >
                  Profile
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab2")}
                  active={verticalActive === "tab2"}
                >
                  Contact
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleVerticalClick("tab3")}
                  active={verticalActive === "tab3"}
                >
                  Timeline
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCol>
          <MDBCol size="11">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <Profile />
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                Timeline
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                Contact
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Admin;
