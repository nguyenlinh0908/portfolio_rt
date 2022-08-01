import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
const ProfileShort = () => {
  const PORT = process.env.REACT_APP_HOST;
  const INFO_USER = process.env.REACT_APP_INFO_USER;
  let [info, setInfo] = useState({});
  useEffect(() => {
    axios
      .get(`${PORT}${INFO_USER}`)
      .then((result) => {
        let info = result["data"];
        setInfo(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <MDBCard style={{ maxWidth: "22rem" }} className="w-100">
        <MDBCardImage
          src={process.env.REACT_APP_LOADER + info["avatar"]}
          position="top"
          alt="avatar"
        />
        <MDBCardBody className="text-center">
          <MDBCardTitle>{info["name"]}</MDBCardTitle>
          <MDBCardText>{info["summary"]}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
export default ProfileShort;
