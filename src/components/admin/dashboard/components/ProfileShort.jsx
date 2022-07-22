import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const ProfileShort = () => {
  return (
    <>
      <MDBCard style={{ maxWidth: "22rem" }} className="w-100">
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
          alt="..."
        />
        <MDBCardBody className="text-center">
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          {/* <MDBBtn href="#">Button</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
export default ProfileShort;
