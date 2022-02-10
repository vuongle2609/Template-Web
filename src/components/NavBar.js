import { Link } from "react-router-dom";
import useStore from "../Store";

export default function NavBar() {
  const { isDark, setDark, setSideNav, setModal, navMode } = useStore();

  console.log(navMode);

  return (
    <div className="flex w-full bg-white dark:bg-bdark h-[62px] md:rounded-t-lg dark:text-white justify-between select-none items-center px-4">
      <Link to="/Home" className="flex items-center">
        <div
          className="w-[36px] h-[36px] bg-center bg-cover rounded-full mr-2"
          style={{
            backgroundImage: `url('https://media.discordapp.net/attachments/914572068123721788/924219001180127292/bot.png?width=676&height=676')`,
          }}
        ></div>
        <span className="text-[18px] ">Paff Wandering</span>
      </Link>
      <div className={navMode ? " hidden md:flex" : " hidden"}>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
        <h1 className="dark:text-white mr-20">option</h1>
      </div>

      <div className="flex cursor-pointer text-3xl">
        {!navMode ? <i class="bx ml-2 bx-menu hidden md:block" onClick={setSideNav}></i> : false}
        <i class="bx ml-2 bx-menu md:hidden" onClick={setSideNav}></i>
        {!isDark ? (
          <i class="bx ml-2 bx-moon" onClick={() => setDark(true)}></i>
        ) : (
          <i class="bx ml-2 bx-sun" onClick={() => setDark(false)}></i>
        )}
        <i class="bx ml-2 bx-cog" onClick={setModal}></i>
      </div>
    </div>
  );
}
