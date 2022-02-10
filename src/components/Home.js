import { useEffect, useState } from "react";
import useStore from "./../Store";

export default function Home() {
  const { isLeft, setLeft } = useStore();
  return (
    <div className={`flex flex-col ${isLeft ? "items-start" : "items-end"}`}>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
      <h1 className="dark:text-white w-fit mb-10">
        Content Content Content Content
      </h1>
    </div>
  );
}
