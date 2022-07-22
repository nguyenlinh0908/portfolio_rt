import Preview from "./preview/Preview";
import License from "./license/License";
const SideBar = () => {
  return (
    <>
      <div className="sticky-top text-center">
        <Preview />
        <License />
      </div>
    </>
  );
};
export default SideBar;
