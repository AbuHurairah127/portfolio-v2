import React, { useState } from "react";

const Year = () => {
  const this_year = new Date().getFullYear();
  const [year] = useState(this_year);
  return <span>{year}</span>;
};

export default Year;
