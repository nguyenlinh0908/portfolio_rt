import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Title from "./components/Title";
import ContactBox from "./components/ContactBox";
const Contact = (props) => {
  let infoContact = props;
  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-5">
          <MDBCol>
            <Title />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <ContactBox info={infoContact} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Contact;
