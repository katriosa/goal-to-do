import React from "react";

import "./CourseGoalItem.css";

type CourseGoalItemProps = {
  id: string;
  onDelete: (id: string) => void;
  text: string;
};

const CourseGoalItem = ({ id, onDelete, text }: CourseGoalItemProps) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default CourseGoalItem;
