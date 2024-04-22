import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allapi'
import VideoCard from './VideoCard'





function View({updatedState}) {
      
  const [allVideos,setAllVideos]=useState({})

  // state to update delete
const [deleteUpdate,setDeleteUpdate]=useState({})


  const acceessAllVideos=async()=>{
    const result= await getAllVideos()
    if(result.status>=200 && result.status<300){
      // console.log(result.data);
      setAllVideos(result.data)
    }
  }

  console.log(allVideos);
  useEffect(()=>{
    acceessAllVideos()
  },[updatedState,deleteUpdate])

  return (
    <Row>
        {
          allVideos.length>0?(
            allVideos.map(i=>
            <Col lg={4} md={6} sm={6}> <VideoCard deleteFunc={setDeleteUpdate} video={i}></VideoCard></Col> 

              )
          ): <h1>No videos in your Collection</h1>
        }
    </Row>
  )
}

export default View