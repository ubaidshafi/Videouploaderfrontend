
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function LandingPage() {
  return (
    <div>
        <Container>
            <Row className='mt-3'>
                <Col  lg={6}>
                <div className='mt-5'>
                    <h1>Video Uploader</h1>
                    <p className='fs-4 mt-4 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eum ullam in expedita iste ab, delectus dicta rerum reprehenderit. Autem inventore aliquid, accusantium eum ullam expedita cupiditate dolor? Dolore, quo.</p>
                   <Link to={'/home'}>
               
                   
                   <Button id='b1' className='btn ms-3'> <b> Get Started </b> <i class="fa-brands fa-fade fa-google-play"></i></Button>

                   </Link>
                </div>
                </Col>
                <Col>
                <img className='w-75 mt-4  ms-5 mb-5'  src="https://cdn.dribbble.com/users/1858234/screenshots/4250466/google-play-loader-animation-800x600.gif" alt="" />
                </Col>

            </Row>
            <Row className='mt-5 mb-5 py-5'>
              <h1 className='mb-5 text-center'><span>Features</span></h1>
                <Col>
                <Card className='bg-black border border-dark text-white ' style={{ width: '18rem' }}>
      <Card.Img varient="top" src="https://i.postimg.cc/Z5QStSXk/download1.jpg" />
      <Card.Body className='p-5'>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>

                <Col>
                <Card className='bg-black border border-dark text-warning ' style={{ width: '18rem' }}>
      <Card.Img varient="top" src="https://i.postimg.cc/nLnyJQWj/f9ddef8eb2c99a87e425f5b16edf9dd3-aa.gif" />
      <Card.Body className='p-5'>
        <Card.Title>  Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>
                <Col>
                <Card className='bg-black border border-dark text-success ' style={{ width: '18rem' }}>
      <Card.Img varient="top" src="https://i.postimg.cc/hGD7dcvz/ff620854b85ca2824e8e3b6b3e5d079e212.gif" />
      <Card.Body className='p-5'>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default LandingPage