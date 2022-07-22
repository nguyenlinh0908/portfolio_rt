import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
const ContactInfo = (props) => {
  let { icon, title } = props;
  return (
    <>
      <MDBRow className="mb-3">
        <MDBCol md="4">
          <div className="d-flex align-items-center justify-content-center h-100 bg-dark text-white">
            {icon}
          </div>
        </MDBCol>
        <MDBCol md="8">
          <div className="d-flex align-items-center" style={{height: "64px"}}>
            <p>{title}</p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};
export default ContactInfo;
