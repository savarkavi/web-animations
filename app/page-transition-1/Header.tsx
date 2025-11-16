"use client";

import { useTransition } from "./TransitionProvider";

const Header = () => {
  const { playTransition } = useTransition();

  return (
    <div className="flex items-center justify-between p-6">
      <p className="text-3xl">Page Transition</p>
      <div className="flex items-center gap-12 text-xl">
        <p
          onClick={() => playTransition("/page-transition-1")}
          className="cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => playTransition("/page-transition-1/works")}
          className="cursor-pointer"
        >
          Works
        </p>
        <p
          onClick={() => playTransition("/page-transition-1/contact")}
          className="cursor-pointer"
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header;
