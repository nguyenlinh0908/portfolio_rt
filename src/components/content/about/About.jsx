import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Title from "./components/Title";
import Summary from "./components/Summary";
const About = (props) => {
  let { summary } = props;
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
            <Summary summary={summary} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default About;
