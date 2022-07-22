import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
const LoginForm = () => {
  return (
    <>
      <div style={{minWidth: "20rem"}}>
        <MDBInput label="Username" id="form1" type="text" />
        <MDBInput className="my-3" label="Password" id="form1" type="text" />
        <MDBBtn className="w-100">Login</MDBBtn>
      </div>
    </>
  );
};
export default LoginForm;
