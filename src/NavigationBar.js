// import { Nav, Navbar, Container,Dropdown,Form,Button } from 'react-bootstrap';


// function NavigationBar() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container className='justify-content-end'>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
//           <Navbar.Brand>IBuddy</Navbar.Brand>
        
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
//             <Nav.Link as={NavLink} to="/about">About</Nav.Link>
//             <Nav.Link as={NavLink} to="/games">Games</Nav.Link>
//             <Nav.Link as={NavLink} to="/premium">Try Premium</Nav.Link>
//           </Nav>
//           <Nav className="me-auto jusrify-content-end">
//             <Nav.Link as={NavLink} to="/" >Sign Up</Nav.Link>
//             <Nav.Link as={NavLink} to="/about">Sign In</Nav.Link>
           
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedLink from './components/ProtectedLink';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';


function CollapsibleExample() {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href='https://cdn.vox-cdn.com/thumbor/UVYRdMzdLJPn7Aa1ZxZRQZ6WMUU=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/16385004/acastro_190618_1777_cloud_gaming_0003.jpg'
       
        >
          <img 
          src='https://cdn.vox-cdn.com/thumbor/UVYRdMzdLJPn7Aa1ZxZRQZ6WMUU=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/16385004/acastro_190618_1777_cloud_gaming_0003.jpg'
          alt='asdasdas'
          width="30"
          height="30"
          />
          IBuddy</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoading ? <>
              loading
            </>
              :
              !isAuthenticated ?
                <>
                  <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </> :
                <>
                  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link as={NavLink} to="/games">Games</Nav.Link>
                  <Nav.Link as={NavLink} to="/welcome">welcome</Nav.Link>
                  <ProtectedLink name="Create" link="/create" user={user}  roles={['admin','author']}/>
                  <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
                  <Nav.Link as={NavLink} to="/profile">Users</Nav.Link>
                  <Nav.Link as={NavLink} to="/myprofile">MyProfile</Nav.Link>
                  <ProtectedLink name="User Management" link="/users" user={user}  roles={['admin']}/>
                  
                </>
            }
            
          </Nav>

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;