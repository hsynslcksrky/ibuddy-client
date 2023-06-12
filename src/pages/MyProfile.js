import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

function MyProfile() {
  const user = useContext(UserContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('profilePicture', selectedFile);

    // Make an API call to upload the file
    axios.post('http://localhost:3040/api/v1/uploads/upload', formData)
      .then(response => {
        // Handle the response
        console.log('File uploaded successfully');
      })
      .catch(error => {
        // Handle the error
        console.error('Error uploading file:', error);
      });
  };

  if (!user) {
    return null;
  }

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h1 className="text-danger h1">{user.name}</h1>
          <h1 className="lead text-danger">{user.email}</h1>
          <h1 className="text-danger h1">{user.role}</h1>
          <Form.Group controlId="fileUpload">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={handleFileSelect} />
          </Form.Group>
          <Button onClick={handleUpload}>Upload</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
