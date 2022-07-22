import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Intro from "./components/Intro";
import Summary from "./components/Summary";
import Cv from "./components/Cv";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + "home.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "64rem",
        }}
        className="w-100"
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol
              style={{ minHeight: "42rem" }}
              md="5"
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <Intro></Intro>
                <Summary></Summary>
                <Cv></Cv>
              </div>
            </MDBCol>
            <MDBCol md="7"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Home;
