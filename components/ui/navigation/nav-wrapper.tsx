"use client";

import React, { useState } from "react";

interface NavigationWrapperProps {
  className?: string;
}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({
  className = "",
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavigation(event: React.MouseEvent) {
    event.preventDefault();

    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav className="flex flex-row-reverse justify-between text-primary-foreground ">
      <button className="block md:hidden" onClick={toggleNavigation}>
        X
      </button>
      <div
        className={`flex flex-col md:flex-row gap-8 transition-all duration-300 fixed md:static top-0 bg-primary md:bg-none w-40 md:w-full min-h-screen md:min-h-min items-end z-10 ${
          isNavbarOpen ? "right-0 flex-col px-5" : "-right-[100%]"
        }`}
      >
        <button
          className="block md:hidden w-max mt-3"
          onClick={toggleNavigation}
        >
          X
        </button>
        <a href="">home</a>
        <a href="">about us</a>
        <a href="">share</a>
      </div>
    </nav>
  );
};

export default NavigationWrapper;
