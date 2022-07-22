import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import EditProfile from "./components/EditProfile";
import ProfileShort from "./components/ProfileShort";
const Profile = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-3">
          <MDBCol>
            <h3 className="text-center">My Profile</h3>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md={8}>
            <EditProfile />
          </MDBCol>
          <MDBCol md={4}>
            <ProfileShort />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Profile;
