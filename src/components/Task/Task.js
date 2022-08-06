//adding icons
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import check from "../../assets/check.svg";

const Task = ({ task, index, completeTask, removeTask, editTasks }) => {
  return (
      <div
        className="task p-2    my-2"
        style={{ filter: task.completed ? "contrast(0.2)" : "" }}
      >
        <div className="d-inline-block  taskTitle">
          <p className="d-inline-block ">{task.title}</p>
        </div>
        <div className="d-inline-block buttonsDiv"  >
          <button
            className=" edit-btn d-inline-block mx-1"
            onClick={() => editTasks(index)}
          >
            <img src={edit} />
          </button>
          <button
            className=" edit-btn d-inline-block mx-1"
            onClick={() => removeTask(index)}
          >
            <img src={trash} />
          </button>
          <button
            className=" edit-btn d-inline-block mx-1"
            onClick={() => completeTask(index)}
          >
            <img src={check} />
          </button>
        </div>
      </div>
  );
};

export default Task;
