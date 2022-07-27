const Work = (props) => {
  let { work, address } = props;
  return (
    <>
      <div>
        <span className="text-info">{work} </span>
        <span>in {address}</span>
      </div>
    </>
  );
};
export default Work;
