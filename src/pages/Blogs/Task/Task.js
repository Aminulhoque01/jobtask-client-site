import React from "react";
import { Col, Image } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const { description, title, image, _id } = task;

  const deletetask = (task) => {

    fetch(`https://task-server-aminulhoque01.vercel.app/delete-task/${task._id}`, {
      method: "DELETE",
      headers: {
          'content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          
          toast.success("User Deleted Successfully!!");
          console.log(data);
        }
      });
  };

  return (
    <div>
      <Col>
        <div min-height={"450px"} class="card">
          <div class="card-body">
            <Image width={"100%"} src={image} rounded />
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description.slice(0, 100) + "..."}</p>
            <Link to={`/single/${_id}`} class="btn btn-primary">
              see more
            </Link>
            <button onClick={()=>deletetask(task)}  class="btn btn-danger">delete</button>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Task;
