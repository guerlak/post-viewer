import React from "react";
import { Card, Company, Description } from "./style";
import { FaArrowAltCircleRight } from "react-icons/fa";

const User = ({ data, handleSelect, isSelected }) => {
  return (
    <Card isSelected={isSelected}>
      <Company>{data.company.name}</Company>
      <Description>
        <div>
          <strong>{data.name}</strong>
          <p>{data.email}</p>
        </div>
        <button onClick={() => handleSelect()}>
          <FaArrowAltCircleRight size={32} />
        </button>
      </Description>
    </Card>
  );
};

export default User;
