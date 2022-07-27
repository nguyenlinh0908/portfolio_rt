import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
const Cv = (props) => {
  let { cv } = props;
  const LOADER = process.env.REACT_APP_LOADER;
  return (
    <>
      <MDBBtn outline color="dark" href={`${LOADER}${cv}`}>
        View Portfolio <MDBIcon fas icon="file-download" />
      </MDBBtn>
    </>
  );
};
export default Cv;
