import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="create-task" >
      <input
        type="text"
        className="form-control w-75 d-inline-block"
        value={value}
        placeholder="کارهای روزمره خود را ثبت کنید ..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn text-light d-inline-block mx-2">
        <i className="fa fa-send"></i>
      </button>
    </form>
  );
};

export default CreateTask;
