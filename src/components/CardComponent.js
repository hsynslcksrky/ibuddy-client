import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';

function CardComponent({ post }) {
  let navigate = useNavigate();
  const handleClick = (postId) => {
    navigate(`/post/${postId}`);
  };
  const handleDownload = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3007/api/v1/posts/pdf/${postId}`);
      const blob = await response.blob();
      saveAs(blob, 'post.pdf');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Card className='my-1'>
      <Card.Header>posted on   {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(new Date(post.createdAt))}
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Button variant="primary" onClick={() => handleClick(post.id)}>See the post</Button>
        <br />
        <Button variant="danger" onClick={() => handleDownload(post.id)}>See the post</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;