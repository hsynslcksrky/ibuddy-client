import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Games() {
  const [games, setGames] = useState([])
  useEffect(()=>{
    fetchPosts();
  },[])

  const fetchPosts = async()=>{
    try{
      const response = await fetch('http://localhost:3040/api/v1/posts');
      const data = await response.json();
      setGames(data);
    } catch (error){
      console.log("error while fetching",error)
    }
  };

  const allGames = games.map(game =>(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={game.link} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>
        {game.content}
        </Card.Text>
        <Button variant="primary">Show more</Button>
      </Card.Body>
    </Card>
  ))

  return (
    <Card  className="d-flex flex-row justify-content-around" > {allGames}</Card>
    
  )
}

export default Games