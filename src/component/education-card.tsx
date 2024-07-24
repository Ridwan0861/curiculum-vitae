import React from "react";

interface Props {
  nameschool: string;
  yearschool: string;
  descschool: string;
  bgColor?: string;
}

const EducationCard = (props: Props) => {
  const { nameschool, yearschool, descschool, bgColor } = props;

  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label>{nameschool}</label>
        <div>{yearschool}</div>
      </div>
      <p className="text-justify">{descschool}</p>
    </div>
  );
};

export default EducationCard;
