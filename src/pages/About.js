import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Container>
        <Row className='text-center'>
        <h2>About Our Company</h2>
        </Row>
        <Row>
          <Col md={6}>
            <Image src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us 1" fluid />
          </Col>
          <Col md={6}>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil minima reprehenderit sapiente officiis accusantium, doloribus perspiciatis molestias provident in consectetur optio quia sint ipsam odit architecto dolor pariatur recusandae.
            Tempora iusto facilis magnam, nisi ipsam perspiciatis sapiente? Officia ad veniam atque ullam, delectus perferendis quisquam id sint aperiam perspiciatis enim voluptatum voluptate ducimus nemo? Ducimus hic est officia nostrum.
            Cumque iste porro expedita voluptatem fugit aliquam, nesciunt repellendus obcaecati culpa saepe tempore molestiae odio. Illum rem numquam sed suscipit debitis ea? Dignissimos modi, dolorem non sapiente qui numquam quaerat!
            Magnam laboriosam quasi quam libero sed, rem officiis iste esse architecto fugit illo molestiae dignissimos omnis doloribus ex placeat nostrum accusantium eius? Quae debitis esse eligendi earum, veritatis sit possimus.
            Laboriosam laudantium magnam mollitia cum obcaecati cupiditate debitis, architecto ipsam a aut, quis fuga voluptas rerum at, repudiandae accusamus voluptate adipisci vel officiis perferendis? Quae distinctio quasi voluptates architecto enim?</p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6}>
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti inventore saepe iure repellat est sunt illum voluptatum amet neque ad veniam odit dolorum officia pariatur quia, soluta, similique perspiciatis iusto?
            Ea cumque nobis sed a? Quas consequuntur adipisci laudantium, officia dignissimos fugit voluptatum asperiores atque pariatur necessitatibus cumque ullam ducimus illo amet natus nesciunt! Sed rerum sequi nihil doloribus cupiditate?
            Voluptas autem accusantium fugiat doloremque odit, ullam praesentium voluptatum molestias. Aut illo quasi aliquam qui, temporibus magnam distinctio iste repudiandae atque! Sunt neque quaerat nemo facere, dolore impedit nihil optio.
            Assumenda suscipit perspiciatis dolores nisi non soluta tempora et incidunt, vel autem adipisci sit libero fugiat. Error expedita recusandae hic natus delectus. Sed repudiandae dolorum perspiciatis velit nam sapiente natus.
            Aspernatur a quasi dignissimos alias ut distinctio officiis. Explicabo consectetur fugit ipsum, ex molestiae dicta eligendi maiores consequuntur pariatur? Numquam possimus repellendus tempora culpa velit saepe perspiciatis, aspernatur ipsam eaque?</p>
          </Col>
          <Col md={6}>
            <Image src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us 2" fluid />
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <Container>
          <p>&copy; 2023 My Company. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default AboutUsPage;
