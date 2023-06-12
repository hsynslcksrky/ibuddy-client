import React  from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function ProtectedLink({ name, link, roles , user }) {
  const isAuthorized = roles.includes(user?.role);
  return (
    <>
      {isAuthorized && <Nav.Link as={NavLink} to={link}> {name}</Nav.Link>}
      {console.log("name:")}
      {console.log(name)}
      {console.log(isAuthorized)}
      {console.log(link)}
      {console.log(user)}
    </>
  )
}

export default ProtectedLink;