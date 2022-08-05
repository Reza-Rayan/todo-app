import React from "react";
import { Col, Row } from "react-bootstrap";

const Task = ({ task, index, completeTask, removeTask, editTasks }) => {
  return (
    <Row 
      className="task p-2 my-2 mt-4 container-fluid  m-auto"
      style={{  filter: task.completed ? "contrast(0.2)" : "" }}
    >
      <Col md={6}>
        <p className="d-inline-block">{task.title}</p>
      </Col>
      <Col md={6}>
        <button
          className="btn btn-outline-info d-inline-block mx-1"
          onClick={() => completeTask(index)}
        >
          <i className="fa fa-check"></i>
        </button>
        <button
          className="btn btn-outline-danger d-inline-block mx-1"
          onClick={() => removeTask(index)}
        >
          <i className="fa fa-trash"></i>
        </button>
        <button
          className="btn d-inline-block btn-outline-success"
          onClick={() => editTasks(index)}
        >
          <i className="fa fa-edit"></i>
        </button>
      </Col>
    </Row>
  );
};

export default Task;
