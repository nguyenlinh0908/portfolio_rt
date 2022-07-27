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
const ContactBox = (props) => {
  let { info } = props;
  let { email, address, phone } = info;
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <ContactInfo icon={<MDBIcon fas icon="envelope" />} title={email} />
            <ContactInfo
              icon={<MDBIcon fas icon="map-marked" />}
              title={address}
            />
            <ContactInfo icon={<MDBIcon fas icon="phone" />} title={phone} />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput className="mb-3" label="Name" id="name" type="text" />
            <MDBInput className="mb-3" label="Email" id="email" type="email" />
            <MDBInput
              className="mb-3"
              label="Subject"
              id="subject"
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
