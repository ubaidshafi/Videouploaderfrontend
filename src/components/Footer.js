
import React from 'react'
import { Col, Row } from 'react-bootstrap'




function Footer() {
    return (
        <div className=' p-3'>
            <hr />
            <Row className='mt-3 ps-2'>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <img
                        alt=""
                        src="https://i.postimg.cc/BvspWpkH/video1.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-1 mt-2"
                    />{' '}
                    <b className='fs-3'> <span>V</span>ideo <span>P</span>layer </b>
                    <br />
                    <h5 className='mt-2 p-2'>Video communication refers to the transmission of information via live video streaming or through video sharing.</h5>
                </Col>

                <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>

                    <h5>Links</h5>

                    <a className='fs-5' style={{ textDecoration: 'none', color: 'green' }} href="">Landing Page</a><br />
                    <a className='fs-5' style={{ textDecoration: 'none', color: 'green' }} href=""> Home</a> <br />

                    <a className='fs-5' style={{ textDecoration: 'none', color: 'green' }} href="">History</a> <br />


                </Col>

                <Col lg={3} md={6} sm={12} xs={12}>
                    <h4>Guides</h4>
                    <h5>React</h5>
                    <h5>React bootstrap</h5>
                    <h5>Routing</h5>
                </Col>

                <Col lg={3} md={6} sm={12} xs={12}>
                    <h5 className='text-danger'>Contact Us</h5>
                    <input type="text" className='form-control w-75' placeholder='enter-email' />
                    <button className='btn btn-danger w-75 mt-3'>Send</button><br />
                    <i class="fa-brands fa-instagram text-danger fa-2x mt-3"></i>
                    <i class="fa-brands fa-facebook text-primary fa-2x mt-3 ms-5"></i>
                    <i class="fa-brands fa-twitter text-primary fa-2x mt-3 ms-5"></i>
                    <i class="fa-brands fa-github text-dark fa-2x mt-3 ms-5"></i>

                </Col>

            </Row>
        </div>
    )
}

export default Footer