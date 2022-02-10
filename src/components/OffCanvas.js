import useStore from "./../Store";

export default function OffCanvas() {
  const { sideNav, setSideNav, isLeft } = useStore();

  const handleNavPosition = () => {
    if (isLeft) {
      return sideNav ? " left-0 " : " -left-[82%] ";
    } else {
      return sideNav ? " right-0 " : " -right-[82%] ";
    }
  };

  return (
    <>
      <div
        className={
          "fixed top-0 bottom-0 w-[82%] md:hidden bg-white dark:bg-sdarks transition-all duration-150 z-[51]" +
          handleNavPosition() +
          " border-r-2 border-dashed border-slights dark:border-textGray flex flex-col"
        }
      >
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
        <h1 className="dark:text-white mb-2">option</h1>
      </div>
      {sideNav ? (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-modalw dark:bg-modal opacity-ani md:hidden"
          onClick={setSideNav}
        ></div>
      ) : (
        false
      )}
    </>
  );
}
