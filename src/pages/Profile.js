import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3040/api/v1/users');
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.log('Error while fetching:', error);
    }
  };

  const profilesPerRow = 4;
  const numRows = Math.ceil(profile.length / profilesPerRow);

  const profileRows = [];

  for (let i = 0; i < numRows; i++) {
    const startIndex = i * profilesPerRow;
    const endIndex = (i + 1) * profilesPerRow;

    const rowProfiles = profile.slice(startIndex, endIndex);

    const row = (
      <Row key={i} className="mb-4">
        {rowProfiles.map((game) => (
          <Col key={game.id} xs={12} sm={6} md={3} className="d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={game.picture} />
              <Card.Body>
                <Card.Title>{game.firstName}</Card.Title>
                <Card.Text>{game.email}</Card.Text>
                <Button variant="primary">Show more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );

    profileRows.push(row);
  }

  return <Container>{profileRows}</Container>;
}

export default Profile;
