const Summary = (props) => {
  let { summary } = props;
  return (
    <>
      <div className="text-black-50">
        <span>{summary}</span>
      </div>
    </>
  );
};
export default Summary;
