const FullName = (props) => {
  let { name } = props;
  return (
    <>
      <div>
        <h1 className="text-center">{name}</h1>
      </div>
    </>
  );
};
export default FullName;
