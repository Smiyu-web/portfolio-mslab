import React from "react";

type Props = {
  no: string;
  title: string;
  className?: string;
};

const Title = ({ no, title, className }: Props) => {
  return (
    <div className="flex font-bold md:pt-8">
      <div className="text-sm md:text-lg lg:text-2xl pr-5">{no}/</div>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
