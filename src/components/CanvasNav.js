import useStore from "./../Store";

export default function CanvasNav() {
  const { sideNav, setSideNav, isLeft, navMode } = useStore();

  const handleNavPosition = () => {
    if (isLeft) {
      return sideNav ? " ml-0 " : " -ml-[300px] ";
    } else {
      return sideNav ? " mr-0 " : " -mr-[300px] ";
    }
  };

  return (
    <div
      className={
        "hidden h-screen w-[300px] bg-white dark:bg-sdarks transition-all duration-150" +
        handleNavPosition() +
        (navMode ? " md:hidden " : " md:flex ") +
        " border-r-2 border-dashed border-slights dark:border-textGray flex flex-col p-5"
      }
    >
      <i className="bx bx-x text-5xl" onClick={setSideNav}></i>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
      <h1 className="dark:text-white mb-2">option</h1>
    </div>
  );
}
