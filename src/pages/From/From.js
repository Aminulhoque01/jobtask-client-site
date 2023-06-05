import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-hot-toast";

const From = () => {
  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const description = form.description.value;

    console.log(name, url, description);

    const AddProducts = {
      title: name,
      image: url,
      description,
    };

    fetch(`https://task-server-aminulhoque01.vercel.app/addtask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(AddProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("successful your product add");
          form.reset("");
        }
      });
  };

  return (
    <div className="m-5">
      <h3 className="text-primary text-center">Add projects</h3>
      <div className="mx-auto">
        <Form onSubmit={handleAdd}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="name" name="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="url" name="url" placeholder="Enter image url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="description"
              as="textarea"
              rows={3}
              placeholder="description"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default From;
