const Intro = (props) => {
  let { name } = props;
  return (
    <>
      <h1 className="text-dark">Hi! I'm {name}</h1>
    </>
  );
};
export default Intro;
