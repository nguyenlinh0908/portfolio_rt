import Avatar from "./components/Avatar";
import FullName from "./components/FullName";
import Work from "./components/Work";
import axios from "axios";
import { useState, useEffect } from "react";
const Preview = () => {
  let [info, setInfo] = useState({});
  useEffect(() => {
    const HOST = process.env.REACT_APP_HOST;
    const INFO_USER = process.env.REACT_APP_INFO_USER;
    axios
      .get(`${HOST}${INFO_USER}`)
      .then((result) => {
        let information = result["data"];
        setInfo(information);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Avatar avatar={info["avatar"]} />
      <FullName name={info["name"]} />
      <Work work={info["work"]} address={info["address"]} />
    </>
  );
};

export default Preview;
