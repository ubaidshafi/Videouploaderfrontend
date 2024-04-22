import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import Categories from '../components/Categories'
import View from '../components/View'






function Home() {

  // state for state-lifting
  const [addUpdate,setAddUpdate]=useState({})
  return (
    <div className='mt- 5'>
      <Row>
        <Col>
          <h2 className='mt-5 ps-5 mb-4'>
            <span>
              Uploading Videos
            </span>
          </h2>
          <div className='m-5  ps-5'>

            <Link to={'/watch-history'} style={{textDecoration:'none'}}>
            <a className='text-warning fs-3' style={{ textDecoration: 'none', fontFamily: 'Satisfy,cursive' }}>
              <i class="fa-solid fa-clock  fa-fade text-warning mt-2"></i>  View Watch History </a>

              </Link>
              
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam fugiat, perferendis iste rerum error ipsam hic facilis dolores asperiores neque vel, consequuntur possimus ipsa? Error beatae ea neque porro.
            </p>
          </div>
        </Col>
        <Col className='text-center'>
          <img style={{ width: '400px', height: '400px' }}
            src="https://i.postimg.cc/j5VWw1T0/loading.gif" alt="" />
        </Col>
      </Row>
      <Row className='p-5'>
        <Col lg={1}>

          <Add update={setAddUpdate}></Add>

        </Col>
        <Col lg={7}>

          <View updatedState={addUpdate}></View>

        </Col>
        <Col lg={4}>

          <Categories></Categories>

        </Col>
      </Row>
    </div>

  )
}

export default Home