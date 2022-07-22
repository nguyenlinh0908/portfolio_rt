import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import ContactInfo from "./ContactInfo";
const ContactBox = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <ContactInfo
              icon={<MDBIcon fas icon="envelope" />}
              title="nguyenlinh982001@gmail.com"
            />
            <ContactInfo
              icon={<MDBIcon fas icon="map-marked" />}
              title="Hanoi - Vietnam"
            />
            <ContactInfo
              icon={<MDBIcon fas icon="phone" />}
              title="+84366537***"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              className="mb-3"
              label="Text input"
              id="typeText"
              type="text"
            />
            <MDBInput
              className="mb-3"
              label="Text input"
              id="typeText"
              type="text"
            />
            <MDBInput
              className="mb-3"
              label="Text input"
              id="typeText"
              type="text"
            />
            <MDBTextArea
              className="mb-3"
              label="Message"
              id="textAreaExample"
              rows={4}
            />
            <MDBBtn className="me-2" disabled size="lg">
              Send
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default ContactBox;
