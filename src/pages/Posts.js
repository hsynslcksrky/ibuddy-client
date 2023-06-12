import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import postService from '../services/postService';
import Form from 'react-bootstrap/Form';

function Posts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const posts = await postService.getPosts();
    console.log(posts);
    setPosts(posts)
  }
  useEffect(() => {
    getPosts()
    return () => {
    };
  }, []);

  return (
    <Container>

      <Form.Select className='my-3' aria-label="Default select example">
        <option>Filter by</option>
        <option value="2">newest</option>
        <option value="1">oldest</option>
      </Form.Select>
      <Row>

        {posts.length > 0 ? posts.map((post) => (
          <Col xs={12} md={6}>
            <CardComponent key={post.id} post={post} />
          </Col>

        )):
        <h1 className='text-light'>no posts yet</h1>
        }
      </Row>
    </Container>
  )
}

export default Posts