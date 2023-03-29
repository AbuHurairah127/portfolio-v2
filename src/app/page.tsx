import ScrollWrapper from "@/components/scrollRapper";
import React, { useRef } from "react";

const page = () => {
  return (
    <div data-scroll-container className="bg-primary w-screen scroll-smooth">
      <ScrollWrapper />
    </div>
  );
};

export default page;
