import React from "react";

const TopArrow = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute right-0 top-1000" onClick={handleTop}>
      <a href="#header">
        <p className="transform rotate-90 text-black tracking-widest">
          BACK TO TOP
        </p>
      </a>
    </div>
  );
};

export default TopArrow;
