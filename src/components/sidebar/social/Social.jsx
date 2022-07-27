import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const Social = () => {
  return (
    <>
      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="https://www.facebook.com/nnguyenlingg"
      >
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="https://www.instagram.com/ling__lv/"
      >
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      <MDBBtn
        className="m-1"
        style={{ backgroundColor: "#333333" }}
        href="https://github.com/nguyenlinh0908"
      >
        <MDBIcon fab icon="github" />
      </MDBBtn>
    </>
  );
};
export default Social;
