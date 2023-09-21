import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

type CourseInputProps = {
  onAddGoal: (enteredValue: string) => void;
};

const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const goalInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.currentTarget.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
