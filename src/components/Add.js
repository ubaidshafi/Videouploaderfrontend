
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapi';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({ update}) {
  // state to hold input datas

  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    cover_image: "",
    video_url: ""
  })

  // function for onChange
  const setValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })


  }

  // function to extract video url
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    //  console.log( videoUrl);
    if (videoUrl.includes("v=")) {
      let subUrl = videoUrl.split("v=")[1]
      console.log(subUrl);
      let finalUrl = `https://www.youtube.com/embed/${subUrl}autoplay=1`
      setInputs({ ...inputs, ["video_url"]: finalUrl })

    }



  }
  // function to add button click

  const addHandle = async () => {
    let id = uniqid()
    // console.log(id);

    setInputs({ ...inputs, ["id"]: id })

    const { caption, cover_image, video_url } = inputs

    if (caption == "" || cover_image == "" || video_url == "") {
      toast.error('all inputs are required', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else {

      const result = await addVideo(inputs)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
   
        // update state of home
 update(result.data)

        toast.success('Video added', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        setShow(false)
      }
    }

  }



  console.log(inputs);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);//
  const handleShow = () => setShow(true);

  return (
    <div>

      <i onClick={handleShow} class="fa-solid fa-upload fa-flip fa-3x text-warning"></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='bg-black border'>
          <Modal.Title> <h3>Upload Video</h3></Modal.Title>

          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3 text-dark"
          >
            <Form.Control name='caption' onChange={(e) => setValues(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput1"
            label="Cover Image Url"
            className="text-dark"
          >
            <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="text" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput2"
            label="Youtube Video Url"
            className="text-dark mt-3 mb-3"
          >
            <Form.Control onChange={(e) => extractUrl(e)} type="text" />
          </FloatingLabel>



        </Modal.Body>
        <Modal.Footer className='bg-black border'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add