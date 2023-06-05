import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import { toast } from "react-hot-toast";

const SingleTaks = () => {
  const single = useLoaderData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddUpdate = (_id) => {



    fetch(`https://task-server-aminulhoque01.vercel.app/task/?${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.modifiedCount > 0) {
          toast.success(`Updated Successfully`);
          
        }
      });
  };

  return (
    <div className="m-5">
      <div className="pt-5">
        <Container>
          <Card>
            <Card.Img variant="top" src={single.image} />
            <Card.Body>
              <Card.Title>{single.title}</Card.Title>
              <Card.Text>{single.description}</Card.Text>

              <Button variant="primary" onClick={handleShow}>
                update
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleAddUpdate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
              {single.title}
            </Form.Group>
            <Form.Group className="mb-3">
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
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SingleTaks;
