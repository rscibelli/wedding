import React, { useState, useEffect } from 'react';
import "./SongRequest.css";
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { createSongRequest, getSongRequests } from '../functions';

export default function SongRequest() {
    const [show, setShow] = useState(false);
    const [song, setSong] = useState(null);
    const [artist, setArtist] = useState(null);
    const [name, setName] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [errors, setErrors] = useState({})

    useEffect(() => {
      populateTableData()
    }, [])

    const toggleShow = () => setShow(!show);

    const closeModal = () => {
      setErrors({})
      setSong(null)
      setArtist(null)
      setName(null)
      setShow(!show)
    }

    const postData = () => {
      const newErrors = findFormErrors()
      
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
      } else {
        let nameValue = ""
        if(name) {
          nameValue = name.target.value
        }

        let toPost = {
          song: song.target.value,
          artist: artist.target.value,
          name: nameValue
        }
        createSongRequest(toPost)
        console.log(toPost)
        setSong(null)
        setArtist(null)
        setName(null)
        setErrors({})
        setShow(!show)
      }
    }

    const populateTableData = async () => {
      let data = await getSongRequests()
      if (data) {
        let localTableData = []
        let rowNum = 1

        data.songs.forEach(request => {
          localTableData.push(
            <tr>
              <th scope="row">{rowNum++}</th>
              <td>{request.song}</td>
              <td>{request.artist}</td>
              <td>{request.name}</td>
            </tr>
          )
        })
        setTableData(localTableData)
      }
    }

    const findFormErrors = () => {
      const newErrors = {}
      if ( !song || song === '' ) newErrors.song = 'Song cannot be blank!'
      if ( !artist || artist === '' ) newErrors.artist = 'Artist cannot be blank!'
  
      return newErrors
    }

    return (
      <div>
        <div className="hero-image-song">
          <div className="hero-text-song">
          <div className="lead pb-3">Request a song to be played at the wedding!</div>

          <Button variant="btn btn-outline-primary" onClick={toggleShow}>Request a Song</Button>
          </div>
        </div>

        <div className='py-5 px-3'>
          <h3>Songs Requested</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Song</th>
                <th scope="col">Artist</th>
                <th scope="col">Requester</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
        </div>

        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Song Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group >
                <Form.Label>Song</Form.Label>
                <Form.Control type="text" onChange={setSong} isInvalid={ !!errors.song } />
                <Form.Control.Feedback type='invalid'>{ errors.song }</Form.Control.Feedback>

                <Form.Label>Artist</Form.Label>
                <Form.Control type="text" onChange={setArtist} isInvalid={ !!errors.artist } />
                <Form.Control.Feedback type='invalid'>{ errors.artist }</Form.Control.Feedback>

                <Form.Label>Your Name <small>(Optinal)</small></Form.Label>
                <Form.Control type="text" onChange={setName} />           
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={postData}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
}