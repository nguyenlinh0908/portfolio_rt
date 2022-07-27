import axios from "axios";
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBFile,
} from "mdb-react-ui-kit";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
const EditProfile = () => {
  const PORT = process.env.REACT_APP_HOST;
  const INFO_USER = process.env.REACT_APP_INFO_USER;
  const UPLOAD = process.env.REACT_APP_UPLOAD;
  const [fileUpload, setFileUpload] = useState({ cv: [], avatar: [] });
  const [previewAvatar, setPreviewAvatar] = useState("avatar.jpg");
  const [info, setInfo] = useState({
    name: "",
    avatar: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    description: "",
    cv: "",
  });
  let changeAvatar = useRef(null);
  useEffect(() => {
    axios
      .get(`${PORT}${INFO_USER}`)
      .then((result) => {
        let info = result["data"];
        if (info["avatar"]) {
          setPreviewAvatar(info["avatar"]);
        }
        setInfo(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onFileChangeCapture = (e) => {
    let file = e.target.files[0];
    setFileUpload({ ...fileUpload, [e.target.name]: file });
    if (e.target.name == "avatar") {
      const objectUrl = URL.createObjectURL(file);
      setPreviewAvatar(objectUrl);
    }
  };
  const avatarChangeClick = () => {
    changeAvatar.current.click();
  };
  const toDoChange = (e) => {
    setInfo((preInfo) => ({ ...preInfo, [e.target.name]: e.target.value }));
  };
  const updateInformation = (e) => {
    let infoBase = info;
    let files = fileUpload;
    let data = new FormData();
    _.forEach(files, (value, key) => {
      data.append(key, value);
    });
    // Display the key/value pairs
    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // axios({
    //   method: "PATCH",
    //   url: `${PORT}${INFO_USER}`,
    //   data: infoBase,
    // })
    //   .then(function (result) {
    //     //handle success
    //     console.log(result);
    //   })
    //   .catch(function (err) {
    //     //handle error
    //     console.log(err);
    //   });
    axios({
      method: "PATCH",
      url: `${PORT}${UPLOAD}`,
      data: data,
    })
      .then(function (result) {
        //handle success
        console.log(result);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };
  return (
    <>
      <MDBCard alignment="center" className="w-100">
        <MDBCardHeader style={{ textAlign: "left" }}>
          Edit Profile
        </MDBCardHeader>
        <MDBCardBody>
          <MDBRow className="my-3">
            <MDBCol className="d-flex justify-content-center">
              <div
                className="bg-img position-relative w-25"
                onClick={avatarChangeClick}
              >
                <img src={previewAvatar} alt="avatar" className="w-100" />
                <p className="position-absolute top-50 start-50 translate-middle text-white">
                  Upload
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <input
                name="avatar"
                ref={changeAvatar}
                type="file"
                style={{ display: "none" }}
                id="avatar"
                accept="image/*"
                onChangeCapture={onFileChangeCapture}
              />
              <MDBFile
                name="cv"
                accept=".pdf"
                onChangeCapture={onFileChangeCapture}
                className="mb-3"
                id="cvFile"
              />
              <MDBInput
                name="name"
                label="Full name"
                value={String(info["name"])}
                id="full_name"
                type="text"
                onChange={toDoChange}
              />
              <MDBInput
                name="email"
                onChange={toDoChange}
                className="my-3"
                label="Email"
                value={String(info["email"])}
                id="email"
                type="email"
              />
              <MDBInput
                name="address"
                onChange={toDoChange}
                label="address"
                value={info["address"]}
                id="address"
                type="text"
              />
              <MDBInput
                name="phone"
                onChange={toDoChange}
                className="my-3"
                label="Phone number"
                value={String(info["phone"])}
                id="phone_number"
                type="text"
              />

              <MDBInput
                name="summary"
                onChange={toDoChange}
                className="mb-3"
                label="Summary"
                value={String(info["summary"])}
                id="summary"
                type="text"
              />
              <MDBTextArea
                name="description"
                onChange={toDoChange}
                label="Description"
                value={String(info["description"])}
                id="description"
                rows={4}
              />
            </MDBCol>
          </MDBRow>
          <MDBBtn className="my-3" onClick={updateInformation} type="button">
            Update Profile
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
export default EditProfile;
