import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar(options) {
  return (
    <div className="w-full bg-appSemiDark h-[6.2rem] rounded-t-lg flex justify-between items-center px-8">
      <Link to="/Home" className="flex items-center">
        {/* <div
          className="back-btn"
          // onClick={() => navigate(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<rect x="2" y="6" width="18" height="12" rx="3" fill="#ffffff" opacity="0"></rect><rect x="2" y="6" width="18" height="12" rx="3"></rect><polyline points="20 10 22 10 22 14 20 14"></polyline></svg>
        </div> */}
        <div
          className="w-[3.6rem] h-[3.6rem] bg-center bg-cover rounded-full mr-2"
          style={{
            backgroundImage: `url('https://media.discordapp.net/attachments/914572068123721788/924219001180127292/bot.png?width=676&height=676')`,
          }}
        ></div>
        <span className="text-[1.8rem] text-white">Paff Wandering</span>
      </Link>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<line x1="21" x2="3" y1="18" y2="18"></line><line x1="21" x2="3" y1="12" y2="12"></line><line x1="21" x2="3" y1="6" y2="6"></line></svg>

      {/* <div className="flex">
          <OldSchoolMenuLink to="/Home">
            <span
              onClick={() => {
                localStorage.removeItem("searchdata");
              }}
              className=""
            >
              Home
            </span>
          </OldSchoolMenuLink>
          <OldSchoolMenuLink to="/">
            <span className="">Search</span>
          </OldSchoolMenuLink>
          <OldSchoolMenuLink to="/">
            <span className="">Favorite</span>
          </OldSchoolMenuLink>
          <OldSchoolMenuLink to="/">
            <span className="">history</span>
          </OldSchoolMenuLink>
          <OldSchoolMenuLink to="/">
            <span className="">Random</span>
          </OldSchoolMenuLink>
        </div> */}
    </div>
  );
}

function OldSchoolMenuLink({ children, to, id }) {
  const location = useLocation();
  const match = location.pathname === to;

  return (
    <div className={"text-white text-[1.6rem] w-[14rem]" + (match ? " text-primary border-b-2 border-primary " : "")} id={id}>
      <Link to={to}>{children}</Link>
    </div>
  );
}

// function NavBara() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="popular">
//         <Link to="/Home" className="logo">
//           <div className="back-btn" onClick={() => navigate(-1)}>
//             <box-icon color="#fff" name="arrow-back"></box-icon>
//           </div>
//           <div
//             className="logo-img"
//             style={{
//               backgroundImage: `url('https://media.discordapp.net/attachments/914572068123721788/924219001180127292/bot.png?width=676&height=676')`,
//             }}
//           ></div>
//           <span>Paff Wandering</span>
//         </Link>
//         <div className="nav">
//           <OldSchoolMenuLink to="/Home">
//             <span
//               onClick={() => {
//                 localStorage.removeItem("searchdata");
//               }}
//               className="nav-items"
//             >
//               Home
//             </span>
//           </OldSchoolMenuLink>
//           <OldSchoolMenuLink to="/Search" id="search">
//             <span className=" nav-items">Search</span>
//           </OldSchoolMenuLink>
//           <OldSchoolMenuLink to="/More?typeload=collection" id="collection">
//             <span className=" nav-items">Favorite</span>
//           </OldSchoolMenuLink>
//           <OldSchoolMenuLink to="/More?typeload=history" id="history">
//             <span className=" nav-items">history</span>
//           </OldSchoolMenuLink>
//           <OldSchoolMenuLink to="/AnimeDetail?random=true" id="random">
//             <span className=" nav-items">Random</span>
//           </OldSchoolMenuLink>
//         </div>
//       </div>
//     </>
//   );
// }
