import { useEffect, useState } from "react";
const Avatar = (props) => {
  let { avatar } = props;
  return (
    <>
      <div className="my-3">
        <img
          className="w-75 square bg-primary rounded-circle"
          src={process.env.REACT_APP_LOADER + avatar}
          alt="avatar"
        />
      </div>
    </>
  );
};
export default Avatar;
