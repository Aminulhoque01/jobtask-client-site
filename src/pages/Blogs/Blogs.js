import React, { useEffect, useState } from "react";
import Task from "./Task/Task";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const Blogs = () => {
  const [tasks, useTask] = useState([]);

  useEffect(() => {
    fetch("https://task-server-aminulhoque01.vercel.app/alltask")
      .then((res) => res.json())
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .then((data) => useTask(data));
  });

  return (
    <div className="m-5 ">
      <Container>
        <Row sm={4}>
          {tasks.map((task) => (
            <Task key={task._id} task={task}></Task>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
