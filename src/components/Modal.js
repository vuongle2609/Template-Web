import useStore from "./../Store";
export default function Modal() {
  const { modal, setModal, setLeft, setDark, setNavMode } = useStore();

  return (
    <div
      className={
        "fixed top-[30px] bottom-[30px] right-[30px] w-[20%] bg-white dark:bg-sdarks transition-all duration-150 z-[40]" +
        (modal ? " block " : " hidden ") +
        " border-2 border-dashed border-slights dark:border-textGray dark:text-white flex flex-col"
      }
    >
      <i className="bx bx-x text-5xl" onClick={setModal}></i>
      <div className="mt-7 cursor-pointer flex flex-wrap w-full px-2 justify-between">
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setLeft(true)}
        >
          left
        </span>
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setLeft(false)}
        >
          right
        </span>
      </div>
      <div className="mt-7 cursor-pointer flex flex-wrap w-full px-2 justify-between">
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setDark(true)}
        >
          dark
        </span>
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setDark(false)}
        >
          light
        </span>
      </div>
      <div className="mt-7 cursor-pointer flex flex-wrap w-full px-2 justify-between">
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setNavMode(true)}
        >
          nav top
        </span>
        <span
          className="dark:text-white text-xl bg-slights dark:bg-bdark p-2"
          onClick={() => setNavMode(false)}
        >
          nav side
        </span>
      </div>
    </div>
  );
}
