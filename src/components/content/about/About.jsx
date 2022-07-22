import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Title from "./components/Title";
import Summary from "./components/Summary";
const About = () => {
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
            <Summary />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default About;
