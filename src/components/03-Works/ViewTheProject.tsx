import { log } from "console";
import { useRouter } from "next/router";
import React from "react";
// import { useHistory } from "react-router-dom";

type Props = { id: string };

const ViewTheProject = ({ id }: Props) => {
  // const history = useHistory();
  const router = useRouter();

  console.log(router);
  return (
    <h5
      className="tracking-wider mt-10"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      View The Project
      <div
        className="view_arrow text-xs tracking-wider"
        // onClick={() =>
        //   history.push({
        //     pathname: `workdetail/${props.id}`,
        //     state: { id: `${props.id}` },
        //   })
        // }
      >
        &rarr;
      </div>
    </h5>
  );
};

export default ViewTheProject;
