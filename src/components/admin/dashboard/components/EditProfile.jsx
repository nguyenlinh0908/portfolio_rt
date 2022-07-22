import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useRef } from "react";
import "./style.scss";
const EditProfile = () => {
  const changeAvatar = useRef(null);
  const onFileChangeCapture = (e) => {
    console.log(e.target.files);
  };
  const avatarChangeClick = () => {
    changeAvatar.current.click();
  };
  return (
    <>
      <MDBCard alignment="center" className="w-100">
        <MDBCardHeader style={{ textAlign: "left" }}>
          Edit Profile
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow className="my-3">
            <MDBCol className="d-flex justify-content-center">
              <div
                className="bg-img position-relative w-25"
                onClick={avatarChangeClick}
              >
                <img src="avatar.jpg" alt="avatar" className="w-100" />
                <p className="position-absolute top-50 start-50 translate-middle text-white">
                  Upload
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <input
                ref={changeAvatar}
                type="file"
                style={{ display: "none" }}
                id="avatar"
                onChangeCapture={onFileChangeCapture}
              />
              <MDBInput label="Full name" id="full_name" type="text" />
              <MDBInput
                className="my-3"
                label="Email"
                id="email"
                type="email"
              />
              <MDBInput label="address" id="address" type="text" />
              <MDBInput
                className="my-3"
                label="Phone number"
                id="phone_number"
                type="text"
              />
              <MDBInput
                className="mb-3"
                label="Summary"
                id="summary"
                type="text"
              />
              <MDBTextArea label="Description" id="description" rows={4} />
            </MDBCol>
          </MDBRow>
          <MDBBtn className="my-3" href="#">
            Update Profile
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
export default EditProfile;
