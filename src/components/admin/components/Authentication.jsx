import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = (props) => {
  let { admin } = props;
  let navigate = useNavigate();
  useEffect(() => {
    if (1 != 1) {
      navigate("/admin/login", { replace: true });
    }
  }, []);
  return <>{admin}</>;
};
export default Authentication;
