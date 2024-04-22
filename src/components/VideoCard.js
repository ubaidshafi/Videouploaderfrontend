import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapi';
import uniqid from 'uniqid';
import {  format } from "date-fns";





function VideoCard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =  async()=> {
      
      setShow(true);
      // body

      // id
      var id=uniqid()

      // title
      var video_title=video.caption

      // url
      var url=video.video_url

      // date
      var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
        // console.log(date);


      
      const body={id,video_title,url,date}
      if(body){
        // api call
        const result =await addHistory(body)
        console.log(result);
      }
    }

    const handleDelete=async(id)=>{
      const result =await deleteVideo(id)
      if(result.status>=200 && result.data<300){
        deleteFunc(result.data)
      }
    
    }

   const dragStart=(e,id)=>{
    console.log("darg started ..... source card id-"+id);


    // store dragged  data
   e.dataTransfer.setData("cardId",id)

   }

  return (
    <div>


<Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='bg-black border border-dark p-2  ms-2 mt-2'
style={{ width: '13rem',height:'330px'}}>
      <Card.Img onClick={handleShow}
      style={{width:'100%',height:'250px'}} 
      variant="top" src={video.cover_image} />
      <Card.Body>
        <Card.Title> <h5 className='text-warning fs-6 display-6'>{video.caption}</h5>
        <div className='text-end'>


          <Trash2 onClick={()=>handleDelete(video.id)} size={42} className='text-danger btn'></Trash2>

        {/* <i class="fa-solid fa-trash fa-beat text-danger"></i> */}


        </div>
        </Card.Title>
       
      </Card.Body>
    </Card>
  

      <Modal show={show} onHide={handleClose}>
     
        <Modal.Body className='bg-black border border-danger'>
        <iframe width="100%" height="300" src={video.video_url} title="Kannur Squad Official Trailer | Mammootty | Roby Varghese Raj | Sushin Shyam | Mammootty Kampany" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>
        <Modal.Footer className='bg-black border border-danger'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard