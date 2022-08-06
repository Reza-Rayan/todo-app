import React, { useState } from "react";
//adding icon
import send from '../../assets/paper-plane-solid.svg'

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="create-task">
      <input
        type="text"
        className="form-control w-75 d-inline-block"
        value={value}
        placeholder="کارهای روزمره خود را ثبت کنید ..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn  d-inline-block mx-2">
      <img src={send} width={24} />
      </button>
    </form>
  );
};

export default CreateTask;
